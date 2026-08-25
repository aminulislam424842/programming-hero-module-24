"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTotalListeningTime(tracks) {
    if (tracks.length === 0) {
        return 0;
    }
    return tracks.reduce((total, min) => total + min.minutes, 0);
}
const tracks1 = [
    { title: "Blinding Lights", minutes: 3 },
    { title: "Levitating", minutes: 4 },
    { title: "Peaches", minutes: 3 }
];
const tracks2 = [
    { title: "Flowers", minutes: 3 },
    { title: "Anti-Hero", minutes: 4 }
];
console.log(calculateTotalListeningTime(tracks1));
console.log(calculateTotalListeningTime(tracks2));
//# sourceMappingURL=04-musicAppListeningTimeTracker.js.map