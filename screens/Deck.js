import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux' 
class Deck extends Component{
    render(){
        const { deck,navigation } = this.props

        return(
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={{fontSize:35,textAlign:'center'}}>{deck.title}</Text>
                    <Text style={{ fontSize: 15, textAlign: 'center',color:'grey' }}>{deck.questions.length} cards</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnCard} onPress={() => navigation.navigate('NewQuestion', {title: deck.title})}>
                        <Text style={{fontSize:25,textAlign:'center'}}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStart} onPress={() => navigation.navigate('Quiz', {title: deck.title})}>
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
const mapStateToPros = (state, prop) => {
    return {
        deck: state[prop.route.params.title]
    }
}

export default connect(mapStateToPros)(Deck)