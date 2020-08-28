import  React from  'react'

import {TouchableOpacity , Text , View, StyleSheet , Platform , TouchableNativeFeedback ,ImageBackground} from 'react-native'

const CategoryGridTitle = props => {

    let TouchableCmp = TouchableOpacity 
    if (Platform.os === 'androis' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
return(<TouchableCmp style = {styles.gridITem} onPress = { props.onselect
}>
    <View  style = {{ ...styles.container,...{backgroundColor : props.color}}} >
        <ImageBackground source ={{uri : props.color}} style = {{width : '100%' , height : '100%'}}>
        <Text style =  {styles.header} numberOfLines = {2}>{props.title}</Text>

        </ImageBackground>
        </View>
</TouchableCmp>)
}

const styles = StyleSheet.create({
    gridITem : {
        height : 250 , 
        flex : 1 , 
    
    } , 
    text : {
        fontFamily : 'open-sans-bold' , 
        fontSize : 22 , 
        textAlign : "right"
    },
    container : {
        flex : 1 , 
        justifyContent : 'flex-end' , 
        alignItems : 'flex-end'

    } ,
    header : {
        backgroundColor : 'rgba(0,0,0,0.5)' , 
        fontSize : 20 , 
        fontFamily : 'open-sans-bold' , 
        textAlign : "center" ,
        color : 'white'
        
    } 
})


export default CategoryGridTitle