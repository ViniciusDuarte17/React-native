import React from 'react';
import { StyleSheet, View } from 'react-native';
import Detalhes from './components/Detalhes';

import Topo from './components/Topo';
import { ScrollView } from 'react-native';
import Itens from './components/Itens';

export default function Cesta({topo, detalhes, itens }) {
    return (
        <ScrollView>
            <Topo {...topo}/>
            <View style={estilos.cesta}>
              <Detalhes {...detalhes}/> 
              <Itens {...itens} />
            </View>
        </ScrollView>
    )
}

const estilos = StyleSheet.create({

    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})