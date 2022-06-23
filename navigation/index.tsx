/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';

import Home from '../screens/Home';
import FullInfo from '../screens/FullInfo';
import FormContact from '../screens/FormContact';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import axios from "../customAxios"

const axiosConf: any = {
  Create: () => ({
    method: 'POST',
  }),
  Edit: (id: any) => ({ 
    method: 'PUT', 
    url: '/' + id 
  }),
}

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      {/* <Stack.Screen name="FullInfo" component={FullInfo} options={{ headerShown: false }} /> */}
      <Stack.Screen name="FormContact" component={FormContact} options={({ navigation, route }: any) => {
        const { formType, axiosObj, personName, id, ...item } = route.params;

        return ({
        title: `${formType} Contact`,
        headerLeft: () => (
          <IconButton icon="close" size={24} onPress={() => navigation.navigate('Home')} />
        ),
        ...item && { headerRight: () => (
          <IconButton icon="check" color={colors.primary} size={24} onPress={() => axios({ ...axiosConf[formType](id), data: item })
          .then(response => {
            // console.log(response.data);
            // console.log(response.status);
            // console.log(response.statusText);
            // console.log(response.headers);
            // console.log(response.config);
            // navigation.navigate('Home', { refreshData: true })
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
            return response
          })} />
        ) }
      })
      }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}