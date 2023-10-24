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
    case "randommob":
      const randommob = await minecraftAPI.randomMob();
      return randommob;
    case "jumpscare_ender":
      const msg = await minecraftAPI.jumpscare_look_at_ender();
      return msg;
    default:
      return "minecraft action not found";
  }
}
