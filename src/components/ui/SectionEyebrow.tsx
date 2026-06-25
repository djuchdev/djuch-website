export default function SectionEyebrow({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={`text-gold text-[11px] font-semibold tracking-[0.25em] uppercase mb-3 ${className}`}>
      {children}
    </p>
  )
}
