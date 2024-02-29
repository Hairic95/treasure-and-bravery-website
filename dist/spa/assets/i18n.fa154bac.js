import { b as boot, c as createI18n } from "./index.a21f99a8.js";
var en = {
  title: "Treasures and Bravery",
  menu: {
    characterCreation: "Character creation",
    howToPlay: "How to play",
    combat: "Combat",
    magic: "Magic",
    items: "Items",
    npcs: "Non-player characters",
    characterGenerator: "Character generator"
  },
  characterCreation: {
    step1: {
      title: "Step 1: Attributes",
      attributesDescription: "Each playable character (PC) has the following 3 attributes:",
      strengthTitle: "Strength (STR)",
      strengthDescription: "How good your character is at task of might, combat or resisting physical condititions.",
      dexterityTitle: "Dexterity (DEX)",
      dexterityDescription: "How good your character is at task of finesse, aiming or dodging traps or thrown object.",
      willpowerTitle: "Willpower (WIL)",
      willpowerDescription: "How good your character is at task of socialibility, magic or resisting spiritual condititions.",
      derivedAttributes: "Also note that you have a STR + 10 Inventory Slot to manage your items and stress, and you have a Magic (MG) equal to half your WIL (rounded up) value that influence your spell effectiveness.",
      determineAttributes: "To determine your starting attributes, roll three times d3 (roll a d6, halven the result, rounded up). These will determine your three Attributes. Roll them in order or not, decide at the start before spinning the dice. Finally add +1 to one of them.",
      hitDiceDescription: "Finally, start with 2 Hit Dice (HD), which are the number of d6 you will roll when injured. The higher the number, the more chance of survival you have."
    },
    step2: {
      title: "Step 2: Class",
      classDescription: "Choose one character class. This will determine skills and overall archetype of character you are gonna play as. Each skill is unlocked when reaching a certain amount of HD, and you start with the one at HD 2.",
      clickOnClass: "Click on one of the class to see the details.",
      warrior: {
        title: "Warrior",
        hd2Skill: "HD 2: Double Strike",
        hd2SkillDescription: "When you successfully hit an enemy, you may gain 1 Stress to attack again. You also gain a Buff for this roll.",
        hd4Skill: "HD 4: Parry",
        hd4SkillDescription: "Once per combat, you may gain 2 Stress to negate a incoming wound from a melee attack and deal 1 damage to the attacking enemy.",
        hd5Skill: "HD 5: Advancement",
        hd5SkillDescription: "Choose a Warrior archetype and gain one of its abilities.",
        hd7Skill: "HD 7: Improvement",
        hd7SkillDescription: "Choose another ability from the previously chosen archetype.",
        hd9Skill: "HD 9: Triple Strike",
        hd9SkillDescription: "When you successfully hit an enemy with a second attack, you may gain 1 Stress to deal a direct attack without making any roll to that enemy.",
        archetype1: "Barbarian Archetype",
        archetype1Skill1: "Rage",
        archetype1Skill1Description: "Deal and receive +2 damage while this ability is active.",
        archetype1Skill2: "Big Muscles",
        archetype1Skill2Description: "When you are wounded by a melee weapon, roll +2 HD.",
        archetype1Skill3: "Brutality",
        archetype1Skill3Description: "Your melee attacks are critical hits on a 19+.",
        archetype1Skill4: "Metabolism",
        archetype1Skill4Description: "Your body is so stupid that they ignore the effects of any poisons.",
        archetype1Skill5: "Shout",
        archetype1Skill5Description: "1 damage to a human or smaller target, push it by 10 meters..",
        archetype2: "Fighter Archetype",
        archetype2Skill1: "Resolution",
        archetype2Skill1Description: "+1 to all combat opposed rolls and Saving Throw from attacks.",
        archetype2Skill2: "Finesse",
        archetype2Skill2Description: "+1 to all damage you deal.",
        archetype2Skill3: "Strategy",
        archetype2Skill3Description: "Any ally nearby you gets +1 to any combat opposed roll.",
        archetype2Skill4: "Methodology",
        archetype2Skill4Description: "Choose a type of creature that you meet; gain a Buff whenever you fight that type of creature.",
        archetype2Skill5: "Bastion",
        archetype2Skill5Description: "You may use Parry twice per encounter, gaining only 1 Stress instead of 2."
      },
      crook: {
        title: "Crook",
        hd2Skill: "HD 2: Crimehood",
        hd2SkillDescription: "When you roll to steal, sneak around, pick-lock or other ill willed actions, you gain a Buff to that roll.",
        hd4Skill: "HD 4: Backstab",
        hd4SkillDescription: "When you attack an enemy that isn\u2019t aware of you, you automatically hit and strike a critical hit. If the target has half or less you may kill it or neutralize them automatically.",
        hd5Skill: "HD 5: Advancement",
        hd5SkillDescription: "Choose a Crook archetype and gain one of its abilities.",
        hd7Skill: "HD 7: Improvement",
        hd7SkillDescription: "Choose another ability from the previously chosen archetype.",
        hd9Skill: "HD 9: Dodge",
        hd9SkillDescription: "When you are hit, you may gain 1 Stress. If you do ignore the damage and move within 5 meters. You may use Dodge multiple times per encounter, but you have to gain 2 Stress after the first use instead.",
        archetype1: "Thief",
        archetype1Skill1: "Shadow",
        archetype1Skill1Description: "As long as you are still in darkness, you are considered invisible.",
        archetype1Skill2: "Silent",
        archetype1Skill2Description: "As long as you hold your breath, you do not emit any sound.",
        archetype1Skill3: "Disarm",
        archetype1Skill3Description: "Gain a Buff whenever you try to disarm, find or avoid traps.",
        archetype1Skill4: "Extra Pockets",
        archetype1Skill4Description: "+4 Inventory Slots.",
        archetype1Skill5: "Precision",
        archetype1Skill5Description: "Attacks with one-handed and ranged weapons are critical hits on +18.",
        archetype2: "Bard",
        archetype2Skill1: "Parley",
        archetype2Skill1Description: "Gain 2 Buffs whenever you lie.",
        archetype2Skill2: "Pretty Face",
        archetype2Skill2Description: "Gain a Buff whenever you roll to convince others to help you out. You are also immune to Charm.",
        archetype2Skill3: "Polyglot",
        archetype2Skill3Description: "You can understand and make you understand in any language.",
        archetype2Skill4: "Healing Melody",
        archetype2Skill4Description: "During any 1 turn rest, heal you and your ally by 2 wounds.",
        archetype2Skill5: "Screech",
        archetype2Skill5Description: "Deal 2 non-lethal wounds to all enemies and allies nearby; they have to succeed a Saving Throw on WIL or be blocked for a round."
      },
      mage: {
        title: "Mage",
        hd2Skill: "HD 2: Magic Affinity",
        hd2SkillDescription: "You have a Magic Spellbook with a Spell of your choosing of Level 1 or 2. You may cast Spells of Level MG+1. Also every time you gain a new HD you may learn a new Spell of Level MG+1 after your downtime.",
        hd4Skill: "HD 4: Magic Shield",
        hd4SkillDescription: "Once per combat, you may gain 1 Stress and reduce the value of an incoming wound by your WIL score.",
        hd5Skill: "HD 5: Advancement",
        hd5SkillDescription: "Choose a Mage archetype and gain one of its abilities.",
        hd7Skill: "HD 7: Improvement",
        hd7SkillDescription: "Choose another ability from the previously chosen archetype.",
        hd9Skill: "HD 9: Trick up the Sleeve",
        hd9SkillDescription: "Choose a Spell you know. When you cast it, you don\u2019t gain Stress and you gain a Buff to its roll.",
        archetype1: "Wizard",
        archetype1Skill1: "Wise Mind",
        archetype1Skill1Description: "When you are wounded by a Spell, roll +2 HD.",
        archetype1Skill2: "Maestry",
        archetype1Skill2Description: "Double the area or the duration of your Spells.",
        archetype1Skill3: "Double Cast",
        archetype1Skill3Description: "Gain 1 Stress, cast the same Magic twice in the same round.",
        archetype1Skill4: "Familiar",
        archetype1Skill4Description: "gain a spiritual pet, it\u2019s alive as long as you are conscious. (Skill: WIL-2; HD WIL/2; Atk: Strike WIL/2 damage)",
        archetype1Skill5: "Protection",
        archetype1Skill5Description: "You may use Magic Shield as many times as you want.",
        archetype2: "Profane",
        archetype2Skill1: "Soul Eater",
        archetype2Skill1Description: "You can eat the souls of your victims. The taste varies based on the kindness of the meal.",
        archetype2Skill2: "Demon Skin",
        archetype2Skill2Description: "Your skin becomes dry and reddish. Half any fire damage received.",
        archetype2Skill3: "Sacrifice",
        archetype2Skill3Description: "Deal up to 5 non-lethal wounds to yourself. Your next attack deal that number of wounds as extra damage.",
        archetype2Skill4: "Bloodlust",
        archetype2Skill4Description: "Gain a bonus when you cast Spells that deal damage.",
        archetype2Skill5: "Dark Vision",
        archetype2Skill5Description: "You can see through the darkest black."
      },
      zealot: {
        title: "Zealot",
        hd2Skill: "HD 2: Divine Affinity",
        hd2SkillDescription: "You have a divine Spellbook that holds the Spells Healing Hand and Turn Undead. You also have a relic of your god and as long you have it your attacks are considered magical against enemy resistant to physical attacks.",
        hd4Skill: "HD 4: Vow of Faith",
        hd4SkillDescription: "You may declare a Vow to your God chosen by the GM. As long as you keep it, you roll a +1 HD when you are wounded and deal +1 damage when you attack.",
        hd5Skill: "HD 5: Advancement",
        hd5SkillDescription: "Choose a Zealot archetype and gain one of its abilities.",
        hd7Skill: "HD 7: Improvement",
        hd7SkillDescription: "Choose another ability from the previously chosen archetype.",
        hd9Skill: "HD 9: Divine Sense",
        hd9SkillDescription: "You instinctively recognize undead and unholy beings. You also have a Buff while fighting them.",
        archetype1: "Cleric",
        archetype1Skill1: "Evil-bane",
        archetype1Skill1Description: "Deal +3 damage to any undead or unholy being.",
        archetype1Skill2: "Guardian Angel",
        archetype1Skill2Description: "Once per combat, if an ally should die after being wounded, you may receive 5 wounds instead.",
        archetype1Skill3: "Saint",
        archetype1Skill3Description: "Whenever you are wounded, roll +1 HD.",
        archetype1Skill4: "Remedy",
        archetype1Skill4Description: "Your healing removes +2 wounds.",
        archetype1Skill5: "Blessing",
        archetype1Skill5Description: "Gain 1 Stress, you and your allies receive +2 to any Saving Throw in the next d4+1 turns.",
        archetype2: "Shaman",
        archetype2Skill1: "Spirit Animal",
        archetype2Skill1Description: "ou can talk to beasts. Gain a Buff when talking or fighting them.",
        archetype2Skill2: "Changeling Skin",
        archetype2Skill2Description: "You may transform into a small or medium animal (1 HD) for 4 turns.",
        archetype2Skill3: "Facade Buster",
        archetype2Skill3Description: "You can recognize any lie.",
        archetype2Skill4: "Ramification",
        archetype2Skill4Description: "You may put roots on the ground and know the past events of the place in the last 100 years.",
        archetype2Skill5: "Fourth Level of Diet",
        archetype2Skill5Description: "You aren\u2019t required to eat anymore."
      }
    },
    step3: {
      title: "Step 3: Items",
      itemsDescription: "Roll twice on the Common Items table using two d6 and combining the results (d66), then once on your character class table using a d12. Add the rolled items in your PC's inventory slots.",
      startingItemsDescription: "You also start with 2 Supplies and a Dagger.",
      clickOnItems: "Click on the button to see the table",
      itemsTables: {
        title: "Item Tables",
        commonItems: "Common Items (d66)",
        warriorItems: "Warrior Items (d12)",
        crookItems: "Crook Items (d12)",
        mageItems: "Mage Items (d12)",
        zealotItems: "Zealot Items (d12)"
      }
    },
    step4: {
      title: "Step 4: Final touches",
      miscDescription: "Roll 2d6 and multiply the result for 5; you start with that many Gold Pieces (GP). Also you have 6 Ration Slot and start with 2 filled. Use those to keep track of food while adventuring. Give your PC a name and no more than 2 lines of backstory."
    }
  },
  howToPlay: {
    playersAndMaster: {
      title: "Players and narrator",
      description: "One of the player will be the narrator. They will control the setting and non-player characters (NPC). They will describe the situations and how NPCs will react to the them. The other players will control their Player Character (PC) and act in the situations that are given to them."
    },
    rolls: {
      title: "Action rolls and saving throws",
      description: "Whenever an action's result of PCs or NPCs is uncertain, the player or the narrator respectivly will roll a 2d6 and adds the relevant attribute to the result. A result over 9 is a success.",
      description2: "The narrator can ask a player to see if their character can resists an effect or react quickly enough from a danger or harm. These rolls are defined as saving throws.",
      opposedRollsTitle: "Opposed rolls",
      opposedRollsDescription: "Whenever a PC's action is contrasted by a NPC or another PC, then both parties roll a 2d6 and add the relevant attribute (NPCs use Skill). Instead of reaching a result over 9, the side with the highest results wins. If the result is a tied, the narrator chooses which side wins.",
      bonusAndMalusTitle: "Bonus and malus",
      bonusAndMalusDescription: "In some situation, a PC needing to make an action roll might be in an favorable or disadvantageous position. In these case a PC can receive Bonus or Malus respectivly on said action roll.",
      bonusAndMalusDescription2: "If you have more Bonus than Malus, you roll twice and take the higher result. If you have more Malus, you roll twice and take the lowest result. If these are tied or you have none of either, you just roll once."
    },
    inventoryAndStress: {
      title: "Inventory and stress",
      description: "A PC has 10 + STR inventory slots. Items can take 1 or more of them, some might be stacked up to a defined quantity in a single slot. You can have only one type of item in the same inventory slot, until it gets emptied again.",
      description2: "Some actions or situations can cause a PC to receive Stress. Each instance of Stress takes up an inventory slot.",
      description3: "A PC cannot carry more items or/and stress than their inventory slots allow.",
      description4: "Spending a day resting in a safe location removes all stress.",
      pushingTitle: "Pushing a character",
      pushingDescription: "Whenever a PC makes an action roll while having a empty inventory slot, their player may choose to push their character by taking a Stress. If they do so, they receive a Bonus to that roll.",
      pushingDescription2: "A PC may be pushed as many time as the inventory slot they have left, even in the same roll."
    },
    time: {
      title: "Time",
      description: "Time is tracked using three measurements:",
      descriptionRound: "Round - 10 seconds in-game, used during combat. A round is enough time for a PC to perform an action like casting a spell or attacking.",
      descriptionTurn: "Turn - 10 minutes in-game, used while exploring an adventuring site. A turn is enough time for a party of PCs to search a dungeon room, pick a lock or do any other significant activity.",
      descriptionWatch: "Watch - 4/6 hours in-game, used when travelling the overworld. A watch is enough time for a party to travel about 6 miles by foot or 12 miles by horse or similar mounts, hunt for food, or explore the area around them. Each watch, the GM rolls a d6 to determine if a random encounter occurs, as above.",
      rationDescription: "When exploring the overworld, you need to consume a ration and take a watch-long rest every 2 watches. When exploring an adventuring site, you need to consume a ration and take a turn-long rest every 6 turns.",
      exhaustDescription: "If your PC pushes on without taking a rest, your PC suffers a Malus on every roll they make. If you push your PC even further (4 watches or 10 turns without resting) you take 2 non-lethal wound. From that point on, every watch or every 2 turns without rest you take a wound and roll for damage every time."
    },
    explorationClock: {
      title: "Exploration clock",
      description: "As the narrator, while the party adventures outdoors or in an adventuring site, prepare a d20 and a random encounters table. You may keep the d20 hidden or show it to the players.",
      description2: "Whenever a watch or a turn passes, roll a d6 and subtrack the result to the d20. If the results is 6, roll again. Whenever the d20 reaches 0 or lower, a random encounter happens; roll on the table and make the PCs stumble into it. If the d20 reaches 3 instead, you show the players an omen of the random encounter."
    },
    experience: {
      title: "Experience and Hit Dice",
      gainingExperienceDescription: "At the end of the session, the narrator rewards each PC XP Points, based on the gold value of every non-magical treasure they brought at a safe point or have spent (1 GP = 1 XP). Also a character gains 25 XP per every NPC Hit Die of every enemy the group has defeated, outsmarted or felled.",
      levelUpDescription: "When a PC gains XP equal or higher than 1000 per their current HD, they spent that amount automatically and gain a new HD.",
      levelUpDescription2: "When the HD quantity increases, a PC gains the class' skill relative to that HD. If it's an odd HD they also increase one attribute by 1 point. No attribute can be higher than 6",
      retireDescription: "A PC cannot have more than 12 HD. If they were to gain their thirteenth Hit Die they retire from adventuring."
    }
  },
  magic: {
    spellList: {
      level0: {
        animateArmor: {
          name: "Living armor",
          description: "Animate a set of armor. It becomes a NPC (Skill 0; HD 0) with armor value equals to the one of their armor.",
          fumble: "The set of armor becomes a smiling plushie."
        }
      },
      level2: {
        shadowClaw: {
          name: "Shadow Claw",
          description: "Up to MG targets make an opposed roll against the caster WIL. If they fail, they are grabbed by claws from the ground and remain stuck for d4+1 rounds.",
          fumble: ""
        }
      },
      level3: {
        charm: {
          name: "Charm",
          description: "The target makes an opposed roll against the caster WIL. If they fail, they become friendly and humble towards the caster. If the target HD is lower than the caster MG, the target is automatically charmed instead.",
          fumble: ""
        }
      }
    }
  },
  items: {
    itemList: {
      armors: {
        lightArmor: {
          name: "Light armor",
          description: "3 Armor Slots; 1 Inventory Slot; 20 GP."
        },
        mediumArmor: {
          name: "Medium armor",
          description: "5 Armor Slots; 2 Inventory Slot; 50 GP."
        },
        heavyArmor: {
          name: "Heavy armor",
          description: "7 Armor Slots; 3 Inventory Slot; 200 GP."
        },
        shield: {
          name: "Shield",
          description: "Reduces incoming damage by 1; 1 Inventory Slot; 10 GP."
        },
        spikyShield: {
          name: "Spiky Shield",
          description: "Reduces incoming damage by 1, deals 1 damage to any melee attacker; 1 Inventory Slot; 30 GP."
        },
        menacingHelm: {
          name: "Menacing Helm",
          description: "Reduces enemies' Morale by 1; 1 Inventory Slot; 40 GP."
        },
        dragonskinCape: {
          name: "Dragonskin Cape",
          description: "Halven all fire and cold damage received; 1 Inventory Slot; 40 GP."
        },
        hiddenPocketRobes: {
          name: "Hidden-pocket robes",
          description: "You can hide inside it 2 slot worth of non-armor items; 1 Inventory Slot; 50 GP."
        },
        silverSnakeCape: {
          name: "Silver snake cape",
          description: "You gain a Bonus each time you roll a Saving Throw on WIL; 1 Inventory Slot; 40 GP."
        }
      },
      weapons: {
        sword: {
          name: "Sword",
          description: "4 Damage; 2 Inventory Slot; 10 GP."
        },
        axe: {
          name: "Axe",
          description: "4 Damage; 2 Inventory Slot; 10 GP."
        },
        mace: {
          name: "Mace",
          description: "4 Damage; 2 Inventory Slot; 10 GP."
        },
        greatsword: {
          name: "Greatsword",
          description: "5 Damage, two-handed; 3 Inventory Slot; 15 GP."
        },
        warhammer: {
          name: "Warhammer",
          description: "5 Damage, two-handed; 3 Inventory Slot; 15 GP."
        },
        staff: {
          name: "Staff",
          description: "3 Damage, two-handed, roll on WIL to attack; 2 Inventory Slot; 15 GP."
        },
        bow: {
          name: "Bow",
          description: "3 Damage, two-handed, ranged; 2 Inventory Slot; 35 GP"
        },
        crossbow: {
          name: "Crossbow",
          description: "4 Damage, two-handed, ranged; 3 Inventory Slot; 30 GP"
        },
        blowPipe: {
          name: "Blowpipe",
          description: "2 Damage, ranged; 1 Inventory Slot; 2 GP"
        },
        crowbar: {
          name: "Crowbar",
          description: "3 Damage, gain a Bonus when opening chest with it; 1 Inventory Slot; 10 GP"
        },
        silverDagger: {
          name: "Silver dagger",
          description: "3 Damage, can damage monster immune to physical damage; 1 Inventory Slot; 30 GP"
        },
        pike: {
          name: "Pike",
          description: "4 damage, enemies need to reroll STR to counterattack you, two-handed; 2 Inventory Slot; 20 GP."
        },
        halberd: {
          name: "Halberd",
          description: "5 damage, enemies need to reroll STR to counterattack you, two-handed; 3 Inventory Slot; 25 GP."
        }
      },
      consumables: {
        supplies: {
          name: "Supply",
          description: "Can be exchanged for 3 Rations or basic survival tools; 5 per Inventory Slot; 5 GP."
        },
        ammo: {
          name: "Ammo",
          description: "Required to fire specific weapons (roll at the end of combat, if you roll 1, you only have 1 shot left); 1 Inventory Slot; 5 GP"
        },
        scroll: {
          name: "Scroll",
          description: "Can be used to cast the following spell: [SPELL_DESCRIPTION] 1 Inventory Slot; check scrolls' prices."
        },
        poisonVial: {
          name: "Poison Vial",
          description: "If injected or ingested, the target needs to succeed a Saving Throw on STR or die; 3 per Inventory Slot; 35 GP."
        },
        invisibilityPotion: {
          name: "Invisibility Potion",
          description: "If drank, become transparent for 2d4 rounds; 1 Inventory Slot; 60 GP."
        },
        bomb: {
          name: "Bomb",
          description: "Explode in a area and deals 9 damage to those reached by the explosion; 1 Inventory Slot; 25 GP."
        },
        riftShroom: {
          name: "Rift Shroom",
          description: "When eating, they remove 1 Stress; 3 per Inventory Slot; 10 GP."
        },
        violetIncense: {
          name: "Violet Incense",
          description: "Once burnt, grants a Bonus at casting spells to anybody breathing it; 3 per Inventory Slot; 15 GP."
        },
        talkingTounge: {
          name: "Talking tounge",
          description: "When eaten, you can speak and listen to any language for a day; 6 per Inventory Slot; 8 GP."
        },
        healthTonic: {
          name: "Health tonic",
          description: "Cures 6 wounds; 1 Inventory Slot; 60 GP."
        },
        saintWaterFlask: {
          name: "Saint water flasks",
          description: "Deals 4 damage to undead or unholy creatures; 2 per Inventory Slot; 15 GP."
        },
        prayStone: {
          name: "Pray stone",
          description: "When broken, deals 6 damage to everybody nearby the caster (the caster isn't damaged); 1 per Inventory Slot; 30 GP."
        },
        antigraveOilDose: {
          name: "Anti-grave oil dose",
          description: "A weapon imbued with this deals 2 more damage to undead or unholy creatures; 3 per Inventory Slot; 15 GP."
        }
      },
      misc: {
        bearTrap: {
          name: "Bear trap",
          description: "Deals 3 damage when stepped one. The victim is stuck until they take a round to remove it; 1 Inventory Slot; 25 GP."
        },
        obsidianGlass: {
          name: "Obsidian Glass",
          description: "Allows to see perfectly in darkness if look through it; 1 Inventory Slot; 35 GP."
        },
        crystalBall: {
          name: "Crystal ball",
          description: "Once a day, you may focus on a place you have been to. You have a 360 view of that place for a turn; 1 Inventory Slot; 50 GP."
        },
        prophecyBook: {
          name: "Prophecy book",
          description: "Book filled with fantasy of madmen and prophets. Some people gets a bit too attached to these; 1 Inventory Slot; 5 GP."
        },
        oracleBones: {
          name: "Oracle bones",
          description: "Can be used to commune with a zealot's god; 1 Inventory Slot; 0 GP."
        },
        whisperSkull: {
          name: "Whisper skull",
          description: "Can register and reproduce small message; 1 Inventory Slot; 20 GP."
        },
        unopenedLetter: {
          name: "Unopenend letter",
          description: "A message from a loved one you haven't got the guts to open yet; 5 per Inventory Slot; invaluable to you, worthless to others."
        },
        spyglass: {
          name: "Spyglass",
          description: "Allows to watch up to a 100 meters away; 1 Inventory Slot; 10 GP."
        },
        scrollOfChoice: {
          name: "Scroll of your choice",
          description: "Scroll with a Spell of Level 0, 1 or 2 of your choice; 1 Inventory Slot; check scrolls' prices."
        },
        startWithASpell: {
          name: "You know a spell",
          description: "Start the game with a Spell of Level 0 or 1 of your choice."
        }
      },
      pets: {
        wardog: {
          name: "Wardog",
          description: "A ferocius but faithful companion (Skill 3, HD 2, Atk: Bite - 3 danni)."
        },
        wingedHomunculus: {
          name: "Winged Homunculus",
          description: "A small but cowardly critter (Skill 2, HD 1, Atk: Leer - 2 danni; can fly)."
        }
      }
    }
  }
};
var it = {
  title: "Tesori e Impavidi",
  menu: {
    characterCreation: "Creazione personaggio",
    howToPlay: "Come giocare"
  },
  characterCreation: {
    statsDescription: "Ogni personaggio giocante (PG) ha le seguenti 3 statistiche:"
  }
};
var messages = {
  "en-US": en,
  "it-IT": it
};
var i18n = boot(({ app }) => {
  const i18n2 = createI18n({
    locale: "en-US",
    legacy: false,
    messages
  });
  app.use(i18n2);
});
export { i18n as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5mYTE1NGJhYy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2kxOG4vZW4vaW5kZXgudHMiLCIuLi8uLi8uLi9zcmMvaTE4bi9pdC9pbmRleC50cyIsIi4uLy4uLy4uL3NyYy9pMThuL2luZGV4LnRzIiwiLi4vLi4vLi4vc3JjL2Jvb3QvaTE4bi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIGp1c3QgYW4gZXhhbXBsZSxcclxuLy8gc28geW91IGNhbiBzYWZlbHkgZGVsZXRlIGFsbCBkZWZhdWx0IHByb3BzIGJlbG93XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgdGl0bGU6ICdUcmVhc3VyZXMgYW5kIEJyYXZlcnknLFxyXG4gIG1lbnU6IHtcclxuICAgIGNoYXJhY3RlckNyZWF0aW9uOiAnQ2hhcmFjdGVyIGNyZWF0aW9uJyxcclxuICAgIGhvd1RvUGxheTogJ0hvdyB0byBwbGF5JyxcclxuICAgIGNvbWJhdDogJ0NvbWJhdCcsXHJcbiAgICBtYWdpYzogJ01hZ2ljJyxcclxuICAgIGl0ZW1zOiAnSXRlbXMnLFxyXG4gICAgbnBjczogJ05vbi1wbGF5ZXIgY2hhcmFjdGVycycsXHJcbiAgICBjaGFyYWN0ZXJHZW5lcmF0b3I6ICdDaGFyYWN0ZXIgZ2VuZXJhdG9yJyxcclxuICB9LFxyXG4gIGNoYXJhY3RlckNyZWF0aW9uOiB7XHJcbiAgICBzdGVwMToge1xyXG4gICAgICB0aXRsZTogJ1N0ZXAgMTogQXR0cmlidXRlcycsXHJcbiAgICAgIGF0dHJpYnV0ZXNEZXNjcmlwdGlvbjpcclxuICAgICAgICAnRWFjaCBwbGF5YWJsZSBjaGFyYWN0ZXIgKFBDKSBoYXMgdGhlIGZvbGxvd2luZyAzIGF0dHJpYnV0ZXM6JyxcclxuICAgICAgc3RyZW5ndGhUaXRsZTogJ1N0cmVuZ3RoIChTVFIpJyxcclxuICAgICAgc3RyZW5ndGhEZXNjcmlwdGlvbjpcclxuICAgICAgICAnSG93IGdvb2QgeW91ciBjaGFyYWN0ZXIgaXMgYXQgdGFzayBvZiBtaWdodCwgY29tYmF0IG9yIHJlc2lzdGluZyBwaHlzaWNhbCBjb25kaXRpdGlvbnMuJyxcclxuICAgICAgZGV4dGVyaXR5VGl0bGU6ICdEZXh0ZXJpdHkgKERFWCknLFxyXG4gICAgICBkZXh0ZXJpdHlEZXNjcmlwdGlvbjpcclxuICAgICAgICAnSG93IGdvb2QgeW91ciBjaGFyYWN0ZXIgaXMgYXQgdGFzayBvZiBmaW5lc3NlLCBhaW1pbmcgb3IgZG9kZ2luZyB0cmFwcyBvciB0aHJvd24gb2JqZWN0LicsXHJcbiAgICAgIHdpbGxwb3dlclRpdGxlOiAnV2lsbHBvd2VyIChXSUwpJyxcclxuICAgICAgd2lsbHBvd2VyRGVzY3JpcHRpb246XHJcbiAgICAgICAgJ0hvdyBnb29kIHlvdXIgY2hhcmFjdGVyIGlzIGF0IHRhc2sgb2Ygc29jaWFsaWJpbGl0eSwgbWFnaWMgb3IgcmVzaXN0aW5nIHNwaXJpdHVhbCBjb25kaXRpdGlvbnMuJyxcclxuICAgICAgZGVyaXZlZEF0dHJpYnV0ZXM6XHJcbiAgICAgICAgJ0Fsc28gbm90ZSB0aGF0IHlvdSBoYXZlIGEgU1RSICsgMTAgSW52ZW50b3J5IFNsb3QgdG8gbWFuYWdlIHlvdXIgaXRlbXMgYW5kIHN0cmVzcywgYW5kIHlvdSBoYXZlIGEgTWFnaWMgKE1HKSBlcXVhbCB0byBoYWxmIHlvdXIgV0lMIChyb3VuZGVkIHVwKSB2YWx1ZSB0aGF0IGluZmx1ZW5jZSB5b3VyIHNwZWxsIGVmZmVjdGl2ZW5lc3MuJyxcclxuICAgICAgZGV0ZXJtaW5lQXR0cmlidXRlczpcclxuICAgICAgICAnVG8gZGV0ZXJtaW5lIHlvdXIgc3RhcnRpbmcgYXR0cmlidXRlcywgcm9sbCB0aHJlZSB0aW1lcyBkMyAocm9sbCBhIGQ2LCBoYWx2ZW4gdGhlIHJlc3VsdCwgcm91bmRlZCB1cCkuIFRoZXNlIHdpbGwgZGV0ZXJtaW5lIHlvdXIgdGhyZWUgQXR0cmlidXRlcy4gUm9sbCB0aGVtIGluIG9yZGVyIG9yIG5vdCwgZGVjaWRlIGF0IHRoZSBzdGFydCBiZWZvcmUgc3Bpbm5pbmcgdGhlIGRpY2UuIEZpbmFsbHkgYWRkICsxIHRvIG9uZSBvZiB0aGVtLicsXHJcbiAgICAgIGhpdERpY2VEZXNjcmlwdGlvbjpcclxuICAgICAgICAnRmluYWxseSwgc3RhcnQgd2l0aCAyIEhpdCBEaWNlIChIRCksIHdoaWNoIGFyZSB0aGUgbnVtYmVyIG9mIGQ2IHlvdSB3aWxsIHJvbGwgd2hlbiBpbmp1cmVkLiBUaGUgaGlnaGVyIHRoZSBudW1iZXIsIHRoZSBtb3JlIGNoYW5jZSBvZiBzdXJ2aXZhbCB5b3UgaGF2ZS4nLFxyXG4gICAgfSxcclxuICAgIHN0ZXAyOiB7XHJcbiAgICAgIHRpdGxlOiAnU3RlcCAyOiBDbGFzcycsXHJcbiAgICAgIGNsYXNzRGVzY3JpcHRpb246XHJcbiAgICAgICAgJ0Nob29zZSBvbmUgY2hhcmFjdGVyIGNsYXNzLiBUaGlzIHdpbGwgZGV0ZXJtaW5lIHNraWxscyBhbmQgb3ZlcmFsbCBhcmNoZXR5cGUgb2YgY2hhcmFjdGVyIHlvdSBhcmUgZ29ubmEgcGxheSBhcy4gRWFjaCBza2lsbCBpcyB1bmxvY2tlZCB3aGVuIHJlYWNoaW5nIGEgY2VydGFpbiBhbW91bnQgb2YgSEQsIGFuZCB5b3Ugc3RhcnQgd2l0aCB0aGUgb25lIGF0IEhEIDIuJyxcclxuICAgICAgY2xpY2tPbkNsYXNzOiAnQ2xpY2sgb24gb25lIG9mIHRoZSBjbGFzcyB0byBzZWUgdGhlIGRldGFpbHMuJyxcclxuICAgICAgd2Fycmlvcjoge1xyXG4gICAgICAgIHRpdGxlOiAnV2FycmlvcicsXHJcbiAgICAgICAgaGQyU2tpbGw6ICdIRCAyOiBEb3VibGUgU3RyaWtlJyxcclxuICAgICAgICBoZDJTa2lsbERlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ1doZW4geW91IHN1Y2Nlc3NmdWxseSBoaXQgYW4gZW5lbXksIHlvdSBtYXkgZ2FpbiAxIFN0cmVzcyB0byBhdHRhY2sgYWdhaW4uIFlvdSBhbHNvIGdhaW4gYSBCdWZmIGZvciB0aGlzIHJvbGwuJyxcclxuICAgICAgICBoZDRTa2lsbDogJ0hEIDQ6IFBhcnJ5JyxcclxuICAgICAgICBoZDRTa2lsbERlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ09uY2UgcGVyIGNvbWJhdCwgeW91IG1heSBnYWluIDIgU3RyZXNzIHRvIG5lZ2F0ZSBhIGluY29taW5nIHdvdW5kIGZyb20gYSBtZWxlZSBhdHRhY2sgYW5kIGRlYWwgMSBkYW1hZ2UgdG8gdGhlIGF0dGFja2luZyBlbmVteS4nLFxyXG4gICAgICAgIGhkNVNraWxsOiAnSEQgNTogQWR2YW5jZW1lbnQnLFxyXG4gICAgICAgIGhkNVNraWxsRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnQ2hvb3NlIGEgV2FycmlvciBhcmNoZXR5cGUgYW5kIGdhaW4gb25lIG9mIGl0cyBhYmlsaXRpZXMuJyxcclxuICAgICAgICBoZDdTa2lsbDogJ0hEIDc6IEltcHJvdmVtZW50JyxcclxuICAgICAgICBoZDdTa2lsbERlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0Nob29zZSBhbm90aGVyIGFiaWxpdHkgZnJvbSB0aGUgcHJldmlvdXNseSBjaG9zZW4gYXJjaGV0eXBlLicsXHJcbiAgICAgICAgaGQ5U2tpbGw6ICdIRCA5OiBUcmlwbGUgU3RyaWtlJyxcclxuICAgICAgICBoZDlTa2lsbERlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ1doZW4geW91IHN1Y2Nlc3NmdWxseSBoaXQgYW4gZW5lbXkgd2l0aCBhIHNlY29uZCBhdHRhY2ssIHlvdSBtYXkgZ2FpbiAxIFN0cmVzcyB0byBkZWFsIGEgZGlyZWN0IGF0dGFjayB3aXRob3V0IG1ha2luZyBhbnkgcm9sbCB0byB0aGF0IGVuZW15LicsXHJcbiAgICAgICAgYXJjaGV0eXBlMTogJ0JhcmJhcmlhbiBBcmNoZXR5cGUnLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDE6ICdSYWdlJyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGwxRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnRGVhbCBhbmQgcmVjZWl2ZSArMiBkYW1hZ2Ugd2hpbGUgdGhpcyBhYmlsaXR5IGlzIGFjdGl2ZS4nLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDI6ICdCaWcgTXVzY2xlcycsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsMkRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ1doZW4geW91IGFyZSB3b3VuZGVkIGJ5IGEgbWVsZWUgd2VhcG9uLCByb2xsICsyIEhELicsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsMzogJ0JydXRhbGl0eScsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsM0Rlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ1lvdXIgbWVsZWUgYXR0YWNrcyBhcmUgY3JpdGljYWwgaGl0cyBvbiBhIDE5Ky4nLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDQ6ICdNZXRhYm9saXNtJyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGw0RGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnWW91ciBib2R5IGlzIHNvIHN0dXBpZCB0aGF0IHRoZXkgaWdub3JlIHRoZSBlZmZlY3RzIG9mIGFueSBwb2lzb25zLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsNTogJ1Nob3V0JyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGw1RGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnMSBkYW1hZ2UgdG8gYSBodW1hbiBvciBzbWFsbGVyIHRhcmdldCwgcHVzaCBpdCBieSAxMCBtZXRlcnMuLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMjogJ0ZpZ2h0ZXIgQXJjaGV0eXBlJyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGwxOiAnUmVzb2x1dGlvbicsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsMURlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJysxIHRvIGFsbCBjb21iYXQgb3Bwb3NlZCByb2xscyBhbmQgU2F2aW5nIFRocm93IGZyb20gYXR0YWNrcy4nLFxyXG4gICAgICAgIGFyY2hldHlwZTJTa2lsbDI6ICdGaW5lc3NlJyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGwyRGVzY3JpcHRpb246ICcrMSB0byBhbGwgZGFtYWdlIHlvdSBkZWFsLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsMzogJ1N0cmF0ZWd5JyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGwzRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnQW55IGFsbHkgbmVhcmJ5IHlvdSBnZXRzICsxIHRvIGFueSBjb21iYXQgb3Bwb3NlZCByb2xsLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsNDogJ01ldGhvZG9sb2d5JyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGw0RGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnQ2hvb3NlIGEgdHlwZSBvZiBjcmVhdHVyZSB0aGF0IHlvdSBtZWV0OyBnYWluIGEgQnVmZiB3aGVuZXZlciB5b3UgZmlnaHQgdGhhdCB0eXBlIG9mIGNyZWF0dXJlLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsNTogJ0Jhc3Rpb24nLFxyXG4gICAgICAgIGFyY2hldHlwZTJTa2lsbDVEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdZb3UgbWF5IHVzZSBQYXJyeSB0d2ljZSBwZXIgZW5jb3VudGVyLCBnYWluaW5nIG9ubHkgMSBTdHJlc3MgaW5zdGVhZCBvZiAyLicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyb29rOiB7XHJcbiAgICAgICAgdGl0bGU6ICdDcm9vaycsXHJcbiAgICAgICAgaGQyU2tpbGw6ICdIRCAyOiBDcmltZWhvb2QnLFxyXG4gICAgICAgIGhkMlNraWxsRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnV2hlbiB5b3Ugcm9sbCB0byBzdGVhbCwgc25lYWsgYXJvdW5kLCBwaWNrLWxvY2sgb3Igb3RoZXIgaWxsIHdpbGxlZCBhY3Rpb25zLCB5b3UgZ2FpbiBhIEJ1ZmYgdG8gdGhhdCByb2xsLicsXHJcbiAgICAgICAgaGQ0U2tpbGw6ICdIRCA0OiBCYWNrc3RhYicsXHJcbiAgICAgICAgaGQ0U2tpbGxEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdXaGVuIHlvdSBhdHRhY2sgYW4gZW5lbXkgdGhhdCBpc27igJl0IGF3YXJlIG9mIHlvdSwgeW91IGF1dG9tYXRpY2FsbHkgaGl0IGFuZCBzdHJpa2UgYSBjcml0aWNhbCBoaXQuIElmIHRoZSB0YXJnZXQgaGFzIGhhbGYgb3IgbGVzcyB5b3UgbWF5IGtpbGwgaXQgb3IgbmV1dHJhbGl6ZSB0aGVtIGF1dG9tYXRpY2FsbHkuJyxcclxuICAgICAgICBoZDVTa2lsbDogJ0hEIDU6IEFkdmFuY2VtZW50JyxcclxuICAgICAgICBoZDVTa2lsbERlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0Nob29zZSBhIENyb29rIGFyY2hldHlwZSBhbmQgZ2FpbiBvbmUgb2YgaXRzIGFiaWxpdGllcy4nLFxyXG4gICAgICAgIGhkN1NraWxsOiAnSEQgNzogSW1wcm92ZW1lbnQnLFxyXG4gICAgICAgIGhkN1NraWxsRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnQ2hvb3NlIGFub3RoZXIgYWJpbGl0eSBmcm9tIHRoZSBwcmV2aW91c2x5IGNob3NlbiBhcmNoZXR5cGUuJyxcclxuICAgICAgICBoZDlTa2lsbDogJ0hEIDk6IERvZGdlJyxcclxuICAgICAgICBoZDlTa2lsbERlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ1doZW4geW91IGFyZSBoaXQsIHlvdSBtYXkgZ2FpbiAxIFN0cmVzcy4gSWYgeW91IGRvIGlnbm9yZSB0aGUgZGFtYWdlIGFuZCBtb3ZlIHdpdGhpbiA1IG1ldGVycy4gWW91IG1heSB1c2UgRG9kZ2UgbXVsdGlwbGUgdGltZXMgcGVyIGVuY291bnRlciwgYnV0IHlvdSBoYXZlIHRvIGdhaW4gMiBTdHJlc3MgYWZ0ZXIgdGhlIGZpcnN0IHVzZSBpbnN0ZWFkLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMTogJ1RoaWVmJyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGwxOiAnU2hhZG93JyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGwxRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnQXMgbG9uZyBhcyB5b3UgYXJlIHN0aWxsIGluIGRhcmtuZXNzLCB5b3UgYXJlIGNvbnNpZGVyZWQgaW52aXNpYmxlLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsMjogJ1NpbGVudCcsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsMkRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0FzIGxvbmcgYXMgeW91IGhvbGQgeW91ciBicmVhdGgsIHlvdSBkbyBub3QgZW1pdCBhbnkgc291bmQuJyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGwzOiAnRGlzYXJtJyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGwzRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnR2FpbiBhIEJ1ZmYgd2hlbmV2ZXIgeW91IHRyeSB0byBkaXNhcm0sIGZpbmQgb3IgYXZvaWQgdHJhcHMuJyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGw0OiAnRXh0cmEgUG9ja2V0cycsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsNERlc2NyaXB0aW9uOiAnKzQgSW52ZW50b3J5IFNsb3RzLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsNTogJ1ByZWNpc2lvbicsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsNURlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0F0dGFja3Mgd2l0aCBvbmUtaGFuZGVkIGFuZCByYW5nZWQgd2VhcG9ucyBhcmUgY3JpdGljYWwgaGl0cyBvbiArMTguJyxcclxuICAgICAgICBhcmNoZXR5cGUyOiAnQmFyZCcsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsMTogJ1BhcmxleScsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsMURlc2NyaXB0aW9uOiAnR2FpbiAyIEJ1ZmZzIHdoZW5ldmVyIHlvdSBsaWUuJyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGwyOiAnUHJldHR5IEZhY2UnLFxyXG4gICAgICAgIGFyY2hldHlwZTJTa2lsbDJEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdHYWluIGEgQnVmZiB3aGVuZXZlciB5b3Ugcm9sbCB0byBjb252aW5jZSBvdGhlcnMgdG8gaGVscCB5b3Ugb3V0LiBZb3UgYXJlIGFsc28gaW1tdW5lIHRvIENoYXJtLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsMzogJ1BvbHlnbG90JyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGwzRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnWW91IGNhbiB1bmRlcnN0YW5kIGFuZCBtYWtlIHlvdSB1bmRlcnN0YW5kIGluIGFueSBsYW5ndWFnZS4nLFxyXG4gICAgICAgIGFyY2hldHlwZTJTa2lsbDQ6ICdIZWFsaW5nIE1lbG9keScsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsNERlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0R1cmluZyBhbnkgMSB0dXJuIHJlc3QsIGhlYWwgeW91IGFuZCB5b3VyIGFsbHkgYnkgMiB3b3VuZHMuJyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGw1OiAnU2NyZWVjaCcsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsNURlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0RlYWwgMiBub24tbGV0aGFsIHdvdW5kcyB0byBhbGwgZW5lbWllcyBhbmQgYWxsaWVzIG5lYXJieTsgdGhleSBoYXZlIHRvIHN1Y2NlZWQgYSBTYXZpbmcgVGhyb3cgb24gV0lMIG9yIGJlIGJsb2NrZWQgZm9yIGEgcm91bmQuJyxcclxuICAgICAgfSxcclxuICAgICAgbWFnZToge1xyXG4gICAgICAgIHRpdGxlOiAnTWFnZScsXHJcbiAgICAgICAgaGQyU2tpbGw6ICdIRCAyOiBNYWdpYyBBZmZpbml0eScsXHJcbiAgICAgICAgaGQyU2tpbGxEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdZb3UgaGF2ZSBhIE1hZ2ljIFNwZWxsYm9vayB3aXRoIGEgU3BlbGwgb2YgeW91ciBjaG9vc2luZyBvZiBMZXZlbCAxIG9yIDIuIFlvdSBtYXkgY2FzdCBTcGVsbHMgb2YgTGV2ZWwgTUcrMS4gQWxzbyBldmVyeSB0aW1lIHlvdSBnYWluIGEgbmV3IEhEIHlvdSBtYXkgbGVhcm4gYSBuZXcgU3BlbGwgb2YgTGV2ZWwgTUcrMSBhZnRlciB5b3VyIGRvd250aW1lLicsXHJcbiAgICAgICAgaGQ0U2tpbGw6ICdIRCA0OiBNYWdpYyBTaGllbGQnLFxyXG4gICAgICAgIGhkNFNraWxsRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnT25jZSBwZXIgY29tYmF0LCB5b3UgbWF5IGdhaW4gMSBTdHJlc3MgYW5kIHJlZHVjZSB0aGUgdmFsdWUgb2YgYW4gaW5jb21pbmcgd291bmQgYnkgeW91ciBXSUwgc2NvcmUuJyxcclxuICAgICAgICBoZDVTa2lsbDogJ0hEIDU6IEFkdmFuY2VtZW50JyxcclxuICAgICAgICBoZDVTa2lsbERlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0Nob29zZSBhIE1hZ2UgYXJjaGV0eXBlIGFuZCBnYWluIG9uZSBvZiBpdHMgYWJpbGl0aWVzLicsXHJcbiAgICAgICAgaGQ3U2tpbGw6ICdIRCA3OiBJbXByb3ZlbWVudCcsXHJcbiAgICAgICAgaGQ3U2tpbGxEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdDaG9vc2UgYW5vdGhlciBhYmlsaXR5IGZyb20gdGhlIHByZXZpb3VzbHkgY2hvc2VuIGFyY2hldHlwZS4nLFxyXG4gICAgICAgIGhkOVNraWxsOiAnSEQgOTogVHJpY2sgdXAgdGhlIFNsZWV2ZScsXHJcbiAgICAgICAgaGQ5U2tpbGxEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdDaG9vc2UgYSBTcGVsbCB5b3Uga25vdy4gV2hlbiB5b3UgY2FzdCBpdCwgeW91IGRvbuKAmXQgZ2FpbiBTdHJlc3MgYW5kIHlvdSBnYWluIGEgQnVmZiB0byBpdHMgcm9sbC4nLFxyXG4gICAgICAgIGFyY2hldHlwZTE6ICdXaXphcmQnLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDE6ICdXaXNlIE1pbmQnLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDFEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdXaGVuIHlvdSBhcmUgd291bmRlZCBieSBhIFNwZWxsLCByb2xsICsyIEhELicsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsMjogJ01hZXN0cnknLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDJEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdEb3VibGUgdGhlIGFyZWEgb3IgdGhlIGR1cmF0aW9uIG9mIHlvdXIgU3BlbGxzLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsMzogJ0RvdWJsZSBDYXN0JyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGwzRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnR2FpbiAxIFN0cmVzcywgY2FzdCB0aGUgc2FtZSBNYWdpYyB0d2ljZSBpbiB0aGUgc2FtZSByb3VuZC4nLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDQ6ICdGYW1pbGlhcicsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsNERlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ2dhaW4gYSBzcGlyaXR1YWwgcGV0LCBpdOKAmXMgYWxpdmUgYXMgbG9uZyBhcyB5b3UgYXJlIGNvbnNjaW91cy4gKFNraWxsOiBXSUwtMjsgSEQgV0lMLzI7IEF0azogU3RyaWtlIFdJTC8yIGRhbWFnZSknLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDU6ICdQcm90ZWN0aW9uJyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGw1RGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnWW91IG1heSB1c2UgTWFnaWMgU2hpZWxkIGFzIG1hbnkgdGltZXMgYXMgeW91IHdhbnQuJyxcclxuICAgICAgICBhcmNoZXR5cGUyOiAnUHJvZmFuZScsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsMTogJ1NvdWwgRWF0ZXInLFxyXG4gICAgICAgIGFyY2hldHlwZTJTa2lsbDFEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdZb3UgY2FuIGVhdCB0aGUgc291bHMgb2YgeW91ciB2aWN0aW1zLiBUaGUgdGFzdGUgdmFyaWVzIGJhc2VkIG9uIHRoZSBraW5kbmVzcyBvZiB0aGUgbWVhbC4nLFxyXG4gICAgICAgIGFyY2hldHlwZTJTa2lsbDI6ICdEZW1vbiBTa2luJyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGwyRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnWW91ciBza2luIGJlY29tZXMgZHJ5IGFuZCByZWRkaXNoLiBIYWxmIGFueSBmaXJlIGRhbWFnZSByZWNlaXZlZC4nLFxyXG4gICAgICAgIGFyY2hldHlwZTJTa2lsbDM6ICdTYWNyaWZpY2UnLFxyXG4gICAgICAgIGFyY2hldHlwZTJTa2lsbDNEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdEZWFsIHVwIHRvIDUgbm9uLWxldGhhbCB3b3VuZHMgdG8geW91cnNlbGYuIFlvdXIgbmV4dCBhdHRhY2sgZGVhbCB0aGF0IG51bWJlciBvZiB3b3VuZHMgYXMgZXh0cmEgZGFtYWdlLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsNDogJ0Jsb29kbHVzdCcsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsNERlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0dhaW4gYSBib251cyB3aGVuIHlvdSBjYXN0IFNwZWxscyB0aGF0IGRlYWwgZGFtYWdlLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsNTogJ0RhcmsgVmlzaW9uJyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGw1RGVzY3JpcHRpb246ICdZb3UgY2FuIHNlZSB0aHJvdWdoIHRoZSBkYXJrZXN0IGJsYWNrLicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHplYWxvdDoge1xyXG4gICAgICAgIHRpdGxlOiAnWmVhbG90JyxcclxuICAgICAgICBoZDJTa2lsbDogJ0hEIDI6IERpdmluZSBBZmZpbml0eScsXHJcbiAgICAgICAgaGQyU2tpbGxEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdZb3UgaGF2ZSBhIGRpdmluZSBTcGVsbGJvb2sgdGhhdCBob2xkcyB0aGUgU3BlbGxzIEhlYWxpbmcgSGFuZCBhbmQgVHVybiBVbmRlYWQuIFlvdSBhbHNvIGhhdmUgYSByZWxpYyBvZiB5b3VyIGdvZCBhbmQgYXMgbG9uZyB5b3UgaGF2ZSBpdCB5b3VyIGF0dGFja3MgYXJlIGNvbnNpZGVyZWQgbWFnaWNhbCBhZ2FpbnN0IGVuZW15IHJlc2lzdGFudCB0byBwaHlzaWNhbCBhdHRhY2tzLicsXHJcbiAgICAgICAgaGQ0U2tpbGw6ICdIRCA0OiBWb3cgb2YgRmFpdGgnLFxyXG4gICAgICAgIGhkNFNraWxsRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnWW91IG1heSBkZWNsYXJlIGEgVm93IHRvIHlvdXIgR29kIGNob3NlbiBieSB0aGUgR00uIEFzIGxvbmcgYXMgeW91IGtlZXAgaXQsIHlvdSByb2xsIGEgKzEgSEQgd2hlbiB5b3UgYXJlIHdvdW5kZWQgYW5kIGRlYWwgKzEgZGFtYWdlIHdoZW4geW91IGF0dGFjay4nLFxyXG4gICAgICAgIGhkNVNraWxsOiAnSEQgNTogQWR2YW5jZW1lbnQnLFxyXG4gICAgICAgIGhkNVNraWxsRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnQ2hvb3NlIGEgWmVhbG90IGFyY2hldHlwZSBhbmQgZ2FpbiBvbmUgb2YgaXRzIGFiaWxpdGllcy4nLFxyXG4gICAgICAgIGhkN1NraWxsOiAnSEQgNzogSW1wcm92ZW1lbnQnLFxyXG4gICAgICAgIGhkN1NraWxsRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnQ2hvb3NlIGFub3RoZXIgYWJpbGl0eSBmcm9tIHRoZSBwcmV2aW91c2x5IGNob3NlbiBhcmNoZXR5cGUuJyxcclxuICAgICAgICBoZDlTa2lsbDogJ0hEIDk6IERpdmluZSBTZW5zZScsXHJcbiAgICAgICAgaGQ5U2tpbGxEZXNjcmlwdGlvbjpcclxuICAgICAgICAgICdZb3UgaW5zdGluY3RpdmVseSByZWNvZ25pemUgdW5kZWFkIGFuZCB1bmhvbHkgYmVpbmdzLiBZb3UgYWxzbyBoYXZlIGEgQnVmZiB3aGlsZSBmaWdodGluZyB0aGVtLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMTogJ0NsZXJpYycsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsMTogJ0V2aWwtYmFuZScsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsMURlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0RlYWwgKzMgZGFtYWdlIHRvIGFueSB1bmRlYWQgb3IgdW5ob2x5IGJlaW5nLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsMjogJ0d1YXJkaWFuIEFuZ2VsJyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGwyRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnT25jZSBwZXIgY29tYmF0LCBpZiBhbiBhbGx5IHNob3VsZCBkaWUgYWZ0ZXIgYmVpbmcgd291bmRlZCwgeW91IG1heSByZWNlaXZlIDUgd291bmRzIGluc3RlYWQuJyxcclxuICAgICAgICBhcmNoZXR5cGUxU2tpbGwzOiAnU2FpbnQnLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDNEZXNjcmlwdGlvbjogJ1doZW5ldmVyIHlvdSBhcmUgd291bmRlZCwgcm9sbCArMSBIRC4nLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDQ6ICdSZW1lZHknLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDREZXNjcmlwdGlvbjogJ1lvdXIgaGVhbGluZyByZW1vdmVzICsyIHdvdW5kcy4nLFxyXG4gICAgICAgIGFyY2hldHlwZTFTa2lsbDU6ICdCbGVzc2luZycsXHJcbiAgICAgICAgYXJjaGV0eXBlMVNraWxsNURlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ0dhaW4gMSBTdHJlc3MsIHlvdSBhbmQgeW91ciBhbGxpZXMgcmVjZWl2ZSArMiB0byBhbnkgU2F2aW5nIFRocm93IGluIHRoZSBuZXh0IGQ0KzEgdHVybnMuJyxcclxuICAgICAgICBhcmNoZXR5cGUyOiAnU2hhbWFuJyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGwxOiAnU3Bpcml0IEFuaW1hbCcsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsMURlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgJ291IGNhbiB0YWxrIHRvIGJlYXN0cy4gR2FpbiBhIEJ1ZmYgd2hlbiB0YWxraW5nIG9yIGZpZ2h0aW5nIHRoZW0uJyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGwyOiAnQ2hhbmdlbGluZyBTa2luJyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGwyRGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnWW91IG1heSB0cmFuc2Zvcm0gaW50byBhIHNtYWxsIG9yIG1lZGl1bSBhbmltYWwgKDEgSEQpIGZvciA0IHR1cm5zLicsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsMzogJ0ZhY2FkZSBCdXN0ZXInLFxyXG4gICAgICAgIGFyY2hldHlwZTJTa2lsbDNEZXNjcmlwdGlvbjogJ1lvdSBjYW4gcmVjb2duaXplIGFueSBsaWUuJyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGw0OiAnUmFtaWZpY2F0aW9uJyxcclxuICAgICAgICBhcmNoZXR5cGUyU2tpbGw0RGVzY3JpcHRpb246XHJcbiAgICAgICAgICAnWW91IG1heSBwdXQgcm9vdHMgb24gdGhlIGdyb3VuZCBhbmQga25vdyB0aGUgcGFzdCBldmVudHMgb2YgdGhlIHBsYWNlIGluIHRoZSBsYXN0IDEwMCB5ZWFycy4nLFxyXG4gICAgICAgIGFyY2hldHlwZTJTa2lsbDU6ICdGb3VydGggTGV2ZWwgb2YgRGlldCcsXHJcbiAgICAgICAgYXJjaGV0eXBlMlNraWxsNURlc2NyaXB0aW9uOiAnWW91IGFyZW7igJl0IHJlcXVpcmVkIHRvIGVhdCBhbnltb3JlLicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc3RlcDM6IHtcclxuICAgICAgdGl0bGU6ICdTdGVwIDM6IEl0ZW1zJyxcclxuICAgICAgaXRlbXNEZXNjcmlwdGlvbjpcclxuICAgICAgICBcIlJvbGwgdHdpY2Ugb24gdGhlIENvbW1vbiBJdGVtcyB0YWJsZSB1c2luZyB0d28gZDYgYW5kIGNvbWJpbmluZyB0aGUgcmVzdWx0cyAoZDY2KSwgdGhlbiBvbmNlIG9uIHlvdXIgY2hhcmFjdGVyIGNsYXNzIHRhYmxlIHVzaW5nIGEgZDEyLiBBZGQgdGhlIHJvbGxlZCBpdGVtcyBpbiB5b3VyIFBDJ3MgaW52ZW50b3J5IHNsb3RzLlwiLFxyXG4gICAgICBzdGFydGluZ0l0ZW1zRGVzY3JpcHRpb246ICdZb3UgYWxzbyBzdGFydCB3aXRoIDIgU3VwcGxpZXMgYW5kIGEgRGFnZ2VyLicsXHJcbiAgICAgIGNsaWNrT25JdGVtczogJ0NsaWNrIG9uIHRoZSBidXR0b24gdG8gc2VlIHRoZSB0YWJsZScsXHJcbiAgICAgIGl0ZW1zVGFibGVzOiB7XHJcbiAgICAgICAgdGl0bGU6ICdJdGVtIFRhYmxlcycsXHJcbiAgICAgICAgY29tbW9uSXRlbXM6ICdDb21tb24gSXRlbXMgKGQ2NiknLFxyXG4gICAgICAgIHdhcnJpb3JJdGVtczogJ1dhcnJpb3IgSXRlbXMgKGQxMiknLFxyXG4gICAgICAgIGNyb29rSXRlbXM6ICdDcm9vayBJdGVtcyAoZDEyKScsXHJcbiAgICAgICAgbWFnZUl0ZW1zOiAnTWFnZSBJdGVtcyAoZDEyKScsXHJcbiAgICAgICAgemVhbG90SXRlbXM6ICdaZWFsb3QgSXRlbXMgKGQxMiknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHN0ZXA0OiB7XHJcbiAgICAgIHRpdGxlOiAnU3RlcCA0OiBGaW5hbCB0b3VjaGVzJyxcclxuICAgICAgbWlzY0Rlc2NyaXB0aW9uOlxyXG4gICAgICAgICdSb2xsIDJkNiBhbmQgbXVsdGlwbHkgdGhlIHJlc3VsdCBmb3IgNTsgeW91IHN0YXJ0IHdpdGggdGhhdCBtYW55IEdvbGQgUGllY2VzIChHUCkuIEFsc28geW91IGhhdmUgNiBSYXRpb24gU2xvdCBhbmQgc3RhcnQgd2l0aCAyIGZpbGxlZC4gVXNlIHRob3NlIHRvIGtlZXAgdHJhY2sgb2YgZm9vZCB3aGlsZSBhZHZlbnR1cmluZy4gR2l2ZSB5b3VyIFBDIGEgbmFtZSBhbmQgbm8gbW9yZSB0aGFuIDIgbGluZXMgb2YgYmFja3N0b3J5LicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaG93VG9QbGF5OiB7XHJcbiAgICBwbGF5ZXJzQW5kTWFzdGVyOiB7XHJcbiAgICAgIHRpdGxlOiAnUGxheWVycyBhbmQgbmFycmF0b3InLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnT25lIG9mIHRoZSBwbGF5ZXIgd2lsbCBiZSB0aGUgbmFycmF0b3IuIFRoZXkgd2lsbCBjb250cm9sIHRoZSBzZXR0aW5nIGFuZCBub24tcGxheWVyIGNoYXJhY3RlcnMgKE5QQykuIFRoZXkgd2lsbCBkZXNjcmliZSB0aGUgc2l0dWF0aW9ucyBhbmQgaG93IE5QQ3Mgd2lsbCByZWFjdCB0byB0aGUgdGhlbS4gVGhlIG90aGVyIHBsYXllcnMgd2lsbCBjb250cm9sIHRoZWlyIFBsYXllciBDaGFyYWN0ZXIgKFBDKSBhbmQgYWN0IGluIHRoZSBzaXR1YXRpb25zIHRoYXQgYXJlIGdpdmVuIHRvIHRoZW0uJyxcclxuICAgIH0sXHJcbiAgICByb2xsczoge1xyXG4gICAgICB0aXRsZTogJ0FjdGlvbiByb2xscyBhbmQgc2F2aW5nIHRocm93cycsXHJcbiAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgIFwiV2hlbmV2ZXIgYW4gYWN0aW9uJ3MgcmVzdWx0IG9mIFBDcyBvciBOUENzIGlzIHVuY2VydGFpbiwgdGhlIHBsYXllciBvciB0aGUgbmFycmF0b3IgcmVzcGVjdGl2bHkgd2lsbCByb2xsIGEgMmQ2IGFuZCBhZGRzIHRoZSByZWxldmFudCBhdHRyaWJ1dGUgdG8gdGhlIHJlc3VsdC4gQSByZXN1bHQgb3ZlciA5IGlzIGEgc3VjY2Vzcy5cIixcclxuICAgICAgZGVzY3JpcHRpb24yOlxyXG4gICAgICAgICdUaGUgbmFycmF0b3IgY2FuIGFzayBhIHBsYXllciB0byBzZWUgaWYgdGhlaXIgY2hhcmFjdGVyIGNhbiByZXNpc3RzIGFuIGVmZmVjdCBvciByZWFjdCBxdWlja2x5IGVub3VnaCBmcm9tIGEgZGFuZ2VyIG9yIGhhcm0uIFRoZXNlIHJvbGxzIGFyZSBkZWZpbmVkIGFzIHNhdmluZyB0aHJvd3MuJyxcclxuICAgICAgb3Bwb3NlZFJvbGxzVGl0bGU6ICdPcHBvc2VkIHJvbGxzJyxcclxuICAgICAgb3Bwb3NlZFJvbGxzRGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJXaGVuZXZlciBhIFBDJ3MgYWN0aW9uIGlzIGNvbnRyYXN0ZWQgYnkgYSBOUEMgb3IgYW5vdGhlciBQQywgdGhlbiBib3RoIHBhcnRpZXMgcm9sbCBhIDJkNiBhbmQgYWRkIHRoZSByZWxldmFudCBhdHRyaWJ1dGUgKE5QQ3MgdXNlIFNraWxsKS4gSW5zdGVhZCBvZiByZWFjaGluZyBhIHJlc3VsdCBvdmVyIDksIHRoZSBzaWRlIHdpdGggdGhlIGhpZ2hlc3QgcmVzdWx0cyB3aW5zLiBJZiB0aGUgcmVzdWx0IGlzIGEgdGllZCwgdGhlIG5hcnJhdG9yIGNob29zZXMgd2hpY2ggc2lkZSB3aW5zLlwiLFxyXG4gICAgICBib251c0FuZE1hbHVzVGl0bGU6ICdCb251cyBhbmQgbWFsdXMnLFxyXG4gICAgICBib251c0FuZE1hbHVzRGVzY3JpcHRpb246XHJcbiAgICAgICAgJ0luIHNvbWUgc2l0dWF0aW9uLCBhIFBDIG5lZWRpbmcgdG8gbWFrZSBhbiBhY3Rpb24gcm9sbCBtaWdodCBiZSBpbiBhbiBmYXZvcmFibGUgb3IgZGlzYWR2YW50YWdlb3VzIHBvc2l0aW9uLiBJbiB0aGVzZSBjYXNlIGEgUEMgY2FuIHJlY2VpdmUgQm9udXMgb3IgTWFsdXMgcmVzcGVjdGl2bHkgb24gc2FpZCBhY3Rpb24gcm9sbC4nLFxyXG4gICAgICBib251c0FuZE1hbHVzRGVzY3JpcHRpb24yOlxyXG4gICAgICAgICdJZiB5b3UgaGF2ZSBtb3JlIEJvbnVzIHRoYW4gTWFsdXMsIHlvdSByb2xsIHR3aWNlIGFuZCB0YWtlIHRoZSBoaWdoZXIgcmVzdWx0LiBJZiB5b3UgaGF2ZSBtb3JlIE1hbHVzLCB5b3Ugcm9sbCB0d2ljZSBhbmQgdGFrZSB0aGUgbG93ZXN0IHJlc3VsdC4gSWYgdGhlc2UgYXJlIHRpZWQgb3IgeW91IGhhdmUgbm9uZSBvZiBlaXRoZXIsIHlvdSBqdXN0IHJvbGwgb25jZS4nLFxyXG4gICAgfSxcclxuICAgIGludmVudG9yeUFuZFN0cmVzczoge1xyXG4gICAgICB0aXRsZTogJ0ludmVudG9yeSBhbmQgc3RyZXNzJyxcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgJ0EgUEMgaGFzIDEwICsgU1RSIGludmVudG9yeSBzbG90cy4gSXRlbXMgY2FuIHRha2UgMSBvciBtb3JlIG9mIHRoZW0sIHNvbWUgbWlnaHQgYmUgc3RhY2tlZCB1cCB0byBhIGRlZmluZWQgcXVhbnRpdHkgaW4gYSBzaW5nbGUgc2xvdC4gWW91IGNhbiBoYXZlIG9ubHkgb25lIHR5cGUgb2YgaXRlbSBpbiB0aGUgc2FtZSBpbnZlbnRvcnkgc2xvdCwgdW50aWwgaXQgZ2V0cyBlbXB0aWVkIGFnYWluLicsXHJcbiAgICAgIGRlc2NyaXB0aW9uMjpcclxuICAgICAgICAnU29tZSBhY3Rpb25zIG9yIHNpdHVhdGlvbnMgY2FuIGNhdXNlIGEgUEMgdG8gcmVjZWl2ZSBTdHJlc3MuIEVhY2ggaW5zdGFuY2Ugb2YgU3RyZXNzIHRha2VzIHVwIGFuIGludmVudG9yeSBzbG90LicsXHJcbiAgICAgIGRlc2NyaXB0aW9uMzpcclxuICAgICAgICAnQSBQQyBjYW5ub3QgY2FycnkgbW9yZSBpdGVtcyBvci9hbmQgc3RyZXNzIHRoYW4gdGhlaXIgaW52ZW50b3J5IHNsb3RzIGFsbG93LicsXHJcbiAgICAgIGRlc2NyaXB0aW9uNDpcclxuICAgICAgICAnU3BlbmRpbmcgYSBkYXkgcmVzdGluZyBpbiBhIHNhZmUgbG9jYXRpb24gcmVtb3ZlcyBhbGwgc3RyZXNzLicsXHJcbiAgICAgIHB1c2hpbmdUaXRsZTogJ1B1c2hpbmcgYSBjaGFyYWN0ZXInLFxyXG4gICAgICBwdXNoaW5nRGVzY3JpcHRpb246XHJcbiAgICAgICAgJ1doZW5ldmVyIGEgUEMgbWFrZXMgYW4gYWN0aW9uIHJvbGwgd2hpbGUgaGF2aW5nIGEgZW1wdHkgaW52ZW50b3J5IHNsb3QsIHRoZWlyIHBsYXllciBtYXkgY2hvb3NlIHRvIHB1c2ggdGhlaXIgY2hhcmFjdGVyIGJ5IHRha2luZyBhIFN0cmVzcy4gSWYgdGhleSBkbyBzbywgdGhleSByZWNlaXZlIGEgQm9udXMgdG8gdGhhdCByb2xsLicsXHJcbiAgICAgIHB1c2hpbmdEZXNjcmlwdGlvbjI6XHJcbiAgICAgICAgJ0EgUEMgbWF5IGJlIHB1c2hlZCBhcyBtYW55IHRpbWUgYXMgdGhlIGludmVudG9yeSBzbG90IHRoZXkgaGF2ZSBsZWZ0LCBldmVuIGluIHRoZSBzYW1lIHJvbGwuJyxcclxuICAgIH0sXHJcbiAgICB0aW1lOiB7XHJcbiAgICAgIHRpdGxlOiAnVGltZScsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiAnVGltZSBpcyB0cmFja2VkIHVzaW5nIHRocmVlIG1lYXN1cmVtZW50czonLFxyXG4gICAgICBkZXNjcmlwdGlvblJvdW5kOlxyXG4gICAgICAgICdSb3VuZCAtIDEwIHNlY29uZHMgaW4tZ2FtZSwgdXNlZCBkdXJpbmcgY29tYmF0LiBBIHJvdW5kIGlzIGVub3VnaCB0aW1lIGZvciBhIFBDIHRvIHBlcmZvcm0gYW4gYWN0aW9uIGxpa2UgY2FzdGluZyBhIHNwZWxsIG9yIGF0dGFja2luZy4nLFxyXG4gICAgICBkZXNjcmlwdGlvblR1cm46XHJcbiAgICAgICAgJ1R1cm4gLSAxMCBtaW51dGVzIGluLWdhbWUsIHVzZWQgd2hpbGUgZXhwbG9yaW5nIGFuIGFkdmVudHVyaW5nIHNpdGUuIEEgdHVybiBpcyBlbm91Z2ggdGltZSBmb3IgYSBwYXJ0eSBvZiBQQ3MgdG8gc2VhcmNoIGEgZHVuZ2VvbiByb29tLCBwaWNrIGEgbG9jayBvciBkbyBhbnkgb3RoZXIgc2lnbmlmaWNhbnQgYWN0aXZpdHkuJyxcclxuICAgICAgZGVzY3JpcHRpb25XYXRjaDpcclxuICAgICAgICAnV2F0Y2ggLSA0LzYgaG91cnMgaW4tZ2FtZSwgdXNlZCB3aGVuIHRyYXZlbGxpbmcgdGhlIG92ZXJ3b3JsZC4gQSB3YXRjaCBpcyBlbm91Z2ggdGltZSBmb3IgYSBwYXJ0eSB0byB0cmF2ZWwgYWJvdXQgNiBtaWxlcyBieSBmb290IG9yIDEyIG1pbGVzIGJ5IGhvcnNlIG9yIHNpbWlsYXIgbW91bnRzLCBodW50IGZvciBmb29kLCBvciBleHBsb3JlIHRoZSBhcmVhIGFyb3VuZCB0aGVtLiBFYWNoIHdhdGNoLCB0aGUgR00gcm9sbHMgYSBkNiB0byBkZXRlcm1pbmUgaWYgYSByYW5kb20gZW5jb3VudGVyIG9jY3VycywgYXMgYWJvdmUuJyxcclxuICAgICAgcmF0aW9uRGVzY3JpcHRpb246XHJcbiAgICAgICAgJ1doZW4gZXhwbG9yaW5nIHRoZSBvdmVyd29ybGQsIHlvdSBuZWVkIHRvIGNvbnN1bWUgYSByYXRpb24gYW5kIHRha2UgYSB3YXRjaC1sb25nIHJlc3QgZXZlcnkgMiB3YXRjaGVzLiBXaGVuIGV4cGxvcmluZyBhbiBhZHZlbnR1cmluZyBzaXRlLCB5b3UgbmVlZCB0byBjb25zdW1lIGEgcmF0aW9uIGFuZCB0YWtlIGEgdHVybi1sb25nIHJlc3QgZXZlcnkgNiB0dXJucy4nLFxyXG4gICAgICBleGhhdXN0RGVzY3JpcHRpb246XHJcbiAgICAgICAgJ0lmIHlvdXIgUEMgcHVzaGVzIG9uIHdpdGhvdXQgdGFraW5nIGEgcmVzdCwgeW91ciBQQyBzdWZmZXJzIGEgTWFsdXMgb24gZXZlcnkgcm9sbCB0aGV5IG1ha2UuIElmIHlvdSBwdXNoIHlvdXIgUEMgZXZlbiBmdXJ0aGVyICg0IHdhdGNoZXMgb3IgMTAgdHVybnMgd2l0aG91dCByZXN0aW5nKSB5b3UgdGFrZSAyIG5vbi1sZXRoYWwgd291bmQuIEZyb20gdGhhdCBwb2ludCBvbiwgZXZlcnkgd2F0Y2ggb3IgZXZlcnkgMiB0dXJucyB3aXRob3V0IHJlc3QgeW91IHRha2UgYSB3b3VuZCBhbmQgcm9sbCBmb3IgZGFtYWdlIGV2ZXJ5IHRpbWUuJyxcclxuICAgIH0sXHJcbiAgICBleHBsb3JhdGlvbkNsb2NrOiB7XHJcbiAgICAgIHRpdGxlOiAnRXhwbG9yYXRpb24gY2xvY2snLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAnQXMgdGhlIG5hcnJhdG9yLCB3aGlsZSB0aGUgcGFydHkgYWR2ZW50dXJlcyBvdXRkb29ycyBvciBpbiBhbiBhZHZlbnR1cmluZyBzaXRlLCBwcmVwYXJlIGEgZDIwIGFuZCBhIHJhbmRvbSBlbmNvdW50ZXJzIHRhYmxlLiBZb3UgbWF5IGtlZXAgdGhlIGQyMCBoaWRkZW4gb3Igc2hvdyBpdCB0byB0aGUgcGxheWVycy4nLFxyXG4gICAgICBkZXNjcmlwdGlvbjI6XHJcbiAgICAgICAgJ1doZW5ldmVyIGEgd2F0Y2ggb3IgYSB0dXJuIHBhc3Nlcywgcm9sbCBhIGQ2IGFuZCBzdWJ0cmFjayB0aGUgcmVzdWx0IHRvIHRoZSBkMjAuIElmIHRoZSByZXN1bHRzIGlzIDYsIHJvbGwgYWdhaW4uIFdoZW5ldmVyIHRoZSBkMjAgcmVhY2hlcyAwIG9yIGxvd2VyLCBhIHJhbmRvbSBlbmNvdW50ZXIgaGFwcGVuczsgcm9sbCBvbiB0aGUgdGFibGUgYW5kIG1ha2UgdGhlIFBDcyBzdHVtYmxlIGludG8gaXQuIElmIHRoZSBkMjAgcmVhY2hlcyAzIGluc3RlYWQsIHlvdSBzaG93IHRoZSBwbGF5ZXJzIGFuIG9tZW4gb2YgdGhlIHJhbmRvbSBlbmNvdW50ZXIuJyxcclxuICAgIH0sXHJcbiAgICBleHBlcmllbmNlOiB7XHJcbiAgICAgIHRpdGxlOiAnRXhwZXJpZW5jZSBhbmQgSGl0IERpY2UnLFxyXG4gICAgICBnYWluaW5nRXhwZXJpZW5jZURlc2NyaXB0aW9uOlxyXG4gICAgICAgICdBdCB0aGUgZW5kIG9mIHRoZSBzZXNzaW9uLCB0aGUgbmFycmF0b3IgcmV3YXJkcyBlYWNoIFBDIFhQIFBvaW50cywgYmFzZWQgb24gdGhlIGdvbGQgdmFsdWUgb2YgZXZlcnkgbm9uLW1hZ2ljYWwgdHJlYXN1cmUgdGhleSBicm91Z2h0IGF0IGEgc2FmZSBwb2ludCBvciBoYXZlIHNwZW50ICgxIEdQID0gMSBYUCkuIEFsc28gYSBjaGFyYWN0ZXIgZ2FpbnMgMjUgWFAgcGVyIGV2ZXJ5IE5QQyBIaXQgRGllIG9mIGV2ZXJ5IGVuZW15IHRoZSBncm91cCBoYXMgZGVmZWF0ZWQsIG91dHNtYXJ0ZWQgb3IgZmVsbGVkLicsXHJcbiAgICAgIGxldmVsVXBEZXNjcmlwdGlvbjpcclxuICAgICAgICAnV2hlbiBhIFBDIGdhaW5zIFhQIGVxdWFsIG9yIGhpZ2hlciB0aGFuIDEwMDAgcGVyIHRoZWlyIGN1cnJlbnQgSEQsIHRoZXkgc3BlbnQgdGhhdCBhbW91bnQgYXV0b21hdGljYWxseSBhbmQgZ2FpbiBhIG5ldyBIRC4nLFxyXG4gICAgICBsZXZlbFVwRGVzY3JpcHRpb24yOlxyXG4gICAgICAgIFwiV2hlbiB0aGUgSEQgcXVhbnRpdHkgaW5jcmVhc2VzLCBhIFBDIGdhaW5zIHRoZSBjbGFzcycgc2tpbGwgcmVsYXRpdmUgdG8gdGhhdCBIRC4gSWYgaXQncyBhbiBvZGQgSEQgdGhleSBhbHNvIGluY3JlYXNlIG9uZSBhdHRyaWJ1dGUgYnkgMSBwb2ludC4gTm8gYXR0cmlidXRlIGNhbiBiZSBoaWdoZXIgdGhhbiA2XCIsXHJcbiAgICAgIHJldGlyZURlc2NyaXB0aW9uOlxyXG4gICAgICAgICdBIFBDIGNhbm5vdCBoYXZlIG1vcmUgdGhhbiAxMiBIRC4gSWYgdGhleSB3ZXJlIHRvIGdhaW4gdGhlaXIgdGhpcnRlZW50aCBIaXQgRGllIHRoZXkgcmV0aXJlIGZyb20gYWR2ZW50dXJpbmcuJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtYWdpYzoge1xyXG4gICAgc3BlbGxMaXN0OiB7XHJcbiAgICAgIGxldmVsMDoge1xyXG4gICAgICAgIGFuaW1hdGVBcm1vcjoge1xyXG4gICAgICAgICAgbmFtZTogJ0xpdmluZyBhcm1vcicsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ0FuaW1hdGUgYSBzZXQgb2YgYXJtb3IuIEl0IGJlY29tZXMgYSBOUEMgKFNraWxsIDA7IEhEIDApIHdpdGggYXJtb3IgdmFsdWUgZXF1YWxzIHRvIHRoZSBvbmUgb2YgdGhlaXIgYXJtb3IuJyxcclxuICAgICAgICAgIGZ1bWJsZTogJ1RoZSBzZXQgb2YgYXJtb3IgYmVjb21lcyBhIHNtaWxpbmcgcGx1c2hpZS4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGxldmVsMjoge1xyXG4gICAgICAgIHNoYWRvd0NsYXc6IHtcclxuICAgICAgICAgIG5hbWU6ICdTaGFkb3cgQ2xhdycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ1VwIHRvIE1HIHRhcmdldHMgbWFrZSBhbiBvcHBvc2VkIHJvbGwgYWdhaW5zdCB0aGUgY2FzdGVyIFdJTC4gSWYgdGhleSBmYWlsLCB0aGV5IGFyZSBncmFiYmVkIGJ5IGNsYXdzIGZyb20gdGhlIGdyb3VuZCBhbmQgcmVtYWluIHN0dWNrIGZvciBkNCsxIHJvdW5kcy4nLFxyXG4gICAgICAgICAgZnVtYmxlOiAnJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBsZXZlbDM6IHtcclxuICAgICAgICBjaGFybToge1xyXG4gICAgICAgICAgbmFtZTogJ0NoYXJtJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnVGhlIHRhcmdldCBtYWtlcyBhbiBvcHBvc2VkIHJvbGwgYWdhaW5zdCB0aGUgY2FzdGVyIFdJTC4gSWYgdGhleSBmYWlsLCB0aGV5IGJlY29tZSBmcmllbmRseSBhbmQgaHVtYmxlIHRvd2FyZHMgdGhlIGNhc3Rlci4gSWYgdGhlIHRhcmdldCBIRCBpcyBsb3dlciB0aGFuIHRoZSBjYXN0ZXIgTUcsIHRoZSB0YXJnZXQgaXMgYXV0b21hdGljYWxseSBjaGFybWVkIGluc3RlYWQuJyxcclxuICAgICAgICAgIGZ1bWJsZTogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpdGVtczoge1xyXG4gICAgaXRlbUxpc3Q6IHtcclxuICAgICAgYXJtb3JzOiB7XHJcbiAgICAgICAgbGlnaHRBcm1vcjoge1xyXG4gICAgICAgICAgbmFtZTogJ0xpZ2h0IGFybW9yJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnMyBBcm1vciBTbG90czsgMSBJbnZlbnRvcnkgU2xvdDsgMjAgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lZGl1bUFybW9yOiB7XHJcbiAgICAgICAgICBuYW1lOiAnTWVkaXVtIGFybW9yJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNSBBcm1vciBTbG90czsgMiBJbnZlbnRvcnkgU2xvdDsgNTAgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYXZ5QXJtb3I6IHtcclxuICAgICAgICAgIG5hbWU6ICdIZWF2eSBhcm1vcicsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJzcgQXJtb3IgU2xvdHM7IDMgSW52ZW50b3J5IFNsb3Q7IDIwMCBHUC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hpZWxkOiB7XHJcbiAgICAgICAgICBuYW1lOiAnU2hpZWxkJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnUmVkdWNlcyBpbmNvbWluZyBkYW1hZ2UgYnkgMTsgMSBJbnZlbnRvcnkgU2xvdDsgMTAgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNwaWt5U2hpZWxkOiB7XHJcbiAgICAgICAgICBuYW1lOiAnU3Bpa3kgU2hpZWxkJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnUmVkdWNlcyBpbmNvbWluZyBkYW1hZ2UgYnkgMSwgZGVhbHMgMSBkYW1hZ2UgdG8gYW55IG1lbGVlIGF0dGFja2VyOyAxIEludmVudG9yeSBTbG90OyAzMCBHUC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVuYWNpbmdIZWxtOiB7XHJcbiAgICAgICAgICBuYW1lOiAnTWVuYWNpbmcgSGVsbScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJSZWR1Y2VzIGVuZW1pZXMnIE1vcmFsZSBieSAxOyAxIEludmVudG9yeSBTbG90OyA0MCBHUC5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRyYWdvbnNraW5DYXBlOiB7XHJcbiAgICAgICAgICBuYW1lOiAnRHJhZ29uc2tpbiBDYXBlJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnSGFsdmVuIGFsbCBmaXJlIGFuZCBjb2xkIGRhbWFnZSByZWNlaXZlZDsgMSBJbnZlbnRvcnkgU2xvdDsgNDAgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhpZGRlblBvY2tldFJvYmVzOiB7XHJcbiAgICAgICAgICBuYW1lOiAnSGlkZGVuLXBvY2tldCByb2JlcycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ1lvdSBjYW4gaGlkZSBpbnNpZGUgaXQgMiBzbG90IHdvcnRoIG9mIG5vbi1hcm1vciBpdGVtczsgMSBJbnZlbnRvcnkgU2xvdDsgNTAgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpbHZlclNuYWtlQ2FwZToge1xyXG4gICAgICAgICAgbmFtZTogJ1NpbHZlciBzbmFrZSBjYXBlJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnWW91IGdhaW4gYSBCb251cyBlYWNoIHRpbWUgeW91IHJvbGwgYSBTYXZpbmcgVGhyb3cgb24gV0lMOyAxIEludmVudG9yeSBTbG90OyA0MCBHUC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHdlYXBvbnM6IHtcclxuICAgICAgICBzd29yZDoge1xyXG4gICAgICAgICAgbmFtZTogJ1N3b3JkJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNCBEYW1hZ2U7IDIgSW52ZW50b3J5IFNsb3Q7IDEwIEdQLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBheGU6IHtcclxuICAgICAgICAgIG5hbWU6ICdBeGUnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICc0IERhbWFnZTsgMiBJbnZlbnRvcnkgU2xvdDsgMTAgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hY2U6IHtcclxuICAgICAgICAgIG5hbWU6ICdNYWNlJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNCBEYW1hZ2U7IDIgSW52ZW50b3J5IFNsb3Q7IDEwIEdQLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmVhdHN3b3JkOiB7XHJcbiAgICAgICAgICBuYW1lOiAnR3JlYXRzd29yZCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJzUgRGFtYWdlLCB0d28taGFuZGVkOyAzIEludmVudG9yeSBTbG90OyAxNSBHUC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2FyaGFtbWVyOiB7XHJcbiAgICAgICAgICBuYW1lOiAnV2FyaGFtbWVyJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnNSBEYW1hZ2UsIHR3by1oYW5kZWQ7IDMgSW52ZW50b3J5IFNsb3Q7IDE1IEdQLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGFmZjoge1xyXG4gICAgICAgICAgbmFtZTogJ1N0YWZmJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnMyBEYW1hZ2UsIHR3by1oYW5kZWQsIHJvbGwgb24gV0lMIHRvIGF0dGFjazsgMiBJbnZlbnRvcnkgU2xvdDsgMTUgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvdzoge1xyXG4gICAgICAgICAgbmFtZTogJ0JvdycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogJzMgRGFtYWdlLCB0d28taGFuZGVkLCByYW5nZWQ7IDIgSW52ZW50b3J5IFNsb3Q7IDM1IEdQJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyb3NzYm93OiB7XHJcbiAgICAgICAgICBuYW1lOiAnQ3Jvc3Nib3cnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246ICc0IERhbWFnZSwgdHdvLWhhbmRlZCwgcmFuZ2VkOyAzIEludmVudG9yeSBTbG90OyAzMCBHUCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBibG93UGlwZToge1xyXG4gICAgICAgICAgbmFtZTogJ0Jsb3dwaXBlJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnMiBEYW1hZ2UsIHJhbmdlZDsgMSBJbnZlbnRvcnkgU2xvdDsgMiBHUCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcm93YmFyOiB7XHJcbiAgICAgICAgICBuYW1lOiAnQ3Jvd2JhcicsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJzMgRGFtYWdlLCBnYWluIGEgQm9udXMgd2hlbiBvcGVuaW5nIGNoZXN0IHdpdGggaXQ7IDEgSW52ZW50b3J5IFNsb3Q7IDEwIEdQJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpbHZlckRhZ2dlcjoge1xyXG4gICAgICAgICAgbmFtZTogJ1NpbHZlciBkYWdnZXInLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICczIERhbWFnZSwgY2FuIGRhbWFnZSBtb25zdGVyIGltbXVuZSB0byBwaHlzaWNhbCBkYW1hZ2U7IDEgSW52ZW50b3J5IFNsb3Q7IDMwIEdQJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBpa2U6IHtcclxuICAgICAgICAgIG5hbWU6ICdQaWtlJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnNCBkYW1hZ2UsIGVuZW1pZXMgbmVlZCB0byByZXJvbGwgU1RSIHRvIGNvdW50ZXJhdHRhY2sgeW91LCB0d28taGFuZGVkOyAyIEludmVudG9yeSBTbG90OyAyMCBHUC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFsYmVyZDoge1xyXG4gICAgICAgICAgbmFtZTogJ0hhbGJlcmQnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICc1IGRhbWFnZSwgZW5lbWllcyBuZWVkIHRvIHJlcm9sbCBTVFIgdG8gY291bnRlcmF0dGFjayB5b3UsIHR3by1oYW5kZWQ7IDMgSW52ZW50b3J5IFNsb3Q7IDI1IEdQLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgY29uc3VtYWJsZXM6IHtcclxuICAgICAgICBzdXBwbGllczoge1xyXG4gICAgICAgICAgbmFtZTogJ1N1cHBseScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ0NhbiBiZSBleGNoYW5nZWQgZm9yIDMgUmF0aW9ucyBvciBiYXNpYyBzdXJ2aXZhbCB0b29sczsgNSBwZXIgSW52ZW50b3J5IFNsb3Q7IDUgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFtbW86IHtcclxuICAgICAgICAgIG5hbWU6ICdBbW1vJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnUmVxdWlyZWQgdG8gZmlyZSBzcGVjaWZpYyB3ZWFwb25zIChyb2xsIGF0IHRoZSBlbmQgb2YgY29tYmF0LCBpZiB5b3Ugcm9sbCAxLCB5b3Ugb25seSBoYXZlIDEgc2hvdCBsZWZ0KTsgMSBJbnZlbnRvcnkgU2xvdDsgNSBHUCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzY3JvbGw6IHtcclxuICAgICAgICAgIG5hbWU6ICdTY3JvbGwnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgIFwiQ2FuIGJlIHVzZWQgdG8gY2FzdCB0aGUgZm9sbG93aW5nIHNwZWxsOiBbU1BFTExfREVTQ1JJUFRJT05dIDEgSW52ZW50b3J5IFNsb3Q7IGNoZWNrIHNjcm9sbHMnIHByaWNlcy5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvaXNvblZpYWw6IHtcclxuICAgICAgICAgIG5hbWU6ICdQb2lzb24gVmlhbCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ0lmIGluamVjdGVkIG9yIGluZ2VzdGVkLCB0aGUgdGFyZ2V0IG5lZWRzIHRvIHN1Y2NlZWQgYSBTYXZpbmcgVGhyb3cgb24gU1RSIG9yIGRpZTsgMyBwZXIgSW52ZW50b3J5IFNsb3Q7IDM1IEdQLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnZpc2liaWxpdHlQb3Rpb246IHtcclxuICAgICAgICAgIG5hbWU6ICdJbnZpc2liaWxpdHkgUG90aW9uJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnSWYgZHJhbmssIGJlY29tZSB0cmFuc3BhcmVudCBmb3IgMmQ0IHJvdW5kczsgMSBJbnZlbnRvcnkgU2xvdDsgNjAgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvbWI6IHtcclxuICAgICAgICAgIG5hbWU6ICdCb21iJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnRXhwbG9kZSBpbiBhIGFyZWEgYW5kIGRlYWxzIDkgZGFtYWdlIHRvIHRob3NlIHJlYWNoZWQgYnkgdGhlIGV4cGxvc2lvbjsgMSBJbnZlbnRvcnkgU2xvdDsgMjUgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJpZnRTaHJvb206IHtcclxuICAgICAgICAgIG5hbWU6ICdSaWZ0IFNocm9vbScsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ1doZW4gZWF0aW5nLCB0aGV5IHJlbW92ZSAxIFN0cmVzczsgMyBwZXIgSW52ZW50b3J5IFNsb3Q7IDEwIEdQLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aW9sZXRJbmNlbnNlOiB7XHJcbiAgICAgICAgICBuYW1lOiAnVmlvbGV0IEluY2Vuc2UnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdPbmNlIGJ1cm50LCBncmFudHMgYSBCb251cyBhdCBjYXN0aW5nIHNwZWxscyB0byBhbnlib2R5IGJyZWF0aGluZyBpdDsgMyBwZXIgSW52ZW50b3J5IFNsb3Q7IDE1IEdQLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0YWxraW5nVG91bmdlOiB7XHJcbiAgICAgICAgICBuYW1lOiAnVGFsa2luZyB0b3VuZ2UnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdXaGVuIGVhdGVuLCB5b3UgY2FuIHNwZWFrIGFuZCBsaXN0ZW4gdG8gYW55IGxhbmd1YWdlIGZvciBhIGRheTsgNiBwZXIgSW52ZW50b3J5IFNsb3Q7IDggR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWx0aFRvbmljOiB7XHJcbiAgICAgICAgICBuYW1lOiAnSGVhbHRoIHRvbmljJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ3VyZXMgNiB3b3VuZHM7IDEgSW52ZW50b3J5IFNsb3Q7IDYwIEdQLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzYWludFdhdGVyRmxhc2s6IHtcclxuICAgICAgICAgIG5hbWU6ICdTYWludCB3YXRlciBmbGFza3MnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdEZWFscyA0IGRhbWFnZSB0byB1bmRlYWQgb3IgdW5ob2x5IGNyZWF0dXJlczsgMiBwZXIgSW52ZW50b3J5IFNsb3Q7IDE1IEdQLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmF5U3RvbmU6IHtcclxuICAgICAgICAgIG5hbWU6ICdQcmF5IHN0b25lJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICBcIldoZW4gYnJva2VuLCBkZWFscyA2IGRhbWFnZSB0byBldmVyeWJvZHkgbmVhcmJ5IHRoZSBjYXN0ZXIgKHRoZSBjYXN0ZXIgaXNuJ3QgZGFtYWdlZCk7IDEgcGVyIEludmVudG9yeSBTbG90OyAzMCBHUC5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFudGlncmF2ZU9pbERvc2U6IHtcclxuICAgICAgICAgIG5hbWU6ICdBbnRpLWdyYXZlIG9pbCBkb3NlJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnQSB3ZWFwb24gaW1idWVkIHdpdGggdGhpcyBkZWFscyAyIG1vcmUgZGFtYWdlIHRvIHVuZGVhZCBvciB1bmhvbHkgY3JlYXR1cmVzOyAzIHBlciBJbnZlbnRvcnkgU2xvdDsgMTUgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBtaXNjOiB7XHJcbiAgICAgICAgYmVhclRyYXA6IHtcclxuICAgICAgICAgIG5hbWU6ICdCZWFyIHRyYXAnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdEZWFscyAzIGRhbWFnZSB3aGVuIHN0ZXBwZWQgb25lLiBUaGUgdmljdGltIGlzIHN0dWNrIHVudGlsIHRoZXkgdGFrZSBhIHJvdW5kIHRvIHJlbW92ZSBpdDsgMSBJbnZlbnRvcnkgU2xvdDsgMjUgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9ic2lkaWFuR2xhc3M6IHtcclxuICAgICAgICAgIG5hbWU6ICdPYnNpZGlhbiBHbGFzcycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ0FsbG93cyB0byBzZWUgcGVyZmVjdGx5IGluIGRhcmtuZXNzIGlmIGxvb2sgdGhyb3VnaCBpdDsgMSBJbnZlbnRvcnkgU2xvdDsgMzUgR1AuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNyeXN0YWxCYWxsOiB7XHJcbiAgICAgICAgICBuYW1lOiAnQ3J5c3RhbCBiYWxsJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnT25jZSBhIGRheSwgeW91IG1heSBmb2N1cyBvbiBhIHBsYWNlIHlvdSBoYXZlIGJlZW4gdG8uIFlvdSBoYXZlIGEgMzYwIHZpZXcgb2YgdGhhdCBwbGFjZSBmb3IgYSB0dXJuOyAxIEludmVudG9yeSBTbG90OyA1MCBHUC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcGhlY3lCb29rOiB7XHJcbiAgICAgICAgICBuYW1lOiAnUHJvcGhlY3kgYm9vaycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ0Jvb2sgZmlsbGVkIHdpdGggZmFudGFzeSBvZiBtYWRtZW4gYW5kIHByb3BoZXRzLiBTb21lIHBlb3BsZSBnZXRzIGEgYml0IHRvbyBhdHRhY2hlZCB0byB0aGVzZTsgMSBJbnZlbnRvcnkgU2xvdDsgNSBHUC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3JhY2xlQm9uZXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdPcmFjbGUgYm9uZXMnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgIFwiQ2FuIGJlIHVzZWQgdG8gY29tbXVuZSB3aXRoIGEgemVhbG90J3MgZ29kOyAxIEludmVudG9yeSBTbG90OyAwIEdQLlwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd2hpc3BlclNrdWxsOiB7XHJcbiAgICAgICAgICBuYW1lOiAnV2hpc3BlciBza3VsbCcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ0NhbiByZWdpc3RlciBhbmQgcmVwcm9kdWNlIHNtYWxsIG1lc3NhZ2U7IDEgSW52ZW50b3J5IFNsb3Q7IDIwIEdQLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bm9wZW5lZExldHRlcjoge1xyXG4gICAgICAgICAgbmFtZTogJ1Vub3BlbmVuZCBsZXR0ZXInLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgIFwiQSBtZXNzYWdlIGZyb20gYSBsb3ZlZCBvbmUgeW91IGhhdmVuJ3QgZ290IHRoZSBndXRzIHRvIG9wZW4geWV0OyA1IHBlciBJbnZlbnRvcnkgU2xvdDsgaW52YWx1YWJsZSB0byB5b3UsIHdvcnRobGVzcyB0byBvdGhlcnMuXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcHlnbGFzczoge1xyXG4gICAgICAgICAgbmFtZTogJ1NweWdsYXNzJyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAgICAgICAnQWxsb3dzIHRvIHdhdGNoIHVwIHRvIGEgMTAwIG1ldGVycyBhd2F5OyAxIEludmVudG9yeSBTbG90OyAxMCBHUC4nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsT2ZDaG9pY2U6IHtcclxuICAgICAgICAgIG5hbWU6ICdTY3JvbGwgb2YgeW91ciBjaG9pY2UnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgIFwiU2Nyb2xsIHdpdGggYSBTcGVsbCBvZiBMZXZlbCAwLCAxIG9yIDIgb2YgeW91ciBjaG9pY2U7IDEgSW52ZW50b3J5IFNsb3Q7IGNoZWNrIHNjcm9sbHMnIHByaWNlcy5cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0V2l0aEFTcGVsbDoge1xyXG4gICAgICAgICAgbmFtZTogJ1lvdSBrbm93IGEgc3BlbGwnLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgICAgICdTdGFydCB0aGUgZ2FtZSB3aXRoIGEgU3BlbGwgb2YgTGV2ZWwgMCBvciAxIG9mIHlvdXIgY2hvaWNlLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgcGV0czoge1xyXG4gICAgICAgIHdhcmRvZzoge1xyXG4gICAgICAgICAgbmFtZTogJ1dhcmRvZycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ0EgZmVyb2NpdXMgYnV0IGZhaXRoZnVsIGNvbXBhbmlvbiAoU2tpbGwgMywgSEQgMiwgQXRrOiBCaXRlIC0gMyBkYW5uaSkuJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbmdlZEhvbXVuY3VsdXM6IHtcclxuICAgICAgICAgIG5hbWU6ICdXaW5nZWQgSG9tdW5jdWx1cycsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICAgICAgJ0Egc21hbGwgYnV0IGNvd2FyZGx5IGNyaXR0ZXIgKFNraWxsIDIsIEhEIDEsIEF0azogTGVlciAtIDIgZGFubmk7IGNhbiBmbHkpLicsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLy8gVGhpcyBpcyBqdXN0IGFuIGV4YW1wbGUsXHJcbi8vIHNvIHlvdSBjYW4gc2FmZWx5IGRlbGV0ZSBhbGwgZGVmYXVsdCBwcm9wcyBiZWxvd1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHRpdGxlOiAnVGVzb3JpIGUgSW1wYXZpZGknLFxyXG4gIG1lbnU6IHtcclxuICAgIGNoYXJhY3RlckNyZWF0aW9uOiAnQ3JlYXppb25lIHBlcnNvbmFnZ2lvJyxcclxuICAgIGhvd1RvUGxheTogJ0NvbWUgZ2lvY2FyZScsXHJcbiAgfSxcclxuICBjaGFyYWN0ZXJDcmVhdGlvbjoge1xyXG4gICAgc3RhdHNEZXNjcmlwdGlvbjpcclxuICAgICAgJ09nbmkgcGVyc29uYWdnaW8gZ2lvY2FudGUgKFBHKSBoYSBsZSBzZWd1ZW50aSAzIHN0YXRpc3RpY2hlOicsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IGVuIGZyb20gJy4vZW4nO1xyXG5pbXBvcnQgaXQgZnJvbSAnLi9pdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgJ2VuLVVTJzogZW4sXHJcbiAgJ2l0LUlUJzogaXQsXHJcbn07XHJcbiIsImltcG9ydCB7IGJvb3QgfSBmcm9tICdxdWFzYXIvd3JhcHBlcnMnO1xyXG5pbXBvcnQgeyBjcmVhdGVJMThuIH0gZnJvbSAndnVlLWkxOG4nO1xyXG5cclxuaW1wb3J0IG1lc3NhZ2VzIGZyb20gJ3NyYy9pMThuJztcclxuXHJcbmV4cG9ydCB0eXBlIE1lc3NhZ2VMYW5ndWFnZXMgPSBrZXlvZiB0eXBlb2YgbWVzc2FnZXM7XHJcbi8vIFR5cGUtZGVmaW5lICdlbi1VUycgYXMgdGhlIG1hc3RlciBzY2hlbWEgZm9yIHRoZSByZXNvdXJjZVxyXG5leHBvcnQgdHlwZSBNZXNzYWdlU2NoZW1hID0gdHlwZW9mIG1lc3NhZ2VzWydlbi1VUyddO1xyXG5cclxuLy8gU2VlIGh0dHBzOi8vdnVlLWkxOG4uaW50bGlmeS5kZXYvZ3VpZGUvYWR2YW5jZWQvdHlwZXNjcmlwdC5odG1sI2dsb2JhbC1yZXNvdXJjZS1zY2hlbWEtdHlwZS1kZWZpbml0aW9uXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1pbnRlcmZhY2UgKi9cclxuZGVjbGFyZSBtb2R1bGUgJ3Z1ZS1pMThuJyB7XHJcbiAgLy8gZGVmaW5lIHRoZSBsb2NhbGUgbWVzc2FnZXMgc2NoZW1hXHJcbiAgZXhwb3J0IGludGVyZmFjZSBEZWZpbmVMb2NhbGVNZXNzYWdlIGV4dGVuZHMgTWVzc2FnZVNjaGVtYSB7fVxyXG5cclxuICAvLyBkZWZpbmUgdGhlIGRhdGV0aW1lIGZvcm1hdCBzY2hlbWFcclxuICBleHBvcnQgaW50ZXJmYWNlIERlZmluZURhdGVUaW1lRm9ybWF0IHt9XHJcblxyXG4gIC8vIGRlZmluZSB0aGUgbnVtYmVyIGZvcm1hdCBzY2hlbWFcclxuICBleHBvcnQgaW50ZXJmYWNlIERlZmluZU51bWJlckZvcm1hdCB7fVxyXG59XHJcbi8qIGVzbGludC1lbmFibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWludGVyZmFjZSAqL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYm9vdCgoeyBhcHAgfSkgPT4ge1xyXG4gIGNvbnN0IGkxOG4gPSBjcmVhdGVJMThuKHtcclxuICAgIGxvY2FsZTogJ2VuLVVTJyxcclxuICAgIGxlZ2FjeTogZmFsc2UsXHJcbiAgICBtZXNzYWdlcyxcclxuICB9KTtcclxuXHJcbiAgLy8gU2V0IGkxOG4gaW5zdGFuY2Ugb24gYXBwXHJcbiAgYXBwLnVzZShpMThuKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJpMThuIl0sIm1hcHBpbmdzIjoiO0FBR0EsSUFBZSxLQUFBO0FBQUEsRUFDYixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsSUFDSixtQkFBbUI7QUFBQSxJQUNuQixXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixPQUFPO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixvQkFBb0I7QUFBQSxF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
