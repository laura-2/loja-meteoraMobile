import * as React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';

export default function CarouselSection() {
    const items = [
        {titulo: '', texto: '', url: require('../../../assets/imagem1.png')},
        {titulo: 'Coleção Atemporal', texto: 'Estilo e qualidade para durar.', url: require('../../../assets/imagem2.png')},
        {titulo: 'Coleção Atemporal', texto: 'Alto impacto visual, baixo impacto ambiental.', url: require('../../../assets/imagem3.png')},
      ];

      
    return (
        <View style={styles.carouselImage}>
            {items.map((item, index)=>{
                return (
                    <View key={index}>
                        <Image source={item.url} alt={item.titulo} style={styles.image}/>
                        <Text style={styles.titulo}>{item.titulo}</Text>
                        <Text style={styles.texto}>{item.texto}</Text>
                </View>
            )})}
    </View>
    );
}

const styles = StyleSheet.create({
    carouselImage:{
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'scroll'
    },
    image: {
        width: '375px',
        height: '415px'
    },
    titulo:{
        fontSize: '32px',
        fontWeight: 500,
        color: '#ffffff',
        position: 'absolute',
        top: '270px',
        alignSelf: 'center'
    },
    texto: {
        fontSize: '16px', 
        color: '#ffffff', 
        position: 'absolute',
        top: '320px',
        alignSelf: 'center'
    }
  });
