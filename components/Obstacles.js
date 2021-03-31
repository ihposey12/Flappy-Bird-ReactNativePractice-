import React from "react";
import { View } from "react-native";

const Obstacles = ({
  obstaclesLeft,
  obstacleWidth,
  obstacleHeight,
  gap,
  randomBottom,
}) => {
  return (
    <>
      <View
        style={{
          position: "absolute",
          backgroundColor: "green",
          borderRadius: '10px',
          width: obstacleWidth,
          height: obstacleHeight + 100,
          left: obstaclesLeft,
          bottom: randomBottom + obstacleHeight + gap,
        }}
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: "green",
          borderRadius: '10px',
          width: obstacleWidth,
          height: obstacleHeight,
          left: obstaclesLeft,
          bottom: randomBottom,
        }}
      />
    </>
  );
};

export default Obstacles;
