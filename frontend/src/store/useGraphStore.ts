import { create } from "zustand";

interface NodeData {
  id: string;
  label: string;
  x?: number;
  y?: number;
}

interface EdgeData {
  from: string;
  to: string;
  relation: string;
}

interface GraphState {
  nodes: NodeData[];
  edges: EdgeData[];
  setGraph: (data: { nodes: NodeData[]; edges: EdgeData[] }) => void;
}

export const useGraphStore = create<GraphState>((set) => ({
  nodes: [
    { id: "n1", label: "Cloud Computing" },
    { id: "n2", label: "On-demand resources" },
  ],
  edges: [{ from: "n1", to: "n2", relation: "" }],
  setGraph: (data) => set(data),
}));
