import { Component } from 'react'

import { Divider, Grid2, Typography } from '@mui/material'
import { observer } from 'mobx-react'

import DatagridComponent from '@components/DatagridComponent'

import datagridInvoiceLibraryStore from '@modules/lumi/store/InvoiceLibrary/DatagridInvoiceLibraryStore'

class InvoiceLibrary extends Component {
    componentDidMount(): void {
        Promise.resolve(this.initComponent())
    }

    /**
     * Realiza as configurações iniciais do componente
     */
    initComponent = async () => {
        const { getDatagridData } = datagridInvoiceLibraryStore
        await getDatagridData()
    }

    render() {
        const { loading, rows, columns } = datagridInvoiceLibraryStore

        return (
            <Grid2 container spacing={2}>
                <Grid2 size={12}>
                    <Typography variant="h5" fontWeight="bold">
                        Biblioteca de Faturas:
                    </Typography>
                    <Divider />
                </Grid2>
                <Grid2 size={12}>
                    <DatagridComponent
                        density="standard"
                        loading={loading}
                        rows={rows}
                        columns={columns}
                    />
                </Grid2>
            </Grid2>
        )
    }
}

export default observer(InvoiceLibrary)
