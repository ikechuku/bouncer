import React from 'react';
import categories from "../../utils/data/categories"
import './styles.css'
import Text from '../text'
import {Wrapper,CatWrapper,ItemWrapper,Links} from './styles'

const Dropdown=()=>(
   <div className="d-flex my-dropdown">
       <Wrapper className="d-flex justify-content-between flex-wrap pt-3 pl-5 pr-5">
        {categories.map((category,key)=>(
            <CatWrapper className="d-flex flex-column">
                <Text xSmall secondaryDarkColor >
                    {category.name}
                </Text>
                <ItemWrapper className="d-flex flex-column flex-wrap">
                    {category.items.map((item,key)=>(
                        <Links xxSmall as="a" href="#">
                            {item}
                        </Links>
                    ))}

                </ItemWrapper>
            </CatWrapper>
        ))}

       </Wrapper>
   </div>
);

export default Dropdown;