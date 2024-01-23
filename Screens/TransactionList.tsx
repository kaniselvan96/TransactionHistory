import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import data from "../data.json";
import Card from "../Components/Card";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type ListProps = NativeStackScreenProps<RootStackParamList, "List">;

const TransactionList = ({ navigation }: ListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.transactions}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("Details", {
                amount: item.amount,
                date: item.date,
                description: item.description,
                type: item.type,
              })
            }
          >
            <Card
              type={item.type}
              description={item.description}
              date={item.date}
              amount={item.amount}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    height: "100%",
    backgroundColor: "white",
  },
});

export default TransactionList;
