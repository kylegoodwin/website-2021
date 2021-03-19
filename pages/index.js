import styled, { keyframes } from 'styled-components'
import { useScrollPercentage } from 'react-scroll-percentage'
import Header from '../components/Header'
import { fadeIn } from '../utility/Animations'
import fs from 'fs'

export async function getStaticProps(context) {

    const testFolder = 'public/images';

    const vertical = await new Promise((resolve, reject) => {
        return fs.readdir('public/images', (err, files) => {
            if(err != null) reject(err)
            console.log(files)
            resolve(files.filter( each => {
                return each !== '.DS_Store'
            }).map(each => {return `${each}`}))
        })
    })

    return {
        props: {vertical: vertical}, // will be passed to the page component as props
    }
}

export default function Index({vertical,horizontal}) {

    const [ref, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
    })

    const inView = (percentage > 0 && percentage < 1)

    return (
        <>
            <Header />
            <Home>
                <div className="text">
                    <div>
                        <h2>{"Developer & Photographer"}</h2>
                        <p>Im Kyle, a developer and photographer from the northwest, currently based in New York City.
                        I stIdied informatics at the University of Washington,
                        and have focused my work around the intersection of software and public health.
                        Off the computer I spend most of my time outdoors. I love cycling, skateboarding, 
                        backpacking, and exploring the backcountry on a snowboard.</p>
                    </div>
                </div>
                <div className="landing-image">
                </div>

            </Home>
            <Section>
                <h2>Recent Photography</h2>
                <Photos fileNames={vertical} />
            </Section>
        </>
    );
}

const Photos = ({fileNames}) => {


    let elements = []

    for(let i=0; i < fileNames.length; i+=2){
        elements.push(<GalleryImage >
        <img src={`/images/${fileNames[i]}`} />
        {fileNames[i + 1] && <img src={`/images/${fileNames[i + 1]}`} />}
        </GalleryImage>)
    }

    return(
        <Gallery>
            { elements}
        </Gallery>
    )
}

const Gallery = styled.div`
width: auto;
display: flex;
flex-wrap: wrap;

`

const GalleryImage = styled.div`
width: 100%;

box-sizing: border-box;

display: flex;
justify-content: center;

img{
    width: 40%;
    object-fit: contain;
    margin: 0 37px; 
}

    img:nth-of-type(1){
    margin-top: 75px;
}

img:nth-of-type(2){
    margin-bottom: 75px;
}

`

const Section = styled.section`

padding: 2em; 
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
}

.landing-image{
    margin: 2em;
    flex: 1 1 0;
    height: auto;
    background-image: url("/images/photo-00002.jpg");
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


`


