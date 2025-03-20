import { ModeSelect } from '@/components/ModeSelect/ModeSelect'
import {
  Box,
  SvgIcon,
  Typography,
  Button,
  TextField,
  Badge,
  Tooltip,
  InputAdornment
} from '@mui/material'
import { useState } from 'react'
import AppsIcon from '@mui/icons-material/Apps'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { ReactComponent as TrelloIcon } from '@/assets/trello.svg'
import Workspace from './Menus/Workspace'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import { NotificationsNone, HelpOutline, LibraryAdd } from '@mui/icons-material'
import Profile from './Menus/Profile'

export default function AppBar() {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchChange = event => {
    setSearchValue(event.target.value)
  }

  const handleClearSearch = () => {
    setSearchValue('')
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: theme => theme.trello.appBarHeight,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        color: 'white',
        overflowX: 'auto',
        paddingX: 2,
        bgcolor: theme =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'text.secondary', marginRight: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{ color: 'text.secondary', fontSize: '1.25rem' }}
          />
          <Typography
            variant='span'
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold',
              color: 'text.secondary'
            }}
          >
            Trello
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            <Workspace />
            <Recent />
            <Starred />
            <Templates />
            <Button
              variant='outlined'
              startIcon={<LibraryAdd />}
              sx={{ color: 'text.secondary', border: 'none' }}
            >
              Create
            </Button>
          </Box>
        </Box>
        <Box></Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <TextField
          id='outlined-search'
          label='Search...'
          type='search'
          size='small'
          value={searchValue}
          onChange={handleSearchChange}
          sx={{ minWidth: '120px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'text.secondary' }} />
              </InputAdornment>
            ),
            endAdornment: searchValue && (
              <InputAdornment position='end'>
                <CloseIcon
                  sx={{ color: 'text.secondary', cursor: 'pointer' }}
                  onClick={handleClearSearch}
                />
              </InputAdornment>
            )
          }}
        />
        <ModeSelect />
        <Tooltip title='Notification'>
          <Badge
            color='text.secondary'
            variant='dot'
            sx={{ cursor: 'pointer' }}
          >
            <NotificationsNone sx={{ color: 'text.secondary' }} />
          </Badge>
        </Tooltip>
        <Tooltip title='Help'>
          <HelpOutline sx={{ cursor: 'pointer' }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}
