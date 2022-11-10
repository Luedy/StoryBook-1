import { Meta, StoryObj } from '@storybook/react'
import {BigButton, ButtonProps } from './Button'



export default {
  title: 'Components/Button',
  component: BigButton,
  args: {
    children: 'Tweet',
    varient:'Default'
  },
  argTypes: {},
} as Meta<ButtonProps>


export const Default: StoryObj<ButtonProps> = {}

export const Small: StoryObj<ButtonProps> = {
  component: BigButton,
  args: {
    children: 'Tweet',
    varient:'Small'
  },
}as Meta<ButtonProps>

export const DefaultTransparent: StoryObj<ButtonProps> = {
  component: BigButton,
  args: {
    children: 'Tweet',
    varient:'DefaultTrasparent'
  },
}as Meta<ButtonProps>

export const SmallTransparent: StoryObj<ButtonProps> = {
  component: BigButton,
  args: {
    children: 'Tweet',
    varient:'SmallTrasparent'
  },
}as Meta<ButtonProps>

export const XSmall: StoryObj<ButtonProps> = {
  component: BigButton,
  args: {
    children: 'Tweet',
    varient:'XSmall'
  },
}as Meta<ButtonProps>