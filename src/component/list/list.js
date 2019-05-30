import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function List(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">gambar</TableCell>
            <TableCell align="center">Nama</TableCell>
            <TableCell align="center">detail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(res => {
            return (
              <TableRow key="1">
                <TableCell align="center">
                  <img src={res.gambar_pariwisata} width="50px" />
                </TableCell>
                <TableCell align="center">{res.nama_pariwisata}</TableCell>
                <TableCell align="center">{res.alamat_pariwisata}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default List;
