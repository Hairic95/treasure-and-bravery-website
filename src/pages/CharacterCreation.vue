<template>
  <div class="row justify-evenly">
    <div class="col-md-5 col-12 q-pr-md-sm">
      <q-card bordered class="q-mb-md">
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('characterCreation.step1.title') }}
        </q-card-section>
        <q-card-section class="q-py-none">
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
      <q-card bordered class="q-mb-md">
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('characterCreation.step2.title') }}
        </q-card-section>
        <q-card-section class="q-py-none">
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
      <q-card bordered class="q-mb-md">
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('characterCreation.step3.title') }}
        </q-card-section>
        <q-card-section class="q-py-none">
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
      <q-card bordered>
        <q-card-section class="text-size-20 text-bold q-pb-none">
          {{ $t('characterCreation.step4.title') }}
        </q-card-section>
        <q-card-section class="q-pt-none">
          {{ $t('characterCreation.step4.miscDescription') }}
        </q-card-section>
      </q-card>
    </div>
    <div class="col-md-7 col-12 q-pl-md-sm">
      <q-card v-if="isAnythingSelected" bordered class="q-mb-md">
        <!--<q-scroll-area :style="'height: ' + detailsHeight">-->
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
              $t('characterCreation.step2.warrior.archetype1Skill1Description')
            }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.warrior.archetype1Skill2') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{
              $t('characterCreation.step2.warrior.archetype1Skill2Description')
            }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.warrior.archetype1Skill3') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{
              $t('characterCreation.step2.warrior.archetype1Skill3Description')
            }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.warrior.archetype1Skill4') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{
              $t('characterCreation.step2.warrior.archetype1Skill4Description')
            }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.warrior.archetype1Skill5') }}
          </q-card-section>
          <q-card-section class="row q-pt-none">
            {{
              $t('characterCreation.step2.warrior.archetype1Skill5Description')
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
              $t('characterCreation.step2.warrior.archetype2Skill1Description')
            }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.warrior.archetype2Skill2') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{
              $t('characterCreation.step2.warrior.archetype2Skill2Description')
            }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.warrior.archetype2Skill3') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{
              $t('characterCreation.step2.warrior.archetype2Skill3Description')
            }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.warrior.archetype2Skill4') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{
              $t('characterCreation.step2.warrior.archetype2Skill4Description')
            }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.warrior.archetype2Skill5') }}
          </q-card-section>
          <q-card-section class="row q-pt-none">
            {{
              $t('characterCreation.step2.warrior.archetype2Skill5Description')
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
            {{ $t('characterCreation.step2.mage.archetype1Skill1Description') }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.mage.archetype1Skill2') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{ $t('characterCreation.step2.mage.archetype1Skill2Description') }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.mage.archetype1Skill3') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{ $t('characterCreation.step2.mage.archetype1Skill3Description') }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.mage.archetype1Skill4') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{ $t('characterCreation.step2.mage.archetype1Skill4Description') }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.mage.archetype1Skill5') }}
          </q-card-section>
          <q-card-section class="row q-pt-none">
            {{ $t('characterCreation.step2.mage.archetype1Skill5Description') }}
          </q-card-section>
          <q-separator></q-separator>
          <q-card-section class="text-size-20 text-bold q-pb-none">
            {{ $t('characterCreation.step2.mage.archetype2') }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.mage.archetype2Skill1') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{ $t('characterCreation.step2.mage.archetype2Skill1Description') }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.mage.archetype2Skill2') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{ $t('characterCreation.step2.mage.archetype2Skill2Description') }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.mage.archetype2Skill3') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{ $t('characterCreation.step2.mage.archetype2Skill3Description') }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.mage.archetype2Skill4') }}
          </q-card-section>
          <q-card-section class="row q-py-none">
            {{ $t('characterCreation.step2.mage.archetype2Skill4Description') }}
          </q-card-section>
          <q-card-section class="text-size-18 text-bold q-py-none">
            {{ $t('characterCreation.step2.mage.archetype2Skill5') }}
          </q-card-section>
          <q-card-section class="row q-pt-none">
            {{ $t('characterCreation.step2.mage.archetype2Skill5Description') }}
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
              <template v-slot:body-cell-rowValue1="props">
                <q-td>
                  {{ props.value }}
                  <q-tooltip class="text-size-12" style="max-width: 600px">
                    {{ props.row.rowValue1Description }}
                  </q-tooltip>
                </q-td>
              </template>
              <template v-slot:body-cell-rowValue2="props">
                <q-td>
                  {{ props.value }}
                  <q-tooltip class="text-size-12" style="max-width: 600px">
                    {{ props.row.rowValue2Description }}
                  </q-tooltip>
                </q-td>
              </template>
              <template v-slot:body-cell-rowValue3="props">
                <q-td>
                  {{ props.value }}
                  <q-tooltip class="text-size-12" style="max-width: 600px">
                    {{ props.row.rowValue3Description }}
                  </q-tooltip>
                </q-td>
              </template>
              <template v-slot:body-cell-rowValue4="props">
                <q-td>
                  {{ props.value }}
                  <q-tooltip class="text-size-12" style="max-width: 600px">
                    {{ props.row.rowValue4Description }}
                  </q-tooltip>
                </q-td>
              </template>
              <template v-slot:body-cell-rowValue5="props">
                <q-td>
                  {{ props.value }}
                  <q-tooltip class="text-size-12" style="max-width: 600px">
                    {{ props.row.rowValue5Description }}
                  </q-tooltip>
                </q-td>
              </template>
              <template v-slot:body-cell-rowValue6="props">
                <q-td>
                  {{ props.value }}
                  <q-tooltip class="text-size-12" style="max-width: 600px">
                    {{ props.row.rowValue6Description }}
                  </q-tooltip>
                </q-td>
              </template>
            </q-table>
          </q-card-section>
          <q-card-section class="row q-pt-none">
            <div class="col-6 q-pt-md q-pr-sm">
              <div class="text-size-18 text-bold q-py-none">
                {{ $t('characterCreation.step3.itemsTables.warriorItems') }}
              </div>
              <q-table
                hide-header
                :columns="classItemsColumns"
                :rows="rowWarriorItemsColumns"
                hide-pagination
                :pagination="{ rowsPerPage: 0 }"
              >
                <template v-slot:body-cell-rowValue1="props">
                  <q-td>
                    {{ props.value }}
                    <q-tooltip class="text-size-12" style="max-width: 600px">
                      {{ props.row.rowValue1Description }}
                    </q-tooltip>
                  </q-td>
                </template>
                <template v-slot:body-cell-rowValue2="props">
                  <q-td>
                    {{ props.value }}
                    <q-tooltip class="text-size-12" style="max-width: 600px">
                      {{ props.row.rowValue2Description }}
                    </q-tooltip>
                  </q-td>
                </template>
              </q-table>
            </div>
            <div class="col-6 q-pt-md q-pl-sm">
              <div class="text-size-18 text-bold q-py-none">
                {{ $t('characterCreation.step3.itemsTables.crookItems') }}
              </div>
              <q-table
                hide-header
                :columns="classItemsColumns"
                :rows="rowCrookItemsColumns"
                hide-pagination
                :pagination="{ rowsPerPage: 0 }"
              >
                <template v-slot:body-cell-rowValue1="props">
                  <q-td>
                    {{ props.value }}
                    <q-tooltip class="text-size-12" style="max-width: 600px">
                      {{ props.row.rowValue1Description }}
                    </q-tooltip>
                  </q-td>
                </template>
                <template v-slot:body-cell-rowValue2="props">
                  <q-td>
                    {{ props.value }}
                    <q-tooltip class="text-size-12" style="max-width: 600px">
                      {{ props.row.rowValue2Description }}
                    </q-tooltip>
                  </q-td>
                </template>
              </q-table>
            </div>
            <div class="col-6 q-pt-md q-pr-sm">
              <div class="text-size-18 text-bold q-py-none">
                {{ $t('characterCreation.step3.itemsTables.mageItems') }}
              </div>
              <q-table
                hide-header
                :columns="classItemsColumns"
                :rows="mageItemsRows"
                hide-pagination
                :pagination="{ rowsPerPage: 0 }"
              >
                <template v-slot:body-cell-rowValue1="props">
                  <q-td>
                    {{ props.value }}
                    <q-tooltip class="text-size-12" style="max-width: 600px">
                      {{ props.row.rowValue1Description }}
                    </q-tooltip>
                  </q-td>
                </template>
                <template v-slot:body-cell-rowValue2="props">
                  <q-td>
                    {{ props.value }}
                    <q-tooltip class="text-size-12" style="max-width: 600px">
                      {{ props.row.rowValue2Description }}
                    </q-tooltip>
                  </q-td>
                </template>
              </q-table>
            </div>
            <div class="col-6 q-pt-md q-pl-sm">
              <div class="text-size-18 text-bold q-py-none">
                {{ $t('characterCreation.step3.itemsTables.zealotItems') }}
              </div>
              <q-table
                hide-header
                :columns="classItemsColumns"
                :rows="rowZealotItemsColumns"
                hide-pagination
                :pagination="{ rowsPerPage: 0 }"
              >
                <template v-slot:body-cell-rowValue1="props">
                  <q-td>
                    {{ props.value }}
                    <q-tooltip class="text-size-12" style="max-width: 600px">
                      {{ props.row.rowValue1Description }}
                    </q-tooltip>
                  </q-td>
                </template>
                <template v-slot:body-cell-rowValue2="props">
                  <q-td>
                    {{ props.value }}
                    <q-tooltip class="text-size-12" style="max-width: 600px">
                      {{ props.row.rowValue2Description }}
                    </q-tooltip>
                  </q-td>
                </template>
              </q-table>
            </div>
          </q-card-section>
        </div>
        <!--</q-scroll-area>-->
      </q-card>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onBeforeMount, ref } from 'vue';
import { defineComponent } from 'vue';
import { EClass, EPages } from '../shared/base/enumerators';
import { GridHandler } from '../shared/handlers/grid-handler';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'PageCharacterCreation',
  emits: ['initializePage'],
  setup(props, context) {
    // 1) Variables
    const { t } = useI18n({ useScope: 'global' });
    const currentClass = ref<EClass | undefined>();
    const areItemsTablesVisible = ref<boolean>(false);

    // 2) Computed
    const detailsHeight = computed<string>(() => {
      return screen.height - 310 + 'px';
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
      return GridHandler.getCharacterCreationItemsRows(t);
    });
    const commonItemsColumns = computed<any[]>(() => {
      return [
        { field: 'rowNumber', name: 'rowNumber' },
        { field: 'rowValue1', name: 'rowValue1', label: '1', align: 'left' },
        { field: 'rowValue2', name: 'rowValue2', label: '2', align: 'left' },
        { field: 'rowValue3', name: 'rowValue3', label: '3', align: 'left' },
        { field: 'rowValue4', name: 'rowValue4', label: '4', align: 'left' },
        { field: 'rowValue5', name: 'rowValue5', label: '5', align: 'left' },
        { field: 'rowValue6', name: 'rowValue6', label: '6', align: 'left' },
      ];
    });
    const rowWarriorItemsColumns = computed<any[]>(() => {
      return GridHandler.getCharacterCreationWarriorItemsRows(t);
    });
    const classItemsColumns = computed<any[]>(() => {
      return [
        { field: 'rowNumber1', name: 'rowNumber1' },
        { field: 'rowValue1', name: 'rowValue1' },
        { field: 'rowNumber2', name: 'rowNumber2' },
        { field: 'rowValue2', name: 'rowValue2' },
      ];
    });
    const rowCrookItemsColumns = computed<any[]>(() => {
      return GridHandler.getCharacterCreationCrookItemsRows(t);
    });
    const mageItemsRows = computed<any[]>(() => {
      return GridHandler.getCharacterCreationMageItemsRows(t);
    });
    const rowZealotItemsColumns = computed<any[]>(() => {
      return GridHandler.getCharacterCreationZealotItemsRows(t);
    });

    // 3) Private Methods
    // 4) Public Methods
    const setClassVisible = (newClass: EClass): void => {
      areItemsTablesVisible.value = false;
      currentClass.value = newClass;
    };
    const setItemTableVisible = (): void => {
      areItemsTablesVisible.value = true;
      currentClass.value = undefined;
    };
    // 5) Watches
    // 6) Lifecycle
    onBeforeMount(() => {
      context.emit('initializePage', EPages.CharacterCreation);
    });
    // 7) Export
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
      classItemsColumns,
      rowCrookItemsColumns,
      mageItemsRows,
      rowZealotItemsColumns,

      setItemTableVisible,
      setClassVisible,
    };
  },
});
</script>
