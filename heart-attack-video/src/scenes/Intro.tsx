import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {FadeUp, Heart, SceneBg} from '../common';
import {C} from '../theme';

// 240 frames
export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const ecg = interpolate(frame, [20, 110], [1600, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <SceneBg>
      <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center'}}>
        <svg width={1920} height={300} viewBox="0 0 1920 300" style={{position: 'absolute', top: 120}}>
          <path
            d="M0 150 H700 L740 150 L770 60 L800 250 L830 20 L860 200 L890 150 H1920"
            fill="none"
            stroke={C.red}
            strokeWidth={6}
            strokeDasharray={1600}
            strokeDashoffset={ecg}
            opacity={0.8}
          />
        </svg>
        <FadeUp delay={15} style={{marginTop: 120}}>
          <Heart size={300} bpm={70} />
        </FadeUp>
        <FadeUp delay={45}>
          <div style={{fontSize: 140, fontWeight: 800, letterSpacing: -3, marginTop: 30}}>Heart Attack</div>
        </FadeUp>
        <FadeUp delay={70}>
          <div style={{fontSize: 60, color: C.muted, fontWeight: 600}}>What happens, the warning signs, and how to act</div>
        </FadeUp>
      </AbsoluteFill>
    </SceneBg>
  );
};
