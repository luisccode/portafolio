import { ParagraphComponent } from './styles'
import { ParagraphProps } from 'types/typography'

const Paragraph = ({
  children,
  display,
  margin = '0',
  color = '#fff',
  fontSize = '1.35rem',
  textAlign = 'center',
  lineHeight = '2',
}: ParagraphProps) => {
  return (
    <ParagraphComponent
      margin={margin}
      textAlign={textAlign}
      lineHeight={lineHeight}
      color={color}
      fontSize={fontSize}
      display={display}
    >
      {children}
    </ParagraphComponent>
  )
}

export default Paragraph
