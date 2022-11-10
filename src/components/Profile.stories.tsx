import { Meta, StoryObj } from '@storybook/react'
import { Profile,ProfileProps} from './Profile';


export default {
  title: 'Components/Profile',
  component: Profile,
  args: { },
  argTypes: {},
} as Meta<ProfileProps>


export const Light: StoryObj<ProfileProps> ={
  args:{
    varient:'Light',
    name:'Davide Biscuso',
    index:'@biscuttu'
  }
}

export const Dark: StoryObj<ProfileProps> ={
  args:{
    varient:'Dark',
    name:'Davide Biscuso',
    index:'@biscuttu'
  }
}


