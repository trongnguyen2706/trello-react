import { Box } from '@mui/material'
import ListColumn from './ListColumn/ListColumn'
import { mapOrder } from '@/utils/sorts'
export default function BoardContent({ board }) {
  const oderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        width: '100%',
        height: theme => theme.trello.boardContentHeight,
        p: '10px 0'
      }}
    >
      <ListColumn columns={oderedColumns} />
    </Box>
  )
}
