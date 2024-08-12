import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { pink, purple, blue, green, yellow } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[800], // Pastel Pink
          second: blue[200], // Pastel Purple
        },
        secondary: {
          main: green[200], // Pastel Blue
        },
        background: {
          default: '#f3f3f3', // Light grey for a soft background
          paper: '#ffffff',
        },
        text: {
          primary: '#000000', // Darker text for better readability
          secondary: '#ffffff',
        },
      },
      spacing: factor => `${0.25 * factor}rem`,
    },
    dark: {
      palette: {
        primary: {
          main: '#484848', // Darker pastel grey
        },
        secondary: {
          main: green[200], // Pastel Green
        },
        background: {
          default: '#2c2c2c', // Dark background
          paper: '#383838',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#cfcfcf',
        },
      },
      spacing: factor => `${0.25 * factor}rem`,
    },
  },
  // ...other properties
})

export default theme
