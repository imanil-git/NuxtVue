<template>
  <!-- Hero Section -->
  <section class="bg-[#1D3D79]">
    <div class="container mx-auto h-80 flex justify-between items-center">
      <div>
        <h1 class="belgrano-regular text-4xl mb-2 text-white">
          Welcome to Code It
        </h1>
        <i class="fa-solid fa-quote-left text-[#EA6547] text-2xl"></i>
        <p class="text-sm text-white mb-1">
          Establish your skills with experts and earn industry recognized
          <span class="text-lg text-[#EA6547]">certificates</span>
        </p>
        <span class="text-4xl text-[#EA6547]"
          >60k+ <small class="text-base text-white">Members</small></span
        >
        <div class="pt-14">
          <span class="text-white">Connect with us on</span>
          <div class="flex items-center gap-4">
            <a href="" title="Facebook"
              ><i class="fa-brands fa-facebook text-white text-2xl"></i
            ></a>
            <a href="" title="Instagram"
              ><i class="fa-brands fa-instagram text-white text-2xl"></i
            ></a>
            <a href="" title="Youtube"
              ><i class="fa-brands fa-youtube text-white text-2xl"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="img-area">
        <img src="../assets/images/Group.png" alt="" />
      </div>
    </div>
  </section>
  <!-- Hero section end -->

  <!-- Upcoming Classes -->
  <section class="bg-[#F8F8FF] py-14">
    <div class="container mx-auto mb-14">
      <h1 class="text-2xl font-bold mb-2 text-center">Upcoming Classes</h1>
      <p class="mb-10 text-center text-[#212529]">
        See what's coming in next updates, learn and earn free valued
        certificates
      </p>
      <!-- Upcoming Classes Card -->
      <div class="flex gap-16 overflow-scroll">
        <Upcomingclass />
      </div>
      <!-- End of Upcoming Classes Card -->
    </div>
  </section>
  <!-- End of Upcoming Classes -->

  <!-- Services -->
  <section>
    <div class="mb-10">
      <div class="container mx-auto">
        <div>
          <div class="flex gap-12 pt-2 mb-4">
            <h3 class="text-2xl font-bold">Courses</h3>
            <div class="border h-7 border-black"></div>
            <div class="overflow-scroll flex items-center gap-12">
              <a href="" class="hover:underline text-[#EA6547]">Programming</a>
              <a href="" class="hover:underline hover:text-[#EA6547]"
                >Quality Assurance</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547]"
                >Networking</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547]"
                >Mobile App Development</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547]"
                >Framework</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547]"
                >FullStack</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547]"
                >CyberSecurity</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547]"
                >Designing</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547]"
                >Corporate</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547]"
                >Database</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547]"
                >CivilEngineer</a
              >
            </div>
          </div>

          <p>
            Programming is the process of designing, writing, testing and
            maintaining the source code of computer it involves using a
            programming language to give instruction to a <br />
            computer to perform specific tasks or to solve problems.
          </p>

          <!-- Course Card -->
          <div class="flex p-12 space-x-10 overflow-scroll">
            <Coursecard />
          </div>
          <!-- End of Course Card -->
        </div>
      </div>
    </div>
  </section>
  <!-- End of Services -->

  <!-- Popular Courses -->
  <section class="bg-[#F8F8FF] py-14">
    <h3 class="text-center text-2xl font-bold mb-3">Popular Courses</h3>
    <p class="text-center text-[#212529]">
      Discover what's trending. Explore our most popular courses loved by
      students worldwide.
    </p>

    <!-- Popular Courses Card  -->
    <div class="p-10 grid grid-cols-4 gap-6">
        <Popularcard />
    </div>
    <!-- End of Popular Courses Card -->
  </section>
  <!-- End of Popular Courses -->
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Belgrano&display=swap");

.belgrano-regular {
  font-family: "Belgrano", serif;
  font-weight: 400;
  font-style: normal;
}
.img-area {
  width: 370px;
  height: 253px;
}
::-webkit-scrollbar {
  display: none;
}
</style>
