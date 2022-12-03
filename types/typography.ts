export interface TitleStylingProps {
  margin?: string
  textAlign?: string
  color?: string
  fontSize: {
    static?: string
    small?: string
    medium?: string
    large?: string
  }
  fontWeight?: string
  children: React.ReactNode
}

export type TitleProps = TitleStylingProps & {
  as?: React.ElementType | keyof JSX.IntrinsicElements
}

export interface ParagraphProps {
  lineHeight?: string
  fontSize?: string
  margin?: string
  textAlign?: string
  color?: string
  display?: string
  children: React.ReactNode
}
