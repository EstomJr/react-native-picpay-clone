import styled from 'styled-components/native';


export const Wrapper = styled.View`
background: #000;
  flex: 1;`;

export const Container = styled.View`
flex:1;
background:black;
`;

export const Body = styled.View`

height:300px
background:#2fcf75
`;

export const Title = styled.Text`
font-weight:bold
margin-top:90px
text-align:center;
color:#fff;
`;

export const Option = styled.View`
margin-left: 120px
align-items:center;
margin-top:10px
flex-direction:row;

`;

export const Value = styled.Text`
font-size:40px
color:#fff
`;


export const ValueBold = styled.Text`
font-weight:bold;
`;

export const EyeIcon = styled.View`
padding:10px
`;

export const Info = styled.View`
margin-top:5px
align-items:center;
`;

export const Label = styled.Text`
color:#FFF
`;

export const Actions = styled.TouchableOpacity`
margin-left:40px
flex-direction: row;
margin-top: 40px;
`;

export const Action = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
border: 1px solid rgba(255, 255, 255, 0.6);
width: 150px;
height: 45px;
border-radius: 25px;
margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export const UseBalance = styled.View`

  background: #1C1C1E;
  height: 60px;
  flex-direction: row;
  padding: 0 16px;
  align-items: center;
  justify-content: space-between;
  
`;

export const UseBalanceTitle = styled.Text`
color: #fff;
font-size: 16px;
font-weight: 500;
`;

export const PaymentMethods = styled.View`
  margin-top: 35px;
  padding: 0 16px;
`;

export const PaymentMethodsTitle = styled.Text`
  color: #8E8E93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1E232A;
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardTitle = styled.Text`
  margin-left:10px
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const CardInfo = styled.Text`
  margin-left:10px
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 20px;
`;

export const Img = styled.Image`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
  margin-left:10px
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
`;

export const AddLabel = styled.Text`
  color: #0DB060;
  font-size: 18px;
  font-weight: bold;
  margin-left: 15px;
`;

export const FooterTitle = styled.Text`
color: #0DB060;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
  text-decoration: underline;
`;

export const Footer = styled.View`
justify-content:center;
align-items:center;

flex-direction:row;
`;

export const ContainerFooter = styled.View`
align-items: center;
margin-top: 25px;


`;

export const Finish = styled.View`
margin-top: 139px;

`;