<template>
  <div
    class="flex h-screen w-full flex-row overflow-auto bg-cover bg-fixed"
    style="background-image: url('/bg-tennis.png')"
  >
    <div class="basis-full text-center md:basis-2/3 md:text-left lg:basis-1/2">
      <div class="h-screen">
        <div class="flex flex-col pb-10">
          <!-- Search Player Input -->
          <div class="mx-auto w-3/4 py-4">
            <input
              type="text"
              class="w-full rounded-xl bg-slate-600 p-3 text-myorangelight placeholder-myorangelight opacity-75"
              placeholder="Rechercher un joueur"
            />
          </div>

          <!-- Player List -->
          <div
            v-for="(player, index) in playerStore.dataPlayer"
            :key="index"
            @click="goToPlayer(player.id)"
            class="mx-auto mt-4 w-3/4 bg-white shadow-xl"
          >
            <PlayerCard :player="player" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PlayerCard from "../components/PlayerCard.vue";
import { useDataPlayerStore } from "../store/DataPlayerStore";
import { useRouter } from "vue-router";

const playerStore = useDataPlayerStore();
const router = useRouter();

async function getPlayer() {
  if (playerStore.dataPlayer.length == 0) {
    await playerStore.getData();
  }
}
function goToPlayer(id) {
  playerStore.getPlayer(id);
  router.push("/player/" + id);
}
getPlayer();
</script>
