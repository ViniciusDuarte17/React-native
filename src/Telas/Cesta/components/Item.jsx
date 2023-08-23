import React from "react";
import Texto from "../../components/Texto"
import { StyleSheet, View } from "react-native";
import { Image } from "react-native"

export default function Item ({item: {nome, imagem}}) {

    return <View style={estilos.item} key={nome}>
        <Image source={imagem}/>
        <Texto style={estilos.texto}>{nome}</Texto>
    </View>

}

const estilos = StyleSheet.create({
   
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: 'center'
    },

    texto: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    },
    img: {
        width: 46,
        height: 46
    },
    
})