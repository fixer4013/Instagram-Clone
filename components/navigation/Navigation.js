/*NOTES 

-- TouchableOpacity - Highlights element on click
-- Contain each element in its own container
-- Create a stylesheet
-- Import images using the Image components and aquire it using source={require(' ')}

*/

import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

function Navigation() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image style={styles.logo} source={require('../../images/instagram-logo.png')}></Image>
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../../images/new-icon.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../../images/likes-icon.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>2</Text>
                    </View>
                    <Image style={styles.icon} source={require('../../images/messages-icon.png')}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 5,
    },

    logo: {
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },

    iconsContainer: {
        flexDirection: 'row',
    },

    icon: {
        width: 24,
        height: 24,
        marginLeft: 24,
        resizeMode: 'contain',
    },

    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left: 35,
        bottom: 15,
        width: 20,
        height: 18,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },

    unreadBadgeText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 12,
    }

})

export default Navigation;
