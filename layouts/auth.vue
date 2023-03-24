<template>
  <div class="min-h-screen overflow-x-hidden">
    <div class="left-0 top-0 fixed -z-10 w-screen h-screen overflow-hidden">
      <div class="absolute w-[100%] h-[50%] -ml-[50%] mt-8 border border-[50px] border-primary rounded-[150px]"/>
      <div class="absolute right-0 w-[100%] h-[50%] bottom-0 -mr-[50%] mb-8 border border-[50px] border-secondary rounded-[150px]"/>
    </div>

    <NuxtPage class="flex justify-center items-center min-h-screen py-12" :key="$route.fullPath" />
  </div>
</template>
