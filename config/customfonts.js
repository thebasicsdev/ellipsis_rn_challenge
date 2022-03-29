import * as Font from "expo-font";

export default customFonts = async () => {
    await Font.loadAsync({
        'WorkSans': require('./../assets/fonts/WorkSans-Regular.ttf')
    });
};
