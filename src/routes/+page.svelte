<script>
	import dscsspictochat from '$lib/assets/ds-css.png';

	import DSComponent from '$lib/DSComponent.svelte';
	import Textbox from '$lib/Textbox.svelte';

	import * as snippets from '$lib/codeSnippets';

	import githubDark from 'svelte-highlight/styles/github-dark';
	import CodeSnippet from '$lib/CodeSnippet.svelte';
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html githubDark}
</svelte:head>

<!-- svelte-ignore a11y_consider_explicit_label -->

<div class="flex md:gap-2 flex-col md:flex-row">
	<!-- side -->
	<div
		class="grid m:flex m:flex-row flex-col pl-4 md:pl-7.5 pt-7.5 gap-3 md:h-full h-fit grid-cols-4 min-w-max md:grid-cols-none md:w-fit shrink-0"
	>
		<a href="#colors" draggable="false">
			<button class="ds-pink">Colors</button>
		</a>
		<a href="#accordion" draggable="false">
			<button class="ds-red">Accordion</button>
		</a>
		<a href="#buttons" draggable="false">
			<button class="ds-blue">Buttons</button>
		</a>
		<a href="#input" draggable="false">
			<button class="ds-green">Input</button>
		</a>
		<a href="#radio" draggable="false">
			<button class="ds-green">Radio Buttons</button>
		</a>
		<a href="#grids" draggable="false">
			<button class="ds-slate">Grids</button>
		</a>
		<a href="#bars" draggable="false">
			<button class="ds-slate">Bars</button>
		</a>
		<a href="#alertpopup" draggable="false">
			<button class="ds-orange">Alert / Popup</button>
		</a>
		<a href="#infoheader" draggable="false">
			<button class="ds-red">Info Header Box</button>
		</a>
		<a href="#pictochat" draggable="false">
			<button class="ds-turquoise">Pictochat</button>
		</a>
	</div>
	<!-- main -->
	<div class="h-dvh w-full m:min-w-full m-4">
		<main class="flex flex-col pictochat-window pb-192 m:min-w-full w-full overflow-x-auto">
			<Textbox bgimage={dscsspictochat}>
				<header class="ds-fuschia-50">mkgzr</header>
			</Textbox>
			<div class="pictochat-status pictochat-exit-highlight">
				ds.css is a pure css framework and love letter to the DS / DS Lite's firmware.
			</div>

			<Textbox>
				<header class="ds-blue-50">Note (06/30/26)</header>
				<span
					>Things are still a work-in-progress and not always thoroughly tested! Suggestions are
					welcome on the GitHub's <a
						class="text-ds-theme-blue"
						href="https://github.com/spiritov/ds.css/discussions"
						target="_blank">Discussions</a
					>
					page, and
					<a class="text-ds-theme-blue" href="https://github.com/spiritov/ds.css" target="_blank"
						>issues</a
					></span
				> are too.
			</Textbox>

			<Textbox>
				See the
				<a class="text-ds-theme-blue" href="https://github.com/spiritov/ds.css" target="_blank"
					>GitHub</a
				>
				to get started, and use this page's sidebar to see what's included!
			</Textbox>

			<div class="alert">
				Manually resizing some components may look off (ex. buttons). The DS has a single repeating
				column for some of it's dithered gradients also included here.
			</div>

			<div class="pictochat-status" id="colors">Colors</div>
			<div class="flex flex-col gap-2 ml-4 md:ml-12 mb-2">
				<Textbox>
					<span
						>16 themed colors are available to set background colors. They work well with some
						component backgrounds!</span
					>
					<Textbox>
						<header class="ds-blue-50">Note</header>
						<span>For other uses, they're also css variables (ex. --color-ds-theme-blue).</span>
					</Textbox>
					<Textbox>
						<span>Add "-50" (ex. ds-blue-50) to use a lighter version of any color.</span>
					</Textbox>
				</Textbox>
				<DSComponent>
					<div class="grid grid-cols-4 w-fit gap-3.5">
						<button class="button-square ds-slate"></button>
						<button class="button-square ds-maroon"></button>
						<button class="button-square ds-red"></button>
						<button class="button-square ds-pink"></button>
						<button class="button-square ds-orange"></button>
						<button class="button-square ds-yellow"></button>
						<button class="button-square ds-neonyellow"></button>
						<button class="button-square ds-lime"></button>
						<button class="button-square ds-green"></button>
						<button class="button-square ds-teal"></button>
						<button class="button-square ds-turquoise"></button>
						<button class="button-square ds-blue"></button>
						<button class="button-square ds-navy"></button>
						<button class="button-square ds-darkpurple"></button>
						<button class="button-square ds-magenta"></button>
						<button class="button-square ds-fuschia"></button>
					</div>
				</DSComponent>
				<CodeSnippet code={snippets.colors} />
			</div>

			<!-- accordion -->
			<div class="pictochat-status" id="accordion">Accordion</div>
			<div class="flex flex-col gap-2 ml-4 md:ml-12 mb-2">
				<Textbox>
					<span>Accordion headers can be colored.</span>
				</Textbox>
				<DSComponent>
					<details>
						<summary>Details</summary>
						<p>
							The DS Lite Is An Insane Budget System For 2026. Did You Know? Modding A 3DS Is
							Surprisingly Easy
						</p>
					</details>
				</DSComponent>
				<CodeSnippet code={snippets.accordion} />
			</div>

			<!-- buttons -->
			<div class="pictochat-status" id="buttons">Buttons</div>
			<div class="flex flex-col gap-2 ml-4 md:ml-12 mb-2">
				<Textbox>
					<span>Buttons have 3 widths, and can be colored.</span>
				</Textbox>
				<DSComponent>
					<button></button>
					<button class="button-lg"></button>
					<button class="button-square">X</button>
				</DSComponent>
				<CodeSnippet code={snippets.button} />
			</div>

			<!-- input -->
			<div class="pictochat-status" id="input">Input</div>
			<div class="flex flex-col gap-2 ml-4 md:ml-12 mb-2">
				<Textbox>
					<span>Inputs have optional bumpers to go before and after them.</span>
				</Textbox>
				<DSComponent>
					<label>
						<span>label</span>
						<div class="input-wrapper">
							<div class="input-before"></div>
							<input type="text" />
							<div class="input-after"></div>
						</div>
					</label>
				</DSComponent>
				<CodeSnippet code={snippets.input} />
			</div>

			<!-- radio buttons -->
			<div class="pictochat-status" id="radio">Radio Buttons</div>
			<div class="flex flex-col gap-2 ml-4 md:ml-12 mb-2">
				<Textbox>
					<span
						>Radio buttons need a color to appear selected.This example uses a css grid for its
						layout.</span
					>
					<Textbox>
						<header class="ds-darkpurple-50">Important</header>
						<span
							>Bring your own container for the &#x3C;fieldset&#x3E;! This example uses a grid for
							its layout.</span
						>
					</Textbox>
				</Textbox>
				<DSComponent>
					<fieldset class="grid grid-cols-2 gap-4">
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
					</fieldset>
				</DSComponent>
				<CodeSnippet code={snippets.radioButtons} />
			</div>

			<!-- grids -->
			<div class="pictochat-status" id="grids">Grids</div>
			<div class="flex flex-col gap-4 ml-4 md:ml-12 mb-2">
				<Textbox>
					<span>Grids should be provided with a width/height if they're empty.</span>
				</Textbox>

				<DSComponent>
					<div class="ds-grid w-96 h-48"></div>
					<div class="ds-grid-lg w-96 h-48"></div>
				</DSComponent>

				<CodeSnippet code={snippets.grids} />
			</div>

			<!-- bars -->
			<div class="pictochat-status" id="bars">Bars</div>
			<div class="flex flex-col gap-2 ml-4 md:ml-12 mb-2">
				<Textbox>
					<span>Bars can appear colored.</span>
				</Textbox>

				<DSComponent>
					<div class="bar ds-slate w-lg"></div>
					<div class="bar-lg ds-green w-lg"></div>
					<div class="bar-lg-reverse ds-darkpurple w-"></div>
				</DSComponent>

				<CodeSnippet code={snippets.bars} />
			</div>

			<!-- alert -->
			<div class="pictochat-status" id="alertpopup">Alert</div>
			<div class="flex flex-col gap-2 ml-4 md:ml-12 mb-2">
				<Textbox>
					<span
						>Alerts can be paired with an optional loading animation (which could be used on its
						own, too!).</span
					>
				</Textbox>

				<DSComponent>
					<div class="alert">
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
					</div>
				</DSComponent>

				<CodeSnippet code={snippets.alert} />
			</div>

			<!-- info / header -->
			<div class="pictochat-status" id="infoheader">Info / Header Box</div>
			<div class="flex flex-col gap-2 ml-4 md:ml-12 mb-2">
				<DSComponent>
					<div class="info">
						<div class="info-square">image</div>
						<div class="info-container">
							<div class="info-label">Settings</div>
							<div class="info-text">
								Change system settings here. Select the setting you'd like to change.
							</div>
						</div>
					</div>
				</DSComponent>
				<CodeSnippet code={snippets.info} />
			</div>

			<!-- pictochat -->
			<div class="pictochat-status" id="pictochat">Pictochat</div>
			<div class="flex flex-col gap-2 ml-4 md:ml-12 mb-2">
				<Textbox>
					<span>An optional selection / highlight class is available for pictochat elements.</span>
				</Textbox>
				<DSComponent>
					<div class="pictochat-window">
						<div class="pictochat-message pictochat-enter-highlight">Now joining..</div>
						<div class="pictochat-message">
							<header class="ds-blue-50">satellites</header>
							<span
								>cause the feelings come and go like flashing lights, but you never leave my
								satellite</span
							>
						</div>
						<div class="pictochat-status pictochat-exit-highlight">Now leaving..</div>
					</div>
				</DSComponent>
				<CodeSnippet code={snippets.pictochat} />
			</div>
		</main>
	</div>
</div>
