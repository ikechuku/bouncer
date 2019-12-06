import React from 'react'
import mastercard from './images/mastercard.svg'
import visa from './images/visas.svg'
import westernUnion from './images/Western-union.svg'
import paypal from './images/Paypal.svg'
import logo from './images/logo.svg'
import { FaFacebookF as Facebook, FaTwitter as Twitter } from 'react-icons/fa'
import  {P, Logo, Wrapper1,Img,HR,Social, Text, IconContainer} from './styles'
export default function Footer({...props}) {
    const relatedPages = [{title:"About Us",path:"#"},
        {title:"Information",path:"#"},
        {title:"Privacy Policy",path:"#"},
        {title:"Terms & Conditions",path:"#"},]
    return (
        <div data-testid="footerId">
            <HR secondaryLightColor/>
            <div className="container">
        <Wrapper1 className=" d-flex justify-content-around flex-wrap">
            <div className="d-flex flex-column" style={{flexBasis:"33.3%"}}>
                {/* <Text secondaryDarkColor bold  className="p-0">BOUNCER</Text> */}
                <Logo src={logo} alt="logo"/>
                <P xSmall>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</P>
            </div>
            <div className="d-flex flex-column"style={{flexBasis:"33.3%"}}>
                <Text xSmall bold>Follow Us</Text>
                <P xSmall>Since the 1500s, when an unknown printer took a galley of type and scrambled.</P>
                <Social className="d-flex jusify-content-evenly">
                   <IconContainer primaryLightColor><Facebook /></IconContainer> 
                   <IconContainer primaryDarkerColor><Twitter /></IconContainer>
                    

                </Social>   

            </div>
            <div className="d-flex flex-column pl-6"style={{flexBasis:"33.3%"}}>
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
                  <P  secondaryDarkColor xSmall as="a" href={page.path} key={key}>{page.title}</P>   
                ))}  

                </div>
                <div className="d-flex flex-column">
                <Text xSmall bold>Services</Text>
                {relatedPages.map((page,key)=>(
                  <P secondaryDarkColor xSmall as="a" href={page.path} key={key}>{page.title}</P>   
                ))}    

                </div>
                <div className="d-flex flex-column">
                <Text xSmall bold>Extras</Text>
                {relatedPages.map((page,key)=>(
                  <P secondaryDarkColor xSmall as="a" href={page.path} key={key} >{page.title}</P>   
                ))}     

                </div>
                <div className="d-flex flex-column">
                <Text xSmall bold>My Account</Text>
                {relatedPages.map((page,key)=>(
                  <P secondaryDarkColor xSmall as="a" href={page.path} key={key}>{page.title}</P>   
                ))}     

                </div>
                <div className="d-flex flex-column">
                <Text xSmall bold>Useful Links</Text>
                {relatedPages.map((page,key)=>(
                  <P secondaryDarkColor xSmall as="a" href={page.path} key={key}>{page.title}</P>   
                ))}     

                </div>
                <div className="d-flex flex-column">
                <Text xSmall bold>Our Offers</Text>
                {relatedPages.map((page,key)=>(
                  <P secondaryDarkColor xSmall as="a" href={page.path} key={key}>{page.title}</P>   
                ))}     

                </div>
            </div>
        </Wrapper1>

            </div>

        <HR  secondaryLightColor/>
        <Wrapper1 className="container">
                <div className="d-flex justify-content-between">
                    <Text xSmall>© 2018 Ecommerce theme by www.bisenbaev.com</Text>
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
