import styled from 'styled-components'
import Header from '../components/Header'


export default function Contact(){
    return(
        <>
        <Header />
        <AboutSection>
            <div>
                <h2>Lets get in touch!</h2>  
                <p>For all enquiries please email:</p>
                <a target="blank" href="mailto:hi@kyle-goodwin.com">hi@kyle-goodwin.com</a>
            </div>
            <div>
                <img src="/me.jpg" /> 
            </div>
           
          

        </AboutSection>
        </>
    )
}

const AboutSection = styled.section`

display: flex;

div{
    flex: 1 1 0;
    align-items: center;
    padding: 2em;
}

img{
    width: 300px;
} 

`