import { Lesson } from './types';

export const LESSONS: Lesson[] = [
  {
    id: 'le-potenze',
    title: '1. Le Potenze',
    description: 'Basi del calcolo algebrico: potenze con esponenti interi, frazionari e logaritmi.',
    content: {
      theory: `
        <p>Le <strong>potenze</strong> rappresentano una moltiplicazione ripetuta. L'espressione $a^n$ significa moltiplicare 'a' per se stesso 'n' volte.</p>
        <ul class="list-disc list-inside space-y-2 mt-4">
          <li><strong>Esponente intero positivo:</strong> $a^n = a \\times a \\times ... \\times a$ (n volte)</li>
          <li><strong>Esponente nullo:</strong> $a^0 = 1$ (per $a \\neq 0$)</li>
          <li><strong>Esponente negativo:</strong> $a^{-n} = \\frac{1}{a^n}$</li>
          <li><strong>Esponente frazionario:</strong> $a^{m/n} = \\sqrt[n]{a^m}$</li>
        </ul>
        <p class="mt-4">Il <strong>logaritmo</strong> è l'operazione inversa della potenza. Se $a^x = b$, allora $x = \\log_a b$.</p>
        <h4 class="font-semibold mt-4">Proprietà dei Logaritmi:</h4>
        <ul class="list-disc list-inside space-y-2 mt-2">
          <li>$\\log_a(xy) = \\log_a x + \\log_a y$ (Prodotto)</li>
          <li>$\\log_a(x/y) = \\log_a x - \\log_a y$ (Quoziente)</li>
          <li>$\\log_a(x^k) = k \\log_a x$ (Potenza)</li>
        </ul>
      `,
      example: {
        title: "Esempio Svolto",
        steps: [
          'Calcolare $2^{-3}$: Usando la regola dell\'esponente negativo, abbiamo $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$.',
          'Calcolare $\\log_2 8$: Dobbiamo trovare l\'esponente da dare a 2 per ottenere 8. Poiché $2^3 = 8$, allora $\\log_2 8 = 3$.'
        ]
      },
      exercise: {
        problem: "Calcola il valore di $27^{2/3}$",
        solution: "Usando la regola dell'esponente frazionario: $27^{2/3} = (\\sqrt[3]{27})^2$. Poiché $\\sqrt[3]{27} = 3$, il risultato è $3^2 = 9$."
      }
    },
    quiz: [
      {
        question: "Quanto fa $5^0$?",
        options: ["0", "1", "5", "Non definito"],
        correctAnswer: 1
      },
      {
        question: "Qual è il valore di $\\log_{10} 100$?",
        options: ["1", "2", "10", "100"],
        correctAnswer: 1
      },
      {
        question: "A cosa è uguale $x^{-4}$?",
        options: ["$-4x$", "$\\frac{1}{x^4}$", "$x/4$", "$-x^4$"],
        correctAnswer: 1
      }
    ]
  },
  { id: 'successioni-limiti', title: '2. Successioni e Limiti', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'serie-numeriche', title: '3. Serie Numeriche', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'funzioni-reali-1', title: '4. Funzioni di variabile reale – Parte 1', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'funzioni-reali-2', title: '5. Funzioni di variabile reale – Parte 2', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'funzioni-reali-3', title: '6. Funzioni di variabile reale – Parte 3', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'funzioni-reali-4', title: '7. Funzioni di variabile reale – Parte 4', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'calcolo-differenziale-1', title: '8. Calcolo Differenziale – Parte 1', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'calcolo-differenziale-2', title: '9. Calcolo Differenziale – Parte 2', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'convessita-flessi', title: '10. Convessità e Flessi', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'funzioni-continue', title: '11. Funzioni Uniformemente Continue', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'serie-taylor', title: '12. La Serie di Taylor', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'applicazioni-taylor', title: '13. Applicazioni della Formula di Taylor', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  {
    id: 'calcolo-integrale-1',
    title: '14. Il Calcolo Integrale – Parte 1',
    description: 'Introduzione al concetto di integrale indefinito e definito e al Teorema Fondamentale.',
    content: {
      theory: `
        <p>L'<strong>integrale indefinito</strong> di una funzione $f(x)$, denotato con $\\int f(x) dx$, è l'insieme di tutte le sue primitive, cioè tutte le funzioni $F(x)$ la cui derivata è $f(x)$. Si scrive $\\int f(x) dx = F(x) + C$, dove C è una costante arbitraria.</p>
        <p class="mt-4">L'<strong>integrale definito</strong>, $\\int_a^b f(x) dx$, rappresenta l'area netta tra il grafico di $f(x)$, l'asse x e le rette verticali $x=a$ e $x=b$.</p>
        <h4 class="font-semibold mt-4">Teorema Fondamentale del Calcolo Integrale:</h4>
        <p>Se $F(x)$ è una primitiva di $f(x)$, allora l'area è data da:</p>
        <div class="p-3 bg-blue-100 border-l-4 border-blue-500 rounded my-2">
          <p>$\\int_a^b f(x) dx = F(b) - F(a)$</p>
        </div>
      `,
      example: {
        title: "Esempio Svolto",
        steps: [
          'Calcolare $\\int 2x dx$: La funzione la cui derivata è $2x$ è $x^2$. Quindi, $\\int 2x dx = x^2 + C$.',
          'Calcolare $\\int_0^2 2x dx$: Usando il Teorema Fondamentale e la primitiva $F(x) = x^2$, abbiamo $F(2) - F(0) = 2^2 - 0^2 = 4$. L\'area è 4.'
        ]
      },
      exercise: {
        problem: "Calcola l'integrale definito $\\int_1^3 3x^2 dx$.",
        solution: "Una primitiva di $f(x) = 3x^2$ è $F(x) = x^3$. Applicando il Teorema Fondamentale: $F(3) - F(1) = 3^3 - 1^3 = 27 - 1 = 26$."
      }
    },
    quiz: [
      {
        question: "Qual è l'integrale indefinito di $f(x) = 1$?",
        options: ["$C$", "$x+C$", "$x^2+C$", "1"],
        correctAnswer: 1
      },
      {
        question: "Cosa rappresenta geometricamente l'integrale definito?",
        options: ["La pendenza della funzione", "Un punto di massimo", "L'area sotto la curva", "La lunghezza della curva"],
        correctAnswer: 2
      },
      {
        question: "Se $\\int f(x) dx = F(x) + C$, quanto vale $F'(x)$?",
        options: ["$f(x)$", "$f(x) + C$", "0", "Non si può sapere"],
        correctAnswer: 0
      }
    ]
  },
  { id: 'calcolo-integrale-2', title: '15. Il Calcolo Integrale – Parte 2', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'calcolo-integrale-3', title: '16. Il Calcolo Integrale – Parte 3', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'algebra-lineare-1', title: '17. Algebra Lineare – Parte 1', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'algebra-lineare-2', title: '18. Algebra Lineare – Parte 2', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'algebra-lineare-3', title: '19. Algebra Lineare – Parte 3', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
  { id: 'algebra-lineare-4', title: '20. Algebra Lineare – Parte 4', description: 'Contenuto in preparazione...', content: { theory: '', example: {title: '', steps: []}, exercise: {problem: '', solution: ''}}, quiz: [] },
];
