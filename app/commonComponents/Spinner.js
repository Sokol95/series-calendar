
import React, { Component } from 'react';
import { ActivityIndicator, View, Text} from 'react-native';

const styles = {
    spinnerBox: {
        flex:           0.01,
        justifyContent: 'center',
        flexDirection:  'row',
        padding:        10,
    },
    spinner: {
        size:  "small",
        color: "#00FF00",
    },
    spinningInfo: {
        fontSize:  14,
        color:     '#00FF00',
        textAlign: 'center',
    },

};

export default class Spinner extends Component {
    render () {
        const { isSpinning }= this.props;

        return isSpinning ?
            <View style = { styles.spinnerBox }>
                <ActivityIndicator style = { styles.spinner } />
                <Text style = { styles.spinningInfo }>Идёт загрузка!</Text>
            </View>
            : null
        ;
    }
}
