import { minecraftAPI } from "../classes/minecraft";

export default async function handleEvent(eventData: MinecraftAction): Promise<string> {
  console.log(eventData);

  switch (eventData.action) {
    case "nuke":
      await minecraftAPI.nuke();
      return eventData.message;
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
      const spinningmob = await minecraftAPI.jumpscare_spinning_player();
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
      return bees;

    case "spawn_frog":
      const frogs = await minecraftAPI.spawnMob("frog", 1000);
      return frogs;

    case "spawn_chicken":
      const chicken = await minecraftAPI.spawnMob("spawn_chicken", 1000);
      return chicken;

    case "spawn_zombie":
      const zombie = await minecraftAPI.spawnMob("spawn_chicken", 100);
      return zombie;

    case "spawn_skeleton":
      const skeleton = await minecraftAPI.spawnMob("skeleton", 100);
      return skeleton;

    case "spawn_blaze":
      const blaze = await minecraftAPI.spawnMob("blaze", 100);
      return blaze;

    case "spawn_random":
      const creeper = await minecraftAPI.randomMob();
      return creeper;

    case "nuke":
      const random = await minecraftAPI.nuke();
      return random;

    

    default:
      return "minecraft action not found";
  }
}
