export type IFormPayment = IMethodBinance | IMethodPagoMovil


export type IMethodBinance = {
    email:string
    idRef:string
    mount: number
}

export type IMethodPagoMovil = {
    name:string
    dni:string
    idRef:string
    mount: number
    idCel: string,
}