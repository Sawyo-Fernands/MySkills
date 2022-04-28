import { useState } from "react";
import {
    StyleSheet, Text,
    View, TextInput,
    Platform, FlatList,
    Keyboard
} from "react-native";
import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";
import moment from 'moment';


interface ISkillData{
    id:string;
    name:string;
    date:string;
  
}

export default function Home() {

    const [skill, setSkill] = useState('')
    const [list, setList] = useState<ISkillData[]>([])


    function addSkill() {

        const dataH =moment(new Date()).format('DD/MM/YYYY')
    
        const data={
            id:String(new Date().getTime()),
            name:skill,
            date:dataH
        }
            if(!data.name){
                alert("Preencha a task!")
                return
            }
            setList([...list,data ])
            Keyboard.dismiss()


    }

    function handleDeleteTask(id:string){
        setList(list.filter(item=> item.id != id))
    }

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome
            </Text>

            <TextInput style={styles.input} placeholder="Digite sua tarefa"
                placeholderTextColor={'#555'} onChangeText={setSkill} />

            <Button onPress={addSkill} title="Adicionar"/>

            <Text style={[styles.title, { marginTop: 50, marginBottom: 30 }]}>
                My Skills:
            </Text>

            <FlatList data={list}  keyExtractor={item=>item.id} renderItem={({item})=>(
                <SkillCard TextSkill={item.name} date={item.date}  handleDeleteTask={()=>handleDeleteTask(item.id)}/>
            )}/>

            
                   

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: 'white',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 12,
        marginTop: 30,
        borderRadius: 7
    },

})