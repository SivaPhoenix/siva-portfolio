import { useState, useEffect } from 'react'
import { personalInfo } from '../data/personalInfo'

const codeLines = [
  'router.post("/api/insight/query", authMiddleware, async (req, res) => { const sql = await textToSql(req.body.prompt, bankingSchema); return res.json({ sql }); });',
  'const camelScore = computeCamelScore({ capital, assetQuality, management, earnings, liquidity }, { adaptiveModel: forecastingRouter.select(bankId) });',
  'router.get("/api/ews/alerts", authMiddleware, async (req, res) => { const alerts = await scanRiskThresholds(camelScore); return res.status(200).json(alerts); });',
  'router.post("/api/notes", authMiddleware, rateLimiter, async (req, res) => { const note = await Note.create({ ...req.body, userId: req.user.id }); return res.json(note); });',
  'const diagnosis = await predictDisease(symptoms, { model: randomForestClassifier, datasetRows: 4920, confidenceThreshold: 0.72 });',
  'router.post("/api/siya/predict", async (req, res) => { const result = await diagnosisEngine.run(req.body.symptoms); return res.json(result); });',
  'const activityLabel = resNetClassifier.predict(sensorWindow, { accuracy: 0.97, classes: activityLabels, device: "edge-realtime" });',
  'router.post("/api/har/classify", async (req, res) => { const label = await resNetClassifier.predict(req.body.frames); return res.json({ label }); });',
  'const githubAnswer = await retrievalChain.invoke({ query: req.body.question, retriever: githubReadOnlyRetriever, llm: azureOpenAI });',
  'router.post("/api/github-agent/ask", authMiddleware, async (req, res) => { const answer = await githubAgent.answer(req.body.question); return res.json({ answer }); });',
]
const codeRain = Array.from({ length: 60 }, (_, i) => codeLines[i % codeLines.length]).join('\n')

export default function Hero() {
  const { name, role, roleSecondary, tagline, stats } = personalInfo

  // Typewriter effect for name
  const [displayedName, setDisplayedName] = useState('')
  const [typingDone, setTypingDone] = useState(false)

  useEffect(() => {
    let i = 0
    setDisplayedName('')
    setTypingDone(false)
    const interval = setInterval(() => {
      i++
      setDisplayedName(name.slice(0, i))
      if (i >= name.length) {
        clearInterval(interval)
        setTypingDone(true)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [name])

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
          <h1 className="mt-3.5 font-sans font-bold text-[clamp(38px,5vw,76px)] leading-[1.02] text-text tracking-[-0.03em] flex items-baseline gap-[3px]">
            <span>{displayedName}</span>
            <span
              className="inline-block w-[3px] h-[0.85em] bg-green align-baseline"
              style={{ animation: typingDone ? 'blink 1s step-end infinite' : 'none' }}
            />
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
