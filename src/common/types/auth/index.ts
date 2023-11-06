// let response = await fetch('http://localhost:5000/auth/login', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(userData)
// })
//
// let result = await response.json()
//
// console.log(result)

import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";

export interface IPropsLogin<TFieldValues extends FieldValues = FieldValues,
    TContext = any, > {
    register: UseFormRegister<TFieldValues>,
    errors: FieldErrors<TFieldValues>
}

export interface IPropsRegister {
    setEmail: (value: string) => void,
    setPassword: (value: string) => void
    setRepeatPassword: (value: string) => void
    setFirstName: (value: string) => void
    setUserName: (value: string) => void
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