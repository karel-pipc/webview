import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

type ReloadButtonProps = {
  onPress: () => void;
};

const ReloadButton: React.FC<ReloadButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        <Feather name="refresh-cw" size={24} color="#007C39" />
        <Text style={styles.text}>重整</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: '50%',
    right: 20,
    transform: [{ translateY: -20 }],
    backgroundColor: '#F2F2F2',
    borderRadius: 30,
    paddingVertical: 4,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#007C39',
    fontSize: 16,
    marginLeft: 3,
    fontWeight: '600',
  },
});

export default ReloadButton;