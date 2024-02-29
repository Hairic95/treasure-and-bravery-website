// This is just an example,
// so you can safely delete all default props below

export default {
  title: 'Treasures and Bravery',
  menu: {
    characterCreation: 'Character creation',
    howToPlay: 'How to play',
    combat: 'Combat',
    magic: 'Magic',
    items: 'Items',
    npcs: 'Non-player characters',
    characterGenerator: 'Character generator',
  },
  characterCreation: {
    step1: {
      title: 'Step 1: Attributes',
      attributesDescription:
        'Each playable character (PC) has the following 3 attributes:',
      strengthTitle: 'Strength (STR)',
      strengthDescription:
        'How good your character is at task of might, combat or resisting physical condititions.',
      dexterityTitle: 'Dexterity (DEX)',
      dexterityDescription:
        'How good your character is at task of finesse, aiming or dodging traps or thrown object.',
      willpowerTitle: 'Willpower (WIL)',
      willpowerDescription:
        'How good your character is at task of socialibility, magic or resisting spiritual condititions.',
      derivedAttributes:
        'Also note that you have a STR + 10 Inventory Slot to manage your items and stress, and you have a Magic (MG) equal to half your WIL (rounded up) value that influence your spell effectiveness.',
      determineAttributes:
        'To determine your starting attributes, roll three times d3 (roll a d6, halven the result, rounded up). These will determine your three Attributes. Roll them in order or not, decide at the start before spinning the dice. Finally add +1 to one of them.',
      hitDiceDescription:
        'Finally, start with 2 Hit Dice (HD), which are the number of d6 you will roll when injured. The higher the number, the more chance of survival you have.',
    },
    step2: {
      title: 'Step 2: Class',
      classDescription:
        'Choose one character class. This will determine skills and overall archetype of character you are gonna play as. Each skill is unlocked when reaching a certain amount of HD, and you start with the one at HD 2.',
      clickOnClass: 'Click on one of the class to see the details.',
      warrior: {
        title: 'Warrior',
        hd2Skill: 'HD 2: Double Strike',
        hd2SkillDescription:
          'When you successfully hit an enemy, you may gain 1 Stress to attack again. You also gain a Buff for this roll.',
        hd4Skill: 'HD 4: Parry',
        hd4SkillDescription:
          'Once per combat, you may gain 2 Stress to negate a incoming wound from a melee attack and deal 1 damage to the attacking enemy.',
        hd5Skill: 'HD 5: Advancement',
        hd5SkillDescription:
          'Choose a Warrior archetype and gain one of its abilities.',
        hd7Skill: 'HD 7: Improvement',
        hd7SkillDescription:
          'Choose another ability from the previously chosen archetype.',
        hd9Skill: 'HD 9: Triple Strike',
        hd9SkillDescription:
          'When you successfully hit an enemy with a second attack, you may gain 1 Stress to deal a direct attack without making any roll to that enemy.',
        archetype1: 'Barbarian Archetype',
        archetype1Skill1: 'Rage',
        archetype1Skill1Description:
          'Deal and receive +2 damage while this ability is active.',
        archetype1Skill2: 'Big Muscles',
        archetype1Skill2Description:
          'When you are wounded by a melee weapon, roll +2 HD.',
        archetype1Skill3: 'Brutality',
        archetype1Skill3Description:
          'Your melee attacks are critical hits on a 19+.',
        archetype1Skill4: 'Metabolism',
        archetype1Skill4Description:
          'Your body is so stupid that they ignore the effects of any poisons.',
        archetype1Skill5: 'Shout',
        archetype1Skill5Description:
          '1 damage to a human or smaller target, push it by 10 meters..',
        archetype2: 'Fighter Archetype',
        archetype2Skill1: 'Resolution',
        archetype2Skill1Description:
          '+1 to all combat opposed rolls and Saving Throw from attacks.',
        archetype2Skill2: 'Finesse',
        archetype2Skill2Description: '+1 to all damage you deal.',
        archetype2Skill3: 'Strategy',
        archetype2Skill3Description:
          'Any ally nearby you gets +1 to any combat opposed roll.',
        archetype2Skill4: 'Methodology',
        archetype2Skill4Description:
          'Choose a type of creature that you meet; gain a Buff whenever you fight that type of creature.',
        archetype2Skill5: 'Bastion',
        archetype2Skill5Description:
          'You may use Parry twice per encounter, gaining only 1 Stress instead of 2.',
      },
      crook: {
        title: 'Crook',
        hd2Skill: 'HD 2: Crimehood',
        hd2SkillDescription:
          'When you roll to steal, sneak around, pick-lock or other ill willed actions, you gain a Buff to that roll.',
        hd4Skill: 'HD 4: Backstab',
        hd4SkillDescription:
          'When you attack an enemy that isn’t aware of you, you automatically hit and strike a critical hit. If the target has half or less you may kill it or neutralize them automatically.',
        hd5Skill: 'HD 5: Advancement',
        hd5SkillDescription:
          'Choose a Crook archetype and gain one of its abilities.',
        hd7Skill: 'HD 7: Improvement',
        hd7SkillDescription:
          'Choose another ability from the previously chosen archetype.',
        hd9Skill: 'HD 9: Dodge',
        hd9SkillDescription:
          'When you are hit, you may gain 1 Stress. If you do ignore the damage and move within 5 meters. You may use Dodge multiple times per encounter, but you have to gain 2 Stress after the first use instead.',
        archetype1: 'Thief',
        archetype1Skill1: 'Shadow',
        archetype1Skill1Description:
          'As long as you are still in darkness, you are considered invisible.',
        archetype1Skill2: 'Silent',
        archetype1Skill2Description:
          'As long as you hold your breath, you do not emit any sound.',
        archetype1Skill3: 'Disarm',
        archetype1Skill3Description:
          'Gain a Buff whenever you try to disarm, find or avoid traps.',
        archetype1Skill4: 'Extra Pockets',
        archetype1Skill4Description: '+4 Inventory Slots.',
        archetype1Skill5: 'Precision',
        archetype1Skill5Description:
          'Attacks with one-handed and ranged weapons are critical hits on +18.',
        archetype2: 'Bard',
        archetype2Skill1: 'Parley',
        archetype2Skill1Description: 'Gain 2 Buffs whenever you lie.',
        archetype2Skill2: 'Pretty Face',
        archetype2Skill2Description:
          'Gain a Buff whenever you roll to convince others to help you out. You are also immune to Charm.',
        archetype2Skill3: 'Polyglot',
        archetype2Skill3Description:
          'You can understand and make you understand in any language.',
        archetype2Skill4: 'Healing Melody',
        archetype2Skill4Description:
          'During any 1 turn rest, heal you and your ally by 2 wounds.',
        archetype2Skill5: 'Screech',
        archetype2Skill5Description:
          'Deal 2 non-lethal wounds to all enemies and allies nearby; they have to succeed a Saving Throw on WIL or be blocked for a round.',
      },
      mage: {
        title: 'Mage',
        hd2Skill: 'HD 2: Magic Affinity',
        hd2SkillDescription:
          'You have a Magic Spellbook with a Spell of your choosing of Level 1 or 2. You may cast Spells of Level MG+1. Also every time you gain a new HD you may learn a new Spell of Level MG+1 after your downtime.',
        hd4Skill: 'HD 4: Magic Shield',
        hd4SkillDescription:
          'Once per combat, you may gain 1 Stress and reduce the value of an incoming wound by your WIL score.',
        hd5Skill: 'HD 5: Advancement',
        hd5SkillDescription:
          'Choose a Mage archetype and gain one of its abilities.',
        hd7Skill: 'HD 7: Improvement',
        hd7SkillDescription:
          'Choose another ability from the previously chosen archetype.',
        hd9Skill: 'HD 9: Trick up the Sleeve',
        hd9SkillDescription:
          'Choose a Spell you know. When you cast it, you don’t gain Stress and you gain a Buff to its roll.',
        archetype1: 'Wizard',
        archetype1Skill1: 'Wise Mind',
        archetype1Skill1Description:
          'When you are wounded by a Spell, roll +2 HD.',
        archetype1Skill2: 'Maestry',
        archetype1Skill2Description:
          'Double the area or the duration of your Spells.',
        archetype1Skill3: 'Double Cast',
        archetype1Skill3Description:
          'Gain 1 Stress, cast the same Magic twice in the same round.',
        archetype1Skill4: 'Familiar',
        archetype1Skill4Description:
          'gain a spiritual pet, it’s alive as long as you are conscious. (Skill: WIL-2; HD WIL/2; Atk: Strike WIL/2 damage)',
        archetype1Skill5: 'Protection',
        archetype1Skill5Description:
          'You may use Magic Shield as many times as you want.',
        archetype2: 'Profane',
        archetype2Skill1: 'Soul Eater',
        archetype2Skill1Description:
          'You can eat the souls of your victims. The taste varies based on the kindness of the meal.',
        archetype2Skill2: 'Demon Skin',
        archetype2Skill2Description:
          'Your skin becomes dry and reddish. Half any fire damage received.',
        archetype2Skill3: 'Sacrifice',
        archetype2Skill3Description:
          'Deal up to 5 non-lethal wounds to yourself. Your next attack deal that number of wounds as extra damage.',
        archetype2Skill4: 'Bloodlust',
        archetype2Skill4Description:
          'Gain a bonus when you cast Spells that deal damage.',
        archetype2Skill5: 'Dark Vision',
        archetype2Skill5Description: 'You can see through the darkest black.',
      },
      zealot: {
        title: 'Zealot',
        hd2Skill: 'HD 2: Divine Affinity',
        hd2SkillDescription:
          'You have a divine Spellbook that holds the Spells Healing Hand and Turn Undead. You also have a relic of your god and as long you have it your attacks are considered magical against enemy resistant to physical attacks.',
        hd4Skill: 'HD 4: Vow of Faith',
        hd4SkillDescription:
          'You may declare a Vow to your God chosen by the GM. As long as you keep it, you roll a +1 HD when you are wounded and deal +1 damage when you attack.',
        hd5Skill: 'HD 5: Advancement',
        hd5SkillDescription:
          'Choose a Zealot archetype and gain one of its abilities.',
        hd7Skill: 'HD 7: Improvement',
        hd7SkillDescription:
          'Choose another ability from the previously chosen archetype.',
        hd9Skill: 'HD 9: Divine Sense',
        hd9SkillDescription:
          'You instinctively recognize undead and unholy beings. You also have a Buff while fighting them.',
        archetype1: 'Cleric',
        archetype1Skill1: 'Evil-bane',
        archetype1Skill1Description:
          'Deal +3 damage to any undead or unholy being.',
        archetype1Skill2: 'Guardian Angel',
        archetype1Skill2Description:
          'Once per combat, if an ally should die after being wounded, you may receive 5 wounds instead.',
        archetype1Skill3: 'Saint',
        archetype1Skill3Description: 'Whenever you are wounded, roll +1 HD.',
        archetype1Skill4: 'Remedy',
        archetype1Skill4Description: 'Your healing removes +2 wounds.',
        archetype1Skill5: 'Blessing',
        archetype1Skill5Description:
          'Gain 1 Stress, you and your allies receive +2 to any Saving Throw in the next d4+1 turns.',
        archetype2: 'Shaman',
        archetype2Skill1: 'Spirit Animal',
        archetype2Skill1Description:
          'ou can talk to beasts. Gain a Buff when talking or fighting them.',
        archetype2Skill2: 'Changeling Skin',
        archetype2Skill2Description:
          'You may transform into a small or medium animal (1 HD) for 4 turns.',
        archetype2Skill3: 'Facade Buster',
        archetype2Skill3Description: 'You can recognize any lie.',
        archetype2Skill4: 'Ramification',
        archetype2Skill4Description:
          'You may put roots on the ground and know the past events of the place in the last 100 years.',
        archetype2Skill5: 'Fourth Level of Diet',
        archetype2Skill5Description: 'You aren’t required to eat anymore.',
      },
    },
    step3: {
      title: 'Step 3: Items',
      itemsDescription:
        "Roll twice on the Common Items table using two d6 and combining the results (d66), then once on your character class table using a d12. Add the rolled items in your PC's inventory slots.",
      startingItemsDescription: 'You also start with 2 Supplies and a Dagger.',
      clickOnItems: 'Click on the button to see the table',
      itemsTables: {
        title: 'Item Tables',
        commonItems: 'Common Items (d66)',
        warriorItems: 'Warrior Items (d12)',
        crookItems: 'Crook Items (d12)',
        mageItems: 'Mage Items (d12)',
        zealotItems: 'Zealot Items (d12)',
      },
    },
    step4: {
      title: 'Step 4: Final touches',
      miscDescription:
        'Roll 2d6 and multiply the result for 5; you start with that many Gold Pieces (GP). Also you have 6 Ration Slot and start with 2 filled. Use those to keep track of food while adventuring. Give your PC a name and no more than 2 lines of backstory.',
    },
  },
  howToPlay: {
    playersAndMaster: {
      title: 'Players and narrator',
      description:
        'One of the player will be the narrator. They will control the setting and non-player characters (NPC). They will describe the situations and how NPCs will react to the them. The other players will control their Player Character (PC) and act in the situations that are given to them.',
    },
    rolls: {
      title: 'Action rolls and saving throws',
      description:
        "Whenever an action's result of PCs or NPCs is uncertain, the player or the narrator respectivly will roll a 2d6 and adds the relevant attribute to the result. A result over 9 is a success.",
      description2:
        'The narrator can ask a player to see if their character can resists an effect or react quickly enough from a danger or harm. These rolls are defined as saving throws.',
      opposedRollsTitle: 'Opposed rolls',
      opposedRollsDescription:
        "Whenever a PC's action is contrasted by a NPC or another PC, then both parties roll a 2d6 and add the relevant attribute (NPCs use Skill). Instead of reaching a result over 9, the side with the highest results wins. If the result is a tied, the narrator chooses which side wins.",
      bonusAndMalusTitle: 'Bonus and malus',
      bonusAndMalusDescription:
        'In some situation, a PC needing to make an action roll might be in an favorable or disadvantageous position. In these case a PC can receive Bonus or Malus respectivly on said action roll.',
      bonusAndMalusDescription2:
        'If you have more Bonus than Malus, you roll twice and take the higher result. If you have more Malus, you roll twice and take the lowest result. If these are tied or you have none of either, you just roll once.',
    },
    inventoryAndStress: {
      title: 'Inventory and stress',
      description:
        'A PC has 10 + STR inventory slots. Items can take 1 or more of them, some might be stacked up to a defined quantity in a single slot. You can have only one type of item in the same inventory slot, until it gets emptied again.',
      description2:
        'Some actions or situations can cause a PC to receive Stress. Each instance of Stress takes up an inventory slot.',
      description3:
        'A PC cannot carry more items or/and stress than their inventory slots allow.',
      description4:
        'Spending a day resting in a safe location removes all stress.',
      pushingTitle: 'Pushing a character',
      pushingDescription:
        'Whenever a PC makes an action roll while having a empty inventory slot, their player may choose to push their character by taking a Stress. If they do so, they receive a Bonus to that roll.',
      pushingDescription2:
        'A PC may be pushed as many time as the inventory slot they have left, even in the same roll.',
    },
    time: {
      title: 'Time',
      description: 'Time is tracked using three measurements:',
      descriptionRound:
        'Round - 10 seconds in-game, used during combat. A round is enough time for a PC to perform an action like casting a spell or attacking.',
      descriptionTurn:
        'Turn - 10 minutes in-game, used while exploring an adventuring site. A turn is enough time for a party of PCs to search a dungeon room, pick a lock or do any other significant activity.',
      descriptionWatch:
        'Watch - 4/6 hours in-game, used when travelling the overworld. A watch is enough time for a party to travel about 6 miles by foot or 12 miles by horse or similar mounts, hunt for food, or explore the area around them. Each watch, the GM rolls a d6 to determine if a random encounter occurs, as above.',
      rationDescription:
        'When exploring the overworld, you need to consume a ration and take a watch-long rest every 2 watches. When exploring an adventuring site, you need to consume a ration and take a turn-long rest every 6 turns.',
      exhaustDescription:
        'If your PC pushes on without taking a rest, your PC suffers a Malus on every roll they make. If you push your PC even further (4 watches or 10 turns without resting) you take 2 non-lethal wound. From that point on, every watch or every 2 turns without rest you take a wound and roll for damage every time.',
    },
    explorationClock: {
      title: 'Exploration clock',
      description:
        'As the narrator, while the party adventures outdoors or in an adventuring site, prepare a d20 and a random encounters table. You may keep the d20 hidden or show it to the players.',
      description2:
        'Whenever a watch or a turn passes, roll a d6 and subtrack the result to the d20. If the results is 6, roll again. Whenever the d20 reaches 0 or lower, a random encounter happens; roll on the table and make the PCs stumble into it. If the d20 reaches 3 instead, you show the players an omen of the random encounter.',
    },
    experience: {
      title: 'Experience and Hit Dice',
      gainingExperienceDescription:
        'At the end of the session, the narrator rewards each PC XP Points, based on the gold value of every non-magical treasure they brought at a safe point or have spent (1 GP = 1 XP). Also a character gains 25 XP per every NPC Hit Die of every enemy the group has defeated, outsmarted or felled.',
      levelUpDescription:
        'When a PC gains XP equal or higher than 1000 per their current HD, they spent that amount automatically and gain a new HD.',
      levelUpDescription2:
        "When the HD quantity increases, a PC gains the class' skill relative to that HD. If it's an odd HD they also increase one attribute by 1 point. No attribute can be higher than 6",
      retireDescription:
        'A PC cannot have more than 12 HD. If they were to gain their thirteenth Hit Die they retire from adventuring.',
    },
  },
  magic: {
    spellList: {
      level0: {
        animateArmor: {
          name: 'Living armor',
          description:
            'Animate a set of armor. It becomes a NPC (Skill 0; HD 0) with armor value equals to the one of their armor.',
          fumble: 'The set of armor becomes a smiling plushie.',
        },
      },
      level2: {
        shadowClaw: {
          name: 'Shadow Claw',
          description:
            'Up to MG targets make an opposed roll against the caster WIL. If they fail, they are grabbed by claws from the ground and remain stuck for d4+1 rounds.',
          fumble: '',
        },
      },
      level3: {
        charm: {
          name: 'Charm',
          description:
            'The target makes an opposed roll against the caster WIL. If they fail, they become friendly and humble towards the caster. If the target HD is lower than the caster MG, the target is automatically charmed instead.',
          fumble: '',
        },
      },
    },
  },
  items: {
    itemList: {
      armors: {
        lightArmor: {
          name: 'Light armor',
          description: '3 Armor Slots; 1 Inventory Slot; 20 GP.',
        },
        mediumArmor: {
          name: 'Medium armor',
          description: '5 Armor Slots; 2 Inventory Slot; 50 GP.',
        },
        heavyArmor: {
          name: 'Heavy armor',
          description: '7 Armor Slots; 3 Inventory Slot; 200 GP.',
        },
        shield: {
          name: 'Shield',
          description: 'Reduces incoming damage by 1; 1 Inventory Slot; 10 GP.',
        },
        spikyShield: {
          name: 'Spiky Shield',
          description:
            'Reduces incoming damage by 1, deals 1 damage to any melee attacker; 1 Inventory Slot; 30 GP.',
        },
        menacingHelm: {
          name: 'Menacing Helm',
          description: "Reduces enemies' Morale by 1; 1 Inventory Slot; 40 GP.",
        },
        dragonskinCape: {
          name: 'Dragonskin Cape',
          description:
            'Halven all fire and cold damage received; 1 Inventory Slot; 40 GP.',
        },
        hiddenPocketRobes: {
          name: 'Hidden-pocket robes',
          description:
            'You can hide inside it 2 slot worth of non-armor items; 1 Inventory Slot; 50 GP.',
        },
        silverSnakeCape: {
          name: 'Silver snake cape',
          description:
            'You gain a Bonus each time you roll a Saving Throw on WIL; 1 Inventory Slot; 40 GP.',
        },
      },
      weapons: {
        sword: {
          name: 'Sword',
          description: '4 Damage; 2 Inventory Slot; 10 GP.',
        },
        axe: {
          name: 'Axe',
          description: '4 Damage; 2 Inventory Slot; 10 GP.',
        },
        mace: {
          name: 'Mace',
          description: '4 Damage; 2 Inventory Slot; 10 GP.',
        },
        greatsword: {
          name: 'Greatsword',
          description: '5 Damage, two-handed; 3 Inventory Slot; 15 GP.',
        },
        warhammer: {
          name: 'Warhammer',
          description: '5 Damage, two-handed; 3 Inventory Slot; 15 GP.',
        },
        staff: {
          name: 'Staff',
          description:
            '3 Damage, two-handed, roll on WIL to attack; 2 Inventory Slot; 15 GP.',
        },
        bow: {
          name: 'Bow',
          description: '3 Damage, two-handed, ranged; 2 Inventory Slot; 35 GP',
        },
        crossbow: {
          name: 'Crossbow',
          description: '4 Damage, two-handed, ranged; 3 Inventory Slot; 30 GP',
        },
        blowPipe: {
          name: 'Blowpipe',
          description: '2 Damage, ranged; 1 Inventory Slot; 2 GP',
        },
        crowbar: {
          name: 'Crowbar',
          description:
            '3 Damage, gain a Bonus when opening chest with it; 1 Inventory Slot; 10 GP',
        },
        silverDagger: {
          name: 'Silver dagger',
          description:
            '3 Damage, can damage monster immune to physical damage; 1 Inventory Slot; 30 GP',
        },
        pike: {
          name: 'Pike',
          description:
            '4 damage, enemies need to reroll STR to counterattack you, two-handed; 2 Inventory Slot; 20 GP.',
        },
        halberd: {
          name: 'Halberd',
          description:
            '5 damage, enemies need to reroll STR to counterattack you, two-handed; 3 Inventory Slot; 25 GP.',
        },
      },
      consumables: {
        supplies: {
          name: 'Supply',
          description:
            'Can be exchanged for 3 Rations or basic survival tools; 5 per Inventory Slot; 5 GP.',
        },
        ammo: {
          name: 'Ammo',
          description:
            'Required to fire specific weapons (roll at the end of combat, if you roll 1, you only have 1 shot left); 1 Inventory Slot; 5 GP',
        },
        scroll: {
          name: 'Scroll',
          description:
            "Can be used to cast the following spell: [SPELL_DESCRIPTION] 1 Inventory Slot; check scrolls' prices.",
        },
        poisonVial: {
          name: 'Poison Vial',
          description:
            'If injected or ingested, the target needs to succeed a Saving Throw on STR or die; 3 per Inventory Slot; 35 GP.',
        },
        invisibilityPotion: {
          name: 'Invisibility Potion',
          description:
            'If drank, become transparent for 2d4 rounds; 1 Inventory Slot; 60 GP.',
        },
        bomb: {
          name: 'Bomb',
          description:
            'Explode in a area and deals 9 damage to those reached by the explosion; 1 Inventory Slot; 25 GP.',
        },
        riftShroom: {
          name: 'Rift Shroom',
          description:
            'When eating, they remove 1 Stress; 3 per Inventory Slot; 10 GP.',
        },
        violetIncense: {
          name: 'Violet Incense',
          description:
            'Once burnt, grants a Bonus at casting spells to anybody breathing it; 3 per Inventory Slot; 15 GP.',
        },
        talkingTounge: {
          name: 'Talking tounge',
          description:
            'When eaten, you can speak and listen to any language for a day; 6 per Inventory Slot; 8 GP.',
        },
        healthTonic: {
          name: 'Health tonic',
          description: 'Cures 6 wounds; 1 Inventory Slot; 60 GP.',
        },
        saintWaterFlask: {
          name: 'Saint water flasks',
          description:
            'Deals 4 damage to undead or unholy creatures; 2 per Inventory Slot; 15 GP.',
        },
        prayStone: {
          name: 'Pray stone',
          description:
            "When broken, deals 6 damage to everybody nearby the caster (the caster isn't damaged); 1 per Inventory Slot; 30 GP.",
        },
        antigraveOilDose: {
          name: 'Anti-grave oil dose',
          description:
            'A weapon imbued with this deals 2 more damage to undead or unholy creatures; 3 per Inventory Slot; 15 GP.',
        },
      },
      misc: {
        bearTrap: {
          name: 'Bear trap',
          description:
            'Deals 3 damage when stepped one. The victim is stuck until they take a round to remove it; 1 Inventory Slot; 25 GP.',
        },
        obsidianGlass: {
          name: 'Obsidian Glass',
          description:
            'Allows to see perfectly in darkness if look through it; 1 Inventory Slot; 35 GP.',
        },
        crystalBall: {
          name: 'Crystal ball',
          description:
            'Once a day, you may focus on a place you have been to. You have a 360 view of that place for a turn; 1 Inventory Slot; 50 GP.',
        },
        prophecyBook: {
          name: 'Prophecy book',
          description:
            'Book filled with fantasy of madmen and prophets. Some people gets a bit too attached to these; 1 Inventory Slot; 5 GP.',
        },
        oracleBones: {
          name: 'Oracle bones',
          description:
            "Can be used to commune with a zealot's god; 1 Inventory Slot; 0 GP.",
        },
        whisperSkull: {
          name: 'Whisper skull',
          description:
            'Can register and reproduce small message; 1 Inventory Slot; 20 GP.',
        },
        unopenedLetter: {
          name: 'Unopenend letter',
          description:
            "A message from a loved one you haven't got the guts to open yet; 5 per Inventory Slot; invaluable to you, worthless to others.",
        },
        spyglass: {
          name: 'Spyglass',
          description:
            'Allows to watch up to a 100 meters away; 1 Inventory Slot; 10 GP.',
        },
        scrollOfChoice: {
          name: 'Scroll of your choice',
          description:
            "Scroll with a Spell of Level 0, 1 or 2 of your choice; 1 Inventory Slot; check scrolls' prices.",
        },
        startWithASpell: {
          name: 'You know a spell',
          description:
            'Start the game with a Spell of Level 0 or 1 of your choice.',
        },
      },
      pets: {
        wardog: {
          name: 'Wardog',
          description:
            'A ferocius but faithful companion (Skill 3, HD 2, Atk: Bite - 3 danni).',
        },
        wingedHomunculus: {
          name: 'Winged Homunculus',
          description:
            'A small but cowardly critter (Skill 2, HD 1, Atk: Leer - 2 danni; can fly).',
        },
      },
    },
  },
};
