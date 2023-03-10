import fonts from './fonts';

const commonSettings = {
  direction: 'ltr',
  typography: {
    fontSize: '16px',
    fontFamily: 'Square',
    h1: {
      fontSize: '52.8px',
    },
    h2: {
      fontSize: '36.8px',
      fontWeight: 600,
      letterSpacing: '1.3px',
    },
    h3: {
      fontSize: '28px',
    },
    h4: {
      fontSize: '24px',
    },
    h5: {
      fontSize: '20px',
      letterSpacing: '0.4px',
    },
    h6: {
      fontSize: '16px',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: 1,
    },
    body2: {
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: 1,
    },
    button: {
      textTransform: 'none',
      fontSize: '20px',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': fonts,
        body: {
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        },
      },
    },
    MuiToolbar: {
      root: {
        justifyContent: 'flex-end',
      },
    },
    MuiPaper: {
      root: {
        backdropFilter: 'blur(0px)',
      },
    },
    MuiContainer: {
      root: {
        backgroundColor: 'transparent',
        flexGrow: 1,
      },
    },
    MuiLink: {
      root: {
        textUnderlineOffset: '.23rem',
        cursor: 'pointer',
        '&:hover': {
          textDecoration: 'none',
          underline: 'none',
        },
      },
    },
    MuiTable: {
      root: {
        margin: '10px 0px',
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 0,
        fontSize: '1rem',
      },
      head: {
        color: '#999999',
      },
    },
    MuiDrawer: {
      root: {
        width: '280px',
        flexShrink: 0,
      },
      paper: {
        width: 'inherit',
        backgroundColor: 'inherit',
        padding: 0,
        zIndex: 7,
      },
    },
    MuiBackdrop: {
      root: {
        backdropFilter: 'blur(15px)',
        zIndex: 0,
      },
    },
    MuiToggleButton: {
      root: {
        border: 0,
        borderRadius: '5px',
        margin: '8px',
        padding: '10px',
      },
    },
    MuiButton: {
      root: {
        borderRadius: '5px',
        textTransform: 'none',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        minWidth: 'max-content',
        maxHeight: '40px',
      },
      containedPrimary: {
        border: 0,
        fontWeight: '500',
      },
      containedSecondary: {
        fontWeight: '400',
      },
      outlinedPrimary: {
        height: '33px',
        padding: '9px 20px',
      },
      outlinedSecondary: {
        textTransform: 'none',
        textDecoration: 'none',
        height: '33px',
        fontSize: '1.1em',
        padding: '9px 20px',
      },
      text: {
        '&:hover': {
          backgroundColor: '#00000000',
        },
      },
      textSecondary: {
        textTransform: 'none',
        textDecoration: 'none',
        padding: '2px 2px',
        '&:hover': {
          backgroundColor: '#00000000',
        },
      },
    },
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: '#00000000',
        },
      },
    },
    MuiInputBase: {
      root: {
        height: '43px',
        padding: '5px',
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: 'translate(16px, 14px) scale(1)',
      },
    },
    MuiTabs: {
      root: {
        minHeight: '40px',
        height: '40px',
      },
    },
    MuiTab: {
      root: {
        minWidth: 'min-content !important',
        width: 'min-content',
        padding: '0px',
        margin: '0px 10px',
        fontWeight: 400,
        fontSize: '24px',
        fontStyle: 'normal',
        lineHeight: '24px',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiButton: {
      disableElevation: true,
      disableFocusRipple: true,
      disableRipple: true,
    },
    MuiTextButton: {
      disableFocusRipple: true,
      disableRipple: true,
    },
    MuiPaper: {
      elevation: 0,
    },
    MuiLink: {
      underline: 'none',
    },
    MuiSvgIcon: {
      viewBox: '0 0 20 20',
      fontSize: 'small',
    },
    MuiBackdrop: {
      transitionDuration: 300,
    },
    MuiPopover: {
      transitionDuration: 300,
    },
  },
};

export default commonSettings;
