<script setup lang="ts">
import { ref } from 'vue'

const features = [
  {
    icon: '⚡',
    title: '0.05ms Updates',
    description: 'Incremental graph updates in microseconds'
  },
  {
    icon: '📊',
    title: '47% Fewer Tokens',
    description: 'Massive token savings vs no plugin'
  },
  {
    icon: '🎯',
    title: '7 Languages',
    description: 'Python, TS, JS, Rust, C, C++, Java'
  },
  {
    icon: '🔄',
    title: 'Real-time Intelligence',
    description: 'Live dependency tracking on every edit'
  }
]
</script>

<template>
  <div class="home">
    <nav class="navbar">
      <div class="container">
        <div class="nav-brand">
          <h1>StreamRAG</h1>
        </div>
        <div class="nav-links">
          <router-link to="/docs" class="nav-link">Documentation</router-link>
          <a href="https://github.com/Krrish2004/StreamRAG" target="_blank" class="nav-link">
            GitHub
          </a>
        </div>
      </div>
    </nav>

    <header class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Real-time Incremental
            <span class="gradient-text">Code Graph</span>
          </h1>
          <p class="hero-subtitle">
            Give Claude Code structural superpowers with instant dependency tracking
          </p>
          <div class="hero-actions">
            <a
              href="https://github.com/Krrish2004/StreamRAG#quick-install"
              target="_blank"
              class="btn btn-primary"
            >
              Get Started
            </a>
            <router-link to="/docs" class="btn btn-secondary"> Learn More </router-link>
          </div>
        </div>
      </div>
    </header>

    <section class="features">
      <div class="container">
        <h2 class="section-title">Why StreamRAG?</h2>
        <div class="features-grid">
          <div v-for="feature in features" :key="feature.title" class="feature-card">
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 StreamRAG. All Rights Reserved.</p>
        <p>
          Built by
          <a href="https://github.com/Krrish2004" target="_blank">Krrish Choudhary</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.navbar {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand h1 {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
}

.nav-link:hover {
  opacity: 0.8;
}

.hero {
  padding: 8rem 0;
  text-align: center;
}

.hero-title {
  font-size: 4rem;
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.gradient-text {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn {
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
  display: inline-block;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  backdrop-filter: blur(10px);
}

.features {
  background: white;
  padding: 6rem 0;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #2d3748;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  color: white;
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.feature-description {
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
}

.footer {
  background: #1a202c;
  color: white;
  padding: 3rem 0;
  text-align: center;
}

.footer a {
  color: #667eea;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: center;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
