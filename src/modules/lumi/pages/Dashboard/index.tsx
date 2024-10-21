import { Component } from 'react'

import {
    Box,
    Button,
    Card,
    CardContent,
    CircularProgress,
    Divider,
    Grid2,
    Typography,
} from '@mui/material'

import { IEnergyBill } from '@modules/lumi/interfaces/energyBill.interface'
import { getEnergyBillByClientAndPeriod } from '@modules/lumi/services/energyBill'
import Colors from '@utils/Colors'

interface DashboardProps {}

interface DashboardState {
    selectedClient: number
    selectedMonth: string
    loading: boolean
    data: IEnergyBill
}

class Dashboard extends Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps) {
        super(props)

        this.state = {
            selectedClient: 7204076116,
            selectedMonth: 'JAN/2024',
            loading: true,
            data: {} as IEnergyBill,
        }
    }

    componentDidMount(): void {
        Promise.resolve(this.getData())
    }

    componentDidUpdate(_: DashboardProps, prevState: DashboardState) {
        if (
            prevState.selectedClient !== this.state.selectedClient ||
            prevState.selectedMonth !== this.state.selectedMonth
        ) {
            this.getData()
        }
    }

    getData = async () => {
        const { selectedClient, selectedMonth } = this.state

        this.setState((prevState) => ({
            ...prevState,
            loading: true,
        }))

        const { response } = await getEnergyBillByClientAndPeriod(selectedClient, selectedMonth)

        this.setState((prevState) => ({
            ...prevState,
            data: response as IEnergyBill,
            loading: false,
        }))
    }

    render() {
        const { selectedClient, selectedMonth, loading, data } = this.state

        if (loading)
            return (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '25vh',
                    }}
                >
                    <CircularProgress style={{ color: Colors.system.primary.light }} />
                </Box>
            )

        return (
            <Grid2 container spacing={2}>
                <Grid2 size={12}>
                    <Typography variant="h5" fontWeight="bold">
                        Dashboard:
                    </Typography>
                    <Divider />
                </Grid2>
                <Grid2 container size={12}>
                    <Grid2 size={12}>
                        <Typography variant="body2" fontWeight="bold">
                            Nº do cliente:
                        </Typography>
                        <Box style={{ display: 'flex', gap: '10px' }}>
                            <Button
                                variant={selectedClient === 7204076116 ? 'contained' : 'outlined'}
                                style={{
                                    color:
                                        selectedClient === 7204076116
                                            ? Colors.white
                                            : Colors.system.primary.light,
                                    borderColor: Colors.system.primary.light,
                                    backgroundColor:
                                        selectedClient === 7204076116
                                            ? Colors.system.primary.light
                                            : 'unset',
                                }}
                                onClick={() => {
                                    this.setState((prevState) => ({
                                        ...prevState,
                                        selectedClient: 7204076116,
                                    }))
                                }}
                            >
                                7204076116
                            </Button>
                            <Button
                                variant={selectedClient === 7202210726 ? 'contained' : 'outlined'}
                                style={{
                                    color:
                                        selectedClient === 7202210726
                                            ? Colors.white
                                            : Colors.system.primary.light,
                                    borderColor: Colors.system.primary.light,
                                    backgroundColor:
                                        selectedClient === 7202210726
                                            ? Colors.system.primary.light
                                            : 'unset',
                                }}
                                onClick={() => {
                                    this.setState((prevState) => ({
                                        ...prevState,
                                        selectedClient: 7202210726,
                                    }))
                                }}
                            >
                                7202210726
                            </Button>
                        </Box>
                    </Grid2>
                    <Grid2 size={12}>
                        <Typography variant="body2" fontWeight="bold">
                            Mês de referência:
                        </Typography>
                        <Box style={{ display: 'flex', gap: '10px' }}>
                            <Button
                                variant={selectedMonth === 'JAN/2024' ? 'contained' : 'outlined'}
                                style={{
                                    color:
                                        selectedMonth === 'JAN/2024'
                                            ? Colors.white
                                            : Colors.system.primary.light,
                                    borderColor: Colors.system.primary.light,
                                    backgroundColor:
                                        selectedMonth === 'JAN/2024'
                                            ? Colors.system.primary.light
                                            : 'unset',
                                }}
                                onClick={() =>
                                    this.setState((prevState) => ({
                                        ...prevState,
                                        selectedMonth: 'JAN/2024',
                                    }))
                                }
                            >
                                JAN/2024
                            </Button>
                            <Button
                                variant={selectedMonth === 'FEV/2024' ? 'contained' : 'outlined'}
                                style={{
                                    color:
                                        selectedMonth === 'FEV/2024'
                                            ? Colors.white
                                            : Colors.system.primary.light,
                                    borderColor: Colors.system.primary.light,
                                    backgroundColor:
                                        selectedMonth === 'FEV/2024'
                                            ? Colors.system.primary.light
                                            : 'unset',
                                }}
                                onClick={() =>
                                    this.setState((prevState) => ({
                                        ...prevState,
                                        selectedMonth: 'FEV/2024',
                                    }))
                                }
                            >
                                FEV/2024
                            </Button>
                            <Button
                                variant={selectedMonth === 'MAR/2024' ? 'contained' : 'outlined'}
                                style={{
                                    color:
                                        selectedMonth === 'MAR/2024'
                                            ? Colors.white
                                            : Colors.system.primary.light,
                                    borderColor: Colors.system.primary.light,
                                    backgroundColor:
                                        selectedMonth === 'MAR/2024'
                                            ? Colors.system.primary.light
                                            : 'unset',
                                }}
                                onClick={() =>
                                    this.setState((prevState) => ({
                                        ...prevState,
                                        selectedMonth: 'MAR/2024',
                                    }))
                                }
                            >
                                MAR/2024
                            </Button>
                            <Button
                                variant={selectedMonth === 'ABR/2024' ? 'contained' : 'outlined'}
                                style={{
                                    color:
                                        selectedMonth === 'ABR/2024'
                                            ? Colors.white
                                            : Colors.system.primary.light,
                                    borderColor: Colors.system.primary.light,
                                    backgroundColor:
                                        selectedMonth === 'ABR/2024'
                                            ? Colors.system.primary.light
                                            : 'unset',
                                }}
                                onClick={() =>
                                    this.setState((prevState) => ({
                                        ...prevState,
                                        selectedMonth: 'ABR/2024',
                                    }))
                                }
                            >
                                ABR/2024
                            </Button>
                            <Button
                                variant={selectedMonth === 'MAI/2024' ? 'contained' : 'outlined'}
                                style={{
                                    color:
                                        selectedMonth === 'MAI/2024'
                                            ? Colors.white
                                            : Colors.system.primary.light,
                                    borderColor: Colors.system.primary.light,
                                    backgroundColor:
                                        selectedMonth === 'MAI/2024'
                                            ? Colors.system.primary.light
                                            : 'unset',
                                }}
                                onClick={() =>
                                    this.setState((prevState) => ({
                                        ...prevState,
                                        selectedMonth: 'MAI/2024',
                                    }))
                                }
                            >
                                MAI/2024
                            </Button>
                            <Button
                                variant={selectedMonth === 'JUN/2024' ? 'contained' : 'outlined'}
                                style={{
                                    color:
                                        selectedMonth === 'JUN/2024'
                                            ? Colors.white
                                            : Colors.system.primary.light,
                                    borderColor: Colors.system.primary.light,
                                    backgroundColor:
                                        selectedMonth === 'JUN/2024'
                                            ? Colors.system.primary.light
                                            : 'unset',
                                }}
                                onClick={() =>
                                    this.setState((prevState) => ({
                                        ...prevState,
                                        selectedMonth: 'JUN/2024',
                                    }))
                                }
                            >
                                JUN/2024
                            </Button>
                            <Button
                                variant={selectedMonth === 'JUL/2024' ? 'contained' : 'outlined'}
                                style={{
                                    color:
                                        selectedMonth === 'JUL/2024'
                                            ? Colors.white
                                            : Colors.system.primary.light,
                                    borderColor: Colors.system.primary.light,
                                    backgroundColor:
                                        selectedMonth === 'JUL/2024'
                                            ? Colors.system.primary.light
                                            : 'unset',
                                }}
                                onClick={() =>
                                    this.setState((prevState) => ({
                                        ...prevState,
                                        selectedMonth: 'JUL/2024',
                                    }))
                                }
                            >
                                JUL/2024
                            </Button>
                            <Button
                                variant={selectedMonth === 'AGO/2024' ? 'contained' : 'outlined'}
                                style={{
                                    color:
                                        selectedMonth === 'AGO/2024'
                                            ? Colors.white
                                            : Colors.system.primary.light,
                                    borderColor: Colors.system.primary.light,
                                    backgroundColor:
                                        selectedMonth === 'AGO/2024'
                                            ? Colors.system.primary.light
                                            : 'unset',
                                }}
                                onClick={() =>
                                    this.setState((prevState) => ({
                                        ...prevState,
                                        selectedMonth: 'AGO/2024',
                                    }))
                                }
                            >
                                AGO/2024
                            </Button>
                            <Button
                                variant={selectedMonth === 'SET/2024' ? 'contained' : 'outlined'}
                                style={{
                                    color:
                                        selectedMonth === 'SET/2024'
                                            ? Colors.white
                                            : Colors.system.primary.light,
                                    borderColor: Colors.system.primary.light,
                                    backgroundColor:
                                        selectedMonth === 'SET/2024'
                                            ? Colors.system.primary.light
                                            : 'unset',
                                }}
                                onClick={() =>
                                    this.setState((prevState) => ({
                                        ...prevState,
                                        selectedMonth: 'SET/2024',
                                    }))
                                }
                            >
                                SET/2024
                            </Button>
                        </Box>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Card raised>
                            <CardContent>
                                <Typography variant="body2" fontWeight="bold">
                                    Resultados de Energia
                                </Typography>
                                <Divider />
                                <Box style={{ marginTop: '10px', textAlign: 'right' }}>
                                    <Typography variant="body2">
                                        Consumo de energia elétrica
                                    </Typography>
                                    <Typography variant="body1">{data.energyUsage} kWh</Typography>
                                </Box>
                                <Box style={{ marginTop: '10px', textAlign: 'right' }}>
                                    <Typography variant="body2">Energia compensada</Typography>
                                    <Typography variant="body1">
                                        {data.energyCompensatedGDQtd} kWh
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 size={{ xs: 12, md: 6 }}>
                        <Card raised>
                            <CardContent>
                                <Typography variant="body2" fontWeight="bold">
                                    Resultados Financeiros
                                </Typography>
                                <Divider />
                                <Box style={{ marginTop: '10px', textAlign: 'right' }}>
                                    <Typography variant="body2">Valor total sem GDR</Typography>
                                    <Typography variant="body1">
                                        {new Intl.NumberFormat('pt-br', {
                                            style: 'currency',
                                            currency: 'BRL',
                                        }).format(data.totalValueWithouGD)}
                                    </Typography>
                                </Box>
                                <Box style={{ marginTop: '10px', textAlign: 'right' }}>
                                    <Typography variant="body2">Economia GDR</Typography>
                                    <Typography variant="body1">
                                        {new Intl.NumberFormat('pt-br', {
                                            style: 'currency',
                                            currency: 'BRL',
                                        }).format(data.energyCompensatedGDValue)}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
            </Grid2>
        )
    }
}

export default Dashboard
