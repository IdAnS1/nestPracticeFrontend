import {useCallback, useEffect, useMemo, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {getFavoriteAssets, getTopPriceData} from "../../store/thunks/assets";
import {Box, Grid} from "@mui/material";
import {useStyles} from "./styles";
import {AreaChart} from "../../components/charts/area-chart";
import imgUp from '../../assets/images/chart/trend-up.svg'
import imgDown from '../../assets/images/chart/trend-down.svg'
import {LineChart} from "../../components/charts/line-chart";
import {IChartData} from "../../common/types/assets";
import TopPriceComponent from "../../components/top-price";

const Home = () => {
    const dispatch = useAppDispatch()
    const favoriteAssets: IChartData[] = useAppSelector(state => state.assets.favoriteAssets)
    const topPriceAssets: any = useAppSelector(state => state.assets.assets)
    const fetchDataRef = useRef(false)
    const classes = useStyles()

    const favoriteAssetName = ['bitcoin', 'ethereum']
    const filteredArray = useMemo(() => {
        return favoriteAssets.filter((value, index, array) => index === array.findIndex((t) => t.name === value.name))
    }, [favoriteAssets])

    const filteredAssetArray = topPriceAssets.slice().sort((a: any, b: any) => b.current_price - a.current_price).slice(0, 6)
    console.log(filteredAssetArray)


    const fetchData = useCallback((data: string[]) => {
        data.forEach((item: string) => {
            dispatch(getFavoriteAssets(item))
        })
    }, [dispatch])
    // console.log(topPriceAssets)


    // console.log('Assets', favoriteAssets)

    useEffect(() => {
        if (fetchDataRef.current) return
        fetchDataRef.current = true
        fetchData(favoriteAssetName)
        dispatch(getTopPriceData())
    }, [favoriteAssetName, fetchData, dispatch])

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
                    {filteredArray.length && (<LineChart data={filteredArray}/>)}
                </Grid>
            </Grid>
            <Grid container className={classes.topPriceRoot}>
                <Grid item xs={12} sm={12} lg={12}>
                    {filteredAssetArray.length && (<TopPriceComponent assets={filteredAssetArray}/>)}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;