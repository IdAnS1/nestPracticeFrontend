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

export interface IPropsLogin {
    setEmail: (value: string) => void,
    setPassword: (value: string) => void
}

export interface IPropsRegister {
    setEmail: (value: string) => void,
    setPassword: (value: string) => void
    setRepeatPassword: (value: string) => void
    setFirstName: (value: string) => void
    setUserName: (value: string) => void
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