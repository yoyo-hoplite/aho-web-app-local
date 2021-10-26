import { SxProps, Theme } from '@mui/system'

export const titleSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-end',
  marginTop: '27px',
  '& .title': {
    fontWeight: 'bold',
    fontSize: '36px',
    lineHeight: '43px',
    color: '#000000',
  },
  '& .legend': {
    display: 'block',
    width: '10px',
    height: '10px',
    marginLeft: '30px',
    marginRight: '8px',
    borderRadius: '2px',
  },
  '& .completed': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#006EC2',
    '& .legend': {
      background: '#006EC2',
    },
  },
  '& .processing': {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    lineHeight: '22px',
    color: '#707070',
    '& .legend': {
      background: '#707070',
    },
  },
} as const
