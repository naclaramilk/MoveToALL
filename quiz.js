
let questions = [
    {question: "O que são esportes adaptados?",
        options: [
            "Esportes praticados apenas por atletas profissionais ou apenas mulheres.",
            "Esportes com regras ou equipamentos adaptados para permitir a participação de pessoas com deficiência",
            "Esportes que não possuem regras",
            "Esportes praticados somente em academias de crossfit."],
        correct: 1},
    {question: "Qual esporte utiliza uma bola com guizos?",
        options: [
            "Basquete em cadeira de rodas",
            "Vôlei sentado",
            "Goalball",
            "Bocha paralímpica"],
        correct: 2},
    { question: "Qual é um benefício dos esportes adaptados?",
        options: [
            "Diminuir a socialização.",
            "Impedir a autonomia nos esportes.",
            "Limitar a participação em eventos grandes.",
            "Melhorar a saúde física e o bem-estar"],
        correct: 3},
    { question: "O que é acessibilidade?",
         options: [
            "Criar condições para que diferentes pessoas possam utilizar espaços e serviços",
            "Permitir acesso somente a atletas profissionais.",
            "Criar espaços exclusivos para competições.",
            "Eliminar as adaptações dos ambientes em esportes olímpicos." ],
        correct: 0},
    {  question: "Qual modalidade é praticada com os jogadores sentados?",
        options: [
            "Natação paralímpica",
            "Vôlei sentado",
            "Atletismo",
            "Goalball"],
        correct: 1},
    {question: "Qual é uma barreira para a prática de esportes adaptados?",
        options: [
            "A existência de profissionais capacitados.",
            "A disponibilidade de equipamentos acessíveis",
            "A falta de infraestrutura adequada.",
            "A criação de programas inclusivos."],
        correct: 2},
    {question: "Qual é o objetivo da inclusão no esporte?",
        options: [
            "Separar os participantes por suas diferenças",
            "Restringir a participação de crianças em atividades físicas",
            "Priorizar somente competições profissionais de artes marciais.",
            "Garantir oportunidades de participação para diferentes pessoas."],
        correct: 3},
    { question: "Como as escolas podem incentivar o esporte inclusivo?",
          options: [
            "Oferecendo atividades adaptadas e acessíveis.",
            "Impedindo adaptações nas aulas de educação física.",
            "Permitindo somente esportes tradicionais.",
            "Evitando a participação de alunos com deficiência visual."],
        correct: 0},
    {  question: "Qual equipamento pode ser utilizado em esportes adaptados?",
        options: [
            "Somente equipamentos convencionais",
            "Cadeiras de rodas esportivas",
            "Apenas aparelhos de musculação",
            "Somente equipamentos eletrônicos"],correct: 1},
    {question: "O que ajuda a construir uma cultura de inclusão?",
        options: [
            "Criar barreiras de participação.",
            "Ignorar as necessidades dos participantes deficientes.",
            "Promover respeito e igualdade de oportunidades.",
            "Restringir o acesso aos espaços esportivos."],
        correct: 2}];




let currentQuestion = 0;
let points = 0;
function showQuestion() {
    document.getElementById("question_number").innerHTML =
        "Pergunta " + (currentQuestion + 1) + " de " + questions.length;
    document.getElementById("question").innerHTML =
        questions[currentQuestion].question;
    document.getElementById("alternativas").innerHTML = "";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("next").style.display = "none";
    for (let i = 0; i < 4; i++) {
        let button = document.createElement("button");
        button.innerHTML = questions[currentQuestion].options[i];
        button.onclick = function() {
            checkAnswer(i);};
        document.getElementById("alternativas").appendChild(button);}}
showQuestion();
function checkAnswer(selected) {
    let correct = questions[currentQuestion].correct;
    if (selected == correct) {
        points++;
        document.getElementById("answer").innerHTML =
            "Resposta correta!";
    } else {
        document.getElementById("answer").innerHTML =
            "Resposta incorreta! A resposta certa é: " +
            questions[currentQuestion].options[correct];}
    let buttons = document.getElementById("alternativas")
        .getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;}
    document.getElementById("next").style.display = "block";}




function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        document.getElementById("question").focus();
    } else {
        showResult();
    }}
function showResult() {
    document.getElementsByClassName("quiz-container")[0].style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("points").innerHTML =
        "Você acertou " + points + " de " + questions.length + " perguntas!";

    if (points >= 8) {
        document.getElementById("points").innerHTML +=
            "<p>Parabéns! Você conhece muito sobre inclusão!</p>";
    } else if (points >= 5) {
        document.getElementById("points").innerHTML +=
            "<p>Bom trabalho! Continue aprendendo sobre acessibilidade!</p>";
    } else {
        document.getElementById("points").innerHTML +=
            "<p>Continue explorando o MoveToALL para aprender mais!</p>";}
                document.getElementById("result-title").focus();}

function restartQuiz() {
    currentQuestion = 0;
    points = 0;
    document.getElementById("result").style.display = "none";
    document.getElementsByClassName("quiz-container")[0].style.display = "block";
    showQuestion();
    document.getElementById("question").focus();
}


