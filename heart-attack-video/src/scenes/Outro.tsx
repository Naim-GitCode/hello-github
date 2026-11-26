import React from 'react';
import {AbsoluteFill} from 'remotion';
import {FadeUp, Heart, SceneBg} from '../common';
import {C} from '../theme';

// 285 frames
export const Outro: React.FC = () => (
  <SceneBg>
    <AbsoluteFill style={{justifyContent: 'center', alignItems: 'center', gap: 30}}>
      <FadeUp>
        <Heart size={220} />
      </FadeUp>
      {['Know the signs.', 'Act fast.', 'Save a life.'].map((t, i) => (
        <FadeUp key={t} delay={25 + i * 30}>
          <div style={{fontSize: 110, fontWeight: 800, color: i === 2 ? C.redLight : C.text, lineHeight: 1}}>{t}</div>
        </FadeUp>
      ))}
      <FadeUp delay={140}>
        <div style={{fontSize: 34, color: C.muted, marginTop: 50}}>
          For education only, not medical advice. In an emergency, call your local emergency number.
        </div>
      </FadeUp>
    </AbsoluteFill>
  </SceneBg>
);
