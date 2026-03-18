import { View, Text, StyleSheet } from "react-native"
import ActionButton from "../components/ActionButton"

export default function HomeScreen([navigation]){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Device Features App</Text>

            <ActionButton 
             title="Открыть галерею"
             onPress = {() => navigation.navigate("Gallery")}/>

            <ActionButton 
             title="Открыть камеру"
             onPress = {() => navigation.navigate("Camera")}/>
 
            <ActionButton 
             title="Получить геолокацию"
             onPress = {() => navigation.navigate("Location")}/>

            <ActionButton 
             title="Уведомления"
             onPress = {() => navigation.navigate("Notifications")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: "#f8fafc",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        marginBottom: 30,
        textAlign: "center",
    }
})