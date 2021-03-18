import Header from '../components/Header'
import ReactMarkdown from 'react-markdown'
import bio from '../sources/bio.md'
import styled from 'styled-components'


export default function About() {
    return (
        <>
            <Header description="About Page" section="About" />
            <BioContainer>
                <ReactMarkdown className="bio" source={bio} />
            </BioContainer>
        </>)
}

const Picture = styled.img`

    width: 30%;
    margin: auto;
    display: block;

`

const BioContainer = styled.div`
font-size: 1.2em;
min-height: 80vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

a,a:visited{
    color: inherit;
}

.bio{
    width: 60%;
    position: relative;
}

@media (max-width: 500px) {
    img{
        width: 80%;
    }
   .bio{
       width: 80%;
       top:0;
   }
  }

`