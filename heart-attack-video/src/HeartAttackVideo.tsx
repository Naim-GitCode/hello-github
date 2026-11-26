import React from 'react';
import {linearTiming, TransitionSeries} from '@remotion/transitions';
import {fade} from '@remotion/transitions/fade';
import {Intro} from './scenes/Intro';
import {WhatIsIt} from './scenes/WhatIsIt';
import {Blockage} from './scenes/Blockage';
import {Damage} from './scenes/Damage';
import {Signs} from './scenes/Signs';
import {Act} from './scenes/Act';
import {Prevention} from './scenes/Prevention';
import {Outro} from './scenes/Outro';

// Scenes total 3705 frames minus 7 x 15-frame transitions = 3600 frames (120 s @ 30 fps)
export const HeartAttackVideo: React.FC = () => (
  <TransitionSeries>
    <TransitionSeries.Sequence name="Intro" durationInFrames={240}>
      <Intro />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 15})} />
    <TransitionSeries.Sequence name="What is it" durationInFrames={480}>
      <WhatIsIt />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 15})} />
    <TransitionSeries.Sequence name="Blockage" durationInFrames={600}>
      <Blockage />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 15})} />
    <TransitionSeries.Sequence name="Damage" durationInFrames={420}>
      <Damage />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 15})} />
    <TransitionSeries.Sequence name="Warning signs" durationInFrames={660}>
      <Signs />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 15})} />
    <TransitionSeries.Sequence name="Act fast" durationInFrames={540}>
      <Act />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 15})} />
    <TransitionSeries.Sequence name="Prevention" durationInFrames={480}>
      <Prevention />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={linearTiming({durationInFrames: 15})} />
    <TransitionSeries.Sequence name="Outro" durationInFrames={285}>
      <Outro />
    </TransitionSeries.Sequence>
  </TransitionSeries>
);
