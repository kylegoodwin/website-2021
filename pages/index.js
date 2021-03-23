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
                        <p className="">Hello! I am Kyle, a developer and photographer from currently based in New York City. I grew up in Seattle, and stayed through college, where I studied Informatics at the University of Washington. My professional work has focused on the intersection of software and public health. I have been practicing photography from a young age, and enjoy documenting my hobbies, and using photography as a medium for cultural criticism.</p>
                    </div>
                </div>
                <div className="landing-image">
                </div>

            </Home>
            <Section>
                <h2>Photos for you to enjoy</h2>
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
    margin: 0 2em; 
}

    img:nth-of-type(1){
    margin-top: 75px;
}

img:nth-of-type(2){
    margin-bottom: 75px;
}

&:nth-of-type(even){
    img:nth-of-type(1){
        transform: translateX(-2vw);
    }
}

&:nth-of-type(odd){
    img:nth-of-type(2){
        transform: translateX(2vw);
    }
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


`


