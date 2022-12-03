import { BurgerMenuProps } from 'types/layout'
import { Line, MenuBtn } from './styles'

const BurgerMenu = ({ open, setOpen }: BurgerMenuProps) => {
  const toggleMenu = () => setOpen((prev) => !prev)

  return (
    <MenuBtn className={open ? 'open' : ''} onClick={toggleMenu}>
      <Line />
      <Line />
      <Line />
    </MenuBtn>
  )
}
export default BurgerMenu
