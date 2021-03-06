const PajubaRepository = require('../../repositories/PajubaRepository');

const docs = [
  { title: "abafa o caso", description: "expressão usada quando alguém não está a fim ou não está mais podendo ouvir determinada conversa ou comentário; usa-se ainda quando alguém, por algum motivo, não quer que o assunto seja levado adiante" },
  { title: "abalar", description: "fazer algo bem feito" },
  { title: "abduzida", description: "pessoa cega de paixão ou que mitifica outra" },
  { title: "adé", description: "gay" },
  { title: "ajé", description: "ruim, péssimo" },
  { title: "ajeum", description: "comida" },
  { title: "alibã", description: "policial" },
  { title: "alibete", description: "roubo" },
  { title: "amadê", description: "menino jovem" },
  { title: "amapô", description: "mulher" },
  { title: "amapoa", description: "mulher" },
  { title: "apatá", description: "sapato; calçado" },
  { title: "aqué", description: "dinherio" },
  { title: "aquendar", description: "chamar para prestar atenção" },
  { title: "arrasar", description: "fazer algo bem-feito ou com graça" },
  { title: "atender", description: "envolver-se ou comprometer-se sexualmente com alguém" },
  { title: "babado", description: "contecimento qualquer, podendo tanto ser bom como mau" },
  { title: "bajé", description: "sangue" },
  { title: "bajubá", description: "baseada nas línguas africanas empregadas pelo candomblé, é a linguagem praticada inicialmente pelos travestis e posteriormente estendida a todo universo gay" },
  { title: "balacobaco", description: "festa; agito; evento; reunião" },
  { title: "barbie", description: "homem de corpo inflado, adepto da musculação e das bombas" },
  { title: "barroca", description: "pessoa velha" },
  { title: "betty faria", description: "expressão usada quando alguém é bonito e gostoso e que incita o desejo sexual" },
  { title: "bicharia", description: "reunião de pessoas" },
  { title: "bofe", description: "homem heterossexual" },
  { title: "bomba", description: "anabolizante" },
  { title: "bombado", description: "quele que toma bomba para parecer forte e musculoso; inflado, inchado; próprio das barbies" },
  { title: "bruna", description: "alguém que deixa evidente que está a fim de outra pessoa, pondo tudo a perder" },
  { title: "cacura", description: "pessoa velha" },
  { title: "cafuçu", description: "quem tem um estilo de vida baranga, não importando raça, credo, classe social ou país de origem" },
  { title: "carão", description: "pose; esnobação; presunção" },
  { title: "caricata", description: "drag queen engraçada, que não se importa muito com o modelo e sim com a piada; pessoa cafona, ridícula e grotesca" },
  { title: "caso", description: "alguém com quem se está ficando" },
  { title: "chuca", description: "instrumento utilizado para a limpeza íntima" },
  { title: "cheque", description: "sujar o parceiro" },
  { title: "coió", description: "bater ou xingar alguém" },
  { title: "colocação", description: "ato ou efeito de colocar-se" },
  { title: "colocar-se", description: "ficar alterado por meio de bebida ou droga" },
  { title: "colori", description: "pessoa bem doida e atacada" },
  { title: "cosibotó", description: "pessoa analfabeta; ignorante" },
  { title: "cossibaré", description: "burro" },
  { title: "crocodila", description: "fofoqueira" },
  { title: "dar a elza", description: "roubar" },
  { title: "dar close", description: "dar uma olhada; dar pinta" },
  { title: "dar o truque", description: "enganar; dar o EQ" },
  { title: "dar pinta", description: "fazer trejeitos efeminados propositadamente ou não; mostrar afetação" },
  { title: "desaquendar", description: "deixar de lado; deixar em paz; esquecer" },
  { title: "do bem", description: "pessoa, lugar ou situação bastante agradável, amiga mesmo" },
  { title: "do mal", description: "pessoa, lugar ou situação bastante desagradável, inimiga mesmo" },
  { title: "draga", description: "pessoa que come demais" },
  { title: "dramático", description: "aquele que faz drama por qualquer coisa; aquele que fala exageradamente; pessoa ou situação comovente, patética" },
  { title: "ebó", description: "comida de santo" },
  { title: "edi", description: "ânus" },
  { title: "elza", description: "roubo" },
  { title: "equê", description: "engano; coisa falsa" },
  { title: "erê", description: "criança" },
  { title: "fundamento", description: "comportamento, atitude" },
  { title: "gongado", description: "derrubado; caído" },
  { title: "ilê", description: "casa" },
  { title: "indaca", description: "rosto; face; cara; feição" },
  { title: "jogar o picumã", description: "virar a cabeça mudando os cabelos de lado" },
  { title: "larica", description: "fome" },
  { title: "laruê", description: "fofoca" },
  { title: "levar coió", description: "apanhar; ser xingado por alguém" },
  { title: "levar um banzai", description: "levar um fora de quem se tem relacionamento" },
  { title: "lorogum", description: "briga; peleja; confusão; arruaça" },
  { title: "mala", description: "orgão sexual masculino" },
  { title: "margarete", description: "pessoa mentirosa" },
  { title: "matim", description: "pequenino" },
  { title: "mona", description: "mulher, mas é frequentemente usado para denominar homossexual masculino" },
  { title: "neca", description: "orgão sexual masculino" },
  { title: "nena", description: "fezes" },
  { title: "nikita", description: "pessoa que acredita que é fatal, que seduz todos" },
  { title: "ocâni", description: "orgão sexual masculino" },
  { title: "ocó", description: "homem heterossexual" },
  { title: "odara", description: "bonito, elegante, vivaz" },
  { title: "ofofi", description: "fedor" },
  { title: "oré", description: "garotão" },
  { title: "orum", description: "céu, firmamento" },
  { title: "oté", description: "mal-cheiro no corpo; chulé; ofofi" },
  { title: "otim", description: "bebida alcóolica" },
  { title: "oxanã", description: "cigarro" },
  { title: "picumã", description: "peruca, cabeleira; cabelo" },
  { title: "quati", description: "ladrão" },
  { title: "susie", description: "barbie que não toma bomba; musculosa natural" },
  { title: "tá boa", description: "interjeição de desdém ou descrédito, equivalente a você acha mesmo?" },
  { title: "tá meu bem", description: "interjeição de espanto: olha!; olha só!; nossa!" },
  { title: "tombar", description: "avacalhar, debochar, menosprezar ou ridicularizar algo ou alguém; reduzir os méritos; arrasar, principalmente no modelão ou numa atitude: Tombou!" },
  { title: "uó", description: "algo ou alguém ruim, feio, desagradável, desprezível, errado, equivocado" },
  { title: "xepó", description: "cafona; brega" },
  { title: "zoraide", description: "pessoa metida a clarividente; esotérica" }
]

async function insert(){
  const data = await PajubaRepository.storeMany(docs)
  console.log(data);
}

insert();