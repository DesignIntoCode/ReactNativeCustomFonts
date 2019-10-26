import React from "react";
import ReactNative, { View, StyleSheet } from "react-native";

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ReactNative.Text style={{ fontSize: 24 }}>System Font</ReactNative.Text>
                <ReactNative.Text style={{ fontSize: 24, fontFamily: "light" }}>Montserrat Light</ReactNative.Text>
                <ReactNative.Text style={{ fontSize: 24, fontFamily: "regular" }}>Montserrat Regular</ReactNative.Text>
                <ReactNative.Text style={{ fontSize: 24, fontFamily: "bold" }}>Montserrat Bold</ReactNative.Text>

                <View style={{ borderBottomColor: "#c3c3c3", borderBottomWidth: 1, width: "100%" }} />

                <Text weight="light" color="#7F23D9">
                    Text Component Light
                </Text>
                <Text weight="regular" color="#4F68D9" size={18}>
                    Text Component Regular
                </Text>
                <Text weight="bold" color="#FFF" size={14} style={{ backgroundColor: "#23A7D9", padding: 8 }}>
                    Text Component Bold
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

class Text extends React.Component {
    getProps() {
        const { size, weight, color } = this.props;

        return {
            fontSize: size,
            fontFamily: weight,
            color
        };
    }

    render() {
        return (
            <ReactNative.Text style={{ ...this.getProps(), ...this.props.style }}>
                {this.props.children}
            </ReactNative.Text>
        );
    }
}

Text.defaultProps = {
    size: 24,
    color: "#000",
    weight: "regular"
};
