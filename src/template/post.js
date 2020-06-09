import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import  Layout  from '../components/layout';
import Img from 'gatsby-image'

const PostTemplate = ({data}) => {
  return (
  <>
  <Layout>
    <h1></h1>
    {JSON.stringify(data, null, 2)}
    <Img fluid={data.datoCmsArticle?.photo?.fluid || "brakujeObrazka"} />
  </Layout>
  </>
)};

// tu pobierasz konkretna strone wiec query robisz na datoCmsArticle a nie allDatoCmsArticle (porownujac id szukasz konkretnego artykułu)

// Fluid to obrazek dopasowujacy sie wiec raczej sie width i height nie pobiera, obczaj skroty z '...', dzieki nim nie musisz pisac kazdej wlasciwosci, ale dziala to tylko w kodzie, w graphqlu nie


export const query = graphql`
query($id: String!){
  datoCmsArticle(id: {eq: $id}) {
    id
    title
    photo {
      fluid {
        ...GatsbyDatoCmsFluid
      }
    }
    paragraph
  }
}

`

export default PostTemplate;
