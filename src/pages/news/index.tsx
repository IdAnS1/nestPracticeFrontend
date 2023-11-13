import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {useEffect} from "react";
import {getNews} from "../../store/thunks/news";
import {Box, Grid, Link, Typography} from "@mui/material";
import {useStyles} from "./styles";

const NewsComponent = () => {
    const dispatch = useAppDispatch()
    const {news} = useAppSelector(state => state.news)
    const classes = useStyles()

    console.log(news)

    const renderNewsBlock = news.map((item: any) => (
        <Grid container key={item.id} className={classes.newsBlock}>
            <Grid item xs={12} md={3}>
                <img src={item.imageurl} alt={item.title}/>
            </Grid>
            <Grid item xs={12} md={9}>
                <Box className={classes.newsTitle}>
                    <Typography variant='h3'>{item.title}</Typography>
                </Box>
                <Box>
                    <Typography variant='body1'>{item.body}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={12} className={classes.readMore}>
                <Typography variant='h4'>
                    <Link href={item.url}>Read more</Link>
                </Typography>
            </Grid>
        </Grid>
    ))

    useEffect(() => {
        dispatch(getNews())
    }, [dispatch])

    return (
        <Grid className={classes.root}>
            <Grid className={classes.blockTitle}>
                <Typography variant='h2'>Новости</Typography>
            </Grid>
            <Grid>{renderNewsBlock}</Grid>
        </Grid>
    );
};

export default NewsComponent;