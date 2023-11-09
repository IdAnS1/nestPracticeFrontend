import {useCallback, useEffect, useMemo, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getFavoriteAssets} from "../../store/thunks/assets";
import {Box, Grid} from "@mui/material";
import {useStyles} from "./styles";
import {AreaChart} from "../../components/charts/area-chart";
import imgUp from '../../assets/images/chart/trend-up.svg'
import imgDown from '../../assets/images/chart/trend-down.svg'
import {LineChart} from "../../components/charts/line-chart";
import {IChartData} from "../../common/types/assets";

const Home = () => {
    const dispatch = useAppDispatch()
    const favoriteAssets: IChartData[] = useAppSelector(state => state.assets.favoriteAssets)
    const fetchDataRef = useRef(false)
    const classes = useStyles()

    const favoriteAssetName = useMemo(() => ['bitcoin', 'ethereum'], [])
    const filteredArray = favoriteAssets.filter((value, index, array) => index === array.findIndex((t) => t.name === value.name))

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

    const renderFavoriteBlock = filteredArray.map((item: IChartData) => {
        console.log(item)
        const currentPrice = item.singleAssets.map(
            (element: any) => element.current_price
        )
        // const currentCap = item.singleAssets.map(
        //     (element: any) => element.market_cap
        // )
        const changePrice = item.singleAssets.map(
            (element: any) => element.price_change_percentage_24h
        )
        return (
            <Grid key={item.name} item lg={6} sm={6} xs={12}>
                <Grid container className={classes.topCardItem}>
                    <Grid item lg={6} sm={6} xs={12}>
                        <h3 className={classes.assetName}>{item.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}>{currentPrice} $</h3>
                            <Box className={
                                +changePrice > 0
                                    ? `${classes.priceTrend} ${classes.trendUp}`
                                    : `${classes.priceTrend} ${classes.trendDown}`
                            }
                            >
                                {+changePrice > 0 ? (
                                    <img src={imgUp} alt={'Up'}/>
                                ) : (
                                    <img src={imgDown} alt={'Down'}/>
                                )}
                                <span>{(+changePrice).toFixed(2)} % </span>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item lg={6} sm={6} xs={12}>
                        <AreaChart data={item.price_chart_data}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    })

    return (
        <Box className={classes.root}>
            <Grid container spacing={2} className={classes.areaChart}>
                {renderFavoriteBlock}
            </Grid>
            <Grid container className={classes.lineChartBlock}>
                <Grid item xs={12} sm={12} lg={12}>
                    {filteredArray.length && <LineChart data={filteredArray}/>}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;