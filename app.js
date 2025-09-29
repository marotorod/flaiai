(function () {
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = {
    trips: document.getElementById('panel-trips'),
    profile: document.getElementById('panel-profile'),
  };

  function activate(target) {
    // Toggle buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      const isActive = btn.dataset.target === target;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-selected', String(isActive));
    });
    // Toggle panels
    Object.entries(panels).forEach(([key, el]) => {
      el.classList.toggle('is-active', key === target);
      el.hidden = key !== target;
    });
  }

  tabs.forEach(btn => {
    btn.addEventListener('click', () => activate(btn.dataset.target));
  });

  // Sample destinations for new trips (destination names are data, not translated)
  const sampleDestinations = [
    { name: 'New York, USA', image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=200&fit=crop&crop=center' },
    { name: 'London, UK', image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=200&fit=crop&crop=center' },
    { name: 'Sydney, Australia', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop&crop=center' },
    { name: 'Dubai, UAE', image: 'https://images.unsplash.com/photo-1512453979798-5ea2f7c4c0b4?w=400&h=200&fit=crop&crop=center' },
    { name: 'Rome, Italy', image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=200&fit=crop&crop=center' }
  ];

  // Sample trip data with detailed itineraries
  const tripData = {
    'tokyo': {
      destination: 'Tokyo, Japan',
      startDate: 'Dec 15, 2024',
      endDate: 'Dec 22, 2024',
      passengers: '2 adults, 1 child',
      itinerary: [
        {
          day: 'Day 1 - Dec 15',
          activities: [
            { type: 'flight', icon: '✈️', title: 'Flight to Tokyo', description: 'JAL Flight JL61 - Economy Class', time: '08:30 - 14:45' },
            { type: 'transport', icon: '🚌', title: 'Airport Shuttle', description: 'Narita Express to Tokyo Station', time: '15:30 - 16:45' },
            { type: 'hotel', icon: '🏨', title: 'Hotel Check-in', description: 'Park Hyatt Tokyo - 2 nights', time: '17:00' }
          ]
        },
        {
          day: 'Day 2 - Dec 16',
          activities: [
            { type: 'activity', icon: '🏯', title: 'Senso-ji Temple', description: 'Traditional temple visit in Asakusa', time: '09:00 - 11:00' },
            { type: 'activity', icon: '🍣', title: 'Tsukiji Fish Market', description: 'Fresh sushi breakfast and market tour', time: '11:30 - 13:00' },
            { type: 'activity', icon: '🏙️', title: 'Tokyo Skytree', description: 'City views from observation deck', time: '14:00 - 16:00' }
          ]
        },
        {
          day: 'Day 3 - Dec 17',
          activities: [
            { type: 'hotel', icon: '🏨', title: 'Hotel Check-out', description: 'Check out from Park Hyatt', time: '11:00' },
            { type: 'transport', icon: '🚗', title: 'Car Rental', description: 'Toyota Camry - 5 days rental', time: '12:00' },
            { type: 'activity', icon: '🌸', title: 'Ueno Park', description: 'Cherry blossom viewing and museum visit', time: '14:00 - 17:00' }
          ]
        },
        {
          day: 'Day 4 - Dec 18',
          activities: [
            { type: 'activity', icon: '🏔️', title: 'Mount Fuji Day Trip', description: 'Guided tour to Fuji Five Lakes', time: '08:00 - 18:00' },
            { type: 'activity', icon: '🍜', title: 'Ramen Dinner', description: 'Traditional ramen in Shibuya', time: '19:00 - 20:30' }
          ]
        },
        {
          day: 'Day 5 - Dec 19',
          activities: [
            { type: 'activity', icon: '🎌', title: 'Meiji Shrine', description: 'Traditional Shinto shrine visit', time: '09:00 - 11:00' },
            { type: 'activity', icon: '🛍️', title: 'Harajuku Shopping', description: 'Fashion district and street food', time: '11:30 - 15:00' },
            { type: 'activity', icon: '🌃', title: 'Shibuya Crossing', description: 'Famous pedestrian scramble', time: '15:30 - 17:00' }
          ]
        },
        {
          day: 'Day 6 - Dec 20',
          activities: [
            { type: 'activity', icon: '🏰', title: 'Tokyo Imperial Palace', description: 'East Gardens and palace grounds', time: '10:00 - 12:00' },
            { type: 'activity', icon: '🍱', title: 'Traditional Kaiseki', description: 'Multi-course Japanese dinner', time: '18:00 - 20:30' }
          ]
        },
        {
          day: 'Day 7 - Dec 21',
          activities: [
            { type: 'transport', icon: '🚗', title: 'Car Return', description: 'Return rental car to airport', time: '10:00' },
            { type: 'hotel', icon: '🏨', title: 'Airport Hotel', description: 'Narita Airport Hotel - 1 night', time: '11:00' },
            { type: 'activity', icon: '🛍️', title: 'Last-minute Shopping', description: 'Duty-free shopping at Narita', time: '14:00 - 17:00' }
          ]
        },
        {
          day: 'Day 8 - Dec 22',
          activities: [
            { type: 'flight', icon: '✈️', title: 'Flight Home', description: 'JAL Flight JL62 - Economy Class', time: '10:30 - 12:45' }
          ]
        }
      ]
    },
    'Olmedo': {
      destination: 'Olmedo, Valladolid',
      startDate: 'Jan 8, 2025',
      endDate: 'Jan 15, 2025',
      passengers: '1 adult',
      itinerary: [
        {
          day: 'Day 1 - Jan 8',
          activities: [
            { type: 'flight', icon: '✈️', title: 'Flight to Olmedo', description: 'Air Valladolid AF83 - Business Class', time: '14:20 - 06:45+1' }
          ]
        },
        {
          day: 'Day 2 - Jan 9',
          activities: [
            { type: 'transport', icon: '🚇', title: 'RER Train', description: 'CDG Airport to Châtelet-Les Halles', time: '07:30 - 08:30' },
            { type: 'hotel', icon: '🏨', title: 'Hotel Check-in', description: 'Le Meurice - 6 nights', time: '10:00' },
            { type: 'activity', icon: '🗼', title: 'Eiffel Tower', description: 'Skip-the-line tickets to summit', time: '14:00 - 16:00' }
          ]
        },
        {
          day: 'Day 3 - Jan 10',
          activities: [
            { type: 'activity', icon: '🏛️', title: 'Louvre Museum', description: 'Private guided tour', time: '09:00 - 12:00' },
            { type: 'activity', icon: '🍷', title: 'Wine Tasting', description: 'Traditional French wine cellar', time: '15:00 - 17:00' }
          ]
        },
        {
          day: 'Day 4 - Jan 11',
          activities: [
            { type: 'activity', icon: '⛪', title: 'Notre-Dame & Sainte-Chapelle', description: 'Gothic architecture tour', time: '10:00 - 13:00' },
            { type: 'activity', icon: '🚤', title: 'Seine River Cruise', description: 'Dinner cruise with live music', time: '19:00 - 22:00' }
          ]
        },
        {
          day: 'Day 5 - Jan 12',
          activities: [
            { type: 'activity', icon: '🏰', title: 'Versailles Palace', description: 'Full day trip with gardens', time: '09:00 - 17:00' }
          ]
        },
        {
          day: 'Day 6 - Jan 13',
          activities: [
            { type: 'activity', icon: '🛍️', title: 'Champs-Élysées', description: 'Shopping and café culture', time: '10:00 - 15:00' },
            { type: 'activity', icon: '🎭', title: 'Moulin Rouge', description: 'Evening cabaret show', time: '21:00 - 23:30' }
          ]
        },
        {
          day: 'Day 7 - Jan 14',
          activities: [
            { type: 'activity', icon: '🎨', title: 'Montmartre & Sacré-Cœur', description: 'Artists quarter and basilica', time: '10:00 - 14:00' },
            { type: 'activity', icon: '🍽️', title: 'Farewell Dinner', description: 'Michelin-starred restaurant', time: '19:00 - 22:00' }
          ]
        },
        {
          day: 'Day 8 - Jan 15',
          activities: [
            { type: 'hotel', icon: '🏨', title: 'Hotel Check-out', description: 'Check out from Le Meurice', time: '11:00' },
            { type: 'flight', icon: '✈️', title: 'Flight Home', description: 'Air Valladolid AF84 - Business Class', time: '15:30 - 17:50' }
          ]
        }
      ]
    },
    'barcelona': {
      destination: 'Barcelona, Spain',
      startDate: 'Feb 20, 2025',
      endDate: 'Feb 27, 2025',
      passengers: '2 adults, 1 infant',
      itinerary: [
        {
          day: 'Day 1 - Feb 20',
          activities: [
            { type: 'flight', icon: '✈️', title: 'Flight to Barcelona', description: 'Vueling VY1234 - Economy Class', time: '11:15 - 13:30' },
            { type: 'transport', icon: '🚗', title: 'Car Rental', description: 'Audi A4 - 7 days rental', time: '14:30' },
            { type: 'hotel', icon: '🏨', title: 'Hotel Check-in', description: 'Casa Fuster - 7 nights', time: '16:00' }
          ]
        },
        {
          day: 'Day 2 - Feb 21',
          activities: [
            { type: 'activity', icon: '🏛️', title: 'Sagrada Familia', description: 'Gaudi masterpiece with audio guide', time: '09:00 - 12:00' },
            { type: 'activity', icon: '🏘️', title: 'Park Güell', description: 'Gaudi park and mosaic works', time: '14:00 - 17:00' }
          ]
        },
        {
          day: 'Day 3 - Feb 22',
          activities: [
            { type: 'activity', icon: '🏰', title: 'Gothic Quarter', description: 'Medieval streets and cathedral', time: '10:00 - 13:00' },
            { type: 'activity', icon: '🍷', title: 'Tapas Tour', description: 'Traditional tapas and wine tasting', time: '19:00 - 22:00' }
          ]
        },
        {
          day: 'Day 4 - Feb 23',
          activities: [
            { type: 'activity', icon: '🏖️', title: 'Barceloneta Beach', description: 'Beach day with family', time: '10:00 - 16:00' },
            { type: 'activity', icon: '🍽️', title: 'Paella Dinner', description: 'Traditional paella by the sea', time: '19:00 - 21:00' }
          ]
        },
        {
          day: 'Day 5 - Feb 24',
          activities: [
            { type: 'activity', icon: '🏛️', title: 'Casa Batlló', description: 'Gaudi house museum', time: '09:00 - 11:00' },
            { type: 'activity', icon: '🛍️', title: 'Passeig de Gràcia', description: 'Shopping and architecture', time: '11:30 - 15:00' }
          ]
        },
        {
          day: 'Day 6 - Feb 25',
          activities: [
            { type: 'activity', icon: '🏰', title: 'Montjuïc Hill', description: 'Olympic stadium and city views', time: '10:00 - 14:00' },
            { type: 'activity', icon: '🎭', title: 'Flamenco Show', description: 'Traditional Spanish dance', time: '20:00 - 22:00' }
          ]
        },
        {
          day: 'Day 7 - Feb 26',
          activities: [
            { type: 'activity', icon: '🏛️', title: 'Picasso Museum', description: 'Early works and blue period', time: '10:00 - 12:00' },
            { type: 'activity', icon: '🍷', title: 'Cava Tasting', description: 'Spanish sparkling wine tour', time: '15:00 - 17:00' }
          ]
        },
        {
          day: 'Day 8 - Feb 27',
          activities: [
            { type: 'hotel', icon: '🏨', title: 'Hotel Check-out', description: 'Check out from Casa Fuster', time: '11:00' },
            { type: 'transport', icon: '🚗', title: 'Car Return', description: 'Return rental car to airport', time: '12:00' },
            { type: 'flight', icon: '✈️', title: 'Flight Home', description: 'Vueling VY1235 - Economy Class', time: '16:45 - 18:55' }
          ]
        }
      ]
    }
  };

  // Add Trip demo behavior
  const addBtn = document.getElementById('addTripBtn');
  const list = document.getElementById('tripList');
  addBtn?.addEventListener('click', () => {
    const count = list.querySelectorAll('.trip-item').length + 1;
    const destination = sampleDestinations[Math.floor(Math.random() * sampleDestinations.length)];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + Math.floor(Math.random() * 90) + 30); // 30-120 days from now
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + Math.floor(Math.random() * 14) + 3); // 3-17 days duration
    
    const passengers = Math.random() > 0.5 ? '2 adults' : '1 adult';
    const childCount = Math.random() > 0.7 ? Math.floor(Math.random() * 2) + 1 : 0;
    const infantCount = Math.random() > 0.8 ? Math.floor(Math.random() * 2) + 1 : 0;
    
    let passengerText = passengers;
    if (childCount > 0) passengerText += `, ${childCount} child${childCount > 1 ? 'ren' : ''}`;
    if (infantCount > 0) passengerText += `, ${infantCount} infant${infantCount > 1 ? 's' : ''}`;

    const li = document.createElement('li');
    li.className = 'trip-item';
    li.innerHTML = `
      <button class="trip-card" data-destination="${destination.name.toLowerCase().replace(/,/g, '').replace(/\s+/g, '-') }" style="background-image: linear-gradient(135deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url('${destination.image}');">
        <div class="trip-header">
          <div class="trip-destination">${destination.name}</div>
          <div class="trip-dates">
            <span class="trip-date">${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span class="trip-arrow">→</span>
            <span class="trip-date">${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
        <div class="trip-details">
          <div class="trip-passengers">${passengerText}</div>
          <div class="trip-meta" data-i18n="trips.draft">draft</div>
        </div>
      </button>
    `;
    list.prepend(li);
    
    // Sort trips by date after adding
    sortTripsByDate();
    
    // Visual feedback
    addBtn.textContent = (window.i18n?.t('trips.added', 'Added!'));
    setTimeout(() => (addBtn.innerHTML = '<span aria-hidden="true">＋</span> ' + (window.i18n?.t('trips.add', 'Add a new trip'))), 900);
  });

  // Add Trip behavior (open modal)
  const addTripModal = document.getElementById('addTripModal');
  const addTripForm = document.getElementById('addTripForm');
  const addTripPostCreate = document.getElementById('addTripPostCreate');
  if (addBtn) {
    addBtn.replaceWith(addBtn.cloneNode(true));
  }
  const addBtnNew = document.getElementById('addTripBtn');
  addBtnNew?.addEventListener('click', () => {
    if (addTripModal) {
      addTripModal.classList.add('is-open');
      addTripModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      addTripForm?.reset();
      if (addTripPostCreate) addTripPostCreate.hidden = true;
    }
  });

  // Generic close for [data-close]
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-close]');
    if (target) {
      const id = target.getAttribute('data-close');
      const el = document.getElementById(id);
      if (el) {
        el.classList.remove('is-open');
        el.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    }
  });

  // Handle Add Trip form submit
  addTripForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityInput = document.getElementById('addTripCity');
    const startInput = document.getElementById('addTripStart');
    const endInput = document.getElementById('addTripEnd');
    const city = cityInput.value.trim();
    const startDate = new Date(startInput.value);
    const endDate = new Date(endInput.value);
    if (!city || !startInput.value || !endInput.value || isNaN(startDate) || isNaN(endDate) || endDate < startDate) {
      return;
    }

    const locale = window.i18n?.getLanguage() === 'es' ? 'es-ES' : 'en-US';
    const startStr = startDate.toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' });
    const endStr = endDate.toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' });

    const li = document.createElement('li');
    li.className = 'trip-item';
    li.innerHTML = `
      <button class="trip-card" data-destination="${city.toLowerCase().replace(/,/g, '').replace(/\s+/g, '-')}">
        <div class="trip-header">
          <div class="trip-destination">${city}</div>
          <div class="trip-dates">
            <span class="trip-date">${startStr}</span>
            <span class="trip-arrow">→</span>
            <span class="trip-date">${endStr}</span>
          </div>
        </div>
        <div class="trip-details">
          <div class="trip-meta" data-i18n="trips.draft">${window.i18n?.t('trips.draft', 'draft')}</div>
        </div>
      </button>`;
    list.prepend(li);
    sortTripsByDate();

    if (addTripPostCreate) addTripPostCreate.hidden = false;
  });

  document.getElementById('addTripImportEmail')?.addEventListener('click', () => {
    alert(window.i18n?.t('alert.connect_google', 'Connect Google: wire this to your OAuth route.'));
  });
  document.getElementById('addTripForwardLater')?.addEventListener('click', () => {
    if (addTripModal) {
      addTripModal.classList.remove('is-open');
      addTripModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  });

  // Sort trips by start date (next trip first)
  function sortTripsByDate() {
    const tripItems = Array.from(list.querySelectorAll('.trip-item'));
    tripItems.sort((a, b) => {
      const dateA = new Date(a.querySelector('.trip-date').textContent);
      const dateB = new Date(b.querySelector('.trip-date').textContent);
      return dateA - dateB; // Ascending order (earliest first)
    });
    
    // Re-append sorted items
    tripItems.forEach(item => list.appendChild(item));
  }

  // Copy forwarding email
  const copyBtn = document.getElementById('copyForwardEmail');
  copyBtn?.addEventListener('click', async () => {
    const selector = copyBtn.getAttribute('data-copy');
    const el = selector ? document.querySelector(selector) : null;
    if (!el) return;
    const text = el.textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      copyBtn.textContent = (window.i18n?.t('profile.copied', 'Copied'));
      setTimeout(() => (copyBtn.textContent = (window.i18n?.t('profile.copy', 'Copy'))), 1000);
    } catch {
      // Fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      copyBtn.textContent = (window.i18n?.t('profile.copied', 'Copied'));
      setTimeout(() => (copyBtn.textContent = (window.i18n?.t('profile.copy', 'Copy'))), 1000);
    }
  });

  // Stub OAuth flows (replace with real endpoints)
  document.getElementById('connectGoogle')?.addEventListener('click', () => {
    // TODO: redirect to your backend OAuth start: /auth/google
    alert(window.i18n?.t('alert.connect_google', 'Connect Google: wire this to your OAuth route.'));
  });
  document.getElementById('connectOutlook')?.addEventListener('click', () => {
    // TODO: redirect to your backend OAuth start: /auth/outlook
    alert(window.i18n?.t('alert.connect_outlook', 'Connect Outlook: wire this to your OAuth route.'));
  });

  // Modal functionality
  const modal = document.getElementById('tripDetailModal');
  const modalClose = document.querySelector('.modal-close');
  const modalBackdrop = document.querySelector('.modal-backdrop');

  function openTripModal(tripKey) {
    const trip = tripData[tripKey];
    if (!trip) return;

    // Update modal content
    document.querySelector('.trip-destination-large').textContent = trip.destination;
    document.querySelector('.trip-dates-large').textContent = `${trip.startDate} → ${trip.endDate}`;
    document.querySelector('.trip-passengers-large').textContent = trip.passengers;

    // Build timeline
    const timeline = document.getElementById('tripTimeline');
    timeline.innerHTML = '';

    trip.itinerary.forEach(day => {
      const dayElement = document.createElement('div');
      dayElement.className = 'timeline-item';
      
      const dayHeader = document.createElement('div');
      dayHeader.className = 'timeline-day';
      dayHeader.textContent = day.day;
      
      const activitiesContainer = document.createElement('div');
      activitiesContainer.className = 'timeline-activities';
      
      day.activities.forEach(activity => {
        const activityElement = document.createElement('div');
        activityElement.className = 'activity-item';
        
        activityElement.innerHTML = `
          <div class="activity-icon ${activity.type}">${activity.icon}</div>
          <div class="activity-details">
            <div class="activity-title">${activity.title}</div>
            <div class="activity-description">${activity.description}</div>
            <div class="activity-time">${activity.time}</div>
          </div>
        `;
        
        activitiesContainer.appendChild(activityElement);
      });
      
      dayElement.appendChild(dayHeader);
      dayElement.appendChild(activitiesContainer);
      timeline.appendChild(dayElement);
    });

    // Show modal
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTripModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Event listeners for modal
  modalClose?.addEventListener('click', closeTripModal);
  modalBackdrop?.addEventListener('click', closeTripModal);
  
  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeTripModal();
    }
  });

  // Add click handlers to trip cards
  document.addEventListener('click', (e) => {
    const tripCard = e.target.closest('.trip-card');
    if (tripCard) {
      const destination = tripCard.getAttribute('data-destination');
      if (destination && tripData[destination]) {
        openTripModal(destination);
      }
    }
  });

  // Default view
  activate('trips');
  
  // Sort trips by date on page load
  sortTripsByDate();

  // Re-apply translations on language change for dynamic fragments
  window.i18n?.onChange(() => {
    // Update add button label and any dynamic inserted labels later
    const addButton = document.getElementById('addTripBtn');
    if (addButton) {
      addButton.innerHTML = '<span aria-hidden="true">＋</span> ' + (window.i18n?.t('trips.add', 'Add a new trip'));
    }
    // Update copy button label back to base state
    const copy = document.getElementById('copyForwardEmail');
    if (copy) {
      copy.textContent = (window.i18n?.t('profile.copy', 'Copy'));
    }
    // Translate any elements with data-i18n
    window.i18n?.translateDOM(document);
  });
})();