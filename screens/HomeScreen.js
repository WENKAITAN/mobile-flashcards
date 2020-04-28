import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/index'

class HomeScreen extends React.Component{
  state = {
    decks: {}
  }
  componentDidMount(){
    this.props.handleInitialData()
  }
  render(){
    const { decks, navigation } = this.props
    return (
      <ScrollView contentContainerStyle={styles.container}>
        {Object.values(decks).map((deck) => (
          <TouchableOpacity 
            key={deck.title} 
            style={styles.btn} 
            onPress={() => 
              navigation.navigate('Deck', {title: deck.title})
            } 
          >
            <Text style={{ fontSize: 35, marginBottom: 10 }}>{deck.title}</Text>
            <Text style={{ fontSize: 20, textAlign: 'center' }}> {deck.questions.length} cards</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    marginTop:25,
  },

})

const mapStateToProps = state => ({ decks: state });


export default connect(
  mapStateToProps,
  { handleInitialData }
)(HomeScreen)
