import React, { Component } from 'react';
import Constants from 'expo-constants';
import Quiz_Android from './Quiz_android';
import Quiz_iOS from './Quiz_ios';
import { clearNotification, setLocalNotification } from '../utils/helper';

export class Quiz extends Component {
    // componentDidMount(){
    //     clearNotification().then(setLocalNotification)
    // }
    static navigationOptions = () => {
        const { route } = this.props;
        const title = route.params.title
        return {
            title: `${title} Quiz`
        };
    };
    render() {
        const { route } = this.props;
        const title = route.params.title

        if (Constants.platform.android) {
            return <Quiz_Android title={title} />;
        }
        return <Quiz_iOS title={title} />;
    }
}

export default Quiz;