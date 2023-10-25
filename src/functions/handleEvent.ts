import { minecraftAPI } from "../classes/minecraft";

export default async function handleEvent(eventData: MinecraftAction): Promise<string> {
  console.log(eventData);

  switch (eventData.action) {
    case "randomscare":
      const scare = await minecraftAPI.randomJumpscare();
      return scare;
    case "jumpscare_ender":
      const msg = await minecraftAPI.jumpscare_look_at_ender();
      return msg;

    case "jumpscare_crazy":
      const crazy = await minecraftAPI.jumpscare_crazy_guy();
      return crazy;

    case "jumpscare_turn":
      const turn = await minecraftAPI.jumpscare_dont_turn_around();
      return turn;

    case "jumpscare_skull":
      const skull = await minecraftAPI.jumpscare_burning_skull();
      return skull;

    case "jumpscare_damage":
      const damage = await minecraftAPI.jumpscare_fake_damage();
      return damage;

    case "jumpscare_fireworks":
      const fireworks = await minecraftAPI.jumpscare_firework();
      return fireworks;

    case "jumpscare_door":
      const door = await minecraftAPI.something_inside();
      return door;

    case "jumpscare_spinningmob":
      const spinningmob = await minecraftAPI.jumpscare_spinning_mobs();
      return spinningmob;

    case "jumpscare_spinningplayer":
      const spinningplayer = await minecraftAPI.jumpscare_spinning_player();
      return spinningplayer;

    case "jumpscare_trapmob":
      const trapmob = await minecraftAPI.jumpscare_trap_mob();
      return trapmob;

    case "jumpscare_watching":
      const watching = await minecraftAPI.jumpscare_watching_mobs();
      return watching;

    case "jumpscare_assassin":
      const assassin = await minecraftAPI.jumpscare_weeping_angel();
      return assassin;

    case "jumpscare_surprise":
      const surprise = await minecraftAPI.jumpscare_welcome_home();
      return surprise;

    case "spawn_bee":
      const bees = await minecraftAPI.spawnMob("bee", 1000);
      return `spawned ${bees.amount} bees on ${bees.randomPLayer} player`;

    case "spawn_frog":
      const frogs = await minecraftAPI.spawnMob("frog", 1000);
      return `spawned ${frogs.amount} ${frogs.mob} on ${frogs.randomPLayer} player`;

    case "spawn_chicken":
      const chicken = await minecraftAPI.spawnMob("chicken", 1000);
      return `spawned ${chicken.amount} chicken on ${chicken.randomPLayer} player`;

    case "spawn_zombie":
      const zombie = await minecraftAPI.spawnMob("zombie", 100);
      return `spawned ${zombie.amount} zombie on ${zombie.randomPLayer} player`;

    case "spawn_skeleton":
      const skeleton = await minecraftAPI.spawnMob("skeleton", 100);
      return `spawned ${skeleton.amount} skeleton on ${skeleton.randomPLayer} player`;

    case "spawn_blaze":
      const blaze = await minecraftAPI.spawnMob("blaze", 100);
      return `spawned ${blaze.amount} blaze on ${blaze.randomPLayer} player`;

    case "spawn_random":
      const randomMob = await minecraftAPI.randomMob();
      return `spawned ${randomMob.amount} ${randomMob.mob} on ${randomMob.randomPLayer} player`;

    case "nuke":
      const random = await minecraftAPI.nuke();
      return `NUKE INCOMING!`;

    default:
      return "minecraft action not found";
  }
}
