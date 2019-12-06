import React from 'react'
import renderer from 'react-test-renderer'
import {ThemeProvider} from 'styled-components'
import CheckGroup from '../index'
import theme from '../../../theme'


it('renders correctly', ()=>{
    const tree = renderer.create(
    <ThemeProvider theme={theme}>
      <CheckGroup/>  
    </ThemeProvider>
    
    
    ).toJSON();
    expect(tree).toMatchSnapshot();
})
