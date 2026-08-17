import React from 'react'
import Typewriter from 'typewriter-effect'
import { personalInfo } from '../data/personalInfo'

export default function Type({ strings = [personalInfo.name], ...props }) {
  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        pauseFor: 1800,
        ...props,
      }}
    />
  )
}
