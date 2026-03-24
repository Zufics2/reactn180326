import { useState } from "react";
import {View, Text, StyleSheet, ActivityIndicator } from "react-native"
import * as Location from "expo-location"
import ActionButton from "../components/ActionButton"

export default function LocationScreen(){
    const [coords, setCoords] = useState(null)

    const getLocation = async () =>{
        const {status} = await Location.requestForegroundPermissionsAsync()

        if(status !== "granted"){
            alert("Нужен доступ к геолокации")
            return
        }
        const location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
        })
        setCoords(location.coords)
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Геолокация</Text>
            <ActionButton title="Получить координаты" onPress={getLocation} />

            {coords && (
                <View style={styles.card}>
                    <Text style={styles.text}>Latitude: {coords.latitude}</Text>
                    <Text style={styles.text}>Longtitude: {coords.longitude}</Text>
                    <Text style={styles.text}>Accuracy: {coords.accuracy}</Text>
                </View>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "fffff",
    },
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 20,
    },
    card: {
        marginTop: 20,
        padding: 16,
        borderRadius: 16,
        backgroundColor: "black",
    },
    text: {
        fontSize: 16,
        marginBottom: 8,
        color: "white"
    }
})
