import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native-reanimated/lib/typescript/Animated";
import { CameraView, useCameraPermissions } from "expo-image-picker";
import ActionButton from "../components/ActionButton";

export default function CameraScreen(){
    const [permission, requestPermission] = useCameraPermissions()
    const cameraRef = useRef(null)
    const [photoUri, setPhotoUri] = useState(null)

    useEffect(() => {
        if(!permission){
            return
        }
    }, [permission])

    const takePhoto = async () => {
        if(!cameraRef.current) return

        const photo = await cameraRef.current.takePictureAsync({
            quality: 0.7,
        })
        setPhotoUri(photo.uri)
    }
    if(!permission.granted){
        return(
            <View style={styles.center}>
                <Text style={styles.title}>Нет доступа к камере</Text>
                <ActionButton title={"Разрешить доступ"} onPress={requestPermission} />
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Камера
            </Text>
            <CameraView ref={cameraRef} style={styles.camera} facing="back" />
            <ActionButton title="Сделать фото" onPress={takePhoto} />
            {photoUri && <Image source = {{uri: photoUri}} style={styles.image} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "fffff",
    },
    center: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 16,
    },
    camera: {
        width: "100%",
        height: 320,
        borderRadius: 16,
        overflow: "hidden",
        marginBottom: 16,
    },
    image: {
        width: "100%",
        height: 250,
        borderRadius: 16,
        marginTop: 16,
    }
})