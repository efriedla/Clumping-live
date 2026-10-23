# Tick-Tock Timer songs

Songs a grown-up can pick to play while a timer runs (VISUAL_TIMER.md).
Clean-up songs are the first idea, but any song works.

To add one:
1. Drop the `.mp3` in this folder (short, lower-case name, e.g. `tidy-up-song.mp3`).
2. Add one line to `src/data/timerSongs.ts`:
   `{ id: 'tidy-up-song', title: 'Tidy-up song', file: '/game-music/timer/tidy-up-song.mp3' },`

Songs loop until the timer ends, then fade out. Aim for under ~3 MB each:
the public site downloads them, and ♥ saves them for offline.
