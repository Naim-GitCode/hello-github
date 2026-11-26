import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {FadeUp, Heart, Narration, SceneBg} from '../common';
import {C} from '../theme';

// 420 frames
export const Damage: React.FC = () => {
  const frame = useCurrentFrame();
  const damage = interpolate(frame, [40, 380], [0.05, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const minutes = Math.floor(interpolate(frame, [40, 380], [0, 90], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'}));
  return (
    <SceneBg>
      <AbsoluteFill style={{flexDirection: 'row', alignItems: 'center', padding: '0 160px', gap: 120, paddingBottom: 140}}>
        <Heart size={540} bpm={110} damage={damage} arteries={1} blocked />
        <div style={{display: 'flex', flexDirection: 'column', gap: 30}}>
          <FadeUp>
            <div style={{fontSize: 130, fontWeight: 800, lineHeight: 1}}>
              Time is <span style={{color: C.redLight}}>muscle</span>
            </div>
          </FadeUp>
          <FadeUp delay={30}>
            <div style={{fontSize: 64, fontWeight: 600, color: C.muted}}>
              Minutes without blood: <span style={{color: C.text, fontVariantNumeric: 'tabular-nums'}}>{minutes}</span>
            </div>
          </FadeUp>
          <FadeUp delay={60}>
            <div style={{display: 'flex', alignItems: 'center', gap: 20, fontSize: 52, fontWeight: 600}}>
              <div style={{width: 40, height: 40, borderRadius: 20, background: C.dead}} />
              Damaged heart muscle
            </div>
          </FadeUp>
        </div>
      </AbsoluteFill>
      <Narration scene="Damage" />
    </SceneBg>
  );
};
