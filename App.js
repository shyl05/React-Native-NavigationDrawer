import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as eva from '@eva-design/eva';
import 'react-native-gesture-handler';
import HomeScreen from './Components/Home';
import AboutScreen from './Components/About';
import UsersScreen from './Components/Users';
import ProfileScreen from './Components/Profile';
import {ApplicationProvider, Drawer, DrawerItem, IndexPath, BottomNavigation, BottomNavigationTab, IconRegistry, Icon , Text} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

const DrawerStack = createDrawerNavigator();
const BottomStack = createBottomTabNavigator();

const HomeIcon = props => <Icon {...props} name="home" />;
const AboutIcon = props => <Icon {...props} name="book-open" />;

function HeaderTitle() {
  return <Text category="h3">App</Text>;
}

const DrawerContent = ({navigation, state}) => (
  <Drawer
    selectedIndex={new IndexPath(state.index)}
    onSelect={index => navigation.navigate(state.routeNames[index.row])}>
    <DrawerItem title="Home" accessoryLeft={HomeIcon} />
    <DrawerItem title="About" accessoryLeft={AboutIcon} />
  </Drawer>
);

const DrawerNavigator = () => (
  <DrawerStack.Navigator drawerContent={props => <DrawerContent {...props} />}>
    <DrawerStack.Screen name="Home" component={HomeScreen} />
    <DrawerStack.Screen name="About" component={AboutScreen} />
  </DrawerStack.Navigator>
);

const BottomTabBar = ({navigation, state}) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="HomePage" />
    <BottomNavigationTab title="Users" />
    <BottomNavigationTab title="Profile" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <BottomStack.Navigator
    initialRouteName="Drawer"
    tabBar={props => <BottomTabBar {...props} />}
    screenOptions={{headerTitle: props => <HeaderTitle {...props} />}}>
    <BottomStack.Screen name="HomePage" component={DrawerNavigator} />
    <BottomStack.Screen name="Users" component={UsersScreen} />
    <BottomStack.Screen name="Profile" component={ProfileScreen} />
  </BottomStack.Navigator>
);

function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainer>
        <ApplicationProvider {...eva} theme={eva.light}>
          <TabNavigator />
        </ApplicationProvider>
      </NavigationContainer>
    </>
  );
}

export default App;
