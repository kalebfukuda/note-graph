import { AnalyzeResponse } from "@/types/graph";
import { Note } from "./types";

export async function analyzeNote(text: string): Promise<AnalyzeResponse> {
  const res = await fetch("http://localhost:8000/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) throw new Error("Failed to analyze note");

  return res.json();
}

export async function getAllNotes(): Promise<Note[]> {
  const res = await fetch("http://localhost:8000/notes/");
  if (!res.ok) throw new Error("Failed to fetch notes");
  const data: Note[] = await res.json();
  return data;
}
