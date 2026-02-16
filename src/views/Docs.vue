<script setup lang="ts">
// Documentation page coming soon
</script>

<template>
  <div class="docs">
    <div class="container">
      <h1>Documentation</h1>
      <p>Coming soon...</p>
      <router-link to="/" class="btn">Back to Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.docs {
  min-height: 100vh;
  padding: 4rem 2rem;
  background: #f7fafc;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #2d3748;
}

p {
  font-size: 1.5rem;
  color: #718096;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: #667eea;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}
</style>
