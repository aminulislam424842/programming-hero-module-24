"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getAgeRatingAccess(age) {
    if (age < 7) {
        return "E (Everyone)";
    }
    else if (age <= 12) {
        return "E10+ (Everyone 10+)";
    }
    else if (age <= 16) {
        return "T (Teen)";
    }
    else {
        return "M (Mature)";
    }
}
console.log(getAgeRatingAccess(5));
console.log(getAgeRatingAccess(10));
console.log(getAgeRatingAccess(15));
console.log(getAgeRatingAccess(20));
//# sourceMappingURL=01-gamingAgeChecker.js.map