import React,{Component} from 'react'

import {CheckBox,View,Text,StyleSheet} from 'react-native'

import {pizzaBuilder} from '../PizzaAssets/PizzaAssets'

class checkbocSelect extends Component{

    checkboxLoop =()=> pizzaBuilder.vegetable_toppings.map(val =>{
        return(
            <CheckBox label={val.inches} value={val.value}/>
        )
    })
    render(){
        return(
            <View>
                <Text>dfdsfsdf</Text>
            </View>
//             <View style={{ flexDirection: 'column'}}>
//   <CheckBox />
//   <View style={{ flexDirection: 'row' }}>
//     <CheckBox
//       value="sad"
//     />
//     <Text style={{marginTop: 5}}> this is checkbox</Text>
//   </View>
// </View>
        )
    }
}
export default checkbocSelect;