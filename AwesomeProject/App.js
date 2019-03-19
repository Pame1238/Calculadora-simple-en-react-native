import React from 'react';
import {View, Button, Text} from 'react-native'
import NumericInput from 'react-native-numeric-input'



export default class App extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      value1: '',
      value2: ''
    }
  }

  

  render() {
    return (
      <View style={{padding: 50}}>
        <Text>Tipica calculadora by Pame</Text>
        <NumericInput   
          type='up-down'  
          onChange={(text) => this.setState({value1: text})}
         />

        <NumericInput 
          type='up-down' 
          onChange={(text) => this.setState({value2: text})} 
        />

        <Button title="Suma" onPress={(value1,value2) => {
          value1= this.state.value1
          value2 = this.state.value2
          alert(value1+value2)
        }}/>

        <Button title="Resta" onPress={(value1,value2) => {
          value1= this.state.value1
          value2 = this.state.value2
          alert(value1-value2)
        }}/>

        <Button title="Multiplicacion" onPress={(value1,value2) => {
          value1= this.state.value1
          value2 = this.state.value2
          alert(value1*value2)
        }}/>

        <Button title="Division" onPress={(value1,value2) => {
          value1= this.state.value1
          value2 = this.state.value2
          alert(value1/value2)
        }}/>
        
      </View>
    );
  }
}


