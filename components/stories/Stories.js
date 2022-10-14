import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Users } from '../../data/Users'



function Stories() {
    return (
        <View style={{ marginBottom: 13, flexDirection: 'column', paddingHorizontal: 8, }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingVertical: 5}}>
                {Users.map((story, index) => (
                    <TouchableOpacity key={index}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={story.image} style={styles.story} />
                        </View>
                        <Text style={{ color: 'white', fontSize: 12, textAlign: 'center', marginLeft: 10, }}>{story.user.length > 10 ? story.user.slice(0, 8).toLowerCase() + '...' : story.user.toLocaleLowerCase()}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 10,
        borderWidth: 1.8,
        borderColor: '#c13584',
    },


})

export default Stories