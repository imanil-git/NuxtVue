<template>
  <!-- =====  Hero Section  ===== -->
  <section class="bg-[#F8F8FF]">
    <div class="container mx-auto h-80 flex justify-between items-center">
      <div>
        <h1 class="belgrano-regular text-4xl mb-2 text-black">
          Welcome to Code It
        </h1>
        <i class="fa-solid fa-quote-left text-[#EA6547] text-2xl"></i>
        <p class="text-sm text-black mb-1">
          Establish your skills with experts and earn industry recognized
          <span class="text-lg text-[#EA6547]">certificates</span>
        </p>
        <span class="text-4xl text-[#EA6547]"
          >60k+ <small class="text-base text-black">Members</small></span
        >
        <div class="pt-14">
          <span class="text-black">Connect with us on</span>
          <div class="border border-black w-36"></div>
          <div class="flex items-center gap-4">
            <a href="" title="Facebook"
              ><i class="fa-brands fa-facebook text-black text-2xl"></i
            ></a>
            <a href="" title="Instagram"
              ><i class="fa-brands fa-instagram text-black text-2xl"></i
            ></a>
            <a href="" title="Youtube"
              ><i class="fa-brands fa-youtube text-black text-2xl"></i
            ></a>
            <a href="" title="LinkedIn"
              ><i class="fa-brands fa-linkedin text-black text-2xl"></i
            ></a>
          </div>
        </div>
      </div>
      <div class="img-area">
        <img src="../assets/images/Group.png" alt="" />
      </div>
    </div>
  </section>
  <!-- =====  Hero section end  ===== -->

  <!-- =====  Upcoming Classes  ===== -->
  <section class="bg-[#E6EEFD] py-14">
    <div class="container mx-auto mb-14">
      <h1 class="text-2xl font-bold mb-2 text-center">Upcoming Classes</h1>
      <p class="mb-10 text-center text-[#212529]">
        See what's coming in next updates, learn and earn free valued
        certificates
      </p>
      <!-- Upcoming Classes Card -->
      <div class="flex overflow-scroll gap-5">
        <div v-for="i in 4" :key="i">
          <Upcomingclass />
        </div>
      </div>
      <!-- End of Upcoming Classes Card -->
    </div>
  </section>
  <!-- =====  End of Upcoming Classes  ===== -->

  <!-- =====  Services  ===== -->
  <section class="bg-[#1B3358] pb-10">
    <div>
      <div class="container mx-auto">
        <div>
          <div class="flex gap-12 pt-2 mb-4">
            <h3 class="text-2xl font-bold text-white">Courses</h3>
            <div class="border h-7 border-white"></div>
            <div class="overflow-scroll flex items-center gap-12">
              <a href="" class="hover:underline text-[#EA6547]">Programming</a>
              <a href="" class="hover:underline hover:text-[#EA6547] text-white"
                >Quality Assurance</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547] text-white"
                >Networking</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547] text-white"
                >Mobile App Development</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547] text-white"
                >Framework</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547] text-white"
                >FullStack</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547] text-white"
                >CyberSecurity</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547] text-white"
                >Designing</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547] text-white"
                >Corporate</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547] text-white"
                >Database</a
              >
              <a href="" class="hover:underline hover:text-[#EA6547] text-white"
                >CivilEngineer</a
              >
            </div>
          </div>

          <p class="text-white">
            Programming is the process of designing, writing, testing and
            maintaining the source code of computer it involves using a
            programming language to give instruction to a <br />
            computer to perform specific tasks or to solve problems.
          </p>

          <!-- Course Card -->
          <div class="flex p-12 space-x-10 overflow-scroll">
            <div v-for="i in 4" :key="i">
              <Coursecard />
            </div>
          </div>
          <!-- End of Course Card -->
        </div>
      </div>
    </div>
  </section>
  <!-- =====  End of Services  ===== -->

  <!-- =====  Popular Courses  ===== -->
  <section class="bg-[#E6EEFD] py-14">
    <div class="container mx-auto">
      <h3 class="text-center text-2xl font-bold mb-3">Popular Courses</h3>
      <p class="text-center text-[#212529] mb-6">
        Discover what's trending. Explore our most popular courses loved by
        students worldwide.
      </p>

      <!-- Popular Courses Card  -->
      <div class="flex gap-20 justify-center">
        <div v-for="i in 4" :key="i">
          <Popularcard />
        </div>
      </div>
      <div class="flex justify-center">
        <button
          class="border rounded-lg border-black hover:border-none hover:text-white hover:bg-[#EA6547] w-48 h-8 text-center"
        >
          View All
        </button>
      </div>
    </div>

    <!-- End of Popular Courses Card -->

    <!-- why Code IT -->
    <div class="container mx-auto h-2/6 pt-20">
      <div class="grid grid-cols-2 items-center">
        <div class="flex justify-center">
          <img
            class="w-full h-fill p-8"
            src="../assets/images/Youtube.png"
            alt=""
          />
        </div>
        <div>
          <h3 class="text-center">Why Code IT ?</h3>
          <p>
            At Code IT, we take pride in being a premier computer institute
            committed to shaping the future of tech enthusiasts since our
            establishment on December 24, 2017. As a dedicated center for
            learning and development, we empower individuals with the skills and
            knowledge essential for success in the dynamic world of technology.
          </p>
        </div>
      </div>
    </div>
    <!-- why Code IT End -->
  </section>
  <!-- =====  End of Popular Courses  ===== -->

  <!-- =====  Feedback  ===== -->
  <section class="bg-[#1B3358]">
    <div class="relative container mx-auto py-6">
      <h1 class="text-center text-2xl font-bold mb-12 text-white">
        What our students say about us
      </h1>
      <div class="flex gap-16 justify-center overflow-scroll">
        <div v-for="i in 10" :key="i">
          <Video />
        </div>
      </div>
      <div
        class="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2"
      >
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full bg-white"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="2"
        ></button>
      </div>
    </div>
  </section>
  <!-- =====  End of Feedback  ===== -->

  <section class="bg-[#E6EEFD] pt-24 pb-8">
    <!-- =====  Admission info  ===== -->
    <div class="container mx-auto">
      <div class="grid grid-cols-2 items-center">
        <div>
          <h1 class="text-center text-2xl font-bold mb-2 text-[#264788]">
            More than 60,000 Student has <br />
            joined our courses
          </h1>
          <p class="text-center mb-3">
            We not only offer career-oriented IT training in Nepal as per
            industry needs but also assist in <br />
            successful job placements for deserving students and professionals
          </p>
          <div class="flex justify-center">
            <button class="bg-[#264788] text-white w-40 h-10 rounded-lg">
              Admission
            </button>
          </div>
        </div>
        <div>
          <img
            class="w-full h-full p-10"
            src="../assets/images/img.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- =====  End of Admission info  ===== -->

    <!-- =====  About Partner  ===== -->
    <div class="container mx-auto">
      <h1 class="text-center text-2xl font-bold mb-2">Our Placement Partner</h1>
      <p class="mb-6 indent-2 text-center">
        At CodeIt, we take immense pride in our strong network of placement
        partners, which plays a pivotal role in shaping the success stories of
        our talented <br />
        individuals. These strategic collaborations with industry leaders and
        renowned companies enable us to provide unparalleled placement
        opportunities for our students.
      </p>
      <div class="flex gap-5 justify-between pb-10">
        <div v-for="i in 4" :key="i">
          <img class-="w-64 h-64" src="../assets/images/mantra.png" alt="" />
        </div>
      </div>
    </div>
    <!-- =====  End of About Partner  ===== -->

    <!-- =====  Photo Gallery  ===== -->
    <div class="container mx-auto">
      <h1 class="text-center text-2xl font-bold mb-2">Photo Gallery</h1>
      <div class="flex gap-5 overflow-scroll">
        <div v-for="i in 8" :key="i">
          <Gallery />
        </div>
      </div>
    </div>
    <!-- =====  End of Photo Gallery  ===== -->

    <!-- =====  Admission info  ===== -->
    <div class="container mx-auto">
      <div class="grid grid-cols-2 items-center">
        <div>
          <img
            class="w-full h-full p-10"
            src="../assets/images/img.png"
            alt=""
          />
        </div>
        <div>
          <h1 class="text-center text-2xl font-bold mb-2 text-[#264788]">
            Join as Instructor
          </h1>
          <p class="text-center mb-3">
            Do you have a desire to share your knowledge and <br />
            empower the next generation of tech enthusiasts?
          </p>

          <p class="text-center mb-3">
            Code IT invites dynamic and experienced individuals to <br />
            join our team as instructors.
          </p>
          <div class="flex justify-center">
            <button class="bg-[#264788] text-white w-40 h-10 rounded-lg">
              Admission
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- =====  End of Admission info  ===== -->
  </section>
  
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
