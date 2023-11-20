import { pterodactylAPI } from "../axios/pterodactyl";
import randomItems from "../data/MinecraftItems.json";

const players = ["Jochemwite", "Mo_de_olie_sjeik"];

type Enchantment = {
  name: string;
  level: number;
};

// Define type for an enchanted book
type EnchantedBook = {
  [key: string]: Enchantment;
};

const enchantedBooks: EnchantedBook[] = [
  { unbreaking: { name: "unbreaking", level: 5 } },
  { efficiency: { name: "efficiency", level: 5 } },
  { silktouch: { name: "silktouch", level: 1 } },
  { fortune: { name: "fortune", level: 3 } },
  { power: { name: "power", level: 5 } },
  { punch: { name: "punch", level: 2 } },
  { flame: { name: "flame", level: 1 } },
  { infinity: { name: "infinity", level: 1 } },
  { sharpness: { name: "sharpness", level: 5 } },
  { smite: { name: "smite", level: 5 } },
  { bane_of_arthropods: { name: "bane_of_arthropods", level: 5 } },
  { knockback: { name: "knockback", level: 2 } },
  { fire_aspect: { name: "fire_aspect", level: 2 } },
  { looting: { name: "looting", level: 3 } },
  { sweeping: { name: "sweeping", level: 3 } },
  { efficiency: { name: "efficiency", level: 5 } },
  { fortune: { name: "fortune", level: 3 } },
  { aqua_affinity: { name: "aqua_affinity", level: 1 } },
  { respiration: { name: "respiration", level: 3 } },
  { depth_strider: { name: "depth_strider", level: 3 } },
  { feather_falling: { name: "feather_falling", level: 4 } },
  { blast_protection: { name: "blast_protection", level: 4 } },
  { fire_protection: { name: "fire_protection", level: 4 } },
  { projectile_protection: { name: "projectile_protection", level: 4 } },
  { protection: { name: "protection", level: 4 } },
  { thorns: { name: "thorns", level: 3 } },
  { frost_walker: { name: "frost_walker", level: 2 } },
  { mending: { name: "mending", level: 1 } },
  { curse_of_binding: { name: "curse_of_binding", level: 1 } },
  { curse_of_vanishing: { name: "curse_of_vanishing", level: 1 } },
  { lure: { name: "lure", level: 3 } },
  { luck_of_the_sea: { name: "luck_of_the_sea", level: 3 } },
  { channeling: { name: "channeling", level: 1 } },
  { impaling: { name: "impaling", level: 5 } },
  { loyalty: { name: "loyalty", level: 3 } },
  { riptide: { name: "riptide", level: 3 } },
  { quick_charge: { name: "quick_charge", level: 3 } },
  { piercing: { name: "piercing", level: 4 } },
  { multishot: { name: "multishot", level: 1 } },
  // Add more types as needed
];
class minecraft {
  //kill all hostile mobs
  async killMods() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `killall hostile`,
    });
  }

  randomPlayer() {
    const randomPlayer = players[Math.floor(Math.random() * players.length)];

    return randomPlayer;
  }

  async sendCommand(command: string) {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: command,
    });
  }

  //spawn random mob
  async randomMob(): Promise<{
    mob: string;
    amount: number;
    randomPLayer: string;
  }> {
    const mobs = [
      "zombie",
      "skeleton",
      "creeper",
      "spider",
      "enderman",
      "witch",
      "blaze",
      "slime",
      "magmacube",
      "silverfish",
      "phantom",
      "drowned",
      "husk",
      "stray",
      "vindicator",
      "pillager",
      "zombievillager",
      "evoker",
      "vex",
      "villager",
      "pigman",
    ];

    //randob amount between 1 and 100
    const amount = Math.floor(Math.random() * 100) + 1;

    //get random mob

    const mob = mobs[Math.floor(Math.random() * mobs.length)];

    const res = await this.spawnMob(mob, amount);

    return {
      amount: res.amount,
      mob: res.mob,
      randomPLayer: res.randomPLayer,
    };
  }

  //spawn mob
  async spawnMob(
    mob: string,
    amount: number
  ): Promise<{
    mob: string;
    amount: number;
    randomPLayer: string;
  }> {
    const players = ["Jochemwite", "Mo_de_olie_sjeik"];
    //get random player
    const randomPlayer = players[Math.floor(Math.random() * players.length)];
    const randomamount = Math.floor(Math.random() * amount) + 1;

    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `spawnmob ${mob} ${randomamount} ${randomPlayer}`,
    });

    return {
      mob,
      amount: randomamount,
      randomPLayer: randomPlayer,
    };
  }

  //nuke
  async nuke() {
    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `nuke`,
    });

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
      command: `scare @a SOMETHING_INSIDE`,
    });

    return "something_inside";
  }

  //get a random minecraft item
  async randomItem(amount: number) {
    const randomItem = randomItems[Math.floor(Math.random() * randomItems.length)];
    const randomAmount = Math.floor(Math.random() * amount) + 1;
    const randomPlayer = this.randomPlayer();

    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `give ${randomPlayer} ${randomItem.name} ${randomAmount}`,
    });

    return {
      item: randomItem,
      amount: randomAmount,
      players: randomPlayer,
    };
  }

  //kill random player
  async killPlayer() {
    const randomPlayer = this.randomPlayer();

    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `kill ${randomPlayer}`,
    });

    return {
      player: randomPlayer,
    };
  }

  //spawns strong winds
  async wind() {
    const randomPlayer = this.randomPlayer();

    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `disasters start extremewinds 3 ${randomPlayer} `,
    });

    return randomPlayer;
  }

  //spawns a torando
  async torando() {
    const randomPlayer = this.randomPlayer();

    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `disasters start tornado 3 ${randomPlayer} `,
    });

    return randomPlayer;
  }

  getRandomEnchantedBookTypes(count: number): EnchantedBook[] {
    const randomTypes: EnchantedBook[] = [];

    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * enchantedBooks.length);
      const enchantmentName = Object.keys(enchantedBooks[randomIndex])[0];
      const maxLevel = enchantedBooks[randomIndex][enchantmentName].level;
      const randomLevel = Math.floor(Math.random() * maxLevel) + 1; // Random level between 1 and maxLevel

      const enchantedBook: EnchantedBook = {
        [enchantmentName]: {
          name: enchantmentName,
          level: randomLevel,
        },
      };

      randomTypes.push(enchantedBook);
    }

    return randomTypes;
  }

  //spawn a supernova
  async supernova() {
    const randomPlayer = this.randomPlayer();

    const data = await pterodactylAPI.post("/client/servers/947aab94/command", {
      command: `disasters start supernova 1 ${randomPlayer} `,
    });

    return randomPlayer;
  }

  async randomBook(lore: string) {
    const randomPlayer = this.randomPlayer();
    const randomBook = this.getRandomEnchantedBookTypes(3);

    const randomEnchantedBookTypes = this.getRandomEnchantedBookTypes(3);

    // Format enchantments for the command
    const enchantmentStrings = randomEnchantedBookTypes.map((book) => {
      const enchantmentName = Object.keys(book)[0];
      const enchantmentLevel = book[enchantmentName].level;
      return `${enchantmentName}:${enchantmentLevel}`;
    });

    console.log(lore);

    // Create the /give command string
    const commandString = `give ${randomPlayer} enchanted_book 1 ${enchantmentStrings.join(" ")} lore:&1gifted_by_${lore}`;

    this.sendCommand(commandString);
    return commandString;
  }

  //50/50
  async fiftyFifty(username: string) {
    const good = Math.random() < 0.5;

    if (good) {
      this.randomBook(username);
      return "Players Win"
    } else {
      await this.jumpscare_look_at_ender();
      await this.torando()
      return "chat wins"
    }
  }
}

const minecraftAPI = new minecraft();

export { minecraftAPI };
