import React, { memo } from "react";
import { TouchableOpacity,StyleSheet,Text } from "react-native";

interface buttonType{
    onPress: () => void,
    title: string
}


const CustomButton: React.FC <buttonType> = (props) => {
    const {onPress,title} = props;
    return(
    <TouchableOpacity onPress={onPress} style={styles.btnContainer}>
        <Text>{title}</Text>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnContainer:{
        backgroundColor: 'red',
        width: 150,
        height: 70,
    }
})

export default memo(CustomButton);