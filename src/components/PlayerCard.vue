<template>
  <div class="flex h-64 flex-col md:h-36 md:flex-row">
    <!-- Img Player -->
    <div class="mx-auto w-1/3 overflow-hidden">
      <img
        v-if="player.profilePicture"
        :src="player.profilePicture"
        class="scale-150 pt-9 xl:pt-10"
        data-test="picture"
      />
    </div>

    <div class="w-full md:w-2/3">
      <!-- Player's Name -->
      <div
        class="py-4 text-center montserrat bold text-myorange md:pl-3 md:text-left"
      >
        <h1 data-test="name" class="font-montserrat font-bold">
          {{ player.firstname }} {{ player.lastname }}
        </h1>
      </div>

      <!-- ID Player -->
      <div class="flex px-4 pb-3">
        <div class="flex w-1/3 flex-col">
          <p class="uppercase text-black opacity-30 font-mulish font-bold">
            Rank
          </p>
          <p data-test="rank" class="text-myorange font-montserrat font-bold">
            {{ "# " + player.data.rank }}
          </p>
        </div>
        <div class="flex w-1/3 flex-col">
          <p class="uppercase text-black opacity-30 font-mulish font-bold">
            Points
          </p>
          <p data-test="point" class="text-myorange font-montserrat font-bold">
            {{ player.data.points }}
          </p>
        </div>
        <div class="flex w-1/3 flex-col">
          <p class="text-black uppercase opacity-30 font-mulish font-bold">
            Country
          </p>
          <p
            data-test="country"
            class="text-myorange font-montserrat font-bold"
          >
            {{ player.country.code }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
};
</script>
