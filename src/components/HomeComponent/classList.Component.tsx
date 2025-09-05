import React from "react";
import { FlatList, Image, ImageSourcePropType } from "react-native";
import $Text from "../UI/customText.component";
import $Button from "../UI/customButton.component";
import tw from "../../utils/tailwind";

type Props = { 
  data: { id: string; title: string; image: ImageSourcePropType }[] 
};

const ClassList = React.memo(({ data }: Props) => {
  // Memoized render item function
  const renderClassItem = React.useCallback(({ item }: { item: { id: string; title: string; image: ImageSourcePropType } }) => (
    <$Button style={tw`mr-3 items-center`} variant="tab">
      <Image
        source={item.image}
        style={tw`w-32 h-32 rounded-lg`}
        resizeMode="cover"
        // Performance optimizations
        fadeDuration={0}
        progressiveRenderingEnabled={true}
      />
      <$Text style={tw`mt-1`} size='md'>{item.title}</$Text>
    </$Button>
  ), []);

  // Memoized key extractor
  const keyExtractor = React.useCallback((item: { id: string; title: string; image: ImageSourcePropType }) => item.id, []);

  // Performance-optimized getItemLayout
  const getItemLayout = React.useCallback((data: any, index: number) => ({
    length: 128 + 12, // width + margin
    offset: (128 + 12) * index,
    index,
  }), []);
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={keyExtractor}
      renderItem={renderClassItem}
      getItemLayout={getItemLayout}
      showsHorizontalScrollIndicator={false}
      // Performance optimizations
      removeClippedSubviews={true}
      maxToRenderPerBatch={5}
      windowSize={10}
      initialNumToRender={3}
      updateCellsBatchingPeriod={50}
      // Enable faster scroll
      disableIntervalMomentum={true}
      scrollEventThrottle={16}
    />
  );
})

ClassList.displayName = 'ClassList';

export default ClassList;
