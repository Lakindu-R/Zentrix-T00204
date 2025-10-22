import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Question = {
  title: string;
  text: string;
};

const questions: Question[] = [
  {
    title: 'What is Zentrix?',
    text: 'Zentrix is a Pyramid AI-based utility token that connects artificial intelligence with blockchain. It offers smart trading, staking, and data solutions through a secure decentralized system.',
  },
  {
    title: 'How does Pyramid AI work with Zentrix?',
    text: 'Pyramid AI provides a layered intelligence model. Each layer supports data analysis, security, and automation — helping Zentrix deliver faster and smarter blockchain services.',
  },
  {
    title: 'What can I do with Zentrix tokens?',
    text: 'You can trade, stake, and use them to access AI-powered services. Holders also get rewards and can take part in future ecosystem developments.',
  },
  {
    title: 'Is Zentrix secure?',
    text: 'Yes. Zentrix uses strong encryption and decentralized systems to protect user data and transactions, ensuring full transparency and safety..',
  },
  {
    title: 'How can I join the Zentrix community?',
    text: 'You can join through our official website and social channels. Stay connected to get updates on staking, trading, and new AI integrations.',
  },
];

function Question() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq" className="font-md mx-auto max-w-[1450px] px-4 py-8">
      <div className="mt-[52px] mb-[30px] text-center text-white md:mb-[86px]">
        <h1 className="mb-[29px] text-[32px] font-bold md:text-[52px]">
          Frequently Asked Questions
        </h1>
        <p className="font-normal md:text-2xl">
          Find quick answers about Zentrix and how Pyramid AI powers our
          ecosystem.
        </p>
      </div>
      <div className="flex flex-col gap-[40px]">
        {questions.map((question, index) => (
          <div key={index} className="overflow-hidden rounded-2xl bg-white">
            {/* Header - clickable on small/medium screens */}
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left lg:cursor-default"
            >
              <div className="m-4 mb-3 flex items-center justify-between">
                <h2 className="pr-4 text-2xl font-bold text-black md:text-2xl">
                  {question.title}
                </h2>
                {/* Chevron icon - only visible below 1024px */}
                <ChevronDown
                  className={`h-6 w-6 flex-shrink-0 text-black transition-transform duration-300 lg:hidden ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            {/* Content - collapsible on small/medium, always open on large */}
            <div
              className={`transition-all duration-300 ease-in-out lg:!visible lg:!max-h-none lg:!opacity-100 ${
                openIndex === index
                  ? 'visible max-h-96 opacity-100'
                  : 'invisible max-h-0 opacity-0'
              } `}
            >
              <div className="max-w-[1450px] rounded-b-xl border border-white bg-black px-5 py-4">
                <p className="m-0 text-base leading-relaxed font-normal text-white md:text-base">
                  {question.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Question;
