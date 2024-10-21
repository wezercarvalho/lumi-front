import { Component, createContext } from 'react'

import { observer } from 'mobx-react'
import { v4 } from 'uuid'

import DialogComponent from '../DialogComponent'
import dialogStore from '../DialogStore'

const DialogContext = createContext(dialogStore)

interface DialogProviderProps {
    children: JSX.Element
}

class DialogProvider extends Component<DialogProviderProps> {
    render() {
        return (
            <DialogContext.Provider value={dialogStore}>
                {this.props.children}
                {dialogStore.dialogs.map((dialog, index) => (
                    <DialogComponent key={`dialog-${index}`} id={dialog.id || v4()} />
                ))}
            </DialogContext.Provider>
        )
    }
}

export default observer(DialogProvider)
