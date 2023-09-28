import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Categorias(){
    const categoriasPecas = [
        {url: require('../../../assets/categorias/bolsas.png'),texto: 'Bolsas'},
        {url: require('../../../assets/categorias/calçados.png'),texto: 'Calçados'},
        {url: require('../../../assets/categorias/calças.png'),texto: 'Calças'},
        {url: require('../../../assets/categorias/camiseta.png'),texto: 'Camisetas'},
        {url: require('../../../assets/categorias/casacos.png'),texto: 'Casacos'},
        {url: require('../../../assets/categorias/oculos.png'),texto: 'Óculos'}
    ]
    return(
        <SafeAreaView>
            <Text style={styles.titulo}>Busque por categoria:</Text>
            <View style={styles.estrutura}>
        {categoriasPecas.map((item, index)=>{
            return(
                <View style={styles.categorias} key={index}>
                    <Image source={item.url} alt={item.texto} style={styles.imagemCategoria}/>
                    <Text style={styles.tituloCategoria}>{item.texto}</Text>
                </View>
            )
        })}
        </View>
        </SafeAreaView>
    )
}
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = 2;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;


const styles = StyleSheet.create({
    estrutura: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: -(gap / 2),
        marginHorizontal: (gap / 2),
        backgroundColor: '#ffffff'
    },
    titulo: {
        textAlign: 'center',
        color: '#000000',
        fontSize: '28px',
        marginVertical: '5%'
    },
    categorias:{
        display: 'flex',
        marginHorizontal: gap / 2,
        marginVertical: gap / 2,
        minWidth: childWidth,
        maxWidth: childWidth,
    },
    imagemCategoria: {
        width: '146px',
        height: '157px',
    },
    tituloCategoria:{
        color: '#ffffff',
        backgroundColor: '#000000',
        textAlign: 'center',
        fontSize: '16px',
        width: '146px'
    }
})