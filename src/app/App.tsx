import { Close as CloseIcon } from '@mui/icons-material'
import { IconButton, ThemeProvider } from '@mui/material'
import { SnackbarProvider, closeSnackbar } from 'notistack'
import { BrowserRouter, Routes } from 'react-router-dom'

import DialogProvider from '@components/DialogsComponents/DialogProvider'

import { lumiRoutes } from '@modules/lumi/routes'
import { theme } from '@utils/Theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider
                preventDuplicate
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                maxSnack={15}
                action={(snackbarId) => (
                    <IconButton
                        title="Fechar"
                        color="inherit"
                        onClick={() => closeSnackbar(snackbarId)}
                    >
                        <CloseIcon />
                    </IconButton>
                )}
            >
                <BrowserRouter>
                    <DialogProvider>
                        <Routes>{[lumiRoutes]}</Routes>
                    </DialogProvider>
                </BrowserRouter>
            </SnackbarProvider>
        </ThemeProvider>
    )
}

export default App
