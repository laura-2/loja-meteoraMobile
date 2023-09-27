import { Image, StyleSheet, View } from "react-native";

export default function NavBar(){
    return(
        <View style={styles.header}>
            <Image source={require('../../../assets/logo.png')} alt="Logo Loja Meteora" style={styles.logoImage}/>
            <Image source={require('../../../assets/iconMenu.png')} alt="Menu" style={styles.menuIcon}/>
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
    }
  });
  