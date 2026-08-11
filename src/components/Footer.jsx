import { personalInfo } from '../data/personalInfo'

export default function Footer() {
  return (
    <footer className="px-[18px] py-[26px] border-t border-border flex flex-col gap-1.5 font-mono text-[10.5px] text-muted lg:px-12 lg:flex-row lg:justify-between lg:text-[11.5px]">
      <span>{personalInfo.footer.builtWith}</span>
      <span>{personalInfo.footer.copyright}</span>
    </footer>
  )
}
