import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NavBar(){
    const [open, setOpen] = useState(false)
    const options = ['Home', 'Nossas lojas', 'Novidades', 'Promoções']
    function OptionItem({ item }) {
        return (
          <View style={styles.option}>
            <Text style={styles.texto}>{item}</Text>
          </View>
        );
      }
      
    return(
        <View style={styles.header}>
            <Image source={require('../../../assets/logo.png')} alt="Logo Loja Meteora" style={styles.logoImage}/>
            <TouchableOpacity onPress={()=> setOpen(true)}>
            <Image source={require('../../../assets/iconMenu.png')} alt="Menu" style={styles.menuIcon}/>
            </TouchableOpacity>
            {open && 
            <View style={styles.menu}>
                <TouchableOpacity onPress={()=> setOpen(open)}>
                <Image source={require('../../../assets/marca-cruzada.png')} alt="Fechar" style={styles.close}/>
                </TouchableOpacity>
            <FlatList
              data={options}
              renderItem={({ item }) => <OptionItem item={item} />}
              keyExtractor={(item) => item}
            />
          </View>
            }
        </View>
        
    )
}

const styles = StyleSheet.create({
    header: {
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'row',
      gap: '9rem',
      padding: '5%'
    },
    logoImage: {
        width: '125px',
        height: '18px',
    },
    menuIcon: {
        width: '18px',
        height: '18px',
    },
    option:{
        marginVertical: '5%',
    },
    menu:{
        backgroundColor: '#343A40',
        position: 'absolute',
        top: 0,
        padding: '5%',
        left: 220,
        display: 'flex'


    },
    close:{
        position: 'absolute',
        alignSelf: 'flex-end',
        width: '18px',
        height: '17px'

    },
    texto:{
        color:'#ffffff',
        padding: '3%',
    }
  });
  