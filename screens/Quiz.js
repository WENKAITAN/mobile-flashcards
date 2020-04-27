import React, { Component } from 'react';
import Constants from 'expo-constants';
import Quiz_android from './Quiz_android';
import Quiz_ios from './Quiz_ios';
import { clearNotification, setLocalNotification } from '../utils/helper';

export class Quiz extends Component {
    componentDidMount(){
        clearNotification()
         .then(setLocalNotification)
    }
    static navigationOptions = ({ navigation }) => {
        const title = navigation.getParam('title', '');
        return {
            title: `${title} Quiz`
        };
    };
    render() {
        const { route } = this.props;
        const { title } = route.params

        if (Constants.platform.android) {
            return <Quiz_android title={title} />;
        }
        return <Quiz_ios title={title} />;
    }
}

export default Quiz;