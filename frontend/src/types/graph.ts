export interface NodeData {
  id: string;
  label: string;
  type?: string;
  x?: number;
  y?: number;
}

export interface EdgeData {
  from: string;
  to: string;
  relation: string;
}

export interface AnalyzeResponse {
  nodes: NodeData[];
  edges: EdgeData[];
  ambiguities: string[];
}
