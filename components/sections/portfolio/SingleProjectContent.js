import React, { useContext } from "react";
import {
  Container,
  Grid,
  makeStyles,
  Box,
  List,
  ListItem,
  TableCell,
  Table,
  TableBody,
  TableRow,
  Button,
  Divider,
} from "@material-ui/core";
import Heading from "../../UI/Heading";
import patternImage2 from "../../../public/img/pattern2.webp";
import ThemedTypography from "../../UI/ThemedTypography";
import DefaultCard from "../../cards/DefaultCard";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CodeIcon from "@material-ui/icons/Code";
import LinkIcon from "@material-ui/icons/Link";
import ThemeContext from "../../../context/themeContext";
import Button3D from "../../UI/Button3D";
import BlurIn from "../../UI/BlurIn";
// import { imagesPath } from '../../../config';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    position: "relative",
    paddingBottom: 50,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(3),
    },
  },
  image: {
    backgroundImage: ({ image }) => image && `url('/images/${image}')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    height: 600,
    maxHeight: "90vw",
    filter: theme.palette.custom.imageDropShadow,
  },
  sticky: {
    position: "sticky",
    top: 100,
  },
  subtitle: {
    color: theme.palette.custom.textColor,
    fontWeight: 400,
    padding: theme.spacing(1),
    borderRadius: 10,
    width: "fit-content",
    minWidth: 200,
    margin: "0 auto",
    position: "relative",
    marginBottom: "20px",
    textAlign: "center",
    "&::after": {
      content: '""',
      position: "absolute",
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "50px",
      maxWidth: "100%",
      height: "2px",
      backgroundColor: theme.palette.custom.accent,
    },
  },
  features: {
    color: theme.palette.custom.textColor,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 25,
  },
  feature: {
    width: "fit-content",
    fontSize: "1rem",
    margin: "5px",
    borderRadius: 6,
    backgroundColor: "#6f6f6faa",
    color: "#fff",
  },
  tech: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 25,
    gap: 16,
  },
  techItem: {
    width: "fit-content",
    fontSize: "1rem",
    borderRadius: 12,
    boxShadow: theme.palette.custom.cardBoxShadow,
    color: theme.palette.custom.textColor,
    [theme.breakpoints.up(600)]: {
      padding: "1rem 2rem",
    },
  },
  table: {
    maxWidth: 500,
    margin: "0 auto",
  },
  cell: {
    color: theme.palette.custom.textColor,
    border: "none",
    padding: "1rem 0px",
  },
  divider: {
    backgroundColor: theme.palette.custom.accent,
    boxShadow: "0px 10px 20px #000000be",
    margin: "20px 0",
    width: "100%",
  },
}));
const SingleProjectContent = (props) => {
  const { darkMode } = useContext(ThemeContext);
  const classes = useStyles({ image: props.image, darkMode });

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Heading text={props.title} />
      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        spacing={3}
      >
        <Grid item xs={12} sm={10} md={6} lg={5}>
          <BlurIn>
            <Box maxWidth={650}>
              <BlurIn>
                <ThemedTypography
                  component="h3"
                  variant="h5"
                  className={classes.subtitle}
                >
                  About {props.title}
                </ThemedTypography>
              </BlurIn>
              <BlurIn>
                <ThemedTypography>{props.description}</ThemedTypography>
              </BlurIn>
              {props.sideNote && (
                <>
                  <BlurIn>
                    <br />
                    <ThemedTypography
                      style={{ opacity: 0.6 }}
                      component="small"
                      variant="body2"
                    >
                      {props.sideNote}
                    </ThemedTypography>
                  </BlurIn>
                </>
              )}
              <br />
              <br />

              <BlurIn>
                <ThemedTypography
                  component="h3"
                  variant="h5"
                  className={classes.subtitle}
                >
                  Features & functionalities
                </ThemedTypography>
              </BlurIn>
              <List disablePadding className={classes.features}>
                {props.features?.map((feature, i) => (
                  <BlurIn delay={i * 150} key={feature}>
                    <ListItem className={classes.feature}>{feature}</ListItem>
                  </BlurIn>
                ))}
              </List>
              <br />
              <br />

              <BlurIn>
                <ThemedTypography
                  component="h3"
                  variant="h5"
                  className={classes.subtitle}
                >
                  Technologies used
                </ThemedTypography>
              </BlurIn>
              <BlurIn>
                <List className={classes.tech}>
                  {props.technologies?.map((tech, i) => (
                    <ListItem
                      key={tech}
                      className={classes.techItem + " blurIn"}
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      {tech}
                    </ListItem>
                  ))}
                </List>
              </BlurIn>
              <br />
              <br />

              <BlurIn>
                <ThemedTypography
                  component="h3"
                  variant="h5"
                  className={classes.subtitle}
                >
                  And more
                </ThemedTypography>
              </BlurIn>
              <BlurIn>
                <Table className={classes.table}>
                  <TableBody>
                    {props.dataSource ? (
                      <TableRow>
                        <TableCell
                          className={classes.cell}
                          style={{ opacity: 0.6 }}
                        >
                          <strong>Data source:</strong>
                        </TableCell>
                        <TableCell className={classes.cell} align="right">
                          <Button
                            component="a"
                            href={props.dataSource}
                            target="_blank"
                            rel="noopener noreferrer"
                            color={`${darkMode ? "secondary" : "primary"}`}
                          >
                            <OpenInNewIcon />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ) : null}
                    <TableRow>
                      <TableCell
                        className={classes.cell}
                        style={{ opacity: 0.6 }}
                      >
                        <strong>Project type:</strong>
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {props.projectType?.toUpperCase()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell
                        className={classes.cell}
                        style={{ opacity: 0.6 }}
                      >
                        <strong>Completed on:</strong>
                      </TableCell>
                      <TableCell className={classes.cell} align="right">
                        {props.completedAt}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </BlurIn>

              <BlurIn>
                <Divider classes={{ root: classes.divider }} />
              </BlurIn>

              <BlurIn>
                <ButtonGroup
                  aria-label="outlined primary button group"
                  fullWidth
                  style={{ gap: 20 }}
                >
                  <Button3D
                    variant="text"
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.siteLink}
                    disabled={!props.siteLink}
                    endIcon={<LinkIcon />}
                    color={`${darkMode ? "secondary" : "primary"}`}
                  >
                    Live site
                  </Button3D>
                  <Button3D
                    variant="text"
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={props.codeLink}
                    disabled={!props.codeLink}
                    endIcon={<CodeIcon />}
                    color={`${darkMode ? "secondary" : "primary"}`}
                  >
                    Code
                  </Button3D>
                </ButtonGroup>
              </BlurIn>
            </Box>
          </BlurIn>
        </Grid>

        <Grid item xs={12} md={6} className={classes.sticky}>
          <BlurIn>
            <div className={classes.image} />
          </BlurIn>
        </Grid>
      </Grid>
      <Box margin="30px 0"></Box>
    </Container>
  );
};

export default React.memo(SingleProjectContent);
