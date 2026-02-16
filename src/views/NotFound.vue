<script setup lang="ts">
// 404 page
</script>

<template>
  <div class="not-found">
    <div class="container">
      <h1>404</h1>
      <p>Page not found</p>
      <router-link to="/" class="btn">Go Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

h1 {
  font-size: 6rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}
</style>
