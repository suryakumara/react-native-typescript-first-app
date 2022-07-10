import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../theme/theme";

const About = () => {
  return (
    <View style={theme.container}>
      <Text style={theme.titleText}>About</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
