import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import gopay from './screens/gopay';
import cab from './screens/cab';
import home from './screens/home';
import travel from './screens/travel';
import scrn from './screens/scrn';

const Stack = createStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={home} />
            <Stack.Screen name="gopay" component={gopay} />
            <Stack.Screen name="cab" component={cab} />
            <Stack.Screen name="travel" component={travel} />
            <Stack.Screen name="scrn" component={scrn} />
             
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
