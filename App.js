import { StatusBar } from "expo-status-bar";
import React, { useEffect, useMemo, useReducer, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return { count: state.count + 1 };
    }
    case "decrement": {
      return { count: state.count - 1 };
    }
    default: {
      return state;
    }
  }
};

//MEMO
const usersAge = [{age:10},{age:8}]

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);


  // MEMO ES UNA FONCION PARA OPTIMIZAR EL CODIGO YA QUE ESTE EJECUTARA UNA FUNCION SOLO UNA VEZ DADO UN GRUPO DE DATOS
  //PAR1 FUNCION A EJECUTAR
  //PAR2 ARRAY DE DATOS QUE SE UTILIZARAN
  const totalAge = useMemo(()=>{
   let ageTotal = 0
   console.log('calculando...')
   usersAge.forEach(x => {
    ageTotal = ageTotal + x.age
   })
   return ageTotal
  },[usersAge])

  console.log(totalAge);

  //** ---------------------------- USE EFECT, REDUCER, STATE----------------------*/
  // const [users, setUsers] = useState(0);
  // const [loading, setLoading] = useState(true);
  //Cada vez que el componente se actualice llamara a la función que tiene dentro
  //el segundo argumento [], indica que si su contenido cambia este ejecutará la función
  //es decir que si una variable dentro de las llaves cambia se ejecuta la función
  // const getUser = async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //   const json = await response.json();
  //   setUsers(json);
  //   setLoading(false);
  // };
  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textFunction} onPress={() => dispatch({ type: "increment" })}>+</Text>
      <Text style={styles.text}>{state.count}</Text>
      <Text style={styles.textFunction} onPress={() => dispatch({ type: "decrement" })}>-</Text>
      {/* <Text style={styles.text}>
        {" "}
        {loading ? "Cargando..." : users[0].name}{" "}
      </Text> */}
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
  },
  text: {
    fontSize: 36,
  },
  textFunction:{
    fontSize:40,
    fontWeight:'bold',
    color:'blue',
    backgroundColor:"#ccc",
    width:100,
  }
});
