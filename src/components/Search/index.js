import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function SearchInput(){
    return(
        <View style={styles.search}>
            <TextInput style={styles.textInput} placeholder="Digite o produto"/>
            <Button style={styles.buttonSearch} title="Buscar" color="#000000"/>
        </View>
    )
}

const styles = StyleSheet.create({
    search: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '5%',
        paddingVertical: '5%',
    },
    textInput: {
        padding: '5%',
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    buttonSearch: {
        padding: '5%',
        textAlign: 'center',
        borderColor: '#000000',
        backgroundColor: '#ffffff',
        borderStyle: 'solid',
        borderWidth: 1,
        textAlign: 'center',
        color: '#000000'
    }
})