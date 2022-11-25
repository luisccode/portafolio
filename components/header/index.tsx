import React, { useState } from 'react'
import Navigation from './navigation'
import BurgerMenu from './burgerMenu'
import { ContainerComponent, Logo } from './styles'

const Header = () => {
  // state for the Burger Menu
  const [open, setOpen] = useState(false)

  return (
    <ContainerComponent tag="header">
      <Logo href="/">
        L<span>c</span>ode
      </Logo>

      <BurgerMenu open={open} setOpen={setOpen} />

      <Navigation open={open} setOpen={setOpen} />
    </ContainerComponent>
  )
}
export default Header
