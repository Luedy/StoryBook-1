import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface MenuProps {
  varient?:string;
  src?:string;
}



export function MenuItem({src,varient }: MenuProps) {
  return (
    <div className='flex items-center gap-3 w-64 h-14.5'>
      <img src={src}  />
      <p className={clsx({
          'text-white text-md font-bold':varient === 'white',
          'text-primary-blue text-md font-bold' : varient === 'blue',
          'text-black text-md font-bold':varient === 'black'
      }
      )}>Home</p>
    </div>  
  )
}

