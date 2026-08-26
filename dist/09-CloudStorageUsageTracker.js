"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function updateStorageUsage(currentUsageMB, action) {
    if (action.type === "upload") {
        return currentUsageMB + action.sizeMB;
    }
    const storage = currentUsageMB - action.sizeMB;
    if (storage < 0) {
        return 0;
    }
    return storage;
}
console.log(updateStorageUsage(2000, { type: "upload", sizeMB: 500 }));
console.log(updateStorageUsage(2000, { type: "delete", sizeMB: 800 }));
console.log(updateStorageUsage(300, { type: "delete", sizeMB: 1000 }));
//# sourceMappingURL=09-CloudStorageUsageTracker.js.map