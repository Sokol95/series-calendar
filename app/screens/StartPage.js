//Core
import React, { Component } from 'react';
import { Container } from 'native-base';
import { TitleStartPage, MonthCalendar } from '../commonComponents';


export default class StartPage extends Component {
    static navigationOptions = {
        title:            'Super Film'.toUpperCase(),
        headerTitleStyle: {
            textAlign: 'center',
            alignSelf: 'center',
            flex:      1,
        },
    };

    render () {
        const { navigate } = this.props.navigation;
        const _showDay = (day) => {
            navigate('ShowDays', {
                previewDay: day,
            });
        };

        return (
            <Container>
                <TitleStartPage />
                <MonthCalendar
                    showDay = { _showDay }
                />
            </Container>
        );
    }
}
