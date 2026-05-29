<script>
  let name = '';
  let email = '';
  let message = '';
  let status = '';

  function handleSubmit(e) {
    e.preventDefault();
    status = 'sent';
    name = '';
    email = '';
    message = '';
    setTimeout(() => status = '', 4000);
  }

  const contactLinks = [
    {
      label: 'Email',
      value: 'mittalnikita279@gmail.com',
      href: 'mailto:mittalnikita279@gmail.com',
      icon: '✉️',
      color: '#2563eb',
    },
    {
      label: 'LinkedIn',
      value: 'nikitamittal-data',
      href: 'https://www.linkedin.com/in/nikitamittal-data/',
      icon: '💼',
      color: '#4f46e5',
    },
    {
      label: 'GitHub',
      value: 'mittalnikita',
      href: 'https://github.com/mittalnikita',
      icon: '💻',
      color: '#6366f1',
    },
    {
      label: 'Location',
      value: 'Haryana, India',
      href: null,
      icon: '📍',
      color: '#0891b2',
    },
  ];
</script>

<section id="contact" class="py-32 px-6 relative section-alt">
  <div class="max-w-10xl mx-auto">
    <div class="section-reveal">
      <div class="text-center mb-16">
        <p class="text-blue-400 font-mono text-sm mb-2 tracking-widest uppercase">Let's work together</p>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In <span class="gradient-text">Touch</span>
        </h2>
        <div class="w-20 h-1 mx-auto rounded-full mb-6" style="background: linear-gradient(135deg, #2563eb, #6366f1);"></div>
      </div>

      <div id="Margin-Padding" class="grid lg:grid-cols-2 gap-12 text-center">
        <!-- Contact info -->
        <div class="space-y-5">
          <h3 class="text-white font-semibold text-xl mb-6">Contact Info</h3>
          {#each contactLinks as link}
            <div class="card flex items-center gap-4 group hover:-translate-y-1">
              <span class="text-2xl">{link.icon}</span>
              <div class="flex-1">
                <p class="text-slate-500 text-xs uppercase tracking-wider">{link.label}</p>
                {#if link.href}
                  <a href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener"
                    class="font-medium hover:underline transition-colors text-sm"
                    style="color: {link.color};">
                    {link.value}
                  </a>
                {:else}
                  <p class="font-medium text-sm" style="color: {link.color};">{link.value}</p>
                {/if}
              </div>
              <div class="w-2 h-2 rounded-full group-hover:scale-150 transition-transform" style="background: {link.color};"></div>
            </div>
          {/each}

          <div class="card mt-6" style="background: linear-gradient(135deg, rgba(37,99,235,0.08), rgba(99,102,241,0.08)); border-color: rgba(37,99,235,0.25);">
            <p class="text-slate-300 text-sm leading-relaxed">
              🚀 <span class="text-white font-medium">Currently available</span> for AI Engineering internships starting <span class="text-blue-400">2026</span>.
              Particularly interested in roles involving agentic systems, RAG pipelines, or federated learning.
            </p>
          </div>
        </div>

        <!-- Contact form -->
        <div id="Margin-Padding" class="card">
          <h3 class="text-white font-semibold text-lg mb-6">Send a Message</h3>
          {#if status === 'sent'}
            <div class="flex flex-col items-center justify-center py-12 text-center lg:text-left">
              <div class="text-5xl mb-4">✅</div>
              <p class="text-white font-semibold text-lg">Message sent!</p>
              <p class="text-slate-400 text-sm mt-1">Thanks for reaching out. I'll get back to you soon.</p>
            </div>
          {:else}
            <form on:submit={handleSubmit} class="space-y-5">
              <div>
                <label class="block text-lg lg:text-left text-slate-400 mb-2" for="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  bind:value={name}
                  required
                  placeholder="John Doe"
                  class="w-full px-4 py-3 rounded-lg text-white text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-600"
                  style="background: rgba(8,16,36,0.6); border: 1px solid rgba(37,99,235,0.2); color: white;"
                />
              </div>
              <div>
                <label class="block text-lg lg:text-left text-slate-400 mb-2" for="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  bind:value={email}
                  required
                  placeholder="john@example.com"
                  class="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-600"
                  style="background: rgba(8,16,36,0.6); border: 1px solid rgba(37,99,235,0.2); color: white;"
                />
              </div>
              <div>
                <label class="block text-lg text-slate-400 lg:text-left mb-2" for="message">Message</label>
                <textarea
                  id="message"
                  bind:value={message}
                  required
                  rows="5"
                  placeholder="Tell me about the opportunity..."
                  class="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-blue-600"
                  style="background: rgba(8,16,36,0.6); border: 1px solid rgba(37,99,235,0.2); color: white;"
                ></textarea>
              </div>
              <button type="submit" class="btn-primary w-full text-center justify-center text-base">
                Send Message 
              </button>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
