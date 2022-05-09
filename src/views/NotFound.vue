<template>
  <div
    class="flex h-screen w-full flex-row overflow-auto bg-cover bg-fixed"
    style="background-image: url('/bg-tennis.png')"
  >
    <div class="m-auto max-w-7xl py-6 px-4 align-middle sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold leading-tight text-gray-900">
        Page Not Found
      </h1>
      <p class="text-center">
        Go
        <router-link
          to="/"
          class="underline-offset-1 underline text-blue-600 hover:text-purple-600"
          >Home</router-link
        >
      </p>
    </div>
  </div>
</template>
