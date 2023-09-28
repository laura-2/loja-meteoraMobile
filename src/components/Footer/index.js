import { StyleSheet, Text, View } from "react-native";

export default function Footer(){
    return(
        <View style={styles.footer}>
            <Text style={styles.texto}>2023 © Desenvolvido por Laura Verbinen | Projeto fictício sem fins comerciais.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor: '#000000'
    },
    texto:{
        textAlign: 'center',
        color:'#ffffff',
        marginHorizontal: '8%',
        marginVertical: '5%',
        fontSize: '13px'
    }
})