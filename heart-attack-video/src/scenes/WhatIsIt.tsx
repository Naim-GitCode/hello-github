import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {FadeUp, Heart, Narration, SceneBg} from '../common';
import {C} from '../theme';

// 480 frames
export const WhatIsIt: React.FC = () => {
  const frame = useCurrentFrame();
  const arteries = interpolate(frame, [200, 290], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const beats = Math.floor(interpolate(frame, [60, 180], [0, 100000], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  return (
    <SceneBg>
      <AbsoluteFill style={{flexDirection: 'row', alignItems: 'center', padding: '0 160px', gap: 120, paddingBottom: 140}}>
        <Heart size={560} arteries={arteries} />
        <div style={{display: 'flex', flexDirection: 'column', gap: 40}}>
          <FadeUp>
            <div style={{fontSize: 110, fontWeight: 800, lineHeight: 1}}>Your heart<br />is a muscle</div>
          </FadeUp>
          <FadeUp delay={60}>
            <div style={{fontSize: 64, fontWeight: 600}}>
              <span style={{color: C.redLight, fontWeight: 800}}>{beats.toLocaleString('en-US')}</span> beats a day
            </div>
          </FadeUp>
          <FadeUp delay={200}>
            <div style={{fontSize: 60, fontWeight: 600, color: C.muted, maxWidth: 820}}>
              Fed by the <span style={{color: '#ffd1d6'}}>coronary arteries</span>
            </div>
          </FadeUp>
        </div>
      </AbsoluteFill>
      <Narration scene="WhatIsIt" />
    </SceneBg>
  );
};
