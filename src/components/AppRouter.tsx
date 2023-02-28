import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {useTheme} from '@rneui/themed'
import React from 'react'
import {useTranslation} from 'react-i18next'
import {RoutTitleKeys, Screens} from '../languages/types'
import ChooseCity from '../page/ChooseCity'
import ForecastFiveDays from '../page/ForecastFiveDays'
import Main from '../page/Main'
import {ROUTES} from '../types/routes'
import HeaderRight from './MainScreen/HeaderRight'
import Title from './MainScreen/Title'

export type RootStackParamList = {
  Main: undefined
  ForecastFiveDays: undefined
  ChooseCity: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const AppRouter = () => {
  const {theme} = useTheme()

  const {t: t1} = useTranslation<Screens>('routeTitle')
  const t = t1<RoutTitleKeys>

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: theme.colors.primary},
          headerTitleAlign: 'left',
        }}>
        <Stack.Screen
          name={ROUTES.MAIN}
          component={Main}
          options={{
            title: 'Weather-D',
            headerRight: () => <HeaderRight />,
            headerLeft: () => <Title />,
          }}
        />
        <Stack.Screen
          name={ROUTES.CHOOSE_CITY}
          component={ChooseCity}
          options={{title: t('searchScreen')}}
        />
        <Stack.Screen
          name={ROUTES.FORECAST_FIVE_DAYS}
          component={ForecastFiveDays}
          options={{title: t('forecastScreen')}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
