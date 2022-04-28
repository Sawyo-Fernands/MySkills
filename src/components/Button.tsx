import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";



interface IButtonProps extends TouchableOpacityProps{
    title:string;
}

export function Button({ title,...rest}:IButtonProps){
    return(
        <TouchableOpacity  style={styles.button} activeOpacity={0.7} {...rest} >
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    
    button:{
        backgroundColor:"#a370f7",
        padding: 20,
        marginTop:20,
        borderRadius:7,
        alignItems:'center',
    },
    buttonText:{
        color: 'white',
        fontSize:17,
        fontWeight:'bold'
    },
   
})