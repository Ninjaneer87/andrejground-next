import React from "react";
import {
  Container,
  Grid,
  Box,
  List,
  ListItem,
  TableCell,
  Table,
  TableBody,
  TableRow,
  Typography,
} from "@mui/material";
import Heading from "@/components/UI/Heading";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ButtonGroup from "@mui/material/ButtonGroup";
import CodeIcon from "@mui/icons-material/Code";
import LinkIcon from "@mui/icons-material/Link";
import Button3D from "@/components/UI/Button3D";
import BlurIn from "@/components/UI/BlurIn";
import { IProject } from "models/Project";
import StyledDivider from "@/components/UI/StyledDivider";

type Props = { project: IProject };

const SingleProjectContent = ({ project }: Props) => {
  return (
    <Container maxWidth="xl" className="min-h-screen relative pb-[50px] md:p-6">
      <Heading component='h1' text={project.title} />
      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        spacing={3}
        marginBottom={6}
      >
        <Grid item xs={12} sm={10} md={6} lg={5}>
          <BlurIn>
            <Box maxWidth={650}>
              <BlurIn>
                <Typography component="h3" variant="h5" className="subtitle">
                  About {project.title}
                </Typography>
              </BlurIn>
              <BlurIn>
                <Typography>{project.description}</Typography>
              </BlurIn>
              {project.sideNote && (
                <>
                  <BlurIn>
                    <br />
                    <Typography
                      className="opacity-60"
                      component="small"
                      variant="body2"
                    >
                      {project.sideNote}
                    </Typography>
                  </BlurIn>
                </>
              )}
              <br />
              <br />

              <BlurIn>
                <Typography component="h3" variant="h5" className="subtitle">
                  Features & functionalities
                </Typography>
              </BlurIn>
              <List
                disablePadding
                className="flex flex-wrap justify-center mt-[25px] gap-[5px]"
              >
                {project.features?.map((feature, i) => (
                  <BlurIn delay={i * 150} key={feature}>
                    <ListItem className="w-fit text-[1rem] rounded-[6px] bg-[#6f6f6faa] text-white">
                      {feature}
                    </ListItem>
                  </BlurIn>
                ))}
              </List>
              <br />
              <br />

              <BlurIn>
                <Typography component="h3" variant="h5" className="subtitle">
                  Technologies used
                </Typography>
              </BlurIn>
              <BlurIn>
                <List className="flex flex-wrap justify-center mt-[25px] gap-4">
                  {project.technologies?.map((tech, i) => (
                    <ListItem
                      key={tech}
                      className="w-fit text-[1rem] rounded-xl shadow-3d-card py-3 px-4 blur-in"
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
                <Typography component="h3" variant="h5" className="subtitle">
                  And more
                </Typography>
              </BlurIn>
              <BlurIn>
                <Table className="max-w-[500px] my-0 mx-auto">
                  <TableBody>
                    {project.dataSource ? (
                      <TableRow>
                        <TableCell className="border-none p-[1rem_0px]">
                          <strong>Data source:</strong>
                        </TableCell>
                        <TableCell
                          className="border-none p-[1rem_0px]"
                          align="right"
                        >
                          <Button3D
                            component="a"
                            href={project.dataSource}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <OpenInNewIcon />
                          </Button3D>
                        </TableCell>
                      </TableRow>
                    ) : null}
                    <TableRow>
                      <TableCell className="border-none p-[1rem_0px]">
                        <strong>Project type:</strong>
                      </TableCell>
                      <TableCell
                        className="border-none p-[1rem_0px]"
                        align="right"
                      >
                        {project.projectType?.toUpperCase()}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="border-none p-[1rem_0px]">
                        <strong>Completed on:</strong>
                      </TableCell>
                      <TableCell
                        className="border-none p-[1rem_0px]"
                        align="right"
                      >
                        {project.completedAt}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </BlurIn>

              <BlurIn>
                <StyledDivider />
              </BlurIn>

              <BlurIn>
                <ButtonGroup
                  aria-label="outlined primary button group"
                  fullWidth
                  className="gap-5"
                >
                  <Button3D
                    variant="text"
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.siteLink}
                    disabled={!project.siteLink}
                    endIcon={<LinkIcon />}
                  >
                    Live site
                  </Button3D>
                  <Button3D
                    variant="text"
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.codeLink}
                    disabled={!project.codeLink}
                    endIcon={<CodeIcon />}
                  >
                    Code
                  </Button3D>
                </ButtonGroup>
              </BlurIn>
            </Box>
          </BlurIn>
        </Grid>

        <Grid item xs={12} md={6} className="sticky top-[100px]">
          <BlurIn>
            <div
              style={{ backgroundImage: `url('/images/${project.image}')` }}
              className={`bg-no-repeat bg-center bg-contain h-[600px] max-h-[90vw] drop-shadow-drop`}
            />
          </BlurIn>
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(SingleProjectContent);
