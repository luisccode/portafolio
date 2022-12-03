import React from 'react'
import { NavComponent, LinkComponent } from './styles'
import { useRouter } from 'next/router'
import { NavigationProps } from 'types/layout'

const linksInfo = [
  { name: 'Home', path: '/' },
  { name: 'About Me', path: '#about' },
  { name: 'Services', path: '#services' },
  { name: 'Portfolio', path: '#portfolio' },
  { name: 'Blog', path: '#blog' },
  { name: 'Contact Me', path: '#contact' },
]

const Navigation = ({ open, setOpen }: NavigationProps) => {
  const { asPath } = useRouter()
  let pathname = asPath
  if (pathname !== '/') pathname = asPath.replace('/', '')

  return (
    <NavComponent className={open ? 'show' : ''}>
      {linksInfo.map(({ name, path }) => (
        <LinkComponent
          className={path === pathname ? 'active' : ''}
          href={path}
          key={name}
          onClick={() => setOpen(false)}
        >
          <span>{name}</span>
        </LinkComponent>
      ))}
    </NavComponent>
  )
}

export default Navigation
