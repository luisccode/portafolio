export interface ContainerProps {
  children: React.ReactNode
  tag?: React.ElementType | keyof JSX.IntrinsicElements
}

export interface FooterProps {
  defaultMargin: boolean
}

export interface BurgerMenuProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface NavigationProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
