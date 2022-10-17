/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./src/App";
import TextInANest from "./TextInANest";
import Login from "./src/screens/Login";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => TextInANest);
// AppRegistry.registerComponent(appName, () => Login);
