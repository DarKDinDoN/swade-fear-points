import { CONSTANTS } from "../shared/constants";

/** Settings global names */
export const SETTINGS = {
  GLOBAL_POINTS: "global-points",
  ERRATA_2023: "errata-2023",
  OPEN_AT_STARTUP: "open-at-startup",
  PLAYER_VISIBILITY: "player-visibility",
  CHARACTERS_ONLY: "characters-only",
  PER_SCENE: "per-scene",
  VIGNETTE_EFFECT: "vignette-effect"
};

/** Register settings */
export function registerSettings() {
  // Fear points setting (hidden)
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.GLOBAL_POINTS, {
    scope: "world",
    config: false,
    default: 0,
    type: Number
  });

  // Errata ruling
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.ERRATA_2023, {
    name: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.ERRATA_2023}-name`),
    hint: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.ERRATA_2023}-hint`),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    requiresReload: true
  });

  // Player visibility setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.PLAYER_VISIBILITY, {
    name: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.PLAYER_VISIBILITY}-name`),
    hint: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.PLAYER_VISIBILITY}-hint`),
    scope: "world",
    config: true,
    default: true,
    type: Boolean,
    requiresReload: true
  });

  // Open on startup setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.OPEN_AT_STARTUP, {
    name: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.OPEN_AT_STARTUP}-name`),
    hint: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.OPEN_AT_STARTUP}-hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Character only setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.CHARACTERS_ONLY, {
    name: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.CHARACTERS_ONLY}-name`),
    hint: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.CHARACTERS_ONLY}-hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean
  });

  // Per scene setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.PER_SCENE, {
    name: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.PER_SCENE}-name`),
    hint: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.PER_SCENE}-hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true
  });

  // Vignette effect setting
  game.settings.register(CONSTANTS.MODULE_NAME, SETTINGS.VIGNETTE_EFFECT, {
    name: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.VIGNETTE_EFFECT}-name`),
    hint: game.i18n.localize(`${CONSTANTS.MODULE_NAME}.${SETTINGS.VIGNETTE_EFFECT}-hint`),
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    requiresReload: true
  });
}
