import { Box, Container } from '@mui/material'
import AppBar from '@/components/AppBar'
import BoardBar from './BoardBar'
export default function Board() {
  return (
    <>
      <Container
        disableGutters
        maxWidth={false}
        sx={{ height: '100vh', backgroundColor: 'primary.main' }}
      >
        <AppBar />
        <BoardBar />
        <Box
          sx={{
            backgroundColor: 'primary.main',
            width: '100%',
            height: theme =>
              `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
            display: 'flex',
            justifyItems: 'center'
          }}
        >
          Content
        </Box>
      </Container>
    </>
  )
}
