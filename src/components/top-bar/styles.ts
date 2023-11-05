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
                    'backgroundColor': 'transparent'
                }
            },
            root: {
                display: 'flex',
                justifyContent: 'space-between',
                padding: '32px 24px',
                alignItems: 'center',
                backgroundColor: colors.primary.DEFAULT,
                borderBottom: `1px solid ${colors.borderColor}`
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
            }
        })

})