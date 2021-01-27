import React, { useState } from "react";
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  DynamicColorIOS,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, setUsername, setPassword } from "../redux/actions";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/AntDesign";
import FlatButton from "../components/button";

const { width: WIDTH } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  const username = useSelector((state) => state.user.username);
  const password = useSelector((state) => state.user.password);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(login());
  };

  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <Text style={styles.text}>Enter Your Credentials{"\n"}</Text>

      <View>
        <Icon
          name={"ios-person-outline"}
          size={28}
          color={"rgba(255, 255, 255, .7)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={"Username"}
          placeholderTextColor={"rgba(255, 255, 255, .7)"}
          underlineColorAndroid="transparent"
          onChangeText={(user) => dispatch(setUsername(user))}
          value={username}
        />
      </View>
      <Text>{"\n"}</Text>
      <View>
        <Icon2
          name={"lock1"}
          size={28}
          color={"rgba(255, 255, 255, .9)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder={"Password"}
          placeholderTextColor={"rgba(255, 255, 255, .9)"}
          underlineColorAndroid="transparent"
          onChangeText={(pass) => dispatch(setPassword(pass))}
          value={password}
        />
      </View>
      <Text>{"\n"}</Text>

      {/* TODO Validate login and api call */}
      <FlatButton text="login" onPress={handleClick} />

      <Text style={styles.text}>
        {"\n"}Not a member yet?{"\n"}
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.register}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0, 0, 0, .35)",
    color: "rgba(255, 255, 255, .7)",
    marginHorizontal: 25,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  register: {
    color: "tomato",
    fontSize: 17,
    fontWeight: "bold",
  },
  logo: {
    width: 150,
    height: 100,
  }
});
