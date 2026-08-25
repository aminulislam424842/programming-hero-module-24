"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function canAccessOfflineMode(tier) {
    if (tier === "free") {
        return false;
    }
    return true;
}
console.log(canAccessOfflineMode("free"));
console.log(canAccessOfflineMode("pro"));
console.log(canAccessOfflineMode("premium"));
//# sourceMappingURL=06-MusicAppFeatureAccess.js.map