const accordion = `<details>
	<summary>Details</summary>
	<p>
	  The DS Lite Is An Insane Budget System For 2026. Did You Know? Modding A 3DS Is
		Surprisingly Easy
	</p>
</details>`;

const button = `<button></button>
<button class="button-lg"></button>
<button class="button-square">X</button>`;

const input = `<label>
	<span>label</span>
	<div class="input-wrapper">
		<div class="input-before"></div>
		<input type="text" />
		<div class="input-after"></div>
	</div>
</label>

<label>
	<span>another label</span>
	<div class="input-wrapper">
		<input type="text" class="input-lg" />
	</div>
</label>`;

const radioButtons = `<fieldset>
	<legend>Select an option</legend>
	<div class="radio-button">
		<input id="radio1" type="radio" name="option" class="ds-fuschia" />
		<label for="radio1">Piece of Cipher</label>
	</div>
	<div class="radio-button">
		<input id="radio2" type="radio" name="option" class="ds-fuschia" />
		<label for="radio2">Chaining Intention</label>
	</div>
	<div class="radio-button">
		<input id="radio3" type="radio" name="option" class="ds-fuschia" />
		<label for="radio3">0259 in my room</label>
	</div>
	<div class="radio-button">
		<input id="radio4" type="radio" name="option" class="ds-fuschia" />
		<label for="radio4">Fantasia Nr.2</label>
	</div>
</fieldset>`;

const grids = `<div class="ds-grid"></div>
<div class="ds-grid-lg"></div>`;

const bars = `<div class="bar ds-slate"></div>
<div class="bar-lg ds-green"></div>
<div class="bar-lg-reverse ds-darkpurple"></div>`;

const alert = `<div class="alert">
	<div class="loading-container">
		<div class="loading-1"></div>
		<div class="loading-2"></div>
		<div class="loading-3"></div>
		<div class="loading-4"></div>
		<div class="loading-5"></div>
		<div class="loading-6"></div>
		<div class="loading-7"></div>
		<div class="loading-8"></div>
		<div class="loading-9"></div>
	</div>
	<span>Looking for software available for download...</span>
	<div class="loading-container">
		<div class="loading-1"></div>
		<div class="loading-2"></div>
		<div class="loading-3"></div>
		<div class="loading-4"></div>
		<div class="loading-5"></div>
		<div class="loading-6"></div>
		<div class="loading-7"></div>
		<div class="loading-8"></div>
		<div class="loading-9"></div>
	</div>
</div>`;

const info = `<div class="info">
	<div class="info-square">image</div>
	<div class="info-container">
		<div class="info-label">Settings</div>
		<div class="info-text">
			Change system settings here. Select the setting you'd like to change.
		</div>
	</div>
</div>`;

const pictochat = `<div class="pictochat-window">
	<div class="pictochat-message pictochat-enter-highlight">Now joining..</div>
	<div class="pictochat-message">
		<header class="ds-blue-50">satellites</header>
		<span>placeholder text</span>
	</div>
	<div class="pictochat-status pictochat-exit-highlight">Now leaving..</div>
</div>`;

const colors = `ds-slate   ds-maroon      ds-red         ds-pink
ds-orange  ds-yellow      ds-neonyellow  ds-lime
ds-green   ds-teal        ds-turquoise   ds-blue
ds-navy    ds-darkpurple  ds-magenta     ds-fuschia`;

const calendar = `<!-- in your html's <head> -->
<script type="module" src="./ds-calendar.js"></script>

<!-- in your html -->
<ds-calendar></ds-calendar>
<ds-calendar style="--color: var(--color-ds-blue)" hide-border></ds-calendar>`;

export {
	accordion,
	button,
	input,
	radioButtons,
	grids,
	bars,
	alert,
	info,
	pictochat,
	colors,
	calendar
};
