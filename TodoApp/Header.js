import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class Header extends Component {
    state = {  }
    render() {
        return (
            <View style={styles.header}>
                <TouchableOpacity onPress={this.props.onToggleAllComplete}>
                    <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
                </TouchableOpacity>
                <TextInput
                    value={this.props.value}
                    onChangeText={this.props.onChange}
                    onSubmitEditing={this.props.onAddItem}
                    placeholder="What needs to be done?"
                    blurOnSubmit={false}
                    returnKeyType="done"
                    style={styles.input}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 16,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    toggleIcon: {
        fontSize: 30,
        color: "#ccc",
    },
    input: {
        flex: 1,
        height: 50,
        marginLeft: 16,
    }
})

export default Header;