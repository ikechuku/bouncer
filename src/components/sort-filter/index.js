import React from "react"

import Items from "./items"
import Toggle from "./toggle"

import {SortFilterStyle } from './style'
import SelectGroup from '../form/select'

const SortFilter = ({items}) => {
    return (
        <SortFilterStyle secondary data-testid='sort-filter'>
            <div className='sort-wrapper'>
                <Items items={items}/>
                <div className='sortby'>
                    <p>SortBy</p>
                    <SelectGroup className='select' list={['Name', 'Size']}  xsmall  secondary/>
                </div>
                <div className='show'>
                    <p>Show</p>
                    <SelectGroup className='select' list={[1, 2]}  xsmall  secondary/>
                </div>
            </div>
            <Toggle/>
        </SortFilterStyle>
    )
};
export default SortFilter
