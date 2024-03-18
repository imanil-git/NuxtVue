<template>
  <div
    class="relative w-60 h-56 shadow-xl rounded-lg border-none bg-[#F8F8FF] block"
    @mouseover="hideCourse"
    @mouseout="showCourse"
  >
  <div
      :style="{ opacity: courseImageOpacity }"
      class="w-full h-full transition-opacity duration-1000 ease-in-out"
    >
      <img
        class="rounded-t-lg"
        src="../assets/images/ReactJS.webp"
        alt="ReactJs.Webp"
      />
      <div class="px-2 py-4">
        <h4 class="text-base font-semibold mb-0">
          React Js Frontend Framework
        </h4>
        <small>Designing</small> <br />
        <small
          >Rs.999 /-
          <span class="line-through-custom text-[#EA6547]">Rs.16000</span>
        </small>
      </div>
    </div>

    <article
      :style="{ opacity: courseArticleOpacity }"
      class="absolute top-0 left-0 opacity-0 w-full h-full rounded-lg text-wrap pt-2 px-2 bg-[#F8F8FF] transition-opacity duration-1000 ease-in-out"
    >
      <h3 class="text-base font-semibold">UI/UX Designing</h3>
      <p class="hyphens-manual text-sm font-light mb-2">
        This syllabus is designed to provide participants with a thorough and
        hands&shy;on introduction to UI/UX design. The course covers fundamental
        principles, design tools, user research, prototyping, interaction
        design, and usability testing.
      </p>
      <div class="flex gap-2">
        <button
          class="text-[#EA6547] px-2 rounded-md text-sm w-24 h-6 border-2 border-[#EA6547]"
        >
          Syllabus
        </button>
        <button
          class="bg-[#EA6547] text-white px-2 rounded-md text-sm w-24 h-6"
        >
          Admission
        </button>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const courseImageOpacity = ref(1);
const courseArticleOpacity = ref(0);

function hideCourse() {
  courseImageOpacity.value = 0;
  courseArticleOpacity.value = 1;
}

function showCourse() {
  courseImageOpacity.value = 1;
  courseArticleOpacity.value = 0;
}
</script>

<style scoped>
.line-through-custom {
  text-decoration: line-through red;
}
</style>
