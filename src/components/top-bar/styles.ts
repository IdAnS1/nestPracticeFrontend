import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)

    return (
        {
            iconBlock: {
                paddingRight: '37px',
                borderRight: `1px solid ${colors.borderColor}`,
                alignItems: 'center',
            },
            searchIcon: {
                '&:hover': {
                    'backgroundColor': 'transparent !important'
                }
            },
            root: {
                position: 'static',
                background: `${colors.primary.DEFAULT} !important`,
                borderBottom: `1px solid ${colors.borderColor}`,
                boxShadow: 'none !important'
            },
            themeIcon: {
                marginRight: '45px !important'
            },
            searchBlock: {
                display: 'flex',
                borderRadius: '8px',
                marginLeft: '28px',
                border: (theme.palette.mode === 'dark' ? '' : `1px solid ${colors.white[100]}`),
                backgroundColor: colors.primary[600]
            },
            searchInput: {
                padding: '8px 18px'
            },
            toolbar: {
                justifyContent: 'space-between',
                padding: '20px 45px'
            },
            menuIcon: {
                marginRight: '15px',
                cursor: 'pointer'
            }
        })

})


























