import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {Alert, AlertColor, Avatar, Button, Grid, Snackbar, Typography} from "@mui/material";
import FlexBetween from "../../components/flex-between";
import {useStyles} from "./styles";
import {createWatchListRecord} from "../../store/thunks/assets";
import {useState} from "react";

const SingleAssetPage = () => {
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState<AlertColor>('success')
    const navigate = useNavigate()
    const {id} = useParams()
    const assetsArray: any = useAppSelector(state => state.assets.assets)
    const classes = useStyles()
    const dispatch = useAppDispatch()

    const asset = assetsArray.find((index: any) => index.name === id as string)

    const handleCreateRecord = () => {
        try {
            const data = {
                name: asset?.name,
                assetId: asset?.id
            }
            dispatch(createWatchListRecord(data))
            setSeverity('success')
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 4000)
        } catch (e) {
            setSeverity('error')
            setOpen(true)
            setTimeout(() => {
                setOpen(false)
            }, 4000)
        }
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
                                <Typography variant='h3'>{asset.symbol.toUpperCase()}</Typography>
                            </FlexBetween>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <FlexBetween>
                                <Typography variant='h4' className={classes.cardTitle}>Цена: </Typography>
                                <Typography variant='h4'>{asset.current_price} $</Typography>
                            </FlexBetween>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <Typography variant='h4' className={classes.cardTitle}>Изменение цены:</Typography>
                            <Typography variant='h4'
                                        className={asset.price_change_24h > 0 ? `${classes.trendUp}` : `${classes.trendDown}`}>{asset.price_change_24h.toFixed(2)} $</Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <Typography variant='h4' className={classes.cardTitle}>Изменение цены: в
                                процентах:</Typography>
                            <Typography variant='h4'
                                        className={asset.price_change_percentage_24h > 0 ? `${classes.trendUp}` : `${classes.trendDown}`}>{asset.price_change_percentage_24h.toFixed(2)} %</Typography>
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
                        <Snackbar open={open} autoHideDuration={6000}>
                            <Alert severity={severity} sx={{width: '100%'}}>
                                {asset.name} добавлен!
                            </Alert>
                        </Snackbar>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

export default SingleAssetPage;