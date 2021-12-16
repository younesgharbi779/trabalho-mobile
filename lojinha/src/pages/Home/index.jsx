import "react-native-gesture-handler";
import React,{useEffect, useState} from "react";
import { View, ScrollView } from "react-native";
import { styles } from "./styles";
import Header from "../../components/Header";
import Carrossel from "../../components/Carrossel";
import Categorias from "../../components/Categorias";
import Card from "../../components/Card";
import axios from "axios";
