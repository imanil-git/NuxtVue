<template>
  <section
    :class="{ sticky: isSticky }"
    id="menu-bar"
    class="bg-[#F8F8FF] drop-shadow-md shadow-md"
  >
    <div
      class="container mx-auto flex justify-between items-center h-16 gap-24"
    >
      <div class="flex gap-4">
        <div>
          <img
            class="w-52 h-12"
            src="../assets/images/codeit-logo.png"
            alt="codeIT-logo.webp"
          />
        </div>
        <div class="flex items-center">
          <form action="">
            <div
              class="relative flex items-center gap-4 text-gray-400 focus-within:text-[#264788]"
            >
              <i
                class="fa-solid fa-magnifying-glass absolute ml-4 pointer-events-none"
              ></i>
              <input
                name="search"
                type="text"
                placeholder="search..."
                class="w-96 h-10 pr-3 pl-10 py-2 border-none rounded-md bg-[#E3E6EC] focus:ring-[#264788] focus:outline-none"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="flex gap-4 items-center">
        <button
          class="border border-black px-2 rounded-xl text-sm font-semibold hover:text-white hover:bg-[#EA6547] hover:border-none w-32 h-8"
        >
          Student Portal
        </button>
        <button
          class="bg-[#EA6547] text-white px-2 rounded-xl text-sm w-32 h-8"
        >
          Admission
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.pageYOffset >= 64; // Adjust this value as needed
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
</style>
