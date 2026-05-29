<script>
  const stats = [
    { value: '3+', label: 'Internships' },
    { value: '4+', label: 'Projects' },
    { value: '2026', label: 'Graduating' },
    { value: '3', label: 'Awards' },
  ];
</script>

<section id="about" class="py-32 px-6 relative">
  <div class="max-w-10xl mx-auto">
    <div class="section-reveal">
      <div class="text-center mb-16">
        <p class="text-blue-400 font-mono text-sm mb-2 tracking-widest uppercase">Get to know me</p>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">About <span class="gradient-text">Me</span></h2>
        <div class="w-20 h-1 mx-auto rounded-full" style="background: linear-gradient(135deg, #2563eb, #6366f1);"></div>
      </div>

      <div id="Margin-Padding" class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start justify-items-center text-center">
        <!-- Left: Bio -->
        <div class="space-y-6 text-center">
          <div class="card">
            <p class="text-slate-300 text-lg leading-relaxed">
              I'm a <span class="text-blue-400 font-semibold">Data Scientist</span> with a deep interest in machine learning systems.
              I work with AI agents to explore and understand intelligent environments, and I'm actively seeking hands-on experience in
              real-world AI agent building projects.
            </p>
          </div>

          <div class="card">
            <p class="text-slate-400 leading-relaxed">
              My work spans <span class="text-blue-300 font-medium">federated learning</span>,
              <span class="text-blue-300 font-medium">retrieval-augmented generation</span>, and
              <span class="text-indigo-300 font-medium">conversational AI systems</span>.
              I enjoy bridging the gap between research and engineering to build systems that are both technically sound and practically useful.
            </p>
          </div>

          <div class="flex gap-4 pt-2 justify-center">
            <a href="https://github.com/mittalnikita" target="_blank" rel="noopener" class="btn-primary text-sm">
              GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/nikitamittal-data/" target="_blank" rel="noopener" class="btn-outline text-sm">
              LinkedIn
            </a>
          </div>
        </div>

        <!-- Right: Stats + Education -->
        <div class="space-y-6 text-center">
          <div class="grid grid-cols-2 gap-4">
            {#each stats as stat}
              <div class="card text-center hover:-translate-y-2">
                <div class="text-3xl font-black gradient-text mb-1">{stat.value}</div>
                <div class="text-slate-400 text-sm">{stat.label}</div>
              </div>
            {/each}
          </div>

          <div class="card space-y-3">
            <h3 class="text-white font-semibold text-lg flex items-center justify-center gap-2">
              <span class="text-blue-400">🎓</span> Education
            </h3>
            <div>
              <p class="text-white font-medium">B.Tech in Computer Science & Engineering</p>
              <p class="text-blue-400 text-sm">Central University of Haryana</p>
              <p class="text-slate-500 text-sm">2022 – 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
