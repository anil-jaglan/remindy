import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { formatDate, getCountDownParts } from '../common/util';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffff',
        flex: 2,
        flexDirection: 'row',
        padding: 10,
        paddingBottom: 20,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    cardHeader: {
        flex: 1,
        width: '50%',
        flexDirection: 'row',
    },
    date: {
        fontWeight: '200',
        fontSize: 15,
        color: '#bdbdbd',
        width: '50%',
        textAlign: 'right',
    },
    title: {
        fontSize: 15,
        fontWeight: '300',
        marginLeft: 7,
        textAlign: 'left',
    },
    counterContainer: {
        flex: 1,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    counter: {
        width: '25%',
        flex: 1,
    },
    counterText: {
        fontSize: 12,
        textAlign: 'center',
    },
    counterLabel: {
        fontSize: 12,
        fontWeight: '100',
        color: '#a3a3a3',
        textAlign: 'center',
        paddingTop: 0,
    },
});

export default function ReminderCard({ event }) {

    const {
        days,
        hours,
        minutes,
        seconds,
    } = getCountDownParts(event.date);

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.date}>{formatDate(event.date)}</Text>
                <Text style={styles.title}>{event.name}</Text>
            </View>
            <View style={styles.counterContainer}>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{days}</Text>
                    <Text style={styles.counterLabel}>DAYS</Text>
                </View>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{hours}</Text>
                    <Text style={styles.counterLabel}>HOURS</Text>
                </View>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{minutes}</Text>
                    <Text style={styles.counterLabel}>MINUTES</Text>
                </View>
                <View style={styles.counter}>
                    <Text style={styles.counterText}>{seconds}</Text>
                    <Text style={styles.counterLabel}>SECONDS</Text>
                </View>
            </View>
        </View>
    );

}

ReminderCard.prototype = {
    event: PropTypes.shape({
        name: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date)
    }),
}