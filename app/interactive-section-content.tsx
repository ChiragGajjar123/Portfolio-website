import ContactForm from './contact-form'
import { ProjectsMatrix } from './projects-matrix'
import { SkillsMatrix } from './skills-matrix'

export default function InteractiveSectionContent({
  section,
  searchParams,
}: {
  section: string
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  if (section === 'contact') return <ContactForm />
  if (section === 'projects') {
    const category = typeof searchParams?.category === 'string' ? searchParams.category : undefined
    const search = typeof searchParams?.search === 'string' ? searchParams.search : undefined
    return <ProjectsMatrix searchParams={{ category, search }} />
  }
  if (section === 'skills') {
    const category = typeof searchParams?.category === 'string' ? searchParams.category : undefined
    return <SkillsMatrix searchParams={{ category }} />
  }
  return null
}
