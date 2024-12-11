
export type IMethodPay = {
    name:string
    email?:string | null
    dni:string
    reference:string
    paymentAmount: number
    phone: string,
    paymentMethod: 'BINANCE' | 'PAGO_MOVIL'
}