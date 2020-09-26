import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({ name, description }) => {
  return (
    <StaticQuery
      query={
        graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }

      `
      }

      render={data => {
        const image = data.allImageSharp.edges.find(
          edge => {
            return edge.node.fluid.originalName === name
          }
        )

        if (!image) {
          return null
        }

        return <Img fluid={image.node.fluid} alt={description} />
      }}
    />
  )
}

export default Image
