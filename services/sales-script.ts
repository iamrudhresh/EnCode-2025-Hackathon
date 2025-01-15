export const salesScript = {
  introduction:
    "Hello, this is Alex from Smallest.ai. Am I speaking with {customerName} from {companyName}?",

  valueProposition:
    "At Smallest.ai, we've developed Lightning, the world's fastest text-to-speech AI model, capable of generating ultra-realistic voice responses in under 100 milliseconds. This breakthrough technology is transforming how businesses handle voice interactions.",

  questions: [
    'Could you tell me about your current challenges with voice automation?',
    "What's your current customer service response time like?",
    'How many customer interactions do you handle daily?',
    "What's your target for reducing response times?",
    'Have you explored any AI solutions before?',
  ],

  responses: {
    cost_concern: [
      'I understand budget is a key consideration. Our solution typically delivers a 60% reduction in operational costs within the first six months.',
      'We offer flexible pricing models that scale with your usage, ensuring you only pay for what you need.',
    ],
    integration: [
      'Lightning is designed for seamless integration with existing systems. Our API can be implemented in less than a day.',
      'We provide full documentation and dedicated support during the integration process.',
    ],
    quality_concern: [
      'Our voice quality is indistinguishable from human speech, with a 98% positive customer feedback rate.',
      'We maintain a consistent voice quality across all interactions, ensuring brand consistency.',
    ],
    timeline: [
      'We can have you up and running within 48 hours of signing up.',
      'Our team will work with you to ensure a smooth transition with zero downtime.',
    ],
  },

  closingStatements: [
    'Based on what you\'ve shared, I believe we can help reduce your response times by 80% and cut costs by 60%. Would you like to schedule a technical demo?',
    'I can offer you a two-week trial period with full support. Would that help you evaluate the impact on your operations?',
    "Let's set up a brief technical demonstration with your team. When would be the best time this week?",
  ],
};