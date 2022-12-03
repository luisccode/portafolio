import React from 'react'
import styeld from 'styled-components'
import { ContainerProps } from 'types/layout'

const ContainerComponent = styeld.div`
    width: 90%;
    max-width: 120rem;
    margin: 0 auto;
`

const Container = ({ tag, children, ...props }: ContainerProps) => {
  return (
    <ContainerComponent as={tag} {...props}>
      {children}
    </ContainerComponent>
  )
}

export default Container
