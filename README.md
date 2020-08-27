## How to run locally

- Navigate to the project folder
- Install project dependencies: `npm install` `yarn install`;
- Install CocoaPods iOS packages: `cd ios && pod install`;
- Run `cd .. && react-native link`
- Run in iOS Simulator: `yarn ios`;
- Run in Android Simulator: `yarn android`;

## Refrence

- [Link](https://cheesecakelabs.com/blog/efficient-way-structure-react-native-projects/)

## Linking issues

# react-native-vector-icons

The autolink feature of React Native 0.6x is already provinding all fonts we just had to include on the Info.plist file as explained here.

<key>UIAppFonts</key>
<array>
<string>AntDesign.ttf</string>
<string>Entypo.ttf</string>
<string>EvilIcons.ttf</string>
<string>Feather.ttf</string>
<string>FontAwesome.ttf</string>
<string>FontAwesome5_Brands.ttf</string>
<string>FontAwesome5_Regular.ttf</string>
<string>FontAwesome5_Solid.ttf</string>
<string>Foundation.ttf</string>
<string>Ionicons.ttf</string>
<string>MaterialIcons.ttf</string>
<string>MaterialCommunityIcons.ttf</string>
<string>SimpleLineIcons.ttf</string>
<string>Octicons.ttf</string>
<string>Zocial.ttf</string>
</array>
