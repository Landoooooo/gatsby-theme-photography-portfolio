import React from "react"
import Layout from "../layout/layout"
import Grid from "../layout/grid"
import Photos from "../components/photos"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
  width: 33%;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    width: 90%;
  }
`

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPhoto(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            urlName
            image {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Grid>
        {data.allContentfulPhoto.edges.map(photo => (
          <StyledLink to={`/gallery/${photo.node.urlName}`}>
            <Photos image={photo.node} />
          </StyledLink>
        ))}
      </Grid>
    </Layout>
  )
}

export default Index
