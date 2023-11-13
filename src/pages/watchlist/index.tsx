import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {useEffect} from "react";
import {getWatchList} from "../../store/thunks/watchlist";
import {getTopPriceData} from "../../store/thunks/assets";
import AssetsTableComponent from "../../components/assetsTable";
import {Grid, Typography} from "@mui/material";
import {useStyles} from "./styles";

const WatchlistComponent = () => {

    const watchList: any = useAppSelector((state) => state.watchlist.watchlist)
    const assetsArray: any = useAppSelector(state => state.assets.assets)
    const dispatch = useAppDispatch()
    const sortsWatchListArray = assetsArray.filter((item: any) => {
        return watchList.some((elem: any) => elem.assetId === item.id)
    })
    const classes = useStyles()

    useEffect(() => {
        dispatch(getWatchList())
        dispatch(getTopPriceData())
        console.log(watchList)
        console.log(assetsArray)
        console.log('sort', sortsWatchListArray)
    }, [dispatch])


    return (
        <Grid className={classes.root}>
            <Grid className={classes.watchlistHeading}>
                <Typography variant='h2' className={classes.heading}>
                    Избранное
                </Typography>
            </Grid>
            <Grid className={classes.assetsTableBlock}>
                <AssetsTableComponent assets={sortsWatchListArray}/>
            </Grid>
        </Grid>
    );
};

export default WatchlistComponent;