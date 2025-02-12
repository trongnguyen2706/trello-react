import { useState } from 'react'
import { Box, Divider } from '@mui/material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'
import {
  AddCard,
  CloudTwoTone,
  DeleteForever,
  DragHandle,
  ExpandMore
} from '@mui/icons-material'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentPaste from '@mui/icons-material/ContentPaste'
import ContentCopy from '@mui/icons-material/ContentCopy'
import Tooltip from '@mui/material/Tooltip'
import ListCards from './ListCards/ListCards'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
function Column({ column }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: column._id, data: { ...column } })
  const dndKitColumnStyles = {
    touchAction: 'none',
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? 0.5 : 1
  }
  const open = Boolean(anchorEl)
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
      <Box
        {...listeners}
        sx={{
          minWidth: '300px',
          maxWidth: '300px',
          backgroundColor: theme =>
            theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: theme =>
            `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`,
          border: isDragging && '3px solid green'
        }}
      >
        <Box
          sx={{
            height: theme => theme.trello.columnHeaderHeight,
            p: 2,
            paddingX: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography
            variant='h6'
            sx={{ fontWeight: 'bold', cursor: 'pointer' }}
          >
            Column Header
          </Typography>
          <Box>
            <Tooltip title='See more'>
              <ExpandMore
                id='basic-button-workspace'
                aria-controls={open ? 'basic-menu-workspace' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'text.primary', cursor: 'pointer' }}
              />
            </Tooltip>

            <Menu
              id='basic-menu-workspace'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button-workspace'
              }}
            >
              <MenuItem sx={{ width: '260px' }}>
                <ListItemIcon>
                  <AddCard fontSize='small' />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
                <Typography variant='body2' color='text.primary'>
                  ⌘N
                </Typography>
              </MenuItem>
              <MenuItem sx={{ width: '260px' }}>
                <ListItemIcon>
                  <ContentCut fontSize='small' />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant='body2' color='text.primary'>
                  ⌘X
                </Typography>
              </MenuItem>
              <MenuItem sx={{ width: '260px' }}>
                <ListItemIcon>
                  <ContentCopy fontSize='small' />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant='body2' color='text.primary'>
                  ⌘C
                </Typography>
              </MenuItem>
              <MenuItem sx={{ width: '260px' }}>
                <ListItemIcon>
                  <ContentPaste fontSize='small' />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant='body2' color='text.primary'>
                  ⌘V
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem sx={{ width: '260px' }}>
                <ListItemIcon>
                  <CloudTwoTone fontSize='small' />
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
              <MenuItem sx={{ width: '260px' }}>
                <ListItemIcon>
                  <DeleteForever fontSize='small' />
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <ListCards cards={column.cards} />
        <Box
          sx={{
            height: theme => theme.trello.columnFooterHeight,
            p: 2,
            paddingX: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Button
            sx={{
              color: 'text.primary',
              borderColor: 'text.primary',
              '&:hover': {
                borderColor: 'text.primary'
              }
            }}
            startIcon={<AddCard />}
          >
            Add Card
          </Button>
          <Tooltip title='Drag to move'>
            <DragHandle sx={{ cursor: 'pointer' }} />
          </Tooltip>
        </Box>
      </Box>
    </div>
  )
}

export default Column
