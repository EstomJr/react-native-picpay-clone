import React from 'react';
import { EvilIcons,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons'; 

import {
    Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    Avatar, 
    Description, 
    Bold,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel
} from './styles';

import avatar from '../../images/avatar.png'

export default function Activities(){
    return (
        <Container>
            <Header>
                <Title> Atividades </Title>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source = {avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@estubala</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Esom Junior</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 18,00</Value>

                        <Divider />
                        <EvilIcons name = 'lock' color='#fff' size={22} />
                            <Date>há alguns segundos </Date>
                        
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>
            </Card>
        </Container>
    );
}