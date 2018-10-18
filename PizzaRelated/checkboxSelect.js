import React,{Component} from 'react'

import {CheckBox,View,Text,StyleSheet,SectionList} from 'react-native'

import {pizzaBuilder} from '../PizzaAssets/PizzaAssets'

class checkboxSelect extends Component{

    // checkboxLoop =()=> pizzaBuilder.vegetable_toppings.map(val =>{
    //     return(
    //         <View style={styles.checkText}>
    //             <CheckBox value={false}
    //             testID="dsf"
    //             />
    //                 <Text style={{marginTop: 5}}> {val.toppings}</Text>
    //         </View>
    //     )
    // })
    sectionList =()=>{
        return(
            <SectionList
                renderItem={({item, index, section}) => 
                 <View style={styles.checkText} key={index}>
                    <CheckBox style={styles.checkBoxStyle} value={false} 
                onValueChange={val=> this.callCheckboxChange(val,item.name,data,index,section.index)}
                />
                    <Text style={styles.textStyle}> {section.index}{item.name}</Text>
            </View>}
  renderSectionHeader={({section: {title}}) => (
    <Text style={{fontWeight: 'bold',fontSize:16}}>{title}</Text>
  )}
  sections={[
    {title: 'Vegetable Toppings', data: pizzaBuilder.vegetable_toppings,index:0},
    {title: 'Non Vegetable Toppings', data: pizzaBuilder.non_vegetable_toppings,index:1},
    {title: 'Cheese', data: pizzaBuilder.cheese,index:2},
  ]}
  keyExtractor={(item, index) => item.name + index}
/>
        )
    }
    render(){
        return(
        
                <View style={{ flexDirection: 'column' }}>
                     {this.sectionList()}
                </View>
        
        )
    }
}

const styles = StyleSheet.create({
    checkText: {
        flexDirection: "row",
        width:"100%"
      },
      checkBoxStyle: {
          width:"10%"
          
        },
        textStyle: {
          width:"85%",
          marginTop: 7
        },
  });
export default checkboxSelect;