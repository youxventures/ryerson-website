/** @jsx jsx */
import { jsx, Container } from 'theme-ui'
import { Link } from 'gatsby'
import Menu from './Menu'
import Logo from '../images/logo.svg'

export default () => (
  <Container>
    <header sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      my: 4
    }}>
      <Link to="/">
        <img src={Logo} alt="logo" sx={{ width: '120px' }}/>
      </Link>

      <Menu />
    </header>
  </Container>
)