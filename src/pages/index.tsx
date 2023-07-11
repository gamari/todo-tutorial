import { JSTodo } from "../components/jstodo/JSTodo";
import { Counter } from "../components/counter/Counter";

export default function Home() {
  return (
    <main className="h-screen items-center justify-center bg flex flex-col space-y-6 bg-gray-200">
      {/* <Counter /> */}
      <JSTodo />
    </main>
  );
}
