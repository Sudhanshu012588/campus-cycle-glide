
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I sign up for CampusCycle?",
    answer: "Signing up is easy! Download our app from the App Store or Google Play, create an account with your university email, and follow the verification process. Once verified, you can immediately start renting cycles."
  },
  {
    question: "What types of cycles do you offer?",
    answer: "We offer electric cycles with different features. Our standard e-cycles are perfect for quick trips, while our premium models have extended battery life and more comfortable seating for longer journeys."
  },
  {
    question: "How long can I rent a cycle?",
    answer: "Rental duration depends on your plan. Pay-as-you-go users can rent for any duration. Monthly plans offer unlimited 30-minute rides for Basic users, 60-minute rides for Commuters, and unlimited duration for Explorers."
  },
  {
    question: "Where can I pick up and drop off cycles?",
    answer: "You can pick up and drop off cycles at any of our designated stations across campus. The app map shows all available stations and the number of bikes currently available at each location."
  },
  {
    question: "What if the battery dies during my ride?",
    answer: "Our cycles are regularly charged and maintained, but if you experience a battery issue, park at the nearest station and report it through the app. You won't be charged for the remainder of your rental time."
  },
  {
    question: "What if there are no docking stations near my destination?",
    answer: "We've placed stations at strategic locations around campus, but if you can't find one nearby, you can use the app to locate the closest station. Premium users have access to exclusive parking areas for added convenience."
  },
  {
    question: "Is there a weight limit for the cycles?",
    answer: "Yes, our cycles have a maximum weight capacity of 265 pounds (120 kg) for rider and belongings combined to ensure safety and optimal performance."
  },
  {
    question: "How do I report issues with a cycle?",
    answer: "You can report any maintenance issues directly through the app. Just click on 'Report Issue' in the current ride screen or after completing your ride in the ride history section."
  },
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your monthly subscription at any time through the app. The subscription will remain active until the end of the current billing period."
  },
  {
    question: "Do I need to wear a helmet?",
    answer: "We strongly recommend wearing a helmet while riding. Some campus locations may legally require helmet use. We offer helmet rentals at select stations for a small additional fee."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We've got answers. If you don't see what you're looking for, reach out to our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions? Contact our support team.
          </p>
          <a 
            href="mailto:support@campuscycle.com" 
            className="mt-2 inline-block text-cycle-green-600 hover:text-cycle-green-700 font-medium"
          >
            support@campuscycle.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
