// todo: add more stages later.
input.onButtonPressed(Button.A, function () {
    const cursor: Coordinate = warships.enableActivePosition();
console.log('yo konyk!');
console.log(warships.gameMap()[cursor.x]);
})
warships.init();
// todo: add more stages later.
warships.goToStage(GameStage.STAGE_1);
