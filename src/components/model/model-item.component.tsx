import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Model } from 'src/types/model.types';
import { useTheme } from '@react-navigation/native';
import { Spacer } from '../shared/spacer.component';

interface Props {
  model: Model;
}
export const ModelItem: FC<Props> = ({ model }) => {
  const { font, colors, spacing } = useTheme();

  return (
    <View style={styles.container}>
      <Pressable
        style={{
          ...styles.imgContainer,
          padding: spacing(4),
          backgroundColor: colors.input,
        }}>
        <Image source={model.imageLink} style={styles.img} />
      </Pressable>

      <Spacer size={1} />

      <Text
        style={{
          fontFamily: font.family.bold,
          fontSize: font.size.sm,
          color: colors.text,
        }}>
        {model.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center' },
  imgContainer: {
    borderRadius: 19,
    shadowRadius: 2,
    shadowOpacity: 0.17,
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowColor: 'rgba(0,0,0,0.4)',
    elevation: 6,
    height: 114,
    width: '100%',
  },

  img: { width: '100%', resizeMode: 'contain', height: '100%' },
});
