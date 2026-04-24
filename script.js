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
const SUPABASE_URL  = 'https://umgcvllvhnbnutmlwdvc.supabase.co';
const SUPABASE_ANON = 'sb_publishable_v9914Xcm3ap3fO84i1OZJA_yuYaGYb8';
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
      .from('responses')
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
