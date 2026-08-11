import { GitHubCalendar } from 'react-github-calendar'
import TerminalWindow from './TerminalWindow'
import { personalInfo } from '../data/personalInfo'
import {
  SiVercel, SiAnaconda,
  SiRender, SiAndroidstudio, SiPycharm, SiNetlify, SiFigma,
} from 'react-icons/si'
import { PiImageBold } from 'react-icons/pi'
import { TbBrandVisualStudio } from 'react-icons/tb'

const toolIcons = {
  vscode: TbBrandVisualStudio,
  vercel: SiVercel,
  render: SiRender,
  photoshop: PiImageBold,
  anaconda: SiAnaconda,
  androidstudio: SiAndroidstudio,
  pycharm: SiPycharm,
  netlify: SiNetlify,
  figma: SiFigma,
}

export default function About() {
  const { name, bio, certifications, skills, tools, githubUsername } = personalInfo

  return (
    <section id="about" className="px-[18px] py-12 border-b border-border bg-section lg:px-12 lg:py-[88px]">
      {/* Section header */}
      <div className="flex items-baseline gap-3.5 mb-6 lg:mb-10">
        <span className="font-mono text-[13px] text-green">01</span>
        <h2 className="m-0 font-sans font-bold text-[26px] text-text tracking-[-0.02em] lg:text-[38px]">About</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Two col desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 lg:gap-10 items-start">

        {/* Left: bash session */}
        <TerminalWindow title="bash — about">
          <div className="px-[22px] py-6 font-mono text-[13.5px] leading-[1.95]">
            <div className="text-green">$ whoami</div>
            <div className="text-text my-1.5 mb-[22px]">{name} — AI Developer &amp; Full Stack Developer (MERN)</div>

            <div className="text-green">$ cat bio.txt</div>
            <div className="text-muted my-1.5 mb-[22px] max-w-[60ch]">
              {bio}
            </div>

            <div className="text-green">$ cat certifications.txt</div>
            <div className="my-2.5 mb-[22px] flex flex-wrap gap-2">
              {certifications.map(c => (
                <div key={c.label} className="flex items-center gap-2.5 px-3.5 py-2.5 border border-amber bg-amber/8">
                  <span className="w-[7px] h-[7px] bg-amber block shrink-0" />
                  <span className="font-mono font-medium text-xs text-amber">{c.label}</span>
                </div>
              ))}
            </div>

            <div className="text-green">$ ls skills/</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map(s => (
                <div key={s.n}
                     className="px-3 py-[7px] border border-border bg-section font-mono text-xs cursor-default transition-colors duration-150 hover:border-green">
                  <span className="text-bracket">&lt;</span>
                  <span style={{ color: s.c }}>{s.n}</span>
                  <span className="text-bracket">/&gt;</span>
                </div>
              ))}
            </div>

            <div className="text-green mt-6">
              $ <span className="cursor w-2 h-3.5" />
            </div>
          </div>
        </TerminalWindow>

        {/* Right: GitHub calendar + tools, stacked tight */}
        <div className="flex flex-col gap-6 lg:gap-10">
          <div className="bg-surface border border-border px-[22px] py-6">
            <div className="flex items-center justify-between mb-[22px]">
              <div className="font-mono font-medium text-[13px] text-text">git log --graph</div>
              <div className="flex items-center gap-[7px]">
                <span className="w-[7px] h-[7px] bg-amber block animate-[blink_2s_step-end_infinite]" />
                <span className="font-mono text-[11px] text-muted">live</span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <GitHubCalendar
                username={githubUsername}
                blockSize={11}
                blockMargin={4}
                fontSize={12}
                theme={{
                  light: ['#14181A', 'rgba(57,255,136,.22)', 'rgba(57,255,136,.45)', 'rgba(57,255,136,.7)', '#39FF88'],
                  dark:  ['#14181A', 'rgba(57,255,136,.22)', 'rgba(57,255,136,.45)', 'rgba(57,255,136,.7)', '#39FF88'],
                }}
                className="text-muted font-mono"
              />
            </div>
          </div>

          {/* Tools */}
          <div className="bg-surface border border-border px-[22px] py-6">
            <div className="font-mono font-medium text-[13px] text-text mb-[22px]">ls ~/tools</div>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {tools.map(t => {
                const Icon = toolIcons[t.icon]
                return (
                  <div key={t.n} title={t.n}
                       className="flex items-center justify-center aspect-square border border-border text-muted text-2xl transition-colors duration-150 hover:border-green hover:text-green">
                    <Icon />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
