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
  return (
    <section className="mx-auto max-w-[1386px] py-8">
      <div className="flex flex-col gap-4">
        {questions.map((question, index) => (
          <div key={index} className="rounded-2xl bg-white">
            <h2 className="mb-3 text-xl font-bold text-black">
              {question.title}
            </h2>
            <div className="rounded-b-xl border border-white bg-black px-5 py-3">
              <p className="text-sm leading-relaxed text-white">
                {question.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Question;
