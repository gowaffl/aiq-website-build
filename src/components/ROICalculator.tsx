import { useState } from "react";

export default function ROICalculator() {
  const [cases, setCases] = useState(300);
  const [authRate, setAuthRate] = useState(55);

  const improvementPct = 0.12;
  const additionalAuths = Math.round(cases * (authRate / 100) * improvementPct);
  const annualImpact = additionalAuths * 18500; // estimated value per authorization

  return (
    <div className="bg-white rounded-2xl p-8 shadow-card border border-border">
      <h3 className="text-lg font-bold text-foreground mb-1">Estimate Your Impact</h3>
      <p className="text-sm text-muted-foreground mb-7">
        See what authorizationIQ™ could mean for your organization.
      </p>

      {/* Slider 1 */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-semibold text-foreground">Annual Referral Cases</label>
          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">{cases}</span>
        </div>
        <input
          type="range"
          min={50}
          max={1000}
          step={10}
          value={cases}
          onChange={(e) => setCases(Number(e.target.value))}
          className="w-full h-2 appearance-none rounded-full cursor-pointer"
          style={{
            background: `linear-gradient(to right, hsl(204, 60%, 27%) ${((cases - 50) / 950) * 100}%, hsl(33, 20%, 88%) ${((cases - 50) / 950) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
          <span>50</span>
          <span>1,000</span>
        </div>
      </div>

      {/* Slider 2 */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-semibold text-foreground">Current Authorization Rate</label>
          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg">{authRate}%</span>
        </div>
        <input
          type="range"
          min={30}
          max={85}
          step={1}
          value={authRate}
          onChange={(e) => setAuthRate(Number(e.target.value))}
          className="w-full h-2 appearance-none rounded-full cursor-pointer"
          style={{
            background: `linear-gradient(to right, hsl(204, 60%, 27%) ${((authRate - 30) / 55) * 100}%, hsl(33, 20%, 88%) ${((authRate - 30) / 55) * 100}%)`,
          }}
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1.5">
          <span>30%</span>
          <span>85%</span>
        </div>
      </div>

      {/* Outputs */}
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="bg-primary/5 border border-primary/15 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-primary mb-1">+{additionalAuths}</div>
          <div className="text-xs text-muted-foreground font-medium leading-snug">Projected Additional Authorizations / Year</div>
        </div>
        <div className="bg-success/5 border border-success/15 rounded-xl p-4 text-center">
          <div className="text-3xl font-bold text-success mb-1">
            ${annualImpact >= 1000000
              ? `${(annualImpact / 1000000).toFixed(1)}M`
              : `${(annualImpact / 1000).toFixed(0)}K`}
          </div>
          <div className="text-xs text-muted-foreground font-medium leading-snug">Estimated Annual Impact</div>
        </div>
      </div>

      <p className="text-xs text-muted-foreground italic leading-relaxed">
        * Estimates based on projected 12% improvement rate and $18,500 estimated value per additional authorization. Results vary by organization. For illustrative purposes only.
      </p>
    </div>
  );
}
