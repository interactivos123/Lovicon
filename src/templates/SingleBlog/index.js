import React from 'react'
import { ContainerSingleBlog, Title, Fecha } from './styles'
import ReactMarkdown from 'react-markdown'

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
    </ContainerSingleBlog>
  )
}

export default SingleBlog
