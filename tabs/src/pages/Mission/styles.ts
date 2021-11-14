import { SxProps, Theme } from '@mui/system'

const SIDE_BAR_WIDTH = 500

export const missionContentSx: SxProps<Theme> = {
  display: 'inline-block',
  background: '#FFFFFF',
  padding: '32px 24px',
  width: `calc(100% - ${SIDE_BAR_WIDTH}px)`,
  height: '100%',
}

export const missionSidebarSx: SxProps<Theme> = {
  display: 'inline-block',
  background: 'rgb(232, 243, 240)',
  width: `${SIDE_BAR_WIDTH}px`,
  padding: '22px 25px',
  boxSizing: 'border-box',
}

export const missionCalendarSx: SxProps<Theme> = {
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
    color: '#009869',
    '& .legend': {
      background: '#009869',
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
  '& .PrivatePickersSlideTransition-root': {
    minHeight: '192px',
  },
  '& .Mui-selected': {
    backgroundColor: '#009869 !important',
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
  width: '29.5%',
  margin: '0px 1.9%',
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
    backgroundColor: '#009869',
  },
}
