const ASPECT_RATIO = 16 / 9;

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: window.innerWidth,
    height: window.innerHeight,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

// adjust initial size
resize();

function preload() {
    // preload assets
}

function create() {
    // setup game
}

function update() {
    // game loop
}

function resize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    const currentRatio = width / height;

    if (currentRatio > ASPECT_RATIO) {
        width = height * ASPECT_RATIO;
    } else {
        height = width / ASPECT_RATIO;
    }

    game.scale.resize(width, height);
}

window.addEventListener('resize', resize);
