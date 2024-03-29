import React from "react";

import topo from '../../../../assets/topo.png';
import { Image, StyleSheet, Dimensions } from 'react-native';
import Texto from "../../components/Texto";


const width = Dimensions.get('screen').width;

 const Topo = ({titulo}) => {

    return (
        <>
            <Image source={topo} style={estilos.topo} />
            <Texto style={estilos.titulo}>{ titulo }</Texto>
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
    }
})


 export default Topo;