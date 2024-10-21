import { Download } from '@mui/icons-material'
import { Box, IconButton } from '@mui/material'
import { toNumber } from 'lodash'

import { downloadEnergyBill, findAllEnergyBill } from '@modules/lumi/services/energyBill'
import Colors from '@utils/Colors'
import DatagridStore from '@utils/DatagridStore'

class DatagridEInvoiceLibraryStore extends DatagridStore {
    constructor() {
        super({
            loading: true,
            rows: [],
            columns: [
                {
                    headerName: 'Código',
                    headerAlign: 'center',
                    field: 'id',
                    renderCell: ({ value }) => toNumber(value),
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Nº do Cliente',
                    headerAlign: 'center',
                    field: 'clientNumber',
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Nº da instalação',
                    headerAlign: 'center',
                    field: 'instalationCode',
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Mês de referência',
                    headerAlign: 'center',
                    field: 'refMonth',
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Energia elétrica kWh',
                    headerAlign: 'center',
                    field: 'electricalEnergyQtd',
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Energia elétrica',
                    headerAlign: 'center',
                    field: 'electricalEnergyValue',
                    renderCell: ({ value }) =>
                        new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(value),
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Energia compensada GD kWh',
                    headerAlign: 'center',
                    field: 'energyCompensatedGDQtd',
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Energia compensada GD',
                    headerAlign: 'center',
                    field: 'energyCompensatedGDValue',
                    renderCell: ({ value }) =>
                        new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(value),
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Energia SCEE s/ ICMS kWh',
                    headerAlign: 'center',
                    field: 'energySCEEWithoutICMSQtd',
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Energia SCEE s/ ICMS',
                    headerAlign: 'center',
                    field: 'energySCEEWithoutICMSValue',
                    renderCell: ({ value }) =>
                        new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(value),
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Consumo de Energia Elétrica kWh',
                    headerAlign: 'center',
                    field: 'energyUsage',
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Contrib. Ilum. Publica Municipal',
                    headerAlign: 'center',
                    field: 'municipalPublicLightingContribution',
                    renderCell: ({ value }) =>
                        new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(value),
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Valor Total s/ GD',
                    headerAlign: 'center',
                    field: 'totalValueWithouGD',
                    renderCell: ({ value }) =>
                        new Intl.NumberFormat('pt-br', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(value),
                    align: 'center',
                    flex: 1,
                },
                {
                    headerName: 'Ações',
                    headerAlign: 'center',
                    field: 'actions',
                    align: 'center',
                    sortable: false,
                    hideable: false,
                    filterable: false,
                    width: 100,
                    renderCell: ({ row }) => {
                        return (
                            <Box>
                                <IconButton
                                    title="Baixar fatura"
                                    style={{
                                        color: Colors.system.primary.light,
                                    }}
                                    onClick={() =>
                                        downloadEnergyBill(
                                            row.id,
                                            row.refMonth,
                                            row.instalationCode,
                                        )
                                    }
                                >
                                    <Download />
                                </IconButton>
                            </Box>
                        )
                    },
                },
            ],
            getPaged: findAllEnergyBill,
        })
    }
}

const datagridInvoiceLibraryStore = new DatagridEInvoiceLibraryStore()

export default datagridInvoiceLibraryStore
