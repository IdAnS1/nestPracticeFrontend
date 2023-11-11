import {Autocomplete, Stack, TextField} from "@mui/material";
import {useAppSelector} from "../../utils/hook";
import {useNavigate} from "react-router-dom";

const SearchBarComponent = () => {

    const navigate = useNavigate()
    const assetsArray: any = useAppSelector(state => state.assets.assets)

    return (

        <Stack spacing={2} sx={{width: 300, border: 'none !important'}}>

            <Autocomplete
                freeSolo
                onChange={(e: any, value: string | null) => !!value ? navigate(`single/${value}`) : null}
                renderInput={(element) => (
                    <TextField
                        {...element}
                        label='Поиск'
                        InputProps={{...element.InputProps}}
                        type='search'
                    />
                )}
                options={assetsArray.map((element: any) => element.name)}
            />
        </Stack>
    );
};

export default SearchBarComponent;









































