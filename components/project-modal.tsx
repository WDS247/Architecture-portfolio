"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ProjectModalProps {
  project: {
    title: string;
    category: string;
    cover: string;
    gallery: string[];
    description: string;
  };
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative bg-background rounded-xl max-w-5xl w-full my-8 shadow-2xl animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-accent transition-colors shadow-lg"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="p-8 border-b border-border">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-balance">
            {project.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {project.category}
          </p>
        </div>

        {/* Description */}
        <div className="px-8 pt-6 pb-4">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
            {project.description}
          </p>
        </div>

        {/* Gallery */}
        <div className="px-8 pb-8 space-y-6">
          {project.gallery.map((filePath, index) => {
            const isVideo =
              filePath.endsWith(".mp4") || filePath.endsWith(".webm");

            return (
              <div
                key={index}
                className="w-full flex items-center justify-center overflow-hidden rounded-xl bg-muted/20"
              >
                {isVideo ? (
                  <video
                    src={filePath}
                    controls
                    className="w-full h-auto max-h-[85vh] rounded-xl"
                  />
                ) : (
                  <img
                    src={filePath}
                    alt={`${project.title} Media ${index + 1}`}
                    className="w-auto h-auto max-h-[85vh] max-w-full object-contain rounded-xl"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}