import GraphView from "@/components/GraphView";
import NotesList from "@/components/NotesList";
import NavMenu from "@/components/NavMenu";

export default function Home() {
  return (
    <main className="p-8">
      <NavMenu />
      <NotesList></NotesList>
      <GraphView />
    </main>
  );
}
