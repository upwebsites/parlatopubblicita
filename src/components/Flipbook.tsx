"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";

/* eslint-disable @typescript-eslint/no-explicit-any */

function getJQuery(): any {
  return (window as unknown as Record<string, any>).jQuery;
}

interface FlipbookProps {
  bookId: string;
  pdfSrc: string;
  coverColor?: string;
  title?: string;
}

export default function Flipbook({
  bookId,
  pdfSrc,
  coverColor = "from-orange-400 to-orange-600",
  title,
}: FlipbookProps) {
  const flipbookRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [pdfPages, setPdfPages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const getPdfLib = useCallback(async () => {
    const pdfjsLib = await import("pdfjs-dist");
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
    return pdfjsLib;
  }, []);

  const renderPdfPage = useCallback(async (pdf: any, pageNum: number): Promise<string> => {
    const page = await pdf.getPage(pageNum);
    const baseViewport = page.getViewport({ scale: 1 });
    const targetWidth = 400;
    const renderScale = targetWidth / baseViewport.width;
    const viewport = page.getViewport({ scale: renderScale });
    const canvas = document.createElement("canvas");
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    await page.render({ canvasContext: ctx, viewport }).promise;
    const dataUrl = canvas.toDataURL("image/jpeg", 0.5);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = 0;
    canvas.height = 0;
    return dataUrl;
  }, []);

  useEffect(() => {
    let cancelled = false;
    const loadCover = async () => {
      try {
        const pdfjsLib = await getPdfLib();
        const pdf = await pdfjsLib.getDocument({ url: pdfSrc }).promise;
        if (cancelled) return;
        const img = await renderPdfPage(pdf, 1);
        if (!cancelled) setCoverImage(img);
      } catch (e) {
        console.error("Cover load failed:", pdfSrc, e);
      }
    };
    loadCover();
    return () => { cancelled = true; };
  }, [pdfSrc, renderPdfPage, getPdfLib]);

  useEffect(() => {
    const loadScripts = async () => {
      if (getJQuery()) {
        setScriptsLoaded(true);
        return;
      }
      await new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js";
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
      await new Promise<void>((resolve) => {
        const script = document.createElement("script");
        script.src = "/turn.min.js";
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
      setScriptsLoaded(true);
    };
    loadScripts();
  }, []);

  const loadPdfPages = useCallback(async () => {
    if (pdfPages.length > 0) return;
    setLoading(true);
    try {
      const pdfjsLib = await getPdfLib();
      const pdf = await pdfjsLib.getDocument({ url: pdfSrc }).promise;
      const totalPages = pdf.numPages;
      const images: string[] = [];
      for (let i = 1; i <= totalPages; i++) {
        const img = await renderPdfPage(pdf, i);
        images.push(img);
        setPdfPages([...images]);
      }
    } catch (e) {
      console.error("PDF load failed:", pdfSrc, e);
    }
    setLoading(false);
  }, [pdfSrc, pdfPages.length, renderPdfPage, getPdfLib]);

  useEffect(() => {
    if (!isOpen || !scriptsLoaded || !flipbookRef.current) return;
    if (loading || pdfPages.length === 0) return;

    const $ = getJQuery();
    if (!$) return;

    const $el = $(flipbookRef.current);
    if ($el.data("turn")) return;

    const node = flipbookRef.current;

    $el.turn({
      width: 800,
      height: 560,
      autoCenter: true,
      display: "double",
      duration: 800,
      gradients: true,
      elevation: 50,
    });

    return () => {
      if (node) {
        const $el2 = $(node);
        if ($el2.data("turn")) {
          $el2.turn("destroy").html("");
        }
      }
    };
  }, [isOpen, scriptsLoaded, pdfPages, loading]);

  const handleOpen = async () => {
    setIsOpen(true);
    setShowModal(true);
    await loadPdfPages();
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVisible(true);
      });
    });
  };

  const handleClose = () => {
    setVisible(false);
    setZoom(1);
    const $ = getJQuery();
    if ($ && flipbookRef.current) {
      const $el = $(flipbookRef.current);
      if ($el.data("turn")) {
        $el.turn("destroy").html("");
      }
    }
    setTimeout(() => {
      setShowModal(false);
      setIsOpen(false);
    }, 350);
  };

  const handlePrev = () => {
    const $ = getJQuery();
    if ($ && flipbookRef.current && $(flipbookRef.current).data("turn")) {
      $(flipbookRef.current).turn("previous");
    }
  };

  const handleNext = () => {
    const $ = getJQuery();
    if ($ && flipbookRef.current && $(flipbookRef.current).data("turn")) {
      $(flipbookRef.current).turn("next");
    }
  };

  return (
    <>
      <div
        className="relative cursor-pointer group"
        style={{ width: 120, height: 160 }}
        onClick={handleOpen}
      >
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ boxShadow: "3px 3px 8px rgba(0,0,0,0.35), -1px 0 2px rgba(0,0,0,0.15)" }}
        >
          {coverImage ? (
            <img
              src={coverImage}
              alt={title || bookId}
              className="w-full h-full object-cover group-hover:-translate-y-2 transition-all duration-300"
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${coverColor} flex items-center justify-center group-hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="text-center text-white p-3">
                <div className="text-xs font-bold leading-tight">{title || bookId}</div>
              </div>
            </div>
          )}
          <div style={{ position: "absolute", top: 0, left: 0, width: "4px", height: "100%", background: "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, transparent 100%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, right: 0, width: "2px", height: "100%", background: "linear-gradient(270deg, rgba(255,255,255,0.2) 0%, transparent 100%)", pointerEvents: "none" }} />
        </div>
      </div>

      {showModal && createPortal(
        <div
          style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 9999,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.9) 100%)",
            opacity: visible ? 1 : 0, transition: "opacity 0.35s ease-out",
          }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <div style={{ position: "relative", opacity: visible ? 1 : 0, transform: visible ? "scale(1)" : "scale(0.85)", transition: "opacity 0.4s ease-out, transform 0.4s ease-out" }}>
            <div style={{ overflow: "hidden", height: 560 }}>
              <div style={{ display: "flex", justifyContent: "center", padding: "1.5rem 1.5rem 0 1.5rem" }}>
                {loading ? (
                  <div style={{ width: 800, height: 560, display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexDirection: "column", gap: "0.5rem" }}>
                    <div>Caricamento pagine...</div>
                    <div style={{ fontSize: "0.75rem", opacity: 0.6 }}>{pdfPages.length} pagine caricate</div>
                  </div>
                ) : (
                  <div
                    ref={flipbookRef}
                    style={{
                      overflow: "hidden", width: 800, height: 560,
                      transform: `scale(${zoom})`, transformOrigin: "center center",
                      transition: "transform 0.2s ease-out",
                    }}
                  >
                    {pdfPages.map((imgSrc, i) => (
                      <div key={`page-${i}`} className="turnjs-page" style={{ background: "white" }}>
                        <img src={imgSrc} alt={`Pagina ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "1rem", padding: "0.5rem 1rem", background: "linear-gradient(180deg, #e8e8e8 0%, #c8c8c8 50%, #b0b0b0 100%)", borderRadius: "0.5rem", border: "1px solid #888", boxShadow: "0 2px 6px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.5)", width: "fit-content", marginLeft: "auto", marginRight: "auto" }}>
              <button onClick={() => setZoom((z) => Math.min(z + 0.15, 2))} style={{ width: "2rem", height: "2rem", borderRadius: "0.25rem", background: "linear-gradient(180deg, #f0f0f0 0%, #d0d0d0 50%, #b8b8b8 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#374151", fontSize: "0.8rem", cursor: "pointer", border: "1px solid #999", boxShadow: "0 1px 2px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)" }}>+</button>
              <span style={{ fontSize: "0.7rem", color: "#555", minWidth: "2rem", textAlign: "center", fontFamily: "monospace" }}>{Math.round(zoom * 100)}%</span>
              <button onClick={() => setZoom((z) => Math.max(z - 0.15, 0.5))} style={{ width: "2rem", height: "2rem", borderRadius: "0.25rem", background: "linear-gradient(180deg, #f0f0f0 0%, #d0d0d0 50%, #b8b8b8 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#374151", fontSize: "0.8rem", cursor: "pointer", border: "1px solid #999", boxShadow: "0 1px 2px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)" }}>−</button>
              <div style={{ width: "1px", height: "1rem", backgroundColor: "#999", margin: "0 0.15rem" }} />
              <button onClick={handleClose} style={{ width: "2rem", height: "2rem", borderRadius: "0.25rem", background: "linear-gradient(180deg, #f0f0f0 0%, #d0d0d0 50%, #b8b8b8 100%)", display: "flex", alignItems: "center", justifyContent: "center", color: "#374151", fontSize: "0.875rem", cursor: "pointer", border: "1px solid #999", boxShadow: "0 1px 2px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)" }}>×</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
