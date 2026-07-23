import Link from 'next/link'
import { nav, footer } from '@/lib/content'
import {
  InstagramIcon,
  SpotifyIcon,
  MailIcon,
} from '@/components/ui/Icons'

const socialIconMap = {
  instagram: InstagramIcon,
  spotify:   SpotifyIcon,
  mail:      MailIcon,
}

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Desktop: three-column bar ── */}
        <div className="hidden md:grid md:grid-cols-[auto_1fr_auto] items-center gap-8 py-10">

          {/* Logo */}
          <Link href="/" className="flex items-baseline gap-1 flex-shrink-0">
            <span className="font-display font-bold text-2xl text-white tracking-tight">DJ</span>
            <span className="font-display font-bold text-2xl text-gold tracking-tight">&nbsp;UCH</span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center justify-center flex-wrap gap-x-8 gap-y-2">
            {nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40 hover:text-white/75 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {footer.socials.map((social) => {
              const Icon = socialIconMap[social.icon]
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold/50 hover:text-gold transition-all duration-200"
                >
                  <Icon />
                </Link>
              )
            })}
          </div>
        </div>

        {/* ── Mobile: stacked ── */}
        <div className="md:hidden py-10 flex flex-col items-center gap-8">

          <Link href="/" className="flex items-baseline gap-1">
            <span className="font-display font-bold text-2xl text-white tracking-tight">DJ</span>
            <span className="font-display font-bold text-2xl text-gold tracking-tight">&nbsp;UCH</span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40 hover:text-white/75 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {footer.socials.map((social) => {
              const Icon = socialIconMap[social.icon]
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/40 hover:border-gold/50 hover:text-gold transition-all duration-200"
                >
                  <Icon />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Copyright line */}
        <div className="border-t border-white/5 py-5 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <p className="text-zinc-600 text-[10px] tracking-[0.15em] uppercase">
              © {new Date().getFullYear()} DJ UCH. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy/"
                className="text-zinc-600 hover:text-gold text-[10px] tracking-[0.15em] uppercase transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms/"
                className="text-zinc-600 hover:text-gold text-[10px] tracking-[0.15em] uppercase transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
