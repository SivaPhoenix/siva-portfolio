import { projects } from '../data/projects'
import aiwrite from '../assets/project/aiwrite.jpg'
import human from '../assets/project/human.jpg'
import notesApp from '../assets/project/notes_app.png'
import siya from '../assets/project/siya.jpg'
import github from '../assets/project/github.png'

const thumbs = {
  'aiwrite.jpg': aiwrite,
  'human.jpg': human,
  'notes_app.png': notesApp,
  'siya.jpg': siya,
  'github.png': github,
}

function ProjectCard({ project }) {
  const { title, desc, tags, liveUrl, ghUrl, path, thumb } = project
  const thumbSrc = thumb && thumbs[thumb]

  return (
    <div className="group bg-surface border border-border p-4 sm:p-5 flex flex-col transition-all duration-300 hover:border-green hover:shadow-[0_0_0_1px_rgba(57,255,136,0.2),0_8px_32px_rgba(57,255,136,0.12)]">
      {/* Thumbnail framed with padding and border */}
      <div className="relative aspect-video w-full border border-border bg-raised overflow-hidden flex items-center justify-center">
        {thumbSrc ? (
          <img
            src={thumbSrc}
            alt={title}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <span className="font-mono text-xs text-dim">[ thumbnail ]</span>
        )}
        <div className="absolute right-2 top-2 px-2 py-0.5 bg-surface/90 backdrop-blur-sm border border-border font-mono text-[10px] text-purple pointer-events-none">
          {path}
        </div>
      </div>

      {/* Body */}
      <div className="pt-4 flex flex-col gap-3 flex-1">
        <div className="font-sans font-bold text-[17px] text-text leading-[1.3] group-hover:text-green transition-colors">
          {title}
        </div>
        <div className="font-sans text-[13px] leading-[1.7] text-muted flex-1">
          {desc}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 bg-raised border border-border font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-3.5 mt-2 border-t border-border">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 font-mono font-medium text-xs text-green bg-green/10 border border-green/40 no-underline transition-all duration-150 hover:bg-green hover:!text-section"
            >
              open live ↗
            </a>
          ) : (
            <span className="px-3.5 py-2 font-mono font-medium text-xs text-dim border border-dashed border-border cursor-not-allowed">
              # no live link
            </span>
          )}
          {ghUrl ? (
            <a
              href={ghUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 font-mono font-medium text-xs text-text border border-border no-underline transition-all duration-150 hover:border-purple hover:text-purple hover:bg-purple/10"
            >
              git clone
            </a>
          ) : (
            <span className="px-3.5 py-2 font-mono font-medium text-xs text-dim border border-dashed border-border cursor-not-allowed">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-7">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  )
}
