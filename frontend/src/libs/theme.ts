import { createMuiTheme } from '@material-ui/core/styles';
import { orange, grey, lightBlue, yellow, red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
      light: orange[300],
      dark: orange[700]
    },
    secondary: {
      main: lightBlue[500],
      light: lightBlue[300],
      dark: lightBlue[700]
    },
    warning: {
      main: yellow['A400'],
    },
    error: {
      main: red['A400'],
    }
  },
});

export default theme;
