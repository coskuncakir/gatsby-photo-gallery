import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Gallery = () => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(filter: { absolutePath: { regex: "//gallery/" } }) {
        edges {
          node {
            id
            name
            relativePath
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
        <Img
          className="photo"
          id={node.id}
          fluid={node.sharp.fluid}
          fadeIn="soft"
          alt={node.name}
        />
      ))}
    </div>
  )
}

export default Gallery
