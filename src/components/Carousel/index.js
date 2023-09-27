// import * as React from 'react';
// import { Dimensions, Text, View, Image, StyleSheet } from 'react-native';
// import Carousel, { Pagination } from 'react-native-snap-carousel';

// export default function CarouselSection() {
//     const SLIDER_WIDTH = Dimensions.get('window').width + 30;
//     const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
//     const [index, setIndex] = useState(0);
//   const isCarousel = useRef(null);
//     const data = [
//         {id: 1, name: 'Imagem 1', url: '../../../assets/imagem1.png'},
//         {id: 2, name: 'Imagem 2', url: '../../../assets/imagem2.png'},
//         {id: 3, name: 'Imagem 3', url: '../../../assets/imagem3.png'},
//       ];
//       const renderItem = ({item}) => {
//         return (
//           <View
//             style={{
//               borderWidth: 1,
//               padding: 20,
//               borderRadius: 20,
//               alignItems: 'center',
//               backgroundColor: 'white',
//             }}>
//             <Image source={require(item.url)} style={{width: 200, height: 200}} />
//             <Text style={{marginVertical: 10, fontSize: 20, fontWeight: 'bold'}}>
//               {item.name}
//             </Text>
//           </View>
//         );
//       }
      
//     return (
//         <View style={{marginVertical: 10}}>
//       <Carousel
//         layout={'tinder'}
//         ref={isCarousel}
//         data={data}
//         renderItem={renderItem}
//         sliderWidth={SLIDER_WIDTH}
//         itemWidth={ITEM_WIDTH}
//         onSnapToItem={index => setIndex(index)}
//       />
//       <Pagination
//         dotsLength={data.length}
//         activeDotIndex={index}
//         carouselRef={isCarousel}
//         dotStyle={{
//           width: 10,
//           height: 10,
//           borderRadius: 5,
//           marginHorizontal: 8,
//           backgroundColor: '#F4BB41',
//         }}
//         tappableDots={true}
//         inactiveDotStyle={{
//           backgroundColor: 'black',
//           // Define styles for inactive dots here
//         }}
//         inactiveDotOpacity={0.4}
//         inactiveDotScale={0.6}
//       />
//     </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     cardContainer: {
//       alignItems: 'center',
//       justifyContent: 'center',
//       width,
//     },
//     cardWrapper: {
//       borderRadius: 8,
//       overflow: 'hidden',
//     },
//     card: {
//       width: width * 0.9,
//       height: width * 0.5,
//     },
//     cornerLabel: {
//       position: 'absolute',
//       bottom: 0,
//       right: 0,
//       borderTopLeftRadius: 8,
//     },
//     cornerLabelText: {
//       fontSize: 12,
//       color: '#fff',
//       fontWeight: '600',
//       paddingLeft: 5,
//       paddingRight: 5,
//       paddingTop: 2,
//       paddingBottom: 2,
//     },
//   });
