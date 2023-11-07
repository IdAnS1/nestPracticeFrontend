import {useCallback, useEffect, useMemo, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getFavoriteAssets} from "../../store/thunks/assets";
import {Box, Grid} from "@mui/material";
import {useStyles} from "./styles";

const Home = () => {
    const dispatch = useAppDispatch()
    const favoriteAssets: any[] = useAppSelector(state => state.assets.favoriteAssets)
    const fetchDataRef = useRef(false)
    const classes = useStyles()

    const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], [])
    const FilteredArray = favoriteAssets.filter((value, index, array) => index === array.findIndex((t) => t.name === value.name))

    const fetchData = useCallback((data: string[]) => {
        data.forEach((item: string) => {
            dispatch(getFavoriteAssets(item))
        })
    }, [dispatch])

    // console.log('Assets', favoriteAssets)

    useEffect(() => {
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        fetchData(favoriteAssetName)
    }, [favoriteAssetName, fetchData])

    const renderFavoriteBlock = FilteredArray.map((item: any) => {
        const currentPrice = item.data.prices[0]
        const currentCap = item.data.market_caps[0]
        return (
            <Grid key={item.name} item lg={6} sm={6} xs={12}>
                <Grid container className={classes.topCardItem}>
                    <Grid item lg={6} sm={6} xs={12}>
                        <h3 className={classes.assetName}>{item.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}>{currentPrice[1].toFixed(2)}</h3>
                            <p className={classes.cardCapitalize}>{currentCap[1].toFixed(0)}</p>
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={12}>
                        Chart
                    </Grid>
                </Grid>
            </Grid>
        )
    })

    return (
        <Box className={classes.root}>
            <Grid container spacing={2}>
                {renderFavoriteBlock}
            </Grid>
        </Box>
    );
};

export default Home;