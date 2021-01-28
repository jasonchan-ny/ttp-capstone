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

export default function RegisterScreen({ navigation }) {
  //const username = useSelector((state) => state.user.username);
  //const password = useSelector((state) => state.user.password);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const [registerUser, { data }] = useMutation(REGISTER_USER)


  const handleClick = () => {
    console.log('Credentials', email, username, password, confirmPassword)
    let something = await loginUser({
      update(_, { data: { login: userData } }) {
        //context.login(userData);
        console.log("User data", userData);
        dispatch(login());
      },
      onError(err) {
        console.log("in onError in registerUser", err);
        //put error notifications here
        //setErrors(err.graphQLErrors[0].extensions.exception.errors);
      },
      variables: { email, username, password, confirmPassword },
    });
    console.log(data);
    console.log(something);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />

      <Text style={styles.text}>Sign Up Today! {"\n"}</Text>

      <View>
        <Icon
          name={"ios-person-outline"}
          size={28}
          color={"rgba(255, 255, 255, .7)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={"Enter Email"}
          placeholderTextColor={"rgba(255, 255, 255, .7)"}
          underlineColorAndroid="transparent"
          onChangeText={(e) => setEmail(e)}
          value={email}
        />
      </View>
      <Text>{"\n"}</Text>
      <View>
        <Icon
          name={"ios-person-outline"}
          size={28}
          color={"rgba(255, 255, 255, .7)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder={"Enter Username"}
          placeholderTextColor={"rgba(255, 255, 255, .7)"}
          underlineColorAndroid="transparent"
          onChangeText={(u) => setUsername(u)}
          value={username}
        />
      </View>
      <Text>{"\n"}</Text>
      <View>
        <Icon2
          name={"lock1"}
          size={28}
          color={"rgba(255, 255, 255, .7)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder={"Enter Password"}
          placeholderTextColor={"rgba(255, 255, 255, .7)"}
          underlineColorAndroid="transparent"
          onChangeText={(p) => setPassword(p)}
          value={password}
        />
      </View>
      <Text>{"\n"}</Text>
      <View>
        <Icon2
          name={"lock1"}
          size={28}
          color={"rgba(255, 255, 255, .7)"}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder={"Confirm Password"}
          placeholderTextColor={"rgba(255, 255, 255, .7)"}
          underlineColorAndroid="transparent"
          onChangeText={(cp) => setConfirmPassword(cp)}
          value={confirmPassword}
        />
      </View>

      <Text style={styles.text}>
        {"\n"} By signing up, you agree to our Terms {"&"} Conditions {"\n"}
      </Text>

      <FlatButton text="register" onPress={handleClick} />

      <Text style={styles.text}>
        {"\n"}Already a member?{"\n"}
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.register}>Sign In</Text>
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

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;