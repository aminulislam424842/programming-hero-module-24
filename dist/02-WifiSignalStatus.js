"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSignalStatus(strength) {
    if (strength < 0 || strength > 100) {
        return "Invalid";
    }
    if (strength <= 20) {
        return "Weak";
    }
    else if (strength <= 50) {
        return "Fair";
    }
    else if (strength <= 80) {
        return "Good";
    }
    else {
        return "Excellent";
    }
}
console.log(getSignalStatus(10));
console.log(getSignalStatus(20));
console.log(getSignalStatus(21));
console.log(getSignalStatus(35));
console.log(getSignalStatus(65));
console.log(getSignalStatus(80));
console.log(getSignalStatus(81));
console.log(getSignalStatus(95));
console.log(getSignalStatus(-12));
console.log(getSignalStatus(101));
//# sourceMappingURL=02-WifiSignalStatus.js.map