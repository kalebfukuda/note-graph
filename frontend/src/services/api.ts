import { AnalyzeResponse } from "@/types/graph";

export async function analyzeNote(text: string): Promise<AnalyzeResponse> {
  const res = await fetch("http://localhost:8000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) throw new Error("Failed to analyze note");

  return res.json();
}

export async function analyzeText(text: string) {
  const res = await fetch("http://localhost:8000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error("Falha ao chamar o backend");
  return res.json();
}
