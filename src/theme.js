import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const mytheme = extendTheme({
    fonts: {
        lato: 'Lato'
    },
    colors: {
        brand: {
            100: '#a0522d',
        }
    }
})

const theme = extendTheme(config);


export default {theme, mytheme}