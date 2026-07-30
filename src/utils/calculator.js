/**
 * Uttar Pradesh PM Surya Ghar Solar Savings & Subsidy Calculator
 * Incorporating both Central (MNRE) and UP State Government Subsidies
 */

export function calculateSolarMetrics(inputBill, inputRoofArea = null, calculationMode = 'bill') {
  let bill = Math.max(500, Number(inputBill) || 4000);
  const tariffPerUnit = 7.5; // Average UPVCL tariff per unit (₹)
  const unitsPerKwMonth = 125; // Average monthly solar kWh generation per kW in UP

  let recommendedKw = 3;
  let roofAreaSqFt = 250;

  if (calculationMode === 'roofArea' && inputRoofArea) {
    roofAreaSqFt = Math.max(80, Number(inputRoofArea));
    // ~80-90 sq. ft per kW
    recommendedKw = parseFloat((roofAreaSqFt / 85).toFixed(2));
    bill = Math.round(recommendedKw * unitsPerKwMonth * tariffPerUnit);
  } else {
    // Bill mode
    const estimatedUnitsPerMonth = bill / tariffPerUnit;
    recommendedKw = parseFloat((estimatedUnitsPerMonth / unitsPerKwMonth).toFixed(2));
    if (recommendedKw < 1) recommendedKw = 1;
    roofAreaSqFt = Math.round(recommendedKw * 85);
  }

  // Round system size for subsidy tiers (1, 2, 3, 4, 5, 8, 10 kW standards)
  const kwNum = Math.max(1, recommendedKw);

  // 1. Central Subsidy (MNRE)
  let centralSubsidy = 0;
  if (kwNum <= 1) {
    centralSubsidy = 30000;
  } else if (kwNum <= 2) {
    centralSubsidy = 60000;
  } else {
    centralSubsidy = 78000; // Capped at ₹78,000 for 3 kW and above
  }

  // 2. UP State Subsidy (Uttar Pradesh Govt)
  let stateSubsidy = 0;
  if (kwNum < 2) {
    stateSubsidy = 15000;
  } else {
    stateSubsidy = 30000; // Flat ₹30,000 for 2 kW and above in UP
  }

  // Total Combined Subsidy
  const totalSubsidy = centralSubsidy + stateSubsidy;

  // Turnkey System Market Cost (MSP) based on UP State Official Tariff Sheet
  let estimatedTotalCost = Math.round(kwNum * 60000);
  if (kwNum >= 2 && kwNum < 3) estimatedTotalCost = 130000;
  else if (kwNum >= 3 && kwNum < 4) estimatedTotalCost = 180000;
  else if (kwNum >= 4 && kwNum < 5) estimatedTotalCost = 240000;
  else if (kwNum >= 5 && kwNum < 8) estimatedTotalCost = 300000;
  else if (kwNum >= 8 && kwNum < 10) estimatedTotalCost = 480000;
  else if (kwNum >= 10) estimatedTotalCost = 600000;

  const netInvestmentCost = Math.max(15000, estimatedTotalCost - totalSubsidy);

  // Financial Savings
  const monthlyGenerationUnits = Math.round(kwNum * unitsPerKwMonth);
  const annualGenerationUnits = monthlyGenerationUnits * 12;

  const monthlySavings = Math.round(monthlyGenerationUnits * tariffPerUnit);
  const yearlySavings = monthlySavings * 12;
  const lifetimeSavings = yearlySavings * 25; // 25 years warranty life

  // Environmental Impact
  const co2MitigatedKg = Math.round(annualGenerationUnits * 0.85); // 0.85 kg CO2 per kWh
  const annualCo2ReductionTons = parseFloat((co2MitigatedKg / 1000).toFixed(2));
  const treesPlanted = Math.round(co2MitigatedKg / 20); // ~20kg CO2 per tree/yr
  const evDistanceKm = Math.round(annualGenerationUnits * 7); // ~7 km per kWh EV efficiency

  return {
    monthlyBill: bill,
    recommendedKw,
    roofAreaSqFt,
    monthlyGenerationUnits,
    annualGenerationUnits,
    monthlySavings,
    yearlySavings,
    annualSavings: yearlySavings, // Alias for component compatibility
    lifetimeSavings,
    centralSubsidy,
    stateSubsidy,
    totalSubsidy,
    subsidy: totalSubsidy, // Alias for component compatibility
    estimatedTotalCost,
    netInvestmentCost,
    paybackYears: parseFloat((netInvestmentCost / Math.max(1, yearlySavings)).toFixed(1)),
    co2MitigatedKg,
    annualCo2ReductionTons, // Alias for component compatibility
    treesPlanted,
    equivalentTreesPlanted: treesPlanted, // Alias for component compatibility
    evDistanceKm
  };
}
