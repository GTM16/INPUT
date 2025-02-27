import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState(''); // Estado para armazenar o número do usuário

  // Função para gerar número aleatório e verificar
  const verificarNumero = () => {
    const numeroAleatorio = Math.floor(Math.random() * 11); // Gera número entre 0 e 10
    const numeroUsuario = parseInt(numero, 10); // Converte a entrada para número

    // Verifica se o campo está vazio ou se o número está fora do intervalo
    if (isNaN(numeroUsuario) || numeroUsuario < 0 || numeroUsuario > 10) {
      Alert.alert("Erro", "Por favor, insira um número válido entre 0 e 10.");
      return;
    }

    // Verifica se o número é igual ao sorteado
    if (numeroUsuario === numeroAleatorio) {
      Alert.alert("Resultado", "Você acertou!");
    } else {
      Alert.alert("Resultado", `Você errou! O número era ${numeroAleatorio}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adivinhe o número de 0 a 10</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
        placeholder="Digite um número"
        maxLength={2}
      />
      <View style={styles.buttonContainer}>
        <Button title="Verificar" onPress={verificarNumero} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 8,
  },
});
