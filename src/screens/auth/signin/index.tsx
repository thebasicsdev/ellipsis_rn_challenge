import React from "react";
import {
    Box,
    Button,
    Center,
    Divider,
    FormControl,
    HStack,
    Icon,
    IconButton,
    Image,
    Input,
    Link,
    Pressable,
    Text,
    VStack
} from "native-base";
import {Entypo, Ionicons} from "@expo/vector-icons";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Controller, useForm} from 'react-hook-form';
import {useNavigation} from "@react-navigation/native";


export default function SignIn({props}: any) {
    const [showPass, setShowPass] = React.useState(false);
    const [username, password] = React.useState('');
    const navigation = useNavigation();
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: 'onBlur'
    });

    const signIn = async (data: { username: any; password: any; }) => {
        const username = data.username;
        const password = data.password;
        // @ts-ignore
        navigation.navigate('Dashboard');
    };


    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{
                flexGrow: 1,
            }}
            style={{flex: 1}}
        >
            <Box
                safeAreaTop
                _light={{bg: "#2579bc"}}
            />

            <VStack
                flex="1"
                px="6"
                py="1"
                _light={{bg: "white"}}
                space="3"
                justifyContent="space-between"
                borderTopRightRadius={{base: "2xl", md: "xl"}}
                borderBottomRightRadius={{base: "0", md: "xl"}}
                borderTopLeftRadius={{base: "2xl", md: "0"}}
            >
                <VStack space="1">
                    <Image
                        h="40"
                        w="40"
                        alt="img"
                        resizeMode="contain"
                        style={{alignSelf: 'center', marginTop: 70}}
                        source={require('./icons/logo.png')}
                    />
                    <VStack>
                        <VStack space="1">
                            <VStack space={{base: "7", md: "4"}}>
                                <FormControl isRequired isInvalid={'username' in errors}>
                                    <Controller
                                        render={({field: {onChange, value, onBlur}, fieldState: {error}}) => (
                                            <Input
                                                isRequired={true}
                                                placeholder="Username"
                                                value={value}
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                            />
                                        )}
                                        // @ts-ignore
                                        control={control}
                                        name="username"
                                        rules={{required: 'Field is required'}}
                                        defaultValue=""
                                    />
                                    <FormControl.ErrorMessage>
                                        {errors.username?.message}
                                    </FormControl.ErrorMessage>
                                </FormControl>

                                <FormControl isRequired isInvalid={'password' in errors}>
                                    <Controller
                                        control={control}
                                        render={({field: {onChange, value, onBlur}}) => (
                                            <Input
                                                placeholder="Password"
                                                type={showPass ? "" : "password"}
                                                value={value}
                                                onBlur={onBlur}
                                                onChangeText={value => onChange(value)}
                                                InputRightElement={
                                                    <IconButton
                                                        variant="unstyled"
                                                        icon={
                                                            <Icon
                                                                size="4"
                                                                color="coolGray.400"
                                                                as={Entypo}
                                                                name={showPass ? "eye-with-line" : "eye"}
                                                            />
                                                        }
                                                        onPress={() => {
                                                            setShowPass(!showPass);
                                                        }}
                                                    />
                                                }
                                            />
                                        )}
                                        name="password"
                                        rules={{required: 'Field is required'}}
                                    />
                                    <FormControl.ErrorMessage>
                                        {errors.password?.message}
                                    </FormControl.ErrorMessage>
                                </FormControl>
                            </VStack>
                            <Link
                                ml="auto"
                                _text={{
                                    fontSize: "xs",
                                    fontWeight: "bold",
                                    textDecoration: "none",
                                    fontFamily: "WorkSans"
                                }}
                                _light={{
                                    _text: {
                                        color: "primary.900",
                                    },
                                }}
                            >
                                Forgot password?
                            </Link>
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
                                leftIcon={<Icon as={Ionicons} name="log-in-outline" size="sm"/>}
                                // @ts-ignore
                                onPress={handleSubmit(signIn)}
                            >
                                SIGN IN
                            </Button>
                            <HStack
                                mt="5"
                                space="2"
                                mb={{base: 6, md: 7}}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Divider
                                    w="30%"
                                    _light={{bg: "coolGray.200"}}
                                />
                                <Text
                                    fontWeight="medium"
                                    _light={{color: "coolGray.300"}}
                                >
                                    OR
                                </Text>
                                <Divider
                                    w="30%"
                                    _light={{bg: "coolGray.200"}}
                                />
                            </HStack>
                        </VStack>
                        <Center>
                            <HStack space="4">
                                <Pressable>
                                    <Icon
                                        size="25px"
                                        color="#4267B2"
                                        as={Ionicons}
                                        name={'logo-facebook'}
                                    />
                                </Pressable>
                                <Pressable>
                                    <Icon
                                        size="25px"
                                        color="#bc2a8d"
                                        as={Ionicons}
                                        name={'logo-instagram'}
                                    />
                                </Pressable>
                                <Pressable>
                                    <Icon
                                        size="25px"
                                        color="#DB4437"
                                        as={Ionicons}
                                        name={'logo-google'}
                                    />
                                </Pressable>
                                <Pressable>
                                    <Icon
                                        size="25px"
                                        color="#4285F4"
                                        as={Ionicons}
                                        name={'logo-twitter'}
                                    />
                                </Pressable>
                            </HStack>
                        </Center>
                    </VStack>
                </VStack>
                <HStack
                    mb="4"
                    space="1"
                    safeAreaBottom
                    alignItems="center"
                    justifyContent="center"
                    mt={{base: "auto", md: "8"}}
                >
                    <Text
                        fontFamily={"WorkSans"}
                        _light={{color: "coolGray.800"}}
                    >
                        Don't have an account?
                    </Text>
                    <Link
                        _text={{
                            fontWeight: "bold",
                            textDecoration: "none",
                            fontFamily: "WorkSans"
                        }}
                        _light={{
                            _text: {
                                color: "primary.900",
                            },
                        }}
                    >
                        Sign up
                    </Link>
                </HStack>
            </VStack>
        </KeyboardAwareScrollView>
    );
}
