import React from 'react';
import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {FadeUp, Narration, SceneBg} from '../common';
import {C} from '../theme';

// 540 frames
const STEPS = [
  {t: 'Call emergency services now', d: 'e.g. 911, 112 or 999 — don’t wait, don’t drive yourself'},
  {t: 'Chew an aspirin if advised', d: 'Only if not allergic and a dispatcher or doctor says so'},
  {t: 'If they collapse, start CPR', d: 'Push hard and fast in the centre of the chest; use an AED'},
];

export const Act: React.FC = () => {
  const frame = useCurrentFrame();
  // CPR tempo: 110 compressions per minute
  const period = (60 / 110) * 30;
  const t = (frame % period) / period;
  const pump = Math.exp(-(((t - 0.15) / 0.12) ** 2));
  return (
    <SceneBg>
      <AbsoluteFill style={{padding: '100px 160px 0'}}>
        <FadeUp>
          <div style={{fontSize: 110, fontWeight: 800}}>
            Act <span style={{color: C.redLight}}>fast</span>
          </div>
        </FadeUp>
        <div style={{display: 'flex', flexDirection: 'column', gap: 34, marginTop: 40}}>
          {STEPS.map((s, i) => (
            <FadeUp key={s.t} delay={30 + i * 130}>
              <div style={{display: 'flex', alignItems: 'center', gap: 36}}>
                <div style={{fontSize: 96, fontWeight: 800, color: C.red, width: 80}}>{i + 1}</div>
                <div>
                  <div style={{fontSize: 58, fontWeight: 800}}>{s.t}</div>
                  <div style={{fontSize: 40, color: C.muted}}>{s.d}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </AbsoluteFill>
      <AbsoluteFill style={{alignItems: 'flex-end', justifyContent: 'center', paddingRight: 180, paddingBottom: 260}}>
        <FadeUp delay={290} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20}}>
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: 100,
              border: `6px solid ${C.red}`,
              transform: `scale(${1 - 0.15 * pump})`,
              background: `rgba(230,57,70,${0.15 + 0.4 * pump})`,
            }}
          />
          <div style={{fontSize: 40, fontWeight: 600, textAlign: 'center'}}>
            100–120
            <br />
            <span style={{color: C.muted}}>per minute</span>
          </div>
        </FadeUp>
      </AbsoluteFill>
      <Narration scene="Act" />
    </SceneBg>
  );
};
