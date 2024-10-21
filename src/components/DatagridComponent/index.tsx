import React, { Component } from 'react'

import { Box } from '@mui/material'
import { DataGrid, DataGridProps } from '@mui/x-data-grid'
import { size } from 'lodash'

import { ptBR } from './ptBR'

interface DatagridComponentProps extends DataGridProps {}

/**
 * Propriedades de uso comum
 *
 * rowCount
 * onCellClick
 * onCellDoubleClick
 * onRowClick
 * onRowDoubleClick
 * onCellEditStart
 * onCellEditStop
 */

class DatagridComponent extends Component<DatagridComponentProps> {
    static defaultProps: DatagridComponentProps

    render() {
        const { rows } = this.props

        return (
            <Box sx={{ height: size(rows) === 0 ? 170 : 'auto' }}>
                <DataGrid {...this.props} />
            </Box>
        )
    }
}

DatagridComponent.defaultProps = {
    initialState: {
        pagination: {
            paginationModel: {
                page: 0,
                pageSize: 10,
            },
        },
    },
    pageSizeOptions: [5, 10, 20, 50, 100],
    rows: [],
    columns: [],
    localeText: ptBR,
    density: 'compact',
    filterMode: 'client',
    paginationMode: 'client',
    sortingMode: 'client',
    sortingOrder: ['asc', 'desc', null],
    ignoreDiacritics: true,
    loading: false,
    columnHeaderHeight: 50,
    rowHeight: 50,
    rowSelection: false,
    disableRowSelectionOnClick: true,
    checkboxSelection: false,
    disableColumnFilter: false,
    disableColumnMenu: false,
    disableColumnSelector: false,
    hideFooter: false,
    hideFooterPagination: false,
    hideFooterSelectedRowCount: false,
}

export default DatagridComponent
