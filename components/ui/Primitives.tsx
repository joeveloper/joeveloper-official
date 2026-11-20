export function Arrow({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={className}>↗</span>;
}
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-electric">{children}</p>;
}
