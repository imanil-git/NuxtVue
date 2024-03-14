<template>
    <!-- Course Card -->
    <div
      class="card relative shadow-xl min-w-60 h-56 border-none overflow-hidden bg-[#F8F8FF]"
    >
      <div>
        <img
          class="w-auto h-32"
          src="../assets/images/ReactJS.webp"
          alt="ReactJs.Webp"
        />
      </div>
      <div class="px-2 py-4">
        <h4 class="text-base font-semibold mb-0">
          React Js Frontend Framework
        </h4>
        <small>Frontend</small> <br />
        <small
          >Rs.999 /-
          <span class="line-through-custom text-[#EA6547]">Rs.16000</span>
        </small>
        <button
          class="bg-[#2F4697] text-white font-serif text-sm rounded-2xl syllabus hover:bg-[#EA6547]"
        >
          Syllabus
        </button>
      </div>
    </div>
    <!-- Course Card -->
</template>

<script setup></script>

<style scoped>
.syllabus {
  width: 93px;
  height: 29px;
  position: absolute;
  top: 112px;
  right: -12px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 1s ease-in, opacity 1s ease-in;
}

.card:hover .syllabus {
  visibility: visible;
  opacity: 1;
}
.line-through-custom{
    text-decoration: line-through red;
}
</style>
