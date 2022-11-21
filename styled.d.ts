import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      gray: string
    }
    size: {
      mobile: string
      tablet: string
      laptopS: string
      laptop: string
      desktop: string
    }
  }
}
