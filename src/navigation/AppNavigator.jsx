<<<<<<< HEAD
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import CameraScreen from "../screens/CameraScreen";
import LocationScreen from "../screens/LocationScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Gallery" component={GalleryScreen} />
                <Stack.Screen name="Camera" component={CameraScreen} />
                <Stack.Screen name="Location" component={LocationScreen} />
                <Stack.Screen name="Notifications" component={NotificationsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
=======
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/HomeScreen"
import GalleryScreen from "../screens/GalleryScreen"
import CameraScreen from "../screens/CameraScreen"
import LocationScreen from "../screens/LocationScreen"
// import NotificationsScreen from "../screens/NotificationsScreen"

export default function AppNavigator(){
    <NavigationContainer>
        <StackActions.Navigator>
            <StackActions.Screen name="Home" component={HomeScreen}/>
            <StackActions.Screen name="Gallery" component={GalleryScreen}/>
            <StackActions.Screen name="Camera" component={CameraScreen}/>
            <StackActions.Screen name="Location" component={LocationScreen}/>
            {/* <StackActions.Screen name="Notifications" component={NotificationsScreen}/> */}
        </StackActions.Navigator>
    </NavigationContainer>
>>>>>>> 42215b76c81b5a4d10271db921d00c1814d97ee9
}