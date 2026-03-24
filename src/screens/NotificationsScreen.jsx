import { View, Text, StyleSheet, Alert } from "react-native";
import ActionButton from "../components/ActionButton";

export default function NotificationsScreen() {
    const enableNotifications = () => {
        Alert.alert("Уведомления", "Уведомления включены");
    };

    const disableNotifications = () => {
        Alert.alert("Уведомления", "Уведомления выключены");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Уведомления</Text>
            <Text style={styles.subtitle}>
                Управление уведомлениями приложения
            </Text>

            <ActionButton
                title="Включить уведомления"
                onPress={enableNotifications}
            />

            <ActionButton
                title="Выключить уведомления"
                onPress={disableNotifications}
            />
        </View>
    );
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
        marginBottom: 10,
        textAlign: "center",
        color: "#24599D",
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 30,
        color: "#555",
    },
});