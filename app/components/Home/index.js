import { Box, Text, View } from "native-base";
import React from "react";

const Home = () => {
  return (
    <View>
      <Box display={"flex"} alignSelf="center" justifyContent="center">
        <Text fontSize="lg" paddingTop={"20px"} fontWeight={700}>Expo with NativeBase</Text>
      </Box>
    </View>
  );
};

export default Home;
