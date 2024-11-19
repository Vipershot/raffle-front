export type IFormPayment = IMethodBinance | IMethodPagoMovil


export type IMethodBinance = {
    email:string
    idRef:string
    mount: string
}

export type IMethodPagoMovil = {
    name:string
    dni:string
    idRef:string
    mount: string
}