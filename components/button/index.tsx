import React from 'react'
import styled from 'styled-components'

interface ReactButtonProps {
  children: React.ReactNode
  href?: string
  type?: string
  value?: string
  as?: React.ElementType | keyof JSX.IntrinsicElements
  onClick?: () => void
}

interface ButtonStylingProps {
  bgcolor?: string
  margin?: string
  border?: string
}

type ButtonProps = ReactButtonProps & ButtonStylingProps

const ButtonComponent = styled.button<ButtonStylingProps>`
  width: 12rem;
  height: 5.5rem;
  border: 1px solid #fff;
  border-radius: 0.75rem;
  margin: 2rem 0;
  font-size: 1.65rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) => props.bgcolor};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  @media (min-width: ${(props) => props.theme.size.mobile}) {
    width: 14rem;
  }
  @media (min-width: ${(props) => props.theme.size.tablet}) {
    width: 18rem;
    height: 6.25rem;
  }
`
const Button = ({
  children,
  bgcolor = '#ff4900',
  border = 'none',
  margin = '0',
  ...props
}: ButtonProps) => {
  return (
    <ButtonComponent
      bgcolor={bgcolor}
      border={border}
      margin={margin}
      {...props}
    >
      {children}
    </ButtonComponent>
  )
}

export default Button
