import { SxProps, Theme } from '@mui/system'

const INFO_WIDTH = 500

export const contentSx: SxProps<Theme> = {
  display: 'inline-block',
  background: '#FFFFFF',
  padding: '32px 24px',
  width: `calc(100% - ${INFO_WIDTH}px)`,
  height: '100%',
}

export const titleSx: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-end',
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
}

export const courseListSx: SxProps<Theme> = {
  height: 'calc(100% - 45px)',
  overflowY: 'auto',
  marginTop: '20px',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
}

export const courseCardSx: SxProps<Theme> = {
  margin: '0px 0px 30px 0px',
  height: '198px',
  boxShadow: '0px 3px 6px #00000029',
  padding: '15px 16px',
  boxSizing: 'border-box',
  borderLeft: '2px solid #006ec2',
  display: 'flex',
  '& .thumbnail': {
    aspectRatio: '16/9',
    width: 'auto',
    maxHeight: '154px',
  },
  '& .wrapper': {
    flex: 1,
    wordBreak: 'break-all',
  },
  '& .title': {
    color: '#006ec2',
    fontSize: '28px',
    lineHeight: '34px',
    fontWeight: 'bold',
    marginBottom: '2px',
  },
  '& .info': {
    fontSize: '18px',
    color: '#006EC2',
    display: 'flex',
    alignItems: 'center',
  },

  '& .content': {
    fontSize: '18px',
    lineHeight: '22px',
    color: '#000000',
    marginTop: '8px',
  },
}

export const infoSx: SxProps<Theme> = {
  display: 'inline-block',
  background: 'rgba(0, 110, 194, 0.1)',
  width: `${INFO_WIDTH}px`,
  padding: '22px 25px',
  boxSizing: 'border-box',
}
