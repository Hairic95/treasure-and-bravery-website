<template>
  <div class="row justify-evenly">
    <div class="col-md-5 col-12">
      <q-card bordered class="q-mb-md">
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('characterCreation.step1.title') }}
        </q-card-section>
        <q-card-section class="q-pb-none">
          {{ $t('characterCreation.step1.attributesDescription') }}
        </q-card-section>
        <q-card-section class="text-size-18 text-bold q-py-none">
          {{ $t('characterCreation.step1.strengthTitle') }}
        </q-card-section>
        <q-card-section class="row q-py-none">
          {{ $t('characterCreation.step1.strengthDescription') }}
        </q-card-section>
        <q-card-section class="text-size-18 text-bold q-py-none">
          {{ $t('characterCreation.step1.dexterityTitle') }}
        </q-card-section>
        <q-card-section class="row q-py-none">
          {{ $t('characterCreation.step1.dexterityDescription') }}
        </q-card-section>
        <q-card-section class="text-size-18 text-bold q-py-none">
          {{ $t('characterCreation.step1.willpowerTitle') }}
        </q-card-section>
        <q-card-section class="row q-pt-none">
          {{ $t('characterCreation.step1.willpowerDescription') }}
        </q-card-section>
        <q-card-section class="row q-pt-none">
          {{ $t('characterCreation.step1.derivedAttributes') }}
        </q-card-section>
        <q-card-section class="row q-pt-none">
          {{ $t('characterCreation.step1.determineAttributes') }}
        </q-card-section>
        <q-card-section class="row q-pt-none">
          {{ $t('characterCreation.step1.hitDiceDescription') }}
        </q-card-section>
      </q-card>
      <q-card bordered>
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('characterCreation.step2.title') }}
        </q-card-section>
        <q-card-section class="q-pb-none">
          {{ $t('characterCreation.step2.classDescription') }}
        </q-card-section>
        <q-card-section class="text-italic q-pb-none">
          {{ $t('characterCreation.step2.clickOnClass') }}
        </q-card-section>
        <q-card-section class="row">
          <div class="col-6 q-pr-sm q-py-sm">
            <q-btn
              color="primary"
              class="fit"
              :label="$t('characterCreation.step2.warrior.title')"
              @click="setClassVisible(EClass.Warrior)"
            ></q-btn>
          </div>
          <div class="col-6 q-pl-sm q-py-sm">
            <q-btn
              color="primary"
              class="fit"
              :label="$t('characterCreation.step2.crook.title')"
              @click="setClassVisible(EClass.Crook)"
            ></q-btn>
          </div>
          <div class="col-6 q-pr-sm q-py-sm">
            <q-btn
              color="primary"
              class="fit"
              :label="$t('characterCreation.step2.mage.title')"
              @click="setClassVisible(EClass.Mage)"
            ></q-btn>
          </div>
          <div class="col-6 q-pl-sm q-py-sm">
            <q-btn
              color="primary"
              class="fit"
              :label="$t('characterCreation.step2.zealot.title')"
              @click="setClassVisible(EClass.Zealot)"
            ></q-btn>
          </div>
        </q-card-section>
      </q-card>
      <q-card bordered>
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('characterCreation.step3.title') }}
        </q-card-section>
        <q-card-section class="q-pb-none">
          {{ $t('characterCreation.step3.itemsDescription') }}
        </q-card-section>
        <q-card-section class="q-pb-none">
          {{ $t('characterCreation.step3.startingItemsDescription') }}
        </q-card-section>
        <q-card-section class="text-italic q-pb-none">
          {{ $t('characterCreation.step3.clickOnItems') }}
        </q-card-section>
        <q-card-section class="row">
          <div class="col-12 q-py-sm">
            <q-btn
              color="primary"
              class="fit"
              :label="$t('characterCreation.step3.itemsTables.title')"
              @click="setItemTableVisible"
            ></q-btn>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-md-7 col-12 q-pl-md">
      <q-card v-if="isAnythingSelected" bordered class="q-mb-md">
        <q-scroll-area :style="'height: ' + detailsHeight">
          <div v-show="isWarriorSelected">
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.warrior.title') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.hd2Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.warrior.hd2SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.hd4Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.warrior.hd4SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.hd5Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.warrior.hd5SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.hd7Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.warrior.hd7SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.hd9Skill') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{ $t('characterCreation.step2.warrior.hd9SkillDescription') }}
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.warrior.archetype1') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.archetype1Skill1') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t(
                  'characterCreation.step2.warrior.archetype1Skill1Description'
                )
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.archetype1Skill2') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t(
                  'characterCreation.step2.warrior.archetype1Skill2Description'
                )
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.archetype1Skill3') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t(
                  'characterCreation.step2.warrior.archetype1Skill3Description'
                )
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.archetype1Skill4') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t(
                  'characterCreation.step2.warrior.archetype1Skill4Description'
                )
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.archetype1Skill5') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{
                $t(
                  'characterCreation.step2.warrior.archetype1Skill5Description'
                )
              }}
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.warrior.archetype2') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.archetype2Skill1') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t(
                  'characterCreation.step2.warrior.archetype2Skill1Description'
                )
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.archetype2Skill2') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t(
                  'characterCreation.step2.warrior.archetype2Skill2Description'
                )
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.archetype2Skill3') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t(
                  'characterCreation.step2.warrior.archetype2Skill3Description'
                )
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.archetype2Skill4') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t(
                  'characterCreation.step2.warrior.archetype2Skill4Description'
                )
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.warrior.archetype2Skill5') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{
                $t(
                  'characterCreation.step2.warrior.archetype2Skill5Description'
                )
              }}
            </q-card-section>
          </div>
          <div v-show="isCrookSelected">
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.crook.title') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.hd2Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.crook.hd2SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.hd4Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.crook.hd4SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.hd5Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.crook.hd5SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.hd7Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.crook.hd7SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.hd9Skill') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{ $t('characterCreation.step2.crook.hd9SkillDescription') }}
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.crook.archetype1') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.archetype1Skill1') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.crook.archetype1Skill1Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.archetype1Skill2') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.crook.archetype1Skill2Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.archetype1Skill3') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.crook.archetype1Skill3Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.archetype1Skill4') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.crook.archetype1Skill4Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.archetype1Skill5') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{
                $t('characterCreation.step2.crook.archetype1Skill5Description')
              }}
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.crook.archetype2') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.archetype2Skill1') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.crook.archetype2Skill1Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.archetype2Skill2') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.crook.archetype2Skill2Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.archetype2Skill3') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.crook.archetype2Skill3Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.archetype2Skill4') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.crook.archetype2Skill4Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.crook.archetype2Skill5') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{
                $t('characterCreation.step2.crook.archetype2Skill5Description')
              }}
            </q-card-section>
          </div>
          <div v-show="isMageSelected">
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.mage.title') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.hd2Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.mage.hd2SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.hd4Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.mage.hd4SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.hd5Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.mage.hd5SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.hd7Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.mage.hd7SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.hd9Skill') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{ $t('characterCreation.step2.mage.hd9SkillDescription') }}
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.mage.archetype1') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.archetype1Skill1') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.mage.archetype1Skill1Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.archetype1Skill2') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.mage.archetype1Skill2Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.archetype1Skill3') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.mage.archetype1Skill3Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.archetype1Skill4') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.mage.archetype1Skill4Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.archetype1Skill5') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{
                $t('characterCreation.step2.mage.archetype1Skill5Description')
              }}
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.mage.archetype2') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.archetype2Skill1') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.mage.archetype2Skill1Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.archetype2Skill2') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.mage.archetype2Skill2Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.archetype2Skill3') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.mage.archetype2Skill3Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.archetype2Skill4') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.mage.archetype2Skill4Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.mage.archetype2Skill5') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{
                $t('characterCreation.step2.mage.archetype2Skill5Description')
              }}
            </q-card-section>
          </div>
          <div v-show="isZealotSelected">
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.zealot.title') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.hd2Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.zealot.hd2SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.hd4Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.zealot.hd4SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.hd5Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.zealot.hd5SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.hd7Skill') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{ $t('characterCreation.step2.zealot.hd7SkillDescription') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.hd9Skill') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{ $t('characterCreation.step2.zealot.hd9SkillDescription') }}
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.zealot.archetype1') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.archetype1Skill1') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.zealot.archetype1Skill1Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.archetype1Skill2') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.zealot.archetype1Skill2Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.archetype1Skill3') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.zealot.archetype1Skill3Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.archetype1Skill4') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.zealot.archetype1Skill4Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.archetype1Skill5') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{
                $t('characterCreation.step2.zealot.archetype1Skill5Description')
              }}
            </q-card-section>
            <q-separator></q-separator>
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step2.zealot.archetype2') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.archetype2Skill1') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.zealot.archetype2Skill1Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.archetype2Skill2') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.zealot.archetype2Skill2Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.archetype2Skill3') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.zealot.archetype2Skill3Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.archetype2Skill4') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              {{
                $t('characterCreation.step2.zealot.archetype2Skill4Description')
              }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step2.zealot.archetype2Skill5') }}
            </q-card-section>
            <q-card-section class="row q-pt-none">
              {{
                $t('characterCreation.step2.zealot.archetype2Skill5Description')
              }}
            </q-card-section>
          </div>
          <div v-show="areItemsTablesVisible">
            <q-card-section class="text-size-20 text-bold q-pb-none">
              {{ $t('characterCreation.step3.itemsTables.title') }}
            </q-card-section>
            <q-card-section class="text-size-18 text-bold q-py-none">
              {{ $t('characterCreation.step3.itemsTables.commonItems') }}
            </q-card-section>
            <q-card-section class="row q-py-none">
              <q-table
                :columns="commonItemsColumns"
                :rows="rowCommonItemsColumns"
                class="col-12"
                hide-pagination
                :pagination="{ rowsPerPage: 0 }"
              >
              </q-table>
            </q-card-section>
            <q-card-section class="row q-pt-none">
              <div class="col-6 q-pt-md q-pr-sm">
                <div class="text-size-18 text-bold q-py-none">
                  {{ $t('characterCreation.step3.itemsTables.warriorItems') }}
                </div>
                <q-table
                  hide-header
                  :columns="warriorItemsColumns"
                  :rows="rowWarriorItemsColumns"
                  hide-pagination
                  :pagination="{ rowsPerPage: 0 }"
                >
                </q-table>
              </div>
              <div class="col-6 q-pt-md q-pl-sm">
                <div class="text-size-18 text-bold q-py-none">
                  {{ $t('characterCreation.step3.itemsTables.crookItems') }}
                </div>
                <q-table
                  hide-header
                  :columns="crookItemsColumns"
                  :rows="rowCrookItemsColumns"
                  hide-pagination
                  :pagination="{ rowsPerPage: 0 }"
                >
                </q-table>
              </div>
              <div class="col-6 q-pt-md q-pr-sm">
                <div class="text-size-18 text-bold q-py-none">
                  {{ $t('characterCreation.step3.itemsTables.mageItems') }}
                </div>
                <q-table
                  hide-header
                  :columns="mageItemsColumns"
                  :rows="rowMageItemsColumns"
                  hide-pagination
                  :pagination="{ rowsPerPage: 0 }"
                >
                </q-table>
              </div>
              <div class="col-6 q-pt-md q-pl-sm">
                <div class="text-size-18 text-bold q-py-none">
                  {{ $t('characterCreation.step3.itemsTables.zealotItems') }}
                </div>
                <q-table
                  hide-header
                  :columns="zealotItemsColumns"
                  :rows="rowZealotItemsColumns"
                  hide-pagination
                  :pagination="{ rowsPerPage: 0 }"
                >
                </q-table>
              </div>
            </q-card-section>
          </div>
        </q-scroll-area>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';
import { defineComponent } from 'vue';
import { EClass } from '../shared/base/enumerators';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const { t } = useI18n({ useScope: 'global' });
    const currentClass = ref<EClass | undefined>();
    const areItemsTablesVisible = ref<boolean>(false);

    const detailsHeight = computed<string>(() => {
      return screen.height - 300 + 'px';
    });
    const isWarriorSelected = computed<boolean>(() => {
      return currentClass.value === EClass.Warrior;
    });
    const isCrookSelected = computed<boolean>(() => {
      return currentClass.value === EClass.Crook;
    });
    const isMageSelected = computed<boolean>(() => {
      return currentClass.value === EClass.Mage;
    });
    const isZealotSelected = computed<boolean>(() => {
      return currentClass.value === EClass.Zealot;
    });
    const isAnythingSelected = computed<boolean>(() => {
      return (
        isWarriorSelected.value ||
        isCrookSelected.value ||
        isMageSelected.value ||
        isZealotSelected.value ||
        areItemsTablesVisible.value
      );
    });
    const rowCommonItemsColumns = computed<any[]>(() => {
      return [
        {
          rowNumber: '1',
          rowValue1: 'Sword',
          rowValue2: 'Sword',
          rowValue3: 'Sword',
          rowValue4: 'Sword',
          rowValue5: 'Sword',
          rowValue6: 'Sword',
        },
        {
          rowNumber: '2',
          rowValue1: 'Sword',
          rowValue2: 'Sword',
          rowValue3: 'Sword',
          rowValue4: 'Sword',
          rowValue5: 'Sword',
          rowValue6: 'Sword',
        },
        {
          rowNumber: '3',
          rowValue1: 'Sword',
          rowValue2: 'Sword',
          rowValue3: 'Sword',
          rowValue4: 'Sword',
          rowValue5: 'Sword',
          rowValue6: 'Sword',
        },
        {
          rowNumber: '4',
          rowValue1: 'Sword',
          rowValue2: 'Sword',
          rowValue3: 'Sword',
          rowValue4: 'Sword',
          rowValue5: 'Sword',
          rowValue6: 'Sword',
        },
        {
          rowNumber: '5',
          rowValue1: 'Sword',
          rowValue2: 'Sword',
          rowValue3: 'Sword',
          rowValue4: 'Sword',
          rowValue5: 'Sword',
          rowValue6: 'Sword',
        },
        {
          rowNumber: '6',
          rowValue1: 'Sword',
          rowValue2: 'Sword',
          rowValue3: 'Sword',
          rowValue4: 'Sword',
          rowValue5: 'Sword',
          rowValue6: 'Sword',
        },
      ];
    });
    const commonItemsColumns = computed<any[]>(() => {
      return [
        { field: 'rowNumber' },
        { field: 'rowValue1', label: '1' },
        { field: 'rowValue2', label: '2' },
        { field: 'rowValue3', label: '3' },
        { field: 'rowValue4', label: '4' },
        { field: 'rowValue5', label: '5' },
        { field: 'rowValue6', label: '6' },
      ];
    });
    const rowWarriorItemsColumns = computed<any[]>(() => {
      return [
        {
          rowNumber1: '1',
          rowValue1: 'Sword',
          rowNumber2: '7',
          rowValue2: 'Sword',
        },
        {
          rowNumber1: '2',
          rowValue1: 'Sword',
          rowNumber2: '8',
          rowValue2: 'Sword',
        },
        {
          rowNumber1: '3',
          rowValue1: 'Sword',
          rowNumber2: '9',
          rowValue2: 'Sword',
        },
        {
          rowNumber1: '4',
          rowValue1: 'Sword',
          rowNumber2: '10',
          rowValue2: 'Sword',
        },
        {
          rowNumber1: '5',
          rowValue1: 'Sword',
          rowNumber2: '11',
          rowValue2: 'Sword',
        },
        {
          rowNumber1: '6',
          rowValue1: 'Sword',
          rowNumber2: '12',
          rowValue2: 'Sword',
        },
      ];
    });
    const warriorItemsColumns = computed<any[]>(() => {
      return [
        { field: 'rowNumber1' },
        { field: 'rowValue1' },
        { field: 'rowNumber2' },
        { field: 'rowValue2' },
      ];
    });
    const rowCrookItemsColumns = computed<any[]>(() => {
      return [
        {
          rowNumber1: '1',
          rowValue1: 'Dagger',
          rowNumber2: '7',
          rowValue2: 'Dagger',
        },
        {
          rowNumber1: '2',
          rowValue1: 'Dagger',
          rowNumber2: '8',
          rowValue2: 'Dagger',
        },
        {
          rowNumber1: '3',
          rowValue1: 'Dagger',
          rowNumber2: '9',
          rowValue2: 'Dagger',
        },
        {
          rowNumber1: '4',
          rowValue1: 'Dagger',
          rowNumber2: '10',
          rowValue2: 'Dagger',
        },
        {
          rowNumber1: '5',
          rowValue1: 'Dagger',
          rowNumber2: '11',
          rowValue2: 'Dagger',
        },
        {
          rowNumber1: '6',
          rowValue1: 'Dagger',
          rowNumber2: '12',
          rowValue2: 'Dagger',
        },
      ];
    });
    const crookItemsColumns = computed<any[]>(() => {
      return [
        { field: 'rowNumber1' },
        { field: 'rowValue1' },
        { field: 'rowNumber2' },
        { field: 'rowValue2' },
      ];
    });
    const rowMageItemsColumns = computed<any[]>(() => {
      return [
        {
          rowNumber1: '1',
          rowValue1: 'Staff',
          rowNumber2: '7',
          rowValue2: 'Staff',
        },
        {
          rowNumber1: '2',
          rowValue1: 'Staff',
          rowNumber2: '8',
          rowValue2: 'Staff',
        },
        {
          rowNumber1: '3',
          rowValue1: 'Staff',
          rowNumber2: '9',
          rowValue2: 'Staff',
        },
        {
          rowNumber1: '4',
          rowValue1: 'Staff',
          rowNumber2: '10',
          rowValue2: 'Staff',
        },
        {
          rowNumber1: '5',
          rowValue1: 'Staff',
          rowNumber2: '11',
          rowValue2: 'Staff',
        },
        {
          rowNumber1: '6',
          rowValue1: 'Staff',
          rowNumber2: '12',
          rowValue2: 'Staff',
        },
      ];
    });
    const mageItemsColumns = computed<any[]>(() => {
      return [
        { field: 'rowNumber1' },
        { field: 'rowValue1' },
        { field: 'rowNumber2' },
        { field: 'rowValue2' },
      ];
    });
    const rowZealotItemsColumns = computed<any[]>(() => {
      return [
        {
          rowNumber1: '1',
          rowValue1: t('characterCreation.step3.itemsTables.zealotTable.item1'),
          rowNumber2: '7',
          rowValue2: t('characterCreation.step3.itemsTables.zealotTable.item7'),
        },
        {
          rowNumber1: '2',
          rowValue1: t('characterCreation.step3.itemsTables.zealotTable.item2'),
          rowNumber2: '8',
          rowValue2: t('characterCreation.step3.itemsTables.zealotTable.item8'),
        },
        {
          rowNumber1: '3',
          rowValue1: t('characterCreation.step3.itemsTables.zealotTable.item3'),
          rowNumber2: '9',
          rowValue2: t('characterCreation.step3.itemsTables.zealotTable.item9'),
        },
        {
          rowNumber1: '4',
          rowValue1: t('characterCreation.step3.itemsTables.zealotTable.item4'),
          rowNumber2: '10',
          rowValue2: t(
            'characterCreation.step3.itemsTables.zealotTable.item10'
          ),
        },
        {
          rowNumber1: '5',
          rowValue1: t('characterCreation.step3.itemsTables.zealotTable.item5'),
          rowNumber2: '11',
          rowValue2: t(
            'characterCreation.step3.itemsTables.zealotTable.item11'
          ),
        },
        {
          rowNumber1: '6',
          rowValue1: t('characterCreation.step3.itemsTables.zealotTable.item6'),
          rowNumber2: '12',
          rowValue2: t(
            'characterCreation.step3.itemsTables.zealotTable.item12'
          ),
        },
      ];
    });
    const zealotItemsColumns = computed<any[]>(() => {
      return [
        { field: 'rowNumber1' },
        { field: 'rowValue1' },
        { field: 'rowNumber2' },
        { field: 'rowValue2' },
      ];
    });

    const setClassVisible = (newClass: EClass): void => {
      areItemsTablesVisible.value = false;
      currentClass.value = newClass;
    };
    const setItemTableVisible = (): void => {
      areItemsTablesVisible.value = true;
      currentClass.value = undefined;
    };
    return {
      EClass,

      currentClass,
      areItemsTablesVisible,

      detailsHeight,
      isWarriorSelected,
      isCrookSelected,
      isMageSelected,
      isZealotSelected,
      isAnythingSelected,
      rowCommonItemsColumns,
      commonItemsColumns,
      rowWarriorItemsColumns,
      warriorItemsColumns,
      rowCrookItemsColumns,
      crookItemsColumns,
      rowMageItemsColumns,
      mageItemsColumns,
      rowZealotItemsColumns,
      zealotItemsColumns,

      setItemTableVisible,
      setClassVisible,
    };
  },
});
</script>
