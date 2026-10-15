'use client'

import Link from 'next/link'
import { useRouteProgress } from './site-chrome'
import styles from './skills-matrix.module.scss'

type SkillFilterOption = {
  id: string
  label: string
  count: number
}

export default function SkillFilters({
  category,
  options,
}: {
  category: string
  options: SkillFilterOption[]
}) {
  const { start } = useRouteProgress()

  return (
    <div className="d-flex flex-wrap justify-content-center gap-2 mt-2 mb-5">
      {options.map(({ id, label, count }) => {
        const isActive = category === id
        const targetHref = `/skills?category=${id}`

        return (
          <Link
            key={id}
            scroll={false}
            href={targetHref}
            onClick={event => {
              if (isActive || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
              start()
            }}
            className={`btn btn-sm rounded-pill fw-medium px-3 text-decoration-none cg-button-filter btn-outline-secondary ${isActive ? styles['cg-skill-filter-active'] : ''}`}
          >
            {label}
            <span className={`badge rounded-pill ms-1 ${styles['cg-skill-filter-count']}`}>
              {count}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
