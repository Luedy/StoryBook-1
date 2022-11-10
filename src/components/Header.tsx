import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface HeaderProps {
  variavel?: 'Light' | 'Dark'
  aschild?: boolean
  campo1?: string
  campo2?: string
  second: string

}

import theme from './icons/theme.png'
import back from './icons/back.png'
import { Icon } from './icon'

export function Header({ variavel, aschild, second, campo1, campo2 }: HeaderProps) {
  second === '1' ? aschild = true : aschild
  


  if (aschild) {
    return (
      <div className={clsx('pb-3 px-3 flex items-center justify-between border-b-2 w-[37rem]', {
        ' border-dark-7 ': variavel === 'Light',
        ' border-dark-4 ': variavel === 'Dark'
      })}>
      <h1 className={clsx('font-bold text-md',{
       'text-black ': variavel === 'Light',
       'text-white': variavel === 'Dark'
      })}>Home</h1>
        
        <Icon src={theme} />
      </div>
    )
  } else {
    return (
      <div className={clsx('border-b-2 w-[37rem] items-center flex pb-3 px-3 gap-9', {
        ' border-dark-7 ': variavel === 'Light',
        ' border-dark-4 ': variavel === 'Dark'
      })}>
        <Icon className='w-4 h-3' src={back} />
        <div>
          <p className={clsx('font-bold text-lg',{
            'text-black': variavel === 'Light',
            'text-white': variavel === 'Dark'
          })}>{campo1}</p>
          <p className={clsx('text-xx font-medium',{
            'text-dark-5':variavel === 'Light',
            'text-dark-6 ':variavel === 'Dark',
          })}>{campo2}</p>
        </div>
      </div>
    )

  }



}

