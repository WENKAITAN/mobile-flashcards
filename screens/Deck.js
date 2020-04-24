import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
class Deck extends Component{
    render(){
        const { navigation } = this.props
        return(
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={{fontSize:35,textAlign:'center'}}>Deck1</Text>
                    <Text style={{ fontSize: 15, textAlign: 'center',color:'grey' }}>3 cards</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnCard} onPress={() => navigation.navigate('NewQuestion')}>
                        <Text style={{fontSize:25,textAlign:'center'}}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Quiz')}>
                        <Text style={{ color: "white", fontSize: 25, textAlign: 'center'}}>Start Quiz</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1
    },
    infoContainer:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        marginBottom:500
    },
    btnContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:'center'
    },
    btnCard: {
        width: 200,
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 2,
        marginBottom: 10

    },
    btnStart: {
        width: 200,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        backgroundColor: "black",
        marginBottom: 50
    }
})

export default Deck