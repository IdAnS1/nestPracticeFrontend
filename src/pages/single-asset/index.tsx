import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {Avatar, Button, Grid, Typography} from "@mui/material";
import FlexBetween from "../../components/flex-between";
import {useStyles} from "./styles";
import {createWatchListRecord} from "../../store/thunks/assets";

const SingleAssetPage = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const assetsArray: any = useAppSelector(state => state.assets.assets)
    const classes = useStyles()
    const dispatch = useAppDispatch()

    const asset = assetsArray.find((index: any) => index.name === id as string)

    const handleCreateRecord = () => {
        const data = {
            name: asset?.name,
            assetId: asset?.id
        }

        dispatch(createWatchListRecord(data))
    }

    return (
        <>
            {asset && (
                <Grid container spacing={2} className={classes.root}>
                    <Grid item xs={12} className={classes.assetName}>
                        <Typography variant='h1'>{asset.name}</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <FlexBetween>
                                <Avatar className={classes.assetIcon} src={asset.image}/>
                                <Typography variant='h2'>{asset.symbol.toUpperCase()}</Typography>
                            </FlexBetween>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <FlexBetween>
                                <Typography variant='h2' className={classes.cardTitle}>Цена: </Typography>
                                <Typography variant='h2'>{asset.current_price} $</Typography>
                            </FlexBetween>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <Typography variant='h2' className={classes.cardTitle}>Изменение цены:</Typography>
                            <Typography variant='h2'
                                        className={asset.price_change_24h > 0 ? `${classes.trendUp}` : `${classes.trendDown}`}>{asset.price_change_24h} $</Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <Typography variant='h2' className={classes.cardTitle}>Изменение цены: в
                                процентах:</Typography>
                            <Typography variant='h2'
                                        className={asset.price_change_percentage_24h > 0 ? `${classes.trendUp}` : `${classes.trendDown}`}>{asset.price_change_percentage_24h} %</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='center' className={classes.cardButtonBlock}>
                        <Button
                            color='secondary'
                            variant='outlined'
                            className={classes.cardButton}
                            onClick={() => navigate(-1)}
                        >
                            Назад
                        </Button>
                        <Button
                            color='secondary'
                            variant='outlined'
                            className={classes.cardButton}
                            onClick={handleCreateRecord}
                        >
                            Добавить в избранное
                        </Button>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default SingleAssetPage;