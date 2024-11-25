
/****************
  Animations
****************/
// row 0  : walking (6 col)
// row 1  : standing (4 col)
// row 2  : standing (3 col)
// row 3  : strike (4 col)
// row 4  : block (4 col)
// row 5  : take damage (3 col)
// row 6  : death (5 col)
// row 7  : emote/raise sword (6 col)

// png dim = 432 x 384 px
const canvasHeight = 200; //px
const canvasWidth = 300; 

const spriteHeight = 47.5; //canvasHeight / 8; // 47.5
const spriteWidth = 72; //canvasWidth / 6; // 72

// canvas ids, ctx obj
const zoeCanvas = document.getElementById('zoe-canvas');
const victorCanvas = document.getElementById('victor-canvas');
const chloeCanvas = document.getElementById('chloe-canvas');
const chrisCanvas = document.getElementById('chris-canvas');
const zctx = zoeCanvas.getContext('2d');
const vctx = victorCanvas.getContext('2d');
const chctx = chloeCanvas.getContext('2d');
const crctx = chrisCanvas.getContext('2d');
/*console.log(zctx)
console.log(vctx)*/

// load in sprite sheets
const zoeSprite = new Image();
const victorSprite = new Image();
const chloeSprite = new Image();
const chrisSprite = new Image();
zoeSprite.src = '../../assets/2022/sprite-sheets/zoe-sprite-sheet.png';
victorSprite.src = '../../assets/2022/sprite-sheets/victor-peasant-sprite.png';
chloeSprite.src = '../../assets/2022/sprite-sheets/chloe-sprite-sheet.png';
chrisSprite.src = '../../assets/2022/sprite-sheets/chris-sprite-sheet.png';

let sx=0; // frameX * sw
let sy=0; // frameY * sh
let sw=spriteWidth;
let sh=spriteHeight;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
let rate = 15;


// animate walk (refactored), row 0 - 6 col
function animateWalk_v2(){
  // init vertical location (row num)
  frameY = 0;

  // clear canvas
  zctx.clearRect(0,0, canvasWidth, canvasHeight);
  vctx.clearRect(0,0, canvasWidth, canvasHeight);
  chctx.clearRect(0,0, canvasWidth, canvasHeight);
  crctx.clearRect(0,0, canvasWidth, canvasHeight);

  // stagger the framerate
  let position = Math.floor(gameFrame / rate) % 6;
  let frameX = spriteWidth * position;

  // cut out and draw
  zctx.drawImage(zoeSprite, frameX, frameY * sh , sw, sh, 0,0, canvasWidth, canvasHeight);
  vctx.drawImage(victorSprite, frameX, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);
  chctx.drawImage(chloeSprite, frameX, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);
  crctx.drawImage(chrisSprite, frameX, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);

  // output to canvas
  requestAnimationFrame(animateWalk);

}

// animate walk, row 0 - 6 col
function animateWalk(){
  frameY = 0;

  // clear canvas
  zctx.clearRect(0,0, canvasWidth, canvasHeight);
  vctx.clearRect(0,0, canvasWidth, canvasHeight);
  chctx.clearRect(0,0, canvasWidth, canvasHeight);
  crctx.clearRect(0,0, canvasWidth, canvasHeight);
  

  // cut out and draw
  zctx.drawImage(zoeSprite, frameX * sw, frameY * sh , sw, sh, 0,0, canvasWidth, canvasHeight);
  vctx.drawImage(victorSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);
  chctx.drawImage(chloeSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);
  crctx.drawImage(chrisSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);

  // update frame variables
  //let position = Math.floor(gameFrame/rate) % 6;
  //frameX = spriteWidth * position;
  if(gameFrame % rate === 0){
    if(frameX < 5){    
      //console.log(frameX)
      frameX++;
    }
    else{
      frameX=0;
      //console.log(frameX)
    }
  }
  gameFrame++;
  
  requestAnimationFrame(animateWalk);

}

// animate idle, row 1 - 4 col
function animateIdle(){
  frameY = 1;

  
  // clear canvas
  zctx.clearRect(0,0, canvasWidth, canvasHeight);
  vctx.clearRect(0,0, canvasWidth, canvasHeight);
  chctx.clearRect(0,0, canvasWidth, canvasHeight);
  crctx.clearRect(0,0, canvasWidth, canvasHeight);
  

  // cut out and draw
  zctx.drawImage(zoeSprite, frameX * sw, frameY * sh , sw, sh, 0,0, canvasWidth, canvasHeight);
  vctx.drawImage(victorSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);
  chctx.drawImage(chloeSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);
  crctx.drawImage(chrisSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);

  // update frame variables
  //let position = Math.floor(gameFrame/rate) % 6;
  //frameX = spriteWidth * position;
  if(gameFrame % rate === 0){
    if(frameX < 3){    
      //console.log(frameX)
      frameX++;
    }
    else{
      frameX=0;
      //console.log(frameX)
    }
  }
  gameFrame++;
  
  requestAnimationFrame(animateIdle);

}

// animate attack, row 3 - 4 col
function animateAttack(){
  frameY = 3;
  
  // clear canvas
  zctx.clearRect(0,0, canvasWidth, canvasHeight);
  vctx.clearRect(0,0, canvasWidth, canvasHeight);
  chctx.clearRect(0,0, canvasWidth, canvasHeight);
  crctx.clearRect(0,0, canvasWidth, canvasHeight);
  

  // cut out and draw
  zctx.drawImage(zoeSprite, frameX * sw, frameY * sh , sw, sh, 0,0, canvasWidth, canvasHeight);
  vctx.drawImage(victorSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);
  chctx.drawImage(chloeSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);
  crctx.drawImage(chrisSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);

  // update frame variables
  if(gameFrame % rate === 0){
    if(frameX < 3){    
      //console.log(frameX)
      frameX++;
    }
    else{
      frameX=0;
      //console.log(frameX)
    }
  }
  gameFrame++;
  
  requestAnimationFrame(animateAttack);

}


// animate emote, row 8 - 6 col
function animateEmote(){
  frameY = 7;
  
  // clear canvas
  zctx.clearRect(0,0, canvasWidth, canvasHeight);
  vctx.clearRect(0,0, canvasWidth, canvasHeight);
  chctx.clearRect(0,0, canvasWidth, canvasHeight);
  crctx.clearRect(0,0, canvasWidth, canvasHeight);
  

  // cut out and draw
  zctx.drawImage(zoeSprite, frameX * sw, frameY * sh , sw, sh, 0,0, canvasWidth, canvasHeight);
  vctx.drawImage(victorSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);
  chctx.drawImage(chloeSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);
  crctx.drawImage(chrisSprite, frameX * sw, frameY * sh, sw, sh, 0, 0, canvasWidth, canvasHeight);
  
  // update frame variables
  /*
  if(gameFrame % rate === 0){
    if(frameX < 5){    
      //console.log(frameX)
      frameX++;
    }
    else{
      frameX=0;
      //console.log(frameX)
    }
  }
  */
  if(gameFrame % rate === 0){
    if(frameX < 5){
      frameX++;
    }
    else
      frameX = 0;
  }
  gameFrame++;
  requestAnimationFrame(animateEmote);
  
}

function animateEmoteZoe(){
  frameY = 7;
  // clear area
  zctx.clearRect(0,0, canvasWidth, canvasHeight);

  

  // cut out and draw
  zctx.drawImage(zoeSprite, frameX * sw, frameY * sh , sw, sh, 0,0, canvasWidth, canvasHeight);
  
  // update frame variables
  /*
  if(gameFrame % rate === 0){
    if(frameX < 5){    
      //console.log(frameX)
      frameX++;
    }
    else{
      frameX=0;
      //console.log(frameX)
    }
  }
  */
  if(gameFrame % rate === 0){
    if(frameX < 5){
      frameX++;
    }
    else
      frameX = 0;
  }
  gameFrame++;
  requestAnimationFrame(animateEmote);
  
}
function animateEmoteVictor(){
  frameY = 7;
  // clear area
  vctx.clearRect(0,0, canvasWidth, canvasHeight);
  

  // cut out and draw
  vctx.drawImage(victorSprite, frameX * sw, frameY * sh , sw, sh, 0,0, canvasWidth, canvasHeight);
  
  // update frame variables
  /*
  if(gameFrame % rate === 0){
    if(frameX < 5){    
      //console.log(frameX)
      frameX++;
    }
    else{
      frameX=0;
      //console.log(frameX)
    }
  }
  */
  if(gameFrame % rate === 0){
    if(frameX < 5){
      frameX++;
    }
    else
      frameX = 0;
  }
  gameFrame++;
  requestAnimationFrame(animateEmote);
  
}


animateWalk_v2();
//animateIdle();
//animateWalk();
//animateAttack();
//animateEmote();



/***************
  Event Logic
****************/
let animNum = 0;
const zoeSelect = document.getElementById('btn-zoe-select');
const victorSelect = document.getElementById('btn-victor-select');

zoeSelect.addEventListener('click', (e) => { 
  console.log('Zoe Selected');

  animateEmoteZoe();

  /*
  if(animNum < 2){
    animNum++
    console.log(animNum)
    selectAnim(animNum);
  }
  else{
    animNum = 0;
    console.log(animNum)
    selectAnim(animNum);
  }
  */
    
});
victorSelect.addEventListener('click', (e) => { 
  console.log('Victor Selected');

  animateEmoteVictor();

  /*
  if(animNum < 2){
    animNum++
    console.log(animNum)
    selectAnim(animNum);
  }
  else{
    animNum = 0;
    console.log(animNum)
    selectAnim(animNum);
  }
  */
    
});

function selectAnim(animNum){

  

  /*
  if(animNum === 0)
    animateWalk();
  else if(animNum === 1)
    animateEmote();
  else
    animateAttack();
  */
}
selectAnim(animNum);


