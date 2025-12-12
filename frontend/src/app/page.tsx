import GraphView from "@/components/GraphView";
import NotesList from "@/components/NotesList";
import MainMenu from "@/components/MainMenu";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Note Graph</h1>
      <MainMenu />
      <NotesList></NotesList>
      <GraphView />
    </main>
  );
}
