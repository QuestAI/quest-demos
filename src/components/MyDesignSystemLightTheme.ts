
import { createTheme } from "@mui/material/styles";

   
const globalTheme: any = createTheme({
  palette: {
   "mode": "light"
 },
  typography: {},
  customShadows: {
   "shadows": {
     "boxShadow": "0px 3px 12px rgba(0, 0, 0, 0.12)"
   },
   "bg blur": {
     "backdropFilter": "blur(24px)",
     "WebkitBackdropFilter": "blur(24px)"
   }
 },
} as any);

const questTheme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      }
    },
  }
}, globalTheme);

export default questTheme;
