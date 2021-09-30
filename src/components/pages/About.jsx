import React from 'react';
import styled from 'styled-components';
import './about.css'
import img2 from '../img/tar.jpeg'


const Section = styled.section`
width: 100%;
min-height: 90vh;
display: flex;
justify-content: center;
align-items: center;
background: #fff;
box-sizing: border-box;
margin-bottom: 30px;
`

const Container = styled.div`
display: grid;
grid-template-columns: 0.8fr 1.2fr;
min-height: 90vh;
width: 100%;
// padding: 3rem calc((100vw - 1300px) / 2);

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
}
`;

const ColumnLeft = styled.div`
display: flex;
color: #fff;
justify-content: center;
align-items: center;
@media screen and (max-width: 768px) {
    padding: 1rem 0;
}

h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
}

p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
    text-align: center;
}
`;

const ColumnRight = styled.div`
display: flex;
color: #131313;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 5rem 2rem;
padding: 0;

hr {
    color: #a9a9a9;
    background: #a9a9a9;
    height: .5px;
    width: 400px;
    margin-top: 15px;
    border-color: #a9a9a9;
}

h1 {
    margin: 10px 0px ;
    font-size: 2rem;
}

p {
    margin: 5px 10px;
    font-size: 1.5rem;
    line-height: 1.1;
    text-align: center;
    font-style: oblique;
}
@media screen and (max-width: 500px) {
    hr {
        width: 200px
    }
    h1 {
        font-size: 1.3rem;
    }
    p {
        font-size: 1.1rem;
    }
}
`


;




export const About = () =>  {
    return (
        
            <Section id='Info'>
                <Container>
                    <ColumnLeft>
                        <img className="about-img" src={img2} alt=''></img>
                    </ColumnLeft>
                    <ColumnRight>
                        <hr/>
                        <h1>Welcome to Space</h1>
                        <p>
                        Text messages are used for personal, family, business and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues. In the 2010s, the sending of short informal messages became an accepted part of many cultures, as happened earlier with emailing.[1] This makes texting a quick and easy way to communicate with friends, family and colleagues
                        </p>
                        <hr/>
                    </ColumnRight>
                </Container>
            </Section>
        
    )
}

