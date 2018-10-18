// REACT LIB
import React, { Component } from 'react';

//REACT-NATIVE LIB
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Picker
} from 'react-native';
import PickerInputPart from './PizzaRelated/pickerInput';
// PIZZA ASSETS
export default class App extends Component {
  //initialized State
  // constructor(props){
  //   super(props);
  //   this.state={
  //     size: null,
  //     vegetableToppings:null,
  //     nonVegetableToppings: null,
  //     Cheese:null,
  //     pizzaSize: [{try:"First"},"Second","Third"]
  //   }
  // }
  state={
    size:0
  }

  guard =()=> this.state.pizzaSize.map(name =>{
    return(
      <Text>{name.try}</Text>
    )
  })
    addSizeValue = sizeVal =>{
      this.setState({
        size:sizeVal
      })
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headText}>Pizza Builder</Text>
        <View style={styles.firstView}>
        <Text style={styles.pickerText}>Size:</Text>
        <PickerInputPart sizeValue={this.addSizeValue} />
        </View>
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: "column"

  },
  firstView: {
    justifyContent: 'center',
    width:"100%",
    backgroundColor: '#FFF',
    flexDirection: "row"

  },
  headText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  pickerText: {
    fontSize: 15,
    fontWeight:"bold",
    width:"20%"
  },
  pickerStyle: {
    height:20,
    width:"50%"
  },
});
