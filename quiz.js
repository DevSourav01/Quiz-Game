// const questionObj = {
//   // category: 'Food & drink',
//   // id:'qa-1',
//   correctAnswer: "Three",
//   Options: ["Two", "Three", "Four", "Five"],
//   question: "How many pieces of bun are in Mcdonald's Big mac?",
// };

// const { correctAnswer, Options, question } = questionObj;//destructuring of object
// let score=0;
// // accessing the element
// const quesEl = document.querySelector("#question");
// const optionEl = document.querySelector("#options");
// const scoreEl = document.querySelector("#score");

// quesEl.textContent = question;

// const shuffledOptions=shuffelOptions(Options)

// Options.forEach((opt)=>{
//     const btn=document.createElement('button')
//     btn.textContent=opt
//     optionEl.appendChild(btn)
//     //event handling on the button
//     btn.addEventListener('click',()=>{
//         if(opt===correctAnswer){
//             score++;
//         }
//         else{
//             score=score-0.25;
//         }
//         console.log(score);
//         scoreEl.textContent=`Score:${score}`;
//         quesEl.textContent='Quiz Completed!!';
//         optionEl.textContent='';
//     })
// });

// //shuffling the options

// function shuffelOptions(options){
//     for(let i=options.length-1;i>=0;i--){
//         const j = Math.floor(Math.random()*i+1);
//         [options[i],options[j]]=[options[j],options[i]];
//     }
    
//     return options
// }

// const quesJSON = [
//     {
//       correctAnswer: 'Three ',
//       options: ['Two', 'Three ', 'Four', 'Five'],
//       question:
//         "How many pieces of bun are in a Mcdonald's Big Mac?",
//     },
//     {
//       correctAnswer: 'L. Frank Baum',
//       options: [
//         'Suzanne Collins',
//         'James Fenimore Cooper',
//         'L. Frank Baum',
//         'Donna Leon',
//       ],
//       question:
//         "Which author wrote 'The Wonderful Wizard of Oz'?",
//     },
//     {
//       correctAnswer: 'Atlanta United',
//       options: [
//         'Atlanta United',
//         'Atlanta Impact',
//         'Atlanta Bulls',
//         'Atlanta Stars',
//       ],
//       question:
//         'Which of these is a soccer team based in Atlanta?',
//     },
//     {
//       correctAnswer: 'A Nanny',
//       options: [
//         'A Sow',
//         'A Lioness',
//         'A Hen',
//         'A Nanny',
//       ],
//       question: 'A female goat is known as what?',
//     },
//     {
//       correctAnswer: 'P. L. Travers',
//       options: [
//         'J. R. R. Tolkien',
//         'P. L. Travers',
//         'Lewis Carroll',
//         'Enid Blyton',
//       ],
//       question:
//         "Which author wrote 'Mary Poppins'?",
//     },
//   ];
const quesJSON = [
    // Bollywood Questions
    {
        correctAnswer: "Sholay",
        options: ["Sholay", "Dilwale Dulhania Le Jayenge", "Lagaan", "Dangal"],
        question: "Which Bollywood movie is known as the greatest blockbuster of all time?",
    },
    {
        correctAnswer: "Amitabh Bachchan",
        options: [
            "Shah Rukh Khan",
            "Amitabh Bachchan",
            "Salman Khan",
            "Aamir Khan",
        ],
        question: "Who is known as the 'Shahenshah' of Bollywood?",
    },
    {
        correctAnswer: "Raj Kapoor",
        options: ["Raj Kapoor", "Guru Dutt", "Dev Anand", "Dilip Kumar"],
        question: "Who is the actor behind the iconic movie 'Awara'?",
    },

    // Cricket Questions
    {
        correctAnswer: "Sachin Tendulkar",
        options: [
            "Virat Kohli",
            "Sachin Tendulkar",
            "MS Dhoni",
            "Rohit Sharma",
        ],
        question: "Who is known as the 'God of Cricket'?",
    },
    {
        correctAnswer: "MS Dhoni",
        options: [
            "Sourav Ganguly",
            "MS Dhoni",
            "Kapil Dev",
            "Virat Kohli",
        ],
        question: "Who captained India to its second Cricket World Cup win in 2011?",
    },
    {
        correctAnswer: "Chris Gayle",
        options: [
            "AB de Villiers",
            "Chris Gayle",
            "David Warner",
            "Virender Sehwag",
        ],
        question: "Who is known as the 'Universe Boss' in cricket?",
    },

    // Football Questions
    {
        correctAnswer: "Lionel Messi",
        options: [
            "Cristiano Ronaldo",
            "Lionel Messi",
            "Neymar Jr.",
            "Kylian Mbappé",
        ],
        question: "Who won the FIFA Ballon d'Or seven times?",
    },
    {
        correctAnswer: "Real Madrid",
        options: [
            "Barcelona",
            "Real Madrid",
            "Bayern Munich",
            "Manchester United",
        ],
        question: "Which football club has won the most UEFA Champions League titles?",
    },
    {
        correctAnswer: "Diego Maradona",
        options: [
            "Diego Maradona",
            "Pelé",
            "Zinedine Zidane",
            "Johan Cruyff",
        ],
        question: "Who scored the famous 'Hand of God' goal in the 1986 World Cup?",
    },
    {
        correctAnswer: "FIFA World Cup",
        options: [
            "UEFA Champions League",
            "FIFA World Cup",
            "Copa América",
            "Asian Cup",
        ],
        question: "What is the most-watched football tournament in the world?",
    },
];

     
      let score=0;
      let currentQuestion = 0;
      const totalScore=quesJSON.length
  
      //Accessing all the elements:
      const questionEl = document.querySelector("#question");
      const optionEl = document.querySelector("#options");
      const scoreEl = document.querySelector("#score");
      const nextEl=document.getElementById('next')
      showQuestion()
      nextEl.addEventListener('click', ()=>{
        scoreEl.textContent = `Score: ${score} / ${totalScore}`;
        nextQuestion()

      }) 
      function showQuestion(){
         // Destructuring the object
       const{correctAnswer, options, question} = quesJSON[currentQuestion];
  
        //Setting question text content
      questionEl.textContent = question; 
      
      const shuffledOptions = shuffleOptions(options);
      
          //Populating the Options div with the buttons.
          shuffledOptions.forEach((opt) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            optionEl.appendChild(btn);
    
        // Event handling on the button:
        btn.addEventListener("click", () => {
            if(opt === correctAnswer){
                score++;
            }
            else{
                score=score-0.25;
            }
        console.log(score);
        scoreEl.textContent = `Score: ${score} / ${totalScore}`;
        nextQuestion()
        
        
            });
        });
    }

    function nextQuestion(){
        currentQuestion++;
        optionEl.textContent = '';
        if(currentQuestion>=quesJSON.length){
        questionEl.textContent = 'Quiz Completed!!';
        nextEl.remove()
        
    }
    else{
        showQuestion()
    }
    }
  
  //Shuffling the Options
  function shuffleOptions(options) {
      for (let i = options.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [options[i], options[j]] = [
          options[j],
          options[i],
        ];
      }
      return options;
    }
    
  //   shuffleOptions([1, 2, 3, 4, 5]);






