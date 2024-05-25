import { html, useState, useMemo, useCallback, useEffect } from 'https://unpkg.com/htm/preact/standalone.module.js';

const App = () => {
	const greeting = 'Hello, Preact!!!';
    return html`
        <div className='App'>
			${greeting}
        </div>`;
};

document.head.insertAdjacentHTML('beforeend', `
	<style>
		.App {
			width: 100vw;
			height: 100vh;
			background: #fff;
		}
	</style>
`);

export default App;