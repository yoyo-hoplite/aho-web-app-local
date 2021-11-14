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
  // TODO: independent
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
    marginRight: '20.5px',
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
  background: 'rgb(228, 239, 247)',
  width: `${INFO_WIDTH}px`,
  padding: '22px 25px',
  boxSizing: 'border-box',
}

/***********************/
/**** Course History ***/
/***********************/

export const historySx: SxProps<Theme> = {
  boxShadow: '0px 3px 6px #00000029',
  background: '#FFF',
  padding: '22px',
  '& .title-wrapper': {
    display: 'flex',
    borderBottom: 'solid 2px #ececec',
    paddingBottom: '13px',
  },
  '& .rule-icon': {
    width: '53px',
    height: '53px',
    marginRight: '32px',
  },
  '& .title': {
    fontSize: '28px',
    lineHeight: '34px',
    color: '#000',
    fontWeight: 'bold',
  },
  // TODO: independent
  '& .legend': {
    display: 'block',
    width: '10px',
    height: '10px',
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
      marginLeft: '30px',
      background: '#707070',
    },
  },
  '& .navigation-row': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '24px',
    marginTop: '20px',
    '& .type': {
      color: '#000',
      fontWeight: 'bold',
      textTransform: 'capitalize',
    },
    '& .arrow': {
      cursor: 'pointer',
      '&.disabled': {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  },
}

export const historyRowSx: SxProps<Theme> = {
  color: '#006EC2',
  fontSize: '18px',
  lineHeight: '22px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  borderBottom: 'solid 2px #ECECEC',
  margin: '18px 20px 0px 20px',
  '& .name': {
    fontWeight: 'bold',
  },
}

export const badgesSx: SxProps<Theme> = {
  marginTop: '22px',
  '& .title': {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '22px',
    marginLeft: '16px',
  },
  '& .badges-wrapper': {
    background: '#fff',
    paddingTop: '15px',
    display: 'flex',
    flexWrap: 'wrap',
    boxShadow: '0px 3px 6px #00000029',
  },
}

export const badgeInfoSx: SxProps<Theme> = {
  width: '25%',
  margin: '0px 4%',
  fontSize: '18px',
  lineHeight: '22px',
  fontWeight: 'bold',
  color: '#000',
  textAlign: 'center',
  marginBottom: '30px',
  '& .badge-title': {
    height: '44px',
  },
  '& .badge-img': {
    width: '100%',
  },
  '& .MuiLinearProgress-root': {
    width: '82px',
    margin: '8px auto 0px',
  },
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#006EC2',
  },
}
