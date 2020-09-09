import React from 'react'
import { ContainerSingleBlog, Title, Fecha, ConrainerShare, TitleShare } from './styles'
import ReactMarkdown from 'react-markdown'
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
  return (
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
  )
}

export default SingleBlog
