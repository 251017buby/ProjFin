import React, { useContext, useState } from 'react';
import { View, Text, Button, BackHandler } from 'react-native';
import Header from '../../components/Header';
import {Background, Container, Nome, Saldo, Title, List} from './styles'
import HistoricoList from '../../components/HistoricoList';

import { AuthContext } from '../../contexts/auth';

export default function Home() {
  const [historico, setHistorico] = useState([
    {key: '1', tipo: 'receita', valor: 1200},
    {key: '2', tipo: 'despesa', valor: 200},
    {key: '3', tipo: 'receita', valor: 88},
    {key: '4', tipo: 'receita', valor: 123},
    {key: '4', tipo: 'despesa', valor: 250},


  ]);

  const { user } = useContext(AuthContext);

 return (
   <Background>
    <Header/>
    <Container>
      <Nome>{user && user.nome}</Nome>
      <Saldo>R$88,00</Saldo>
    </Container>

    <Title>Últimas Movimentações </Title>

    <List
        showsVerticalScrollIndicator={false}
        data={historico}
        keyExtractor={ item => item.key}
        renderItem={ ({ item })=> (<HistoricoList data={item} /> )}

    />

   </Background>
  );
}