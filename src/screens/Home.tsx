import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.continer}>
      <Text style={styles.smallText}>Home screen</Text>
      <Button
        title="Goto detils"
        // onPress={() =>
        //   navigation.navigate('Details', {productId: '88'})
        // }
        // onPress={()=>navigation.navigate("Details")}
        onPress={()=>navigation.push('Details',{productId:"6"})}
        />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
