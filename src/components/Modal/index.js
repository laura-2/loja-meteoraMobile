import { useState } from "react";
import { Image, Modal, View, Picker, Text, TouchableOpacity, StyleSheet } from "react-native";


export default function ModalProduto({url, texto, descricao, preco}){
    const [selectedColor, setSelectedColor] = useState('Azul claro');
    const [selectedTamanho, setSelectedTamanho] = useState('M');
    const optionColor = ['Azul claro', 'Offwhite', 'Preto']
    const optionTamanho = ['PP', 'P', 'M', 'G', 'GG']
    return(
        <Modal
        animationType="slide"
          >
            <View style={styles.header}>
                <Image source={require('../../../assets/check-circle.png')} alt="Check" style={styles.check}/>
                <Text style={styles.headerTitle}>Confira detalhes sobre o produto</Text>
                <Image source={require('../../../assets/icon.png')} alt="Fechar" style={styles.icon}/>
            </View>
            <View>
            <Image source={url}/>
            <Text>{texto}</Text>
            <Text>{descricao}</Text>
            <Text>{preco}</Text>
            <Text style={styles.paragrafo}>Vendido e entregue por Riachuelo</Text>
            <View>
                <Text style={styles.textSelect}>Cores:</Text>
                <Picker
                    selectedValue={selectedColor}
                    onValueChange={(itemValue) => setSelectedColor(itemValue)}
                >
                    {optionColor.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                    ))}
                </Picker>
                <Text style={styles.textSelect}>Tamanho:</Text>
                <Picker
                    selectedValue={selectedTamanho}
                    onValueChange={(itemValue) => setSelectedTamanho(itemValue)}
                >
                    {optionTamanho.map((option, index) => (
                    <Picker.Item key={index} label={option} value={option} />
                    ))}
                </Picker>
            </View>
            <TouchableOpacity style={styles.botaoSacola}>
                <Text style={styles.textoBotao}>Adicionar à sacola</Text>
            </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#000000',
        display: 'flex',
        flexDirection: 'row',
        padding: '2%',
        gap: '1rem',
        justifyContent: 'center'
    },
    check:{
        width:'32px',
        height:'32px',
    },
    icon:{
        width: '16px',
        height: '16px',
    },
    headerTitle:{
        color:"#ffffff",
        fontSize: '20px'
    },
    paragrafo:{
        color: '#ADB5BD',
        fontSize: '13px'
    },
    textSelect:{
        color: '#000000',
        fontSize: '13px',
        fontWeight: 700
    },
    botaoSacola:{
        backgroundColor: '#9353FF',
        paddingHorizontal: '5%',
        paddingVertical: '3%',
        marginLeft: '5%',
        width: 180
    },
    textoBotao:{
        color: '#ffffff',
        fontWeight: 500,
        textAlign: 'center',
        fontSize: '16px'
    }
})