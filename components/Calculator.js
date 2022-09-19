import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";

export default function Calculator ({ navigation }) {
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);
  const [result, setResult] = React.useState(0);
  const [data, setData] = React.useState([]);

  const plusButton = () => {
    const add = parseFloat(number1) + parseFloat(number2);
    let history = `${number1} + ${number2} = ${add}`
    setResult(add);
    setData([history, ...data])
    setNumber1('');
    setNumber2('');
  };
  const minusButton = () => {
    const sub = parseFloat(number1) - parseFloat(number2);
    let history2 = `${number1} + ${number2} = ${sub}`
    setResult(sub);
    setData([history2, ...data])
    setNumber1('');
    setNumber2('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Result = {result} </Text>
        <TextInput
          keyboardType="numeric"
          value={number1}
          onChangeText={(txt) => setNumber1(txt)}
          style={styles.input}
        />
        <TextInput
          keyboardType="numeric"
          value={number2}
          onChangeText={(txt) => setNumber2(txt)}
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={plusButton} />
        <Button title="-" onPress={minusButton} />
        <Button title = 'History' onPress={() => navigation.navigate('History', {data})} />
        
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    
  },

  buttonContainer: {
    
    marginBottom:350,
    marginTop:20,
    width: 60,
    backgroundColor: "blue",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  input: {
    fontSize: 20,
    width: 170,
    borderColor: "gray",
    borderWidth: 1,

  },
 
});