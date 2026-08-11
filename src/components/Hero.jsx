import { personalInfo } from '../data/personalInfo'

const codeLines = [
  'const agent = await createAgent({ tools, model: "gpt-4o" });',
  'router.post("/api/query", auth, async (req, res) => {',
  '  const sql = await textToSql(req.body.prompt);',
  'export default function useForecast(series) {',
  'db.collection("tickets").aggregate([{ $group: { _id: "$status" } }])',
  'if (camel.score < threshold) emitEarlyWarning(bank.id);',
]
const codeRain = Array.from({ length: 40 }, (_, i) => codeLines[i % 6]).join('\n')

export default function Hero() {
  const { name, role, roleSecondary, tagline, stats } = personalInfo

  return (
    <section id="home" className="relative px-[18px] pt-10 pb-12 border-b border-border bg-section overflow-hidden lg:px-12 lg:py-[88px]">
      {/* Code rain background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <pre className="code-rain font-mono text-xs leading-[1.9] text-green whitespace-pre px-[18px] m-0">
          {codeRain + '\n' + codeRain}
        </pre>
      </div>

      {/* Single column until portrait asset is back */}
      <div className="relative">

        <div>
          <div className="font-mono text-[13px] text-muted tracking-[0.14em]">
            // available for collaboration
          </div>
          <h1 className="mt-3.5 font-sans font-bold text-[clamp(38px,5vw,76px)] leading-[1.02] text-text tracking-[-0.03em]">
            {name}
          </h1>
          <div className="mt-3.5 flex flex-wrap items-center gap-2 font-mono font-medium text-[15px] leading-[1.4] lg:gap-3 lg:text-[26px] lg:mt-[22px]">
            <span className="text-green">&gt;</span>
            <span className="text-purple">{role}</span>
            <span className="text-border">|</span>
            <span className="text-text">{roleSecondary}</span>
            <span className="cursor w-2 h-[15px]" />
          </div>
          <p className="mt-5 max-w-[560px] font-sans text-sm leading-[1.75] text-muted lg:text-base lg:mt-8">
            {tagline}
          </p>

          {/* CTAs */}
          <div className="mt-[26px] flex flex-col gap-2.5 lg:flex-row lg:gap-[14px] lg:mt-10">
            <a href="#projects"
               className="p-4 text-center font-mono font-semibold text-[13px] !text-white bg-green no-underline transition-colors duration-200 block lg:py-[15px] lg:px-[26px] lg:text-[14px] hover:bg-purple hover:!text-text">
              cd ./projects
            </a>
            <a href="#contact"
               className="p-4 text-center font-mono font-medium text-[13px] text-text border border-border no-underline transition-colors duration-200 block lg:py-[15px] lg:px-[26px] lg:text-[14px] hover:border-green hover:text-green">
              ./contact --me
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 flex gap-8 border-t border-border pt-5 lg:mt-14 lg:pt-7 lg:gap-11">
            {stats.map(s => (
              <div key={s.k}>
                <div className="font-sans font-bold text-[22px] text-green lg:text-[30px]">{s.v}</div>
                <div className="mt-1.5 font-mono text-[10px] text-muted tracking-[0.1em] lg:text-[12px]">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
