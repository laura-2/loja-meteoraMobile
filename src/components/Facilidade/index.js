import {Button, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Facilidade(){
    const icones = [
        {url: require('../../../assets/union.png'),texto: 'Pague pelo pix', descricao: 'Ganhe 5% OFF em pagamentos via PIX'},
        {url: require('../../../assets/elipse.png'),texto: 'Troca grátis', descricao: 'Fique livre para trocar em até 30 dias.'},
        {url: require('../../../assets/flower.png'),texto: 'Sustentabilidade', descricao: 'Moda responsável, que respeita o meio ambiente.'},
]
    return(
        <SafeAreaView>
            <View style={styles.estrutura}>
            <Text style={styles.titulo}>Conheça todas as nossas facilidades</Text>
        {icones.map((item, index)=>{
            return(
                <View style={styles.icone} key={index}>
                    <Image source={item.url} alt={item.texto} style={styles.imagemIcone}/>
                    <View style={styles.posicionamento}>
                        <Text style={styles.tituloIcone}>{item.texto}</Text>
                        <Text style={styles.descricao}>{item.descricao}</Text> 
                    </View>
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
        gap: '1rem', 
        backgroundColor: '#000000',
        paddingVertical: '5%'
    },
    titulo: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: '28px'
    },
    icone:{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        marginHorizontal: '10%'
    },
    imagemIcone: {
        width: '56px',
        height: '56px'


    },
    tituloIcone:{
        color: '#DAFF01',
        fontSize: '16px',
        fontWeight: 700
    },
    descricao: {
        fontSize: '13px',
        color: '#ffffff'
    },
    posicionamento:{
        display: 'flex',
        flexDirection: 'column',
        width: '170px'
    }

})