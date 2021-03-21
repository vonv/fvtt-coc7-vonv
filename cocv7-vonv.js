function collapse(toggleId) {
  let target = document.getElementById(toggleId);
  if (target) {
    target.click();
  }
}

Hooks.on('ready', () => {
  // Importer Control Menu

  game.settings.register('CoC7', 'artworkMainFont',{
    name: 'SETTINGS.ArtworkMainFont',
    // hint: 'SETTINGS.ArtworkMainFontHint',
    scope: 'world',
    config: true,
    default: 'url(\'./modules/fvtt-coc7-vonv/mailart-rubberstamp.ttf\') format(\'truetype\')',
    type: String
  });

  game.settings.register('CoC7', 'artworkMainFontBold',{
    name: 'SETTINGS.ArtworkMainFontBold',
    // hint: 'SETTINGS.ArtworkMainFontHint',
    scope: 'world',
    config: true,
    default: 'url(\'./fvtt-coc7-vonv/fonts/mailart-rubberstamp.ttf\') format(\'truetype\')',
    type: String
  });

  game.settings.register('CoC7', 'artworkMainFontSize',{
    name: 'SETTINGS.ArtworkMainFontSize',
    // hint: 'SETTINGS.ArtworkMainFontSizeHint',
    scope: 'world',
    config: true,
    default: 20,
    type: Number
  });

  game.settings.register('CoC7', 'artworkFrontColor',{
    name: 'SETTINGS.ArtworkFrontColor',
    hint: 'SETTINGS.ArtworkFrontColorHint',
    scope: 'world',
    config: true,
    default: 'rgba(43,55,83,1)',
    type: String
  });
  
  collapse("bar-toggle");

});
