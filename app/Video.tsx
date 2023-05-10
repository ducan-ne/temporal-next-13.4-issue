'use client'
import { Player } from "@remotion/player"
import { AudiogramComposition } from "@riziu-template/basic/src/Composition"

const fps = 30
const durationInFrames = 29.5 * fps
const AUDIO_START = 6.9 // Seconds

export const MyVideo: React.FC = () => {
  return (
    <>
      <Player
        component={AudiogramComposition}
        durationInFrames={durationInFrames}
        compositionWidth={1080}
        compositionHeight={1080}
        fps={30}
        inputProps={{
          audioOffsetInFrames: Math.round(AUDIO_START * fps),
          source: '/subtitles.srt'
        }}
        controls
      />
    </>
  )
}
