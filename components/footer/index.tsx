import React from 'react'
import { useRouter } from 'next/router'
import { FooterComponent } from './styles'

const Footer = () => {
  const { pathname } = useRouter()

  return (
    <FooterComponent
      defaultMargin={pathname === '/' || pathname.startsWith('/contact')}
    >
      <p style={{ textAlign: 'center' }}>
        Copyright ©{new Date().getFullYear()} Luis Cortes. All Rights Reserved.
      </p>
    </FooterComponent>
  )
}
export default Footer
