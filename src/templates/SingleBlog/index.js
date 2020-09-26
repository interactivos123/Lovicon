import React from 'react'
import { ContainerSingleBlog, Title, Fecha, ConrainerShare, TitleShare } from './styles'
import ReactMarkdown from 'react-markdown'
import SEO from '../../components/seo'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon
} from 'react-share'

const SingleBlog = ({ pageContext }) => {
  // ESTAMOS DEFINIENDO LOS DATOS ESTRUCTURADOS DE CADA BLOG QUE LE ENVIAREMOS A GOOGLE, ASÍ GOOGLE SABRÁ QUE ESTO ES UN BLOG

  const shema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://loviconretail.co/blog/${pageContext.url}`
    },
    headline: pageContext.title,
    description: pageContext.excerpt,
    image: `https://loviconretail.co/${pageContext.imgGatsby}`,
    author: {
      '@type': 'Organization',
      name: 'Lovicon'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lovicon',
      logo: {
        '@type': 'ImageObject',
        url: 'https://loviconretail.co/static/2e72bda0b8b71ca81d886b256cfda21a/1d32f/LogoLovicon.png'
      }
    },
    datePublished: pageContext.datePublished
  }
  return (
    <>
      <SEO
        title={pageContext.title}
        description={pageContext.excerpt}
        shemaMarkup={shema}
      />
      <ContainerSingleBlog>
        <Title>{pageContext.title}</Title>
        <Fecha>{pageContext.fecha}</Fecha>
        <article>
          <ReactMarkdown
            source={pageContext.content}
            escapeHtml={false}
          />
        </article>
        <TitleShare>Compartir:</TitleShare>
        <ConrainerShare>
          <FacebookShareButton url={`https://loviconretail.co/blog/${pageContext.url}`}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>
          <TwitterShareButton url={`https://loviconretail.co/blog/${pageContext.url}`} title={pageContext.title}>
            <TwitterIcon size={40} round />
          </TwitterShareButton>
          <LinkedinShareButton url={`https://loviconretail.co/blog/${pageContext.url}`} title={pageContext.title}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>
          <WhatsappShareButton url={`https://loviconretail.co/blog/${pageContext.url}`} title={pageContext.title}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>
        </ConrainerShare>
      </ContainerSingleBlog>
    </>
  )
}

export default SingleBlog
