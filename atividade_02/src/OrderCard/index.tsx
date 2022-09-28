import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { IOrderCardProps } from '../types/OrderCard';
import { styles } from './styles';

const Item = ({ title, preco }: any) => (
  <View>
    <Text>- {title}: R$ {preco}</Text>
  </View>
);

const OrderCard = ({
  titulo,
  data,
  horarioInicio,
  horarioFim,
  local,
  cidade,
  genero,
  ingressos
}: IOrderCardProps)  => {
  
  const renderItem = ({ item }: any) => (
    <Item title={item.nome} preco={item.preco} />
  );

  return (
    <SafeAreaView>
      <Text style={styles.h1}>{titulo}</Text>
      <Text>Data: {data.toLocaleDateString()}</Text>
      <Text>Horário: {horarioInicio} - {horarioFim}</Text>
      <Text>Local: {local}</Text>
      <Text>Cidade: {cidade}</Text>
      <Text>Genero: {genero}</Text>
      <Text style={styles.h3}>Ingressos:</Text>
      <View>
        <FlatList
          data={ingressos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        
      </View>
    </SafeAreaView>
  );
};

export default OrderCard;
