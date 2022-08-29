import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import ListaItems from './ListaItems'

const Pantalla = () => {
  
    const satelites = [
        {
            id: 1,
            nombre: 'Mercurio',
            descripcion: 'Mercurio es el planeta del sistema solar más cercano al Sol y el más pequeño.',
            imagen: require('../imgs/mercurio.jpg'),

        },
        {
            id: 2,
            nombre: 'Venus',
            descripcion: 'Venus es el segundo planeta del sistema solar en orden de proximidad al Sol y el tercero en cuanto a tamaño en orden ascendente después de Mercurio y Marte.',
            imagen: require('../imgs/venus.jpg'),

        },
        {
            id: 3,
            nombre: 'La Tierra',
            descripcion: 'Es un planeta del sistema solar que gira alrededor de su estrella en la tercera órbita más interna.',
            imagen: require('../imgs/tierra.jpg'),

        },
        {
            id: 4,
            nombre: 'La Luna',
            descripcion: 'La Luna es el único satélite natural de la Tierra.',
            imagen: require('../imgs/luna.jpg'),

        },
        {
            id: 5,
            nombre: 'Marte',
            descripcion: 'Marte es el cuarto planeta en orden de distancia al Sol y el segundo más pequeño del sistema solar, después de Mercurio.',
            imagen: require('../imgs/marte.jpg'),

        },
        {
            id: 6,
            nombre: 'Fobos',
            descripcion: 'E s el más grande de los dos satélites de Marte y el más cercano al planeta.',
            imagen: require('../imgs/fobos.jpg'),

        },
        {
            id: 7,
            nombre: 'Deimos',
            descripcion: 'Es el más pequeño y externo de los dos satélites de Marte y uno de los satélites más pequeños que han recibido nombre.',
            imagen: require('../imgs/deimos.jpg'),

        },
        {
            id: 8,
            nombre: 'Júpiter',
            descripcion: 'Júpiter es el planeta más grande del sistema solar y el quinto en orden de lejanía al Sol.',
            imagen: require('../imgs/jupiter.jpg'),

        },
        {
            id: 9,
            nombre: 'Metis',
            descripcion: 'Es el satélite más cercano a la superficie de Júpiter.',
            imagen: require('../imgs/metis.jpg'),

        },
        {
            id: 10,
            nombre: 'Adrastea',
            descripcion: 'Es el segundo satélite de Júpiter en orden de distancia al planeta.',
            imagen: require('../imgs/adrastea.jpg'),

        },
    ]

    
    return (
        <SafeAreaView>
            <FlatList 
                data = { satelites }
                keyExtractor = { (item) => item.id }
                renderItem = {({item,index}) => <ListaItems item = { item }/>}
                ItemSeparatorComponent = { () => <View style={ styles.separador }/>}
                ListHeaderComponent = { () => <Text style = { styles.cabecera} > Espacio</Text> }
            />
        </SafeAreaView>
  )  
  
}

const styles = StyleSheet.create({
    separador:{
        marginVertical: 10, 
        borderColor: '#cdcdcd', 
        borderWidth: 0.5,
    },
    cabecera:{
        fontWeight: '500', 
        fontSize: 25, 
        marginBottom: 10, 
        backgroundColor: '#3269a8',
        padding: 10,
        color: '#FFFF'
    },
    
  })

export default Pantalla