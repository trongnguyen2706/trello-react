import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ListColumn from './ListColumn/ListColumn'
import { mapOrder } from '@/utils/sorts'
import {
  DndContext,
  MouseSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
export default function BoardContent({ board }) {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 }
  })
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 8
    }
  })

  const touchSensor = useSensor(PointerSensor, {
    activationConstraint: { delaylay: 250, tolerance: 5 }
  })
  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumn, setOrderedColumn] = useState([])

  useEffect(() => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragEnd = event => {
    const { active, over } = event

    if (!over) return null

    if (active?.id !== over?.id) {
      const oldIndex = orderedColumn.findIndex(
        column => column._id === active?.id
      )
      const newIndex = orderedColumn.findIndex(
        column => column._id === over?.id
      )

      const dndOrdererColumns = arrayMove(orderedColumn, oldIndex, newIndex)
      const dndOrdererColumnsIds = dndOrdererColumns.map(column => column._id)
      setOrderedColumn(dndOrdererColumns)
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: theme => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumn columns={orderedColumn} />
      </Box>
    </DndContext>
  )
}
