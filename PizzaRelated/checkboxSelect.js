import React,{Component} from 'react'

import {CheckBox,View,Text,StyleSheet} from 'react-native'

import {pizzaBuilder} from '../PizzaAssets/PizzaAssets'

class checkboxSelect extends Component{

    checkboxLoop =()=> pizzaBuilder.vegetable_toppings.map(val =>{
        return(
            <View style={styles.checkText}>
                <CheckBox value={false}
                testID="dsf"
                />
                    <Text style={{marginTop: 5}}> {val.toppings}</Text>
            </View>
        )
    })
    check=()=>{}
    render(){
        return(
        
                <View style={{ flexDirection: 'column' }}>
                     {this.checkboxLoop()}
                </View>
        
        )
    }
}

const styles = StyleSheet.create({
    checkText: {
      flexDirection: "row",
    },
    
  });
export default checkboxSelect;