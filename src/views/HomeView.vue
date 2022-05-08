<script setup>
import PlayerCard from "../components/PlayerCard.vue";
import { useDataPlayerStore } from "../store/DataPlayerStore";
const playerStore = useDataPlayerStore();
async function getPlayer() {
  console.log("enter");
  if (playerStore.dataPlayer.length == 0) {
    console.log("dataPlayer == 0");
    await playerStore.getData();
  }
}
getPlayer();
</script>

<template>
  <div
    class="flex h-screen w-full flex-row overflow-auto bg-cover bg-fixed"
    style="background-image: url('/bg-tennis.png')"
  >
    <div class="basis-full text-center md:basis-2/3 md:text-left lg:basis-1/2">
      <div class="h-screen">
        <div class="flex flex-col pb-10">
          <div class="mx-auto w-3/4 py-4">
            <input
              type="text"
              class="w-full rounded-xl bg-slate-600 p-3 text-myorangelight placeholder-myorangelight opacity-75"
              placeholder="Rechercher un joueur"
            />
          </div>

          <router-link
            :to="`/player/${player.id}`"
            v-for="(player, index) in playerStore.dataPlayer"
            :key="index"
            class="mx-auto mt-4 w-3/4 bg-white shadow-xl"
          >
            <PlayerCard :player="player" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
