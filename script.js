const flashcards = [
    
    {
      question: "What is cloud computing?",
      answer: "Cloud Computing is the on-demand delivery of IT resources over the internet using pay-as-you-go pricing"
    },
    {
      question: "What are the types of cloud computing?",
      answer: "Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS)"
    },
    {
        question: "What is the definition of Regions?",
        answer: "Regions are geographically distinct location consisting of one or more Availability Zones (usually 3)"
      },
    {
      question: "What is the definition of Availability Zones?",
      answer: "Azs are physical locations made up of one or more datacenters"
    },
    {
      question: "What are the different deployment models?",
      answer: "Cloud computing can be deployed in a variety of models, including public cloud, private cloud, hybrid cloud, and multi-cloud"
    },
    {
        question: "What is availability in cloud computing?",
        answer: "Availability is the measure of the amount of time that a cloud-based resource, such as a server or an application, is available and functioning properly."
      },
    {
        question: "What is scalability in cloud computing?",
        answer: "Scalability is the ability of a system to handle an increasing amount of work or users by adding resources, such as servers or storage, without affecting performance or availability."
      },
      {
        question: "What is elasticity in cloud computing?",
        answer: "Elasticity is the ability of a system to automatically or dynamically scale resources up or down based on demand."
      },
      {
        question: "What is fault tolerance in cloud computing?",
        answer: "Fault tolerance is the ability of a system to continue operating even when one or more components fail."
      },
    {
      question: "What is load balancing in cloud computing?",
      answer: "Load balancing is the process of distributing network traffic across multiple servers to optimize resource utilization, maximize throughput, minimize response time, and avoid overloading any single server."
    }
  ];
  
  const container = document.querySelector('.container');
  const startButton = document.querySelector('#start-button');
  
  function createFlashcard(question, answer) {
    const card = document.createElement('div');
    card.classList.add('flashcard');
    card.innerHTML = `
      <div class="front">${question}</div>
      <div class="back">${answer}</div>
    `;
    container.appendChild(card);
    card.addEventListener('click', () => {
      card.classList.toggle('flip');
    });
  }
  
  startButton.addEventListener('click', () => {
    flashcards.forEach(flashcard => {
      createFlashcard(flashcard.question, flashcard.answer);
    });
  });
  