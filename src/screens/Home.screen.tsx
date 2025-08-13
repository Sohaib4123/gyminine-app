import React from "react";
import { View, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { increment, decrement } from "../store/slices/counter.slice";
import $Button from "../components/UI/customButton.component";

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24, fontFamily: "Bahij-Palatino-Regular" }}>
        Count: {count}
      </Text>
      <$Button onPress={() => dispatch(increment())}>
        <Text>Increment</Text>
      </$Button>
      <$Button onPress={() => dispatch(decrement())}>
        <Text>Decrement</Text>
      </$Button>
    </View>
  );
}

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Counter />
      <Text style={{ fontSize: 24, fontFamily: "Bahij-Palatino-Regular" }}>
        {" "}
        This is home page !!
      </Text>
    </View>
  );
}
