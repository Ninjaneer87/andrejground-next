import React from "react";
import BlurIn from "@/components/UI/BlurIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Button3D from "@/components/UI/Button3D";
import {
  Typography,
  TableCell,
  Table,
  TableBody,
  TableRow,
} from "@mui/material";
import { IProject } from "models/Project";

type Props = {
  dataSource: string;
  projectType: IProject["projectType"];
  completedAt?: string;
  isWeb3: boolean;
};

export function SingleProjectMore({
  dataSource,
  projectType,
  completedAt,
  isWeb3
}: Props) {
  return (
    <>
      <BlurIn>
        <Typography component="h2" variant="h5" className="subtitle">
          And more
        </Typography>
      </BlurIn>

      <BlurIn>
        <Table className="max-w-[500px] my-0 mx-auto">
          <TableBody>
            {dataSource ? (
              <TableRow>
                <TableCell className="border-none p-[1rem_0px]">
                  <strong>{isWeb3 ? 'Smart contract source code' : 'Data source:'}</strong>
                </TableCell>
                <TableCell className="border-none p-[1rem_0px]" align="right">
                  <Button3D
                    component="a"
                    href={dataSource}
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
              <TableCell className="border-none p-[1rem_0px]" align="right">
                {projectType?.toUpperCase()}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="border-none p-[1rem_0px]">
                <strong>Completed on:</strong>
              </TableCell>
              <TableCell className="border-none p-[1rem_0px]" align="right">
                {completedAt}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </BlurIn>
    </>
  );
}
