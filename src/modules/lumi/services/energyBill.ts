/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

import { baseUrlConfig, getRequest } from '@services/axios'

export async function findAllEnergyBill() {
    return await getRequest({ url: 'energy-bills' })
}

export async function downloadEnergyBill(id: number, refMonth: string, instalationCode: string) {
    const response = await axios.get(`${baseUrlConfig}energy-bill/download/${id}`, {
        responseType: 'blob',
    })

    const url = window.URL.createObjectURL(new Blob([response.data as any]))

    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `fatura_${refMonth}_${instalationCode}.pdf`)
    document.body.appendChild(link)
    link.click()

    link.remove()
}

export async function getEnergyBillByClientAndPeriod(clientNumber: number, refMonth: string) {
    return await getRequest({
        url: `energy-bill/${clientNumber}/${encodeURIComponent(refMonth)}`,
    })
}
