import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ISkillCard{
    TextSkill:string;
    date:string;
    handleDeleteTask:()=>void;
}

export function SkillCard({TextSkill,date,handleDeleteTask}:ISkillCard) {
    return (
        <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7}  onPress={handleDeleteTask}>
            <Text style={styles.skill}>
                {TextSkill}
            </Text>
            <Text style={styles.skill}>
                {date}
            </Text>
        </TouchableOpacity>
    )
}


export const styles=StyleSheet.create({
    
    buttonSkill: {
        backgroundColor: '#1f1e25',
        marginBottom: 8,
        padding: 20,
        borderRadius: 7,
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between'

    },
    skill: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    }
})