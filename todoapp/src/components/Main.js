import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, TextInput, ScrollView } from 'react-native'
import TodoItem from './TodoItem'

export default class Main extends Component {
    render() {

        const temporalTodos = [
            {
                id: "123455678",
                text: "hola mundo xd"
            },
            {
                id: "1236775678",
                text: "hola mundo xd"
            },
            {
                id: "1237677609",
                text: "hola mundo xd"
            }
        ]

        const renderTodos = () => {
            return temporalTodos.map((todo) => (<TodoItem text={todo.text} key={todo.id} id={todo.id} />))
        }

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.topBar}>
                    <Text style={styles.title}> To-Do </Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} />
                </View>
                <ScrollView
                automaticallyAdjustContentInsets={false}
                >
                {renderTodos()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',

    },
    topBar: {
        padding: 16,
        paddingTop: 28,
        paddingBottom: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2ecc71'
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    inputContainer: {
        padding: 8,
        paddingTop: 0,
        backgroundColor: '#2ecc71'
    },
    input: {
        height: 26,
        padding: 4,
        paddingLeft: 8,
        borderRadius: 8,
        backgroundColor: 'white'
    }
})