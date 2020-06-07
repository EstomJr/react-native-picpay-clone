import React from 'react';
import { View } from 'react-native';

import img8  from '../../images/08.png'
import img9 from '../../images/09.png';
import img10 from '../../images/10.png';
import img11 from '../../images/11.png';
import img12 from '../../images/12.png';

const items = [
    {
        key: String(Math.random()),
        img: img8,
        title:'Universitário! Cadastre-se e ganhe mais cashback',
        bgColor: '#172c4a',
    },
    {
        key: String(Math.random()),
        img: img9,
        title:'Compre créditos pré-pagos',
        bgColor: '#6a0159',
    },
    {
        key: String(Math.random()),
        img: img10,
        title:'Conheça nossas promoções',
        bgColor: '#4139c8',
    },
    {
        key: String(Math.random()),
        img: img11,
        title:'Pague suas contas sem sair de casa',
        bgColor: '#00ab4b',
    },
    {
        key: String(Math.random()),
        img: img12,
        title:'Adicione dinheiro na sua carteira',
        bgColor: '#ba2f76',
    },
]



import {Container, Title, Option, Img} from './styles'

export default function Tips(){
    return (
        <Container>
            {items.map((item) => (
            <Option key = {item.key}bgColor={item.bgColor}>
                     <Title>{item.title}</Title>
                 <Img source={item.img} />
            </Option>
        ))}
        </Container>
    )
}