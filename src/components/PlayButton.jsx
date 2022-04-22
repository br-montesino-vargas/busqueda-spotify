import React, { useState } from 'react'
import {Howl, Howler} from 'howler'

export const PlayButton = ({ preview_url }) =>
{
    const [isPlaying, setiIsPlaying] = useState(false)

    const sound = new Howl(
    {
        src: [ preview_url ],
        html5: true,
        volume: 0.2,
    });

    const PlaySong = () =>
    {
        if(!isPlaying)
        {
            Howler.stop()
            sound.play()
        } 
        else
        {
            Howler.stop()
        }
        
        setiIsPlaying(!isPlaying);
    }

    return (
        <button
            type="button"
            onClick={ PlaySong }
            className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full  shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
        >
            Play
        </button>
    )
}
