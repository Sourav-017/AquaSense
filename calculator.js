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
