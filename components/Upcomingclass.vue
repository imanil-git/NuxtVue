<template>
  <!-- Upcoming Classes -->
    <div class="bordersize relative">
      <img
        class="border imgsize rounded-full"
        src="../assets/images/PS.png"
        alt="PS.webp"
      />
      <div
        class="border-2 rounded-l-2xl inside-box flex justify-center items-center h-full shadow-lg"
      >
        <div class="flex flex-col gap-3">
          <div>
            <h3 class="text-lg font-bold">Graphic Designing</h3>
          </div>
          <div>
            <i class="fa-solid fa-calendar-days text-[#EA6547]"></i>
            <span> Date-01 March 2024 </span>
          </div>
          <div>
            <i class="fa-regular fa-clock text-[#EA6547]"></i>
            <span> Time - 8:00PM-9:30PM </span>
          </div>
          <div>
            <i class="fa-solid fa-location-dot text-[#EA6547]"></i>
            <span> Location - Google Meet </span>
          </div>
          <div class="flex gap-2 items-center">
            <p>
              Rs.999/-
              <span class="line-through-custom text-red-500">Rs.16500</span
              ><span class="text-red-500">/-</span>
            </p>
            <div class="border border-black h-4"></div>
            <span> Duration-14 Days </span>
          </div>
          <div>
            <button
              class="w-72 border border-black h-10 rounded-lg hover:bg-[#EA6547] hover:text-white hover:border-none"
            >
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </div>
  <!-- End of Upcoming Classes -->
</template>

<script setup></script>

<style scoped>
.line-through-custom {
  text-decoration: line-through red;
}
.bordersize {
  width: 506px;
  height: 267px;
  padding-left: 6%;
}

.inside-box {
  width: 434px;
  height: 267px;
}

.imgsize {
  width: 138px;
  height: 138px;
  position: absolute;
  left: 0px;
  top: 60px;
}
</style>
