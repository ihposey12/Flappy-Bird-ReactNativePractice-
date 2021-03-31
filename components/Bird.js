import React from 'react'
import {View } from 'react-native'

const Bird = ({birdBottom, birdLeft}) => {
    const birdWidth = 50
    const birdHeight = 60

    return(
        <View style={{
            position: 'absolute',
            backgroundColor: 'purple',
            width: 50,
            height: 60,
            bottom: birdBottom - (birdHeight/2),
            left: birdLeft - (birdWidth/2)
        }} />
    )
}

export default Bird