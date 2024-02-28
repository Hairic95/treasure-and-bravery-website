// This is just an example,
// so you can safely delete all default props below

export default {
  title: 'Treasures and Bravery',
  menu: {
    characterCreation: 'Character creation',
    howToPlay: 'How to play',
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
        zealotTable: {
          item1: 'Mace',
          item2: 'Medium armor',
          item3: 'Light armor',
          item4: 'Violet incense',
          item5: 'Health Tonic',
          item6: '3 Saint water flasks',
          item7: 'Heavy armor',
          item8: 'Warhammer',
          item9: 'Pray stone',
          item10: 'Oracle bones',
          item11: '3 Anti-grave oil doses',
          item12: 'Prophecy book',
        },
      },
    },
  },
};
