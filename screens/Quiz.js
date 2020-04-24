import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
class Quiz extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ flex: 1, alignItems: 'flex-start', fontSize: 25, marginLeft:10,marginTop:10 }}>2 / 2</Text>
                <View style={styles.infoContainer}>
                    <Text style={{fontSize:35}}>Question?</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('QuizAnswer')} >
                        <Text style={{ fontSize: 15, color: 'purple' }}>Answer</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnCard}>
                        <Text style={{ textAlign: 'center', fontSize: 25, color:'white' }}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnStart}>
                        <Text style={{ color: "white", fontSize: 25, textAlign: 'center' }}>Incorrect</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 500
    },
    btnContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    btnCard: {
        width: 200,
        height:75,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor: 'green',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: 10

    },
    btnStart: {
        width: 200,
        height:75,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 5,
        backgroundColor: "red",
        marginBottom: 150,
    }
})


export default Quiz