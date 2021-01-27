import React, {Component} from 'react'
import { View, Text, Image, Stylesheet, Animated } from 'react-native'
import Logo from '../assets/favicon.png'

class LoadingScene extends Component {
    state = {
        LogoAnime: new Animated.Value(0),
        LogoText: new Animated.Value(0),
        loadingSpinner: false,
    }
    componentDidMount() {
        const {LogoAnime, LogoText} = this.state
        Animated.parallel([
            Animated.spring(LogoAnime, {
                toValue: 1,
                tension: 10,
                friction: 2,
                duration: 1000,
            }).start(),

            Animated.spring(LogoText, {
                toValue: 1,
                duration: 12000,
            }),
        ]).start(() => {
            this.setState({
                loadingSpinner: true,
            })
        })
    }
    render() {
        return(
            <View style = {styles.container}>
                <Animated.View 
                style = {{
                    opacity: this.state.LogoAnime,
                    top: this.state.LogoAnime.interpolate({
                        inputRange: [0,1],
                        outputRange: [80,0],
                    }),
                }}>
                    <Image source = {Logo}/>
                </Animated.View>
                <Animated.View style = {{opacity: this.state.LogoText}}>
                    <Text style = {styles.logoText}>Loading Scene</Text>
                </Animated.View>
            </View>
        )
    }
}

export default LoadingScene

const styles = Stylesheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00ced1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoText: {
        color: '#FFFFF',
        fontFamily: 'GoogleSans-Bold',
        fontSize: 30,
        marginTop: 29.1,
        fontWeight: '300',
    }
})