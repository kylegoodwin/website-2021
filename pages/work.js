import links from '../sources/links.json';
import groupBy from 'lodash/groupBy'
import styled, { keyframes } from 'styled-components'
import Header from '../components/Header'
import { useState } from 'react'


export default function Work() {

    const [sort, changeSort] = useState("subject")

    let splitLinks = groupBy(links, sort);

    const pubList = Object.keys(splitLinks).sort((a, b) => {
        return (a.localeCompare(b))
    }).map((key,i) => {
        const linkList = splitLinks[key].map((link, n) => {
            return <li key={`link-${i}-${n}`}><a target="_blank" href={`${link.url && link.url}`}>{link.title}</a></li>
        })
        return (
            <div key={`key-${key}`} className="section">
                <h2>{key}</h2>
                {linkList}
            </div>)
    })


    return (
        <>
            <Header description="Recent Work" section="Work" />
            <StyledButtons>
                <p> Sort By</p>
                <SelectionButton positive={sort === "subject"} onClick={() => { changeSort("subject") }}>subject</SelectionButton>
                <SelectionButton positive={sort === "publication"} onClick={() => { changeSort("publication") }}>publication</SelectionButton>
            </StyledButtons>
            <ListContainer>
                {pubList}
            </ListContainer>

        </>
    )
}

const StyledButtons = styled.div`
width: 100%;
justify-content: center;
align-items: center;
display: flex;

p{
    margin-right: 1em;
}

`

const SelectionButton = styled.button`
    height: 2em;
    border: 1px solid #2a528a;
    font-family: inherit;
    color: ${props => props.positive ? 'white' : 'inherit'};
    background-color: ${props => props.positive ? '#2a528a' : 'white'};
    &:focus{outline: 0;}
    margin: 0;
`

const ListContainer = styled.div`

width: 100%;
display: flex;
flex-direction: column;
align-items: center;

.section{
    width: 50%;
    text-align: left;
    display: block;
}

li{
    list-style: none;
    margin: .5em;

    &:hover{
        text-decoration: underline;
    }

    a,a:visited{
        color: inherit;
        text-decoration: none;
    }
}


@media (max-width: 500px) {
   .section{
       width: 80%;
   }
  }


`