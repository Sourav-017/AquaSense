function calculateWaterQuality() {
  // Get input values
  const ph = parseFloat(document.getElementById("ph").value);
  const doLevel = parseFloat(document.getElementById("do").value);
  const so2 = parseFloat(document.getElementById("so2").value);
  const co2 = parseFloat(document.getElementById("co2").value);
  const nh3 = parseFloat(document.getElementById("nh3").value);

  // Basic validation
  if (isNaN(ph) || isNaN(doLevel) || isNaN(so2) || isNaN(co2) || isNaN(nh3)) {
    document.getElementById("result").innerHTML =
      "Please enter valid values for all parameters.";
    return;
  }

  // Example calculation logic
  let qualityScore = 100;

  // Deduct points based on thresholds
  if (ph < 6.5 || ph > 8.5) qualityScore -= 10;
  if (doLevel < 5) qualityScore -= 15;
  if (so2 > 10) qualityScore -= 10;
  if (co2 > 20) qualityScore -= 10;
  if (nh3 > 1) qualityScore -= 15;

  // Determine quality status
  const qualityStatus =
    qualityScore >= 80 ? "Good" : qualityScore >= 50 ? "Fair" : "Poor";

  // Display result with a Learn More button
  document.getElementById("result").innerHTML = `
    Water Quality Score: ${qualityScore} (${qualityStatus}) 
    <br>
    <a href="/learn-more.html" 
       class="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 inline-block hover:bg-blue-600 transition duration-200">
       Learn More
    </a>
  `;
}
function calculateFoodConsumption() {
  const quantity = parseFloat(document.getElementById("quantity").value);
  const avgSize = parseFloat(document.getElementById("avgSize").value);
  const fishName = document.getElementById("fishName").value.trim();

  if (isNaN(quantity) || isNaN(avgSize) || quantity <= 0 || avgSize <= 0) {
    document.getElementById("foodResult").innerText =
      "Please enter valid values.";
    return;
  }

  // Feed rate can vary by fish type; default is 3%
  let feedRate = 0.03;

  // Optional: Add special feed rates for known fish
  const feedRatesByFish = {
    চিংড়ী: 0.04,
    রুই: 0.025,
    কাতলা: 0.025,
    মৃগেল: 0.025,
    পাঙ্গাস: 0.03,
    তেলাপিয়া: 0.035,
    নাইলোটিকা: 0.035,
    শিং: 0.04,
    মাগুর: 0.045,
    গোলসা: 0.03,
    পাবদা: 0.035,
    কৈ: 0.03,
    বোয়াল: 0.03,
    কই: 0.03,
    আইড়: 0.03,
    রিঠা: 0.03,
    গাফি: 0.03,
    সরপুঁটি: 0.025,
  };

  if (feedRatesByFish[fishName]) {
    feedRate = feedRatesByFish[fishName];
  }

  const totalFeed = quantity * avgSize * feedRate; // in grams
  const totalFeedKg = (totalFeed / 1000).toFixed(2);

  document.getElementById(
    "foodResult"
  ).innerText = `Estimated daily food required: ${totalFeed.toFixed(
    2
  )} g (${totalFeedKg} kg)`;
}
