<script>
  import { onMount } from 'svelte';

  const technical = [
    { name: 'Python', level: 90, color: '#2563eb' },
    { name: 'Scikit-Learn', level: 85, color: '#2563eb' },
    { name: 'Pandas / NumPy', level: 88, color: '#2563eb' },
    { name: 'SQL', level: 80, color: '#4f46e5' },
    { name: 'LLMs & RAG', level: 78, color: '#4f46e5' },
    { name: 'TensorFlow', level: 75, color: '#4f46e5' },
    { name: 'PyTorch', level: 70, color: '#6366f1' },
    { name: 'Vector Databases', level: 72, color: '#6366f1' },
    { name: 'React.js', level: 70, color: '#6366f1' },
    { name: 'C++', level: 65, color: '#6366f1' },
  ];

  const tools = [
    'FastAPI', 'Docker', 'Hugging Face', 'AWS', 'GCP',
    'Jupyter', 'VS Code', 'TypeScript', 'API Integration', 'Git',
  ];

  const domains = [
    { name: 'Federated Learning', icon: '🔗' },
    { name: 'Time-Series Forecasting', icon: '📈' },
    { name: 'Recommender Systems', icon: '🎯' },
    { name: 'RAG Pipelines', icon: '🔍' },
    { name: 'Conversational AI', icon: '💬' },
    { name: 'Data Pipelines', icon: '⚙️' },
  ];

  let animated = false;
  let animatedLevels = technical.map(() => 0);

  onMount(() => {
    const section = document.getElementById('skills');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && !animated) {
          animated = true;
          technical.forEach((skill, i) => {
            setTimeout(() => {
              animatedLevels[i] = skill.level;
              animatedLevels = [...animatedLevels];
            }, i * 80);
          });
        }
      });
    }, { threshold: 0.2 });
    if (section) obs.observe(section);
    return () => obs.disconnect();
  });
</script>

<section id="skills" class="py-32 px-6 relative section-alt">
  <div class="max-w-10xl mx-auto">
    <div class="section-reveal">
      <div class="text-center mb-16">
        <p class="text-blue-400 font-mono text-sm mb-2 tracking-widest uppercase">What I work with</p>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">My <span class="gradient-text">Skills</span></h2>
        <div class="w-20 h-1 mx-auto rounded-full" style="background: linear-gradient(135deg, #2563eb, #6366f1);"></div>
      </div>

      <div class="grid lg:grid-cols-2 gap-24 items-start text-center" id="Margin-Padding">
        <!-- Skill bars -->
        <div id="Margin-top" class="text-center">
          <h3 class="text-white font-semibold text-xl mb-6 flex items-center justify-center gap-2">
            <span class="text-blue-400">⚡</span> Technical Proficiency
          </h3>
          <div class="space-y-5">
            {#each technical as skill, i}
              <div>
                <div class="flex justify-between mb-2">
                  <span class="text-slate-300 text-sm font-medium">{skill.name}</span>
                  <span class="text-slate-500 text-sm font-mono">{animatedLevels[i]}%</span>
                </div>
                <div class="h-2 rounded-full" style="background: rgba(255,255,255,0.05);">
                  <div
                    class="h-full rounded-full transition-all duration-700 ease-out"
                    style="width: {animatedLevels[i]}%; background: linear-gradient(90deg, {skill.color}, {skill.color}99);"
                  ></div>
                </div>
              </div>
            {/each}
          </div>
        </div>

        <!-- Tools + Domains -->
        <div class="space-y-8 text-center">
          <div>
            <h3 class="text-white font-semibold text-xl mb-6 flex items-center justify-center gap-2">
              <span class="text-indigo-400">🛠️</span> Tools & Platforms
            </h3>
            <div class="flex flex-wrap gap-3 justify-center">
              {#each tools as tool}
                <span class="px-4 py-2 rounded-lg text-sm font-medium text-slate-300 transition-all duration-200 cursor-default hover:scale-105 hover:text-white"
                  style="background: rgba(8,16,36,0.8); border: 1px solid rgba(37,99,235,0.2);">
                  {tool}
                </span>
              {/each}
            </div>
          </div>

          <div>
            <h3 id="Margin-top" class="text-white font-semibold text-xl mb-6 flex items-center justify-center gap-2">
               Domain Expertise
            </h3>
            <div class="grid grid-cols-2 gap-3">
              {#each domains as domain}
                <div class="card py-3 flex items-center gap-3 hover:scale-105 cursor-default">
                  <span class="text-xl">{domain.icon}</span>
                  <span class="text-slate-300 text-sm font-medium">{domain.name}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
