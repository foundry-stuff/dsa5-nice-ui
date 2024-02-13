Hooks.on('renderSettings', async () => {
	if (game.users.current.role < 3) {
		$("button[data-action=modules]").hide();
		$("li.modules").hide();
	}
	$("button[class=fshopButton]").hide();
});

Hooks.on("renderModuleManagement", (app, html) => {
	html.find('button[name="deactivate"]').css("display", "none");
});

// Needs to be done the "hard" way, since dsa5-nice-ui is loaded BEFORE lang-de.
Hooks.on("i18nInit", () => {
    game.i18n.translations.TOKEN.TitlePrototype = "Token";
});
