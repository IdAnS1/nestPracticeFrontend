import {Box, Grid, Tab, useTheme} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import React, {useEffect} from "react";
import {tokens} from "../../theme";
import {useStyles} from "./styles";
import SettingsPersonalInfoComponent from "../../components/settings-personal-info";
import {useAppDispatch} from "../../utils/hook";
import {getPublicUser} from "../../store/thunks/auth";

const SettingsComponent = () => {
    const [value, setValue] = React.useState('1')
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const classes = useStyles()
    const dispatch = useAppDispatch()

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    }

    useEffect(() => {
        dispatch(getPublicUser())
    }, [])

    return (
        <Grid className={classes.root}>
            <Box className={classes.tabsWrapper}>
                <TabContext value={value}>
                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList
                            onChange={handleChange}
                            aria-label="lab API tabs example"
                            centered
                            textColor='secondary'
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: colors.blue
                                }
                            }}
                        >
                            <Tab label="Персональные данные" value="1"/>
                            <Tab label="Изменить пароль" value="2"/>
                            <Tab label="Удалить аккаунт" value="3"/>
                        </TabList>
                    </Box>
                    <TabPanel value="1"><SettingsPersonalInfoComponent/></TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box>
        </Grid>
    );
};

export default SettingsComponent;