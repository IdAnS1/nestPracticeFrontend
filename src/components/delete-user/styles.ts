import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                        borderColor: colors.blue
                    }
                },
                '& label.Mui-focused': {
                    color: `${
                        theme.palette.mode === 'dark'
                            ? colors.white.DEFAULT
                            : colors.black.DEFAULT
                    }`
                }
            },
            tabHeading: {
                width: '100%',
                textAlign: "center",
                marginBottom: '32px !important'
            },
            alertMassage: {
                width: '100%',
                textAlign: "center",
                marginBottom: '32px !important'
            },
            checkBoxBlock: {
                width: '100%'
            },
            formWrapper: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: '32px 0'
            },
            inputField: {
                width: '25%',
                margin: '5px !important'
            },
            buttonBlock: {
                width: '100%',
                marginTop: '32px !important',
                display: "flex",
                justifyContent: "center"
            }
        }
    )
})