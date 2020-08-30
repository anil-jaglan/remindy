import React from 'react';
import { Text, View, TouchableHighlight, TextInput, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import { formatDateTime } from '../common/util';
import { saveEvent } from '../common/api';

const styles = StyleSheet.create({
    fieldConainer: {
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#ffff',
    },
    text: {
        height: 40,
        margin: 0,
        marginLeft: 5,
        padding: 5,
    },
    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        alignSelf: 'stretch',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,        
    },
    borderTop: {
        borderColor: '#edefef',
        borderTopWidth: 0.5,
    },
});

class ReminderForm extends React.Component {

    state = {
        name: null,
        date: '',
        showDatePicker: false,
        saveBtnDisabled: false,
    }

    handleSavePress = () => {        
        this.setState({saveBtnDisabled: true});
        saveEvent(this.state.name, this.state.date).then(() => {
            this.setState({saveBtnDisabled: false});
            this.props.navigation.navigate('Home');
        });
    }

    handleChangeName = (value: string) => {
        this.setState({name: value});
    }

    handleDatePress = () => {
        this.setState({showDatePicker: true});
    }

    handleDatePicked = (date: any) => {
        this.setState({date: date});
        this.handleDateCancel();
    }

    handleDateCancel = () => {
        this.setState({showDatePicker: false})
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <View style={styles.fieldConainer}>
                    <TextInput 
                    style={styles.text}
                    placeholder="Remind me about ..."
                    spellCheck={false}
                    value={this.state.name}
                    onChangeText={this.handleChangeName}
                     />
                     <TextInput
                     style={[styles.text, styles.borderTop]}
                     placeholder="Select Date"
                     value={formatDateTime(this.state.date.toString())}
                     editable={ !this.state.showDatePicker }
                     onFocus={ this.handleDatePress }
                     />
                     <DateTimePicker
                     isVisible={this.state.showDatePicker}
                     mode="datetime"
                     onConfirm={this.handleDatePicked}
                     onCancel={this.handleDateCancel}
                     />
                </View>
                <TouchableHighlight onPress={this.handleSavePress} style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
            </View>
        );
    };

}

export default ReminderForm;