import { Box } from '@mui/material'

import CardBlock from './Card/Card.jsx'

function ListCards({ cards }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        p: '0 5px',
        m: '0 5px',
        overflowY: 'auto',
        overflowX: 'hidden',
        maxHeight: theme =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#ced0da'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#74b9ff'
        }
      }}
    >
      {cards?.map(card => (
        <CardBlock key={card._id} card={card} />
      ))}
      {/* <Card
      sx={{
        maxWidth: 345,
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography>MERN Stack 01</Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}
    </Box>
  )
}

export default ListCards
