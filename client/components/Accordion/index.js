import React, { useState } from "react";
import { View,Button } from "react-native";
import { List } from "react-native-paper";
import { styles } from '../../screens/ProfessorScreens/MateriaScreen/styles';

export function Accordion({ children, title, icon }) {
    const [open, setOpen] = useState(false);

    return (
        <View style={styles.containerAcc}>
            <List.Item
                title={title}
                onPress={() => setOpen(prevOpen => !prevOpen)}
                left={props => <List.Icon {...props} icon={icon} />}
                right={props => <List.Icon {...props} icon={open ? "chevron-up" : "chevron-down"} />}
         />
            {open && children}
           
        </View>
    );

}
