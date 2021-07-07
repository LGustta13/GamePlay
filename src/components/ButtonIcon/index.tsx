// Será criado um componente para os botões no app
import React from 'react';
import { Text, Image, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import DiscordImg from '../../assets/discord.png';
import {styles} from './styles';

// Criando uma propriedade que recebe um objeto {} type ou interface
// nome da propriedade: tipo
// Se colocar title?, significa que não é obrigatório a propriedade
type Props = RectButtonProps & {
    title: string;
}

export function ButtonIcon({title, ...rest}: Props){
    return(
        <RectButton
            style={styles.container}
            {...rest}
        >
            <View style={styles.iconWrapper}>
                <Image 
                source={DiscordImg}
                style={styles.icon}
                />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    );
}