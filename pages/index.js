import styled, { keyframes } from 'styled-components'
import { useScrollPercentage } from 'react-scroll-percentage'
import Header from '../components/Header'

export default function Index() {

    const [ref, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0,
    })

    const inView = (percentage > 0 && percentage < 1)

    return (
        <>
            <Header />
            <Home>
                <h1>Edit Me!</h1>
            </Home>
        </>
    );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;


const Home = styled.div`
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;
justify-items: center;
width: 100vw;
height: 80vh;

img{
    animation: ${fadeIn} 1.5s ease-in;
    width: 40%;
}

@media (max-width: 720px) {
   img{
       width: 75%;
   }
  }


`


const LogoContainer = styled.div`
display: flex;
height: 75px;
width: 40%;


img{
    width: 30%;
    margin: 1.5%;
    object-fit: contain;
}
`


