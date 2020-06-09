
// query($id: String!){
//   allDatoCmsArticle(filter: {id:{eq: $id}}) {
//     edges {
//       node {
//         id
//         title
//       	photo {
//             fluid {
//               base64
//               tracedSVG
//               width
//               height
//             }

//       	}
//         paragraph
//       }
//     }
//   }
// }

import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { Layout } from '../components/layout';

const PostTemplate = () => (
  <>
  <Layout>

  </Layout>
  </>
)