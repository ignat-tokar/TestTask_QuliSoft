import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import { useState, useEffect, useCallback } from 'react';
import { useSelector} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import useData from '../hooks/data.hook';


export default function Main({ navigation }) {

  const {images, users, descriptions, getData} = useData();
  const [update, setUpdate] = useState(true);
  const loader = useSelector(state=>state.loader);

  useEffect(()=>{
    if(update){
      getData();
      setUpdate(false);
    }
  },[getData]);

  function onClickHandler(image, username, description){
    navigation.navigate('Detail', {image, username, description});
  }

  if(loader){
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#10a115" />
      </View>
    )
  }

  return (
    <View style={styles.container}>      
      <FlatList
        data = {images && users && descriptions && images.map((image, index)=>{
          return {
            key: index,
            img: image,
            username: users[index],
            description: descriptions[index]
          }
        })}
        renderItem={({item}) => {
            return (
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <View style={{flex: 0.5}}>
                  <TouchableOpacity 
                    onPress={()=>onClickHandler(item.img, item.username, item.description)}
                  >
                    <Image
                      style={{flex: 0.5}}
                      source={{uri: item.img}}
                      style={{width: 150, height: 150}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{flex: 0.5}}>
                  <Text style={{fontSize: 20}}>{`Author: ${item.username}`}</Text>
                  <Text style={{fontSize: 20, marginTop: 15}}>
                    {item.description ? `Description: ${item.description}` : 'None description'}
                  </Text> 
                </View>
              </View>
            )
          }
        }
      />
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}
        translucent={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
