type LikeNotification = {
  type: "like",
  fromUser: string
}

type SystemNotification =
  {
    type: "system",
    message: string,
    actionUrl?: string
  }

function renderNotification(notification: LikeNotification | SystemNotification): string {

  if (notification.type === "like") {
    return `${notification.fromUser} liked your post.`
  }
  let result = `System: ${notification.message}`
  if (notification.actionUrl) {
    result += ` (Tap to view)`
  }

  return result

}

console.log(renderNotification({ type: "like", fromUser: "Aisha" }))
console.log(renderNotification({ type: "system", message: "Maintenance complete." }))
console.log(renderNotification({ type: "system", message: "Your subscription is expiring soon.", actionUrl: "/billing" })
)