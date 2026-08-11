import { projects } from '../data/projects'
import aiwrite from '../assets/project/aiwrite.jpg'
import human from '../assets/project/human.jpg'
import notesApp from '../assets/project/notes_app.png'
import siya from '../assets/project/siya.jpg'

const thumbs = { 'aiwrite.jpg': aiwrite, 'human.jpg': human, 'notes_app.png': notesApp, 'siya.jpg': siya }

function ProjectCard({ project }) {
  const { title, desc, tags, liveUrl, ghUrl, path, thumb } = project
  const thumbSrc = thumb && thumbs[thumb]

  return (
    <div className="bg-surface border border-border flex flex-col transition-[border-color,box-shadow] duration-[250ms] hover:border-green hover:shadow-[0_0_0_1px_rgba(57,255,136,.25),0_0_34px_rgba(57,255,136,.14)]">
      {/* Thumbnail */}
      <div className="group relative aspect-video border-b border-border bg-raised flex items-center justify-center grayscale contrast-[1.05] transition-[filter] duration-500 overflow-hidden hover:grayscale-0">
        {thumbSrc ? (
          <img src={thumbSrc} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="font-mono text-[11px] text-dim">[ thumbnail ]</span>
        )}
        <div className="absolute right-0 top-0 px-[9px] py-[5px] bg-section border-l border-b border-border font-mono text-[10px] text-purple pointer-events-none">
          {path}
        </div>
      </div>

      {/* Body */}
      <div className="px-[18px] py-5 flex flex-col gap-[11px] flex-1">
        <div className="font-sans font-semibold text-base text-text leading-[1.35]">{title}</div>
        <div className="font-sans text-[12.5px] leading-[1.7] text-muted flex-1">{desc}</div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map(t => (
            <span key={t} className="px-2 py-1 bg-raised font-mono text-[10.5px] text-muted">{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mt-2 pt-3.5 border-t border-border">
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer"
               className="px-[13px] py-2.5 font-mono font-medium text-[11.5px] text-green border border-border no-underline transition-colors duration-150 hover:border-green hover:bg-green/8">
              open live ↗
            </a>
          ) : (
            <span className="px-[13px] py-2.5 font-mono font-medium text-[11.5px] text-dim border border-dashed border-border cursor-not-allowed">
              # no live link
            </span>
          )}
          {ghUrl ? (
            <a href={ghUrl} target="_blank" rel="noopener noreferrer"
               className="px-[13px] py-2.5 font-mono font-medium text-[11.5px] text-text border border-border no-underline transition-colors duration-150 hover:border-purple hover:text-purple">
              git clone
            </a>
          ) : (
            <span className="px-[13px] py-2.5 font-mono font-medium text-[11.5px] text-dim border border-dashed border-border cursor-not-allowed">
              # private repo
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="px-[18px] py-12 border-b border-border bg-section lg:px-12 lg:py-[88px]">
      {/* Header */}
      <div className="flex items-baseline gap-3.5 mb-6 lg:mb-10">
        <span className="font-mono text-[13px] text-green">02</span>
        <h2 className="m-0 font-sans font-bold text-[26px] text-text tracking-[-0.02em] lg:text-[38px]">Projects</h2>
        <div className="flex-1 h-px bg-border" />
        <span className="hidden lg:block font-mono text-xs text-muted shrink-0">ls ~/projects · {projects.length} items</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px]">
        {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
      </div>
    </section>
  )
}
