import { Box } from '@mui/material'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import { AddCard } from '@mui/icons-material'
import {
  SortableContext,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable'
function ListColumn({ columns }) {
  return (
    <SortableContext
      items={columns?.map(column => column._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden'
        }}
      >
        {columns?.map(column => (
          <>
            <Column key={column._id} column={column} />
          </>
        ))}
        <Box
          sx={{
            minWidth: '200px',
            maxWidth: '200px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            backgroundColor: '#ffffff3d'
          }}
        >
          <Button
            sx={{
              color: 'text.secondary',
              width: '100%',
              justifyContent: 'flex-start',
              pl: 4
            }}
            startIcon={<AddCard />}
          >
            Add new Column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumn
