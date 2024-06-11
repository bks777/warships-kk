type Coordinate = {
    x: number,
    y: number,
};

type GameConfig = {
    map: {
        width: number,
        height: number,
    }
};

enum GameStage {
    INIT,
    STAGE_1,
};

enum LedStatus {
    ON = 1,
    OFF = 0,
};

namespace warships {
    export const gameConfig: GameConfig = {
        map: {
            width: 10,
            height: 10,
        },
    };

    let _stage: GameStage = GameStage.INIT;
    let _idx = randint(0, 255);
    let _gameMap: number[][] = [];
    let _activeArea: number[][] = [];
    let _cursor: Coordinate = { x: 2, y: 2 };

    export function init(): void {
        generateMep();
        initActiveArea();
        console.log('Game initialized!');
    };

    export function goToStage(newStage: GameStage): void {
        _stage = newStage;
        console.log(`Game stage changed to: ${newStage}`);
    }

    //--------PRIVATE-------//
    function generateMep(): void {
        _gameMap = [];
        for (let index = 0; index < gameConfig.map.width; index++) {
            let row: number[] = [];
            for (let index = 0; index < gameConfig.map.height; index++) {
                row.push(0);
            }
            _gameMap.push(row);
        }
    };

    function initActiveArea(): void {
        _activeArea = [];
        for (let index = 0; index < 5; index++) {
            let row: number[] = [];
            for (let index = 0; index < 5; index++) {
                row.push(0);
            }
            _activeArea.push(row);
        }
    }

    //-------GAME AREA-------//
    export function enableActivePosition(): Coordinate {
        enablePosition(_cursor);
        
        return _cursor;
    }

    export function enablePosition(position: Coordinate): void {
        _gameMap[position.x][position.y] = 1;
    };

    export function getLedStatus(coordinate: Coordinate): string {
        const ledStatus: number = _gameMap[coordinate.x][coordinate.y];
        return ledStatus === LedStatus.ON ? '#' : '.';
    }

    //------GETTERS------//
    export function stage(): GameStage {
        return _stage;
    };

    export function idx(): number {
        return _idx;
    };

    export function gameMap(): number[][] {
        return _gameMap;
    };

    export function cursor(): Coordinate {
        return _cursor;
    }
}