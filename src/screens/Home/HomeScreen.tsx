import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, useColorScheme } from "react-native";
import Layout from "../../components/Layout";


const HomeScreen = () => {
    const isDarkMode = useColorScheme() === "dark";

    return (
        <SafeAreaProvider>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
            <Layout>
                <View style={styles.container}>
                    <Text style={styles.content}>Welcome to Tiktak</Text>
                </View>
            </Layout>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    content: {
        marginTop: 20,
        fontSize: 18,
        textAlign: "center",
    },
});

export default HomeScreen;