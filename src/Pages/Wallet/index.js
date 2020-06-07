import React from 'react';
import { Switch, Text, View } from 'react-native';

import { FontAwesome5, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'; 
import { 
    Wrapper,
    Container, 
    Body, 
    Title,
    Value,
    ValueBold, 
    Option,
    EyeIcon, 
    Info, 
    Label, 
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardInfo,
    CardTitle,
    Img,
    AddButton,
    AddLabel,
    Footer,
    FooterTitle,
    ContainerFooter,
    Finish
  
} from './styles';

import creditCard from '../../images/credit-card.png'

export default function Home(){
    return (
        <Wrapper>
       
        <Container>
            <Body >
                <Title>
                  <Text>Saldo PicPay</Text>
                  </Title>
                <Option>
                <Value> R$ <ValueBold>0,00</ValueBold></Value>
                <EyeIcon>
                < FontAwesome5 name="eye" size={15} color="white" />
                </EyeIcon>
                </Option>
                <Info>
                   <Label>Seu saldo está rendendo 100% do CDI</Label>
               </Info>
               <Actions>
                   <Action>
                        <MaterialCommunityIcons name="cash" size={28} color="white" />
                        <ActionLabel>Adicionar</ActionLabel>
                     </Action>
                     <Action>
                        <FontAwesome name="bank" size={20} color="white" />
                        <ActionLabel>Retirar</ActionLabel>
                     </Action>
               </Actions>
            </Body>
        </Container>

        <UseBalance>
            <UseBalanceTitle>
                Usar saldo ao pagar
            </UseBalanceTitle>
            <Switch/>
        </UseBalance>
        
        <PaymentMethods>
            <PaymentMethodsTitle>
            Formas de pagamento
            </PaymentMethodsTitle>
        


        <Card>
          <CardBody>
            <CardDetails>
              <CardTitle>
                Cadastre seu cartão de crédito
              </CardTitle>
              <CardInfo>
                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
          </CardBody>

          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0DB060" />
            <AddLabel>
              Adicionar cartão de crédito
            </AddLabel>
          </AddButton>
          
        </Card>
        <ContainerFooter>
          <Footer>
          <MaterialCommunityIcons name="ticket-confirmation" size={24} color="green" />
            <FooterTitle>
              Usar código promocional
            </FooterTitle>
          </Footer>
        </ContainerFooter>
        </PaymentMethods>
        <Finish></Finish>
        
        
    </Wrapper>
    
            
            

    )
}

