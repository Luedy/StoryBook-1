
import { Meta, StoryObj } from '@storybook/react'
import {MenuProps,MenuItem } from './MenuItem';

import blue from './MenuItemIcons/BlueHome.png'
import black from './MenuItemIcons/black.png'
import white  from './MenuItemIcons/white.png'

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
  args: {
    varient:'blue'
  },
  argTypes: {},
} as Meta<MenuProps>

export const BlueItem: StoryObj<MenuProps> = {
  component: MenuItem,
  args: {
    varient:'blue',
    src:blue
  },
}as Meta<MenuProps>

export const BlackItem: StoryObj<MenuProps> = {
  component: MenuItem,
  args: {
    varient:'black',
    src:black
  },
}as Meta<MenuProps>

export const WhiteItem: StoryObj<MenuProps> = {
  component: MenuItem,
  args: {
    varient:'white',
    src:white
  },
}as Meta<MenuProps>

