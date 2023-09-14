<template>
  <div class="page-container">
    <header>
      Header
    </header>
    <main>
        <RouterView />
    </main>
  </div>
</template>

<style scoped>
.page-container {
  height: 100vh;
}

header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--exi-border-color);
}
</style>
