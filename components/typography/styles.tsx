import styled, { css } from 'styled-components'
import { TitleStylingProps, ParagraphProps } from 'types/typography'

export const TitleComponent = styled.h1<TitleStylingProps>`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
  ${(props) =>
    props.fontSize.static
      ? css`
          font-size: ${props.fontSize.static};
        `
      : css`
          font-size: ${props.fontSize.small};
          @media (min-width: ${props.theme.size.mobile}) {
            font-size: ${props.fontSize.medium};
          }
          @media (min-width: ${props.theme.size.tablet}) {
            font-size: ${props.fontSize.large};
          }
        `}
`

// paragraph styles
export const ParagraphComponent = styled.p<ParagraphProps>`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};
  color: ${(props) => props.color};
  display: ${(props) => props.display};
`
