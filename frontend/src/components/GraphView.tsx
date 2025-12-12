"use client";

import React from "react";
import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
  MiniMap,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import { useGraphStore } from "@/store/useGraphStore";

export default function GraphView() {
  const { nodes, edges } = useGraphStore();

  // Adaptar nodes para React Flow
  const rfNodes: Node[] = nodes.map((n) => ({
    id: n.id,
    data: { label: n.label },
    position: { x: n.x ?? Math.random() * 400, y: n.y ?? Math.random() * 400 },
    type: "default",
  }));

  const rfEdges: Edge[] = edges.map((e) => ({
    id: `${e.from}-${e.to}`,
    source: e.from,
    target: e.to,
    label: e.relation,
    animated: false, // animação opcional
    style: { stroke: "#555" },
  }));

  return (
    <div style={{ width: "100%", height: "600px", border: "1px solid #ccc" }}>
      <ReactFlowProvider>
        <ReactFlow nodes={rfNodes} edges={rfEdges} fitView>
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}
