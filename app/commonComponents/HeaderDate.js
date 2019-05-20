
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ruCalendar } from '../../mock';

const styles = {
    headerBox: {
        backgroundColor:   '#FFFFFF',
        justifyContent:    'center',
        flexDirection:     'row',
        padding:           10,
        borderBottomColor: '#f6f6f6',
        borderBottomWidth: 1,
        margin:            0,
    },
    headerText: {
        fontWeight: 'bold',
        fontSize:   18,
    },
};

export default class HeaderDate extends Component {
    render () {
        const { day }= this.props;
        const dayArr = day.split('-');
        const dayString = `${dayArr[2]} ${ruCalendar.genitiveName[dayArr[1]-1]} ${dayArr[0]}`;


        return (
            <View style = { styles.headerBox }>
                <Text style = { styles.headerText }>{dayString}</Text>
            </View>
        );
    }
}
