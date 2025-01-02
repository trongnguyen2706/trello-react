import { Group, Attachment, ModeComment } from '@mui/icons-material'
import CardActionArea from '@mui/material/CardActionArea'
import CardActions from '@mui/material/CardActions'
import { Card as MuiCard } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
function CardBlock({ card }) {
  const shouldShowCardAction =
    card?.memberIds?.length > 0 &&
    card?.comments?.length > 0 &&
    card?.attachments?.length > 0
  return (
    <MuiCard
      sx={{
        maxWidth: 345,
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
        overflow: 'unset'
      }}
    >
      <CardActionArea>
        {card?.cover && (
          <CardMedia
            sx={{ height: 140 }}
            image={card?.cover}
            alt={`card-cover-${card._id}`}
          />
        )}

        <CardContent sx={{ p: 3 }}>
          <Typography>{card?.title}</Typography>
        </CardContent>
      </CardActionArea>
      {shouldShowCardAction && (
        <CardActions sx={{ color: 'text.primary' }}>
          {card?.memberIds?.length > 0 && (
            <Button
              size='small'
              sx={{
                color: 'text.primary',
                borderColor: 'text.primary',
                '&:hover': {
                  borderColor: 'text.primary'
                }
              }}
              startIcon={<Group />}
            >
              {card?.memberIds?.length}
            </Button>
          )}
          {card?.comments?.length > 0 && (
            <Button
              size='small'
              sx={{
                color: 'text.primary',
                borderColor: 'text.primary',
                '&:hover': {
                  borderColor: 'text.primary'
                }
              }}
              startIcon={<Group />}
            >
              {card?.comments?.length}
            </Button>
          )}
          {card?.attachments?.length > 0 && (
            <Button
              size='small'
              sx={{
                color: 'text.primary',
                borderColor: 'text.primary',
                '&:hover': {
                  borderColor: 'text.primary'
                }
              }}
              startIcon={<Group />}
            >
              {card?.attachments?.length}
            </Button>
          )}
        </CardActions>
      )}
    </MuiCard>
  )
}

export default CardBlock
