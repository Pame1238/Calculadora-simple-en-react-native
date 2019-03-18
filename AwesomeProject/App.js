import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default class App extends React.Component {
  render() {
    let pic  = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text>Hello world!</Text>
        <Image source={pic} style={{width: 193, height: 110}}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
