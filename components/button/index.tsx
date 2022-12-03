import React from 'react'
import { ButtonProps } from 'types/button'
import { ButtonComponent } from './styles'

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
