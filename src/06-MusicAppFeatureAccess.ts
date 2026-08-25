type Tier = "free" | "pro" | "premium";

function canAccessOfflineMode(tier: Tier): boolean {

  if (tier === "free") {
    return false;
  }
  return true;

}

console.log(canAccessOfflineMode("free"));
console.log(canAccessOfflineMode("pro"));
console.log(canAccessOfflineMode("premium"));