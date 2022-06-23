/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Home: 'home',
      FullInfo: {
        path: 'contact/:id',
        parse: {
          id: Number,
        },
      },
      FormContact: {
        path: 'formcontact/:id',
        // parse: {
        //   id: Number,
        // },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;