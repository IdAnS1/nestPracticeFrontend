import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)

    return (
        {
            searchIcon: {
                '&:hover': {
                    'backgroundColor': 'transparent !important'
                }
            },
            searchBlock: {
                display: 'flex',
                borderRadius: '8px',
                border: (theme.palette.mode === 'dark' ? '' : `1px solid ${colors.white[100]}`),
                backgroundColor: colors.primary[600]
            },
            searchInput: {
                padding: '8px 18px'
            },
        })

})

