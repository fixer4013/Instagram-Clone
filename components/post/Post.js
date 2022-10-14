import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { Divider } from 'react-native-elements';

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: require('../../images/likes-icon.png'),
        likedImageUrl: require('../../images/likes_filled.png')
    },
    {
        name: 'Comment',
        imageUrl: require('../../images/comment.png'),
    },
    {
        name: 'Share',
        imageUrl: require('../../images/messages-icon.png'),
    },
    {
        name: 'Save',
        imageUrl: require('../../images/save.png'),
        likedImageUrl: require('../../images/save_filled.png')
    },

]

function Post({ post }) {
    return (
        <View style={{ marginBottom: 30 }}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 10, marginTop: 10, }}>
                <PostFooter />
                <Like post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
                <Comment post={post} />
            </View>
        </View>
    )
}

function PostHeader({ post }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={post.profile_picture} style={styles.story} />
                <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700', }}>{post.user}</Text>
            </View>
            <Text style={{ color: 'white', fontWeight: '900', textAlign: 'center' }}>...</Text>
        </View>
    )
}

function PostImage({ post }) {
    return (
        <View style={{ height: 450, }}>
            <Image source={post.imageUrl} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
        </View>
    )
}

function PostFooter() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.leftFooterIconsContainer}>
                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
                <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imageUrl} />
            </View>
            <View>
                <Icon imgStyle={[styles.footerIcon, styles.bookMarkIcon]} imgUrl={postFooterIcons[3].imageUrl} />
            </View>
        </View>
    )
}

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={imgUrl} />
    </TouchableOpacity>
)

const Like = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: '600' }}>{post.user}</Text>
            <Text>{' '}{post.caption}</Text>
        </Text>
    </View>

)

// !! double negation makes the post.comments.length go from 0, 1, 2 to true or false. It turns whatever you have into a bool
const CommentSection = ({ post }) => (
    <TouchableOpacity>
        <View style={{ marginTop: 5 }}>
            {!!post.comments.length && (
                <Text style={{ color: 'grey' }}>View{post.comments.length > 1 ? ' all' : ' '} {post.comments.length}{' '}
                    {post.comments.length > 1 ? 'comments' : 'comment'}
                </Text>
            )}
        </View>
    </TouchableOpacity>
)

const Comment = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
                <Text style={{ color: 'white' }}>
                    <Text style={{ fontWeight: '600' }}>{comment.user}</Text>{' '}
                    {comment.comment}
                </Text>
            </View>
        ))}
    </>
)

const styles = StyleSheet.create({
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#c13584',
    },

    footerIcon: {
        width: 25,
        height: 25,
    },

    bookMarkIcon: {

    },

    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent: 'space-between',
    }


})

export default Post