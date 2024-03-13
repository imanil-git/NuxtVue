<template>
    <!-- Hero Section -->
    <section class="bg-[#1D3D79] mb-5">
        <div class="container mx-auto h-80 flex justify-between items-center">
            <div>
                <h1 class="belgrano-regular text-4xl mb-2 text-white"> Welcome to Code It</h1>
                <i class="fa-solid fa-quote-left text-[#EA6547] text-2xl"></i>
                <p class="text-sm text-white mb-1">Establish your skills with experts and earn industry recognized <span class="text-lg text-[#EA6547]">certificates</span></p>
                <span class="text-4xl text-[#EA6547]">60k+ <small class="text-base text-white">Members</small></span>
                <div class="pt-14">
                    <span class="text-white">Connect with us on</span>
                    <div class="flex items-center gap-4">
                        <a href="" title="Facebook"><i class="fa-brands fa-facebook text-white text-2xl"></i></a>
                        <a href="" title="Instagram"><i class="fa-brands fa-instagram text-white text-2xl"></i></a>
                        <a href="" title="Youtube"><i class="fa-brands fa-youtube text-white text-2xl"></i></a>
                    </div>
                </div>
            </div>
            <div class="img-area">
                <img src="../assets/images/Group.png" alt="">
            </div>
        </div>
    </section>
    <!-- Hero section end -->

    <!-- Upcoming Classes -->
    <section class="container mx-auto mb-14">
        <h1 class="text-2xl font-bold mb-2 text-center">Upcoming Classes</h1>
        <p class="mb-10 text-center font-light text-sm text-[#212529]">See what's coming in next updates, learn and earn free valued certificates</p>
        <div>
            <Upcomingclass />
        </div>
    </section>
    <!-- End of Upcoming Classes -->
</template>

<script setup>

</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Belgrano&display=swap');

.belgrano-regular {
    font-family: "Belgrano", serif;
    font-weight: 400;
    font-style: normal;
}
.img-area{
    width: 370px;
    height: 253px;
}
.line-through-custom {
    text-decoration: line-through 2px red;
}
::-webkit-scrollbar {
    display: none;
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