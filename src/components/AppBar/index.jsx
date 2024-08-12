import { ModeSelect } from '@/components/ModeSelect/index'
import { Box, SvgIcon, Typography, Button } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '@/assets/trello.svg'
import Workspace from './Menus/Workspace'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
export default function index() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '1rem',
        paddingRight: '1rem'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'text.secondary' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: 'text.secondary', fontSize: '1.25rem' }}
          />
          <Typography
            variant="span"
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'text.secondary'
            }}
          >
            Trello
          </Typography>
          <Workspace />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
        <Box>{/* <Textf' */}</Box>
      </Box>
      <ModeSelect />
    </Box>
  )
}
