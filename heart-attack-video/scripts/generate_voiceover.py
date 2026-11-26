"""Generate voice-over WAVs from src/narration.json with Piper TTS.

Usage: python3 scripts/generate_voiceover.py path/to/voice.onnx
Writes public/voiceover/<Scene>-<i>.wav and src/voiceover-durations.json,
and warns when a line runs into the next one.
"""
import json, subprocess, sys, wave
from pathlib import Path

FPS = 30
SCENE_FRAMES = {"Intro": 240, "WhatIsIt": 480, "Blockage": 600, "Damage": 420,
                "Signs": 660, "Act": 540, "Prevention": 480, "Outro": 285}
root = Path(__file__).resolve().parent.parent
model = sys.argv[1]
narration = json.loads((root / "src/narration.json").read_text())
out = root / "public/voiceover"
out.mkdir(parents=True, exist_ok=True)
durations = {}
for scene, lines in narration.items():
    durations[scene] = []
    for i, line in enumerate(lines):
        wav = out / f"{scene}-{i}.wav"
        subprocess.run([sys.executable, "-m", "piper", "-m", model, "-f", str(wav),
                        "--length-scale", "1.0", "--sentence-silence", "0.25"],
                       input=line["text"].encode(), check=True, capture_output=True)
        with wave.open(str(wav)) as w:
            frames = round(w.getnframes() / w.getframerate() * FPS)
        durations[scene].append(frames)
        limit = lines[i + 1]["at"] if i + 1 < len(lines) else SCENE_FRAMES[scene] - 15
        end = line["at"] + frames
        flag = "  <-- OVERLAPS by %d frames" % (end - limit) if end > limit else ""
        print(f"{scene}-{i}: {frames}f, ends {end}, next {limit}{flag}")
(root / "src/voiceover-durations.json").write_text(json.dumps(durations, indent=2))
