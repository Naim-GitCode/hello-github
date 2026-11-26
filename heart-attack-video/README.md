# Heart Attack Explainer (Remotion)

A 2-minute, 1920×1080, 30 fps motion-graphics explainer with on-screen narration captions.

Scenes: Intro → What the heart needs → Plaque & clot → Damage ("time is muscle") → Warning signs → Act fast → Prevention → Outro.

```bash
npm i
npx remotion studio          # preview & edit
npx remotion render HeartAttack out/heart-attack-explainer.mp4
```

Each scene is also registered on its own under the "Scenes" folder in Studio.
Narration text lives in each scene's `<Narration lines={...}>` block (`at` = frame offset), so it can double as a voice-over script.

Educational content only, not medical advice.
