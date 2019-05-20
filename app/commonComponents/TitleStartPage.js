/* eslint-disable react/forbid-component-props */
import React, { Component } from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import logo from '../../mock/Telik.png';

const originalImageSize ={
    width:  275,
    height: 214,
};

const styles = {
    mainView: {
        flex:           0.5,
        justifyContent: "center",
        alignItems:     "center",
    },
    textText: {
        marginTop: 20,
        textAlign: 'center',
    },
};

export default class TitleStartPage extends Component {
    render () {
        const win = Dimensions.get('window');
        const imageStyles = {
            height: originalImageSize.height/originalImageSize.width*win.width/3,
            width:  win.width/3,
            margin: 5,
        };

        return (
            <View style = { styles.mainView }>
                <Image
                    source = { logo }
                    style = { imageStyles }
                />
                <Text style = { styles.textText } >
                    {`Для получения списка сериалов,\n пожалуйста, выберите \n необходимый месяц и день.`}
                </Text>
            </View>
        );
    }
}
