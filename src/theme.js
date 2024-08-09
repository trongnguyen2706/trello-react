import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px'
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#ffffff',
          second: 'green'
        }
      },
      spacing: factor => `${0.25 * factor}rem`
    },
    dark: {
      palette: {
        primary: {
          main: '#000'
        }
      },
      spacing: factor => `${0.25 * factor}rem`
    }
  }
  // ...other properties
})

export default theme
