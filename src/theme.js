import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { pink, purple, blue, green, yellow } from '@mui/material/colors'

const APP_BAR_HEIGHT = '58px'
const BOARD_BAR_HEIGHT = '58px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`
const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
// Create a theme instance.
const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blue[800], // Pastel Pink
          second: blue[200],
          50: blue[50] // Pastel Purple
        },
        secondary: {
          main: green[200] // Pastel Blue
        },
        background: {
          default: '#f3f3f3', // Light grey for a soft background
          paper: '#ffffff'
        },
        text: {
          primary: '#000000', // Darker text for better readability
          secondary: '#ffffff'
        }
      },
      spacing: factor => `${0.25 * factor}rem`
    },
    dark: {
      palette: {
        primary: {
          main: '#484848' // Darker pastel grey
        },
        secondary: {
          main: green[200] // Pastel Green
        },
        background: {
          default: '#2c2c2c', // Dark background
          paper: '#383838'
        },
        text: {
          primary: '#ffffff',
          secondary: '#cfcfcf'
        }
      },
      spacing: factor => `${0.25 * factor}rem`
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdc3c7',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#74b9ff',
            borderRadius: '8px'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderWidth: '0.5px',
          '&:hover': {
            borderWidth: '2px'
          },
          '&.Mui-focused': {
            borderWidth: '2px'
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.secondary,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.text.secondary
          },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.text.secondary
            }
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderWidth: '0.5px !important'
            },
            '&:hover fieldset': {
              borderWidth: '1px !important'
            },
            '&.Mui-focused fieldset': {
              borderWidth: '1px !important'
            }
          }
        })
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: `${theme.palette.text.secondary}!important `
        })
      }
    }
  }
})

export default theme
