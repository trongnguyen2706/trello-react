import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import ListColumn from './ListColumn/ListColumn'
import { mapOrder } from '@/utils/sorts'
import {
  DndContext,
  MouseSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import Column from './ListColumn/Column/Column'
import Card from './ListColumn/Column/ListCards/Card/Card'
const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}
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
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

  useEffect(() => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragStart = event => {
    console.log(event)
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    )
    setActiveDragItemData(event?.active?.data?.current)
  }

  const handleDragOver = event => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      return
    }

    console.log('event', event)
    const { active, over } = event
  }

  const handleDragEnd = event => {
    // console.log(event)
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      console.log('Keo card')
      return
    }
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
      setActiveDragItemData(null)
      setActiveDragItemId(null)
      setActiveDragItemType(null)
    }
  }

  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          width: '100%',
          height: theme => theme.trello.boardContentHeight,
          p: '10px 0'
        }}
      >
        <ListColumn columns={orderedColumn} />
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemData && null}
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && (
              <Card card={activeDragItemData} />
            )}
          {activeDragItemId &&
            activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
              <Column column={activeDragItemData} />
            )}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}
