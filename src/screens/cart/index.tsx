import React from "react";
import {Avatar, Box, Button, FlatList, HStack, Icon, Spacer, Text, VStack} from "native-base";
import {View} from "react-native";
import {Ionicons} from "@expo/vector-icons";

export function CartView({route}: any, {props}: any) {
    const data = [
        {
            id: "1",
            name: "Am Jacket",
            price: "200",
            hero: "OMG This just came out today!",
            image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/mens-better-than-naked-jacket-AVMH_LC9_hero.png"
        }, {
            id: "2",
            name: "BB Jacket",
            price: "99",
            info: "This is the latest and greatest product from Derp corp.",
            image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-better-than-naked-jacket-AVKL_NN4_hero.png"
        }, {
            id: "3",
            name: "Am Shoes",
            price: "300",
            offer: "BOGOF",
            image: "http://images.thenorthface.com/is/image/TheNorthFace/236x204_CLR/womens-single-track-shoe-ALQF_JM3_hero.png"
        }
    ];

    return (
        <VStack
            flex="1"
            px="2"
            py="2"
            _light={{bg: "white"}}
            _dark={{bg: "coolGray.800"}}
            space="3"
            justifyContent="space-between"
            borderTopRightRadius={{base: "2xl", md: "xl"}}
            borderBottomRightRadius={{base: "0", md: "xl"}}
            borderTopLeftRadius={{base: "2xl", md: "0"}}
        >
            <View>
                <FlatList
                    data={data}
                    renderItem={({item}) => <Box borderBottomWidth="1" borderColor="coolGray.200" pl="4" pr="5" py="2">
                        <HStack space={3} justifyContent="space-between">
                            <Avatar size="48px" source={{
                                uri: item.image
                            }}/>
                            <VStack>
                                <Text fontSize="14px" fontFamily={'WorkSans'}>
                                    {item.name}
                                </Text>
                                <Text fontSize="14px" fontFamily={'WorkSans'}>
                                    USD {item.price}
                                </Text>
                            </VStack>
                            <Spacer/>
                        </HStack>
                    </Box>} keyExtractor={item => item.id}/>
                <View style={{marginTop: 20, margin: 20}}>
                    <HStack space={3} justifyContent="space-between">
                        <Text fontSize="14px" fontFamily={'WorkSans'}>Total</Text>
                        <Spacer/>
                        <Text fontSize="14px" fontFamily={'WorkSans'} fontWeight={'bold'}>USD 599</Text>
                    </HStack>
                </View>
                <Button
                    mt="5"
                    size="md"
                    borderRadius="4"
                    _text={{
                        fontWeight: "medium",
                        fontFamily: "WorkSans"
                    }}
                    _light={{
                        bg: "#2579bc",
                    }}
                    leftIcon={<Icon as={Ionicons} name="checkmark-circle-outline" size="sm"/>}
                >
                    CHECKOUT
                </Button>
            </View>
        </VStack>
    );
}
