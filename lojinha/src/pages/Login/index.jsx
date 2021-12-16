import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { View, Text, Keyboard, ImageBackground, SafeAreaView } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import { TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { createTable, signUp, getAllUsers } from '../../repository/usuarioRepository';
import Usuario from '../../model/Usuario';

