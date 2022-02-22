import {View, Text, Image} from 'react-native';

function Detail({ route, navigation }){

  const {image, username, description} = route.params;

  return (
    <View>
      <Text style={{fontSize: 20, marginTop: 20, marginBottom: 15}}>
        {`Author: ${username}`}
      </Text>
      <Text style={{fontSize: 20, marginBottom: 20}}>
        {description ? `Description: ${description}` : 'None description'}
      </Text>
      <Image source={{uri: image}} style={{width: '100%', height: 500}} />
    </View>
  );
}

export default Detail;