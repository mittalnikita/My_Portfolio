<script>
  const projects = [
    {
      name: 'Conversational Assessment Recommendation System',
      description:
        'AI-powered conversational recommendation engine for SHL assessments. Features retrieval orchestration, recruiter-style responses, conversational refinement, and grounded explainability via a modular agentic architecture.',
      tech: ['Python', 'FastAPI', 'RAG', 'LLM', 'Docker', 'NumPy', 'Pandas', 'Scikit-learn'],
      github: 'https://github.com/mittalnikita/shl-conversational-recommender',
      demo: 'https://nikitamittal123-shl-conversational-recommender.hf.space/',
      outcome: 'Modular agentic architecture with SAUA model (System-Active, User-Active).',
      featured: true,
      tag: 'AI / RAG',
      tagColor: '#2563eb',
    },
    {
      name: 'FedDATS — Federated Learning Algorithm',
      description:
        'Proposes a novel federated learning algorithm maintaining a trade-off between communication efficiency and model performance for Non-IID time-series datasets across Energy, Finance, and Meteorology domains.',
      tech: ['Python', 'Federated Learning', 'Machine Learning', 'Statistics', 'Research'],
      github: 'https://github.com/mittalnikita/Federated-Learning',
      demo: null,
      outcome: 'Ongoing research — benchmarking communication-efficient aggregation strategies.',
      featured: true,
      tag: 'Research',
      tagColor: '#4f46e5',
    },
    {
      name: 'Crossdomain Recommender System',
      description:
        'Cross-domain recommendation system linking nutrition and yoga via disease-specific embeddings. Synthesized session data using multiple LLMs (DistilGPT, LLaMA, Nous Hermes, Mistral Instruct) with zero-shot prompting.',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Flask', 'Embeddings', 'Contrastive Learning', 'LLMs'],
      github: 'https://github.com/Kshitizsikriwal/crossdomain-recommender',
      demo: null,
      outcome: 'Evaluated via cosine similarity metrics and mock user sessions across health domains.',
      featured: true,
      tag: 'ML / LLMs',
      tagColor: '#6366f1',
    },
    {
      name: 'VideoNest',
      description:
        'YouTube-powered video browsing application integrating the YouTube Data API for dynamic, search-driven content discovery. Built with React.js and TailwindCSS with responsive UI.',
      tech: ['React.js', 'TailwindCSS', 'YouTube API'],
      github: 'https://github.com/mittalnikita/VideoNest',
      demo: 'https://667ebe3365c13619421cd257--sparkly-cupcake-8ba4d9.netlify.app/',
      outcome: 'Functional video search and browsing experience with live API integration.',
      featured: false,
      tag: 'Frontend',
      tagColor: '#0891b2',
    },
  ];

  let filter = 'All';
  const tags = ['All', 'AI / RAG', 'Research', 'ML / LLMs', 'Frontend'];

  $: filtered = filter === 'All' ? projects : projects.filter(p => p.tag === filter);
</script>

<section id="projects" class="py-32 px-6 relative section-alt">
  <div class="max-w-10xl mx-auto">
    <div class="section-reveal">
      <div class="text-center mb-12">
        <p class="text-blue-400 font-mono text-sm mb-2 tracking-widest uppercase">What I've built</p>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          My <span class="gradient-text">Projects</span>
        </h2>
        <div class="w-20 h-1 mx-auto rounded-full mb-8" style="background: linear-gradient(135deg, #2563eb, #6366f1);"></div>

        <!-- Filter tabs -->
        <div id="Margin-top" class="flex flex-wrap gap-3 justify-center items-center max-w-10xl mx-auto">
          {#each tags as tag}
            <button
              on:click={() => filter = tag}
              class="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
              style="{filter === tag
                ? 'background: linear-gradient(135deg, #2563eb, #4f46e5); color: white;'
                : 'background: rgba(8,16,36,0.8); color: #94a3b8; border: 1px solid rgba(37,99,235,0.2);'}"
            >
              {tag}
            </button>
          {/each}
        </div>
      </div>

      <div id="Margin-Padding" class="grid md:grid-cols-2 gap-6 max-w-10xl mx-auto justify-items-center text-center lg:text-left">
        {#each filtered as project (project.name)}
          <div class="card group relative overflow-hidden flex flex-col">
            <!-- Featured badge -->
            {#if project.featured}
              <div class="absolute top-4 right-4">
                <span class="text-xs px-2 py-1 rounded font-medium" style="background: rgba(37,99,235,0.15); color: #93c5fd; border: 1px solid rgba(37,99,235,0.3);">
                  ★ Featured
                </span>
              </div>
            {/if}

            <!-- Tag -->
            <span class="text-xs px-3 py-1 rounded-full font-medium w-fit mb-4"
              style="background: {project.tagColor}15; color: {project.tagColor}; border: 1px solid {project.tagColor}30;">
              {project.tag}
            </span>

            <h3 class="text-white font-bold text-xl mb-3 group-hover:text-blue-300 transition-colors pr-16">
              {project.name}
            </h3>

            <p class="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

            <!-- Outcome -->
            <div class="px-3 py-2 rounded-lg mb-4 border-l-2 border-blue-600"
              style="background: rgba(37,99,235,0.05);">
              <p class="text-slate-400 text-xs"><span class="text-blue-400 font-medium">Outcome:</span> {project.outcome}</p>
            </div>

            <!-- Tech stack -->
            <div class="flex flex-wrap gap-2 mb-5">
              {#each project.tech as t}
                <span class="text-xs px-2.5 py-1 rounded font-mono text-slate-400"
                  style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);">
                  {t}
                </span>
              {/each}
            </div>

            <!-- Links -->
            <div id="Margin-top" class="flex gap-3 mt-auto">
              <a href={project.github} target="_blank" rel="noopener"
                class="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-500">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                Code
              </a>
              {#if project.demo}
                <a href={project.demo} target="_blank" rel="noopener"
                  class="flex items-center gap-2 text-sm text-white transition-all px-4 py-2 rounded-lg hover:scale-105"
                  style="background: linear-gradient(135deg, #2563eb, #4f46e5);">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Live Demo
                </a>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
