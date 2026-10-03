Rainbow Slides — recorded voice clips
=====================================

Drop MP3s in this folder with exactly these names. Until a clip is here, the
browser's own voice says the words instead. You can record them a few at a
time: the game only switches to your voice for a sentence once EVERY clip in
that sentence exists, so it never mixes two voices mid-sentence.

  red.mp3             "Red!"
  orange.mp3          "Orange!"
  yellow.mp3          "Yellow!"
  green.mp3           "Green!"
  blue.mp3            "Blue!"
  purple.mp3          "Purple!"
  pink.mp3            "Pink!"
  brown.mp3           "Brown!"
  white.mp3           "White!"
  find-red.mp3        "Can you find red?"
  find-orange.mp3     "Can you find orange?"
  find-yellow.mp3     "Can you find yellow?"
  find-green.mp3      "Can you find green?"
  find-blue.mp3       "Can you find blue?"
  find-purple.mp3     "Can you find purple?"
  find-pink.mp3       "Can you find pink?"
  find-brown.mp3      "Can you find brown?"
  yay.mp3             "Yay!"
  and.mp3             "and"
  make.mp3            "make"
  light.mp3           "light"
  new-colour.mp3      "A new colour!"

  For counting:
  one.mp3 … ten.mp3   "One!" "Two!" … "Ten!"   (ten clips: one, two, three,
                      four, five, six, seven, eight, nine, ten)
  lets-put.mp3        "Let's put"
  ball-in.mp3         "ball in"
  balls-in.mp3        "balls in"
  ball.mp3            "ball!"
  balls.mp3           "balls!"
  how-many.mp3        "How many balls?"

  For tipping out a full ball pit:
  uh-oh.mp3           "Uh oh!"
  all-gone.mp3        "All gone!"

Mixing strings clips together, e.g.  red + and + yellow + make + orange
("Red! and yellow! make… orange!"), and  blue + and + white + make + light + blue.
So say the colour words brightly on their own, and "and" / "make" / "light"
plainly.

Counting strings them the same way:
  lets-put + three + balls-in + red      "Let's put… three… balls in… red!"
  three + red + balls + yay              "Three… red… balls! Yay!"
The numbers are also said on their own, one per ball, so say them brightly.

Tips
- Trim silence off both ends (the Sound clipper at /tools/clip does this and
  exports MP3). Short and snappy is best: a toddler taps fast, and a new word
  cuts the old one off.
- Keep the level similar across clips so none is much louder than the rest.
- The list lives in CLIP_KEYS in src/utils/rainbowSlides.ts; the tests check
  every sentence the game says is on it.
