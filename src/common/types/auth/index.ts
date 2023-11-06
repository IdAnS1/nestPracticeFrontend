import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form'

export interface IPropsLogin<TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    > {
    // navigate: (to: string) => void
    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
    loading?: boolean
}

export interface IPropsRegister<TFieldValues extends FieldValues = FieldValues,
    TContext = any,
    > {
    // navigate: (to: string) => void

    register: UseFormRegister<TFieldValues>
    errors: FieldErrors<TFieldValues>
    loading?: boolean
}

export interface IAuthStateReturn {
    user: IPublicUser,
    token: string
}

export interface IAuthState {
    user: IPublicUser,
    isLogged: boolean
}

interface IPublicUser {
    id: number | null,
    firstName: string,
    userName: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    watchList: [IWatchList]
}

interface IWatchList {
    id: number | null,
    name: string,
    assetId: string,
    createdAt: string,
    updatedAt: string,
    user: number | null
}