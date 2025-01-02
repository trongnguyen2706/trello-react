import { Box, Chip, AvatarGroup, Avatar, Tooltip, Button } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VPNLockIcon from '@mui/icons-material/VPNLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '@/utils/formatters'
const MENU_STYLES = {
  color: 'text.secondary',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: 0.5,
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'text.secondary'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}
export default function BoardBar({ board }) {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        width: '100%',
        height: theme => theme.trello.boardBarHeight,
        display: 'flex',
        gap: 2,
        paddingX: 2,
        justifyContent: 'space-between',
        justifyItems: 'center',
        borderTop: '1px solid white',
        bgcolor: theme =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<VPNLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label={'Add to Drive'}
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<BoltIcon />}
          label='Automation'
          clickable
          sx={MENU_STYLES}
        />
        <Chip
          icon={<FilterListIcon />}
          label='Filter'
          clickable
          sx={MENU_STYLES}
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'text.secondary',
            borderColor: 'text.secondary',
            '&:hover': {
              borderColor: 'text.secondary'
            }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              border: 'none',
              color: 'text.secondary',
              cursor: 'pointer',
              '&:first-of-type': {
                bgcolor: '#a4b0be'
              }
            }
          }}
        >
          <Tooltip title='Sam'>
            <Avatar alt='Sam' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='Sam'>
            <Avatar alt='Sam' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='Sam'>
            <Avatar alt='Sam' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='Sam'>
            <Avatar alt='Sam' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='Sam'>
            <Avatar alt='Sam' src='/static/images/avatar/1.jpg' />
          </Tooltip>
          <Tooltip title='Sam'>
            <Avatar alt='Sam' src='/static/images/avatar/1.jpg' />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}
