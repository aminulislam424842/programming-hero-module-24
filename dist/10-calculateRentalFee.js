"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateRentalFee(vehicle, minutes) {
    if (vehicle === "scooter") {
        const unlockFee = 10;
        return unlockFee + (minutes * 2);
    }
    if (vehicle === "ebike") {
        const unlockFee = 15;
        return unlockFee + (minutes * 3);
    }
    const unlockFee = 25;
    return unlockFee + (minutes * 5);
}
console.log(calculateRentalFee("scooter", 20));
console.log(calculateRentalFee("ebike", 20));
console.log(calculateRentalFee("moped", 20));
//# sourceMappingURL=10-calculateRentalFee.js.map