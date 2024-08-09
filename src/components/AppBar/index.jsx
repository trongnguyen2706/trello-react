import { ModeSelect } from '@/components/ModeSelect/index'
import { Box, SvgIcon, Typography } from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '@/assets/trello.svg'
export default function index() {
  return (
    <Box
      sx={{
        width: '100%',
        height: theme => theme.trello.appBarHeight,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.second' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox />
          <Typography
            variant='span'
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'primary.second'
            }}
          >
            Trello
          </Typography>
        </Box>
      </Box>
      <ModeSelect />
    </Box>
  )
}
