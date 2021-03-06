import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>추천</h4>
            <Content>
                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Loki-1.png"></img>
                </Wrap>
                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Mandalorian_S2.png"></img>
                </Wrap>
                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/BlackPanther@1x.png"></img>
                </Wrap>
                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/The-Batch-Batch_630x378@1x.png"></img>
                </Wrap>
                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Mulan@1x.png"></img>
                </Wrap>
                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/EtoffedesHeros@1x.png"></img>
                </Wrap>
                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/Luca_630x378@1,5x-2.png"></img>
                </Wrap>
                <Wrap>
                    <img src="https://cannonball-cdn.bamgrid.com/assets/originals/FAWS@1x.png"></img>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies

const Container = styled.div`
    padding: 
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0,1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
    }
`