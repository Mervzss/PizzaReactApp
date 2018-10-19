import React,{Component} from 'react'

import {CheckBox,View,Text,StyleSheet,SectionList} from 'react-native'

import {pizzaBuilder} from '../PizzaAssets/PizzaAssets'
import {VEGETABLE_TOPPINGS,NON_VEGETABLE_TOPPINGS,CHEESE} from '../actionVariables/actionVariables'
class checkboxSelect extends Component{

    state={
        pizzaBuilder,

    }

    callCheckboxChange=(val,name,data,index,type)=>{
        if(val){
            switch(type)
            {
                case VEGETABLE_TOPPINGS:

                //alert(this.state.vegetablecheckState[0])
                this.props.addVegetableToppings(name,data,val)
                break;
                case NON_VEGETABLE_TOPPINGS:
                this.setState({
                    checkBoxState : state.non_vegetable_toppings[index].onCheckState = true
                }
                )
                this.props.addNonVegetableToppings(name,data)
                break;
                case CHEESE:
                this.setState({
                    checkBoxState : state.cheese[index].onCheckState = true
                }
                )
                this.props.addCheese(name,data)
                break;
                default:
                return;
            }
            
        }
        else{
            switch(type)
            {
                case VEGETABLE_TOPPINGS:
                this.setState(prevState=>{
                    return{
                        pizzaBuilder: prevState.pizzaBuilder.vegetable_toppings.find(veggies =>{
                            return veggies.onCheckState[index] = false
                        })
                    }
                  })
                this.props.removeVegetableToppings(name,data)
                break;
                case NON_VEGETABLE_TOPPINGS:
                this.setState({
                    checkBoxState : state.non_vegetable_toppings[index].onCheckState = false
                }
                    
                )
                this.props.removeNonVegetableToppings(name,data)
                break;
                case CHEESE:
                this.setState({
                    checkBoxState : state.cheese[index].onCheckState = false
                } 
                )
                this.props.removeCheese(name,data)
                break;
                default:
                return;
            }
        }
    }

    sectionList =()=>{
        return(
            <SectionList
                renderItem={({item, index, section}) => 
                 <View style={styles.checkText} key={index}>
                    <CheckBox style={styles.checkBoxStyle} value={this.gg} 
                onValueChange={val=> this.callCheckboxChange(val,item.name,item.value,index,section.type)}
                />
                    <Text style={styles.textStyle}> {item.name}</Text>
            </View>}
  renderSectionHeader={({section: {title}}) => (
    <Text style={{fontWeight: 'bold',fontSize:16}}>{title}</Text>
  )}
  sections={[
    {title: 'Vegetable Toppings', data: pizzaBuilder.vegetable_toppings,type:VEGETABLE_TOPPINGS},
    {title: 'Non Vegetable Toppings', data: pizzaBuilder.non_vegetable_toppings,type:NON_VEGETABLE_TOPPINGS},
    {title: 'Cheese', data: pizzaBuilder.cheese,type:CHEESE},
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