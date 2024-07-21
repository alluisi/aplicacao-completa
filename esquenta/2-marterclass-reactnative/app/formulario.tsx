import { Text, TextInput, View } from 'react-native';
import Botao from '@/components/Botao';
import Cpf from '@/utils/Cpf';
import styles from '@/constants/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function TelaFormulario() {
    const [usuario, setUsuario] = useState<any>({})
    const [erros, setErros] = useState<any>({})

    useEffect(() => {
        AsyncStorage.getItem('usuario').then((usuario) => {
            if (usuario) {
                setUsuario(JSON.parse(usuario))
            }
        })
    }, [])

    function validar() {
        let erros = {}

        if (!usuario.nome) {
            erros = { ...erros, nome: 'Nome é obrigatório' }
        } else if (usuario.nome.length < 3) {
            erros = { ...erros, nome: 'Nome deve ter no mínimo 3 caracteres' }
        }

        setErros(erros)
        return Object.keys(erros).length === 0
    }

    function salvar() {
        if (validar()) {
            AsyncStorage.setItem('usuario', JSON.stringify(usuario))
        }
    }

    return (
        <View style={styles.centralizado}>
            <Text>Formulário</Text>
            <TextInput
                placeholder="Nome"
                value={usuario.nome ?? ''}
                style={[styles.input, erros.nome && styles.inputError]}
                onChangeText={(nome) => setUsuario({ ...usuario, nome })}
            />
            {erros.nome && <Text style={{ color: 'red' }}>{erros.nome}</Text>}

            <TextInput
                placeholder="Cpf"
                value={usuario.cpf ?? ''}
                style={styles.input}
                keyboardType="phone-pad"
                onChangeText={(cpf) => setUsuario({ ...usuario, cpf: Cpf.formatar(cpf) })}
            />

            <Botao onPress={salvar}>
                <Text style={{ color: '#fff' }}>Salvar</Text>
            </Botao>
        </View>
    )
}