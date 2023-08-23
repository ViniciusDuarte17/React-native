import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Texto from "../../components/Texto";

const Botao = ({ text }) => {

    return (
        <>
            <TouchableOpacity style={estilos.botao} onPress={ () => {}}>
               <Texto style={estilos.textoBotao}>{text}</Texto>
            </TouchableOpacity>
        </>
    )
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: '#2A9F85',
        marginTop: 16,
        paddingVertical: 16,
        borderRadius:6,
      },
      textoBotao: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
      }
})


export default Botao