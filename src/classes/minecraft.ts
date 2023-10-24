import { pterodactylAPI } from "../axios/pterodactyl";

class minecraft {
  //kill all hostile mobs
  async killMods() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `killall hostile`,
    });
  }

  //spawn random mob
  async randomMob() {
    const mobs = [
      "zombie",
      "skeleton",
      "creeper",
      "spider",
      "enderman",
      "witch",
      "blaze",
      "slime",
      "magma_cube",
      "silverfish",
      "phantom",
      "drowned",
      "husk",
      "stray",
      "vindicator",
      "pillager",
      "zombie_villager",
      "evoker",
      "vex",
      "villager",
      "zombie_pigman",
    ];

    //randob amount between 1 and 20
    const amount = Math.floor(Math.random() * 100) + 1;

    //get random mob

    const mob = mobs[Math.floor(Math.random() * mobs.length)];

    const res = await this.spawnMob(mob, amount);

    return `${amount} ${mob} spawned at ${res}`;
  }

  //spawn mob
  async spawnMob(mob: string, amount: number) {
    const players = ["Jochemwite", "Mo_de_olie_sjeik"];
    //get random player
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    const randomamount = Math.floor(Math.random() * amount) + 1;

    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `spawnmob ${mob} ${randomamount} ${randomPlayer}`,
    });

    return randomPlayer;
  }

  //nuke
  async nuke() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `nuke`,
    });

    console.log(data);

    return "nuke";
  }

  //random jumpscare
  async randomJumpscare() {
    const minecraftScares = [
      "CRAZY_GUY",
      "BURNING_SKULL",
      "CREEPY_STATUE",
      "DONT_TURN_AROUND",
      "FAKE_DAMAGE",
      "FALLING_SPIDERS",
      "FIREWORKS",
      "LOOK_AT_ENDER",
      "LOOK_DOWN",
      "SOMETHING_INSIDE",
      "SPINNING_MOBS",
      "SPINNING_PLAYER",
      "TRAP_MOB",
      "WATCHING_MOBS",
      "WEEPING_ANGEL",
      "WELCOME_HOME",
    ];

    //get random jumpscare
    const jumpscare = minecraftScares[Math.floor(Math.random() * minecraftScares.length)];
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a ${jumpscare}`,
    });

    return jumpscare;
  }

  //jumpscare look at ender
  async jumpscare_look_at_ender() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a LOOK_AT_ENDER`,
    });

    return "jumpscare_ender";
  }

  //jumpscare crazy guy
  async jumpscare_crazy_guy() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a CRAZY_GUY`,
    });

    return "jumpscare_crazy_guy";
  }

  //jumpscare burning skull
  async jumpscare_burning_skull() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a BURNING_SKULL`,
    });

    return "jumpscare_burning_skull";
  }

  //jumpscare creepy statue
  async jumpscare_creepy_statue() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a CREEPY_STATUE`,
    });

    return "jumpscare_creepy_statue";
  }

  //jumpscare dont turn around
  async jumpscare_dont_turn_around() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a DONT_TURN_AROUND`,
    });

    return "jumpscare_dont_turn_around";
  }

  //jumpscare fake damage
  async jumpscare_fake_damage() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a FAKE_DAMAGE`,
    });

    return "jumpscare_fake_damage";
  }

  //jumpscare firework
  async jumpscare_firework() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a FIREWORKS`,
    });

    return "jumpscare_firework";
  }

  //jumpscare look down
  async jumpscare_look_down() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a LOOK_DOWN`,
    });

    return "jumpscare_look_down";
  }

  //jumpscare something inside
  async jumpscare_something_inside() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a SOMETHING_INSIDE`,
    });

    return "jumpscare_something_inside";
  }

  //jumpscare spinning mobs
  async jumpscare_spinning_mobs() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a SPINNING_MOBS`,
    });

    return "jumpscare_spinning_mobs";
  }

  //jumpscare spinning player
  async jumpscare_spinning_player() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a SPINNING_PLAYER`,
    });

    return "jumpscare_spinning_player";
  }

  //jumpscare trap mob
  async jumpscare_trap_mob() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a TRAP_MOB`,
    });

    return "jumpscare_trap_mob";
  }

  //jumpscare watching mobs
  async jumpscare_watching_mobs() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a WATCHING_MOBS`,
    });

    return "jumpscare_watching_mobs";
  }

  //jumpscare weeping angel
  async jumpscare_weeping_angel() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a WEEPING_ANGEL`,
    });

    return "jumpscare_weeping_angel";
  }

  //jumpscare welcome home
  async jumpscare_welcome_home() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @a WELCOME_HOME`,
    });

    return "jumpscare_welcome_home";
  }

  //SOMETHING_INSIDE
  async something_inside() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `scare @p SOMETHING_INSIDE`,
    });

    return "something_inside";
  }
}

const minecraftAPI = new minecraft();

export { minecraftAPI };
