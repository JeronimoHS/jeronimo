import React, { Component } from 'react';
import { Container, Card, Content,  Body, Text, Button, Item, CardItem, Input, Icon } from 'native-base';
import { StyleSheet } from 'react-native';

class registro extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: 'Raul',
      pass: '123456r',
      entrar: 1,
    }
  } //END CONSTRUCTOR
  render(){
  return (
    <Container>
    <Content padder contentContainerStyle={styles.content}>
      <Card>
        <CardItem header bordered>
          <Text style={styles.textCenter}>REGISTRARSE</Text>
        </CardItem>
        <Button block blue>
            <Icon type='AntDesign' name='facebook-square' />
            <Text>FACEBOOK</Text>
          </Button>
        <Button block danger>
            <Icon type='MaterialCommunityIcons' name='gmail' />
            <Text>GMAIL</Text>
          </Button>
        <CardItem bordered>
          <Body>
            <Item inlineLabel>
              <Icon type='FontAwesome' name='user' />
              <Input placeholder=' Nombre o Usuario' />
            </Item>
            <Item inlineLabel>
              <Icon type='Entypo' name='email'/>
              <Input placeholder='Correo electronico' />
            </Item>
            <Item inlineLabel last>
              <Icon type='FontAwesome' name='lock' />
              <Input placeholder='  Contraseña' secureTextEntry={true} />
            </Item>
          </Body>
        </CardItem>
        <CardItem footer bordered>
          <Button primary style={styles.boton}><Text>Registrarse</Text></Button>
        </CardItem>
      </Card>
    </Content>
  </Container>
    );
  }
}
0
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center', // CENTRAR CONTENIDO
  },
  textCenter: {
    textAlign: 'center', // ALINEAR EL TEXTO
    width: '100%' // OCUPAR EL ANCHO DE CARD
  },
  boton: {
    marginLeft: '50%' // AVENTAR DE LADO DERECHO
  }
});


export default registro;