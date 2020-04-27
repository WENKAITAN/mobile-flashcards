import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LinksScreen from './screens/LinksScreen'
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import Deck from './screens/Deck'
import NewQuestion from './screens/newQuestion'
import Quiz from './screens/Quiz'
import QuizAnswer from './screens/QuizAnswer'
import { Provider } from 'react-redux'
import reducer from './reducers/index'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { setLocalNotification } from './utils/helper'
const Stack = createStackNavigator();


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        setLocalNotification();
        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <Provider store={createStore(reducer, applyMiddleware(thunk))}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" backgroundColor="green" />}
          <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
            <Stack.Navigator>
              <Stack.Screen name="Root" component={BottomTabNavigator} />
              <Stack.Screen name="Deck" component={Deck} />
              <Stack.Screen name="NewQuestion" component={NewQuestion} />
              <Stack.Screen name="Quiz" component={Quiz} />
              <Stack.Screen name="LinksScreen" component={LinksScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
