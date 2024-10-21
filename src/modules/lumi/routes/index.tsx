import { Route } from 'react-router-dom'

import Dashboard from '@modules/lumi/pages/Dashboard'
import InvoiceLibrary from '@modules/lumi/pages/InvoiceLibrary'

import BaseContainerWithMenu from '../utils/BaseContainerWithMenu'

export const lumiRoutes = [
    <Route
        key="/dashboard"
        path="/"
        element={
            <BaseContainerWithMenu>
                <Dashboard />
            </BaseContainerWithMenu>
        }
    />,
    <Route
        key="/dashboard"
        path="/dashboard"
        element={
            <BaseContainerWithMenu>
                <Dashboard />
            </BaseContainerWithMenu>
        }
    />,
    <Route
        key="/invoice-library"
        path="/invoice-library"
        element={
            <BaseContainerWithMenu>
                <InvoiceLibrary />
            </BaseContainerWithMenu>
        }
    />,
]
