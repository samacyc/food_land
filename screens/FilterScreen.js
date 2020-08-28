import React , {useState  } from 'react'

import {View , Text , StyleSheet , Switch} from 'react-native'

import CustomHeaderButton from '../components/HeaderButtons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Colors } from '../Constants/Colors';
import {useDispatch} from 'react-redux'
import { setFilters } from '../store/actions/meals';

const FilterSwitch = props =>  {
    return <View style ={styles.filterContainer}>
        <Text>{props.label}</Text>
        <Switch  trackColor = {{
                    true : Colors.primaryColor
                }} 
                thumbColor = {Colors.primaryColor}
                value = {props.state} onValueChange ={props.onChange} 
                 />
    </View>
}

const FilterScreen = props => {
    const dispatch = useDispatch()
    const [isGlutenFree , setIsGlutenFree] = useState(false) ;
const [isLactoseFree , setLactoseFree] = useState(false) ;
const [isVegan , setVegan] = useState(false) ;
const [isVegetarian , setVegetarian] = useState(false) ;

const SaveState = () => {
    const state = {
        isGlutenFree : isGlutenFree , 
        isLactoseFree : isLactoseFree ,
        isVegan : isVegan , 
        isVegetarian : isVegetarian
    }
    dispatch(setFilters(state) )
}

    props.navigation.setOptions({ headerLeft : () =><HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
    <Item title = 'Menu' iconName = 'ios-menu' onPress = {() => {
        props.navigation.toggleDrawer()
    }} />
</HeaderButtons>  ,
 headerRight : () =><HeaderButtons HeaderButtonComponent = {CustomHeaderButton}>
 <Item title = 'Menu' iconName = 'ios-save' onPress = {() => {
     SaveState()
 }} />
</HeaderButtons> })





    return (
        <View style = {styles.screen}>
            <Text style = {styles.title}> Available Filters / Restrictions </Text>
            <FilterSwitch label = 'Gluten-free' state = {isGlutenFree} onChange ={(newValue) => setIsGlutenFree(newValue)} />
            <FilterSwitch label = 'Lactose-free' state = {isLactoseFree} onChange ={(newValue) => setLactoseFree(newValue)} />
            <FilterSwitch label = 'Vegan' state = {isVegan} onChange ={(newValue) => setVegan(newValue)} />
            <FilterSwitch label = 'Vegetarian' state = {isVegetarian} onChange ={(newValue) => setVegetarian(newValue)} />

        </View>
    )

};

FilterScreen.navigationOptions = {
    headerTitle : 'Filter Meals'
}

const styles = StyleSheet.create({
    screen :  {
        flex : 1  , 
        alignItems : 'center'
        } , 
        title :{
            fontFamily : 'open-sans-bold' , 
            fontSize : 22 ,
            padding : 15 , 
            textAlign : 'center'
        } , 
        filterContainer : {
            flexDirection :"row" , 
            justifyContent : 'space-between' , 
            alignItems : 'center'  , 
            width : '80%' , 
            marginVertical : 15 

        }
})


export default FilterScreen 