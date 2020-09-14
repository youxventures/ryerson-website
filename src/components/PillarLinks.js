/** @jsx jsx */
import { jsx, Grid, Box, Heading, Text, Link } from 'theme-ui'
import Arrow from '../images/arrow.svg'

const data = [
  {
    id: 1,
    color: 'blue',
    heading: 'Urban Design & Infrastructure',
    text: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna etes set aliqua.',
    link: '/'
  },
  {
    id: 2,
    color: 'green',
    heading: 'Urban Health & Wellbeing',
    text: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna etes set aliqua.',
    link: '/'
  },
  {
    id: 3,
    color: 'pink',
    heading: 'Governance & Social Justice',
    text: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna etes set aliqua.',
    link: '/'
  },
  {
    id: 4,
    color: 'yellow',
    heading: 'Econimic Development',
    text: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna etes set aliqua.',
    link: '/'
  },
  {
    id: 5,
    color: 'purple',
    heading: 'Creativity & Culture',
    text: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna etes set aliqua.',
    link: '/'
  },
  {
    id: 6,
    color: 'cadetblue',
    heading: 'Migration & Settlement',
    text: 'Lorem ipsum dolor sit amet, conse ctetur adipiscing, sed do eiusmod tempor incididunt ut labore et dolore magna etes set aliqua.',
    link: '/'
  }
]

export default () => (
  <Grid columns={3} gap={6} sx={{ gridRowGap: 5 }}>
    {data.map(pillar => {
      return (
        <Box sx={{ width: '100%' }}>
          <div sx={{
            width: '120px',
            height: '120px',
            background: pillar.color,
            borderRadius: '50%'
          }} />

          <Heading key={pillar.id} sx={{
            marginTop: '20px',
            marginBottom: '25px',
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Georgia',
            textDecoration: 'underline'
          }}>
            {pillar.heading}
          </Heading>

          <Text>
            {pillar.text}
          </Text>

          <Link href={pillar.link} sx={{
            display: 'block',
            width: '50px',
            marginTop: '25px'
          }}>
            <img src={Arrow} alt="arrow" />
          </Link>
        </Box>
      )
    })}
  </Grid>
)