import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Keyboard, TouchableOpacity } from 'react-native'
import { addCardToDeck } from '../utils/api'
import { addCardToDeck_re } from '../actions/index'
import { connect } from 'react-redux'
class NewQuestion extends Component{
    state = {
        question:'',
        answer:''
    }

    handleSubmit = (e) => {
        const { question, answer } = this.state
        const { title, navigation, dispatch } = this.props
        const card = {
            question,
            answer
        }
        e.preventDefault()
        addCardToDeck(title, card)
        dispatch(addCardToDeck_re(title, card))
        navigation.goBack()
        this.setState({
            question: "",
            answer: ""
        })
    }

    render(){
        const { question, answer } = this.state
        return(
            <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="New card"
                    name="card"
                    onBlur={Keyboard.dismiss}
                    value={question}
                    onChangeText={text => this.setState({question: text})}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Answer"
                    onBlur={Keyboard.dismiss}
                    value={answer}
                    name="answer"
                    onChangeText={text => this.setState({answer: text})}
                />
                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        style={styles.saveButton}
                        onPress={this.handleSubmit}
                    >
                        <Text style={styles.saveButtonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View >
    )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        paddingTop: 35
    },
    textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom:25
    },
    saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
    }
})

function mapStateToProps({route}){
    const { title } = route.params
    return {
        title
    }
}

export default connect(mapStateToProps)(NewQuestion)