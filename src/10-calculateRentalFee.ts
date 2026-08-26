type VehicleType = "scooter" | "ebike" | "moped";

function calculateRentalFee(vehicle: VehicleType, minutes: number): number {

  if (vehicle === "scooter") {
    const unlockFee = 10;
    return unlockFee + (minutes * 2)
  }

  if (vehicle === "ebike") {
    const unlockFee = 15;
    return unlockFee + (minutes * 3)
  }
  const unlockFee = 25;

  return unlockFee + (minutes * 5)
}

console.log(calculateRentalFee("scooter", 20))
console.log(calculateRentalFee("ebike", 20))
console.log(calculateRentalFee("moped", 20))