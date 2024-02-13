let screenWidth = -1;

function setHotbarPosition(force=false, collapsed=false) {
	if (screenWidth == canvas.app.screen.width && !force)
		return;

	screenWidth = canvas.app.screen.width;

	let hotbarPosition = 0;
	if ((!force && !ui.hotbar._collapsed) || (force && collapsed))
	{
		let availableScreenWidth = screenWidth - 400 /* sidebar right */ - 200 /* stuff on left side */;
		if (availableScreenWidth > 640)
			hotbarPosition = (availableScreenWidth - 640) /* hotbar width */ / 2;
	}

	document.querySelector(":root").style.setProperty("--hotbarxpos", hotbarPosition + "px");
}


Hooks.on("ready", () => {
		setHotbarPosition();

		$("#bar-toggle").click(() => {
			setHotbarPosition(true, ($('#action-bar').hasClass('collapsed')));
		});

		Hooks.on("canvasPan", (app, html, data) => {
			setHotbarPosition();
		});

		Hooks.on("_onClickPageControl", (even) => {
			setHotbarPosition();
		});
});
