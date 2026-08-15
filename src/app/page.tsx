import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="font-semibold tracking-tight text-lg">PromptForge</div>
          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <Link href="/learn" className="hover:text-white transition">Learn</Link>
            <Link href="/practice" className="hover:text-white transition">Practice</Link>
            <Link href="/vault" className="hover:text-white transition">Vault</Link>
          </nav>
        </div>
      </header>

      <section className="flex-1 flex items-center">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
            Stop writing weak prompts.
            <span className="block text-emerald-400 mt-2">Start practicing strong ones.</span>
          </h1>
          <p className="mt-8 text-xl text-zinc-400 max-w-2xl leading-relaxed">
            PromptForge is an interactive training ground. Write prompts, get specific feedback, compare against strong references, and build real skill through deliberate practice.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/learn"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 text-base font-medium text-black hover:bg-emerald-400 transition"
            >
              Start Learning
            </Link>
            <Link
              href="/practice"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-base font-medium text-zinc-200 hover:border-zinc-500 hover:text-white transition"
            >
              Jump to Practice
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-800 py-20">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-semibold text-lg mb-3">Structured Modules</h3>
            <p className="text-zinc-400 leading-relaxed">
              Learn one principle at a time: role, task, constraints, format, examples, reasoning, and iteration.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Live Feedback</h3>
            <p className="text-zinc-400 leading-relaxed">
              Submit a prompt and receive specific, actionable notes instead of vague advice.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-3">Deliberate Practice</h3>
            <p className="text-zinc-400 leading-relaxed">
              Progressive challenges force you to apply what you learned under realistic conditions.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}