/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




export default class App extends React.Component {
  state = {
    message: 'I am state',
    countries: [
    { name: "Australia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/au.png" },
    { name: "Belgium", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/be.png" },
    { name: "Bulgaria", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/bg.png" },
    { name: "Canada", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ca.png" },
    { name: "Switzerland", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ch.png" },
    { name: "China", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cn.png" },
    { name: "Czech Republic", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/cz.png" },
    { name: "Germany", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/de.png" },
    { name: "Spain", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/es.png" },
    { name: "Ethiopia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/et.png" },
    { name: "Croatia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hr.png" },
    { name: "Hungary", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/hu.png" },
    { name: "Italy", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/it.png" },
    { name: "Jamaica", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/jm.png" },
    { name: "Romania", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ro.png" },
    { name: "Russia", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/ru.png" },
    { name: "United States", imageSrc: "https://play.nativescript.org/dist/assets/img/flags/us.png" },
  ],
  }

  handleButton = () => {
    this.setState({
      message: 'button was clicked'
      });
  }

  handleListTap = item => {
    console.log(item.name)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.message}</Text>
        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 50, height: 50}} />
       <TextInput
          style={{height: 40, width: 200, borderColor: 'lightgray', borderWidth: 1}}
          onChangeText={(text) => this.setState({message: text})}
          value={this.state.message}
        />
        <Button
          onPress={this.handleButton}
          title="My Button"
          color="#841584"
        />
        <FlatList
        ItemSeparatorComponent={() =>
          <View
            style={{ height: 1, width: '100%', backgroundColor: 'lightgray'}}
            />
          }
          data={this.state.countries}
          keyExtractor={item => item.name}
          renderItem={({item}) =>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 10}}
          onPress={() => this.handleListTap(item)}
          >
          <Image source={{uri: item.imageSrc}}
         style={{width: 50, height: 50, borderRadius: 25}} />
            <Text style={{ padding: 10 }}>{item.name}</Text>
          </TouchableOpacity>
        }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
