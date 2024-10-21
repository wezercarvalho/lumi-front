import { GridColDef, GridRowsProp } from '@mui/x-data-grid/'
import { get, isFunction } from 'lodash'
import { action, makeObservable, observable } from 'mobx'

import { PaginationProps } from '@utils/Interfaces/Pagination'
import { ResponseData } from '@utils/Interfaces/Service'

export interface Props {
    /** Determina se o datagrid está carregando */
    loading: boolean

    /** Determina o valor das linhas do datagrid */
    rows: GridRowsProp

    /** Determina o valor das colunas do datagrid */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: GridColDef<any>[]

    /** Determina o método responsável por popular o datagrid */
    getPaged: (props?: PaginationProps | undefined) => Promise<ResponseData>
}

class DataridStore {
    constructor(props: Props) {
        makeObservable(this, {
            // Observables
            loading: observable,
            rows: observable,
            columns: observable,
            getPaged: observable,

            // Actions
            setLoading: action,
            setRows: action,
            setColumns: action,
            getDatagridData: action,
        })

        this.initialConfigs = this.initialConfigs.bind(this)

        this.setLoading = this.setLoading.bind(this)
        this.setRows = this.setRows.bind(this)
        this.setColumns = this.setColumns.bind(this)
        this.getDatagridData = this.getDatagridData.bind(this)

        this.initialConfigs(props)
    }

    /** Determina se o datagrid está carregando */
    loading: boolean = false

    /** Determina o valor das linhas do datagrid */
    rows: GridRowsProp = []

    /** Determina o valor das colunas do datagrid */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: GridColDef<any>[] = []

    /** Determina o método responsável por popular o datagrid */
    getPaged: unknown = null

    /**
     * Realiza as configurações iniciais
     * @param props - Propriedades recebidas inicialmente
     */
    async initialConfigs(props: Props) {
        const { columns, rows, loading, getPaged } = props

        this.loading = loading
        this.rows = rows
        this.columns = columns
        this.getPaged = getPaged
    }

    /**
     * Configura se o datagrid está carregando
     * @param loading
     */
    setLoading(loading: boolean) {
        this.loading = loading
    }

    /**
     * Configura o valor das linhas do datagrid
     * @param rows
     */
    setRows(rows: GridRowsProp) {
        this.rows = rows
    }

    /**
     * Configura o valor das colunas do datagrid
     * @param columns
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setColumns(columns: GridColDef<any>[]) {
        this.columns = columns
    }

    /**
     * Realiza o disparo para o método que obtém os dados do datagrid
     * @returns
     */
    async getDatagridData() {
        try {
            this.setLoading(true)

            if (isFunction(this.getPaged)) {
                const response = await this.getPaged()

                this.setRows(get(response, 'response'))
            }
        } finally {
            this.setLoading(false)
        }
    }
}

export default DataridStore
