import React, { useState } from "react";
import {
  AppRegistry,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Movie from "./Movies.js";

class RNHighScores extends React.Component {
  async buttonAction() {
    console.log("fnaksdnfkjasd");
    const res = await fetch("https://reactnative.dev/movies.json").catch(
      (error) => {
        console.log("error", error);
      }
    );
    const jsonData = await res.json();
    console.log("res json", jsonData);
  }

  render() {
    var contents = this.props["scores"].map((score) => (
      <Text key={score.name}>
        {score.name}:{score.value}
        {"\n"}
      </Text>
    ));

    return (
      <View style={styles.container}>
        <Text style={styles.highScoresTitle}>2048 High Scores!</Text>
        <Text style={styles.scores}>{contents}</Text>
        <Text
          style={styles.nextButton}
          title="跳转下一页"
          onPress={this.buttonAction}
        >
          跳转下一页
        </Text>
        <Movie></Movie>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdaaaa",
  },
  highScoresTitle: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
    margin: 10,
  },
  scores: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
  nextButton: {
    fontWeight: "900",
    fontSize: 30,
    backgroundColor: "#444444",
    color: "#fff",
    padding: 10,
    textAlign: "center",
    alignContent: "center",
  },
});

// Module name
AppRegistry.registerComponent("RNHighScores", () => RNHighScores);
