// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`3200080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030101010101010101010101020202010101010101010102020201010101010101020202010101010101010101010101010101`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
22222222222...22222222...2222222...222222222222222
`, [myTiles.transparency16,sprites.vehicle.roadHorizontal,myTiles.tile1,sprites.dungeon.greenOuterEast0], TileScale.Sixteen);
            case "level_0":
            case "level_0":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`3200080001010101010101010104010101010101010101040101010101040101010101010101010101010101010401010101010102050101010101010101010101010101010101010104010101010104010101010101010101010101010101010404010101010502010101010101010101010101010101010101010101010101010401010101010104010101010101010101010101010104020503030303030303010104010303030303030303030303030101010103030303040303030303030301010101030303030305020303030303030301010101030303030303040303030303010101010303030303030303030303030104010103030304030205010101010101010101010101010101010101010101010101010101010101040101010101010101010101010101010101050201010101010101010101010101040101010101010101040101010101010101040101010101040101010101010101010102050101010101040101010101010104010101040101010104010101010101010101010101010101010401010101010101010502`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
..................................................
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile6,myTiles.tile9], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "myTile4":
            case "tile7":return tile7;
            case "myTile5":
            case "tile8":return tile8;
            case "myTile":
            case "tile2":return tile2;
            case "myTile0":
            case "tile3":return tile3;
            case "myTile1":
            case "tile4":return tile4;
            case "myTile2":
            case "tile5":return tile5;
            case "myTile3":
            case "tile6":return tile6;
            case "myTile6":
            case "tile9":return tile9;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
