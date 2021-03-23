
import styled, { keyframes } from 'styled-components'
import Header from '../components/Header'
import ReactMarkdown from 'react-markdown'
import TB from '../sources/tb.md'


export default function Work() {



    return (
        <>
            <Header description="Recent Work" section="Work" />
            <WorkSection>
                <h1>Software Projects</h1>
                <section>
                  <h2>Treatment Assistant: TB Treament Support Tools (2019 - Current)</h2>  
                  <ReactMarkdown className="tb" source={TB} />
                </section>

                <ClientSection>
                    <h2>Small Client Projects</h2>
                    <p>I have taken on many small websites for friends, here is a small sampling</p>
                    <a href="https://hankreavis.com">hankreavis.com</a>
                    <a href="https://averyfelman.com">averyfelman.com</a>
                    <a href="http://vargas.photo">vargas.photo</a>
                </ClientSection>
                



            </WorkSection>

        </>
    )
}

const ClientSection = styled.section`


a{
    display: block;
    color: #1c527a;
}
`

const WorkSection = styled.section`
padding: 0 2em;
width: 50%;
    margin: auto;

h1{
    font-size: 2em;
    margin-top: 0;
}

h1,h2{
}

.tb{
    font-size: 1.15em;
    font-family: "Source Sans Pro";
    img{
        width: 500px;
        display: block;
    }
}
`
