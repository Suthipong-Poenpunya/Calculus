interface Props {
  content: string
}

export function TextBlock({ content }: Props) {
  return <p className="text-slate-300 leading-relaxed">{content}</p>
}
