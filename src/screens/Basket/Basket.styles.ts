import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  clearBtn: {
    color: "#a1a1a1",
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },

  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  name: {
    fontSize: 14,
    fontWeight: "600",
  },

  price: {
    marginTop: 4,
  },

  quantityBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#75cb4e",
    borderRadius: 10,
    padding: 6,
  },

  qtyBtn: {
    color: "#fff",
    fontSize: 18,
    paddingHorizontal: 10,
  },

  qtyText: {
    color: "#fff",
    fontWeight: "500",
  },

  totalBox: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    marginTop: 10,
  },

  totalText: {
    fontSize: 14,
    marginBottom: 5,
    color: "#555",
  },

  finalTotal: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },

  checkoutBtn: {
    backgroundColor: "#75cb4e",
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 10,
    color: "#ccc",
  },
});