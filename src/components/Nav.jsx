import { useState } from 'react'
import { personalInfo } from '../data/personalInfo'

const navLinks = [
  { label: '~/home', href: '#home' },
  { label: '~/about', href: '#about' },
  { label: '~/projects', href: '#projects' },
  { label: '~/resume', href: '#resume' },
  { label: '~/contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 bg-raised/92 border-b border-border backdrop-blur-[8px]">
      <div className="flex items-center justify-between px-[18px] h-14 max-w-full lg:px-12 lg:h-16">
        {/* Logo / prompt */}
        <div className="flex items-center gap-1.5 font-mono text-sm font-medium">
          <span className="text-green">root@{personalInfo.username}</span>
          <span className="text-muted">:</span>
          <span className="text-purple">~</span>
          <span className="text-text">$</span>
          <span className="cursor w-2 h-[15px] ml-1" />
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(n => (
            <a key={n.href} href={n.href}
               className="px-4 py-2.5 font-mono text-[13px] text-muted border border-transparent no-underline transition-all duration-150 hover:text-green hover:border-border hover:bg-surface">
              {n.label}
            </a>
          ))}
          <a href="#resume"
             className="ml-3 px-[18px] py-[11px] font-mono text-[13px] font-medium text-section bg-amber no-underline transition-colors duration-150 shrink-0 hover:bg-green">
            wget resume.pdf
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden w-[46px] h-[46px] flex flex-col justify-center items-end gap-[5px] bg-transparent border-0 cursor-pointer p-0"
                onClick={() => setOpen(o => !o)}>
          <span className="w-[22px] h-0.5 bg-green block" />
          <span className="w-[15px] h-0.5 bg-green block" />
          <span className="w-[22px] h-0.5 bg-green block" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="bg-surface/98 border-t border-border px-[18px] pt-3 pb-5">
          {navLinks.map(n => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}
               className="block py-3.5 font-mono text-sm text-muted border-b border-border no-underline">
              {n.label}
            </a>
          ))}
          <a href="#resume" onClick={() => setOpen(false)}
             className="block mt-4 p-3.5 text-center font-mono text-[13px] font-semibold text-section bg-amber no-underline">
            wget resume.pdf
          </a>
        </div>
      )}
    </nav>
  )
}
