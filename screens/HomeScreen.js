import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Deck')}  >
          <Text style={{ fontSize: 35, marginBottom: 10 }}>deck1</Text>
          <Text style={{ fontSize: 20 }}> 3 cards</Text>
        </TouchableOpacity>
      </View>
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

function mapStateToProps(state){
  return{
    decks: state
  }
}

export default connect(mapStateToProps,{ handleInitialData })(HomeScreen)
