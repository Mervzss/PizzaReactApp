// REACT LIB
import React, { Component } from 'react';

//REACT-NATIVE LIB
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import PickerInputPart from './PizzaRelated/pickerInput';
import CheckBoxSelect from './PizzaRelated/checkboxSelect'
// PIZZA ASSETS
export default class App extends Component {

  constructor(props){
    super(props);
    this.state={
      size: null,
      vegetableToppings:[],
      nonVegetableToppings: [],
      Cheese:[],
    }
  }
  finaltransval=(name)=>{ 
    // alert("ywYYW")
    // this.state.vegetableToppings[0].checkState
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

  onaddVegetableToppings=(name,data,checkval)=>{
    this.setState(prevState=>{
      return{
        vegetableToppings: prevState.vegetableToppings.concat({
          toppings: name,
          value:data,
          checkState:checkval
        })
      }
    })
    var placeholder=0;
    
    
  }
  onaddNonVegetableToppings=(name,value)=>{
    this.setState(prevState => {
      return {
        vegetableToppings: prevState.vegetableToppings.filter(toppings => {
          return toppings.name !== name;
          
        })
      };
    });
  }
  onaddCheese=(name,value)=>{
    
  }
  removeVegetableToppings=(name,value)=>{

  }
  removeNonVegetableToppings=(name,value)=>{
  }
  removeCheese=()=>{

  }
    

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headText}>Pizza Builder</Text>
        <View style={styles.firstView}>
        <Text style={styles.pickerText}>Size:</Text>
        <PickerInputPart sizeValue={this.addSizeValue} getsizeValue={this.state.size}/>
        </View>
        <CheckBoxSelect
        transval={this.finaltransval}
        addVegetableToppings={this.onaddVegetableToppings}
        addNonVegetableToppings={this.onaddNonVegetableToppings}
        addCheese={this.onaddCheese}
        removeVegetableToppings={this.onremoveVegetableToppings}
        removeNonVegetableToppings={this.onremoveNonVegetableToppings}
        removeCheese={this.onremoveCheese}
        />
        
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
