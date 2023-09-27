import { ScrollView, StyleSheet } from 'react-native';
import NavBar from './src/components/NavBar';
import SearchInput from './src/components/Search';
import CarouselSection from './src/components/Carousel';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <NavBar/>
      <SearchInput/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
