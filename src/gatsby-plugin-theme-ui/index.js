export default {
  space: [0, 4, 8, 16, 32, 48, 64, 128, 256, 512],
  breakpoints: ['600px', '900px', '1200px', '1600px'],
  layout: {
    container: {
      py: 2,
      px: 4,
      maxWidth: ['1000px', '1000px', '1000px', '1200px']
    }
  },
  fonts: {
    body: '"Open Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    serif: 'Lyon, Georgia, system-ui, -apple-system, BlinkMacSystemFont, serif'
  },
  fontSizes: [12, 14, 16, 18, 22, 32, 48],
  fontWeights: {
    body: 300,
    heading: 400
  },
  lineHeights: {
    body: 1.25,
    heading: 1.25,
  },
  letterSpacings: {
    body: '.025em',
    heading: '.01em'
  },
  colors: {
    primary: 'black',
    secondary: '#b48d59',
    background: 'white',
    muted: '#f6f6f6',
    grey: '#a29baf',
    footer: '#012c72'
  },
  links: {
    nav: {
      display: 'inline-block',
      fontSize: 1,
      textTransform: 'uppercase',
      letterSpacing: 'heading',
      textDecoration: 'none',
      fontWeight: 'heading',
      color: 'primary'
    },
    text: {
      textDecoration: 'underline'
    }
  },
  text: {
    heading: {
      fontFamily: 'body',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      fontSize: 4
    },
    name: {
      fontSize: '16px',
      textTransform: 'uppercase'
    },
    role: {
      mt: '15px',
      fontSize: '14px',
      textTransform: 'uppercase'
    },
    bio: {
      fontSize: '16px'
    }
  },
  buttons: {
    primary: {
      px: 4,
      py: 2,
      fontSize: '16px',
      background: 'none',
      border: '1px solid',
      borderColor: 'primary',
      letterSpacing: '2px',
      borderRadius: '35px',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none'
      }
    }
  },
  forms: {
    input: {
      background: 'none',
      border: 'none',
      outline: 'none',
      borderBottom: '1px solid',
      borderColor: 'primary',
      borderRadius: 0,
      color: 'primary',
      letterSpacing: 'body',
      transition: 'border-color .25s ease-in-out',
      '&:focus': {
        border: 'none',
        outline: 'none',
        borderBottom: '1px solid',
        borderColor: 'secondary',
      },
      '&::placeholder': {
        color: 'grey'
      },
      agewall: {
        outline: 'none',
        border: '2px solid',
        borderColor: 'white',
        textAlign: 'center',
        '&:focus': {
          outline: 'none',
          border: '2px solid',
          borderColor: 'secondary'
        },
      }
    },
    select: {
      background: 'none',
      border: 'none',
      borderBottom: '1px solid',
      borderColor: 'primary',
      borderRadius: 0,
      color: 'grey',
      '&:focus': {
        border: 'none',
        outline: 'none',
        borderBottom: '1px solid',
        borderColor: 'secondary',
      },
    }
  },
  styles: {
    root: {
      fontSize: [3, 3, 2, 2, 3],
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      letterSpacing: 'body',
      color: 'primary'
    },
    a: {
      color: 'primary',
      ':visited': {
        color: 'primary'
      }
    }
  }
}