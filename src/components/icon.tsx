import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface IconProps {
  src?:string;
  className?:string;
}



export function Icon({src,className}: IconProps) {
  return (
    <img 
      src={src}
      className={className}
    /> 
  )
}
Icon.defaultProps= {
  className:'w-7 h-6'
}