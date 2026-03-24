import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ActionButton({title, onPress}){
    return(
        <TouchableOpacity style={styles.button} onPress = {onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#24599D",
        paddingVertical: 14,
        paddingHorizontal: 18,
        borderRadius: 12,
        marginBottom: 12, 
    },
    text:{
<<<<<<< HEAD
        color: "#ffffff",
        textAlign: center,
        fontSize: 16,
        fontWeight: "600",
    }
})
=======
        color: "#fffff",
        textAlign: center,
        fontSize: 16,
        fontWeight: 600,
    }
})
>>>>>>> 42215b76c81b5a4d10271db921d00c1814d97ee9
