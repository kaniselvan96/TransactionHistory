import { View, Text, FlatList, StyleSheet, StatusBar } from "react-native";
import React from "react";
import data from "../data.json";

type TransactionListProps = {
  amount: number;
  date: string;
  description: string;
  type: string;
};

const Item = (props: TransactionListProps) => (
  <View>
    <View style={styles.item}>
      <Text style={styles.type}>{props.type}</Text>
      <Text style={styles.desc}>{props.description}</Text>
      <View style={styles.container2}>
        <Text style={styles.amount}>RM {props.amount}</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </View>
  </View>
);

const TransactionList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.transactions}
        renderItem={({ item }) => (
          <Item
            type={item.type}
            description={item.description}
            date={item.date}
            amount={item.amount}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 30,
    padding: 40,
    height: "100%",
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "orange",
    padding: 30,
    width: "100%",
    marginVertical: 8,
    alignSelf: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  type: {
    fontSize: 24,
    fontWeight: "800",
  },
  desc: {
    fontSize: 24,
    fontFamily: "Tahoma",
    fontWeight: "normal",
  },
  date: {
    fontSize: 12,
  },
  amount: {
    fontSize: 32,
    fontWeight: "bold",
    color: "blue",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 5,
  },
});

export default TransactionList;
