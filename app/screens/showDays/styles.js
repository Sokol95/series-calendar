import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    main: {
        flexDirection:   'column',
        backgroundColor: '#FFFFFF',
        flex:            1,
    },
    notSeriesBox: {
        flex:           1,
        justifyContent: "center",
    },

    notSeriesText: {
        fontSize:  18,
        color:     '#FF0000',
        textAlign: 'center',
    },
    button: {
        flexDirection:   'row',
        justifyContent:  "center",
        backgroundColor: '#FFFFFF',
        padding:         10,
        margin:          20,
    },
    buttonImage: {
        width:  20,
        height: 20,
    },

});
