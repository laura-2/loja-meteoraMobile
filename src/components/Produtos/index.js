import {Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Produtos(){
    const produtosPecas = [
        {url: require('../../../assets/card/bolsa.png'),texto: 'Bolsa coringa', descricao: 'Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!', preco: 'R$ 120,00'},
        {url: require('../../../assets/card/tenis.png'),texto: 'Tênis Chunky', descricao: 'Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.', preco: 'R$ 250,00'},
        {url: require('../../../assets/card/calça.png'),texto: 'Calça Alfaiataria', descricao: 'Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!', preco: 'R$ 180,00'},
        {url: require('../../../assets/card/camiseta.png'),texto: 'Camisa conforto', descricao: 'Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.', preco: 'R$ 70,00'},
        {url: require('../../../assets/card/jeans.png'),texto: 'Jaqueta Jeans', descricao: 'Modelo unissex oversized com gola de camurça. Atemporal e autêntica!', preco: 'R$ 150,00'},
        {url: require('../../../assets/card/oculos.png'),texto: 'Óculos Redondo', descricao: 'Armação metálica em grafite com lentes arredondadas. Sem erro!', preco: 'R$ 120,00'}
    ]
    return(
        <SafeAreaView>
            <Text style={styles.titulo}>Produtos que estão bombando!</Text>
            <View style={styles.estrutura}>
        {produtosPecas.map((item, index)=>{
            return(
                <View style={styles.produtos} key={index}>
                    <Image source={item.url} alt={item.texto} style={styles.imagemProduto}/>
                    <Text style={styles.tituloProduto}>{item.texto}</Text>
                    <Text style={styles.descricao}>{item.descricao}</Text> 
                    <Text style={styles.preco}>{item.preco}</Text>
                    <TouchableOpacity style={styles.botaoVerMais}>
                        <Text style={styles.textoBotao}>Ver mais</Text>
                    </TouchableOpacity>
                </View>
            )
        })}
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
    titulo: {
        textAlign: 'center',
        color: '#000000',
        fontSize: '28px',
        marginVertical: '5%'
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