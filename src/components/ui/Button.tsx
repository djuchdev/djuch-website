import Link from 'next/link'

type Variant = 'primary' | 'outline' | 'outline-gold'

type ButtonProps = {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-gold text-black hover:bg-gold-light active:scale-[0.98]',
  outline:
    'border border-white text-white hover:border-gold hover:text-gold active:scale-[0.98]',
  'outline-gold':
    'border border-gold text-gold hover:bg-gold hover:text-black active:scale-[0.98]',
}

const base =
  'inline-flex items-center gap-2.5 px-9 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer select-none'

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
