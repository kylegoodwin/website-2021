import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'
import {AiFillInstagram,AiFillGithub} from 'react-icons/ai'

function Header(props) {

  return (
    <>
      <Head>
        <title>Kyle Goodwin{props.section && `: ${props.section}`}</title>
        <meta name="description" content={props.description ? props.description : "Title"}></meta>
        <meta name="robots" content="index, follow"></meta>
      </Head>
      <HeaderContainer>
        <Link href="/"><h1>Kyle Goodwin</h1></Link>
        <Link href="/work"><RightLink>Software Projects</RightLink></Link>
        <a href="https://github.com/kylegoodwin"><AiFillGithub size="1.5em" /></a>
        <a href="https://instagram.com/kylegoodwn"><AiFillInstagram size="1.5em"/></a>
      </HeaderContainer>
      <Warning>I am still building this site right now (May 2022)</Warning>
    </>
  )
}

const RightLink = styled.a`

    border-bottom: solid 1px #1c527a;
    cursor: pointer;

`


const Warning = styled.span`
display: block;
width: 100%;
background-color: #1c527a;
color: white;
text-align: center;
padding: 5px;
font-family: 'Brygada 1918';

`

const HeaderContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2em;


  h1{
    margin-right: auto;
    cursor: pointer;
  }

  a{
    text-decoration: none;
    font-weight: bold;
    color: inherit;
    padding: .25em 0;
    margin-left: 1em;
    font-size: 1em;
  }

  h1 {
    font-family: 'Brygada 1918'
  }

`



export default Header;
