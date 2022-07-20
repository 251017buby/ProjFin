import React from 'react';
import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native'

import {Container, ButtonMenu} from './styles';


export default function Header() {
    const navigation = useNavigation();
 return (
   <Container>
    <ButtonMenu onPress={()=> navigation.toggleDrawer() }>
        <Ionicons name='menu' color='#fff' size={35} />
    </ButtonMenu>
   </Container>
  );
}