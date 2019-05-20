//Core
import React, { Component } from 'react';
import { arrayOf, func } from "prop-types";
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
// Components
import qImg from '../../mock/Question_mark.png';
const styles = {
    scrollView: {
        backgroundColor: '#FFFFFF',
    },
    seriesItem: {
        margin:        20,
        flexDirection: 'row',
    },
    seriesItemPictureBox: {
        marginRight: 10,
        elevation:   20,
    },
    seriesItemPicture: {
        width:  85,
        height: 120,
    },
    seriesItemBody: {
        margin:         2,
        flexDirection:  'column',
        flex:           1,
        justifyContent: 'space-between',
    },
    seriesItemBodyHeader: {
    },
    seriesItemTitle: {
        margin: 5,
    },
    seriesTextTitle: {
        fontSize:   14,
        fontWeight: 'bold',
    },
    seriesTextYear: {
        fontSize: 14,
        color:    '#444444',
    },
    seriesTextSeasonNumber: {
        fontSize: 14,
        color:    '#444444',
        margin:   10,
    },
    seriesItemYear: {
        margin: 5,
    },
    seriesItemBodyFooter: {
    },
    seriesItemSeries: {
        flexDirection:   'row',
        backgroundColor: '#f0f0f0',
        borderRadius:    5,
        alignSelf:       'flex-start',
    },
};

export default class SeriesList extends Component {
    static propTypes = {
        schedule:    arrayOf.isRequired,
        showImage:   func.isRequired,
        SmartButton: func.isRequired,
    };
    static defaultProps = {
        schedule:    [],
        showImage:   () => {},
        SmartButton: null,
    };

    render () {
        const { schedule, SmartButton, showImage }= this.props;
        const SeriesListJSX = schedule.map((i) => {
            const previewImage = i.show && i.show.image && i.show.image.medium?
                { uri: i.show.image.medium }:
                qImg;
            const title = i.show && i.show.name ? i.show.name : 'Название не найдено';
            const year = i.show && i.show.premiered ? i.show.premiered.substring(0, 4) : '????';
            const season = i.season ? i.season : '?';
            const number = i.number ? i.number : '?';
            const originalImage = i.show && i.show.image && i.show.image.original?
                { uri: i.show.image.original }:
                i.show && i.show.image && i.show.image.medium ?
                    { uri: i.show.image.medium } :
                    qImg;

            const _showImage = () => {
                showImage(title, originalImage);
            };

            return (
                <View
                    key = { i.id }
                    style = { styles.seriesItem }>

                    <TouchableOpacity
                        style = { styles.seriesItemPictureBox }
                        onPress = { _showImage }>
                        <Image
                            source = { previewImage }
                            style = { styles.seriesItemPicture }
                        />
                    </TouchableOpacity>
                    <View style = { styles.seriesItemBody } >
                        <View style = { styles.seriesItemBodyHeader } >
                            <View style = { styles.seriesItemTitle } >
                                <Text style = { styles.seriesTextTitle }>{title}</Text>
                            </View>
                            <View style = { styles.seriesItemYear } >
                                <Text style = { styles.seriesTextYear }>{year}</Text>
                            </View>
                        </View>
                        <View style = { styles.seriesItemBodyFooter } >
                            <View style = { styles.seriesItemSeries } >
                                <Text style = { styles.seriesTextSeasonNumber }>Сезон: {season}</Text>
                                <Text style = { styles.seriesTextSeasonNumber }>Эпизод: {number}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        });

        return (
            <ScrollView style = { styles.scrollView }>
                {SeriesListJSX}
                <SmartButton />
            </ScrollView>
        );
    }
}
