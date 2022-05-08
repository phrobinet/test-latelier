<template>
  <div class="flex h-screen flex-col bg-amber-900 p-16">
    <div class="mx-auto cursor-pointer" @click="goHome">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--ic"
        width="45"
        height="45"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          color="white"
          d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
        ></path>
      </svg>
    </div>
    <div class="flex h-screen bg-white">
      <div class="hidden h-screen w-1/4 md:inline">
        <img
          :src="playerStore.player.picture"
          alt=""
          class="-translate-x-1/4 scale-150 w-screen pt-16"
        />
      </div>

      <div class="flex w-full flex-col md:w-3/4">
        <div class="flex h-60">
          <div class="w-4/5 mt-8 ml-4">
            <h1
              class="md:text-5xl xl:text-6xl -mb-8 text-4xl font-bold text-myorange"
            >
              {{ playerStore.player.firstname }}
            </h1>
            <h1 class="lg:text-8xl md:7xl text-6xl font-bold text-myorange">
              {{ playerStore.player.lastname }}
            </h1>
          </div>

          <div
            class="mt-6 mr-6 flex w-1/5"
            v-show="playerStore.player.country.picture"
          >
            <div>
              <img
                :src="playerStore.player.country.picture"
                class=""
                alt=""
                srcset=""
              />
              <h1 class="mt-3 text-center uppercase text-black opacity-30">
                {{ playerStore.player.country.code }}
              </h1>
            </div>
          </div>
        </div>

        <div class="ml-7 flex flex-col lg:flex-row">
          <div class="grid w-full grid-cols-3 lg:w-2/3">
            <InfoPlayer
              title="Rank"
              :data="'# ' + playerStore.player.data.rank"
            />

            <InfoPlayer title="Points" :data="playerStore.player.data.points" />

            <InfoPlayer
              title="Country"
              :data="playerStore.player.country.name"
            />

            <InfoPlayer
              title="Birthday"
              :data="playerStore.player.data.birthday"
            />

            <InfoPlayer title="Age" :data="playerStore.player.data.age" />

            <InfoPlayer
              title="Weight"
              :data="playerStore.player.data.weight / 1000 + ' kg'"
            />

            <InfoPlayer
              title="Height"
              :data="playerStore.player.data.height + ' cm'"
            />
          </div>
          <div class="w-full lg:w-1/3">
            <h1 class="font-mulish font-bold uppercase text-black opacity-30">
              Career Titles
            </h1>
            <div
              v-for="win in playerStore.player.title"
              :key="win.year"
              class="pb-3 text-myorange"
            >
              <h3 class="font-mulish font-bold">
                {{ win.year }} -
                <span class="font-normal">{{ win.items.length }}</span>
              </h3>
              <p
                v-for="(item, index) in win.items"
                :key="index"
                class="font-mulish font-semibold"
              >
                {{ item }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useDataPlayerStore } from "../store/DataPlayerStore";
import InfoPlayer from "@/components/InfoPlayer.vue";
const router = useRouter();
const route = useRoute();
const playerStore = useDataPlayerStore();
function goHome() {
  playerStore.player = {};
  router.push("/");
}
playerStore.getPlayer(route.params.id);
</script>
