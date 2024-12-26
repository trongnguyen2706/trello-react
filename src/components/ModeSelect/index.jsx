import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'
import { Box } from '@mui/material'
import LightMode from '@mui/icons-material/LightMode'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessOutlined from '@mui/icons-material/SettingsBrightnessOutlined'

export function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = event => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }

  return (
    <FormControl size='small' sx={{ minWidth: '120px' }}>
      <InputLabel
        id='label-select-dark-light-mode'
        sx={{
          color: 'white!important'
        }}
      >
        Mode
      </InputLabel>
      <Select
        labelId='label-select-dark-light-mode'
        id='demo-select-small'
        value={mode}
        label='Mode'
        onChange={handleChange}
        sx={{
          color: 'white',
          '& fieldset': {
            borderColor: 'white'
          },
          '& fieldset.Mui-focused': {
            borderColor: 'red'
          },
          '&:hover fieldset': {
            borderColor: 'white!important'
          },

          '&.Mui-focused fieldset': {
            borderColor: 'white!important'
          },

          '& .MuiInputLabel-root': {
            color: 'white'
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white!important'
          },
          '& .MuiSvgIcon-root': {
            color: 'white'
          }
        }}
      >
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightMode />
            Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutlined />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsBrightnessOutlined />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
