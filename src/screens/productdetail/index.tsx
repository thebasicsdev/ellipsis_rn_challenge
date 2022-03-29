import React, {useState} from "react";
import {AspectRatio, Box, Button, Center, Heading, Icon, Image, Stack, Text, VStack} from "native-base";
import {View} from "react-native";
import Cart from "../dashboard";
import {useNavigation} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

export function ProductDetail({route}: any, {props}: any) {
    const {proName, proPrice, proDetail, proImg, proCart} = route.params;
    const [counter, setCounter] = useState(0);
    const navigation = useNavigation();

    const increase = () => {
        setCounter(count => count + 1);
    };

    React.useLayoutEffect(() => {
        return navigation.setOptions({
            headerRight: () => (
                <Cart cartcounter={proCart + counter}/>
            ),
        });
    }, [navigation, counter]);

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
                <Box alignItems="center">
                    <Box maxW="98%" overflow="hidden" borderColor="coolGray.200" borderWidth="0"
                         _light={{
                             backgroundColor: "gray.50"
                         }}>
                        <Box>
                            <AspectRatio w="100%" ratio={16 / 9} style={{backgroundColor: '#E6E6FA'}}>
                                <Image
                                    h="100%"
                                    w="100%"
                                    alt="img"
                                    resizeMode="stretch"
                                    source={{
                                        uri: proImg
                                    }}
                                />
                            </AspectRatio>
                            <Center style={{marginBottom: 0}} bg="violet.500" _dark={{
                                bg: "violet.400"
                            }} _text={{
                                color: "warmGray.50",
                                fontWeight: "700",
                                fontSize: "xs"
                            }} position="absolute" bottom="0" px="3" py="1.5">
                                {proName}
                            </Center>
                        </Box>
                        <Stack p="3" space={3}>
                            <Stack space={2}>
                                <Heading fontSize="16px" fontFamily={'WorkSans'}>
                                    Description
                                </Heading>
                                <Text fontSize="16px" fontFamily={'WorkSans'} textAlign={'justify'}>
                                    {proDetail}
                                </Text>
                                <Heading fontSize="16px" fontFamily={'WorkSans'}>
                                    Price
                                </Heading>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <Text fontSize="14px" fontFamily={'WorkSans'}
                                          style={{alignSelf: 'flex-start', textAlign: 'left'}}>USD {proPrice}</Text>
                                </View>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
                <View>
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
                        leftIcon={<Icon as={Ionicons} name="cart-outline" size="sm"/>}
                        onPress={increase}
                    >
                        ADD TO CART
                    </Button>
                </View>
            </View>
        </VStack>
    );
}
