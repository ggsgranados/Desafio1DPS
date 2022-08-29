import { SafeAreaView, View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'

const ListaItems = ({item}) => {
  
  const { id, nombre, descripcion, imagen } = item

  return (
    <SafeAreaView style = { styles.container }>
      <Image style = { styles.imagenes} source = {imagen}></Image>
      <SafeAreaView style = { styles.contenido}>
      <Text style = { styles.titulo}>{nombre}</Text>
      <Text>{descripcion}</Text>
      </SafeAreaView>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  imagenes:{
    width: 75, 
    height: 75, 
    borderRadius:50,
  },
  contenido:{
    marginEnd: 60,
    marginLeft: 20,
  },
  titulo:{
    fontFamily: 'Arial',
    fontWeight: 'bold',
    color: '#000000'
  }
  
})

export default ListaItems