import { ComposerTranslation } from 'vue-i18n';

export class GridHandler {
  /**
   *
   * @param t
   * @returns
   */
  public static getCharacterCreationItemsRows(t: ComposerTranslation): any[] {
    return [
      {
        rowNumber: '1',
        rowValue1: 'TBD',
        rowValue2: t('items.itemList.misc.spyglass.name'),
        rowValue2Description: t('items.itemList.misc.spyglass.description'),
        rowValue3: 'TBD',
        rowValue4: 'TBD',
        rowValue5: 'TBD',
        rowValue6: t('items.itemList.misc.scrollOfChoice.name'),
        rowValue6Description: t(
          'items.itemList.misc.scrollOfChoice.description'
        ),
      },
      {
        rowNumber: '2',
        rowValue1: 'TBD',
        rowValue2: 'TBD',
        rowValue3: 'TBD',
        rowValue4: 'TBD',
        rowValue5: 'TBD',
        rowValue6: t('items.itemList.misc.startWithASpell.name'),
        rowValue6Description: t(
          'items.itemList.misc.startWithASpell.description'
        ),
      },
      {
        rowNumber: '3',
        rowValue1: t('items.itemList.weapons.silverDagger.name'),
        rowValue1Description: t(
          'items.itemList.weapons.silverDagger.description'
        ),
        rowValue2: 'TBD',
        rowValue3: 'TBD',
        rowValue4: 'TBD',
        rowValue5: 'TBD',
        rowValue6: 'TBD',
      },
      {
        rowNumber: '4',
        rowValue1: 'TBD',
        rowValue2: 'TBD',
        rowValue3: 'TBD',
        rowValue4: 'TBD',
        rowValue5: t('items.itemList.weapons.halberd.name'),
        rowValue5Description: t('items.itemList.weapons.halberd.description'),
        rowValue6: 'TBD',
      },
      {
        rowNumber: '5',
        rowValue1: 'TBD',
        rowValue2: 'TBD',
        rowValue3: t('items.itemList.misc.unopenedLetter.name'),
        rowValue3Description: t(
          'items.itemList.misc.unopenedLetter.description'
        ),
        rowValue4: 'TBD',
        rowValue5: 'TBD',
        rowValue6: 'TBD',
      },
      {
        rowNumber: '6',
        rowValue1: 'TBD',
        rowValue2: 'TBD',
        rowValue3: 'TBD',
        rowValue4: t('items.itemList.weapons.pike.name'),
        rowValue4Description: t('items.itemList.weapons.pike.description'),
        rowValue5: 'TBD',
        rowValue6: 'TBD',
      },
    ];
  }

  /**
   *
   * @param t
   * @returns
   */
  public static getCharacterCreationWarriorItemsRows(
    t: ComposerTranslation
  ): any[] {
    return [
      {
        rowNumber1: '1',
        rowValue1: t('items.itemList.armors.mediumArmor.name'),
        rowValue1Description: t(
          'items.itemList.armors.mediumArmor.description'
        ),
        rowNumber2: '7',
        rowValue2: t('items.itemList.armors.lightArmor.name'),
        rowValue2Description: t('items.itemList.armors.lightArmor.description'),
      },
      {
        rowNumber1: '2',
        rowValue1: t('items.itemList.weapons.axe.name'),
        rowValue1Description: t('items.itemList.weapons.axe.description'),
        rowNumber2: '8',
        rowValue2:
          t('items.itemList.weapons.bow.name') +
          ' + ' +
          t('items.itemList.consumables.ammo.name'),
        rowValue2Description: t('items.itemList.weapons.bow.description'),
      },
      {
        rowNumber1: '3',
        rowValue1: t('items.itemList.armors.spikyShield.name'),
        rowValue1Description: t(
          'items.itemList.armors.spikyShield.description'
        ),
        rowNumber2: '9',
        rowValue2:
          t('items.itemList.weapons.crossbow.name') +
          ' + ' +
          t('items.itemList.consumables.ammo.name'),
        rowValue2Description: t('items.itemList.weapons.crossbow.description'),
      },
      {
        rowNumber1: '4',
        rowValue1: '3 ' + t('items.itemList.armors.heavyArmor.name'),
        rowValue1Description: t('items.itemList.armors.heavyArmor.name'),
        rowNumber2: '10',
        rowValue2: t('items.itemList.armors.menacingHelm.name'),
        rowValue2Description: t(
          'items.itemList.armors.menacingHelm.description'
        ),
      },
      {
        rowNumber1: '5',
        rowValue1: t('items.itemList.weapons.greatsword.name'),
        rowValue1Description: t(
          'items.itemList.weapons.greatsword.description'
        ),
        rowNumber2: '11',
        rowValue2: t('items.itemList.armors.dragonskinCape.name'),
        rowValue2Description: t(
          'items.itemList.armors.dragonskinCape.description'
        ),
      },
      {
        rowNumber1: '6',
        rowValue1: t('items.itemList.weapons.sword.name'),
        rowValue1Description: t('items.itemList.weapons.sword.description'),
        rowNumber2: '12',
        rowValue2: '3 ' + t('items.itemList.pets.wardog.name'),
        rowValue2Description: t('items.itemList.pets.wardog.description'),
      },
    ];
  }
  /**
   *
   * @param t
   * @returns
   */
  public static getCharacterCreationCrookItemsRows(
    t: ComposerTranslation
  ): any[] {
    return [
      {
        rowNumber1: '1',
        rowValue1: t('items.itemList.armors.mediumArmor.name'),
        rowValue1Description: t(
          'items.itemList.armors.mediumArmor.description'
        ),
        rowNumber2: '7',
        rowValue2: t('items.itemList.misc.bearTrap.name'),
        rowValue2Description: t('items.itemList.misc.bearTrap.description'),
      },
      {
        rowNumber1: '2',
        rowValue1: t('items.itemList.weapons.sword.name'),
        rowValue1Description: t('items.itemList.weapons.sword.description'),
        rowNumber2: '8',
        rowValue2: '2 ' + t('items.itemList.consumables.poisonVial.name'),
        rowValue2Description: t(
          'items.itemList.consumables.poisonVial.description'
        ),
      },
      {
        rowNumber1: '3',
        rowValue1:
          t('items.itemList.weapons.bow.name') +
          ' + ' +
          t('items.itemList.consumables.ammo.name'),
        rowValue1Description: t('items.itemList.weapons.bow.description'),
        rowNumber2: '9',
        rowValue2: t('items.itemList.consumables.invisibilityPotion.name'),
        rowValue2Description: t(
          'items.itemList.consumables.invisibilityPotion.description'
        ),
      },
      {
        rowNumber1: '4',
        rowValue1: t('items.itemList.armors.lightArmor.name'),
        rowValue1Description: t('items.itemList.armors.lightArmor.description'),
        rowNumber2: '10',
        rowValue2: t('items.itemList.misc.obsidianGlass.name'),
        rowValue2Description: t(
          'items.itemList.misc.obsidianGlass.description'
        ),
      },
      {
        rowNumber1: '5',
        rowValue1: t('items.itemList.weapons.blowPipe.name'),
        rowValue1Description: t('items.itemList.weapons.blowPipe.description'),
        rowNumber2: '11',
        rowValue2: t('items.itemList.consumables.bomb.name'),
        rowValue2Description: t('items.itemList.consumables.bomb.description'),
      },
      {
        rowNumber1: '6',
        rowValue1: t('items.itemList.weapons.crowbar.name'),
        rowValue1Description: t('items.itemList.weapons.crowbar.description'),
        rowNumber2: '12',
        rowValue2: '3 ' + t('items.itemList.misc.whisperSkull.name'),
        rowValue2Description: t('items.itemList.misc.whisperSkull.description'),
      },
    ];
  }
  /**
   *
   * @param t
   * @returns
   */
  public static getCharacterCreationMageItemsRows(
    t: ComposerTranslation
  ): any[] {
    return [
      {
        rowNumber1: '1',
        rowValue1: t('items.itemList.weapons.staff.name'),
        rowValue1Description: t('items.itemList.weapons.staff.description'),
        rowNumber2: '7',
        rowValue2:
          t('items.itemList.consumables.scroll.name') +
          ' [' +
          t('magic.spellList.level0.animateArmor.name') +
          ']',
        rowValue2Description: t(
          'items.itemList.consumables.scroll.description'
        ).replace(
          '[SPELL_DESCRIPTION]',
          t('magic.spellList.level0.animateArmor.description')
        ),
      },
      {
        rowNumber1: '2',
        rowValue1: '3 ' + t('items.itemList.consumables.riftShroom.name'),
        rowValue1Description: t(
          'items.itemList.consumables.riftShroom.description'
        ),
        rowNumber2: '8',
        rowValue2: t('items.itemList.armors.hiddenPocketRobes.name'),
        rowValue2Description: t(
          'items.itemList.armors.hiddenPocketRobes.description'
        ),
      },
      {
        rowNumber1: '3',
        rowValue1: t('items.itemList.weapons.sword.name'),
        rowValue1Description: t('items.itemList.weapons.sword.description'),
        rowNumber2: '9',
        rowValue2: t('items.itemList.pets.wingedHomunculus.name'),
        rowValue2Description: t(
          'items.itemList.pets.wingedHomunculus.description'
        ),
      },
      {
        rowNumber1: '4',
        rowValue1: t('items.itemList.armors.lightArmor.name'),
        rowValue1Description: t('items.itemList.armors.lightArmor.description'),
        rowNumber2: '10',
        rowValue2:
          t('items.itemList.consumables.scroll.name') +
          ' [' +
          t('magic.spellList.level3.charm.name') +
          ']',
        rowValue2Description: t(
          'items.itemList.consumables.scroll.description'
        ).replace(
          '[SPELL_DESCRIPTION]',
          t('magic.spellList.level3.charm.description')
        ),
      },
      {
        rowNumber1: '5',
        rowValue1: '6 ' + t('items.itemList.consumables.talkingTounge.name'),
        rowValue1Description: t(
          'items.itemList.consumables.talkingTounge.description'
        ),
        rowNumber2: '11',
        rowValue2: t('items.itemList.armors.silverSnakeCape.name'),
        rowValue2Description: t(
          'items.itemList.armors.silverSnakeCape.description'
        ),
      },
      {
        rowNumber1: '6',
        rowValue1:
          t('items.itemList.consumables.scroll.name') +
          ' [' +
          t('magic.spellList.level2.shadowClaw.name') +
          ']',
        rowValue1Description: t(
          'items.itemList.consumables.scroll.description'
        ).replace(
          '[SPELL_DESCRIPTION]',
          t('magic.spellList.level2.shadowClaw.description')
        ),
        rowNumber2: '12',
        rowValue2: '3 ' + t('items.itemList.misc.crystalBall.name'),
        rowValue2Description: t('items.itemList.misc.crystalBall.description'),
      },
    ];
  }
  /**
   *
   * @param t
   * @returns
   */
  public static getCharacterCreationZealotItemsRows(
    t: ComposerTranslation
  ): any[] {
    return [
      {
        rowNumber1: '1',
        rowValue1: t('items.itemList.weapons.mace.name'),
        rowValue1Description: t('items.itemList.weapons.mace.description'),
        rowNumber2: '7',
        rowValue2: t('items.itemList.armors.heavyArmor.name'),
        rowValue2Description: t('items.itemList.armors.heavyArmor.description'),
      },
      {
        rowNumber1: '2',
        rowValue1: t('items.itemList.armors.mediumArmor.name'),
        rowValue1Description: t(
          'items.itemList.armors.mediumArmor.description'
        ),
        rowNumber2: '8',
        rowValue2: t('items.itemList.weapons.warhammer.name'),
        rowValue2Description: t('items.itemList.weapons.warhammer.description'),
      },
      {
        rowNumber1: '3',
        rowValue1: t('items.itemList.armors.lightArmor.name'),
        rowValue1Description: t('items.itemList.armors.lightArmor.description'),
        rowNumber2: '9',
        rowValue2: t('items.itemList.consumables.healthTonic.name'),
        rowValue2Description: t(
          'items.itemList.consumables.healthTonic.description'
        ),
      },
      {
        rowNumber1: '4',
        rowValue1: '3 ' + t('items.itemList.consumables.violetIncense.name'),
        rowValue1Description: t(
          'items.itemList.consumables.violetIncense.description'
        ),
        rowNumber2: '10',
        rowValue2: t('items.itemList.consumables.prayStone.name'),
        rowValue2Description: t(
          'items.itemList.consumables.prayStone.description'
        ),
      },
      {
        rowNumber1: '5',
        rowValue1: t('items.itemList.misc.prophecyBook.name'),
        rowValue1Description: t('items.itemList.misc.prophecyBook.description'),
        rowNumber2: '11',
        rowValue2: t('items.itemList.misc.oracleBones.name'),
        rowValue2Description: t('items.itemList.misc.oracleBones.description'),
      },
      {
        rowNumber1: '6',
        rowValue1: '2 ' + t('items.itemList.consumables.saintWaterFlask.name'),
        rowValue1Description: t(
          'items.itemList.consumables.saintWaterFlask.description'
        ),
        rowNumber2: '12',
        rowValue2: '3 ' + t('items.itemList.consumables.antigraveOilDose.name'),
        rowValue2Description: t(
          'items.itemList.consumables.saintWaterFlask.description'
        ),
      },
    ];
  }
}
