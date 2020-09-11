/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import Header from './Header'

export default ({ children }) => (
  <Container>
    <Header />

    <main id="site-content" role="main">
      {children}
    </main>

    <footer sx={{
      width: '100%',
      height: '200px',
      background: 'footer'
    }}>
      this is footer
    </footer>
  </Container>
)
