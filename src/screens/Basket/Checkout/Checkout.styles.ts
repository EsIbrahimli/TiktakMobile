import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  wrapper: {
    flexDirection: "column",
    gap: 20,
  },

  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },

  textarea: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    height: 80,
    textAlignVertical: "top",
  },

  paymentBox: {
    marginTop: 10,
  },

  option: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },

  active: {
    borderWidth: 2,
    borderColor: "#75cb4e",
  },

  button: {
    backgroundColor: "#75cb4e",
    padding: 14,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
  color: "#fff",
  textAlign: "center",
},

  summary: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginTop: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  total: {
    fontWeight: "bold",
    marginTop: 10,
  },
});