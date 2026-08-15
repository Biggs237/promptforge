import Link from "next/link";

const modules = [
  {
    id: "foundations",
    title: "Foundations",
    description: "Role, Task, Context, Constraints, Format. The core mental model.",
    status: "ready",
  },
  {
    id: "specificity",
    title: "Specificity & Success Criteria",
    description: "Turn vague goals into measurable outcomes the model can hit.",
    status: "ready",
  },
  {
    id: "structure",
    title: "Structure & Formatting",
    description: "Use sections, tags, and clear hierarchy to reduce variance.",
    status: "ready",
  },
  {
    id: "examples",
    title: "Examples & Few-Shot",
    description: "When and how to include high-quality examples that actually help.",
    status: "coming",
  },
  {
    id: "reasoning",
    title: "Reasoning & Chain-of-Thought",
    description: "Force step-by-step thinking when it improves results.",
    status: "coming",
  },
  {
    id: "constraints",
    title: "Constraints & Guardrails",
    description: "Harden prompts against common failure modes.",
    status: "coming",
  },
  {
    id: "iteration",
    title: "Iteration & Evaluation",
    description: "Diagnose bad outputs and improve prompts deliberately.",
    status: "coming",
  },
  {
    id: "advanced",
    title: "Advanced Patterns",
    description: "Tool use, multi-step workflows, and self-critique loops.",
    status: "coming",
  },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-lg">PromptForge</Link>
          <nav className="flex items-center gap-6 text-sm text-zinc-400">
            <Link href="/learn" className="text-white">Learn</Link>
            <Link href="/practice" className="hover:text-white transition">Practice</Link>
            <Link href="/vault" className="hover:text-white transition">Vault</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Learning Path</h1>
        <p className="mt-4 text-zinc-400 text-lg max-w-2xl">
          Work through the modules in order. Each one ends with practice that forces you to apply the principle.
        </p>

        <div className="mt-12 space-y-4">
          {modules.map((mod, index) => (
            <div
              key={mod.id}
              className="border border-zinc-800 rounded-xl p-6 flex items-start justify-between gap-6 hover:border-zinc-700 transition"
            >
              <div className="flex gap-5">
                <div className="text-zinc-500 font-mono text-sm pt-1 w-6">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h2 className="font-semibold text-lg">{mod.title}</h2>
                  <p className="mt-1 text-zinc-400">{mod.description}</p>
                </div>
              </div>
              <div className="shrink-0">
                {mod.status === "ready" ? (
                  <Link
                    href={`/learn/${mod.id}`}
                    className="inline-flex items-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-4 py-2 text-sm font-medium hover:bg-emerald-500/20 transition"
                  >
                    Start
                  </Link>
                ) : (
                  <span className="inline-flex items-center rounded-lg bg-zinc-800 text-zinc-500 px-4 py-2 text-sm">
                    Soon
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}