import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface AvatarProps {
  varient?: 'small' | 'medium'
}



export function Avatar({varient}: AvatarProps) {
  return (
    <div className={clsx("bg-dark-7 rounded-full bg-Avatar bg-contain",{
      'w-9 h-9' : varient === 'small',
      'w-12 h-12': varient === 'medium'
      
    })}>
    </div>  
  )
}

