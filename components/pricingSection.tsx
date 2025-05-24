"use client"

import React from "react";

const plans = [
  {
    name: "LaunchPad",
    setup: {
      title: "One-Time Setup – ₹39,000",
      features: [
        "Custom 5-page Shopify store",
        "50 products + payment/shipping setup",
        "Basic SEO + Analytics setup",
        "Instagram & WhatsApp integration",
      ],
    },
    retainer: {
      title: "Monthly Retainer – ₹9,000/mo",
      features: [
        "SEO tracking & technical fixes",
        "Keyword monitoring (10 terms)",
        "Website (Store) maintenance & tech support",
        "Ongoing Shopify store support (bugs, discounts, product uploads)",
        "Monthly performance report",
      ],
    },
  },
  {
    name: "GrowthEngine",
    setup: {
      title: "One-Time Setup – ₹79,000",
      features: [
        "10-page custom UX Shopify store",
        "100 products + smart collections",
        "Advanced SEO + 3 blog uploads",
        "Meta & Google Ads integration",
      ],
    },
    retainer: {
      title: "Monthly Retainer – ₹19,000/mo",
      features: [
        "On-page & technical SEO (20 keywords)",
        "Ad campaign optimization (up to ₹30K spend)",
        "Email campaign setup (2/month)",
        "Website (Store) maintenance & tech support",
        "Shopify store support: custom sections, discount logic, app integrations",
        "Landing page tweaks + AB testing",
      ],
    },
  },
  {
    name: "ScaleX",
    setup: {
      title: "One-Time Setup – ₹1.29L",
      features: [
        "Fully custom Shopify UX + UI",
        "Unlimited product import + filters",
        "Subscription, upsell, and loyalty apps",
        "Full SEO audit + keyword dashboard",
      ],
    },
    retainer: {
      title: "Monthly Retainer – ₹35K–65K/mo",
      features: [
        "Full SEO + blog strategy (30+ keywords)",
        "Meta, Google, YouTube ad management",
        "Email flows (Klaviyo/Mailchimp)",
        "Website (Store) maintenance & tech support",
        "Advanced Shopify support: custom dev, app setup, UX optimization",
        "Growth strategist + monthly reporting",
        "<span class=\"font-bold text-red-700 bg-gray-100 px-2 py-1 rounded\">Dedicated Shopify developer & digital marketer</span>",
      ],
    },
  },
];

const PricingSection = () => {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 md:text-5xl text-red-700">
          Shopify Growth Plans Built for Scale
        </h2>
        <p className="text-center text-gray-700 mb-14 text-lg max-w-3xl mx-auto">
          Powered by <span className="text-red-600 font-semibold">Dbuggger</span> – Full-stack Shopify dev & marketing agency.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="rounded-2xl shadow-lg p-8 flex flex-col justify-between border-2 border-red-600 hover:shadow-2xl transition"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6 text-red-600">{plan.name}</h3>

                <div className="mb-8">
                  <h4 className="font-semibold text-xl mb-3 border-b border-red-600 pb-2">
                    {plan.setup.title}
                  </h4>
                  <ul className="text-sm space-y-3 list-disc list-inside text-gray-800">
                    {plan.setup.features.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-xl mb-3 border-b border-red-600 pb-2">
                    {plan.retainer.title}
                  </h4>
                  <ul className="text-sm space-y-3 list-disc list-inside text-gray-800">
                    {plan.retainer.features.map((item, i) => (
                      <li
                        key={i}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    ))}
                  </ul>
                </div>
              </div>

              <button
                className="mt-10 bg-red-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-red-700 transition"
                aria-label={`Book a free call for ${plan.name} plan`}
              >
                Book a Free Call
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
