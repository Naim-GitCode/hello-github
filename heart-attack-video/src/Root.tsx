import React from 'react';
import {Composition, Folder} from 'remotion';
import {HeartAttackVideo} from './HeartAttackVideo';
import {Intro} from './scenes/Intro';
import {WhatIsIt} from './scenes/WhatIsIt';
import {Blockage} from './scenes/Blockage';
import {Damage} from './scenes/Damage';
import {Signs} from './scenes/Signs';
import {Act} from './scenes/Act';
import {Prevention} from './scenes/Prevention';
import {Outro} from './scenes/Outro';

const scenes = [
  {id: 'Intro', component: Intro, d: 240},
  {id: 'WhatIsIt', component: WhatIsIt, d: 480},
  {id: 'Blockage', component: Blockage, d: 600},
  {id: 'Damage', component: Damage, d: 420},
  {id: 'Signs', component: Signs, d: 660},
  {id: 'Act', component: Act, d: 540},
  {id: 'Prevention', component: Prevention, d: 480},
  {id: 'Outro', component: Outro, d: 285},
];

export const RemotionRoot: React.FC = () => (
  <>
    <Composition id="HeartAttack" component={HeartAttackVideo} width={1920} height={1080} fps={30} durationInFrames={3600} />
    <Folder name="Scenes">
      {scenes.map((s) => (
        <Composition key={s.id} id={s.id} component={s.component} width={1920} height={1080} fps={30} durationInFrames={s.d} />
      ))}
    </Folder>
  </>
);
