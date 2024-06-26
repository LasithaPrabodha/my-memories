import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

type DescribeMemoryProps = {
  entryUpdate: (value: string) => void;
  entryValue: string;
};

const DescribeMemory: React.FC<DescribeMemoryProps> = ({
  entryUpdate,
  entryValue,
}) => {
  return (
    <View>
      <TextInput
        style={styles.memoryinput}
        onChangeText={entryUpdate}
        value={entryValue}
        placeholder="Write a short diary entry (<240 chars)"
        placeholderTextColor="#b3b3b3"
        multiline={true}
        maxLength={240}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  memoryinput: {
    borderColor: '#C8D2D7',
    color: '#000',
    borderWidth: 1,
    height: 120,
    borderRadius: 7.5,
    marginTop: 15,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
    fontSize: 16,
    justifyContent: 'flex-start',
  },
});

export default DescribeMemory;
