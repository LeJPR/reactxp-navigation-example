import RX = require('reactxp');
import Router = require('reactxp-navigation');
const{ DrawerNavigator, StackNavigator, TabNavigator } = Router;

//import scenes
import Screen1 = require('./screen1');
import Screen2 = require('./screen2');
import Screen3 = require('./screen3');
import Screen4 = require('./screen4');
import Screen5 = require('./screen5');
//create navigation

//create StackNavigator LeftButton

const LeftButton = ({navigation}) =>{ 
    const { navigate,state,goBack} = navigation.navigation; 
   //currently React-Navigation doesnt expose scene index - dirty hack until this occurs to identify if on first scene.
   if(state.key.substring(0,4) === 'Init'){
   return(
  <RX.Button 
       style={{width:100, paddingLeft:15}}
       onPress={() => {
         navigate('DrawerOpen')
        }
       }>
       <RX.Text>Menu</RX.Text>
       </RX.Button> 
)}
else {
   return(
  <RX.Button 
        style={{width:100, paddingLeft:15}}
        onPress={() => {
         goBack()
        }
       }>
        <RX.Text>Back</RX.Text>
       </RX.Button>  
   )
}
};
const Scene1 = StackNavigator({
  S1S1: {screen: Screen1, navigationOptions:{title:"Stack View Scene 1"}},
  S1S2: {screen: Screen2, navigationOptions:{title:"Stack View Scene 2"}},
  S1S3: {screen: Screen3, navigationOptions:{title:"Stack View Scene 3"}},
},{
     navigationOptions: (navigation) => {
        return {
            headerBackTitle:null, 
            headerTitleStyle: {color:"#212121"},
            headerStyle:{backgroundColor:'#2196F3'},
            headerLeft: <LeftButton navigation={navigation}/>
        }
        }
});

const TabScene = TabNavigator({
  Home: {
    screen: Screen4,
  },
  Notifications: {
    screen: Screen5,
  },
}, {
    tabBarOptions: {
    activeTintColor: '#212121',
    activeBackgroundColor:'#2196F3',
    inactiveTintColor: '#757575',
    inactiveBackgroundColor:'#BBDEFB',
  },
});

const Scene2 = StackNavigator({
  S2S1: {screen: TabScene , navigationOptions:{title:"ReactXP TabView"}},
 
},{
     navigationOptions: (navigation) => {
        return {
            headerTitleStyle: {color:"#212121"},
            headerStyle:{backgroundColor:'#2196F3'},
            headerBackTitle:null, 
            headerLeft: <LeftButton navigation={navigation}/>
        }
        }
});

const App = DrawerNavigator({
  Home: {
    screen: Scene1,
  },
  Notifications: {
    screen: Scene2,
  },
},{drawerWidth:300});

export = App;