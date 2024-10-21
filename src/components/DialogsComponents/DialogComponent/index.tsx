import { Component } from 'react'

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
    PaperProps,
} from '@mui/material'
import { observer } from 'mobx-react'
import { enqueueSnackbar } from 'notistack'
import Draggable from 'react-draggable'

import Colors from '@utils/Colors'

import dialogStore from '../DialogStore'

export interface DialogComponentProps {
    id: string
}

class DialogComponent extends Component<DialogComponentProps> {
    constructor(props: DialogComponentProps) {
        super(props)

        this.handleCloseDialog = this.handleCloseDialog.bind(this)
    }

    PaperComponent(props: PaperProps, dialogId?: string) {
        return (
            <Draggable
                handle={`#draggable-${dialogId}`}
                cancel={'[class*="MuiDialogContent-root"]'}
            >
                <Paper {...props} />
            </Draggable>
        )
    }

    /**
     * Realiza o fechamento do dialog
     */
    handleCloseDialog() {
        dialogStore.closeDialog(this.props.id)
    }

    render() {
        const { id } = this.props

        const { dialogs } = dialogStore

        const dialog = dialogs.find((dialog) => dialog.id === id)

        if (!dialog) {
            enqueueSnackbar('Não foi possível encontrar as informações para abertura do modal.', {
                variant: 'warning',
            })

            return null
        }

        const {
            id: dialogId,
            open,
            title,
            content,
            showCloseButton,
            showConfirmButton,
            ...dialogProps
        } = dialog

        return (
            <Dialog
                open={!!open}
                onClose={this.handleCloseDialog}
                PaperComponent={(paperProps) => this.PaperComponent(paperProps, dialogId)}
                {...dialogProps}
            >
                <DialogTitle id={`draggable-${dialogId}`} style={{ cursor: 'move' }}>
                    {title}
                </DialogTitle>
                <DialogContent>{content}</DialogContent>
                <DialogActions>
                    {showCloseButton && (
                        <Button
                            variant="contained"
                            style={{ backgroundColor: Colors.grey }}
                            onClick={this.handleCloseDialog}
                        >
                            Fechar
                        </Button>
                    )}
                    {showConfirmButton && <Button variant="contained">Confirmar</Button>}
                </DialogActions>
            </Dialog>
        )
    }
}

export default observer(DialogComponent)
