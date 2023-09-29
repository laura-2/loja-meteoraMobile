import {ScrollView, StyleSheet, Text} from 'react-native';
import NavBar from './src/components/NavBar';
import SearchInput from './src/components/Search';
import CarouselSection from './src/components/Carousel';
import Categorias from './src/components/Categorias';
import Produtos from './src/components/Produtos';
import Facilidade from './src/components/Facilidade';
import Box from './src/components/Box';
import Footer from './src/components/Footer';
import produtosPecas from './clothes';

export default function App() {
  return (
    <ScrollView style={styles.fontStyle}>
      <NavBar/>
      <SearchInput/>
      <CarouselSection/>
      <Categorias/>
      <Text style={styles.titulo}>Produtos que estão bombando!</Text>
      {produtosPecas.map((item, index)=>{
        return <Produtos url={item.url} texto={item.texto} descricao={item.descricao} preco={item.preco} key={index}/>
      })}
      <Facilidade/>
      <Box/>
      <Footer/>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  fontStyle:  {
    fontFamily: "'Inter', sans-serif"
  },
  titulo: {
    textAlign: 'center',
    color: '#000000',
    fontSize: '28px',
    marginVertical: '5%'
}
})
