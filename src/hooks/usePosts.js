import {useStaticQuery, graphql} from 'gatsby'

// hook zwraca wszystkie posty, przydatne zeby kodu nie syfic w komponencie :) + optymalizacja bo query idzie raz

export const usePosts = () => {
  const {posts: {edges}} =  useStaticQuery(graphql`
    query AllPosts {
        posts: allDatoCmsArticle {
            edges {
                node {
                id
                title
                paragraph
                    photo {
                        fluid {
                        ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    }
  `);
  return edges;
} 