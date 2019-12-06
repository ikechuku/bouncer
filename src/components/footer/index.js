import React from 'react'
import Styled from 'styled-components'
import backgroundColor, { color } from '../color/mixins'
import { fontSize, fontWeight } from '../text/mixins'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'
import mastercard from './images/mastercard.svg'
import visa from './images/visas.svg'
import westernUnion from './images/Western-union.svg'
import paypal from './images/Paypal.svg'
import logo from './images/logo.svg'
const HR = Styled.hr`
${color}
`
const Text = Styled.p`
${fontSize}
${color}
${fontWeight}
`
const Wrapper1 = Styled.div`
    width:100%;
`
const P = Styled(Text)`
    width:80%;
    text-decoration:none;
`
const Social = Styled.div`
    
`
const Facebook = Styled(FaFacebookF)`
    ${color}
    margin-right:1.5rem;
`
const Twitter = Styled(FaTwitter)`
    ${color}
    margin-right:1.5rem;


`
const Img = Styled.img`
    padding-left:1rem;
`

export default function Footer({...props}) {
    const relatedPages = ["About Us",
        "Information",
        "Privacy Policy",
        "Terms & Conditions",]
    return (
        <div>
            <HR secondaryLightColor/>
            <div className="container">
        <Wrapper1 className=" d-flex justify-content-around flex-wrap">
            <div className="d-flex flex-column" style={{flexBasis:"33.3%"}}>
                {/* <Text secondaryDarkColor bold  className="p-0">BOUNCER</Text> */}
                <img src={logo} alt="logo"/>
                <P xSmall>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</P>
            </div>
            <div className="d-flex flex-column"style={{flexBasis:"33.3%"}}>
                <Text xSmall bold>Follow Us</Text>
                <P xSmall>Since the 1500s, when an unknown printer took a galley of type and scrambled.</P>
                <Social className="d-flex jusify-content-evenly">
                    <Facebook primaryLightColor/>
                    <Twitter primaryDarkerColor/>

                </Social>   

            </div>
            <div className="d-flex flex-column"style={{flexBasis:"33.3%"}}>
                <Text xSmall bold>Contact Us</Text>
                <P xSmall>My Company , 4578 Marmora Road, Glasgow 
                        D04 89GR<br/> Call us now: 0123-456-789 <br/>
                        Email: support@whatever.com</P>
            </div>
            <HR secondaryLightColor/>
            
        </Wrapper1>
        <HR secondaryLightColor/>
        <Wrapper1 className="container">
            <div className="d-flex justify-content-between flex-wrap">
                <div className="d-flex flex-column">
                <Text xSmall bold>Information</Text>
                {relatedPages.map((page,key)=>(
                  <P secondaryDarkColor xSmall as="a" href="#">{page}</P>   
                ))}  

                </div>
                <div className="d-flex flex-column">
                <Text xSmall bold>Services</Text>
                {relatedPages.map((page,key)=>(
                  <P secondaryDarkColor xSmall as="a" href="#">{page}</P>   
                ))}    

                </div>
                <div className="d-flex flex-column">
                <Text xSmall bold>Extras</Text>
                {relatedPages.map((page,key)=>(
                  <P secondaryDarkColor xSmall as="a" href="#">{page}</P>   
                ))}     

                </div>
                <div className="d-flex flex-column">
                <Text xSmall bold>My Account</Text>
                {relatedPages.map((page,key)=>(
                  <P secondaryDarkColor xSmall as="a" href="#">{page}</P>   
                ))}     

                </div>
                <div className="d-flex flex-column">
                <Text xSmall bold>Useful Links</Text>
                {relatedPages.map((page,key)=>(
                  <P secondaryDarkColor xSmall as="a" href="#">{page}</P>   
                ))}     

                </div>
                <div className="d-flex flex-column">
                <Text xSmall bold>Our Offers</Text>
                {relatedPages.map((page,key)=>(
                  <P secondaryDarkColor xSmall as="a" href="#">{page}</P>   
                ))}     

                </div>
            </div>
        </Wrapper1>

            </div>

        <HR  secondaryLightColor/>
        <Wrapper1 className="container">
                <div className="d-flex justify-con">
                    <P xSmall>© 2018 Ecommerce theme by www.bisenbaev.com</P>
                    <div >
                        <Img src={westernUnion} alt="western union card" srcset=""/>
                        <Img src={mastercard} alt="master card" srcset=""/>
                        <Img src={paypal} alt="paypal card" srcset=""/>
                        <Img src={visa} alt="visa card" srcset=""/>
                    </div>
                </div>
        </Wrapper1>
        </div>
    )
}
