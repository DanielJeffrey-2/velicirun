scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(true, effects.confetti)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
})
info.setLife(3)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(assets.image`Velociraptor`, SpriteKind.Player)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . f f . . . 
    . . . . . . . . . f 7 7 7 f f . 
    f . . . . . . . . f 1 f 7 7 7 f 
    7 f . . . 7 . . f 7 7 7 7 7 7 f 
    f 7 f . . 7 7 f 7 7 7 7 f f f . 
    f 7 f f . f f 7 7 6 7 f f . . . 
    f 7 7 f f 7 6 7 7 f f f 7 7 . . 
    f f 7 7 7 7 7 7 7 f . . . 7 . . 
    . f 7 7 6 7 7 7 7 f 7 7 . . . . 
    . f f 7 7 7 7 7 7 f . 7 . . . . 
    . . f f 7 7 7 7 f 7 . . . . . . 
    . . . f f 7 7 7 f 7 . . . . . . 
    . . . . . f 7 f . f 7 . . . . . 
    . . . . f 7 7 f f 7 7 . . . . . 
    . . . . f e f . f e . . . . . . 
    . . . . . f . . . f . . . . . . 
    `,img`
    . . . . . . . . . . . f f . . . 
    . . . . . . . . . f 7 7 7 f f . 
    f . . . . . . . . f 1 f 7 7 7 f 
    7 f . . . 7 . . f 7 7 7 7 7 7 f 
    f 7 f . . 7 7 f 7 7 7 7 f f f . 
    f 7 f f . f f 7 7 6 7 f f . . . 
    f 7 7 f f 7 6 7 7 f f f 7 7 . . 
    f f 7 7 7 7 7 7 7 f . . . 7 . . 
    . f 7 7 6 7 7 7 7 f 7 7 . . . . 
    . f f 7 7 7 7 7 7 f . 7 . . . . 
    . . f f 7 7 7 7 f 7 . . . . . . 
    . . . f f 7 7 7 f 7 . . . . . . 
    . . . . f 7 f . f 7 7 . . . . . 
    . . . f 7 7 f . . f 7 . . . . . 
    . . . f e f . . . f e . . . . . 
    . . . . f . . . . . f . . . . . 
    `],
200,
true
)
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 0, 100)
music.playMelody("E B C5 A B G A F ", 207)
scene.cameraShake(4, 20000)
