import { Component } from 'react'

import { Dashboard, KeyboardArrowLeft, Menu, Receipt } from '@mui/icons-material'
import {
    Box,
    Divider,
    Drawer,
    Grid2,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    SvgIconProps,
    Tooltip,
} from '@mui/material'

import LogoLumiGreen from '@images/62ffcb77b4351b3d229aa6a9_logo-lumi-green.svg'

import Colors from '@utils/Colors'
import { RouterProvider, RouterProviderProps } from '@utils/RouterProvider'

interface BaseContainerWithMenuProps extends RouterProviderProps {
    children: JSX.Element
}

interface BaseContainerWithMenuState {
    openDrawer: boolean
}

interface menuOption {
    title: string
    Icon: React.ComponentType<SvgIconProps>
    navigatePath: string
}

const menuOptions: menuOption[] = [
    {
        title: 'Dashboard',
        Icon: Dashboard,
        navigatePath: '/dashboard',
    },
    {
        title: 'Faturas',
        Icon: Receipt,
        navigatePath: '/invoice-library',
    },
]

class BaseContainerWithMenu extends Component<
    BaseContainerWithMenuProps,
    BaseContainerWithMenuState
> {
    constructor(props: BaseContainerWithMenuProps) {
        super(props)

        this.state = {
            openDrawer: false,
        }
    }

    toggleDrawer(openDrawer: boolean = false) {
        this.setState((prevState) => ({ ...prevState, openDrawer }))
    }

    render() {
        const { children, navigate, location } = this.props

        const { openDrawer } = this.state

        return (
            <Box
                style={{
                    marginTop: '20px',
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    marginLeft: openDrawer ? '195px' : '0',
                    transition: 'ease',
                    transitionDuration: '0.1s',
                }}
            >
                <Drawer
                    open={openDrawer}
                    onClose={() => this.toggleDrawer(false)}
                    variant="persistent"
                    transitionDuration={100}
                >
                    <Grid2 container>
                        <Grid2 size={12} textAlign="right">
                            <Tooltip title="Fechar menu" placement="right">
                                <IconButton
                                    onClick={() => this.toggleDrawer(false)}
                                    style={{ color: Colors.black }}
                                >
                                    <KeyboardArrowLeft />
                                </IconButton>
                            </Tooltip>
                            <Divider />
                        </Grid2>
                        <Grid2 size={12}>
                            <List>
                                {menuOptions.map((menu, index) => {
                                    const isCurrentPath = location.pathname === menu.navigatePath

                                    return (
                                        <ListItemButton
                                            key={`drawer-menu-${index}`}
                                            onClick={() => {
                                                this.toggleDrawer(false)
                                                navigate(menu.navigatePath)
                                            }}
                                            style={{
                                                backgroundColor: isCurrentPath
                                                    ? Colors.system.primary.light
                                                    : 'unset',
                                                color: isCurrentPath ? Colors.white : Colors.black,
                                            }}
                                        >
                                            <ListItemIcon
                                                style={{
                                                    color: isCurrentPath
                                                        ? Colors.white
                                                        : Colors.black,
                                                }}
                                            >
                                                {<menu.Icon />}
                                            </ListItemIcon>
                                            <ListItemText primary={menu.title} />
                                        </ListItemButton>
                                    )
                                })}
                            </List>
                        </Grid2>
                    </Grid2>
                </Drawer>
                <Grid2 container size={12}>
                    <Grid2 size={12}>
                        <Box
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Box style={{ position: 'absolute', left: '25px' }}>
                                <Tooltip title="Abrir menu" placement="right">
                                    <IconButton
                                        onClick={() => this.toggleDrawer(true)}
                                        style={{ color: Colors.black }}
                                    >
                                        <Menu />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <img width={250} src={LogoLumiGreen} alt="Lumi Logo" />
                        </Box>
                    </Grid2>
                    <Grid2 size={12} style={{ padding: '25px' }}>
                        {children}
                    </Grid2>
                </Grid2>
            </Box>
        )
    }
}

export default RouterProvider(BaseContainerWithMenu)
