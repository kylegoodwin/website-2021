import styled, { keyframes } from 'styled-components'
import { useScrollPercentage } from 'react-scroll-percentage'
import Header from '../components/Header'
import { fadeIn } from '../utility/Animations'
import fs from 'fs'

export async function getStaticProps(context) {

    const testFolder = 'public/images';

    const vertical = await new Promise((resolve, reject) => {
        return fs.readdir('public/images', (err, files) => {
            if (err != null) reject(err)
            resolve(files.filter(each => {
                return each !== '.DS_Store'
            }).map(each => { return `${each}` }))
        })
    })

    return {
        props: { vertical: vertical }, // will be passed to the page component as props
    }
}

export default function Index({ vertical, horizontal }) {

    const [ref, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
    })

    const inView = (percentage > 0 && percentage < 1)

    return (
        <>
            <Header />
            <Container>
                <Home>
                    <div className="text">
                        <div>
                            <h2>{"Developer & Photographer"}</h2>
                            <p className="">Hello! I am Kyle, a developer and photographer from currently based in New York City.
                                I grew up in Seattle, and stayed through college, where I studied Informatics at the University of Washington.
                                My professional work has focused on the intersection of software and public health.
                                I have practiced photography from a young age, and enjoy documenting my hobbies and travels.</p>
                        </div>
                    </div>
                    <div className="landing-image">
                    </div>
                </Home>
                <Section>
                    <h2>Recent Photos</h2>
                    <Photos fileNames={vertical} />
                </Section>
            </Container>
        </>
    );
}

const Photos = ({ fileNames }) => {

    let elements = []

    for (let i = 0; i < fileNames.length; i += 1) {
        elements.push(<div>
            {i % 2 === 1 && <div className='odd-spacer' />}
            <img src={`/images/${fileNames[i]}`} />
        </div>)
    }

    return (
        <Gallery>
            {elements}
        </Gallery>
    )
}

const Container = styled.div`
padding: 0 2rem;
`

const Gallery = styled.div`
box-sizing: border-box;
padding: 4rem;
width: 100%;
display: grid;
grid-template-columns: auto auto;
grid-column-gap: 4rem;

.odd-spacer{
    height: 50px;
}

@media (max-width: 500px) {
    padding: 0;
    grid-template-columns: 100%;
    grid-row-gap: 1rem;

    .odd-spacer{
        height: 0;
    }

}

div img{
    width: 100%;
    border-radius: 2px;
}


`

const Section = styled.section`
padding: 2rem 0; 


@media (max-width: 500px) {
   padding: 1rem 0;
}

`

const Home = styled.div`
min-height: 90vh;
display: flex;

.text{
    flex-basis: 33%;
    padding: 2em;
    font-size: 1.15em;
    h2{
        font-size: 1.5em;
    }

    p{
    font-family: "Source Sans Pro";
}
}

.landing-image{
    margin: 2em;
    flex: 1 1 0;
    height: auto;
    background-image: url("/home.jpg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
}

> div{
    display: flex;
    align-items: center;
    justify-content: center;
}


div > img{
    animation: ${fadeIn} 2s ease-in-out;
    border: 10px solid white;
    max-height: 600px;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.33);
}

@media (max-width: 720px) {
   img{
       width: 75%;
   }
  }




@media (max-width: 500px){
    padding-top: 2rem;
    flex-direction: column-reverse;
    .text{
        padding: 0;
        flex-basis: unset;
    }
    .landing-image{
        margin: 0;
        flex-grow: 1;
    }
}

`