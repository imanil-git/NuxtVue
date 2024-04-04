<template>
  <div>
    <Topbar />
    <Navbar />
    <main>
      <slot></slot>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script setup></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
