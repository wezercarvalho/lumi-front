export interface IEnergyBill {
    /**
     * Número do cliente
     */
    clientNumber: number

    /**
     * Código de instalação
     */
    instalationCode: number

    /**
     * Mês de referência
     */
    refMonth: string

    /**
     * Energia elétrica - Quantidade
     */
    electricalEnergyQtd: number

    /**
     * Energia elétrica - Valor
     */
    electricalEnergyValue: number

    /**
     * Energia SCEE s/ ICMS - Quantidade
     */
    energySCEEWithoutICMSQtd: number

    /**
     * Energia SCEE s/ ICMS - Valor
     */
    energySCEEWithoutICMSValue: number

    /**
     * Energia compensada GD I - Quantidade
     */
    energyCompensatedGDQtd: number

    /**
     * Energia compensada GD I - Valor
     */
    energyCompensatedGDValue: number

    /**
     * Contrib Ilum Publica Municipal
     */
    municipalPublicLightingContribution: number

    /** Consumo de energia elétrica */
    energyUsage: number

    /**
     * Valor total sem GD
     */
    totalValueWithouGD: number

    /**
     * Diretório da fatura
     */
    invoicePath: string
}
