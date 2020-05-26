import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { absolutePath: { regex: "//gallery/" } }
        sort: { order: DESC, fields: modifiedTime }
      ) {
        edges {
          node {
            id
            name
            publicURL
            sharp: childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="gallery">
      {images.edges.map(({ node }) => (
        <a href={node.publicURL} id={node.id} target="_blank" rel="noreferrer">
          <Img
            className="photo"
            fluid={node.sharp.fluid}
            fadeIn="soft"
            alt={node.name}
          />
        </a>
      ))}
    </div>
  )
}

export default Gallery
