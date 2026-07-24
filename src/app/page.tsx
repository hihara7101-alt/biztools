import Link from "next/link";

import Hero from "@/components/Hero";
import CalculatorCard from "@/components/CalculatorCard";
import FeatureCard from "@/components/FeatureCard";
import UserCard from "@/components/UserCard";

export default function Home() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 24px 100px",
      }}
    >
      <Hero lang="en" />

      {/* Popular Business Tools */}

      <section
        style={{
          marginTop: "40px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            color: "#111827",
          }}
        >
          Popular Business Tools
        </h2>

        <p
          style={{
            marginTop: "18px",
            textAlign: "center",
            maxWidth: "700px",
            marginInline: "auto",
            color: "#6B7280",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          Professional calculators designed to help entrepreneurs,
          freelancers and small business owners understand their
          numbers and make smarter financial decisions.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "28px",
            marginTop: "50px",
          }}
        >
          <CalculatorCard
            icon="📈"
            title="Profit Calculator"
            description="Calculate gross profit, net profit and profit margins."
            bestFor={`• Small Business
• Freelancers
• Online Sellers`}
            href="/profit-calculator"
            popular
          />

          <CalculatorCard
            icon="⚖️"
            title="Break-even Calculator"
            description="Know exactly how many sales you need before making a profit."
            bestFor={`• Startups
• Retail
• Restaurants`}
            href="/break-even-calculator"
          />

          <CalculatorCard
            icon="🎯"
            title="Sales Target Calculator"
            description="Calculate the sales required to reach your profit goal."
            bestFor={`• Business Planning
• Forecasting`}
            href="/sales-target-calculator"
          />

          <CalculatorCard
            icon="💰"
            title="Pricing Calculator"
            description="Find the best selling price for your products."
            bestFor={`• Products
• Services
• Ecommerce`}
            href="/pricing-calculator"
          />

          <CalculatorCard
            icon="📊"
            title="ROI Calculator"
            description="Measure the return on your investment."
            bestFor={`• Marketing
• Equipment
• Projects`}
            href="/roi-calculator"
          />
        </div>
      </section>
           {/* Why BizTools */}

      <section
        style={{
          marginTop: "100px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            color: "#111827",
          }}
        >
          Why BizTools?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(240px,1fr))",
            gap: "24px",
            marginTop: "50px",
          }}
        >
          <FeatureCard
            icon="⚡"
            title="Fast & Simple"
            description="Professional business calculations in seconds."
            href="/about"
            lang="en"
          />

          <FeatureCard
            icon="🎯"
            title="Built for Business"
            description="Created specifically for entrepreneurs, freelancers and small businesses."
            href="/about"
            lang="en"
          />

          <FeatureCard
            icon="📱"
            title="Works Everywhere"
            description="Fully responsive on desktop, tablet and mobile devices."
            href="/about"
            lang="en"
          />

          <FeatureCard
            icon="✅"
            title="Always Free"
            description="No registration. No subscription. No hidden fees."
            href="/about"
            lang="en"
          />
        </div>
      </section>
             {/* Who Uses BizTools? */}

      <section
        style={{
          marginTop: "100px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            color: "#111827",
          }}
        >
          Who Uses BizTools?
        </h2>

        <p
          style={{
            marginTop: "18px",
            textAlign: "center",
            maxWidth: "700px",
            marginInline: "auto",
            color: "#6B7280",
            lineHeight: 1.8,
            fontSize: "18px",
          }}
        >
          BizTools is designed for anyone who needs quick and reliable
          business calculations.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "24px",
            marginTop: "50px",
          }}
        >
          <UserCard
            icon="🚀"
            title="Entrepreneurs"
            description="Plan your business with confidence using professional financial calculators."
          />

          <UserCard
            icon="💼"
            title="Freelancers"
            description="Price your services correctly and understand your real profit."
          />

          <UserCard
            icon="🏪"
            title="Small Business"
            description="Monitor profitability, sales targets and business performance."
          />

          <UserCard
            icon="🎓"
            title="Students"
            description="Learn important business concepts using practical calculators."
          />
        </div>
      </section>
            {/* CTA */}

      <section
        style={{
          marginTop: "110px",
          background: "#2563EB",
          borderRadius: "28px",
          padding: "70px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 800,
            color: "#FFFFFF",
            margin: 0,
          }}
        >
          Ready to Make Better Business Decisions?
        </h2>

        <p
          style={{
            marginTop: "24px",
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#DBEAFE",
            maxWidth: "760px",
            marginInline: "auto",
          }}
        >
          Start using our free business calculators today and make
          smarter financial decisions with confidence.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <Link
            href="/calculators"
            style={{
              background: "#FFFFFF",
              color: "#2563EB",
              textDecoration: "none",
              padding: "16px 34px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            Browse Business Tools →
          </Link>

          <Link
            href="/profit-calculator"
            style={{
              border: "2px solid rgba(255,255,255,.4)",
              color: "#FFFFFF",
              textDecoration: "none",
              padding: "16px 34px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            Try Profit Calculator
          </Link>
        </div>
      </section>
            {/* FAQ */}

      <section
        style={{
          marginTop: "110px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: 700,
            textAlign: "center",
            color: "#111827",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gap: "24px",
          }}
        >
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "22px",
                color: "#111827",
              }}
            >
              Are these calculators free?
            </h3>

            <p
              style={{
                marginTop: "16px",
                color: "#6B7280",
                lineHeight: 1.8,
              }}
            >
              Yes. Every calculator on BizTools is completely free to
              use. No registration or subscription is required.
            </p>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "22px",
                color: "#111827",
              }}
            >
              Who are these calculators for?
            </h3>

            <p
              style={{
                marginTop: "16px",
                color: "#6B7280",
                lineHeight: 1.8,
              }}
            >
              BizTools is designed for entrepreneurs, freelancers,
              startups, online sellers, students and anyone who wants
              to better understand business numbers.
            </p>
          </div>

          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "18px",
              padding: "28px",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "22px",
                color: "#111827",
              }}
            >
              Do I need to create an account?
            </h3>

            <p
              style={{
                marginTop: "16px",
                color: "#6B7280",
                lineHeight: 1.8,
              }}
            >
              No. All calculators work instantly in your browser. We do
              not require user accounts.
            </p>
          </div>
        </div>
      </section>
          </main>
  );
}