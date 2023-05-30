import { View , Text, StyleSheet} from "react-native";
import { Express, Auto } from "../../classes/lab6";

const Lab6 = () => {

    const express = new Express(220,302)
    const auto = new Auto(180)

    return (
        <View style={{alignItems: 'center',backgroundColor: "#85BB65"}}>
            <Text style={styles.text}>Лабораторна робота №6</Text>
            <Text style={styles.text}>Експрес потяг</Text>
            <Text style={styles.text}>Об'єм баку - {express.fuelLevel}</Text>
            <Text style={styles.text}>Тип палива - {express.fuelType}</Text>
            <Text style={styles.text}>Потужність - {express.power}</Text>
            <Text style={styles.text}>Автомобіль</Text>
            <Text style={styles.text}>Потужність - {auto.power}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
        paddingBottom: 15,
      },
})

export default Lab6;