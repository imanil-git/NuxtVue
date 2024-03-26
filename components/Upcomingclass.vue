<template>
  <!-- Upcoming Classes -->
  <div class="bordersize">
    <img
      class="imgsize"
      src="../assets/images/image 19.png"
      alt="PS.webp"
    />
    <div class="boxsize border flex justify-center items-center bg-[#F8F8FF] shadow-lg">
      <div class="flex flex-col gap-2">
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
          <span> Duration-14 Days </span>
        </div>
        <div>
          <i class="fa-solid fa-location-dot text-[#EA6547]"></i>
          <span> Location - Google Meet </span>
          <span>
            Rs.999/-
            <span class="line-through-custom text-red-500">Rs.16500</span
            ><span class="text-red-500">/-</span>
          </span>
        </div>
        <div>
          <button
            class="Btn border border-black rounded-lg hover:bg-[#EA6547] hover:text-white hover:border-none"
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
  width: 440px;
  height: 451px;
}
.imgsize {
  width: 440px;
  height: 224px;
}
.boxsize{
  width: 440px;
  height: 227px;
}
.Btn{
  width: 392px;
  height: 41px;
}
</style>
