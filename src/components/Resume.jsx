import { useState, useEffect, useRef } from 'react'
import TerminalWindow from './TerminalWindow'
import { personalInfo } from '../data/personalInfo'
import resumePdf from '../assets/Siva_Sriram.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker

export default function Resume() {
  const { resume } = personalInfo
  const [numPages, setNumPages] = useState(1)
  const [pageWidth, setPageWidth] = useState(560)
  const viewerRef = useRef(null)

  useEffect(() => {
    if (!viewerRef.current) return
    const el = viewerRef.current
    const ro = new ResizeObserver(entries => {
      const w = entries[0].contentRect.width
      if (w > 0) setPageWidth(Math.min(w - 32, 900))
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <section id="resume" className="px-[18px] py-12 border-b border-border bg-section lg:px-12 lg:py-[88px]">
      {/* Header */}
      <div className="flex items-baseline gap-3.5 mb-6 lg:mb-10">
        <span className="font-mono text-[13px] text-green">03</span>
        <h2 className="m-0 font-sans font-bold text-[26px] text-text tracking-[-0.02em] lg:text-[38px]">Resume</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-10 items-start">
        {/* Left: PDF viewer */}
        <TerminalWindow>
          <div className="px-5 py-4 border-b border-border font-mono text-[13px]">
            <span className="text-green">$ cat</span> <span className="text-text">resume.pdf</span>
          </div>

          {/* Desktop: real inline PDF viewer */}
          <div ref={viewerRef} className="hidden lg:flex h-[780px] bg-raised items-start justify-center relative overflow-y-auto py-4">
            <Document file={resumePdf} onLoadSuccess={({ numPages }) => setNumPages(numPages)}>
              <Page pageNumber={1} width={pageWidth} />
            </Document>
            <div className="absolute left-0 bottom-0 px-3 py-1.5 font-mono text-[11px] text-muted border-t border-r border-border bg-surface">
              page 1 / {numPages} · inline viewer
            </div>
          </div>

          {/* Mobile: text only, no inline viewer */}
          <div className="lg:hidden px-4 py-5 font-mono text-[11.5px] leading-[1.9] text-muted">
            <div># inline viewer disabled on mobile</div>
            <div>{resume.fileName} · {resume.fileSize} · {resume.pages} pages</div>
          </div>
        </TerminalWindow>

        {/* Right: download + meta */}
        <div className="flex flex-col gap-4">
          <a href={resumePdf} download={resume.fileName} target="_blank" rel="noopener noreferrer"
             className="px-5 py-4 bg-amber text-section font-mono font-semibold text-sm no-underline block text-center transition-colors duration-150 hover:bg-green">
            wget resume.pdf ↓
          </a>

          <div className="p-5 bg-surface border border-border">
            <div className="font-mono text-[11px] text-muted tracking-[0.1em]">FILE</div>
            <div className="mt-2.5 font-mono text-[12.5px] leading-loose text-text">
              <div>{resume.fileName}</div>
              <div className="text-muted">{resume.fileSize} · {resume.pages} pages</div>
              <div className="text-muted">updated {resume.updated}</div>
            </div>
          </div>

          <div className="p-5 bg-surface border border-border">
            <div className="font-mono text-[11px] text-muted tracking-[0.1em]">FOCUS</div>
            <div className="mt-3 flex flex-col gap-[9px] font-mono text-[12.5px] text-text">
              {resume.focus.map(f => (
                <div key={f}><span className="text-green">▸</span> {f}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
