/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui'
import { useState } from 'react'
import { Link } from 'gatsby'
import Menu from './Menu'
import Logo from '../images/logo.svg'

export default ({ bgColor }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <Box sx={{ backgroundColor: showMenu ? 'white' : bgColor }}>
      <Container>
        <header sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: [2, 2, 4]
        }}>
          <Link to="/">
            <img src={Logo} alt="logo" sx={{ width: '120px' }}/>
          </Link>

          <Menu showMenu={showMenu} setShowMenu={setShowMenu} />
        </header>
      </Container>
    </Box>
  )
}
