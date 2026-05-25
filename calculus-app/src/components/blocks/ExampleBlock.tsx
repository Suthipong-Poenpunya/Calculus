interface Props {
  title: string
  steps: string[]
}

export function ExampleBlock({ title, steps }: Props) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
      <h3 className="text-sm font-semibold text-amber-400 mb-3">{title}</h3>
      <ol className="space-y-2">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm text-slate-300">
            <span className="text-slate-500 font-mono shrink-0">{i + 1}.</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}
