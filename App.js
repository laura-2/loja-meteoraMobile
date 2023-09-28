import { ScrollView, StyleSheet } from 'react-native';
import NavBar from './src/components/NavBar';
import SearchInput from './src/components/Search';
import CarouselSection from './src/components/Carousel';
import Categorias from './src/components/Categorias';
import Produtos from './src/components/Produtos';
import Facilidade from './src/components/Facilidade';
import Box from './src/components/Box';
import Footer from './src/components/Footer';

export default function App() {
  return (
    <ScrollView>
      <NavBar/>
      <SearchInput/>
      <CarouselSection/>
      <Categorias/>
      <Produtos/>
      <Facilidade/>
      <Box/>
      <Footer/>
    </ScrollView>
  );
}

