<template>
  <div class="py-10 flex flex-col gap-2">
    <div class="flex items-center justify-center">
      <div class="pl-8">
        <img src="/logo.png" alt="Logo" class="w-auto h-32 mx-auto" />
      </div>
    </div>

    <div class="text-center text-sm font-bold">
      <p>Cornwall's second alternative male voice choir</p>
    </div>

    <div class="max-w-3xl mx-auto mt-6">
      <UCard class="mx-2">
        <div class="text-center">
          <h1 class="text-2xl font-bold">Gigs:</h1>
          <p>
            <span class="font-bold">28 June - 3pm -</span>
            <a href="https://www.facebook.com/starinnvoguecharityaleandmusicfestival/" target="_blank" class="underline">
              The Star Inn Ale and Music Festival
            </a>
          </p>
        </div>
      </UCard>
    </div>

    <div class="flex items-center justify-center gap-4 mt-6">
      <UButton href="https://www.instagram.com/manymensoundsystem" target="_blank" icon="i-mdi-instagram" />
      <UButton
        href="mailto:mrbjjackson@gmail.com?subject=MMSS website query&body=Hi men,"
        target="_blank"
        color="secondary"
        icon="i-mdi-email"
      />
    </div>

    <!-- <div class="w-full overflow-hidden my-4 border-0 border-black px-4">
      <img src="/men.jpg" alt="The men" class="h-auto w-full object-cover" />
    </div> -->

    <div
      class="rounded-sm overflow-hidden w-[300px] sm:w-[400px] md:w-[500px] lg:w-[500px] mx-auto my-4 border-0 border-black"
    >
      <img src="/men.jpg" alt="The men" class="h-auto w-full object-cover" />
    </div>

    <div class="text-center">Made with ❤️ by your men</div>
    <!-- <div class="p-6">
      <UCard class="bg-secondary-100"> Hello </UCard>
    </div> -->
  </div>
</template>

<script setup lang="ts"></script>
