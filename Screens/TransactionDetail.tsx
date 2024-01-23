import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type DetailsProps = NativeStackScreenProps<RootStackParamList, "Details">;

type TransactionProps = {
  amount: number;
  date: string;
  description: string;
  type: string;
};

const TransactionDetail = ({ route }: DetailsProps) => {
  const { amount, date, description, type } = route.params;
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Type: {type}</Text>
      <Text style={styles.text}>Description: {description}</Text>
      <Text style={styles.text}>Amount: RM {amount}</Text>
      <Text style={styles.text}>Date: {date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: "100%",
    backgroundColor: "orange",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    paddingTop: 30,
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
  },
});

export default TransactionDetail;
