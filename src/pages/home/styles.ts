import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";

export const useStyles = makeStyles((theme: Theme) => {
    const colors = tokens(theme.palette.mode)
    return (
        {
            root: {
                flexGrow: 1,
                padding: '32px'
            },
            topCardItem: {
                backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`,
                padding: '20px 16px',
                minHeight: 185,
                border: `1px solid ${colors.borderColor}`,
                borderRadius: 12
            },
            assetName: {
                fontSize: 25,
                fontWeight: 600,
                lineHeight: '30px',
                textTransform: 'capitalize'
            },
            itemDetails: {
                display: "flex",
                height: '100%',
                flexDirection: "column",
                justifyContent: "flex-end",
                paddingBottom: '35px'
            },
            cardPrice: {
                fontSize: 32,
                fontWeight: 700,
                lineHeight: '48px'
            },
            priceTrend: {
                width: '120px',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: '5px',
                padding: '5px',
                // backgroundColor: `#A9FFA7`,
                borderRadius: 4
            },
            trendUp: {
                backgroundColor: '#A9FFA7',
                color: '#037400'
            },
            trendDown: {
                backgroundColor: '#FFA7A7',
                color: '#740000'
            },
            areaChart: {
                marginBottom: 32
            },
            lineChartBlock: {
                backgroundColor: `${
                    theme.palette.mode === 'light'
                        ? colors.primary.DEFAULT
                        : colors.primary[600]
                }`,
                padding: '20px 16px',
                minHeight: 270,
                border: `1px solid ${colors.borderColor}`,
                borderRadius: 12,
                marginBottom: 32
            },
            topPriceRoot: {
                backgroundColor: `${
                    theme.palette.mode === 'light'
                        ? colors.primary.DEFAULT
                        : colors.primary[600]
                }`,
                padding: '20px 16px',
                minHeight: 270,
                border: `1px solid ${colors.borderColor}`,
                borderRadius: 12,
                '& .MuiPaper-root': {
                    backgroundColor: 'transparent !important',
                    boxShadow: 'none !important',
                    backgroundImage: 'none !important'
                }
            }
        }
    )
})


























