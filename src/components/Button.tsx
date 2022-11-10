import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface ButtonProps {
  children?: ReactNode
  asChild?: boolean
  varient?: 'Default' | 'Small' | 'DefaultTrasparent' | 'SmallTrasparent' | 'XSmall'
  className?: string
  
}

export function BigButton({ varient,children, asChild }: ButtonProps) {
  const ComponentButton = asChild ? Slot : 'button'
  return (
    <ComponentButton
    className={clsx(
      'text-neutral-900 font-sans font-bold  rounded-full text-sm ',{
        'py-4 px-24 bg-primary-blue hover:bg-primary-blue transition-colors focus:ring-2 ring-sky-100 text-white ': varient === 'Default',
        'py-2.5 px-24 bg-primary-blue hover:bg-primary-blue transition-colors focus:ring-2 ring-sky-100 text-white ': varient === 'Small',
        'py-2.5 px-24 bg-transparent border-primary-blue border text-primary-blue': varient === 'DefaultTrasparent',
        'py-1.5 px-24 bg-transparent border-primary-blue border text-primary-blue': varient === 'SmallTrasparent',
        'py-2 px-4 bg-primary-blue border-primary-blue border text-white bg-opacity-100 text-opacity-60 ': varient === 'XSmall',
        

      }
    )}
    >
      {children}
    </ComponentButton>
  )
}

