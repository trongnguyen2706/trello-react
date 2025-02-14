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
  defaultDropAnimationSideEffects,
  closestCorners
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import { cloneDeep } from 'lodash'
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
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] =
    useState(null)
  useEffect(() => {
    setOrderedColumn(mapOrder(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  const handleDragStart = event => {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    )
    setActiveDragItemData(event?.active?.data?.current)
    if (event?.active?.data?.current?.columnId)
      setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id))
  }
  const findColumnByCardId = cardId => {
    return orderedColumn.find(column =>
      column.cards.map(card => card._id).includes(cardId)
    )
  }

  const handleDragOver = event => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      return
    }

    const { active, over } = event
    if (!active || !over) return

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData }
    } = active

    const { id: overCardId } = over
    const activeColum = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)

    if (!activeColum || !overColumn) return

    if (activeColum._id !== overColumn._id) {
      setOrderedColumn(prevColumns => {
        const overCardIndex = overColumn.cards.findIndex(
          card => card._id === overCardId
        )
        let newCardIndex
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height

        const modifier = isBelowOverItem ? 1 : 0
        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards?.length + 1
        const nextColumns = cloneDeep(prevColumns)
        const nextActiveColumn = nextColumns.find(
          column => column._id === activeColum._id
        )
        const nextOverColumn = nextColumns.find(
          column => column._id === overColumn._id
        )

        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            card => card._id !== activeDraggingCardId
          )

          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            card => card._id
          )
        }

        if (nextOverColumn) {
          nextOverColumn.cards = nextOverColumn.cards.filter(
            card => card._id !== activeDraggingCardId
          )
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDraggingCardData
          )
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            card => card._id
          )
        }

        return nextColumns
      })
    }
  }

  const handleDragEnd = event => {
    // console.log(event)
    const { active, over } = event

    if (!active || !over) return null
    //Card drag and drop handle
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const {
        id: activeDraggingCardId,
        data: { current: activeDraggingCardData }
      } = active

      const { id: overCardId } = over
      const activeColum = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      if (!activeColum || !overColumn) return
      if (oldColumnWhenDraggingCard._id !== overColumn._id) {
        //Different column
        console.log('Different column')
      } else {
        //Same column
        const oldCardIndex = oldColumnWhenDraggingCard?.cards.findIndex(
          card => card._id === activeDragItemId
        )
        const newCardIndex = overColumn?.cards.findIndex(
          card => card._id === overCardId
        )
        const dndOrdererCards = arrayMove(
          oldColumnWhenDraggingCard?.cards,
          oldCardIndex,
          newCardIndex
        )
        setOrderedColumn(prevColumns => {
          const nextColumns = cloneDeep(prevColumns)
          const targetColumn = nextColumns.find(
            column => column._id === overColumn._id
          )
          if (!targetColumn) return
          targetColumn.cards = dndOrdererCards
          targetColumn.cardOrderIds = targetColumn.cards.map(card => card._id)
          return nextColumns
        })
      }
    }

    //Column drag and drop handle
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      if (active?.id !== over?.id) {
        const oldColumnIndex = orderedColumn.findIndex(
          column => column._id === active?.id
        )
        const newColumnIndex = orderedColumn.findIndex(
          column => column._id === over?.id
        )

        const dndOrdererColumns = arrayMove(
          orderedColumn,
          oldColumnIndex,
          newColumnIndex
        )
        setOrderedColumn(dndOrdererColumns)
      }
      return
    }
    setActiveDragItemData(null)
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setOldColumnWhenDraggingCard(null)
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
      collisionDetection={closestCorners}
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
