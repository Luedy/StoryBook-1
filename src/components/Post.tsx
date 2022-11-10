import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

import { Avatar } from './Avatar'
import { Icon } from './icon'
import {BigButton} from './Button'

import galeria from './icons/galery.png'
import gif from './icons/gif.png'
import progress from './icons/progress.png'
import emoji from './icons/emoji.png'
import calendarioRelogio from './icons/calendarioRelogio.png'


export interface PostProps{
  varient?:'Light' | 'Dark'
}

export function Post({varient}: PostProps) {
  return (
    <div className=''>
      <div className='flex gap-4 items-center pb-8'>
        <Avatar varient='small' />
        <input type='text' className={clsx('bg-transparent ',{
          'text-dark-5': varient === 'Light',
          'text-dark-6': varient === 'Dark'
        })} placeholder='What’s happening?' />
      </div>
      <div className='flex gap-4 ml-12 items-center'>
        <Icon src={galeria}/>
        <Icon src={gif}/>
        <Icon src={progress}/>
        <Icon src={emoji}/>
        <Icon src={calendarioRelogio} />
        <div className='ml-64'><BigButton  children='Twetter' varient='XSmall' asChild={false}/></div>
      </div>
      
    </div>
  )
}
