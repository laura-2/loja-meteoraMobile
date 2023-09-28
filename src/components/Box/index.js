import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Text } from "react-native";

export default function Box(){
    const [email, setEmail] = useState('')
    return(
        <View style={styles.newsletter}>
        <Text style={styles.texto}>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</Text>
        <View style={styles.search}>
            <TextInput style={styles.textInput} placeholder="Digite seu email"
            value={email} onChange={(event)=> setEmail(event.target.value)}/>
            <Button style={styles.buttonSearch} title="Enviar" color="#9353FF"/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    newsletter:{
        borderWidth: 1,
        borderColor: '#000000',
        margin: '5%'
    },
    texto:{
        color: '#000000',
        padding: '5%',
        textAlign: 'center'
    },
    search: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'row',
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
        borderColor: '#9353FF',
        borderStyle: 'solid',
        borderWidth: 1,
        textAlign: 'center',
        color: '#000000'
    }
})                                                                                                                                                                          