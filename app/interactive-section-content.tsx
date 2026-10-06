'use client'

import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('./contact-form'))
const ProjectsMatrix = dynamic(() => import('./projects-matrix').then(module => module.ProjectsMatrix))
const SkillsMatrix = dynamic(() => import('./skills-matrix').then(module => module.SkillsMatrix))

export default function InteractiveSectionContent({ section }: { section: string }) {
  if (section === 'contact') return <ContactForm />
  if (section === 'projects') return <ProjectsMatrix />
  if (section === 'skills') return <SkillsMatrix />
  return null
}
