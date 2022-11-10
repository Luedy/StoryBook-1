import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ProfileProps {
  varient?: 'Light' | 'Dark';
  name?:ReactNode
  index?:ReactNode
  asChild?:boolean
}



export function Profile( { varient,name,index, asChild}: ProfileProps) {
  const ComponentText = asChild?Slot:'p'
  const ComponentText2 = asChild?Slot:'p'
  return (
    <div className='flex gap-3'>
      <div className={clsx("bg-dark-7 rounded-full bg-Avatar bg-contain w-9 h-9", {})}>
      </div>
    <div className=''>
    <ComponentText className={clsx({
        'text-white text-sm':varient === 'Light',
        'text-black text-sm':varient === 'Dark'
      })}>{name}</ComponentText>
      <ComponentText2 className={clsx({
        'text-dark-6 text-sm': varient === 'Light',
        'text-dark-5 text-sm': varient === 'Dark'
      })}>{index}</ComponentText2>  

    \
    </div>
    </div>
  )
}

