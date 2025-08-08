import Link from 'next/link'

interface BreadcrumbProps {
  items: {
    label: string
    href?: string
    current?: boolean
  }[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="breadcrumb">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.href && !item.current ? (
              <Link href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className={item.current ? '' : ''} aria-current={item.current ? 'page' : undefined}>
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span aria-hidden="true">&#62;</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}