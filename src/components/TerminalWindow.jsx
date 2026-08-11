// Props: title (string), children
export default function TerminalWindow({ title, children, className = '' }) {
  return (
    <div className={`bg-surface border border-border ${className}`}>
      <div className="flex items-center gap-2 px-3.5 py-[11px] border-b border-border bg-raised">
        <span className="w-2.5 h-2.5 bg-red block shrink-0" />
        <span className="w-2.5 h-2.5 bg-amber block shrink-0" />
        <span className="w-2.5 h-2.5 bg-green block shrink-0" />
        {title && <span className="ml-2 font-mono text-[11px] text-muted">{title}</span>}
      </div>
      {children}
    </div>
  )
}
