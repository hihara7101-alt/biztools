import CalculatorCard from "@/components/CalculatorCard";

const calculators = [
  {
    icon: "📈",
    title: "Profit Calculator",
    description:
      "Understand profit, margin and contribution margin.",
    bestFor:
      "✓ Small Business\n✓ Freelancers\n✓ Online Sellers",
    href: "/en/profit-calculator",
    popular: true,
  },

  {
    icon: "⚖️",
    title: "Break-even Calculator",
    description:
      "Find out exactly when your business becomes profitable.",
    bestFor:
      "✓ Startups\n✓ Retail\n✓ Restaurants",
    href: "/en/break-even-calculator",
  },

  {
    icon: "🎯",
    title: "Sales Target Calculator",
    description:
      "Calculate the sales required to reach your profit goal.",
    bestFor:
      "✓ Business Planning\n✓ Forecasting",
    href: "/en/sales-target-calculator",
  },

  {
    icon: "💰",
    title: "Pricing Calculator",
    description:
      "Set the right selling price using your target margin.",
    bestFor:
      "✓ Products\n✓ Services\n✓ Ecommerce",
    href: "/en/pricing-calculator",
  },

  {
    icon: "📊",
    title: "ROI Calculator",
    description:
      "Measure the return on your investments.",
    bestFor:
      "✓ Marketing\n✓ Equipment\n✓ Projects",
    href: "/en/roi-calculator",
  },
];

export default function CalculatorsPage() {
  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "60px 24px",
      }}
    >
      <h1
        style={{
          fontSize: "44px",
          fontWeight: 700,
        }}
      >
        Business Tools
      </h1>

      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
          color: "#6B7280",
          lineHeight: "1.8",
          maxWidth: "720px",
        }}
      >
        Professional business tools designed to help entrepreneurs,
        freelancers and small business owners make smarter financial
        decisions.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "30px",
          marginTop: "50px",
        }}
      >
        {calculators.map((calculator) => (
          <CalculatorCard
            key={calculator.title}
            icon={calculator.icon}
            title={calculator.title}
            description={calculator.description}
            bestFor={calculator.bestFor}
            href={calculator.href}
            popular={calculator.popular}
            lang="en"
          />
        ))}
      </div>

      <section
        style={{
          marginTop: "90px",
          background: "#F9FAFB",
          border: "1px solid #E5E7EB",
          borderRadius: "24px",
          padding: "48px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 700,
            color: "#111827",
          }}
        >
          Why BizTools?
        </h2>

        <p
          style={{
            marginTop: "22px",
            color: "#6B7280",
            lineHeight: "1.9",
            fontSize: "17px",
          }}
        >
          Every successful business starts with understanding the
          numbers. BizTools provides professional business tools that
          help you calculate profit, pricing, break-even points, return
          on investment, and sales targets quickly and accurately.
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#6B7280",
            lineHeight: "1.9",
            fontSize: "17px",
          }}
        >
          Whether you're starting a new business, managing an online
          store, or planning future growth, BizTools helps you make
          smarter business decisions with confidence.
        </p>
      </section>
    </main>
  );
}