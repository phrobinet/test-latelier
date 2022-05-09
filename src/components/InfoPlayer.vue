<template>
  <div class="w1/3 pb-5">
    <h1 class="font-mulish font-bold uppercase text-black opacity-30">
      {{ title }}
    </h1>
    <p class="font-montserrat font-bold text-sm text-myorange">
      {{ data }}
    </p>
  </div>
</template>

<script>
export default {
  name: "PlayerCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    data: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
