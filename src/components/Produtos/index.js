import { useState } from "react";
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ModalProduto from "../Modal";

export default function Produtos({url, texto, descricao, preco}){
    const [modalOpen, setModalOpen] = useState(false)

    return(
        <SafeAreaView>
            <View style={styles.estrutura}>
                <View style={styles.produtos}>
                    <Image source={url} alt={texto} style={styles.imagemProduto}/>
                    <Text style={styles.tituloProduto}>{texto}</Text>
                    <Text style={styles.descricao}>{descricao}</Text> 
                    <Text style={styles.preco}>{preco}</Text>
                    <TouchableOpacity style={styles.botaoVerMais} onPress={()=>setModalOpen(true)}>
                        <Text style={styles.textoBotao}>Ver mais</Text>
                    </TouchableOpacity>
                    {modalOpen && (
                    <ModalProduto/>)}
                </View>
        </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    estrutura: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    produtos:{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: '5%'
    },
    imagemProduto: {
        width: '323px',
        height: '422px'

    },
    tituloProduto:{
        color: '#000000',
        fontSize: '16px',
        fontWeight: 700,
        marginHorizontal: '5%'
    },
    descricao: {
        fontSize: '13px',
        color: '#000000',
        marginHorizontal: '5%'
    },
    preco: {
        fontSize: '16px',
        color: '#000000',
        fontWeight: 700,
        marginHorizontal: '5%'
    },
    botaoVerMais:{
        backgroundColor: '#9353FF',
        paddingHorizontal: '5%',
        paddingVertical: '3%',
        marginLeft: '5%',
        width: 100
    },
    textoBotao:{
        color: '#ffffff',
        fontWeight: 500,
        textAlign: 'center',
        fontSize: '16px'
    }

})