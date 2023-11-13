import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {useStyles} from "../top-price/styles";

const AssetsTableComponent = (props: any) => {

    const {assets} = props
    const classes = useStyles()

    return (

        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Название</TableCell>
                        <TableCell align="right">Цена</TableCell>
                        <TableCell align="right">Изменения в ($)</TableCell>
                        <TableCell align="right">Изменения в (%)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {assets.map((item: any) => (
                        <TableRow
                            key={item.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.current_price} $</TableCell>
                            <TableCell
                                align="right"
                                className={
                                    item.price_change_24h > 0
                                        ? `${classes.priceUp}`
                                        : `${classes.priceDown}`
                                }
                            >
                                {item.price_change_24h.toFixed(2)} %
                            </TableCell>
                            <TableCell
                                align="right"
                                className={
                                    item.price_change_percentage_24h > 0
                                        ? `${classes.priceUp}`
                                        : `${classes.priceDown}`
                                }
                            >
                                {item.price_change_percentage_24h.toFixed(2)} $
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default AssetsTableComponent;