import React from 'react'
import renderer from 'react-test-renderer'

import Color from '../index'

it('renders correctly where there is no background', ()=>{
    const tree = renderer.create(<Color/>).toJSON();
    expect(tree).toMatchSnapshot();
})

it('renders correctly where background is set',()=>{
    const background="primary"
    const tree = renderer.create(<Color background={background}/>).toJSON();
    expect(tree).toMatchSnapshot()
})