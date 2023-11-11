import {Autocomplete, Stack, TextField} from "@mui/material";
import {useAppSelector} from "../../utils/hook";

const SearchBarComponent = () => {

    const assetsArray: any = useAppSelector(state => state.assets.assets)


    return (

        <Stack spacing={2} sx={{width: 300, border: 'none !important'}}>

            <Autocomplete
                freeSolo
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









































