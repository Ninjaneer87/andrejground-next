import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const  ThemedTypography = withStyles(theme => ({
  root: {
    color: theme.palette.custom.textColor
  }
}))(Typography);

export default ThemedTypography;