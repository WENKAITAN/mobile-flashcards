import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { saveDeckTitle } from '../utils/api'
import { connect } from 'react-redux';
import { addDeck } from '../actions/index'

// const DismissKeyboard = ({title}) => (
//   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//     <View>
//       <TextInput
//         style={styles.textInput}
//         placeholder="Deck title"
//         value={title}
//         onChangeText={text => this.setState({ title: text })}
//       />
//     </View>
//   </TouchableWithoutFeedback>
// )

class LinksScreen extends React.Component{
  state = {
    title:''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    saveDeckTitle(this.state.title)
    this.props.dispatch(addDeck(this.state.title))
    this.props.navigation.navigate('Deck', { title: this.state.title })
    this.setState({
      title:""
    })
  }

  render(){
    const { title } = this.state
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Deck title"
            value={title}
            onChangeText={text => this.setState({ title: text })}
          />
          <View style={styles.inputContainer}>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={this.handleSubmit}
              disabled = {title === ''}
            >
              <Text 
              style={styles.saveButtonText}
              disabled={title === ''}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 15
  },
  textInput: {
    borderColor: '#CCCCCC',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    height: 50,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20
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


export default connect()(LinksScreen)