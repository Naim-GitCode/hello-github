import React from 'react';
import {AbsoluteFill} from 'remotion';
import {FadeUp, Narration, SceneBg} from '../common';
import {C} from '../theme';

// 480 frames
const TIPS = [
  'Don’t smoke',
  'Control blood pressure',
  'Lower cholesterol',
  'Manage diabetes',
  'Move 150 min a week',
  'Eat more plants, less salt',
  'Keep a healthy weight',
  'Get regular check-ups',
];

export const Prevention: React.FC = () => (
  <SceneBg>
    <AbsoluteFill style={{alignItems: 'center', paddingTop: 110}}>
      <FadeUp>
        <div style={{fontSize: 110, fontWeight: 800}}>Lower your risk</div>
      </FadeUp>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 30, maxWidth: 1500, marginTop: 60}}>
        {TIPS.map((tip, i) => (
          <FadeUp key={tip} delay={40 + i * 30}>
            <div
              style={{
                fontSize: 50,
                fontWeight: 600,
                padding: '22px 44px',
                borderRadius: 60,
                background: C.card,
                border: `2px solid ${C.cardBorder}`,
              }}
            >
              <span style={{color: C.redLight, marginRight: 16}}>●</span>
              {tip}
            </div>
          </FadeUp>
        ))}
      </div>
    </AbsoluteFill>
    <Narration
      lines={[
        {at: 10, text: 'Most heart attacks are linked to risks you can change.'},
        {at: 150, text: 'Stop smoking, and keep blood pressure, cholesterol and blood sugar in check.'},
        {at: 320, text: 'Stay active, eat well, and see your doctor regularly.'},
      ]}
    />
  </SceneBg>
);
