import { Meta, StoryObj } from '@storybook/react'
import { Avatar,AvatarProps} from './Avatar';


export default {
  title: 'Components/AvatarProfile',
  component: Avatar,
  args: { },
  argTypes: {},
} as Meta<AvatarProps>


export const Small: StoryObj<AvatarProps> ={
  args:{
    varient:'small'
  }
}

export const medium: StoryObj<AvatarProps> ={
  args:{
    varient:'medium'
  }
}

