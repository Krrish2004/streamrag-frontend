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
    icon: '⚡',
    metric: '0.05ms',
    color: 'cyan'
  },
  {
    title: 'Native Parsers',
    description: 'Rust, Node.js, JVM daemons provide full AST parsing over Unix sockets.',
    icon: '🔧',
    metric: '3 Daemons',
    color: 'green'
  },
  {
    title: 'Token Efficiency',
    description: 'Graph queries replace exploration. 96% reduction on architecture traces.',
    icon: '📊',
    metric: '47% Less',
    color: 'purple'
  },
  {
    title: 'Multi-Language',
    description: 'Python, TypeScript, JavaScript, Rust, C, C++, Java with intelligent fallbacks.',
    icon: '🌐',
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
          <span class="logo-bracket">[</span>
          <span class="logo-text">StreamRAG</span>
          <span class="logo-bracket">]</span>
          <span class="version">v2.0</span>
        </div>
        <div class="nav-links">
          <a href="https://github.com/Krrish2004/StreamRAG" target="_blank" class="nav-link">
            <span class="nav-icon">→</span> GitHub
          </a>
          <a href="https://github.com/Krrish2004/StreamRAG#quick-install" target="_blank" class="nav-link nav-cta">
            Install
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
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="title-accent">///</span> Architecture
          </h2>
          <p class="section-subtitle">Three-tier extraction. Native daemons. Incremental everything.</p>
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
    <section class="tech-stack">
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
              <span class="code-dot"></span>
              <span class="code-dot"></span>
              <span class="code-dot"></span>
              <span class="code-title">terminal</span>
            </div>
            <pre class="code-content"><code><span class="code-comment"># Install prerequisites</span>
<span class="code-command">curl</span> --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

<span class="code-comment"># Install StreamRAG</span>
<span class="code-command">claude plugin marketplace add</span> Krrish2004/StreamRAG
<span class="code-command">claude plugin install</span> streamrag@streamrag

<span class="code-comment"># Build native parsers</span>
<span class="code-command">bash</span> ~/.claude/plugins/.../build-native-parsers.sh</code></pre>
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
            <span>MIT License</span>
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
  --neon-green: #00ff41;
  --neon-cyan: #00d9ff;
  --neon-purple: #bd00ff;
  --dark-bg: #0a0a0f;
  --dark-card: #131318;
  --dark-border: #1a1a24;
  --text-primary: #e0e0e0;
  --text-secondary: #8a8a9a;
}

.home {
  min-height: 100vh;
  background: var(--dark-bg);
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
    linear-gradient(rgba(0, 255, 65, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 65, 0.05) 1px, transparent 1px);
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
  background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent);
  animation: scan 4s linear infinite;
  z-index: 1;
  pointer-events: none;
  opacity: 0.3;
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
  padding: 2rem 0;
  position: sticky;
  top: 0;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--dark-border);
  z-index: 100;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.2rem;
  font-weight: 700;
}

.logo-bracket {
  color: var(--neon-green);
  font-weight: 700;
}

.logo-text {
  color: var(--text-primary);
}

.version {
  color: var(--neon-cyan);
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--neon-cyan);
  border-radius: 4px;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-link:hover {
  color: var(--neon-green);
}

.nav-icon {
  color: var(--neon-cyan);
}

.nav-cta {
  padding: 0.75rem 1.5rem;
  background: var(--neon-green);
  color: var(--dark-bg);
  border-radius: 4px;
  font-weight: 600;
  transition: all 0.3s;
}

.nav-cta:hover {
  background: var(--neon-cyan);
  color: var(--dark-bg);
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
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
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid var(--neon-green);
  border-radius: 50px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--neon-green);
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--neon-green);
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
  background: linear-gradient(135deg, var(--neon-green), var(--neon-cyan));
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
  color: var(--neon-cyan);
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
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s;
}

.stat-card:hover {
  border-color: var(--neon-green);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 255, 65, 0.1);
}

.stat-value {
  font-size: 3rem;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  color: var(--neon-green);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-unit {
  font-size: 1.5rem;
  color: var(--neon-cyan);
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
  background: var(--neon-green);
  color: var(--dark-bg);
  border: 2px solid var(--neon-green);
}

.btn-primary:hover {
  background: transparent;
  color: var(--neon-green);
  box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 2px solid var(--dark-border);
}

.btn-secondary:hover {
  border-color: var(--neon-cyan);
  color: var(--neon-cyan);
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
  background: var(--dark-card);
  border: 2px solid var(--neon-green);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--neon-green);
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
  stroke: var(--neon-cyan);
  stroke-width: 2;
  opacity: 0.3;
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
  background: linear-gradient(180deg, var(--dark-bg) 0%, var(--dark-card) 100%);
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
  color: var(--neon-green);
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
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.4s;
  animation: fadeInUp 0.6s ease-out backwards;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--neon-green);
  transform: scaleX(0);
  transition: transform 0.4s;
  transform-origin: left;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.feature-card:hover {
  transform: translateY(-10px);
  border-color: var(--neon-green);
  box-shadow: 0 20px 50px rgba(0, 255, 65, 0.1);
}

.feature-cyan::before { background: var(--neon-cyan); }
.feature-cyan:hover { border-color: var(--neon-cyan); }
.feature-purple::before { background: var(--neon-purple); }
.feature-purple:hover { border-color: var(--neon-purple); }

.feature-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.feature-icon {
  font-size: 2.5rem;
}

.feature-metric {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--neon-green);
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 65, 0.1);
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
  background: linear-gradient(90deg, var(--neon-green), transparent);
  width: 0;
  transition: width 0.6s ease-out;
}

.feature-card:hover .feature-line {
  width: 100%;
}

/* Tech Stack */
.tech-stack {
  padding: 6rem 0;
  background: var(--dark-bg);
}

.stack-title {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.5rem;
  color: var(--neon-green);
  margin-bottom: 2rem;
}

.terminal-prompt {
  color: var(--neon-cyan);
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
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 8px;
  color: var(--text-secondary);
  transition: all 0.3s;
  animation: fadeInUp 0.5s ease-out backwards;
}

.stack-item:hover {
  border-color: var(--neon-green);
  color: var(--neon-green);
  transform: translateY(-3px);
}

.stack-bracket {
  color: var(--neon-cyan);
}

/* CTA Section */
.cta-section {
  padding: 8rem 0;
  background: linear-gradient(180deg, var(--dark-bg) 0%, var(--dark-card) 100%);
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
  background: linear-gradient(135deg, var(--neon-green), var(--neon-cyan));
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
  background: var(--dark-card);
  border: 1px solid var(--dark-border);
  border-radius: 12px;
  overflow: hidden;
  text-align: left;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.code-header {
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid var(--dark-border);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.code-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--neon-green);
}

.code-dot:nth-child(2) { background: var(--neon-cyan); }
.code-dot:nth-child(3) { background: var(--neon-purple); }

.code-title {
  margin-left: auto;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.code-content {
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--text-primary);
  overflow-x: auto;
}

.code-comment {
  color: var(--text-secondary);
}

.code-command {
  color: var(--neon-green);
}

/* Footer */
.footer {
  padding: 4rem 0 2rem;
  background: var(--dark-bg);
  border-top: 1px solid var(--dark-border);
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
  color: var(--neon-green);
}

.footer-separator {
  color: var(--dark-border);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--dark-border);
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
