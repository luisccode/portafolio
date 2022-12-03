interface ButtonBaseProps {
  children: React.ReactNode
  as?: React.ElementType | keyof JSX.IntrinsicElements
}

export interface ButtonStylingProps {
  bgcolor?: string
  margin?: string
  border?: string
}

export type ButtonProps = ButtonBaseProps &
  ButtonStylingProps &
  React.HTMLProps<HTMLButtonElement> &
  React.HTMLProps<HTMLInputElement> &
  React.HTMLProps<HTMLAnchorElement>
