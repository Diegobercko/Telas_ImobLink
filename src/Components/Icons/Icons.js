import react from 'react'
import Voltar from '../../assets/Icons/voltar.svg'
import Menu from '../../assets/Icons/Menu.svg'
import Mais from '../../assets/Icons/Mais.svg'
import Maximize from '../../assets/Icons/Maximize.svg'
import Excluir from '../../assets/Icons/Excluir.svg'
import { View, StyleSheet } from 'react-native-web'

const HeaderSection = ({ type }) => {
    return (

        <>
            {type === 'header' && (
                <View style={styles.header}>
                    <TouchableOpacity>
                        <Voltar />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Menu />
                    </TouchableOpacity>
                </View>
            )}
        </>
    )
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default HeaderSection; 