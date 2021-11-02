import { SxProps, Theme } from '@mui/system'

export const loginSx: SxProps<Theme> = {
  position: 'relative',
  background: '#FFFFFF',
  padding: '52px 32px',
  width: '700px',
  boxShadow: '0px 3px 6px #00000029',
  borderRadius: '5px',
  '& .bi': {
    fontSize: '24px',
  },
  '& .title': {
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#009869',
    paddingBottom: '15px',
    borderBottom: 'solid 2px #ECECEC',
    marginBottom: '36px',
  },
  '& button': {
    background: '#009869',
    width: '250px',
    fontSize: '28px',
    lineHeight: '60px',
    padding: 0,
    textTransform: 'none',
  },
  '& .error-msg': {
    color: 'red',
    marginTop: '12px',
    fontSize: '18px',
    textAlign: 'center',
  },
}

export const textSx: SxProps<Theme> = {
  width: '85%',
  marginLeft: '7.5%',
  marginBottom: '38px',
  '& .MuiInput-root': {
    marginTop: '36px',
    paddingLeft: '27px',
    paddingRight: '18px',
    '&::before': {
      borderColor: '#009869 !important',
    },
  },
  '& label': {
    color: '#009869 !important',
    fontSize: '18px',
    lineHeight: '22px',
    fontWeight: 'bold',
  },
  '& input': {
    color: '#707070',
    fontSize: '18px',
    lineHeight: '22px',
  },
}
