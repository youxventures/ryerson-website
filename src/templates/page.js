/** @jsx jsx */
import { jsx } from 'theme-ui'
import React  from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default ({ pageContext }) => {
  const { page: { title, content, articleFields: { articles } } } = pageContext

  console.log(articles)

  return (
    <Layout>
      <Seo title={title} />

      <h1 dangerouslySetInnerHTML={{__html: title }} />
      <div dangerouslySetInnerHTML={{__html: content}} />

      <div sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        {articles.map(article => <a key={article.id} href={article.slug}>{article.title}</a>)}
      </div>
    </Layout>
  )
}
