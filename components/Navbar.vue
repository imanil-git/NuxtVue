<template>
    <section class="bg-[#F8F8FF] drop-shadow-md sticky top-0 z-10">
            <div class="container mx-auto flex justify-between items-center h-16 bg-[#F8F8FF] gap-24">
                <div class="flex gap-4">
                    <div>
                        <img class="w-52 h-12" src="../assets/images/codeit-logo.webp" alt="codeIT-logo.webp">
                    </div>
                    <div class="flex items-center">
                        <form action="">
                            <div class="relative flex items-center gap-4 text-gray-400 focus-within:text-[#264788] ">
                                <i class="fa-solid fa-magnifying-glass absolute ml-4 pointer-events-none "></i>
                                <input name="search" type="text" placeholder="search..."
                                    class="w-96 h-10 pr-3 pl-10 py-2 border-none rounded-md bg-[#E3E6EC] focus:ring-[#264788] focus:outline-none">
                                <i class="fa-regular fa-bell text-xl text-[#212529]"></i>
                                <span class="text-[#212529]">Form Submission More</span>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="flex gap-4 items-center">
                    <button
                        class="bg-[#EA6547] text-white px-2 rounded-xl text-sm w-32 h-8">Admission</button>
                </div>    
            </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>