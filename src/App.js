import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component  {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC9vg_T2p4ahPzuM66NtC_Lct-8gYpYVjI',
      authDomain: 'rn-manager-648e9.firebaseapp.com',
      databaseURL: 'https://rn-manager-648e9.firebaseio.com',
      projectId: 'rn-manager-648e9',
      storageBucket: 'rn-manager-648e9.appspot.com',
      messagingSenderId: '132074295125'
    };

    firebase.initializeApp(config);
  }

  render() {
    return(
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
