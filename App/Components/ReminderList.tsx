import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';

import { getEvents } from '../common/api';

import ReminderCard from './ReminderCard';

const styles = StyleSheet.create({
    list: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#f3f3f3',
    },
});

export default class ReminderList extends React.Component {
    state = {
        events: []
    }
    constructor(props: any) {
        super(props);
    }

    handleAddEvent = () => {
        this.props.navigation.navigate('AddReminder');
    }

    componentDidMount() {

        setInterval(() => {
            this.setState({
                events: this.state.events.map(evt => ({
                    ...evt,
                    timer: Date.now(),
                })),
            });
        }, 1000);

        this.props.navigation.addListener('focus', () => {
            const events = require('./db.json').events.map(e => ({...e, date: new Date(e.date)}));
            this.setState({events: events});
            //getEvents().then(events => this.setState({ events: events }));
        });

    }

    render() {
        return [
            <FlatList 
            key='flatList'
            style={styles.list}
            data={this.state.events}
            renderItem={({ item }) => <ReminderCard event = {item} />}
            keyExtractor={item => item.id} />,
            <ActionButton 
            key='fab'
            onPress={this.handleAddEvent}
            buttonColor='rgba(231, 76, 61, 1)'
            />
        ]; 
    }
}