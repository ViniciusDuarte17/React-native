import React from "react";
import { StyleSheet } from "react-native";
import Texto from "../../components/Texto";


const Detalhes = () => {
  return (
    <>
      <Texto style={estilos.nome}>Cesta de verduras</Texto>
      <Texto style={estilos.descricao}>
        Uma cesta com produtos selecionados cuidadosamente da fazenda direto
        para sua cozinha
      </Texto>
      <Texto style={estilos.preco}>R$ 40,00</Texto>
    </>
  );
};

const estilos = StyleSheet.create({
  
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

export default Detalhes;
