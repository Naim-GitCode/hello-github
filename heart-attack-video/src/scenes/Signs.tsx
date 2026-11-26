import React from 'react';
import {AbsoluteFill} from 'remotion';
import {FadeUp, Narration, SceneBg} from '../common';
import {C} from '../theme';

// 660 frames
const SIGNS = [
  {t: 'Chest pain or pressure', d: 'Squeezing, tightness or heaviness'},
  {t: 'Pain that spreads', d: 'Arm, jaw, neck, back or stomach'},
  {t: 'Shortness of breath', d: 'With or without chest pain'},
  {t: 'Cold sweat', d: 'Sudden, clammy skin'},
  {t: 'Nausea or dizziness', d: 'Feeling sick or light-headed'},
  {t: 'Unusual tiredness', d: 'Often in women and older adults'},
];

export const Signs: React.FC = () => (
  <SceneBg>
    <AbsoluteFill style={{alignItems: 'center', paddingTop: 90}}>
      <FadeUp>
        <div style={{fontSize: 110, fontWeight: 800}}>Warning signs</div>
      </FadeUp>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 520px)', gap: 30, marginTop: 40}}>
        {SIGNS.map((s, i) => (
          <FadeUp key={s.t} delay={40 + i * 55}>
            <div
              style={{
                height: 230,
                borderRadius: 28,
                background: C.card,
                border: `2px solid ${i === 0 ? C.red : C.cardBorder}`,
                padding: "26px 32px",
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div style={{display: 'flex', alignItems: 'center', gap: 20}}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 28,
                    background: C.red,
                    fontSize: 32,
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {i + 1}
                </div>
                <div style={{fontSize: 44, fontWeight: 800, lineHeight: 1.1}}>{s.t}</div>
              </div>
              <div style={{fontSize: 36, color: C.muted, fontWeight: 400}}>{s.d}</div>
            </div>
          </FadeUp>
        ))}
      </div>
    </AbsoluteFill>
    <Narration scene="Signs" />
  </SceneBg>
);
