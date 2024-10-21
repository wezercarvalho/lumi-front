import { AxiosRequestConfig, HttpStatusCode } from 'axios'

export interface SimpleMessage {
    message: string
    typeMessage: 'success' | 'warning' | 'error'
}

export interface ResponseData {
    success: boolean
    statusCode: HttpStatusCode
    timestamp: string
    message?: string
    typeMessage?: 'success' | 'warning' | 'error'
    response?: unknown
    extraMessages?: SimpleMessage[]
}

export interface Props {
    url: string
    data?: unknown
    config?: AxiosRequestConfig
    showMessage?: boolean
    showExtraMessages?: boolean
}
