import siteMetadata from './sitemetadata'
import SEOProps from 'types/seo'
import Head from 'next/head'

const SEO = ({
  description,
  title,
  index = true,
  follow = true,
  schema,
  image,
  url,
}: SEOProps) => {
  const metaDescription = description || siteMetadata.description
  const metaTitle = title || siteMetadata.title
  const metaRobots = `${index ? 'index' : 'noindex'},${
    follow ? `follow` : `nofollow`
  }`
  const schemaOrg = schema || siteMetadata.schema
  const metaUrl = url || siteMetadata.siteUrl
  const metaImage = `${metaUrl}${image || siteMetadata.image}`

  return (
    <Head>
      <title>{metaTitle}</title>

      <link rel="shortcut icon" href="/images/favicon.png" />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />
      <meta name="robots" content={metaRobots} />
      <meta name="thumbnail" content={metaImage} />
      <link rel="canonical" href={metaUrl} />

      {/* OpenGraph tags */}
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={siteMetadata.social.twitter} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaOrg),
        }}
      />
    </Head>
  )
}

export default SEO
