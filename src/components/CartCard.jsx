import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { fonts } from "../utils/fonts";

const CartCard = ({ item, handleDelete, updateItemQuantity }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.textCircleContainer}>
          <View
            style={[styles.circle, { backgroundColor: item?.color || "red" }]}
          ></View>
          <View style={styles.sizeContainer}>
            <Text style={styles.sizeText}>{item.size}</Text>
          </View>
        </View>
        <View style={styles.quantitySectionContainer}>
            <TouchableOpacity onPress={() => updateItemQuantity(item.id, "remove")}>
                <Image
                    source={require("../assets/minus.png")}
                    style={styles.deleteIcon}
                />
            </TouchableOpacity>
            <View style={styles.quantityContainer}>
                <Text style={styles.quantityText}>{item.quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => updateItemQuantity(item.id, "add")}>
                <Image
                    source={require("../assets/add.png")}
                    style={styles.deleteIcon}
                />
            </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Image
          source={require("../assets/deleteIcon.png")}
          style={styles.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginVertical: 15,
  },
  image: {
    height: 145,
    width: "35%",
    resizeMode: "contain",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.medium,
    color: "#444444",
  },
  price: {
    fontSize: 18,
    fontFamily: fonts.medium,
    color: "#797979",
    marginVertical: 7,
    fontWeight: "700",
  },
  content: {
    flex: 1,
    padding: 5,
  },
  circle: {
    height: 32,
    width: 32,
    borderRadius: 16,
  },
  sizeContainer: {
    backgroundColor: "#FFFFFF",
    height: 32,
    width: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  sizeText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: fonts.medium,
  },
  textCircleContainer: {
    flexDirection: "row",
  },
  quantitySectionContainer: {
      flexDirection: "row",
      marginTop: 10
  },
  quantityContainer: {
      backgroundColor: "#FFFFFF",
      height: 32,
      width: 32,
      borderRadius: 2,
      justifyContent: "center",
      alignItems: "center",
      marginHorizontal: 20,
      marginVertical: 10,
  },
  quantityText: {
      fontSize: 18,
      fontWeight: "400",
      fontFamily: fonts.medium,
  },
  deleteIcon: {
    height: 30,
    width: 30,
    marginTop: 10,
  },

});
