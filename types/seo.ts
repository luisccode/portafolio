interface SEOProps {
  description?: string
  title?: string
  index?: boolean
  follow?: boolean
  image?: string
  url?: string
  schema?: {
    '@context': string
    '@type': string
    url: string
    logo: string
    description: string
    sameAs: string[]
  }
}

export default SEOProps
