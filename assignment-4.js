// PROBLEM ---- 1
function radianToDegree(radian) {
  if (typeof radian != "number") {
    return "please input numbers";
  } else {
    // Radian to degree formula
    const radianCalculation = (radian * 180) / Math.PI;
    return radianCalculation.toFixed(2);
  }
}

// PROBLEM ---- 2
function isJavaScriptFile(inputFileName) {
  if (inputFileName !== String) {
    return "input valid text";
  } else if (inputFileName.endsWith(".js")) {
    return true;
  } else {
    return false;
  }
}

// PROBLEM ---- 3
function oilPrice(diesel, petrol, octane) {
  if (diesel < 0 && petrol < 0 && octane < 0) {
    return "Invalid Values; please input numbers!";
  } else if (
    typeof diesel === "number" &&
    typeof petrol === "number" &&
    typeof octane === "number"
  ) {
    let dieselPrice = diesel * 114;
    let petrolPrice = petrol * 130;
    let octanePrice = octane * 135;
    return dieselPrice + petrolPrice + octanePrice;
  } else {
  }
}

// PROBLEM ---- 4
function publicBusFare(people) {
  if (people < 50 && people > 0) {
    let publicTransportPassenger1 = people % 11;

    return publicTransportPassenger1 * 250;
  } else if (people > 50 && people > 0) {
    let publicTransportPassenger2 = people % 50;
    let publicTransportPassenger3 = publicTransportPassenger2 % 11;
    return publicTransportPassenger3 * 250;
  }
  // Error Message if input is not a number
  else if (people !== Number) {
    return "input numbers";
  }
}
// PROBLEM ---- 5
function isBestFriend(friend1, friend2) {
  // Error Message if input is not an object
  if (typeof friend1 !== "object" || typeof friend2 !== "object") {
    return "Error; provide valid information";
  } else if (
    friend1.name === friend2.friend &&
    friend1.friend === friend2.name
  ) {
    return true;
  } else {
    return false;
  }
}
