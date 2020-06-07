import React from 'react';

import {MaterialCommunityIcons, AntDesign} from '@expo/vector-icons'

import { Wrapper, Header, Container, BalanceContainer, Balance, BalanceTitle } from './styles'

import Suggestions from '../../components/Suggestions'
import Activies from '../../components/Activities'
import Tips from '../../components/Tips'
import Banner from '../../components/Banner'


export default function Home(){
    return (
        <Wrapper>
            <Container>
            <Header>
                <MaterialCommunityIcons name='qrcode-scan' size={30} color='#10c86e' />
                
                <BalanceContainer>
                    <BalanceTitle>Meu saldo</BalanceTitle>
                    <Balance>R$ 0,00</Balance>
                </BalanceContainer>
                
            <AntDesign name='gift' size={30} color='#10c86e' />
           </Header>
            <Suggestions />
           <Activies />
           <Tips />
           <Banner />
           </Container>
        </Wrapper>
    )
}

