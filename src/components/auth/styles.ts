import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles((t) => {

    return (
        {
            root: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                padding: '20px'
            },
            form: {
                flex: 1
            }
        }
    )
})