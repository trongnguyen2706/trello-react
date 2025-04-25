import { Container } from '@mui/material'
import AppBar from '@/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '@/apis'
// import { mockData } from '@/apis/mock-data'
export default function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '6809fae2bce2195a2b3212fc'
    const columnId = '680a04f5b33f728286d182f7'
    fetchBoardDetailsAPI(boardId).then(board => {
      console.log('test', board)
      setBoard(board)
    })
  }, [])
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: '100vh', backgroundColor: 'primary.main' }}
      >
        <AppBar />
        <BoardBar board={board} />
        <BoardContent board={board} />
      </Container>
    </>
  )
}
