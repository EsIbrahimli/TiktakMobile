import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Checkout/Confirm.styles";

interface ConfirmModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void | Promise<void>;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>Sifarişi təsdiq et</Text>

          <Text style={styles.desc}>
            Sifarişi göndərmək istədiyinizə əminsiniz?
          </Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text>İmtina</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmBtn} onPress={onConfirm}>
              <Text style={{ color: "#fff" }}>Təsdiq et</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ConfirmModal;