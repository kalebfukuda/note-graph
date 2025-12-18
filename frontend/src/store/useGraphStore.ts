import { create } from "zustand";
import { analyzeNote } from "@/services/api";
import { NodeData, EdgeData } from "@/types/graph";

interface GraphState {
  nodes: NodeData[];
  edges: EdgeData[];
  ambiguities: string[];
  analyzeText: (text: string) => Promise<void>;
}

export const useGraphStore = create<GraphState>((set) => ({
  nodes: [],
  edges: [],
  ambiguities: [],
  analyzeText: async (text) => {
    const result = await analyzeNote(text);
    set({
      nodes: result.nodes,
      edges: result.edges,
      ambiguities: result.ambiguities,
    });
  },
}));
