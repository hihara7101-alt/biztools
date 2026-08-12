import type { Metadata } from "next";

import BreakEvenCalculator from "../../break-even-calculator/BreakEvenCalculator";

export const metadata: Metadata = {
  title: "Break-even Calculator | BizTools",

  description:
    "Calculate your break-even point, required sales volume, and revenue needed to become profitable. Free business calculator for entrepreneurs, freelancers, and small businesses.",

  keywords: [
    "break even calculator",
    "break even point calculator",
    "business profitability calculator",
    "sales volume calculator",
    "profit planning calculator",
  ],

  alternates: {
    canonical: "/en/break-even-calculator",

    languages: {
      "ja-JP": "/break-even-calculator",
      "en-US": "/en/break-even-calculator",
      "x-default": "/break-even-calculator",
    },
  },

  openGraph: {
    title: "Break-even Calculator | BizTools",

    description:
      "Calculate your break-even point, required sales volume, and revenue needed to become profitable.",

    url: "/en/break-even-calculator",

    siteName: "BizTools",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Break-even Calculator | BizTools",

    description:
      "Calculate your break-even point, required sales volume, and revenue needed to become profitable.",
  },
};

export default function BreakEvenCalculatorPage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "40px 20px 80px",
      }}
    >
      <section>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: 900,
            lineHeight: 1.2,
            color: "#111827",
          }}
        >
          Break-even Calculator
        </h1>

        <p
          style={{
            marginTop: "20px",
            fontSize: "20px",
            lineHeight: 1.8,
            color: "#4B5563",
            maxWidth: "850px",
          }}
        >
          Find out how many products or services you need
          to sell before your business starts making a
          profit.
        </p>

        <p
          style={{
            marginTop: "14px",
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#6B7280",
            maxWidth: "850px",
          }}
        >
          This calculator helps entrepreneurs, freelancers,
          and small business owners understand pricing,
          costs, and the sales volume needed to reach
          profitability.
        </p>
      </section>

      <BreakEvenCalculator lang="en" />

      <section
        style={{
          marginTop: "70px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          What is a Break-even Point?
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          The break-even point is the moment when your total
          revenue equals your total costs. At this point,
          your business is not losing money, but it is also
          not generating profit yet.
        </p>

        <p
          style={{
            marginTop: "16px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          Understanding your break-even point helps you make
          better decisions about pricing, expenses, hiring,
          advertising, and business growth.
        </p>
      </section>

      <section
        style={{
          marginTop: "70px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Break-even Formula
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#374151",
          }}
        >
          The break-even point is calculated by comparing
          your fixed costs with the amount of money each
          sale contributes after variable costs.
        </p>

        <div
          style={{
            marginTop: "30px",
            background: "#F9FAFB",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            padding: "30px",
          }}
        >
          <p
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "#111827",
            }}
          >
            Break-even Units =
          </p>

          <p
            style={{
              marginTop: "10px",
              fontSize: "22px",
              fontWeight: 700,
              color: "#2563EB",
            }}
          >
            Fixed Costs ÷ Contribution Margin per Unit
          </p>
        </div>

        <p
          style={{
            marginTop: "25px",
            fontSize: "17px",
            lineHeight: 1.8,
            color: "#374151",
          }}
        >
          Contribution margin represents the amount
          remaining from each sale after paying the variable
          cost of producing that product or delivering that
          service.
        </p>
      </section>

      <section
        style={{
          marginTop: "70px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Example: Finding Your Break-even Point
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          Imagine you sell a product for $100. Your variable
          cost is $40 per product, and your monthly fixed
          expenses are $6,000.
        </p>

        <div
          style={{
            marginTop: "30px",
            background: "#FFFFFF",
            border: "1px solid #E5E7EB",
            borderRadius: "16px",
            padding: "30px",
          }}
        >
          <ul
            style={{
              paddingLeft: "20px",
              fontSize: "17px",
              lineHeight: 2,
              color: "#374151",
            }}
          >
            <li>Selling price: $100</li>

            <li>Variable cost: $40</li>

            <li>Contribution per unit: $60</li>

            <li>Fixed costs: $6,000</li>

            <li>Break-even point: 100 units</li>
          </ul>
        </div>

        <p
          style={{
            marginTop: "25px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          This means the business needs to sell
          approximately 100 products every month before it
          starts generating profit.
        </p>
      </section>

      <section
        style={{
          marginTop: "70px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Why Break-even Analysis Matters
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          Break-even analysis is one of the most useful
          tools for understanding whether a business model
          can become profitable.
        </p>

        <div
          style={{
            display: "grid",
            gap: "20px",
            marginTop: "30px",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          <div
            style={{
              background: "#F9FAFB",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              Better Pricing Decisions
            </h3>

            <p
              style={{
                marginTop: "12px",
                lineHeight: 1.8,
                color: "#4B5563",
              }}
            >
              Understand whether your current price covers
              costs and creates enough profit potential.
            </p>
          </div>

          <div
            style={{
              background: "#F9FAFB",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              Smarter Growth Planning
            </h3>

            <p
              style={{
                marginTop: "12px",
                lineHeight: 1.8,
                color: "#4B5563",
              }}
            >
              Estimate how many sales are required before
              investing more money into growth.
            </p>
          </div>

          <div
            style={{
              background: "#F9FAFB",
              borderRadius: "16px",
              padding: "25px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              Reduce Business Risk
            </h3>

            <p
              style={{
                marginTop: "12px",
                lineHeight: 1.8,
                color: "#4B5563",
              }}
            >
              Know your minimum sales target before making
              important financial decisions.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          marginTop: "70px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Who Should Use This Calculator?
        </h2>

        <p
          style={{
            marginTop: "20px",
            fontSize: "17px",
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          Break-even calculations are useful for many types
          of businesses and financial decisions.
        </p>

        <ul
          style={{
            marginTop: "25px",
            paddingLeft: "25px",
            fontSize: "17px",
            lineHeight: 2,
            color: "#374151",
          }}
        >
          <li>Entrepreneurs starting a new business</li>

          <li>Freelancers calculating required clients</li>

          <li>Online sellers planning product sales</li>

          <li>Small businesses reviewing profitability</li>

          <li>Students learning business finance</li>
        </ul>
      </section>

      <section
        style={{
          marginTop: "70px",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: 800,
            color: "#111827",
          }}
        >
          Frequently Asked Questions
        </h2>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              What does break-even mean?
            </h3>

            <p
              style={{
                marginTop: "10px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#374151",
              }}
            >
              Break-even means your total revenue is equal
              to your total expenses. You are covering all
              costs but have not generated profit yet.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              What happens after reaching break-even?
            </h3>

            <p
              style={{
                marginTop: "10px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#374151",
              }}
            >
              Every additional sale after the break-even
              point contributes toward profit because fixed
              costs have already been covered.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              How can I reach break-even faster?
            </h3>

            <p
              style={{
                marginTop: "10px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#374151",
              }}
            >
              You can reach break-even faster by increasing
              prices, reducing variable costs, lowering
              fixed expenses, or increasing sales volume.
            </p>
          </div>

          <div>
            <h3
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
              }}
            >
              Is break-even analysis useful for small
              businesses?
            </h3>

            <p
              style={{
                marginTop: "10px",
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#374151",
              }}
            >
              Yes. Small businesses and freelancers can use
              break-even analysis to understand pricing,
              sales targets, and financial goals.
            </p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",

            mainEntity: [
              {
                "@type": "Question",
                name: "What does break-even mean?",

                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Break-even means total revenue equals total expenses.",
                },
              },

              {
                "@type": "Question",
                name:
                  "What happens after reaching break-even?",

                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Additional sales after break-even contribute toward profit.",
                },
              },

              {
                "@type": "Question",
                name:
                  "How can I reach break-even faster?",

                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Businesses can improve pricing, reduce costs, or increase sales volume.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}