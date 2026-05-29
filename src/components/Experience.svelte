<script>
  const experience = [
    {
      title: 'Research Intern',
      company: 'Research Organization',
      period: 'January 2026 – May 2026',
      advisor: null,
      color: '#2563eb',
      icon: '🔬',
      bullets: [
        'Built a standardized federated learning framework for decentralized time-series forecasting across Energy, Finance, and Meteorology domains.',
        'Benchmarked MLP, LSTM, and GRU models with FedAvg and FedProx — GRUs achieved near-centralized accuracy while reducing communication costs.',
        'Evaluated the impact of Non-IID data splits and utilized FedProx proximal term to prevent local model drift across heterogeneous client distributions.',
      ],
      tags: ['Federated Learning', 'Time-Series', 'GRU', 'LSTM', 'Non-IID'],
    },
    {
      title: 'Applied Machine Learning Intern',
      company: 'Central University of Haryana',
      period: 'September 2025 – November 2025',
      advisor: 'Dr. Vipin Kumar',
      color: '#4f46e5',
      icon: '🤖',
      bullets: [
        'Designed and implemented an end-to-end time-series ML pipeline for financial scenario simulation and analytics.',
        'Built privacy-aware training workflows using federated learning, enabling decentralized experimentation on sensitive datasets.',
      ],
      tags: ['ML Pipeline', 'Federated Learning', 'Finance', 'Privacy-Aware AI'],
    },
    {
      title: 'Data Science Intern',
      company: 'NIT Kurukshetra',
      period: 'June 2025 – August 2025',
      advisor: null,
      color: '#6366f1',
      icon: '📊',
      bullets: [
        'Built scalable SQL-based ingestion and preprocessing pipelines using DuckDB.',
        'Implemented automated data validation, cleaning, and transformation workflows.',
        'Benchmarked embedding-based retrieval models using similarity metrics.',
      ],
      tags: ['SQL', 'DuckDB', 'Data Pipelines', 'Embeddings', 'Retrieval'],
    },
  ];
</script>

<section id="experience" class="py-24 px-6 relative">
  <div class="max-w-10xl mx-auto">
    <div class="section-reveal text-center">
      <div class="mb-16">
        <p class="text-blue-400 font-mono text-sm mb-2 tracking-widest uppercase">Where I've worked</p>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          <span class="gradient-text">Experience</span>
        </h2>
        <div class="w-20 h-1 mx-auto rounded-full" style="background: linear-gradient(135deg, #2563eb, #6366f1);"></div>
      </div>

      <!-- Timeline -->
      <div id="Margin-Padding" class="relative">
        <!-- Vertical line -->
        <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-px"
          style="background: linear-gradient(to bottom, #2563eb, #4f46e5, #6366f1);"></div>

        <div class="space-y-12 text-center">
          {#each experience as exp, i}
            <div class="relative flex justify-center">
              <!-- Card -->
              <div class="w-full max-w-2xl card hover:-translate-y-2" style="border-color: {exp.color}30;">
                <div class="flex items-start justify-between mb-3">
                  <div>
                    <span class="text-2xl mr-2">{exp.icon}</span>
                    <h3 class="text-white font-bold text-lg inline">{exp.title}</h3>
                  </div>
                  <span class="text-xs font-mono px-2 py-1 rounded text-slate-400"
                    style="background: rgba(255,255,255,0.05);">{exp.period}</span>
                </div>

                <p class="font-semibold mb-1" style="color: {exp.color};">{exp.company}</p>
                {#if exp.advisor}
                  <p class="text-slate-500 text-sm mb-3">Advisor: {exp.advisor}</p>
                {/if}

                <ul class="space-y-2 mb-4 text-center lg:text-left">
                  {#each exp.bullets as bullet}
                    <li class="flex items-start gap-2 text-slate-400 text-sm">
                      <span class="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style="background: {exp.color};"></span>
                      {bullet}
                    </li>
                  {/each}
                </ul>

                <div class="flex flex-wrap gap-2">
                  {#each exp.tags as tag}
                    <span class="text-xs px-3 py-1 rounded-full font-medium"
                      style="background: {exp.color}15; color: {exp.color}; border: 1px solid {exp.color}30;">
                      {tag}
                    </span>
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
