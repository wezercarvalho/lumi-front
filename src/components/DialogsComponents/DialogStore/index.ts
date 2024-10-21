import { DialogProps as DialogPropsMui } from '@mui/material'
import { makeAutoObservable } from 'mobx'
import { v4 } from 'uuid'

export interface DialogStoreProps {
    dialogs: Array<DialogProps & DialogOptionsProps>
    openDialog: (dialogProps: DialogProps, dialogOptions?: DialogOptionsProps) => string
    closeDialog: () => void
}

export interface DialogProps {
    id?: string
    title: string
    content: JSX.Element
}

export interface DialogOptionsProps extends Omit<DialogPropsMui, 'content' | 'open'> {
    open?: boolean
    showConfirmButton?: boolean
    showCloseButton?: boolean
    onConfirm?: <ReturnType>() => Promise<ReturnType>
}

/** Store base para gerenciar dialogs */
class DialogStore {
    constructor() {
        makeAutoObservable(this)

        this.openDialog = this.openDialog.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
    }

    dialogs: DialogStoreProps['dialogs'] = []

    defaultOptions: DialogOptionsProps = {
        open: true,
        showCloseButton: true,
        showConfirmButton: true,
    }

    /**
     * Realiza a abertura do dialog
     * @param {DialogProps} dialogProps - Propriedades do dialog
     * @param {DialogOptionsProps} dialogOptions - Opções de configuração do dialog
     * @returns
     */
    openDialog(dialogProps: DialogProps, dialogOptions?: DialogOptionsProps) {
        if (!dialogProps.id) dialogProps.id = v4()

        this.dialogs?.push({
            ...dialogProps,
            ...this.defaultOptions,
            ...dialogOptions,
        })

        return dialogProps.id
    }

    /**
     * Realiza o fechamento de um dialog
     * @param {string} id - Identificador do dialog
     */
    closeDialog(id: string) {
        this.dialogs = this.dialogs.filter((dialog) => dialog.id !== id)
    }
}

const dialogStore = new DialogStore()
export default dialogStore
