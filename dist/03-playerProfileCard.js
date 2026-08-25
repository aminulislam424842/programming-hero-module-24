"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatPlayerCard(player) {
    return `${player.username} is a level ${player.level} player from ${player.region}.`;
}
console.log(formatPlayerCard({
    username: "ShadowByte",
    level: 42,
    region: "Asia"
}));
//# sourceMappingURL=03-playerProfileCard.js.map