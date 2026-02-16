<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Animated counter for stats
const animateValue = (start: number, end: number, duration: number, callback: (val: number) => void) => {
  const startTime = performance.now()
  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const value = start + (end - start) * progress
    callback(value)
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  requestAnimationFrame(animate)
}

const tokensSaved = ref(0)
const updateTime = ref(0)
const languages = ref(0)

onMounted(() => {
  setTimeout(() => {
    animateValue(0, 47, 2000, (val) => (tokensSaved.value = Math.floor(val)))
    animateValue(0, 0.05, 2000, (val) => (updateTime.value = parseFloat(val.toFixed(2))))
    animateValue(0, 7, 2000, (val) => (languages.value = Math.floor(val)))
  }, 500)
})

const features = [
  {
    title: 'Incremental Updates',
    description: 'Surgical AST diffing patches only changed nodes. No full rebuilds.',
    icon: 'ΔAST',
    metric: '0.05ms',
    color: 'cyan'
  },
  {
    title: 'Native Parsers',
    description: 'Rust, Node.js, JVM daemons provide full AST parsing over Unix sockets.',
    icon: 'PARSE',
    metric: '3 Daemons',
    color: 'green'
  },
  {
    title: 'Token Efficiency',
    description: 'Graph queries replace exploration. 96% reduction on architecture traces.',
    icon: 'GRAPH',
    metric: '47% Less',
    color: 'purple'
  },
  {
    title: 'Multi-Language',
    description: 'Python, TypeScript, JavaScript, Rust, C, C++, Java with intelligent fallbacks.',
    icon: 'LANG',
    metric: '7 Languages',
    color: 'cyan'
  }
]

const techStack = [
  'Python 3.9+',
  'TypeScript/JSX',
  'Rust Parser',
  'Tree-sitter AST',
  'Unix Sockets',
  'Msgpack Protocol'
]

// Copy code to clipboard
const copyCode = () => {
  const code = `# Install prerequisites
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install StreamRAG
claude plugin marketplace add Krrish2004/StreamRAG
claude plugin install streamrag@streamrag

# Build native parsers
bash ~/.claude/plugins/.../build-native-parsers.sh`

  navigator.clipboard.writeText(code).then(() => {
    // Show feedback (optional - could add a "Copied!" message)
    const button = document.querySelector('.copy-button')
    if (button) {
      const originalText = button.querySelector('.copy-text')
      if (originalText) {
        originalText.textContent = 'Copied!'
        setTimeout(() => {
          originalText.textContent = 'Copy'
        }, 2000)
      }
    }
  })
}
</script>

<template>
  <div class="home">
    <!-- Animated background grid -->
    <div class="grid-background"></div>
    <div class="scan-line"></div>

    <!-- Navigation -->
    <nav class="navbar">
      <div class="container">
        <div class="nav-brand">
          <img src="/logo.svg" alt="StreamRAG" class="logo-image" />
          <div class="brand-text">
            <span class="brand-name">StreamRAG</span>
            <span class="brand-tagline">Real-time Code Intelligence</span>
          </div>
        </div>
        <div class="nav-menu">
          <a href="#features" class="nav-link">Features</a>
          <a href="#architecture" class="nav-link">Architecture</a>
          <a href="https://github.com/Krrish2004/StreamRAG/blob/main/README.md" target="_blank" class="nav-link">Documentation</a>
          <a href="https://github.com/Krrish2004/StreamRAG" target="_blank" class="nav-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd"/>
            </svg>
            GitHub
          </a>
          <a href="https://github.com/Krrish2004/StreamRAG#quick-install" target="_blank" class="nav-cta">
            Get Started
          </a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">
            <span class="pulse-dot"></span>
            Real-time Code Intelligence
          </div>

          <h1 class="hero-title">
            <span class="title-line">Incremental</span>
            <span class="title-line title-highlight">Code Graph</span>
            <span class="title-line">for Claude Code</span>
          </h1>

          <p class="hero-description">
            StreamRAG computes minimal AST diffs and surgically patches the dependency graph
            <span class="text-highlight">in microseconds</span>. Give Claude structural superpowers
            with real-time relationship tracking.
          </p>

          <div class="hero-stats">
            <div class="stat-card">
              <div class="stat-value">{{ updateTime }}<span class="stat-unit">ms</span></div>
              <div class="stat-label">Per Update</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">{{ tokensSaved }}<span class="stat-unit">%</span></div>
              <div class="stat-label">Fewer Tokens</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">{{ languages }}</div>
              <div class="stat-label">Languages</div>
            </div>
          </div>

          <div class="hero-actions">
            <a
              href="https://github.com/Krrish2004/StreamRAG#quick-install"
              target="_blank"
              class="btn btn-primary"
            >
              <span class="btn-icon">$</span>
              Quick Install
            </a>
            <a
              href="https://github.com/Krrish2004/StreamRAG/blob/main/README.md"
              target="_blank"
              class="btn btn-secondary"
            >
              Documentation
              <span class="btn-arrow">→</span>
            </a>
          </div>
        </div>

        <!-- Animated graph visualization -->
        <div class="graph-visualization">
          <div class="graph-node node-1">
            <div class="node-pulse"></div>
            <span>function</span>
          </div>
          <div class="graph-node node-2">
            <div class="node-pulse"></div>
            <span>class</span>
          </div>
          <div class="graph-node node-3">
            <div class="node-pulse"></div>
            <span>import</span>
          </div>
          <div class="graph-node node-4">
            <div class="node-pulse"></div>
            <span>call</span>
          </div>
          <svg class="graph-connections" xmlns="http://www.w3.org/2000/svg">
            <line class="connection" x1="20%" y1="30%" x2="80%" y2="30%" />
            <line class="connection" x1="20%" y1="70%" x2="80%" y2="70%" />
            <line class="connection" x1="50%" y1="20%" x2="50%" y2="80%" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section id="features" class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Key Features</h2>
          <p class="section-subtitle">Real-time code intelligence powered by incremental graph updates</p>
        </div>

        <div class="features-grid">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card"
            :class="`feature-${feature.color}`"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="feature-header">
              <span class="feature-icon">{{ feature.icon }}</span>
              <span class="feature-metric">{{ feature.metric }}</span>
            </div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
            <div class="feature-line"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section id="architecture" class="tech-stack">
      <div class="container">
        <h3 class="stack-title">
          <span class="terminal-prompt">$</span> tech-stack
        </h3>
        <div class="stack-items">
          <div
            v-for="(tech, index) in techStack"
            :key="index"
            class="stack-item"
            :style="{ animationDelay: `${index * 0.05}s` }"
          >
            <span class="stack-bracket">[</span>
            {{ tech }}
            <span class="stack-bracket">]</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to accelerate Claude Code?</h2>
          <p class="cta-description">
            Three commands. Zero config. Instant code intelligence.
          </p>
          <div class="code-block">
            <div class="code-header">
              <div class="code-header-left">
                <span class="code-dot"></span>
                <span class="code-dot"></span>
                <span class="code-dot"></span>
                <span class="code-title">terminal</span>
              </div>
              <button class="copy-button" @click="copyCode">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="5" width="9" height="9" rx="1" stroke="currentColor" stroke-width="1.5"/>
                  <path d="M3 10V3C3 2.44772 3.44772 2 4 2H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <span class="copy-text">Copy</span>
              </button>
            </div>
            <pre class="code-content"><code><span class="code-comment"># Install prerequisites</span>
<span class="code-prompt">$</span> <span class="code-command">curl</span> --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

<span class="code-comment"># Install StreamRAG</span>
<span class="code-prompt">$</span> <span class="code-command">claude plugin marketplace add</span> Krrish2004/StreamRAG
<span class="code-prompt">$</span> <span class="code-command">claude plugin install</span> streamrag@streamrag

<span class="code-comment"># Build native parsers</span>
<span class="code-prompt">$</span> <span class="code-command">bash</span> ~/.claude/plugins/.../build-native-parsers.sh</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <span class="logo-bracket">[</span>
            <span class="logo-text">StreamRAG</span>
            <span class="logo-bracket">]</span>
          </div>
          <div class="footer-links">
            <a href="https://github.com/Krrish2004/StreamRAG" target="_blank">GitHub</a>
            <span class="footer-separator">•</span>
            <a href="https://github.com/Krrish2004" target="_blank">@Krrish2004</a>
            <span class="footer-separator">•</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Built with <span class="text-highlight">Claude Sonnet 4.5</span></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  /* Modern techy color palette */
  --primary-blue: #0066ff;
  --accent-purple: #7c3aed;
  --accent-teal: #0891b2;
  --accent-indigo: #4f46e5;

  /* Clean backgrounds */
  --bg-white: #ffffff;
  --bg-light: #f8f9fa;
  --bg-lighter: #fafbfc;

  /* Professional text colors */
  --text-primary: #1a1a1a;
  --text-secondary: #64748b;
  --text-tertiary: #94a3b8;

  /* Borders and dividers */
  --border-light: #e2e8f0;
  --border-medium: #cbd5e1;

  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #0066ff 0%, #4f46e5 100%);
  --gradient-accent: linear-gradient(135deg, #0891b2 0%, #7c3aed 100%);
}

.home {
  min-height: 100vh;
  background: var(--bg-white);
  color: var(--text-primary);
  font-family: 'Space Grotesk', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* Animated Background */
.grid-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(0, 102, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 102, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 20s linear infinite;
  z-index: 0;
  pointer-events: none;
}

@keyframes gridMove {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.scan-line {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary-blue), transparent);
  animation: scan 4s linear infinite;
  z-index: 1;
  pointer-events: none;
  opacity: 0.2;
}

@keyframes scan {
  0% { transform: translateY(0); }
  100% { transform: translateY(100vh); }
}

/* Container */
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

/* Navigation */
.navbar {
  padding: 1.25rem 0;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid var(--border-light);
  box-shadow:
    0 1px 3px rgba(0, 0, 0, 0.06),
    0 1px 2px rgba(0, 0, 0, 0.04);
  z-index: 100;
  transition: all 0.3s ease;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Brand Section */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.nav-brand:hover {
  transform: translateX(4px);
}

.logo-image {
  width: 50px;
  height: 50px;
  filter: drop-shadow(0 2px 8px rgba(0, 102, 255, 0.15));
  transition: all 0.3s ease;
}

.logo-image:hover {
  filter: drop-shadow(0 4px 12px rgba(0, 102, 255, 0.25));
  transform: scale(1.05);
}

.brand-text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.brand-name {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1;
  letter-spacing: -0.5px;
}

.brand-tagline {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.7rem;
  color: var(--primary-blue);
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

/* Navigation Menu */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 2.5rem;
}

.nav-link {
  color: var(--text-secondary) !important;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  padding: 0.5rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--gradient-primary);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--primary-blue) !important;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link svg {
  transition: transform 0.3s ease;
}

.nav-link:hover svg {
  transform: scale(1.1);
}

/* CTA Button */
.nav-cta {
  padding: 0.75rem 1.75rem;
  background: var(--gradient-primary);
  color: #ffffff;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: none;
  box-shadow:
    0 4px 12px rgba(0, 102, 255, 0.2),
    0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
}

.nav-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.nav-cta:hover::before {
  left: 100%;
}

.nav-cta:hover {
  transform: translateY(-2px);
  box-shadow:
    0 8px 20px rgba(0, 102, 255, 0.3),
    0 4px 8px rgba(0, 0, 0, 0.08);
}

.nav-cta::after {
  display: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .nav-menu {
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 1rem 0;
  }

  .nav-brand {
    gap: 0.75rem;
  }

  .logo-image {
    width: 40px;
    height: 40px;
  }

  .brand-name {
    font-size: 1.25rem;
  }

  .brand-tagline {
    font-size: 0.6rem;
  }

  .nav-menu {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.85rem;
  }

  .nav-link span {
    display: none;
  }

  .nav-cta {
    padding: 0.6rem 1.25rem;
    font-size: 0.85rem;
  }
}

/* Hero Section */
.hero {
  padding: 8rem 0;
  position: relative;
}

.hero-content {
  max-width: 800px;
  position: relative;
  z-index: 3;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 102, 255, 0.08);
  border: 1px solid var(--primary-blue);
  border-radius: 50px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--primary-blue);
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--primary-blue);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.hero-title {
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 2rem;
  font-family: 'Space Grotesk', sans-serif;
}

.title-line {
  display: block;
  animation: fadeInUp 0.8s ease-out backwards;
}

.title-line:nth-child(1) { animation-delay: 0.1s; }
.title-line:nth-child(2) { animation-delay: 0.2s; }
.title-line:nth-child(3) { animation-delay: 0.3s; }

.title-highlight {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-description {
  font-size: 1.25rem;
  line-height: 1.8;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out 0.4s backwards;
}

.text-highlight {
  color: var(--primary-blue);
  font-weight: 600;
}

/* Stats Cards */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out 0.5s backwards;
}

.stat-card {
  background: var(--bg-white);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.stat-card:hover {
  border-color: var(--primary-blue);
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 102, 255, 0.1);
}

.stat-value {
  font-size: 3rem;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  color: var(--primary-blue);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-unit {
  font-size: 1.5rem;
  color: var(--accent-teal);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Hero Actions */
.hero-actions {
  display: flex;
  gap: 1rem;
  animation: fadeInUp 0.8s ease-out 0.6s backwards;
}

.btn {
  padding: 1.25rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
}

.btn-primary {
  background: var(--gradient-primary);
  color: #ffffff;
  border: 2px solid transparent;
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.2);
}

.btn-primary:hover {
  box-shadow: 0 8px 20px rgba(0, 102, 255, 0.3);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--border-medium);
}

.btn-secondary:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
  transform: translateY(-2px);
}

.btn-icon, .btn-arrow {
  color: inherit;
}

/* Graph Visualization */
.graph-visualization {
  position: absolute;
  right: -10%;
  top: 20%;
  width: 600px;
  height: 600px;
  opacity: 0.3;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

.graph-node {
  position: absolute;
  width: 120px;
  height: 120px;
  background: var(--bg-white);
  border: 2px solid var(--primary-blue);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--primary-blue);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.1);
  animation: pulse 3s ease-in-out infinite;
}

.node-1 { top: 10%; left: 10%; animation-delay: 0s; }
.node-2 { top: 10%; right: 10%; animation-delay: 0.5s; }
.node-3 { bottom: 10%; left: 10%; animation-delay: 1s; }
.node-4 { bottom: 10%; right: 10%; animation-delay: 1.5s; }

.node-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid var(--neon-green);
  border-radius: 50%;
  animation: pulsering 2s ease-out infinite;
}

@keyframes pulsering {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.graph-connections {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.connection {
  stroke: var(--primary-blue);
  stroke-width: 2;
  opacity: 0.2;
  animation: dash 4s linear infinite;
  stroke-dasharray: 10;
}

@keyframes dash {
  to {
    stroke-dashoffset: 100;
  }
}

/* Features Section */
.features {
  padding: 8rem 0;
  background: linear-gradient(180deg, var(--bg-white) 0%, var(--bg-light) 100%);
}

.section-header {
  text-align: center;
  margin-bottom: 5rem;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'JetBrains Mono', monospace;
}

.title-accent {
  color: var(--primary-blue);
}

.section-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--bg-white);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.4s;
  animation: fadeInUp 0.6s ease-out backwards;
  position: relative;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--primary-blue);
  transform: scaleX(0);
  transition: transform 0.4s;
  transform-origin: left;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary-blue);
  box-shadow: 0 12px 24px rgba(0, 102, 255, 0.15);
}

.feature-cyan::before { background: var(--accent-teal); }
.feature-cyan:hover { border-color: var(--accent-teal); }
.feature-purple::before { background: var(--accent-purple); }
.feature-purple:hover { border-color: var(--accent-purple); }

.feature-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.feature-icon {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--primary-blue);
  background: rgba(0, 102, 255, 0.08);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(0, 102, 255, 0.2);
}

.feature-metric {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--primary-blue);
  padding: 0.5rem 1rem;
  background: rgba(0, 102, 255, 0.08);
  border-radius: 50px;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.feature-line {
  height: 2px;
  background: linear-gradient(90deg, var(--primary-blue), transparent);
  width: 0;
  transition: width 0.6s ease-out;
}

.feature-card:hover .feature-line {
  width: 100%;
}

/* Tech Stack */
.tech-stack {
  padding: 6rem 0;
  background: var(--bg-light);
}

.stack-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  color: var(--primary-blue);
  margin-bottom: 2rem;
}

.terminal-prompt {
  color: var(--accent-teal);
  margin-right: 0.5rem;
}

.stack-items {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.stack-item {
  font-family: 'JetBrains Mono', monospace;
  padding: 0.75rem 1.5rem;
  background: var(--bg-white);
  border: 1px solid var(--border-light);
  border-radius: 8px;
  color: var(--text-secondary);
  transition: all 0.3s;
  animation: fadeInUp 0.5s ease-out backwards;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.stack-item:hover {
  border-color: var(--primary-blue);
  color: var(--primary-blue);
  transform: translateY(-3px);
}

.stack-bracket {
  color: var(--accent-teal);
}

/* CTA Section */
.cta-section {
  padding: 8rem 0;
  background: linear-gradient(180deg, var(--bg-light) 0%, var(--bg-white) 100%);
}

.cta-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.cta-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.cta-description {
  font-size: 1.25rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
}

/* Code Block */
.code-block {
  background: #1a1a1a;
  border: 1px solid var(--border-medium);
  border-radius: 12px;
  overflow: hidden;
  text-align: left;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
}

.code-header {
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.code-header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--primary-blue);
}

.code-dot:nth-child(2) { background: var(--accent-teal); }
.code-dot:nth-child(3) { background: var(--accent-purple); }

.code-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.copy-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  color: #e0e0e0;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.copy-button:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--primary-blue);
  color: var(--primary-blue);
}

.copy-button svg {
  transition: transform 0.2s ease;
}

.copy-button:hover svg {
  transform: scale(1.1);
}

.code-content {
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.95rem;
  line-height: 1.8;
  color: #e0e0e0;
  overflow-x: auto;
}

.code-comment {
  color: #94a3b8;
}

.code-command {
  color: var(--primary-blue);
}

.code-prompt {
  color: var(--accent-teal);
  font-weight: 600;
  user-select: none;
}

/* Footer */
.footer {
  padding: 4rem 0 2rem;
  background: var(--bg-light);
  border-top: 1px solid var(--border-light);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.footer-brand {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.25rem;
  font-weight: 700;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  font-size: 0.875rem;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--primary-blue);
}

.footer-separator {
  color: var(--border-medium);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-light);
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* Responsive */
@media (max-width: 1024px) {
  .graph-visualization {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .footer-content {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .section-title {
    font-size: 2rem;
  }

  .cta-title {
    font-size: 2rem;
  }
}
</style>
