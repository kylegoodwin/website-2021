import links from '../sources/links.json';
import groupBy from 'lodash/groupBy'
import styled, { keyframes } from 'styled-components'
import Header from '../components/Header'
import { useState } from 'react'


export default function Work() {



    return (
        <>
            <Header description="Recent Work" section="Work" />
            <WorkSection>
                <h1>Software Projects</h1>
                <h2>Treatment Assistant</h2>
            </WorkSection>

        </>
    )
}

const WorkSection = styled.section`
padding: 2em;
`
