import React from 'react';
import {Link} from 'gatsby'
import SEO from '../components/seo';
import Layout from '../components/layout';
import {usePosts} from "../hooks/usePosts"

const BlogPage = () => {
  const posts = usePosts();
  return (
    <>
      <SEO />
      <Layout>
        {
          posts.map(({node}) => (
            <div key={node.id} style={{margin: "4rem 0"}}>
              <h1>{node.title}</h1>
              <p>{node.paragraph}</p>
              <Link to={node.id}>{node.id}</Link>
            </div>
          ))
        }
      </Layout>
    </>
  )
}

export default BlogPage;
