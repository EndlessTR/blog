<template>
  <section class="hero fade-in">
    <h1 class="hero-title">你好，我是丁仙</h1>
    <p class="hero-subtitle typewriter">
      一个热爱物理、写代码、研究天气的工科生。
    </p>

    <div class="hero-buttons">
      <a href="/notes/" class="btn">📒 笔记</a>
      <a href="/gallery/" class="btn">🖼️ 绘图</a>
      <a href="mailto:wyd2024@sjtu.edu.cn" class="btn ghost">📮 联系我</a>
    </div>

    <div class="about-card">
      <p>🏠 目前在 SJTU 流汗搬砖</p>
      <p>📚 兴趣是公式、地图和对世界的理解</p>
      <p>🧠 正在构建自己的知识系统与表达方式</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  text-align: center;
  padding: 6rem 2rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: slideIn 1s ease-out;
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #555;
  margin-bottom: 2rem;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #4facfe;
  width: 0;
  animation: typing 2s steps(35, end) forwards, blink 0.8s step-end infinite;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  background: linear-gradient(to right, #4facfe, #00f2fe);
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s ease;
}
.btn:hover {
  transform: scale(1.05);
}

.btn.ghost {
  background: transparent;
  color: #4facfe;
  border: 2px solid #4facfe;
}

.about-card {
  margin: 0 auto;
  max-width: 500px;
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  text-align: left;
  font-size: 0.95rem;
  line-height: 1.6;
}

@keyframes slideIn {
  from { transform: translateY(-30px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}

@keyframes typing {
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}
</style>
