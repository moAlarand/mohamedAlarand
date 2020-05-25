import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Foundation from "react-native-vector-icons/Foundation";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";

const customIcons = {};

export const registerCustomIconType = (id, customIcon) => {
  const IcoMoonIcon = createIconSetFromIcoMoon(customIcon);

  customIcons[id] = IcoMoonIcon;
};

export const getIconType = type => {
  switch (type) {
    case "ant":
      return AntDesign;
    case "entypo":
      return Entypo;
    case "evil":
      return EvilIcons;
    case "feather":
      return Feather;
    case "font-awesome":
      return FontAwesome;
    case "font-awesome5":
      return FontAwesome5;
    case "foundation":
      return Foundation;
    case "ion":
      return Ionicons;
    case "material":
      return MaterialIcons;
    case "material-community":
      return MaterialCommunityIcons;
    case "oct":
      return Octicons;
    case "zocial":
      return Zocial;
    case "simple-line":
      return SimpleLineIcons;
    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
  }
  return null;
};