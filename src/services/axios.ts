import axios, { AxiosResponse } from 'axios'
import { forEach } from 'lodash'
import { enqueueSnackbar } from 'notistack'

import { Props, ResponseData } from '@utils/Interfaces/Service'

export const baseUrlConfig = 'http://localhost:3005/api/'

export const instance = axios.create({
    baseURL: baseUrlConfig,
})

/**
 * Realiza o disparo de requisições POST
 * @param url - URL destino da requisição
 * @param data - Dados que serão enviados na requisição
 * @param config - Configurações da requisição
 * @returns
 */
export async function postRequest({
    url = '',
    data = undefined,
    showMessage = true,
    showExtraMessages = true,
    config,
}: Props): Promise<ResponseData> {
    try {
        const { data: dataResponse }: AxiosResponse = await instance.post(url, data, config)

        if (showMessage) {
            const { typeMessage, message }: ResponseData = dataResponse

            enqueueSnackbar(message, {
                variant: typeMessage,
                persist: typeMessage === 'error',
            })
        }

        if (showExtraMessages) {
            const { extraMessages }: ResponseData = dataResponse

            forEach(extraMessages, ({ typeMessage, message }) => {
                enqueueSnackbar(message, {
                    variant: typeMessage,
                    persist: typeMessage === 'error',
                })
            })
        }

        return dataResponse
    } catch {
        enqueueSnackbar('Não foi possível estabelecer conexão com o servidor.', {
            variant: 'error',
        })
        throw new Error('Não foi possível estabelecer conexão com o servidor.')
    }
}

/**
 * Realiza o disparo de requisições GET
 * @param url - URL destino da requisição
 * @param config - Configurações da requisição
 * @returns
 */
export async function getRequest({
    url = '',
    showMessage = true,
    showExtraMessages = true,
    config,
}: Props): Promise<ResponseData> {
    try {
        const { data }: AxiosResponse = await instance.get(url, config)

        if (showMessage) {
            const { typeMessage, message }: ResponseData = data

            enqueueSnackbar(message, {
                variant: typeMessage,
                persist: typeMessage === 'error',
            })
        }

        if (showExtraMessages) {
            const { extraMessages }: ResponseData = data

            forEach(extraMessages, ({ typeMessage, message }) => {
                enqueueSnackbar(message, {
                    variant: typeMessage,
                    persist: typeMessage === 'error',
                })
            })
        }

        return data
    } catch {
        enqueueSnackbar('Não foi possível estabelecer conexão com o servidor.', {
            variant: 'error',
        })
        throw new Error('Não foi possível estabelecer conexão com o servidor.')
    }
}

/**
 * Realiza o disparo de requisições PUT
 * @param url - URL destino da requisição
 * @param data - Dados que serão enviados na requisição
 * @param config - Configurações da requisição
 * @returns
 */
export async function putRequest({
    url = '',
    data = undefined,
    showMessage = true,
    showExtraMessages = true,
    config,
}: Props): Promise<ResponseData> {
    try {
        const { data: dataResponse }: AxiosResponse = await instance.put(url, data, config)

        if (showMessage) {
            const { typeMessage, message }: ResponseData = dataResponse

            enqueueSnackbar(message, {
                variant: typeMessage,
                persist: typeMessage === 'error',
            })
        }

        if (showExtraMessages) {
            const { extraMessages }: ResponseData = dataResponse

            forEach(extraMessages, ({ typeMessage, message }) => {
                enqueueSnackbar(message, {
                    variant: typeMessage,
                    persist: typeMessage === 'error',
                })
            })
        }

        return dataResponse
    } catch {
        enqueueSnackbar('Não foi possível estabelecer conexão com o servidor.', {
            variant: 'error',
        })
        throw new Error('Não foi possível estabelecer conexão com o servidor.')
    }
}

/**
 * Realiza o disparo de requisições DELETE
 * @param url - URL destino da requisição
 * @param config - Configurações da requisição
 * @returns
 */
export async function deleteRequest({
    url = '',
    showMessage = true,
    showExtraMessages = true,
    config,
}: Props): Promise<ResponseData> {
    try {
        const { data }: AxiosResponse = await instance.delete(url, config)

        if (showMessage) {
            const { typeMessage, message }: ResponseData = data

            enqueueSnackbar(message, {
                variant: typeMessage,
                persist: typeMessage === 'error',
            })
        }

        if (showExtraMessages) {
            const { extraMessages }: ResponseData = data

            forEach(extraMessages, ({ typeMessage, message }) => {
                enqueueSnackbar(message, {
                    variant: typeMessage,
                    persist: typeMessage === 'error',
                })
            })
        }

        return data
    } catch {
        enqueueSnackbar('Não foi possível estabelecer conexão com o servidor.', {
            variant: 'error',
        })
        throw new Error('Não foi possível estabelecer conexão com o servidor.')
    }
}
