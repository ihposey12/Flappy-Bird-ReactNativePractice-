import React from 'react'
import {View } from 'react-native'
import cartman from '../assets/cartman.png'

const Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 50
    const birdHeight = 60

    return(
        <View style={{
            position: 'absolute',
            // backgroundColor: 'black',
            backgroundImage: cartman,
            width: 50,
            height: 60,
            bottom: birdBottom - (birdHeight/2),
            left: birdLeft - (birdWidth/2),
            borderRadius: '10px'
        }} />
    )
}

export default Bird