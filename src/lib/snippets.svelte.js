export const snippets = $state({
	/* html */
	intro: `<button></button>
<button class="button-lg"></button>`,
	/* html */
	gridSizing: `<div class="ds-grid" id="grid-example">
  <button id="button-example">Button</button>
</div>

<!-- in your css -->
<style>
#grid-example {
  width: calc(var(--ds-grid-gap) * 12);
  height: calc(var(--ds-grid-gap) * 3);

/* 2px adjustment to move button in */
#button-example {
  left: calc(var(--ds-grid-gap) * 2 - 2px);
  top: calc(var(--ds-grid-gap) - 2px);
}
</style>`,
	/* html */
	gridSizingLarge: `<div class="ds-grid-lg" id="grid-example">
  <button id="button-example">Button</button>
</div>

<!-- in your css -->
<style>
#grid-example {
  width: calc(var(--ds-grid-gap-lg) * 4);
  height: calc(var(--ds-grid-gap-lg) * 2);

#button-example {
  left: calc((var(--ds-grid-gap-lg) * 0.5) + var(--ds-grid-gap-lg));
  top: calc(var(--ds-grid-gap-lg) * 1.5);
}
</style>`,
	/* html */
	accordion: `<details>
	<summary>Header</summary>
	<p>
	  Description
	</p>
</details>`,
	/* html */
	alert: `<div class="alert">
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
</div>`,
	/* html */
	bars: `<div class="bar"></div>
<div class="bar-lg"></div>
<div class="bar-lg-reverse"></div>`,
	/* html */
	buttons: `<button></button>
<button class="button-lg"></button>
<button class="button-square">X</button>`,
	/* html */
	radioButtons: `<fieldset class="grid grid-cols-2 gap-4">
	<legend>Select an option</legend>
	<div class="radio-button">
		<input id="radio1" type="radio" name="option" class="ds-color" />
		<label for="radio1">Option 1</label>
	</div>
	<div class="radio-button">
		<input id="radio2" type="radio" name="option" class="ds-color" />
		<label for="radio2">Option 2</label>
	</div>
	<div class="radio-button">
		<input id="radio3" type="radio" name="option" class="ds-color" />
		<label for="radio3">Option 3</label>
	</div>
	<div class="radio-button">
		<input id="radio4" type="radio" name="option" class="ds-color" />
		<label for="radio4">Option 4</label>
	</div>
</fieldset>`,
	/* html */
	grid: `<div class="ds-grid"></div>`,
	/* html */
	gridLarge: `<div class="ds-grid-lg"></div>`,
	/* html */
	info: `<div class="info">
	<div class="info-square">image</div>
	<div class="info-container">
		<div class="info-label">Settings</div>
		<div class="info-text">
			Change system settings here. Select the setting you'd like to change.
		</div>
	</div>
</div>`,
	/* html */
	inputs: `<label>
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
</label>`,
	/* html */
	pictochat: `<div class="pictochat-window">
	<div class="pictochat-message pictochat-enter-highlight">Now joining..</div>
	<div class="pictochat-message">
		<header class="ds-color-50">header</header>
		<span>message</span>
	</div>
	<div class="pictochat-status pictochat-exit-highlight">Now leaving..</div>
</div>`,
	/* html */
	calendar: `<ds-calendar></ds-calendar>
<ds-calendar style="--color: var(--color-ds-color)" hide-border=""></ds-calendar>`,
	/* html */
	clock: `<ds-clock></ds-clock>
<div class="ds-grid" style="width: fit-content">
	<ds-clock style="--color: var(--color-ds-color)" hide-border=""></ds-clock>
</div>`
});
