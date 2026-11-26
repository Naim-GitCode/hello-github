import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';
import {FadeUp, Narration, SceneBg} from '../common';
import {C} from '../theme';

// 600 frames
const CLOT_T = 380;
const SPEED = 6;
const CX = 800; // blockage x in svg coords
const W = 1600;

const clamp = {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'} as const;

export const Blockage: React.FC = () => {
  const frame = useCurrentFrame();
  const plaque = interpolate(frame, [90, 320], [0, 88], clamp);
  const clot = interpolate(frame, [CLOT_T - 30, CLOT_T], [0, 1], clamp);
  const flash = interpolate(frame, [CLOT_T - 45, CLOT_T - 35, CLOT_T - 15], [0, 1, 0], clamp);
  const starve = interpolate(frame, [CLOT_T, CLOT_T + 90], [0, 1], clamp);

  const label =
    frame < 90 ? 'Healthy artery' : frame < CLOT_T - 45 ? 'Plaque builds up over years' : 'A clot blocks the artery';
  const labelColor = frame < 90 ? C.text : frame < CLOT_T - 45 ? C.plaque : C.redLight;

  // Cells: upstream ones ease to a stop once the clot forms; downstream ones drain away.
  const cells = new Array(26).fill(0).map((_, i) => {
    const base = (i * 67) % (W + 100);
    const off = ((i * 37) % 120) - 60;
    const xAtClot = ((base + CLOT_T * SPEED) % (W + 100)) - 50;
    let x: number;
    let hidden = false;
    if (frame < CLOT_T) {
      x = ((base + frame * SPEED) % (W + 100)) - 50;
    } else if (xAtClot > CX + 20) {
      x = xAtClot + (frame - CLOT_T) * SPEED;
      hidden = x > W + 50;
    } else {
      const t = Math.min(1, (frame - CLOT_T) / 25);
      x = Math.min(xAtClot + SPEED * 12 * (1 - (1 - t) ** 2), CX - 50 - ((i * 13) % 40));
    }
    const squeeze = Math.min(1, Math.abs(x - CX) / 260 + (1 - plaque / 88));
    return {x, y: 250 + off * squeeze, hidden};
  });

  const top = `M${CX - 300} 140 Q${CX} ${140 + plaque * 2} ${CX + 300} 140 Z`;
  const bot = `M${CX - 300} 360 Q${CX} ${360 - plaque * 2} ${CX + 300} 360 Z`;

  return (
    <SceneBg>
      <AbsoluteFill style={{alignItems: 'center', paddingTop: 110}}>
        <FadeUp>
          <div style={{fontSize: 96, fontWeight: 800, color: labelColor}}>{label}</div>
        </FadeUp>
        <svg width={1600} height={500} viewBox={`0 0 ${W} 500`} style={{marginTop: 50}}>
          <rect x={0} y={140} width={W} height={220} fill="#3a0d14" />
          <rect x={CX} y={140} width={W - CX} height={220} fill="#1c1626" opacity={starve} />
          {cells.map((c, i) =>
            c.hidden ? null : <ellipse key={i} cx={c.x} cy={c.y} rx={24} ry={13} fill={C.red} stroke="#ff8a8a" strokeWidth={2} />,
          )}
          <path d={top} fill={C.plaque} />
          <path d={bot} fill={C.plaque} />
          <circle cx={CX} cy={250} r={70 * flash} fill="#fff" opacity={flash * 0.6} />
          <circle cx={CX} cy={250} r={56 * clot} fill={C.clot} stroke="#a3182b" strokeWidth={4} />
          <rect x={0} y={100} width={W} height={40} rx={10} fill="#c0485a" />
          <rect x={0} y={360} width={W} height={40} rx={10} fill="#c0485a" />
          {starve > 0 && (
            <text x={1200} y={470} textAnchor="middle" fill={C.muted} fontSize={42} fontWeight={600} opacity={starve}>
              No blood flow beyond this point
            </text>
          )}
        </svg>
      </AbsoluteFill>
      <Narration scene="Blockage" />
    </SceneBg>
  );
};
