import {View, Pressable } from 'react-native';
import { User } from 'phosphor-react-native';
import {Option} from '../../components/option';
import {useState} from 'react'

export function Home () {
  const [option, setOption] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.back}>
          <User size={30}/>
        <Pressable/>
        <View style={styles.options}>
          <Option 
            title="Home" 
            icon="House" 
            onPress={() => setOption('home')
            isSelected={option === 'home'}
          />
          <Option 
            title="Informações" 
            icon="CoffeeBean" 
            onPress={() => setOption('info')
            isSelected={option === 'info'}
          />
          <Option 
            title="Minha Safra" 
            icon="Plant" 
            onPress={() => setOption('safra')
            isSelected={option === 'safra'}
          />
        <View/>
      <View/>  
    <View/>
    
  )
}