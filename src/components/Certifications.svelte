<script>
  const certifications = [
    {
      title: 'IIT Asteroid Venture – NSSC Competition',
      org: 'IIT Kharagpur',
      detail: 'Studied and visualized asteroid mineral compositions and proposed innovative resource extraction methods.',
      position: '3rd Position 🥉',
      icon: '🏆',
      color: '#2563eb',
    },
    {
      title: 'IWMI Innovation Challenge – Circular Bioeconomy',
      org: 'IWMI',
      detail: 'Developed an application for agricultural waste collection directly linked to end customers.',
      position: '4th Position',
      icon: '🌱',
      color: '#0891b2',
    },
    {
      title: 'Smart India Hackathon',
      org: 'Government of India',
      detail: "National-level hackathon — one of India's largest technical competitions for students.",
      position: 'Participant',
      icon: '🇮🇳',
      color: '#4f46e5',
    },
    {
      title: 'Google JAM Study – AI Exploration',
      org: 'Google',
      detail: "Explored AI concepts and applications through Google's structured AI study program.",
      position: 'Certificate',
      icon: '🤖',
      color: '#6366f1',
    },
  ];
</script>

<section id="certifications" class="py-32 px-6 relative">
  <div class="max-w-10xl mx-auto">
    <div class="section-reveal">
      <div class="text-center mb-16">
        <p class="text-blue-400 font-mono text-sm mb-2 tracking-widest uppercase">Recognition & Learning</p>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Certifications & <span class="gradient-text">Awards</span>
        </h2>
        <div class="w-20 h-1 mx-auto rounded-full" style="background: linear-gradient(135deg, #2563eb, #6366f1);"></div>
      </div>

      <div id="Margin-Padding" class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center text-center">
        {#each certifications as cert}
          <div class="card group text-center hover:-translate-y-3" style="border-color: {cert.color}20;">
            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
            <span class="text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block"
              style="background: {cert.color}15; color: {cert.color}; border: 1px solid {cert.color}30;">
              {cert.position}
            </span>
            <h3 class="text-white font-semibold text-sm mb-2 leading-snug">{cert.title}</h3>
            <p class="text-xs font-medium mb-3" style="color: {cert.color};">{cert.org}</p>
            <p class="text-slate-500 text-xs leading-relaxed">{cert.detail}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
