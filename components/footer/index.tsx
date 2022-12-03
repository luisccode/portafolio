import React from 'react'
import { useRouter } from 'next/router'
import { FooterComponent } from './styles'
import { Paragraph } from 'components/typography'

const Footer = () => {
  const { pathname } = useRouter()

  return (
    <FooterComponent
      defaultMargin={pathname === '/' || pathname.startsWith('/contact')}
    >
      <Paragraph margin="1.35rem 0">
        Copyright ©{new Date().getFullYear()} Luis Cortes. All Rights Reserved.
      </Paragraph>
    </FooterComponent>
  )
}
export default Footer
