import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import Texto from "../Telas/components/Texto";

import topo from '../../assets/topo.png';
import logo from '../../assets/logo.png';

const width = Dimensions.get('screen').width

export default function Cesta() {
    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

            <View style={estilos.cesta}>
                <Texto style={estilos.nome}>Cesta de verduras</Texto>
            
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Texto style={estilos.nomeDaFazenda}>Jonny jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>
                Uma cesta com produtos selecionados
                cuidadosamente da fazenda direto para
                sua cozinha
            </Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>

            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * width,
    },

    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSinze: 16,
        color: 'white',
        fontWeight:'bold',
        padding: 16
    },

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },

    nome: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold'
    },
    
    fazenda: {
        flexDirection: 'row',
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },

    nomeDaFazenda: {
        fontSize: 16,
        height: 32,
        marginLeft: 12
    },

    descricao: {
        color: '#A3A3A3',
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: '#2A9F85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})