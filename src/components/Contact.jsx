import { personalInfo } from '../data/personalInfo'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

const icons = {
  github: AiFillGithub,
  linkedin: FaLinkedinIn,
  twitter: AiOutlineTwitter,
  instagram: AiFillInstagram,
  mail: AiOutlineMail,
  phone: AiOutlinePhone,
}

export default function Contact() {
  const { socials, phone } = personalInfo

  const visibleSocials = socials
    .filter(s => s.icon !== 'phone' || phone)
    .map(s => s.icon === 'phone' ? { ...s, href: `tel:${phone.replace(/\s+/g, '')}` } : s)

  return (
    <section id="contact" className="px-[18px] pt-12 pb-10 bg-section lg:px-12 lg:pt-[88px] lg:pb-10">
      {/* Header */}
      <div className="flex items-baseline gap-3.5 mb-6 lg:mb-10">
        <span className="font-mono text-[13px] text-green">04</span>
        <h2 className="m-0 font-sans font-bold text-[26px] text-text tracking-[-0.02em] lg:text-[38px]">Contact</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      <div className="flex flex-col gap-6 items-center bg-surface border border-border p-10 max-w-xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {visibleSocials.map(s => {
            const Icon = icons[s.icon]
            return (
              <a key={s.icon} href={s.href} title={s.label}
                 target={s.href.startsWith('http') ? '_blank' : undefined}
                 rel="noopener noreferrer"
                 className="flex items-center justify-center w-12 h-12 border border-border text-text text-xl transition-colors duration-150 hover:border-green hover:text-green hover:bg-raised">
                <Icon />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
