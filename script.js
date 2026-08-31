const suggestions = [
  {
    title: 'Geração Tech Unimed - BH - Ciência de Dados',
    channel: 'DigitalInnovationOne',
    meta: '2,1 mil visualizações • Transmitido há 2 dias',
    duration: '12:51',
    thumbnail:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Scrum Talks',
    channel: 'DigitalInnovationOne',
    meta: '1,6 mil visualizações • Transmitido há 3 dias',
    duration: '10:42',
    thumbnail:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Machine Learning Avançado - Fast Track',
    channel: 'DigitalInnovationOne',
    meta: '1,7 mil visualizações • Transmitido há 4 dias',
    duration: '15:18',
    thumbnail:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Global Skills #2 - Project Planning',
    channel: 'DigitalInnovationOne',
    meta: '971 visualizações • Transmitido há 5 dias',
    duration: '8:04',
    thumbnail:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Como aprender a programar Python do ZERO',
    channel: 'DigitalInnovationOne',
    meta: '711 visualizações • Transmitido há 6 dias',
    duration: '9:32',
    thumbnail:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Desenvolvendo interfaces com CSS moderno',
    channel: 'DigitalInnovationOne',
    meta: '3,8 mil visualizações • Transmitido há 1 semana',
    duration: '14:08',
    thumbnail:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  }
];

const list = document.getElementById('videoList');

if (list) {
  list.innerHTML = suggestions
    .map(
      (video, index) => `
        <button class="playlist-item ${index === 0 ? 'active' : ''}" type="button" aria-label="${video.title}">
          <div class="playlist-item__thumb" style="background-image: url('${video.thumbnail}');" data-duration="${video.duration}"></div>
          <div class="playlist-item__body">
            <h2 class="playlist-item__title">${video.title}</h2>
            <p class="playlist-item__channel">${video.channel}</p>
            <p class="playlist-item__meta">${video.meta}</p>
          </div>
        </button>
      `
    )
    .join('');
}

const body = document.body;
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('sidebar-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const navItems = document.querySelectorAll('.nav-item');
navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((navItem) => navItem.classList.remove('active'));
    item.classList.add('active');
  });
});

const playlistItems = document.querySelectorAll('.playlist-item');
playlistItems.forEach((item) => {
  item.addEventListener('click', () => {
    playlistItems.forEach((card) => card.classList.remove('active'));
    item.classList.add('active');
  });
});

const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
  searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const term = searchInput.value.trim();
      if (term) {
        document.title = `${term} - YouTube Clone`;
      }
    }
  });
}

const searchButton = document.querySelector('.search-button');
if (searchButton) {
  searchButton.addEventListener('click', () => {
    body.classList.toggle('light-theme');
  });
}

const playButton = document.getElementById('playVideo');
const videoFrame = document.getElementById('videoFrame');
if (playButton && videoFrame) {
  const autoplayUrl = 'https://www.youtube.com/embed/8BQR-E-P0pc?autoplay=1&rel=0&modestbranding=1';

  playButton.addEventListener('click', () => {
    videoFrame.src = autoplayUrl;
    playButton.style.opacity = '0';
    playButton.style.pointerEvents = 'none';
    videoFrame.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture; fullscreen');
  });
}

window.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'd') {
    body.classList.toggle('light-theme');
  }
});
