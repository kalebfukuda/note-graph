"use client";

import React from "react";
import GraphView from "@/components/GraphView";
import NotesList from "@/components/NotesList";
import NavMenu from "@/components/NavMenu";
import OffCanvas from "@/components/OffCanvas";

export default function Home() {
  const [openCanvas, setOpenCanvas] = React.useState(false);
  const [canvasTitle, setCanvasTitle] = React.useState("");
  const [canvasContent, setCanvasContent] =
    React.useState<React.ReactNode>(null);

  const openOffcanvas = (title: string, content: React.ReactNode) => {
    setCanvasTitle(title);
    setCanvasContent(content);
    setOpenCanvas(true);
  };

  return (
    <main className="p-8">
      <div>
        <NavMenu openOffcanvas={openOffcanvas} />
      </div>
      <div className="mt-4">
        <GraphView />
      </div>
      <OffCanvas
        open={openCanvas}
        onClose={() => setOpenCanvas(false)}
        title={canvasTitle}
      >
        {canvasContent}
      </OffCanvas>
    </main>
  );
}
