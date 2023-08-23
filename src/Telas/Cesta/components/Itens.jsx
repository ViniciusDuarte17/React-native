import React from "react";
import Texto from "../../components/Texto"
import { StyleSheet, View } from "react-native";
import { Image } from "react-native"

export default function Itens ({titulo, lista}) {

    return(
        <>
            <Texto style={estilos.titulo}>{titulo}</Texto>
            {
               lista.map( ({nome, imagem}) => {
                return <View style={estilos.item} key={nome}>
                    <Image source={imagem}/>
                    <Texto style={estilos.texto}>{nome}</Texto>
                </View>
               })
            }
        </>
    )

   
}

const estilos = StyleSheet.create({
    titulo: {
        color: '#464646',
        fontWeight: 'bold',
        fontSize: 20,
        marginTop: 32,
        marginBottom: 8,
        lineHeight: 32
    },

    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
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