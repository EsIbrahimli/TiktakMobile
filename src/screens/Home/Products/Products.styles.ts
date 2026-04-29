
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    padding: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },

  backBtn: {
    backgroundColor: "#eef0f4",
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
    marginBottom: 12,
  },

  backText: {
    fontSize: 14,
    color: "#2b3043",
  },

  image: {
    width: "100%",
    height: 320, // 🔥 screenshot kimi böyük
    borderRadius: 16,
    backgroundColor: "#f2f2f2",
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
    marginTop: 14,
  },

  desc: {
    marginTop: 10,
    color: "#555",
    fontSize: 16,
    lineHeight: 22,
  },

  price: {
    marginTop: 14,
    fontSize: 24,
    fontWeight: "bold",
    color: "#2b3043",
  },

  addBtn: {
    marginTop: 20,
    backgroundColor: "#6BCB4A",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  addText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#f2f3f7",
    padding: 8,
    borderRadius: 12,
    alignSelf: "flex-start",
  },

  qtyBtn: {
    width: 36,
    height: 36,
    backgroundColor: "#e9ecf2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  qtyText: {
    fontSize: 18,
    fontWeight: "600",
  },

  qtyValue: {
    marginHorizontal: 16,
    fontSize: 16,
    fontWeight: "600",
  },
});