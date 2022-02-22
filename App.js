import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  View,
  Text,
  Linking,
  Image,
} from 'react-native';

const Login = () => {
  const [text, setText] = React.useState(null);
  const [password, setPassword] = React.useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image
            source={{uri: 'https://driveyouaway.com/assets/img/admin.png'}}
            style={style6.Image}
          />
        </View>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Enter your gmail :"
          keyboardType="default"
        />
        <TextInput
          style={styles2.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password :"
          keyboardType="numeric"
        />
        <View style={styles3.buttonStyle}>
          <Button
            title="Login"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <Text
          style={styles4.Text}
          onPress={() => Linking.openURL('http://google.com')}>
          Forget your password?
        </Text>
        <Text
          style={styles5.Text2}
          onPress={() => Linking.openURL('http://google.com')}>
          SignUp
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 7,
    margin: 12,
    height: 40,
    marginTop: '15%',
    borderWidth: 1,
    padding: 10,
  },
});

const styles2 = StyleSheet.create({
  input: {
    borderRadius: 7,
    margin: 12,
    height: 40,
    marginTop: '5%',
    borderWidth: 1,
    padding: 10,
  },
});

const styles3 = StyleSheet.create({
  buttonStyle: {
    marginTop: '4%',
    marginHorizontal: 100,
  },
});

const styles4 = StyleSheet.create({
  Text: {
    color: 'indigo',
    marginTop: '8%',
    marginLeft: '32%',
  },
});
const styles5 = StyleSheet.create({
  Text2: {
    color: 'black',
    marginTop: '5.5%',
    marginLeft: '43%',
  },
});
const style6 = StyleSheet.create({
  Image: {
    borderRadius: 10,
    height: 100,
    width: 100,
    marginTop: '24%',
    marginLeft: '37%',
  },
});
export default Login;
