import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { Layout } from '../components/layout';

export const query = graphql`
query($id: String!){
  allDatoCmsArticle(filter: {id:{eq: $id}}) {
    edges {
      node {
        id
        title
      	photo {
            fluid {
              base64
              tracedSVG
              width
              height
            }

      	}
        paragraph
      }
    }
  }
}

`

const PostTemplate = () => (
  <>
  <Layout>
    <h1></h1>
    {JSON.stringify(query, null, 2)}
  </Layout>
  </>
);

export default PostTemplate;