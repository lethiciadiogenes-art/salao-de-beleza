/* ==========================================================================
   Essence Beleza e Bem-Estar — interações da landing page
   JavaScript puro, sem dependências.
   ========================================================================== */
(function () {
  'use strict';

  // Número do WhatsApp (somente dígitos, com DDI e DDD). Altere aqui se mudar.
  var WHATSAPP_NUMBER = '5533991514709';

  var root = document.documentElement;
  root.classList.remove('no-js');

  /* ---------- Cabeçalho com sombra ao rolar ---------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('menu');

  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    // Fecha ao clicar em um link do menu
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
    // Fecha com a tecla Esc
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setMenu(false);
        toggle.focus();
      }
    });
    // Garante o menu fechado ao voltar para telas largas
    window.matchMedia('(min-width: 961px)').addEventListener('change', function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  /* ---------- Link ativo no menu conforme a seção visível ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.main-nav ul a[href^="#"]'));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* ---------- Animação de entrada suave ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Formulário → WhatsApp ---------- */
  var form = document.getElementById('booking-form');

  function setError(fieldEl, errorEl, message) {
    var wrapper = fieldEl.closest('.field');
    if (wrapper) wrapper.classList.toggle('has-error', Boolean(message));
    fieldEl.setAttribute('aria-invalid', message ? 'true' : 'false');
    if (errorEl) errorEl.textContent = message || '';
  }

  if (form) {
    var nome = form.querySelector('#f-nome');
    var servico = form.querySelector('#f-servico');
    var msg = form.querySelector('#f-msg');
    var errNome = form.querySelector('#err-nome');
    var errServico = form.querySelector('#err-servico');

    nome.setAttribute('aria-describedby', 'err-nome');
    servico.setAttribute('aria-describedby', 'err-servico');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var nomeVal = nome.value.trim();
      var servicoVal = servico.value;
      var periodoEl = form.querySelector('input[name="periodo"]:checked');
      var periodoVal = periodoEl ? periodoEl.value : 'Sem preferência';
      var msgVal = msg.value.trim();

      var ok = true;
      if (nomeVal.length < 2) { setError(nome, errNome, 'Por favor, informe seu nome.'); ok = false; }
      else setError(nome, errNome, '');
      if (!servicoVal) { setError(servico, errServico, 'Escolha um serviço.'); ok = false; }
      else setError(servico, errServico, '');

      if (!ok) {
        (nomeVal.length < 2 ? nome : servico).focus();
        return;
      }

      var texto = 'Olá! Vim pelo site do Essence e gostaria de agendar um horário.\n\n' +
        '*Nome:* ' + nomeVal + '\n' +
        '*Serviço:* ' + servicoVal + '\n' +
        '*Melhor período:* ' + periodoVal +
        (msgVal ? '\n*Mensagem:* ' + msgVal : '');

      var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(texto);
      // Obs.: window.open com 'noopener' sempre retorna null, por isso o opener é zerado manualmente.
      var win = window.open(url, '_blank');
      if (win) { win.opener = null; }
      else { window.location.href = url; } // fallback se o pop-up for bloqueado
    });
  }

  /* ---------- Ano atual no rodapé ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
