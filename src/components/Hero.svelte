<script>
  import { onMount } from 'svelte';

  let visible = false;
  let typedText = '';
  const roles = ['AI Engineer', 'Data Scientist', 'ML Researcher'];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  onMount(() => {
    visible = true;
    typeLoop();
  });

  function typeLoop() {
    const current = roles[roleIndex];
    if (!deleting) {
      typedText = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      typedText = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 60 : 100);
  }

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 4,
  }));
</script>

<section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
  <!-- Animated background -->
  <div class="absolute inset-0 bg-gradient-to-br from-[#070d1c] via-[#0a1228] to-[#0d1a38]"></div>

  <!-- Grid overlay -->
  <div class="absolute inset-0 opacity-10"
    style="background-image: linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px); background-size: 60px 60px;">
  </div>

  <!-- Floating particles -->
  {#each particles as p}
    <div
      class="absolute rounded-full animate-bounce"
      style="background: #3b82f6; opacity: 0.15; left:{p.x}%; top:{p.y}%; width:{p.size}px; height:{p.size}px; animation-duration:{p.duration}s; animation-delay:{p.delay}s;"
    ></div>
  {/each}

  <!-- Glow orbs -->
  <div class="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-8 blur-3xl animate-pulse"
    style="background: radial-gradient(circle, #2563eb, transparent);"></div>
  <div class="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl animate-pulse"
    style="background: radial-gradient(circle, #4f46e5, transparent); animation-delay: 1.5s;"></div>

  <!-- Content -->
  <div class="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">
    <div class="transition-all duration-1000 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}">

      <h1 class="text-5xl md:text-7xl font-black mb-4 leading-tight">
        <span class="text-white">Hi, I'm </span>
        <span class="gradient-text">Nikita Mittal</span>
      </h1>

      <div class="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 h-10 flex items-center justify-center gap-2">
        <span>{typedText}</span>
        <span class="w-0.5 h-8 animate-pulse inline-block" style="background: #3b82f6;"></span>
      </div>

      <p class="text-slate-400 text-lg md:text-xl max-w-5xl mx-auto mb-10 leading-relaxed">
        Data Scientist with a passion for machine learning systems and AI agents.
        Building intelligent solutions from federated learning to conversational AI.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center" id="Margin-top">
        <a href="#projects" class="btn-primary text-base">
          View My Work
        </a>
        <a href="#contact" class="btn-outline text-base">
          Get In Touch
        </a>
      </div>

      <!-- Social links -->
      <div class="flex justify-center gap-6 mt-12" id="Margin-top">
        <a href="https://github.com/mittalnikita" target="_blank" rel="noopener"
          class="text-slate-400 hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-1">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/nikitamittal-data/" target="_blank" rel="noopener"
          class="text-slate-400 hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-1">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="mailto:mittalnikita279@gmail.com"
          class="text-slate-400 hover:text-white transition-all duration-200 hover:scale-110 hover:-translate-y-1">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </a>
      </div>
    </div>

  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
    <div class="w-6 h-10 rounded-full flex justify-center pt-2" style="border: 2px solid rgba(37,99,235,0.5);">
      <div class="w-1 h-3 rounded-full animate-pulse" style="background: #3b82f6;"></div>
    </div>
  </div>
</section>
