import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'

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
      </HeaderContainer>
      <Warning>I am still building this site right now (March 2021)</Warning>
    </>
  )
}

const Warning = styled.span`
display: block;
width: 100%;
background-color: #1c527a;
color: white;
text-align: center;
padding: 5px;
font-family: 'Brygada 1918'

`

const HeaderContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  padding-left: 2em;

  a{
    text-decoration: none;
    margin: auto;
    font-weight: bold;
    color: inherit;
  }

  h1 {
    font-family: 'Brygada 1918'
  }

`



export default Header;
