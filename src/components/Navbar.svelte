<script>
  import { onMount } from 'svelte';

  let scrolled = false;
  let menuOpen = false;

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  onMount(() => {
    const handleScroll = () => { scrolled = window.scrollY > 50; };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function closeMenu() { menuOpen = false; }
</script>

<nav id="Margin-Padding" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled ? 'py-3 shadow-lg border-b' : 'py-5'}" style="{scrolled ? 'background: rgba(7,13,28,0.92); backdrop-filter: blur(14px); border-color: rgba(37,99,235,0.15); box-shadow: 0 4px 20px rgba(0,0,0,0.4);' : ''}">
  <div class="max-w-10xl mx-auto px-6 flex items-center justify-between">
    <a href="#hero" class="text-xl font-bold gradient-text font-mono">NM.dev</a>

    <!-- Desktop -->
    <ul class="hidden md:flex items-center gap-8">
      {#each navLinks as link}
        <li>
          <a
            href={link.href}
            class="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
          >
            {link.label}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style="background: linear-gradient(90deg, #2563eb, #6366f1);"></span>
          </a>
        </li>
      {/each}
      <li>
        <a href="mailto:mittalnikita279@gmail.com" class="btn-primary text-sm py-2 px-4 rounded-lg">
          Hire Me
        </a>
      </li>
    </ul>

    <!-- Mobile toggle -->
    <button
      class="md:hidden text-slate-300 hover:text-white transition-colors"
      on:click={() => (menuOpen = !menuOpen)}
      aria-label="Toggle menu"
    >
      {#if menuOpen}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      {:else}
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      {/if}
    </button>
  </div>

  <!-- Mobile menu -->
  {#if menuOpen}
    <div class="md:hidden px-6 py-4" style="background: rgba(7,13,28,0.97); backdrop-filter: blur(14px); border-top: 1px solid rgba(37,99,235,0.15);">
      <ul class="flex flex-col gap-4">
        {#each navLinks as link}
          <li>
            <a href={link.href} on:click={closeMenu} class="text-slate-300 hover:text-white font-medium block py-1 transition-colors">
              {link.label}
            </a>
          </li>
        {/each}
        <li>
          <a href="mailto:mittalnikita279@gmail.com" class="btn-primary text-sm inline-block mt-2">Hire Me</a>
        </li>
      </ul>
    </div>
  {/if}
</nav>
