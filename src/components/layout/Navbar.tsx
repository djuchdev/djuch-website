'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { nav } from '@/lib/content'
import { ChevronDownIcon, MenuIcon, XIcon } from '@/components/ui/Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-brand-black/95 backdrop-blur-sm border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-1 flex-shrink-0">
              <span className="font-display font-bold text-4xl text-white tracking-tight">
                DJ
              </span>
              <span className="font-display font-bold text-4xl text-gold tracking-tight">
                &nbsp;UCH
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-10">
              {nav.links.map((link) => {
                const hasDropdown = link.hasDropdown && link.dropdown?.length

                return (
                  <div key={link.label} className="relative group py-8">
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/65 hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                      {hasDropdown && (
                        <span className="text-white/35 transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180">
                          <ChevronDownIcon />
                        </span>
                      )}
                    </Link>

                    {hasDropdown && (
                      <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-2 opacity-0 pointer-events-none translate-y-2 transition-all duration-150 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0">
                        <div className="border border-gold/25 bg-brand-black/95 shadow-2xl shadow-black/40 backdrop-blur-sm">
                          {link.dropdown?.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="block border-b border-white/5 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/65 transition-colors last:border-b-0 hover:bg-gold hover:text-black focus:bg-gold focus:text-black"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>

            {/* Desktop CTA */}
            <Link
              href={nav.cta.href}
              className="hidden md:inline-flex items-center px-6 py-3 border border-gold text-gold text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-gold hover:text-black transition-colors duration-200"
            >
              {nav.cta.label}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-brand-black flex flex-col pt-20 pb-8 px-6 transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-6 mt-6">
          {nav.links.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-display font-bold uppercase text-white hover:text-gold transition-colors"
              >
                {link.label}
              </Link>

              {link.hasDropdown && link.dropdown?.length && (
                <div className="mt-4 flex flex-col gap-3 border-l border-gold/35 pl-5">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-xs font-bold uppercase tracking-[0.22em] text-white/55 hover:text-gold transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
        <div className="mt-auto">
          <Link
            href={nav.cta.href}
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center px-8 py-4 border border-gold text-gold text-sm font-bold tracking-widest uppercase hover:bg-gold hover:text-black transition-colors"
          >
            {nav.cta.label}
          </Link>
        </div>
      </div>
    </>
  )
}
