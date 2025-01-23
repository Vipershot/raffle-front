import { QRCodeSVG } from 'qrcode.react'

interface QRProps {
  value: string;
}

export const QR = ({ value }: QRProps) => {
  return (
     <QRCodeSVG value={value} size={256} /> 
  )
}
