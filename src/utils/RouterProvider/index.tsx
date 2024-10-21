/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'

export type RouterProviderProps = {
    navigate: NavigateFunction
    location: Location
}

/**
 * Função de ordem superior (HOC) que aplica controle de rotas
 * @param WrappedComponent - Componente que será renderizado
 * @returns
 */
export const RouterProvider = (WrappedComponent: any) => {
    const Wrapper = (props: any) => {
        const navigate = useNavigate()
        const location = useLocation()

        return <WrappedComponent {...props} navigate={navigate} location={location} />
    }

    return Wrapper
}
