class DachDash extends Phaser.Scene {
  constructor() {
    super('DachDash');
    this.gameSpeed = 200;
    this.score = 0;
    this.gameRunning = false;
  }

  preload() {
    // Backgrounds
    this.load.image('sky', 'assets/images/sky_layer.png');
    this.load.image('cloud', 'assets/images/cloud.png');
    this.load.image('bg1', 'assets/images/bg_city_layer1.png');
    this.load.image('bg2', 'assets/images/bg_city_layer2.png');
    this.load.image('buildings', 'assets/images/bg_buildings.png');
    this.load.image('ground', 'assets/images/ground_tile.png');

    // Player
    this.load.image('runner1', 'assets/images/runner_dachshund_1.png');
    this.load.image('runner2', 'assets/images/runner_dachshund_2.png');
    this.load.image('runner3', 'assets/images/runner_dachshund_3.png');
    this.load.image('jump', 'assets/images/jump_dachshund.png');

    // Obstacles
    this.load.image('trash', 'assets/images/obstacle_trash_can.png');
    this.load.image('hydrant', 'assets/images/obstacle_fire_hydrant.png');
    this.load.image('cone', 'assets/images/obstacle_traffic_cone.png');
    this.load.image('bench', 'assets/images/obstacle_park_bench.png');

    // Coins
    this.load.image('coin1', 'assets/images/coin_spin_1.png');
    this.load.image('coin2', 'assets/images/coin_spin_2.png');
    this.load.image('coin3', 'assets/images/coin_spin_3.png');

    // TODO: load audio assets when available
  }

  create() {
    const { width, height } = this.scale;

    // Parallax backgrounds
    this.add.image(0, 0, 'sky').setOrigin(0, 0);
    this.bg1 = this.add.tileSprite(0, height - 300, width, 300, 'bg1').setOrigin(0, 0);
    this.bg2 = this.add.tileSprite(0, height - 250, width, 250, 'bg2').setOrigin(0, 0);
    this.buildings = this.add.tileSprite(0, height - 200, width, 200, 'buildings').setOrigin(0, 0);
    this.clouds = this.add.tileSprite(0, 50, width, 100, 'cloud').setOrigin(0, 0);

    // Ground
    this.ground = this.add.tileSprite(0, height - 40, width, 40, 'ground').setOrigin(0, 0);
    this.physics.add.existing(this.ground, true);

    // Player setup
    this.player = this.physics.add.sprite(100, height - 60, 'runner1');
    this.player.setCollideWorldBounds(true);
    this.player.body.setSize(50, 30);
    this.player.body.setOffset(0, 20);
    this.anims.create({
      key: 'run',
      frames: [
        { key: 'runner1' },
        { key: 'runner2' },
        { key: 'runner3' }
      ],
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({ key: 'jumping', frames: [{ key: 'jump' }], frameRate: 1 });
    this.player.play('run');

    // Groups
    this.obstacles = this.physics.add.group();
    this.coins = this.physics.add.group();

    // Colliders
    this.physics.add.collider(this.player, this.ground);
    this.physics.add.collider(this.player, this.obstacles, this.handleGameOver, null, this);
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

    // Input
    this.input.keyboard.on('keydown-SPACE', this.handleJump, this);
    this.input.keyboard.on('keydown-UP', this.handleJump, this);
    this.input.on('pointerdown', this.handleJump, this);

    // Score
    this.scoreText = document.getElementById('score');
    this.highScore = parseInt(localStorage.getItem('dachdashHighScore') || '0'); // TODO: replace with backend storage

    // TODO: add background music

    // Coin animation
    this.anims.create({
      key: 'coinSpin',
      frames: [{ key: 'coin1' }, { key: 'coin2' }, { key: 'coin3' }],
      frameRate: 10,
      repeat: -1
    });
  }

  startGame() {
    this.gameSpeed = 200;
    this.score = 0;
    this.scoreText.textContent = this.score;
    this.gameRunning = true;
    this.spawnObstacleEvent = this.time.addEvent({
      delay: 1500,
      callback: this.spawnObstacle,
      callbackScope: this,
      loop: true
    });
    this.spawnCoinEvent = this.time.addEvent({
      delay: 1000,
      callback: this.spawnCoin,
      callbackScope: this,
      loop: true
    });
  }

  handleJump() {
    if (!this.gameRunning) return;
    if (this.player.body.blocked.down) {
      this.player.setVelocityY(-450);
      this.player.play('jumping');
      // TODO: play jump sound
    }
  }

  spawnObstacle() {
    const { width, height } = this.scale;
    const keys = ['trash', 'hydrant', 'cone', 'bench'];
    const key = Phaser.Utils.Array.GetRandom(keys);
    const obstacle = this.obstacles.create(width + 50, height - 40, key);
    obstacle.setOrigin(0, 1);
    obstacle.body.setAllowGravity(false);
    obstacle.setImmovable(true);
    obstacle.body.setVelocityX(-this.gameSpeed);
  }

  spawnCoin() {
    const { width, height } = this.scale;
    const y = height - 120 - Phaser.Math.Between(0, 100);
    const coin = this.coins.create(width + 50, y, 'coin1');
    coin.body.setAllowGravity(false);
    coin.body.setVelocityX(-this.gameSpeed);
    coin.play('coinSpin');
  }

  collectCoin(player, coin) {
    coin.destroy();
    this.score += 1;
    this.scoreText.textContent = this.score;
    // TODO: play coin pickup sound
  }

  handleGameOver() {
    if (!this.gameRunning) return;
    this.gameRunning = false;
    // TODO: play game over sound
    this.physics.pause();
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('dachdashHighScore', this.highScore);
    }
    document.getElementById('final-score').textContent = this.score;
    document.getElementById('high-score').textContent = this.highScore;
    document.getElementById('game-over').classList.remove('hidden');
  }

  update(time, delta) {
    if (!this.gameRunning) return;
    const deltaSpeed = delta / 1000;
    this.gameSpeed += 2 * deltaSpeed;
    this.bg1.tilePositionX += this.gameSpeed * 0.1 * deltaSpeed;
    this.bg2.tilePositionX += this.gameSpeed * 0.2 * deltaSpeed;
    this.buildings.tilePositionX += this.gameSpeed * 0.3 * deltaSpeed;
    this.clouds.tilePositionX += this.gameSpeed * 0.05 * deltaSpeed;
    this.ground.tilePositionX += this.gameSpeed * deltaSpeed;
    this.obstacles.children.iterate(ob => {
      ob.body.setVelocityX(-this.gameSpeed);
      if (ob.x < -50) ob.destroy();
    });
    this.coins.children.iterate(c => {
      c.body.setVelocityX(-this.gameSpeed);
      if (c.x < -50) c.destroy();
    });
    if (this.player.body.blocked.down && this.player.anims.currentAnim.key !== 'run') {
      this.player.play('run');
    }
  }
}

const GAME_WIDTH = 800;
const GAME_HEIGHT = 450;
const ASPECT_RATIO = GAME_WIDTH / GAME_HEIGHT;

function resize(game) {
  let w = window.innerWidth;
  let h = window.innerHeight;
  if (w / h > ASPECT_RATIO) {
    w = h * ASPECT_RATIO;
  } else {
    h = w / ASPECT_RATIO;
  }
  game.scale.resize(w, h);
}

const config = {
  type: Phaser.AUTO,
  width: GAME_WIDTH,
  height: GAME_HEIGHT,
  parent: 'game-container',
  backgroundColor: '#0F0F0F',
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 1000 }, debug: false }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight
  },
  scene: DachDash
};

let game;

window.addEventListener('load', () => {
  document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('start-screen').classList.add('hidden');
    game = new Phaser.Game(config);
    const scene = game.scene.getScene('DachDash');
    scene.events.once(Phaser.Scenes.Events.CREATE, () => scene.startGame());
    resize(game);
    window.addEventListener('resize', () => resize(game));
  });

  document.getElementById('play-again').addEventListener('click', () => {
    document.getElementById('game-over').classList.add('hidden');
    const scene = game.scene.getScene('DachDash');
    scene.scene.restart();
    scene.events.once(Phaser.Scenes.Events.CREATE, () => scene.startGame());
  });
});
