"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function renderNotification(notification) {
    if (notification.type === "like") {
        return `${notification.fromUser} liked your post.`;
    }
    let result = `System: ${notification.message}`;
    if (notification.actionUrl) {
        result += ` (Tap to view)`;
    }
    return result;
}
console.log(renderNotification({ type: "like", fromUser: "Aisha" }));
console.log(renderNotification({ type: "system", message: "Maintenance complete." }));
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" }));
//# sourceMappingURL=08-NotificationCenterRenderer.js.map