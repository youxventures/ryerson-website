export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['600px', '900px', '1200px', '1800px'],
  layout: {
    container: {
      p: 4,
      maxWidth: '1440px'
    }
  },
  fonts: {
    body: 'FuturaPT, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  fontSizes: [12, 14, 16, 18, 22, 32],
  fontWeights: {
    body: 300,
    heading: 400
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: '.025em',
    heading: '.135em'
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
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading',
      textTransform: 'uppercase',
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
      fontSize: 3,
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