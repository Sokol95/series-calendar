
import React, { Component } from 'react';
import { Dimensions, Image } from 'react-native';

export default class ShowImage extends Component {
    static navigationOptions =({ navigation }) => {
        return {
            title:            navigation.getParam('title', 'Title'),
            headerTitleStyle: {
                textAlign: 'center',
                alignSelf: 'center',
                flex:      0.8,

            },
        };
    };
    render () {
        const { navigation } = this.props;
        const originalImage = navigation.getParam('originalImage', 'originalImage');
        const win = Dimensions.get('window');
        const imageSize = { width: win.width, height: win.height - 75 };

        return (
            <Image
                source = { originalImage }
                style = { imageSize }
            />

        );
    }
}
