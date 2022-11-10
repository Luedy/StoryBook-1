
import { Meta, StoryObj } from '@storybook/react'
import {HeaderProps,Header } from './Header';



export default {
  title: 'Components/Header',
  component: Header,
  args: {
  },
  argTypes: {},
} as Meta<HeaderProps>

export const Light: StoryObj<HeaderProps> = {
  args:{
    variavel:'Light',
    second:'1'
  }
}


export const Dark: StoryObj<HeaderProps> = {
  args:{
    variavel:'Dark',
    second:'1'
  }
}

export const NameLigh: StoryObj<HeaderProps> = {
  args:{
    campo1:'Nome',
    campo2:'9 Tweets',
    variavel:'Light'
  }
}

export const NameDark: StoryObj<HeaderProps> = {
  args:{
    campo1:'Nome',
    campo2:'9 Tweets',
    variavel:'Dark'
  }
}



