/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default ({ pageContext }) => {
  const { page: { title, content, pageSettings: { articles } } } = pageContext

  return (
    <Layout>
      <Seo title={title} />

      <h1 dangerouslySetInnerHTML={{__html: title }} />
      <div dangerouslySetInnerHTML={{__html: content}} />

      <div sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3>Articles:</h3>
        {articles.map(article => (
          <Link key={article.id} to={`/blog/${article.slug}`}>{article.title}</Link>
        ))}
      </div>
    </Layout>
  )
}
