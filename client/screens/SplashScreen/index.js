import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { styles } from "./style"

export function SplashScreen() {
   const [status, setStatus] = React.useState({});
    return (
      <View style={styles.container}>
        <Image source={{ uri: "https://i.imgur.com/BFOvL6A.gifv" }} />
      </View>
    );
  }

  