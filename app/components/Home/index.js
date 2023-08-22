import { Box, Text, View } from "native-base";
import React from "react";

const Home = () => {
  return (
    <View>
      <Box flex={1} alignSelf="center" justifyContent="center">
        <Text fontSize="lg">Expo with NativeBase</Text>
      </Box>
    </View>
  );
};

export default Home;
