import styled from 'styled-components'
import Link from 'next/link'
import Head from 'next/head'

function Header(props) {

  return (
    <>
      <Head>
      <title>Title{props.section && `: ${props.section}`}</title>
      <meta name="description" content={props.description ? props.description : "Title"}></meta>
      <meta name="robots" content="index, follow"></meta>
      </Head>
      <HeaderContainer>
        <Link href="/work"><a>One</a></Link>
        <Link href="/"><h1>Title</h1></Link>
        <Link href="/about"><a>Two</a></Link>
      </HeaderContainer>
    </>
  )
}

const HeaderContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  a{
    text-decoration: none;
    margin: auto;
    font-weight: bold;
    color: inherit;
  }

  h1 {
    font-family: poynter-oldstyle-display, serif;
    font-weight: 700;
    font-style: normal;
  }

`



export default Header;
