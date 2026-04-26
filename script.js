// ── DATE ──
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const d = new Date();
document.getElementById('letter-date').textContent =
  `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

// ── PHOTO UPLOAD ──
function loadPhoto(input, n) {
  if (!input.files || !input.files[0]) return;
  const reader = new FileReader();
  reader.onload = e => {
    const inner = document.getElementById('inner-' + n);
    inner.innerHTML = '';
    const img = document.createElement('img');
    img.src = e.target.result;
    inner.appendChild(img);
  };
  reader.readAsDataURL(input.files[0]);
}

// ─────────────────────────────────────────────────────
// ── SUPABASE CONFIG — fill in your own values below ──
// ─────────────────────────────────────────────────────
const SUPABASE_URL  = 'https://aflgjgczgthoqbeopslb.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmbGdqZ2N6Z3Rob3FiZW9wc2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxODQzODYsImV4cCI6MjA5Mjc2MDM4Nn0.hQGXq2nz7XD235xffPI2rvMwcjZeX6hsuGUvX54wOjw';
// Table needed: responses (id, name, message, created_at)

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

async function submitResponse() {
  const name    = document.getElementById('resp-name').value.trim();
  const message = document.getElementById('resp-message').value.trim();
  const btn     = document.getElementById('submit-btn');
  const status  = document.getElementById('status-msg');

  if (!message) {
    status.textContent = 'please write something first ♡';
    return;
  }

  btn.disabled = true;
  status.textContent = 'sending…';

  try {
    const { error } = await _supabase
      .from('response')
      .insert([{ name: name || 'anonymous', message }]);

    if (error) throw error;

    document.getElementById('form-area').style.display = 'none';
    document.getElementById('success-area').classList.add('visible');

  } catch (err) {
    console.error(err);
    status.textContent = 'something went wrong. try again?';
    btn.disabled = false;
  }
}
// ── DATE ──
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const d = new Date();
document.getElementById('letter-date').textContent =
  `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

// ── PHOTO UPLOAD ──
function loadPhoto(input, n) {
  if (!input.files || !input.files[0]) return;
  const reader = new FileReader();
  reader.onload = e => {
    const inner = document.getElementById('inner-' + n);
    inner.innerHTML = '';
    const img = document.createElement('img');
    img.src = e.target.result;
    inner.appendChild(img);
  };
  reader.readAsDataURL(input.files[0]);
}

// ─────────────────────────────────────────────────────
// ── SUPABASE CONFIG — fill in your own values below ──
// ─────────────────────────────────────────────────────
const SUPABASE_URL  = 'https://aflgjgczgthoqbeopslb.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmbGdqZ2N6Z3Rob3FiZW9wc2xiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcxODQzODYsImV4cCI6MjA5Mjc2MDM4Nn0.hQGXq2nz7XD235xffPI2rvMwcjZeX6hsuGUvX54wOjw';
// Table needed: responses (id, name, message, created_at)

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

async function submitResponse() {
  const name    = document.getElementById('resp-name').value.trim();
  const message = document.getElementById('resp-message').value.trim();
  const btn     = document.getElementById('submit-btn');
  const status  = document.getElementById('status-msg');

  if (!message) {
    status.textContent = 'please write something first ♡';
    return;
  }

  btn.disabled = true;
  status.textContent = 'sending…';

  try {
    const { error } = await _supabase
      .from('response')
      .insert([{ name: name || 'anonymous', message }]);

    if (error) throw error;

    document.getElementById('form-area').style.display = 'none';
    document.getElementById('success-area').classList.add('visible');

  } catch (err) {
    console.error(err);
    status.textContent = 'something went wrong. try again?';
    btn.disabled = false;
  }
}
