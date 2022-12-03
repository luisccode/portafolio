import { TitleProps } from 'types/typography'
import { TitleComponent } from './styles'

const Title = ({
  as,
  children,
  color = '#fff',
  margin = '0.5rem 0 0 0',
  textAlign = 'inherit',
  fontSize = { small: '2.2rem', medium: '2.6rem', large: '3rem' },
  fontWeight = '400',
}: TitleProps) => {
  return (
    <TitleComponent
      as={as}
      margin={margin}
      textAlign={textAlign}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {children}
    </TitleComponent>
  )
}

export default Title
