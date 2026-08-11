import { useEffect, useState } from 'react'
import { personalInfo } from '../data/personalInfo'

export default function BootScreen({ onDone }) {
  const { username } = personalInfo

  const lines = [
    { prefix: '>', text: 'initializing_portfolio.sh', color: 'text-muted' },
    { prefix: '>', text: 'loading modules...', color: 'text-muted', suffix: '[OK]' },
    { prefix: '>', text: 'mounting /ai /mern', color: 'text-muted', suffix: '[OK]' },
    { prefix: '>', text: 'AI Engineer & Full Stack Dev', color: 'text-purple' },
  ]
  const promptLine = `welcome_root@${username}:~$`

  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [showPrompt, setShowPrompt] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLineIdx(lines.length)
      setShowPrompt(true)
      const t = setTimeout(() => { setLeaving(true); setTimeout(onDone, 300) }, 250)
      return () => clearTimeout(t)
    }

    if (lineIdx >= lines.length) {
      const t = setTimeout(() => setShowPrompt(true), 200)
      return () => clearTimeout(t)
    }

    const current = lines[lineIdx].text
    if (charIdx < current.length) {
      const t = setTimeout(() => setCharIdx(c => c + 1), 18)
      return () => clearTimeout(t)
    }

    const t = setTimeout(() => { setLineIdx(i => i + 1); setCharIdx(0) }, 160)
    return () => clearTimeout(t)
  }, [lineIdx, charIdx])

  useEffect(() => {
    if (!showPrompt) return
    const t = setTimeout(() => { setLeaving(true); setTimeout(onDone, 350) }, 550)
    return () => clearTimeout(t)
  }, [showPrompt])

  return (
    <div className={`fixed inset-0 z-50 bg-bg flex items-center justify-center px-6 transition-opacity duration-300 ${leaving ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="w-full max-w-lg font-mono text-[13px] leading-loose">
        {lines.slice(0, lineIdx).map((l, i) => (
          <div key={i}>
            <span className="text-green">{l.prefix}</span> <span className={l.color}>{l.text}</span>{l.suffix && <> <span className="text-green">{l.suffix}</span></>}
          </div>
        ))}
        {lineIdx < lines.length && (
          <div>
            <span className="text-green">{lines[lineIdx].prefix}</span>{' '}
            <span className={lines[lineIdx].color}>{lines[lineIdx].text.slice(0, charIdx)}</span>
            <span className="cursor w-2 h-3.5 align-middle" />
          </div>
        )}
        {showPrompt && (
          <div className="mt-1.5">
            <span className="text-green">{promptLine}</span>{' '}
            <span className="cursor w-2 h-3.5" />
          </div>
        )}
      </div>
    </div>
  )
}
