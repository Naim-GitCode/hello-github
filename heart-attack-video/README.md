# Heart Attack Explainer (Remotion)

A 2-minute, 1920×1080, 30 fps motion-graphics explainer with on-screen narration captions.

Scenes: Intro → What the heart needs → Plaque & clot → Damage ("time is muscle") → Warning signs → Act fast → Prevention → Outro.

```bash
npm i
npx remotion studio          # preview & edit
npx remotion render HeartAttack out/heart-attack-explainer.mp4
```

Each scene is also registered on its own under the "Scenes" folder in Studio.
## Voice-over

All narration lives in `src/narration.json` (`at` = frame offset within the scene). It drives both the captions and the audio.
Audio is generated offline with [Piper](https://github.com/rhasspy/piper) TTS (voice: `en-us-ryan-high`):

```bash
pip install piper-tts
curl -LO https://github.com/rhasspy/piper/releases/download/v0.0.2/voice-en-us-ryan-high.tar.gz
mkdir voice && tar xzf voice-en-us-ryan-high.tar.gz -C voice
python3 scripts/generate_voiceover.py voice/en-us-ryan-high.onnx
```

The script writes `public/voiceover/*.wav` and warns if any line runs into the next one.

**License note:** the Ryan voice is trained on a CC BY-NC-SA 4.0 dataset, so this voice-over is for non-commercial use only. For commercial use, swap in a commercially licensed voice (e.g. ElevenLabs) or a recorded human narrator, keeping the same file names.

Educational content only, not medical advice.
