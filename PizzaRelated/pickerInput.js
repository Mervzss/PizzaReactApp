import React,{Component} from 'react'

import {Picker,View,Text,StyleSheet} from 'react-native'

import {pizzaBuilder} from '../PizzaAssets/PizzaAssets'

class pickerInput extends Component{

pickerChoicesLoop =()=> pizzaBuilder.size.map((val,index) =>{
    return(
        <Picker.Item label={val.inches} value={val.value} key={index}/>
    )
})
    render(){ 
        return(
        <View style={styles.firstView}>
            <Picker
            selectedValue={this.props.getsizeValue}
            style={styles.pickerStyle}
            onValueChange={(itemValue) => this.props.sizeValue(itemValue)}
            >
            {this.pickerChoicesLoop()}
            </Picker>
        </View>
        )
        

    }
}
const styles = StyleSheet.create({
  
    pickerStyle: {
      height:20,
      width:"50%"
    },
    firstView: {
        justifyContent: 'center',
        width:"50%",
        backgroundColor: '#FFF',
        flexDirection: "row"
    
      },
  });
export default pickerInput;