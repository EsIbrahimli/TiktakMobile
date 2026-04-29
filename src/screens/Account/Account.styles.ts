// import { StyleSheet } from "react-native";

// export default StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//   },

//   title: {
//     fontSize: 22,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },

//   item: {
//     padding: 15,
//     backgroundColor: "#f2f2f2",
//     borderRadius: 10,
//     marginBottom: 10,
//   },

//   text: {
//     fontSize: 16,
//   },
// });
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  header: {
    alignItems: "center",
    marginBottom: 30,
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#E5E5EA",
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1C1C1E",
  },

  item: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
  },

  text: {
    fontSize: 16,
    color: "#1C1C1E",
  },

  logout: {
    marginTop: 30,
    paddingVertical: 15,
    alignItems: "center",
    backgroundColor: "#FF3B30",
    borderRadius: 10,
  },

  logoutText: {
    color: "#fff",
    fontWeight: "600",
  },
});