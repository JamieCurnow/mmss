<template>
 
  <div class="pb-10 flex flex-col gap-2">
  <div class=" overflow-hidden mx-auto mb-4 border-0 border-black">
      <img src="/men.jpg" alt="The men" class="h-auto w-full object-cover" />
  </div>
    <div class="flex items-center justify-center">
      <div class="">
        <img src="/logo.png" alt="Logo" class="w-auto h-32 mx-auto max-w-full" />
      </div>
    </div>

    <div class="text-center text-sm font-bold">
      <p>Cornwall's second alternative male voice choir</p>
    </div>

        <div class="max-w-3xl mx-auto mt-6">
      <p><a href="https://mailchi.mp/02ec07f90618/online-mailing-list-form" title="Many Men Soundsystem Mailing list" class="underline">Join the mailing list for gig updates and the like.</a></p>
    </div>

    <div class="max-w-3xl mx-auto mt-6">
      <UCard class="mx-2">
        <div class="text-center">
          <h1 class="text-2xl">Gigs:</h1>
          <p>
            <span class="font-bold">26th July - set times 12pm + 7pm</span>
            <a href="https://verdantbrewing.co/blogs/taproom-events/little-summer-beer-bash-2025" target="_blank" class="underline">
              Verdant Little Summer Beer Bash 2025 at Verdant Taproom, Penryn
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



    <!-- <div class="text-center">Made with ❤️ by your men</div> -->
    <!-- <div class="p-6">
      <UCard class="bg-secondary-100"> Hello </UCard>
    </div> -->
  </div>
</template>

<script setup lang="ts"></script>
