//semana 1

const titulo1 = "A bruxa"
const sinopse1 = "Nova Inglaterra, década de 1630. O casal William e Katherine leva uma vida cristã com suas cinco crianças em uma comunidade extremamente religiosa, até serem expulsos do local por sua fé diferente daquela permitida pelas autoridades. A família passa a morar num local isolado, à beira do bosque, sofrendo com a escassez de comida. Um dia, o bebê recém-nascido desaparece. Teria sido devorado por um lobo? Sequestrado por uma bruxa? Enquanto buscam respostas à pergunta, cada membro da família enfrenta seus piores medos e seu lado mais condenável."
const duracao1 = 93
const ano1 = 2015
const genero1 = "terror"
const diretor1 = "Robert Eggers"
const remake1 = false
const atores1 = ['Anya Taylor-Joy', 'Ralph Ineson', 'Kate Dickie', 'Harvey Scrimshaw'] //semana 2

const titulo2 = "Interestelar"
const sinopse2 = "Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta."
const duracao2 = 149
const ano2 = 2014
const genero2 = "Ficção científica"
const diretor2 = "Christopher Nolan"
const remake2 = false
const atores2 = ['Matthew McConaughey', 'Anne Hathaway', 'Michael Caine', 'John Lithgow'] //semana 2

const titulo3 = "Bravura Indômita"
const sinopse3 = "O pai de Mattie Ross (Hailee Steinfeld), de apenas 14 anos, foi assassinado a sangue frio por Tom Shaney (Josh Brolin). Em busca de vingança, ela resolve contratar um xerife beberrão, Reuben J. Cogburn (Jeff Bridges), para ir atrás dele. Inicialmente ele recusa a oferta, mas como precisa de dinheiro acaba aceitando. Mattie exige ir junto com Reuben, o que não lhe agrada. Para capturar Shaney eles precisam entrar em território indígena e encontrá-lo antes de La Boeuf (Matt Damon), um policial do Texas que está à sua procura devido ao assassinato de outro homem."
const duracao3 = 110
const ano3 = 2010
const genero3 = "faroeste"
const diretor3 = "Ethan Coen"
const remake3 = true
const atores3 = ['Jeff Bridges', 'Hailee Steinfeld', 'Josh Brolin', 'Matt Damon'] //semana 2

//semana 1
const mediaDuracao = (duracao1 + duracao2 + duracao3) / 3;
console.log(mediaDuracao)

//semana 1
const verificaRemake = remake1 && remake2 && remake3;
console.log(verificaRemake)

//semana 2
console.log(`${titulo1.toUpperCase()}
duração: ${duracao1}
remake: ${remake1}
atores: ${atores1}`)

//semana 3

objeto1 = {
    titulo: "A BRUXA",
    sinopse: "Nova Inglaterra, década de 1630. O casal William e Katherine leva uma vida cristã com suas cinco crianças em uma comunidade extremamente religiosa, até serem expulsos do local por sua fé diferente daquela permitida pelas autoridades. A família passa a morar num local isolado, à beira do bosque, sofrendo com a escassez de comida. Um dia, o bebê recém-nascido desaparece. Teria sido devorado por um lobo? Sequestrado por uma bruxa? Enquanto buscam respostas à pergunta, cada membro da família enfrenta seus piores medos e seu lado mais condenável.",
    duracao: 93,
    ano: 2015,
    genero: "terror",
    diretor: "Robert Eggers",
    remake: false,
    atores: ['Anya Taylor-Joy', 'Ralph Ineson', 'Kate Dickie', 'Harvey Scrimshaw'],
    capa: "./img/A_Bruxa.jpg",
    link: "https://www.rottentomatoes.com/m/the_witch_2016"
}

objeto2 = {
    titulo: "INTERESTELAR",
    sinopse: "Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.",
    duracao: 149,
    ano: 2014,
    genero: "Ficção científica",
    diretor: "Christopher Nolan",
    remake: false,
    atores: ['Matthew McConaughey', 'Anne Hathaway', 'Michael Caine', 'John Lithgow'],
    capa: "./img/Interestelar.jpg",
    link: "https://www.rottentomatoes.com/m/interstellar_2014"
}

objeto3 = {
    titulo: "BRAVURA INDÔMITA",
    sinopse: "O pai de Mattie Ross (Hailee Steinfeld), de apenas 14 anos, foi assassinado a sangue frio por Tom Shaney (Josh Brolin). Em busca de vingança, ela resolve contratar um xerife beberrão, Reuben J. Cogburn (Jeff Bridges), para ir atrás dele. Inicialmente ele recusa a oferta, mas como precisa de dinheiro acaba aceitando. Mattie exige ir junto com Reuben, o que não lhe agrada. Para capturar Shaney eles precisam entrar em território indígena e encontrá-lo antes de La Boeuf (Matt Damon), um policial do Texas que está à sua procura devido ao assassinato de outro homem.",
    duracao: 110,
    ano: 2010,
    genero: "Faroeste",
    diretor: "Ethan Coen",
    remake: true,
    atores: ['Jeff Bridges', 'Hailee Steinfeld', 'Josh Brolin', 'Matt Damon'],
    capa: "./img/Bravura_Indomita.jpg",
    link: "https://www.rottentomatoes.com/m/true_grit_2010"
}

objeto4 = {
    titulo: "SCARFACE",
    sinopse: "Um criminoso cubano exilado (Al Pacino) vai para Miami e em pouco tempo está trabalhando para um chefão das drogas. Sua ascensão na quadrilha é meteórica, mas quando ele começa a sentir interesse na amante do chefe (Michelle Pfeiffer) este manda matá-lo. No entanto ele escapa do atentado, mata o mandante do crime, fica com a amante dele - mas simultaneamente sente desejos incestuosos por sua irmã (Mary Elizabeth Mastrantonio) - e assume o controle da quadrilha. Em pouco tempo ele ganha mais dinheiro do que jamais sonhou. No entanto ele está na mira dos agentes federais, que o pegam quando ele está 'trocando' dinheiro. Mas seu problema pode ser resolvido se ele fizer um 'serviço' em Nova York para um grande traficante e pessoas influentes, que podem manipular o poder para ajudá-lo. Porém, a missão toma um rumo inesperado quando, para concretizá-la, ele precisa matar crianças.",
    duracao: 165,
    ano: 1983,
    genero: "Crime/Drama",
    diretor: "Brian De Palma",
    remake: true,
    atores: ['Al Pacino', 'Michelle Pfeiffer', 'Steven Bauer', 'Robert Loggia'],
    capa: "./img/Scarface.jpg",
    link: "https://www.rottentomatoes.com/m/scarface"
}

objeto5 = {
    titulo: "OS 12 MACACOS",
    sinopse: "No ano de 2035, James Cole (Bruce Willis) aceita a missão de voltar ao passado para tentar decifrar um mistério envolvendo um vírus mortal que atacou grande parte da população mundial. Tomado como louco, no passado, ele tenta provar a sua sanidade para a médica Kathryn Railly (Madeleine Stowe), sua única esperança de mudar o futuro.",
    duracao: 130,
    ano: 1995,
    genero: "Ficção Científica",
    diretor: "Terry Gilliam",
    remake: true,
    atores: ['Bruce Willis', 'Madeleine Stowe', 'Christopher Plummer', 'Brad Pitt'],
    capa: "./img/Os_12_Macacos.jpg",
    link: "https://www.rottentomatoes.com/m/12_monkeys"
}

const arrayObj = []

if (objeto1.remake === true) {
    arrayObj.push(objeto1)
} else {
    alert(`${objeto1.titulo} não foi adicionado, pois não é remake.`)
}

if (objeto2.remake === true) {
    arrayObj.push(objeto2)
} else {
    alert(`${objeto2.titulo} não foi adicionado, pois não é remake.`)
}

if (objeto3.remake === true) {
    arrayObj.push(objeto3)
} else {
    alert(`${objeto3.titulo} não foi adicionado, pois não é remake.`)
}

if (objeto4.remake === true) {
    arrayObj.push(objeto4)
} else {
    alert(`${objeto4.titulo} não foi adicionado, pois não é remake.`)
}

if (objeto5.remake === true) {
    arrayObj.push(objeto5)
} else {
    alert(`${objeto5.titulo} não foi adicionado, pois não é remake.`)
}

console.log(arrayObj)

//semana 5
for (let i = 0; i < arrayObj.length; i++) {
    let string = `titulo: ${arrayObj[i].titulo.toUpperCase()}
duração: ${arrayObj[i].duracao}
remake: ${arrayObj[i].remake}
atores: ${arrayObj[i].atores}`


console.log(string)
}

for (obj of arrayObj) {
    for (prop in obj) {
        let retorn = `${prop}: ${obj[prop]}`
        console.log(retorn)
    }
    console.log("")

}

//semana 6

const objString = (objeto) => {
    return `titulo: ${obj.titulo}
sinopse: ${obj.sinopse}
duração: ${obj.duracao}
ano: ${obj.ano}
gênero: ${obj.genero}
diretor: ${obj.diretor}
remake: ${obj.remake}
atores: ${obj.atores}`
}

console.log(objString())

const retornaObj = (objetos, string) => {
    const myObj = objetos.filter((objeto) => {
        const filtrarFilme = objeto.titulo.toLowerCase().includes(string.toLowerCase());
        return filtrarFilme
        // if (objeto.titulo === string) {
        //     return objeto
        // } else {
        //     return alert("objeto não encontrado!")
        // }
    })
    if(!myObj.length){
        alert("Filme não encontrado!");
    } else {
        return myObj[0]
    }
}

console.log(retornaObj(arrayObj, "BRAVURA INDÔMITA"))
console.log(retornaObj(arrayObj, "SCARFACE"))
console.log(retornaObj(arrayObj, "OS 12 MACACOS"))

//semana 11


    arrayObj.map((filme) => {
        const filmes = document.createElement("section")
        const container = document.getElementById("main-container")

        container.insertAdjacentElement("beforeend", filmes)
        const infos = document.createElement("ul")
        const imgFilme = document.createElement("div")

        imgFilme.setAttribute("id", "img-filmes")
        filmes.setAttribute("id", "section-main")
        infos.setAttribute("id", "main-ul")

        filmes.appendChild(imgFilme)
        filmes.appendChild(infos)

        imgFilme.innerHTML = `<img class="imgFilmes" src="${filme.capa}"/>`
        infos.innerHTML =
            `
            <li id="list-filme"><a href="${filme.link}" target="_blank">${filme.titulo}</a></li>
            <li id="list-filme">Sinopse: ${filme.sinopse}</li>
            <li id="list-filme">Duração: ${filme.duracao}</li>
            <li id="list-filme">Ano: ${filme.ano}</li>
            <li id="list-filme">Gênero: ${filme.genero}</li>
            <li id="list-filme">Diretor: ${filme.diretor}</li>
        `
    })

 
// Semana 12

const searchItem = () => {
    const handleInput = document.getElementById("pesquisaFilme").value.toUpperCase();
    const sectionMain = document.querySelectorAll("#section-main");
    const filme = retornaObj(arrayObj, handleInput);

    if (handleInput) {
        for (let i = 0; i < sectionMain.length; i++) {
            let listFilme = sectionMain[i].querySelector(
                "#main-ul #list-filme"
            );

            if (filme?.titulo) {
                if (
                    listFilme.innerHTML.toUpperCase().indexOf(handleInput) > -1
                ) {
                    sectionMain[i].style.display = "";
                } else {
                    sectionMain[i].style.display = "none";
                }
            }
        }
    } else {
        alert("Você não inseriu nada no campo de busca.");
    }
};
