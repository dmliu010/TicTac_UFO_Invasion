window.document.title = `"TicTac" UFO Invasion`

document.addEventListener('keydown', function(e){
  if(e.keyCode == 82)
    window.location.reload();
})




const music = play("mainsong");
music.loop()
music.detune(-200);
music.volume(.5);
music.speed(.3);


keyPress("m", () => {
    if (music.paused()) {
        music.play();
    } else {
        music.pause();
    }
});

add([
  sprite("skybox_wd"),
  origin("topleft"),
]);


const player = 
  add([
    sprite('player',
      {animSpeed: 0.1,
      frame: 3}
    ),
    scale(1),
    pos(20,20),
    body({
      jumpForce: 100,
      maxVel: 40
    })
  ])





keyDown("up", () => {
  player.frame = 2;
  player.jump();
});
const MOVE_SPEED = 50


keyDown('right', () => {
  player.frame = 1;
  player.move(MOVE_SPEED)
})

keyDown('left', () => {
  player.frame = 4;
  player.move(-MOVE_SPEED)
})


keyPress("r", () => {
    start('main');
});



addLevel(
[
  '                            ',
  '                            ',
  '                            ',
  '                            ',
  '                            ',
  '                            ',
  '                   @        ',
  '                            ',
  '                            ',
  '                            ',
  '                            ',
  '                            ',
  '                            ',
  '                            ',
  '                            ',
  '                            ',
  '                            ',
  'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
], {
  width: 40,
  height: 20,
  'x':[sprite('floor'), solid(), 'dangerous'],
//  '@':[sprite('ufo'), body(), 'dangerous']
})

add([
  rect(width(), 12),
  pos(0, -10),
  origin("topleft"),
  solid(),
]);

player.collides('dangerous', () => {
  camShake(10)
  player.frame = 0;
  destroy(player)
  add([
    text(`"LOSER! You're a LOSER! Are you feeling sorry for yourself?! 
    Well, you should be, because you are DIRT! 
    You make me sick, you big baby! Baby want a bottle? 
    A big, DIRT bottle?!" - Hank Hill
    
    Press "r" to replay ʕ•ᴥ•ʔ `),
    pos(width() / 2, height() / 2),
    origin("center")
  ]);
})
const UFO_SPEED = 100


add([
  sprite("ufo"),
  pos(width(), 200),
  scale(1),
  origin("bot"),
  "dangerous",
  "ufo"
]);


loop(1.5, ()=> {
  const randSize = rand(1,2.5)
  const randPos =  rand(0, height() - 120)
  add([
    sprite('ufo'),
    origin('bot'),
    pos(width(), randPos),
    scale(randSize),
    'ufo',
    "dangerous"
  ])
  
})


//snake/serpant logic, will implement later.


// loop(4, ()=> {
//   const randPos =  rand(0, height() - 120)
//   add([
//     sprite('snake'),
//     origin('bot'),
//     pos(width(), randPos),
//     'snake',
//     "dangerous"
//   ])
// })

action("player", (player) => {player.move(-UFO_SPEED, 0)})

action("ufo", (ufo) => {ufo.move(-UFO_SPEED, 0)});

//action("gameover", () => {});