import GraphView from "@/components/GraphView";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Note Graph</h1>
      <GraphView />
    </main>
  );
}
