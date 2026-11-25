async function BaixarCLNT(){
    let dados=[],inicio=0,lote=1000;

    while(true){
        const {data,error}=await supaBASE
            .from('CLNT')
            .select('Id,Clnt,Loja')
            .order('Id')
            .range(inicio,inicio+lote-1);

        if(error){console.error(error);return}

        dados.push(...data);
        if(data.length<lote)break;
        inicio+=lote;
    }

    const blob=new Blob([JSON.stringify(dados,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url;
    a.download='CLNT.json';
    a.click();
    URL.revokeObjectURL(url);

    console.log(`${dados.length} clientes exportados`);
}

var BS_CLNT = [
  {
    "Id": 0,
    "Clnt": "-",
    "Loja": "-"
  },
  {
    "Id": 1,
    "Clnt": "Manu trailer",
    "Loja": ""
  },
  {
    "Id": 3,
    "Clnt": "Elizangela Nails",
    "Loja": ""
  },
  {
    "Id": 4,
    "Clnt": "Matheus Bi",
    "Loja": ""
  },
  {
    "Id": 6,
    "Clnt": "Lazer por do Sol",
    "Loja": ""
  },
  {
    "Id": 7,
    "Clnt": "Serginho Operador",
    "Loja": ""
  },
  {
    "Id": 9,
    "Clnt": "Wanessa de Dadinho",
    "Loja": ""
  },
  {
    "Id": 12,
    "Clnt": "Leo Jhonny",
    "Loja": ""
  },
  {
    "Id": 14,
    "Clnt": "Divina Pele",
    "Loja": ""
  },
  {
    "Id": 15,
    "Clnt": "Jario Lanterneiro",
    "Loja": ""
  },
  {
    "Id": 16,
    "Clnt": "Anderson Bug",
    "Loja": "Sertão MiniBugs"
  },
  {
    "Id": 18,
    "Clnt": "Maria Severina",
    "Loja": ""
  },
  {
    "Id": 26,
    "Clnt": "Elizeu Batista",
    "Loja": ""
  },
  {
    "Id": 27,
    "Clnt": "Pisca",
    "Loja": ""
  },
  {
    "Id": 28,
    "Clnt": "Dodó",
    "Loja": ""
  },
  {
    "Id": 29,
    "Clnt": "Magnifico",
    "Loja": ""
  },
  {
    "Id": 30,
    "Clnt": "Gustavo Falsificador",
    "Loja": ""
  },
  {
    "Id": 31,
    "Clnt": "Luciana Banner",
    "Loja": ""
  },
  {
    "Id": 32,
    "Clnt": "Rian Barbeiro",
    "Loja": ""
  },
  {
    "Id": 33,
    "Clnt": "Gatinho",
    "Loja": ""
  },
  {
    "Id": 35,
    "Clnt": "Roberto Tronco",
    "Loja": ""
  },
  {
    "Id": 36,
    "Clnt": "Nascimento",
    "Loja": "URPE"
  },
  {
    "Id": 37,
    "Clnt": "Marta Patricia",
    "Loja": ""
  },
  {
    "Id": 38,
    "Clnt": "CIda",
    "Loja": ""
  },
  {
    "Id": 39,
    "Clnt": "Geizinho",
    "Loja": ""
  },
  {
    "Id": 40,
    "Clnt": "Adonias José da Rocha",
    "Loja": ""
  },
  {
    "Id": 43,
    "Clnt": "Santos Barbearia",
    "Loja": ""
  },
  {
    "Id": 46,
    "Clnt": "Pinote Kombi",
    "Loja": ""
  },
  {
    "Id": 47,
    "Clnt": "José de Afonso",
    "Loja": ""
  },
  {
    "Id": 48,
    "Clnt": "desconhecIdo",
    "Loja": ""
  },
  {
    "Id": 51,
    "Clnt": "Danielle Silva",
    "Loja": ""
  },
  {
    "Id": 52,
    "Clnt": "Tonny",
    "Loja": ""
  },
  {
    "Id": 57,
    "Clnt": "Orlando 244",
    "Loja": ""
  },
  {
    "Id": 59,
    "Clnt": "Cara Yamara",
    "Loja": ""
  },
  {
    "Id": 60,
    "Clnt": "Sara Felicia",
    "Loja": ""
  },
  {
    "Id": 61,
    "Clnt": "Explosão do Lanche",
    "Loja": ""
  },
  {
    "Id": 62,
    "Clnt": "Central dos Parafuso",
    "Loja": ""
  },
  {
    "Id": 63,
    "Clnt": "Jose Alves Igreija",
    "Loja": ""
  },
  {
    "Id": 64,
    "Clnt": "Clinica Riuza",
    "Loja": ""
  },
  {
    "Id": 68,
    "Clnt": "Flávio Monteiro",
    "Loja": ""
  },
  {
    "Id": 71,
    "Clnt": "Gleison Beer",
    "Loja": ""
  },
  {
    "Id": 72,
    "Clnt": "Tzz 244 Oficial",
    "Loja": ""
  },
  {
    "Id": 73,
    "Clnt": "Cristiano Marceneiro",
    "Loja": ""
  },
  {
    "Id": 74,
    "Clnt": "Moço da Kombi do Tiúma",
    "Loja": ""
  },
  {
    "Id": 79,
    "Clnt": "Anderson Camará",
    "Loja": "Central De Serviços Ltda"
  },
  {
    "Id": 80,
    "Clnt": "Bruno da Moto",
    "Loja": ""
  },
  {
    "Id": 81,
    "Clnt": "LéoJhonny",
    "Loja": ""
  },
  {
    "Id": 83,
    "Clnt": "O Garanhão",
    "Loja": ""
  },
  {
    "Id": 84,
    "Clnt": "Valdemiro",
    "Loja": "Aluga-se Espelhado"
  },
  {
    "Id": 86,
    "Clnt": "Ana Banner 22",
    "Loja": ""
  },
  {
    "Id": 87,
    "Clnt": "Deyvison - MKTP",
    "Loja": ""
  },
  {
    "Id": 89,
    "Clnt": "Creuza Santana",
    "Loja": ""
  },
  {
    "Id": 96,
    "Clnt": "Yasmyn Prima",
    "Loja": ""
  },
  {
    "Id": 97,
    "Clnt": "Polar Shups",
    "Loja": ""
  },
  {
    "Id": 99,
    "Clnt": "Mago Adesivo",
    "Loja": ""
  },
  {
    "Id": 100,
    "Clnt": "Jonata Moto",
    "Loja": ""
  },
  {
    "Id": 101,
    "Clnt": "Alex Água e Gás",
    "Loja": ""
  },
  {
    "Id": 103,
    "Clnt": "Alan",
    "Loja": "Paintshop Custom"
  },
  {
    "Id": 107,
    "Clnt": "Clara Viana",
    "Loja": ""
  },
  {
    "Id": 108,
    "Clnt": "Alex da Água",
    "Loja": ""
  },
  {
    "Id": 111,
    "Clnt": "Kauan Miranha",
    "Loja": ""
  },
  {
    "Id": 112,
    "Clnt": "Crislayne",
    "Loja": "Padrão Rosa"
  },
  {
    "Id": 114,
    "Clnt": "DNIT",
    "Loja": ""
  },
  {
    "Id": 115,
    "Clnt": "Ateliê Entre Linhas e Fiapos",
    "Loja": ""
  },
  {
    "Id": 116,
    "Clnt": "Rosa",
    "Loja": ""
  },
  {
    "Id": 117,
    "Clnt": "Luciano Borges",
    "Loja": ""
  },
  {
    "Id": 119,
    "Clnt": "Cla Vidros",
    "Loja": ""
  },
  {
    "Id": 120,
    "Clnt": "Maedson",
    "Loja": "Barbearia do Play"
  },
  {
    "Id": 121,
    "Clnt": "Jessica Vizinha",
    "Loja": ""
  },
  {
    "Id": 122,
    "Clnt": "Nilson",
    "Loja": ""
  },
  {
    "Id": 123,
    "Clnt": "Ismênia",
    "Loja": ""
  },
  {
    "Id": 125,
    "Clnt": "Dj Battata",
    "Loja": "Na Balada bar"
  },
  {
    "Id": 128,
    "Clnt": "Falcão",
    "Loja": "Nova Forma"
  },
  {
    "Id": 129,
    "Clnt": "Maria Jinx",
    "Loja": ""
  },
  {
    "Id": 130,
    "Clnt": "Wilson A.W Bike",
    "Loja": ""
  },
  {
    "Id": 131,
    "Clnt": "DG VIdros",
    "Loja": "D&G VIdraçaria"
  },
  {
    "Id": 133,
    "Clnt": "Joyce Maria",
    "Loja": ""
  },
  {
    "Id": 135,
    "Clnt": "Grimauro Junior",
    "Loja": ""
  },
  {
    "Id": 139,
    "Clnt": "Malaketa",
    "Loja": ""
  },
  {
    "Id": 140,
    "Clnt": "cara das camisa",
    "Loja": ""
  },
  {
    "Id": 141,
    "Clnt": "Artur do Repasse",
    "Loja": ""
  },
  {
    "Id": 142,
    "Clnt": "Renato da Kombi",
    "Loja": ""
  },
  {
    "Id": 143,
    "Clnt": "GJ Atacadão",
    "Loja": ""
  },
  {
    "Id": 144,
    "Clnt": "Kauã Miranha",
    "Loja": ""
  },
  {
    "Id": 145,
    "Clnt": "Cara do Ímã",
    "Loja": ""
  },
  {
    "Id": 146,
    "Clnt": "QT Quase Tudo",
    "Loja": ""
  },
  {
    "Id": 147,
    "Clnt": "Vitinho SOM",
    "Loja": ""
  },
  {
    "Id": 148,
    "Clnt": "dó",
    "Loja": ""
  },
  {
    "Id": 149,
    "Clnt": "JR7",
    "Loja": ""
  },
  {
    "Id": 150,
    "Clnt": "ita",
    "Loja": ""
  },
  {
    "Id": 151,
    "Clnt": "neto",
    "Loja": ""
  },
  {
    "Id": 152,
    "Clnt": "rafael primo joyce",
    "Loja": ""
  },
  {
    "Id": 155,
    "Clnt": "recanto lanchnete",
    "Loja": ""
  },
  {
    "Id": 156,
    "Clnt": "kallini",
    "Loja": ""
  },
  {
    "Id": 157,
    "Clnt": "ninho",
    "Loja": ""
  },
  {
    "Id": 158,
    "Clnt": "Tio e Sobrinho",
    "Loja": ""
  },
  {
    "Id": 159,
    "Clnt": "Randerson",
    "Loja": ""
  },
  {
    "Id": 160,
    "Clnt": "Edgilson",
    "Loja": ""
  },
  {
    "Id": 161,
    "Clnt": "Loja De Roupa",
    "Loja": ""
  },
  {
    "Id": 162,
    "Clnt": "Ed",
    "Loja": ""
  },
  {
    "Id": 163,
    "Clnt": "Z Sem Nome 08",
    "Loja": ""
  },
  {
    "Id": 164,
    "Clnt": "Sem Nome 11",
    "Loja": ""
  },
  {
    "Id": 165,
    "Clnt": "Matheus Matos",
    "Loja": ""
  },
  {
    "Id": 166,
    "Clnt": "Z Sem Nome 06",
    "Loja": ""
  },
  {
    "Id": 167,
    "Clnt": "Z Sem Nome 07",
    "Loja": ""
  },
  {
    "Id": 169,
    "Clnt": "Z Sem Nome 16",
    "Loja": ""
  },
  {
    "Id": 170,
    "Clnt": "Jose < Valdeir",
    "Loja": ""
  },
  {
    "Id": 171,
    "Clnt": "(1) Jefferson",
    "Loja": ""
  },
  {
    "Id": 172,
    "Clnt": "(Pelos Pet) Santos < Rafael",
    "Loja": ""
  },
  {
    "Id": 173,
    "Clnt": "Lyce",
    "Loja": ""
  },
  {
    "Id": 174,
    "Clnt": "Jamerson",
    "Loja": ""
  },
  {
    "Id": 175,
    "Clnt": "CleIdyson",
    "Loja": ""
  },
  {
    "Id": 176,
    "Clnt": "Z Sem Nome 14",
    "Loja": ""
  },
  {
    "Id": 177,
    "Clnt": "Rodrigues < João",
    "Loja": ""
  },
  {
    "Id": 178,
    "Clnt": "Vertinho",
    "Loja": ""
  },
  {
    "Id": 179,
    "Clnt": "Reiis < Tayson",
    "Loja": ""
  },
  {
    "Id": 180,
    "Clnt": "Matheus - MKTP",
    "Loja": ""
  },
  {
    "Id": 181,
    "Clnt": "Mc Henrique",
    "Loja": ""
  },
  {
    "Id": 182,
    "Clnt": "Z Sem Nome 01",
    "Loja": ""
  },
  {
    "Id": 183,
    "Clnt": "Fabiano",
    "Loja": ""
  },
  {
    "Id": 184,
    "Clnt": "Oginey",
    "Loja": ""
  },
  {
    "Id": 185,
    "Clnt": "Wedson",
    "Loja": ""
  },
  {
    "Id": 186,
    "Clnt": "Silva < Wesley",
    "Loja": ""
  },
  {
    "Id": 187,
    "Clnt": "Leonardo",
    "Loja": ""
  },
  {
    "Id": 188,
    "Clnt": "Rodrigues < Lucivan",
    "Loja": ""
  },
  {
    "Id": 189,
    "Clnt": "JR < Antônio",
    "Loja": ""
  },
  {
    "Id": 190,
    "Clnt": "Quilherme",
    "Loja": ""
  },
  {
    "Id": 191,
    "Clnt": "Alves < IngrId",
    "Loja": ""
  },
  {
    "Id": 192,
    "Clnt": "juniin",
    "Loja": ""
  },
  {
    "Id": 193,
    "Clnt": "Wellington",
    "Loja": ""
  },
  {
    "Id": 194,
    "Clnt": "Z Sem Nome 24",
    "Loja": ""
  },
  {
    "Id": 195,
    "Clnt": "Josiel",
    "Loja": ""
  },
  {
    "Id": 196,
    "Clnt": "Thiaguinho da Silva",
    "Loja": ""
  },
  {
    "Id": 197,
    "Clnt": "Max",
    "Loja": ""
  },
  {
    "Id": 198,
    "Clnt": "Z Sem Nome 19",
    "Loja": ""
  },
  {
    "Id": 199,
    "Clnt": "Oliveira < Vinicius",
    "Loja": ""
  },
  {
    "Id": 200,
    "Clnt": "Marivaldo",
    "Loja": ""
  },
  {
    "Id": 201,
    "Clnt": "Wanderson",
    "Loja": ""
  },
  {
    "Id": 202,
    "Clnt": "Edilson Galvão (Bross 160)",
    "Loja": ""
  },
  {
    "Id": 203,
    "Clnt": "Junior",
    "Loja": ""
  },
  {
    "Id": 204,
    "Clnt": "Williton",
    "Loja": ""
  },
  {
    "Id": 205,
    "Clnt": "Italo",
    "Loja": ""
  },
  {
    "Id": 206,
    "Clnt": "Alexandre",
    "Loja": ""
  },
  {
    "Id": 207,
    "Clnt": "Junior Belmiro - MTPK",
    "Loja": ""
  },
  {
    "Id": 208,
    "Clnt": "Fernandinho",
    "Loja": ""
  },
  {
    "Id": 209,
    "Clnt": "NeIde",
    "Loja": ""
  },
  {
    "Id": 210,
    "Clnt": "Brown < Peu",
    "Loja": ""
  },
  {
    "Id": 211,
    "Clnt": "Carlos",
    "Loja": ""
  },
  {
    "Id": 212,
    "Clnt": "Henrique < Thiago",
    "Loja": ""
  },
  {
    "Id": 213,
    "Clnt": "Alan da Silva",
    "Loja": ""
  },
  {
    "Id": 214,
    "Clnt": "Barbosa < Givanilson",
    "Loja": ""
  },
  {
    "Id": 215,
    "Clnt": "Z Sem Nome 13",
    "Loja": ""
  },
  {
    "Id": 216,
    "Clnt": "Leandro Melo - MTPK",
    "Loja": ""
  },
  {
    "Id": 217,
    "Clnt": "Fabio",
    "Loja": ""
  },
  {
    "Id": 218,
    "Clnt": "José < Anderson",
    "Loja": ""
  },
  {
    "Id": 219,
    "Clnt": "Z Sem Nome 05",
    "Loja": ""
  },
  {
    "Id": 220,
    "Clnt": "Gabriel Moto",
    "Loja": ""
  },
  {
    "Id": 221,
    "Clnt": "João",
    "Loja": ""
  },
  {
    "Id": 222,
    "Clnt": "Z Sem Nome 15",
    "Loja": ""
  },
  {
    "Id": 223,
    "Clnt": "Paulo Rios",
    "Loja": ""
  },
  {
    "Id": 224,
    "Clnt": "Araújo < Klebson",
    "Loja": ""
  },
  {
    "Id": 225,
    "Clnt": "Lukas",
    "Loja": ""
  },
  {
    "Id": 227,
    "Clnt": "Miguel",
    "Loja": ""
  },
  {
    "Id": 229,
    "Clnt": "Fellype",
    "Loja": ""
  },
  {
    "Id": 230,
    "Clnt": "Posto < Yuro",
    "Loja": ""
  },
  {
    "Id": 231,
    "Clnt": "Leo",
    "Loja": ""
  },
  {
    "Id": 232,
    "Clnt": "Z Sem Nome 09",
    "Loja": ""
  },
  {
    "Id": 233,
    "Clnt": "Cleiton",
    "Loja": ""
  },
  {
    "Id": 234,
    "Clnt": "(Skt) Aninha",
    "Loja": ""
  },
  {
    "Id": 235,
    "Clnt": "Lenoir",
    "Loja": ""
  },
  {
    "Id": 236,
    "Clnt": "Izaque",
    "Loja": ""
  },
  {
    "Id": 237,
    "Clnt": "Z Sem Nome 18",
    "Loja": ""
  },
  {
    "Id": 238,
    "Clnt": "Z Sem Nome 21",
    "Loja": ""
  },
  {
    "Id": 239,
    "Clnt": "Antônio < Erik",
    "Loja": ""
  },
  {
    "Id": 240,
    "Clnt": "Adriano",
    "Loja": ""
  },
  {
    "Id": 241,
    "Clnt": "Romário",
    "Loja": ""
  },
  {
    "Id": 242,
    "Clnt": "Bruninho",
    "Loja": ""
  },
  {
    "Id": 243,
    "Clnt": "Kaio",
    "Loja": ""
  },
  {
    "Id": 244,
    "Clnt": "Z Sem Nome 02",
    "Loja": ""
  },
  {
    "Id": 245,
    "Clnt": "Z Sem Nome 17",
    "Loja": ""
  },
  {
    "Id": 246,
    "Clnt": "Marcos",
    "Loja": ""
  },
  {
    "Id": 247,
    "Clnt": "Z Sem Nome 12",
    "Loja": ""
  },
  {
    "Id": 248,
    "Clnt": "Armando",
    "Loja": ""
  },
  {
    "Id": 249,
    "Clnt": "Cristiano",
    "Loja": ""
  },
  {
    "Id": 250,
    "Clnt": "Reginaldo Gino",
    "Loja": ""
  },
  {
    "Id": 251,
    "Clnt": "Z Sem Nome 03",
    "Loja": ""
  },
  {
    "Id": 252,
    "Clnt": "Luciano",
    "Loja": ""
  },
  {
    "Id": 253,
    "Clnt": "Edilson Moto",
    "Loja": ""
  },
  {
    "Id": 254,
    "Clnt": "(3) Jefferson",
    "Loja": ""
  },
  {
    "Id": 255,
    "Clnt": "Júnior",
    "Loja": ""
  },
  {
    "Id": 256,
    "Clnt": "Rubens",
    "Loja": ""
  },
  {
    "Id": 257,
    "Clnt": "Anderson Flávio - MKTP",
    "Loja": ""
  },
  {
    "Id": 258,
    "Clnt": "Weverton",
    "Loja": ""
  },
  {
    "Id": 259,
    "Clnt": "Plinio",
    "Loja": ""
  },
  {
    "Id": 260,
    "Clnt": "Jho",
    "Loja": ""
  },
  {
    "Id": 261,
    "Clnt": "Lucas",
    "Loja": ""
  },
  {
    "Id": 262,
    "Clnt": "Miguel < Evandro",
    "Loja": ""
  },
  {
    "Id": 263,
    "Clnt": "Cavalcante < Gilberto",
    "Loja": ""
  },
  {
    "Id": 264,
    "Clnt": "Z Sem Nome 04",
    "Loja": ""
  },
  {
    "Id": 265,
    "Clnt": "Dry",
    "Loja": ""
  },
  {
    "Id": 266,
    "Clnt": "(2) Jefferson",
    "Loja": ""
  },
  {
    "Id": 267,
    "Clnt": "Renne Victor",
    "Loja": ""
  },
  {
    "Id": 268,
    "Clnt": "Rinaldo",
    "Loja": ""
  },
  {
    "Id": 269,
    "Clnt": "Quiroga",
    "Loja": ""
  },
  {
    "Id": 270,
    "Clnt": "Daminhão Do Revolve",
    "Loja": ""
  },
  {
    "Id": 271,
    "Clnt": "Bianca Loja",
    "Loja": "Bianca Store Moda Feminina"
  },
  {
    "Id": 272,
    "Clnt": "G E Telas",
    "Loja": ""
  },
  {
    "Id": 273,
    "Clnt": "Loja De Eletronico",
    "Loja": ""
  },
  {
    "Id": 274,
    "Clnt": "Entrega RG📋",
    "Loja": ""
  },
  {
    "Id": 275,
    "Clnt": "Casa Leo",
    "Loja": ""
  },
  {
    "Id": 276,
    "Clnt": "Peixoto Eletronica",
    "Loja": ""
  },
  {
    "Id": 277,
    "Clnt": "Faz Cabos",
    "Loja": ""
  },
  {
    "Id": 278,
    "Clnt": "Ar Condicionado",
    "Loja": ""
  },
  {
    "Id": 279,
    "Clnt": "Kleber",
    "Loja": ""
  },
  {
    "Id": 280,
    "Clnt": "N Graph",
    "Loja": "Gráfica & Sinalização"
  },
  {
    "Id": 281,
    "Clnt": "Recife Tronic (Arduino)",
    "Loja": ""
  },
  {
    "Id": 282,
    "Clnt": "Mario Tiuma",
    "Loja": ""
  },
  {
    "Id": 284,
    "Clnt": "Cliente Novo (7)",
    "Loja": ""
  },
  {
    "Id": 285,
    "Clnt": "Barbearia Ladeira",
    "Loja": ""
  },
  {
    "Id": 286,
    "Clnt": "TK Prenssadão",
    "Loja": ""
  },
  {
    "Id": 287,
    "Clnt": "Gilberto Monteiro",
    "Loja": ""
  },
  {
    "Id": 288,
    "Clnt": "Mônica Cristina",
    "Loja": "Revendedora Eudora"
  },
  {
    "Id": 289,
    "Clnt": "A Do Salão",
    "Loja": ""
  },
  {
    "Id": 290,
    "Clnt": "Adelson",
    "Loja": ""
  },
  {
    "Id": 292,
    "Clnt": "Deto Zap",
    "Loja": ""
  },
  {
    "Id": 293,
    "Clnt": "Nono 3",
    "Loja": "Bezerra"
  },
  {
    "Id": 294,
    "Clnt": "PopCorn",
    "Loja": ""
  },
  {
    "Id": 295,
    "Clnt": "Goreth",
    "Loja": ""
  },
  {
    "Id": 296,
    "Clnt": "Moça Do Banner",
    "Loja": ""
  },
  {
    "Id": 297,
    "Clnt": "Marçal",
    "Loja": ""
  },
  {
    "Id": 298,
    "Clnt": "Campus e Silva",
    "Loja": ""
  },
  {
    "Id": 299,
    "Clnt": "Vaqueiro 2",
    "Loja": ""
  },
  {
    "Id": 300,
    "Clnt": "Walter De Binho",
    "Loja": ""
  },
  {
    "Id": 301,
    "Clnt": "Mulher Do Galeto",
    "Loja": ""
  },
  {
    "Id": 302,
    "Clnt": "Williams Guadalajara",
    "Loja": ""
  },
  {
    "Id": 303,
    "Clnt": "Pablo",
    "Loja": ""
  },
  {
    "Id": 304,
    "Clnt": "Vei_001 Banner",
    "Loja": ""
  },
  {
    "Id": 305,
    "Clnt": "Barbeiro Sem Nome",
    "Loja": ""
  },
  {
    "Id": 306,
    "Clnt": "Vanessa 🍻",
    "Loja": ""
  },
  {
    "Id": 309,
    "Clnt": "Mulher de Jairo Casa das Polpas",
    "Loja": "Vende Bolças"
  },
  {
    "Id": 310,
    "Clnt": "Lilian do Lanche",
    "Loja": ""
  },
  {
    "Id": 311,
    "Clnt": "Rosy Santos",
    "Loja": "Cabeleireira"
  },
  {
    "Id": 312,
    "Clnt": "Brena Castro As Madames",
    "Loja": "Nail Designer"
  },
  {
    "Id": 313,
    "Clnt": "Rafael do Rota",
    "Loja": ""
  },
  {
    "Id": 314,
    "Clnt": "Tatiane Gráfica (Print Jet)",
    "Loja": "Print Jet"
  },
  {
    "Id": 315,
    "Clnt": "Thiago Silva (Print Jet)",
    "Loja": "Print Jet"
  },
  {
    "Id": 316,
    "Clnt": "Cliente - O Barracão",
    "Loja": ""
  },
  {
    "Id": 317,
    "Clnt": "Adesivo Recorte",
    "Loja": ""
  },
  {
    "Id": 318,
    "Clnt": "Cara do Drone",
    "Loja": "Dailson Verissimo"
  },
  {
    "Id": 319,
    "Clnt": "Possiveis",
    "Loja": ""
  },
  {
    "Id": 320,
    "Clnt": "G Minha Maquina 👌🏻",
    "Loja": ""
  },
  {
    "Id": 321,
    "Clnt": "Quitanda Penedo",
    "Loja": ""
  },
  {
    "Id": 322,
    "Clnt": "Jardson Rota 53",
    "Loja": ""
  },
  {
    "Id": 323,
    "Clnt": "Laryssa (Mãe Deda)",
    "Loja": ""
  },
  {
    "Id": 324,
    "Clnt": "MaxBurger",
    "Loja": "Max Burger"
  },
  {
    "Id": 325,
    "Clnt": "Cara Do Gás",
    "Loja": ""
  },
  {
    "Id": 327,
    "Clnt": "Vini do Grau",
    "Loja": ""
  },
  {
    "Id": 328,
    "Clnt": "Wagner HORTFRUTE",
    "Loja": ""
  },
  {
    "Id": 329,
    "Clnt": "Vei_003 Banner",
    "Loja": ""
  },
  {
    "Id": 330,
    "Clnt": "Gustavo Banner Jesus",
    "Loja": ""
  },
  {
    "Id": 331,
    "Clnt": "Milton",
    "Loja": "Milton Barber"
  },
  {
    "Id": 332,
    "Clnt": "Boy Q Queria Tatoo",
    "Loja": ""
  },
  {
    "Id": 333,
    "Clnt": "Beatriz Alves",
    "Loja": ""
  },
  {
    "Id": 334,
    "Clnt": "Paulo Max",
    "Loja": ""
  },
  {
    "Id": 335,
    "Clnt": "Emerson Treinador",
    "Loja": ""
  },
  {
    "Id": 336,
    "Clnt": "Jaqueline",
    "Loja": ""
  },
  {
    "Id": 337,
    "Clnt": "Romero Alexandre (Karate)",
    "Loja": ""
  },
  {
    "Id": 338,
    "Clnt": "Oswaldo",
    "Loja": ""
  },
  {
    "Id": 339,
    "Clnt": "Paulo Cell",
    "Loja": ""
  },
  {
    "Id": 340,
    "Clnt": "Flavio Igreija",
    "Loja": ""
  },
  {
    "Id": 341,
    "Clnt": "Junior Camisa",
    "Loja": ""
  },
  {
    "Id": 343,
    "Clnt": "Elizeu Da Coperativa",
    "Loja": ""
  },
  {
    "Id": 344,
    "Clnt": "Marta Adesivo",
    "Loja": ""
  },
  {
    "Id": 345,
    "Clnt": "Mulher Da Ótica",
    "Loja": ""
  },
  {
    "Id": 347,
    "Clnt": "O Cara Do Futebol",
    "Loja": ""
  },
  {
    "Id": 348,
    "Clnt": "Almir Boy",
    "Loja": ""
  },
  {
    "Id": 349,
    "Clnt": "Fabtica De Tinta",
    "Loja": ""
  },
  {
    "Id": 350,
    "Clnt": "Depodito Altas Horas",
    "Loja": ""
  },
  {
    "Id": 351,
    "Clnt": "Claudinho DÓ",
    "Loja": ""
  },
  {
    "Id": 352,
    "Clnt": "Cara Do GrId",
    "Loja": ""
  },
  {
    "Id": 353,
    "Clnt": "G",
    "Loja": ""
  },
  {
    "Id": 354,
    "Clnt": "Raizinha",
    "Loja": ""
  },
  {
    "Id": 355,
    "Clnt": "Marcio Easricoin",
    "Loja": ""
  },
  {
    "Id": 356,
    "Clnt": "Irmão da igreja vizinho",
    "Loja": ""
  },
  {
    "Id": 357,
    "Clnt": "Boy Da Equipe 22 Adesivo",
    "Loja": ""
  },
  {
    "Id": 358,
    "Clnt": "Costureira Ster",
    "Loja": ""
  },
  {
    "Id": 359,
    "Clnt": "G 2",
    "Loja": ""
  },
  {
    "Id": 360,
    "Clnt": "Fachada",
    "Loja": ""
  },
  {
    "Id": 361,
    "Clnt": "Moça Do Toldo",
    "Loja": ""
  },
  {
    "Id": 362,
    "Clnt": "O Da Quadrinha",
    "Loja": ""
  },
  {
    "Id": 363,
    "Clnt": "Dr.Aristoteles",
    "Loja": ""
  },
  {
    "Id": 364,
    "Clnt": "Cliente NewEra 4",
    "Loja": ""
  },
  {
    "Id": 365,
    "Clnt": "MA Camisaria",
    "Loja": ""
  },
  {
    "Id": 366,
    "Clnt": "Kaylane Filha De Dayse",
    "Loja": ""
  },
  {
    "Id": 367,
    "Clnt": "Nego Original",
    "Loja": ""
  },
  {
    "Id": 368,
    "Clnt": "Hedson Barbearia",
    "Loja": ""
  },
  {
    "Id": 369,
    "Clnt": "Jc Frios 1",
    "Loja": ""
  },
  {
    "Id": 370,
    "Clnt": "Jão 🔥",
    "Loja": ""
  },
  {
    "Id": 371,
    "Clnt": "Flavio Max",
    "Loja": "Comedoria Universitárias"
  },
  {
    "Id": 372,
    "Clnt": "Monster",
    "Loja": ""
  },
  {
    "Id": 373,
    "Clnt": "Pivet Rota 53",
    "Loja": ""
  },
  {
    "Id": 374,
    "Clnt": "QuerImmãCara Q",
    "Loja": ""
  },
  {
    "Id": 375,
    "Clnt": "Pedro Quiosk",
    "Loja": ""
  },
  {
    "Id": 376,
    "Clnt": "Eferson",
    "Loja": ""
  },
  {
    "Id": 377,
    "Clnt": "Cara Da Net",
    "Loja": ""
  },
  {
    "Id": 378,
    "Clnt": "Miniie",
    "Loja": ""
  },
  {
    "Id": 379,
    "Clnt": "I love Burguer",
    "Loja": ""
  },
  {
    "Id": 381,
    "Clnt": "Stefany Da Costureira",
    "Loja": ""
  },
  {
    "Id": 382,
    "Clnt": "Comercial do PVC",
    "Loja": ""
  },
  {
    "Id": 383,
    "Clnt": "Gilberto de Paudalho",
    "Loja": "Prefeitura Placa de Obra"
  },
  {
    "Id": 384,
    "Clnt": "Cadastrur",
    "Loja": ""
  },
  {
    "Id": 385,
    "Clnt": "Rancho JR",
    "Loja": ""
  },
  {
    "Id": 387,
    "Clnt": "Cara do Furgão",
    "Loja": ""
  },
  {
    "Id": 388,
    "Clnt": "Marcio Do Onibus",
    "Loja": ""
  },
  {
    "Id": 389,
    "Clnt": "Moto Taxi",
    "Loja": ""
  },
  {
    "Id": 390,
    "Clnt": "Naldo Coxinha",
    "Loja": ""
  },
  {
    "Id": 391,
    "Clnt": "Espaço M",
    "Loja": ""
  },
  {
    "Id": 392,
    "Clnt": "Macio",
    "Loja": ""
  },
  {
    "Id": 393,
    "Clnt": "Meu Advogado",
    "Loja": ""
  },
  {
    "Id": 394,
    "Clnt": "Quer papel de Parede",
    "Loja": ""
  },
  {
    "Id": 395,
    "Clnt": "Matheus Café",
    "Loja": ""
  },
  {
    "Id": 396,
    "Clnt": "Jaja",
    "Loja": ""
  },
  {
    "Id": 397,
    "Clnt": "Elaine Banner",
    "Loja": ""
  },
  {
    "Id": 398,
    "Clnt": "Internet",
    "Loja": ""
  },
  {
    "Id": 399,
    "Clnt": "Gabriel",
    "Loja": ""
  },
  {
    "Id": 400,
    "Clnt": "Cara Q Quer Umas Camisas",
    "Loja": ""
  },
  {
    "Id": 401,
    "Clnt": "Salta Caminho",
    "Loja": ""
  },
  {
    "Id": 402,
    "Clnt": "mago barbearia",
    "Loja": ""
  },
  {
    "Id": 403,
    "Clnt": "Stcms",
    "Loja": ""
  },
  {
    "Id": 404,
    "Clnt": "Carlos Adesivo Da Placha",
    "Loja": ""
  },
  {
    "Id": 405,
    "Clnt": "Padaria Da Beira Rio",
    "Loja": ""
  },
  {
    "Id": 406,
    "Clnt": "Léo Massa 🔥",
    "Loja": ""
  },
  {
    "Id": 407,
    "Clnt": "Jefesson Adesivo",
    "Loja": ""
  },
  {
    "Id": 408,
    "Clnt": "Moda Masculina",
    "Loja": ""
  },
  {
    "Id": 409,
    "Clnt": "Negão",
    "Loja": ""
  },
  {
    "Id": 410,
    "Clnt": "Jade",
    "Loja": ""
  },
  {
    "Id": 411,
    "Clnt": "Recarga De Gás",
    "Loja": ""
  },
  {
    "Id": 412,
    "Clnt": "Recarga Gas Wp",
    "Loja": ""
  },
  {
    "Id": 413,
    "Clnt": "Geovanna Diniz",
    "Loja": ""
  },
  {
    "Id": 414,
    "Clnt": "Doglas da Moto (Toldo da Mulher dele)",
    "Loja": ""
  },
  {
    "Id": 415,
    "Clnt": "Joujou Lana",
    "Loja": ""
  },
  {
    "Id": 416,
    "Clnt": "Amiga De Magnifico",
    "Loja": ""
  },
  {
    "Id": 417,
    "Clnt": "Silvania Mundo Feliz",
    "Loja": ""
  },
  {
    "Id": 418,
    "Clnt": "Jaja Da Galinha",
    "Loja": ""
  },
  {
    "Id": 419,
    "Clnt": "Galego Da Galinha",
    "Loja": ""
  },
  {
    "Id": 420,
    "Clnt": "Jota Motos",
    "Loja": ""
  },
  {
    "Id": 422,
    "Clnt": "Rodrigo Da Arena",
    "Loja": ""
  },
  {
    "Id": 423,
    "Clnt": "Gaby",
    "Loja": ""
  },
  {
    "Id": 424,
    "Clnt": "Cliente Do Açaí",
    "Loja": ""
  },
  {
    "Id": 425,
    "Clnt": "Cara Da Nova Barbearia",
    "Loja": ""
  },
  {
    "Id": 426,
    "Clnt": "Sergio Da KOMBI",
    "Loja": ""
  },
  {
    "Id": 427,
    "Clnt": "Fi Pequeno",
    "Loja": ""
  },
  {
    "Id": 428,
    "Clnt": "Cliente Novo (9)",
    "Loja": ""
  },
  {
    "Id": 429,
    "Clnt": "Arte & Ferro -",
    "Loja": "Arte & Ferro"
  },
  {
    "Id": 430,
    "Clnt": "Galeto...",
    "Loja": ""
  },
  {
    "Id": 431,
    "Clnt": "Radiante Buffet",
    "Loja": ""
  },
  {
    "Id": 432,
    "Clnt": "Lanchonete Kombi",
    "Loja": ""
  },
  {
    "Id": 433,
    "Clnt": "Arthr ADM",
    "Loja": ""
  },
  {
    "Id": 434,
    "Clnt": "Bela Presentes CURADO",
    "Loja": "Bela Presentes"
  },
  {
    "Id": 435,
    "Clnt": "Casa Das Aguas -",
    "Loja": "Casa Das Aguas"
  },
  {
    "Id": 436,
    "Clnt": "Tempero Nordestino",
    "Loja": ""
  },
  {
    "Id": 437,
    "Clnt": "grauu2",
    "Loja": ""
  },
  {
    "Id": 438,
    "Clnt": "O Cara Das Joias",
    "Loja": ""
  },
  {
    "Id": 439,
    "Clnt": "Pilel",
    "Loja": ""
  },
  {
    "Id": 440,
    "Clnt": "Grau Orlando",
    "Loja": ""
  },
  {
    "Id": 441,
    "Clnt": "Formato 4",
    "Loja": ""
  },
  {
    "Id": 442,
    "Clnt": "Kombi Parque Tíuma",
    "Loja": ""
  },
  {
    "Id": 443,
    "Clnt": "impresão 3D",
    "Loja": ""
  },
  {
    "Id": 444,
    "Clnt": "Das Cadeiras",
    "Loja": ""
  },
  {
    "Id": 445,
    "Clnt": "Agua",
    "Loja": ""
  },
  {
    "Id": 446,
    "Clnt": "Chico",
    "Loja": ""
  },
  {
    "Id": 447,
    "Clnt": "Mylena/Emanuelle",
    "Loja": ""
  },
  {
    "Id": 448,
    "Clnt": "Lucas Queiroz",
    "Loja": "Barbeiro"
  },
  {
    "Id": 449,
    "Clnt": "do Anicães PetShop",
    "Loja": "Anicães PetShop"
  },
  {
    "Id": 450,
    "Clnt": "TopCell",
    "Loja": ""
  },
  {
    "Id": 451,
    "Clnt": "Marias Frds",
    "Loja": ""
  },
  {
    "Id": 452,
    "Clnt": "Betel lanches",
    "Loja": ""
  },
  {
    "Id": 453,
    "Clnt": "Vitor Informatica",
    "Loja": ""
  },
  {
    "Id": 454,
    "Clnt": "do Banner",
    "Loja": ""
  },
  {
    "Id": 455,
    "Clnt": "Elionai Nono",
    "Loja": "Eb Nails"
  },
  {
    "Id": 456,
    "Clnt": "Joelma",
    "Loja": ""
  },
  {
    "Id": 457,
    "Clnt": "Cinthya Rolex 🔥",
    "Loja": ""
  },
  {
    "Id": 458,
    "Clnt": "LIdiamaria",
    "Loja": ""
  },
  {
    "Id": 459,
    "Clnt": "Net Mania",
    "Loja": ""
  },
  {
    "Id": 461,
    "Clnt": "Cara Ônibus",
    "Loja": ""
  },
  {
    "Id": 462,
    "Clnt": "Vandise (Farmacia)",
    "Loja": ""
  },
  {
    "Id": 463,
    "Clnt": "Renato Do Imma",
    "Loja": ""
  },
  {
    "Id": 464,
    "Clnt": "outro Pisca",
    "Loja": ""
  },
  {
    "Id": 465,
    "Clnt": "Facha",
    "Loja": ""
  },
  {
    "Id": 466,
    "Clnt": "Daniel Facilita",
    "Loja": ""
  },
  {
    "Id": 467,
    "Clnt": "Cara Do Crachá",
    "Loja": ""
  },
  {
    "Id": 468,
    "Clnt": "Aldo",
    "Loja": "Mercadinho Nova Esperaça"
  },
  {
    "Id": 469,
    "Clnt": "Cara Da Padaria",
    "Loja": ""
  },
  {
    "Id": 470,
    "Clnt": "Patricia Minie",
    "Loja": ""
  },
  {
    "Id": 471,
    "Clnt": "Mulé De Nego Original",
    "Loja": ""
  },
  {
    "Id": 472,
    "Clnt": "Professor Luciano Borges",
    "Loja": ""
  },
  {
    "Id": 473,
    "Clnt": "GM Informatica PC",
    "Loja": ""
  },
  {
    "Id": 474,
    "Clnt": "Pedrinho Do GRAU",
    "Loja": ""
  },
  {
    "Id": 475,
    "Clnt": "Lana",
    "Loja": ""
  },
  {
    "Id": 476,
    "Clnt": "Cleyton Variedades",
    "Loja": ""
  },
  {
    "Id": 477,
    "Clnt": "Paula Bronze",
    "Loja": "Clube do Bronze"
  },
  {
    "Id": 478,
    "Clnt": "Especial Extintores",
    "Loja": ""
  },
  {
    "Id": 480,
    "Clnt": "Edilson Skyllus",
    "Loja": "Skyllus Sorvete"
  },
  {
    "Id": 481,
    "Clnt": "Liloka",
    "Loja": "Liloca Lazer e Recreação"
  },
  {
    "Id": 482,
    "Clnt": "Tubular Climatizações",
    "Loja": ""
  },
  {
    "Id": 483,
    "Clnt": "Jandson Show",
    "Loja": ""
  },
  {
    "Id": 484,
    "Clnt": "Davi BoddyBuilder",
    "Loja": ""
  },
  {
    "Id": 485,
    "Clnt": "Não Sei",
    "Loja": ""
  },
  {
    "Id": 486,
    "Clnt": "Mercadinho",
    "Loja": ""
  },
  {
    "Id": 487,
    "Clnt": "Betinho",
    "Loja": ""
  },
  {
    "Id": 488,
    "Clnt": "Galeto 1",
    "Loja": ""
  },
  {
    "Id": 489,
    "Clnt": "Jair EB",
    "Loja": ""
  },
  {
    "Id": 490,
    "Clnt": "Felipe",
    "Loja": "Papa Capim"
  },
  {
    "Id": 492,
    "Clnt": "Cara do Paredão",
    "Loja": ""
  },
  {
    "Id": 493,
    "Clnt": "Massa Delícia",
    "Loja": ""
  },
  {
    "Id": 495,
    "Clnt": "Geane",
    "Loja": ""
  },
  {
    "Id": 496,
    "Clnt": "Cliente Novo (4)",
    "Loja": ""
  },
  {
    "Id": 497,
    "Clnt": "Dentista",
    "Loja": ""
  },
  {
    "Id": 498,
    "Clnt": "Nino Parafuso",
    "Loja": ""
  },
  {
    "Id": 499,
    "Clnt": "Deto Lajes 1",
    "Loja": ""
  },
  {
    "Id": 500,
    "Clnt": "Adesivo Pequeno",
    "Loja": ""
  },
  {
    "Id": 501,
    "Clnt": "Nahum",
    "Loja": ""
  },
  {
    "Id": 502,
    "Clnt": "Camila Play2",
    "Loja": ""
  },
  {
    "Id": 503,
    "Clnt": "New LIFE acai",
    "Loja": ""
  },
  {
    "Id": 504,
    "Clnt": "MM VARIEDADES",
    "Loja": ""
  },
  {
    "Id": 505,
    "Clnt": "Peu O Barbeiro",
    "Loja": "Peu Barbeiro"
  },
  {
    "Id": 506,
    "Clnt": "Walber",
    "Loja": ""
  },
  {
    "Id": 507,
    "Clnt": "RM Concorrente",
    "Loja": ""
  },
  {
    "Id": 508,
    "Clnt": "Ferro e Aço",
    "Loja": ""
  },
  {
    "Id": 509,
    "Clnt": "Cleyton Cara Do Adesivo Parde",
    "Loja": ""
  },
  {
    "Id": 510,
    "Clnt": "Kaka Depósito",
    "Loja": "Depósito do Kaka"
  },
  {
    "Id": 511,
    "Clnt": "Zé Delivery",
    "Loja": ""
  },
  {
    "Id": 512,
    "Clnt": "Parafuso do Curado",
    "Loja": ""
  },
  {
    "Id": 513,
    "Clnt": "Roda De Saron",
    "Loja": ""
  },
  {
    "Id": 514,
    "Clnt": "Bauneario GG",
    "Loja": "Bauneario GG"
  },
  {
    "Id": 515,
    "Clnt": "CleIde Banner",
    "Loja": ""
  },
  {
    "Id": 516,
    "Clnt": "Icaro Santos",
    "Loja": ""
  },
  {
    "Id": 517,
    "Clnt": "Amigo Do vizinho wilsom",
    "Loja": ""
  },
  {
    "Id": 518,
    "Clnt": "Jardson",
    "Loja": ""
  },
  {
    "Id": 519,
    "Clnt": "Janio Impressora",
    "Loja": ""
  },
  {
    "Id": 520,
    "Clnt": "Recife Mecatron (Arduino)",
    "Loja": ""
  },
  {
    "Id": 521,
    "Clnt": "Flor Do Sol",
    "Loja": ""
  },
  {
    "Id": 522,
    "Clnt": "W&C",
    "Loja": ""
  },
  {
    "Id": 523,
    "Clnt": "Coloral",
    "Loja": ""
  },
  {
    "Id": 524,
    "Clnt": "Sr Correria",
    "Loja": ""
  },
  {
    "Id": 525,
    "Clnt": "Cara Da Banda",
    "Loja": ""
  },
  {
    "Id": 526,
    "Clnt": "Loja De Negócios",
    "Loja": ""
  },
  {
    "Id": 527,
    "Clnt": "Jailson da Van",
    "Loja": ""
  },
  {
    "Id": 528,
    "Clnt": "Cliente Novo (2)",
    "Loja": ""
  },
  {
    "Id": 529,
    "Clnt": "Catamarã",
    "Loja": ""
  },
  {
    "Id": 530,
    "Clnt": "Personalizados Festas",
    "Loja": ""
  },
  {
    "Id": 531,
    "Clnt": "Emerson Da Barraca",
    "Loja": ""
  },
  {
    "Id": 532,
    "Clnt": "Correia Privativo",
    "Loja": ""
  },
  {
    "Id": 533,
    "Clnt": "Esquina Do Sabor",
    "Loja": ""
  },
  {
    "Id": 534,
    "Clnt": "Farois",
    "Loja": ""
  },
  {
    "Id": 535,
    "Clnt": "Xibok K",
    "Loja": ""
  },
  {
    "Id": 536,
    "Clnt": "Marquinhos ATG",
    "Loja": ""
  },
  {
    "Id": 537,
    "Clnt": "Mule De Melo",
    "Loja": ""
  },
  {
    "Id": 538,
    "Clnt": "Dirigir",
    "Loja": ""
  },
  {
    "Id": 539,
    "Clnt": "Mário Turismo",
    "Loja": ""
  },
  {
    "Id": 540,
    "Clnt": "Alexandre Pedreiro",
    "Loja": "Autonomo"
  },
  {
    "Id": 542,
    "Clnt": "Edvaldo (Olodum)",
    "Loja": ""
  },
  {
    "Id": 543,
    "Clnt": "Grupo Asa branca",
    "Loja": ""
  },
  {
    "Id": 544,
    "Clnt": "Adesivo Sofia",
    "Loja": ""
  },
  {
    "Id": 545,
    "Clnt": "Marcelo Max",
    "Loja": ""
  },
  {
    "Id": 546,
    "Clnt": "Bernadete",
    "Loja": ""
  },
  {
    "Id": 547,
    "Clnt": "Jefersson Produtor",
    "Loja": ""
  },
  {
    "Id": 548,
    "Clnt": "Cafe Marcelo",
    "Loja": ""
  },
  {
    "Id": 549,
    "Clnt": "Bianca Redufite",
    "Loja": ""
  },
  {
    "Id": 550,
    "Clnt": "Imma",
    "Loja": ""
  },
  {
    "Id": 551,
    "Clnt": "Emanoele Burguer",
    "Loja": ""
  },
  {
    "Id": 552,
    "Clnt": "Olimpo",
    "Loja": ""
  },
  {
    "Id": 553,
    "Clnt": "Aluguel De Evento",
    "Loja": ""
  },
  {
    "Id": 554,
    "Clnt": "Joelma Rê Studio",
    "Loja": ""
  },
  {
    "Id": 555,
    "Clnt": "CIda Cabelos",
    "Loja": ""
  },
  {
    "Id": 556,
    "Clnt": "Lilian (Mina q Quer Dançar)",
    "Loja": ""
  },
  {
    "Id": 557,
    "Clnt": "Pastor Antonio",
    "Loja": ""
  },
  {
    "Id": 558,
    "Clnt": "Cleyton do Gás",
    "Loja": ""
  },
  {
    "Id": 559,
    "Clnt": "Daniel",
    "Loja": ""
  },
  {
    "Id": 561,
    "Clnt": "Oscar",
    "Loja": ""
  },
  {
    "Id": 562,
    "Clnt": "Cara das Camisas de time freefire",
    "Loja": ""
  },
  {
    "Id": 563,
    "Clnt": "Americo Junior",
    "Loja": ""
  },
  {
    "Id": 564,
    "Clnt": "Vitoria Filha de Lilian",
    "Loja": ""
  },
  {
    "Id": 565,
    "Clnt": "Júlio César (Clube do Bronze)",
    "Loja": "Clube do Bronze"
  },
  {
    "Id": 566,
    "Clnt": "Dani da sala",
    "Loja": ""
  },
  {
    "Id": 567,
    "Clnt": "Stcm",
    "Loja": ""
  },
  {
    "Id": 568,
    "Clnt": "Caveirinja JATO",
    "Loja": ""
  },
  {
    "Id": 569,
    "Clnt": "Faz Cartão",
    "Loja": ""
  },
  {
    "Id": 570,
    "Clnt": "Dwell",
    "Loja": ""
  },
  {
    "Id": 571,
    "Clnt": "Severinoo",
    "Loja": ""
  },
  {
    "Id": 572,
    "Clnt": "R.ELETRONICA",
    "Loja": ""
  },
  {
    "Id": 573,
    "Clnt": "Ísy Varejo",
    "Loja": "Ísy Varejo e Atacado"
  },
  {
    "Id": 574,
    "Clnt": "Marcos Planta",
    "Loja": ""
  },
  {
    "Id": 575,
    "Clnt": "Sergio Etiqueta",
    "Loja": ""
  },
  {
    "Id": 576,
    "Clnt": "Gago",
    "Loja": ""
  },
  {
    "Id": 577,
    "Clnt": "Roberto Do Ima",
    "Loja": ""
  },
  {
    "Id": 578,
    "Clnt": "Flavio Placa Solar",
    "Loja": ""
  },
  {
    "Id": 579,
    "Clnt": "Piso de Madeira",
    "Loja": ""
  },
  {
    "Id": 580,
    "Clnt": "Adesivo da Roda De Fogo",
    "Loja": ""
  },
  {
    "Id": 581,
    "Clnt": "Cliente NewEra 2",
    "Loja": ""
  },
  {
    "Id": 582,
    "Clnt": "Michellin",
    "Loja": ""
  },
  {
    "Id": 583,
    "Clnt": "Karlinho Revenda",
    "Loja": ""
  },
  {
    "Id": 584,
    "Clnt": "Tropical",
    "Loja": ""
  },
  {
    "Id": 585,
    "Clnt": "Cara Do Curado",
    "Loja": ""
  },
  {
    "Id": 586,
    "Clnt": "Dema",
    "Loja": ""
  },
  {
    "Id": 587,
    "Clnt": "Vinícius Leal",
    "Loja": ""
  },
  {
    "Id": 588,
    "Clnt": "Recarga Gás",
    "Loja": ""
  },
  {
    "Id": 589,
    "Clnt": "Casas Leo Palma",
    "Loja": ""
  },
  {
    "Id": 590,
    "Clnt": "Casas Leo",
    "Loja": ""
  },
  {
    "Id": 591,
    "Clnt": "Sebrae",
    "Loja": ""
  },
  {
    "Id": 592,
    "Clnt": "Vanessa",
    "Loja": ""
  },
  {
    "Id": 593,
    "Clnt": "Captão América",
    "Loja": "autonomo"
  },
  {
    "Id": 594,
    "Clnt": "Olga Do Metro",
    "Loja": ""
  },
  {
    "Id": 595,
    "Clnt": "Erivan Barbeiro",
    "Loja": ""
  },
  {
    "Id": 596,
    "Clnt": "Anderson Finanças",
    "Loja": "Anderson Silva"
  },
  {
    "Id": 597,
    "Clnt": "Planeta Cor",
    "Loja": ""
  },
  {
    "Id": 598,
    "Clnt": "GessoVizinho",
    "Loja": ""
  },
  {
    "Id": 599,
    "Clnt": "Cara da Argamassa",
    "Loja": ""
  },
  {
    "Id": 600,
    "Clnt": "Dona Deize",
    "Loja": ""
  },
  {
    "Id": 601,
    "Clnt": "Vende-se",
    "Loja": ""
  },
  {
    "Id": 602,
    "Clnt": "Vitoria Variedades",
    "Loja": ""
  },
  {
    "Id": 603,
    "Clnt": "kelly Sheron",
    "Loja": ""
  },
  {
    "Id": 604,
    "Clnt": "Aluguel De Mesas e Cadeiras",
    "Loja": ""
  },
  {
    "Id": 605,
    "Clnt": "Cara Q Faz Beat De Brega",
    "Loja": ""
  },
  {
    "Id": 606,
    "Clnt": "DaCombiAlex",
    "Loja": ""
  },
  {
    "Id": 607,
    "Clnt": "Landrio Box",
    "Loja": ""
  },
  {
    "Id": 608,
    "Clnt": "Pinta Mais",
    "Loja": ""
  },
  {
    "Id": 609,
    "Clnt": "ConstrolCenter Gesso",
    "Loja": ""
  },
  {
    "Id": 610,
    "Clnt": "Silva Melo Novo BR",
    "Loja": ""
  },
  {
    "Id": 611,
    "Clnt": "Junior Mexicale",
    "Loja": "Mexicale"
  },
  {
    "Id": 612,
    "Clnt": "Amiga Do Cara Do VIdro",
    "Loja": ""
  },
  {
    "Id": 613,
    "Clnt": "PePeu",
    "Loja": "Empresário"
  },
  {
    "Id": 614,
    "Clnt": "Leal",
    "Loja": ""
  },
  {
    "Id": 615,
    "Clnt": "Higor GR",
    "Loja": ""
  },
  {
    "Id": 616,
    "Clnt": "Cara q Morgou Com O Adesivo Da Parede",
    "Loja": ""
  },
  {
    "Id": 617,
    "Clnt": "Clientte",
    "Loja": ""
  },
  {
    "Id": 618,
    "Clnt": "Jc FRIOS",
    "Loja": ""
  },
  {
    "Id": 619,
    "Clnt": "Siqueira 1",
    "Loja": ""
  },
  {
    "Id": 620,
    "Clnt": "Dr. Wellington Advogado",
    "Loja": "Dr. Wellington Silva"
  },
  {
    "Id": 621,
    "Clnt": "deDalestTia",
    "Loja": ""
  },
  {
    "Id": 622,
    "Clnt": "Josué Melo",
    "Loja": ""
  },
  {
    "Id": 623,
    "Clnt": "Lucas Roldofo Barbearia",
    "Loja": ""
  },
  {
    "Id": 624,
    "Clnt": "Pedro NET",
    "Loja": ""
  },
  {
    "Id": 625,
    "Clnt": "Rota 53",
    "Loja": ""
  },
  {
    "Id": 626,
    "Clnt": "Papa Do Rosário",
    "Loja": ""
  },
  {
    "Id": 627,
    "Clnt": "Orlando Ponto Da Xerox",
    "Loja": ""
  },
  {
    "Id": 628,
    "Clnt": "Feijão Irmão De Léo",
    "Loja": ""
  },
  {
    "Id": 629,
    "Clnt": "Felipe o Fluxo",
    "Loja": ""
  },
  {
    "Id": 630,
    "Clnt": "placa acrilico",
    "Loja": ""
  },
  {
    "Id": 631,
    "Clnt": "André 410",
    "Loja": ""
  },
  {
    "Id": 632,
    "Clnt": "Filho de Jailson do Toldo",
    "Loja": ""
  },
  {
    "Id": 633,
    "Clnt": "Cliente Novo (6)",
    "Loja": ""
  },
  {
    "Id": 634,
    "Clnt": "Cliente Novo (10)",
    "Loja": ""
  },
  {
    "Id": 635,
    "Clnt": "Cynthia Cell",
    "Loja": ""
  },
  {
    "Id": 636,
    "Clnt": "Cliente De PAINHO",
    "Loja": ""
  },
  {
    "Id": 637,
    "Clnt": "Junior Paintball",
    "Loja": ""
  },
  {
    "Id": 638,
    "Clnt": "G Socite",
    "Loja": ""
  },
  {
    "Id": 639,
    "Clnt": "Belisco Café",
    "Loja": ""
  },
  {
    "Id": 640,
    "Clnt": "Cara da Pizzaria",
    "Loja": ""
  },
  {
    "Id": 641,
    "Clnt": "Gráfica de Olinda (pra usufruir)",
    "Loja": ""
  },
  {
    "Id": 642,
    "Clnt": "Sérgio Cooperfretur",
    "Loja": ""
  },
  {
    "Id": 643,
    "Clnt": "Marcelo Moura",
    "Loja": ""
  },
  {
    "Id": 644,
    "Clnt": "Leto da farmacia",
    "Loja": ""
  },
  {
    "Id": 645,
    "Clnt": "Geraldo Azevendo (Onibus)",
    "Loja": ""
  },
  {
    "Id": 646,
    "Clnt": "Felipe Helicóptero",
    "Loja": ""
  },
  {
    "Id": 647,
    "Clnt": "Zangar Gráfica",
    "Loja": ""
  },
  {
    "Id": 648,
    "Clnt": "Cara Dos Colchões",
    "Loja": ""
  },
  {
    "Id": 650,
    "Clnt": "Deputado Leonardo",
    "Loja": ""
  },
  {
    "Id": 651,
    "Clnt": "Fernanda Guerra 📊",
    "Loja": ""
  },
  {
    "Id": 652,
    "Clnt": "Cara Do Cardapio",
    "Loja": ""
  },
  {
    "Id": 653,
    "Clnt": "Fabiana Adesivo",
    "Loja": ""
  },
  {
    "Id": 654,
    "Clnt": "Mulher de Kel",
    "Loja": ""
  },
  {
    "Id": 655,
    "Clnt": "Criação de Peixe",
    "Loja": ""
  },
  {
    "Id": 656,
    "Clnt": "Elinaldo",
    "Loja": "Maq. Padaria"
  },
  {
    "Id": 657,
    "Clnt": "Cleyton Tatoo",
    "Loja": ""
  },
  {
    "Id": 658,
    "Clnt": "Nega Da Festa De Agosto",
    "Loja": ""
  },
  {
    "Id": 659,
    "Clnt": "Cara Da Geladeira",
    "Loja": ""
  },
  {
    "Id": 660,
    "Clnt": "Marcos Gráfica (pra Usufruir) Lot S. Fransisco",
    "Loja": ""
  },
  {
    "Id": 661,
    "Clnt": "Nono BB Gás",
    "Loja": "BB Gás"
  },
  {
    "Id": 662,
    "Clnt": "Romilson Placa",
    "Loja": ""
  },
  {
    "Id": 663,
    "Clnt": "Diego Moto Peças",
    "Loja": ""
  },
  {
    "Id": 664,
    "Clnt": "Leob Onibus 401",
    "Loja": ""
  },
  {
    "Id": 665,
    "Clnt": "The Best",
    "Loja": ""
  },
  {
    "Id": 666,
    "Clnt": "Hobby E Hobby (Arduino)",
    "Loja": ""
  },
  {
    "Id": 667,
    "Clnt": "Thiago Felipe",
    "Loja": ""
  },
  {
    "Id": 668,
    "Clnt": "Mulher Do Depósito",
    "Loja": ""
  },
  {
    "Id": 669,
    "Clnt": "Lucilo da Barragem do Goitá",
    "Loja": ""
  },
  {
    "Id": 670,
    "Clnt": "Jedson Macaiba",
    "Loja": ""
  },
  {
    "Id": 671,
    "Clnt": "By Lysandra",
    "Loja": ""
  },
  {
    "Id": 672,
    "Clnt": "Everaldo Banner Jesus",
    "Loja": ""
  },
  {
    "Id": 673,
    "Clnt": "J.R Frios",
    "Loja": ""
  },
  {
    "Id": 674,
    "Clnt": "Maabi",
    "Loja": ""
  },
  {
    "Id": 675,
    "Clnt": "A Policial",
    "Loja": ""
  },
  {
    "Id": 676,
    "Clnt": "Junior Paintball 2",
    "Loja": ""
  },
  {
    "Id": 677,
    "Clnt": "Pedro Amazonas",
    "Loja": ""
  },
  {
    "Id": 678,
    "Clnt": "Aluguel de Cadeiras",
    "Loja": ""
  },
  {
    "Id": 679,
    "Clnt": "Josué melo 2",
    "Loja": ""
  },
  {
    "Id": 680,
    "Clnt": "Vania",
    "Loja": ""
  },
  {
    "Id": 681,
    "Clnt": "Aluguel Da Frente",
    "Loja": ""
  },
  {
    "Id": 682,
    "Clnt": "Mekhos (Arduino)",
    "Loja": ""
  },
  {
    "Id": 683,
    "Clnt": "Rafael Camisas",
    "Loja": ""
  },
  {
    "Id": 684,
    "Clnt": "Bloco Alcatéia",
    "Loja": ""
  },
  {
    "Id": 685,
    "Clnt": "Paula Andrade Pratas",
    "Loja": ""
  },
  {
    "Id": 687,
    "Clnt": "braullio santos",
    "Loja": ""
  },
  {
    "Id": 688,
    "Clnt": "Padrão Esportivo",
    "Loja": ""
  },
  {
    "Id": 690,
    "Clnt": "Samu Pipa",
    "Loja": ""
  },
  {
    "Id": 691,
    "Clnt": "Casa Das Polpas -",
    "Loja": "Casa Das Polpas"
  },
  {
    "Id": 692,
    "Clnt": "Washington",
    "Loja": "Coperfretur"
  },
  {
    "Id": 693,
    "Clnt": "Gaucho",
    "Loja": ""
  },
  {
    "Id": 694,
    "Clnt": "Galo",
    "Loja": ""
  },
  {
    "Id": 695,
    "Clnt": "Panificadora GPANIZ",
    "Loja": ""
  },
  {
    "Id": 696,
    "Clnt": "Dudu Tech",
    "Loja": ""
  },
  {
    "Id": 697,
    "Clnt": "Tapioca Berg",
    "Loja": ""
  },
  {
    "Id": 698,
    "Clnt": "Claudinho",
    "Loja": ""
  },
  {
    "Id": 699,
    "Clnt": "Eduardo Osama 👳‍♂️",
    "Loja": ""
  },
  {
    "Id": 700,
    "Clnt": "Jeferson Adesivo Aldeia",
    "Loja": ""
  },
  {
    "Id": 701,
    "Clnt": "Xuxinha Locutora",
    "Loja": ""
  },
  {
    "Id": 702,
    "Clnt": "Menino Da Casa De Ração",
    "Loja": ""
  },
  {
    "Id": 703,
    "Clnt": "Vizinho Outra Grafica",
    "Loja": ""
  },
  {
    "Id": 704,
    "Clnt": "Genilton (Frigorífico)",
    "Loja": ""
  },
  {
    "Id": 705,
    "Clnt": "Cliente NewEra 3",
    "Loja": ""
  },
  {
    "Id": 706,
    "Clnt": "Loga das Bandeiras",
    "Loja": ""
  },
  {
    "Id": 707,
    "Clnt": "Quebra Sol Eu Acho",
    "Loja": ""
  },
  {
    "Id": 708,
    "Clnt": "Cara do Todo Dia",
    "Loja": ""
  },
  {
    "Id": 709,
    "Clnt": "Vava",
    "Loja": ""
  },
  {
    "Id": 710,
    "Clnt": "impressão 3D 2",
    "Loja": ""
  },
  {
    "Id": 711,
    "Clnt": "Barbara Hair",
    "Loja": ""
  },
  {
    "Id": 712,
    "Clnt": "Multinível Henrique",
    "Loja": ""
  },
  {
    "Id": 713,
    "Clnt": "Walker",
    "Loja": ""
  },
  {
    "Id": 714,
    "Clnt": "Genilson Igreja",
    "Loja": ""
  },
  {
    "Id": 715,
    "Clnt": "Leandro The Best",
    "Loja": ""
  },
  {
    "Id": 716,
    "Clnt": "Chiquinho",
    "Loja": ""
  },
  {
    "Id": 717,
    "Clnt": "Dani Falcão",
    "Loja": ""
  },
  {
    "Id": 718,
    "Clnt": "Robson Abade",
    "Loja": ""
  },
  {
    "Id": 719,
    "Clnt": "Layla Do Galeto",
    "Loja": ""
  },
  {
    "Id": 720,
    "Clnt": "Rivaldo da NET",
    "Loja": ""
  },
  {
    "Id": 721,
    "Clnt": "Central Parafusos",
    "Loja": "Central Parafusos"
  },
  {
    "Id": 723,
    "Clnt": "cara Das Cintas",
    "Loja": ""
  },
  {
    "Id": 724,
    "Clnt": "Cara do Camarão",
    "Loja": ""
  },
  {
    "Id": 725,
    "Clnt": "Auto Concerto",
    "Loja": ""
  },
  {
    "Id": 727,
    "Clnt": "Barney (Ônibus)",
    "Loja": ""
  },
  {
    "Id": 728,
    "Clnt": "Esposa (Carne e Carneiro)",
    "Loja": ""
  },
  {
    "Id": 729,
    "Clnt": "Equipe 100 Juizo",
    "Loja": ""
  },
  {
    "Id": 730,
    "Clnt": "Tifany",
    "Loja": ""
  },
  {
    "Id": 731,
    "Clnt": "Motoqueiro Bosco",
    "Loja": ""
  },
  {
    "Id": 732,
    "Clnt": "Talões",
    "Loja": ""
  },
  {
    "Id": 733,
    "Clnt": "WM SilkSing",
    "Loja": ""
  },
  {
    "Id": 734,
    "Clnt": "eCarneirosCarnes",
    "Loja": "Ailton"
  },
  {
    "Id": 735,
    "Clnt": "Técnico",
    "Loja": ""
  },
  {
    "Id": 736,
    "Clnt": "Cara Da Argamasssa",
    "Loja": ""
  },
  {
    "Id": 737,
    "Clnt": "Leo Brasa",
    "Loja": ""
  },
  {
    "Id": 738,
    "Clnt": "Vei_002Banner",
    "Loja": ""
  },
  {
    "Id": 739,
    "Clnt": "Vereador Germesson",
    "Loja": ""
  },
  {
    "Id": 740,
    "Clnt": "Eliane Moda",
    "Loja": ""
  },
  {
    "Id": 741,
    "Clnt": "mulher Açaí do Pátio",
    "Loja": "Açaí do Pátio"
  },
  {
    "Id": 742,
    "Clnt": "Surubin ELIAR",
    "Loja": ""
  },
  {
    "Id": 743,
    "Clnt": "Abraão Pefurado",
    "Loja": ""
  },
  {
    "Id": 744,
    "Clnt": "Esquadrip Serralharia E VIdraçaria",
    "Loja": ""
  },
  {
    "Id": 745,
    "Clnt": "Artur ADM",
    "Loja": ""
  },
  {
    "Id": 746,
    "Clnt": "Pisca itamaracá",
    "Loja": "Kombi de Itamaracá"
  },
  {
    "Id": 748,
    "Clnt": "Levi Gás",
    "Loja": ""
  },
  {
    "Id": 749,
    "Clnt": "Nizette",
    "Loja": ""
  },
  {
    "Id": 750,
    "Clnt": "Madeira",
    "Loja": ""
  },
  {
    "Id": 751,
    "Clnt": "Cara do Ar-condicionado",
    "Loja": ""
  },
  {
    "Id": 752,
    "Clnt": "Nono",
    "Loja": ""
  },
  {
    "Id": 753,
    "Clnt": "Mario Vaqueiro",
    "Loja": ""
  },
  {
    "Id": 754,
    "Clnt": "Hallana",
    "Loja": ""
  },
  {
    "Id": 756,
    "Clnt": "Adesivo Da Placa",
    "Loja": ""
  },
  {
    "Id": 757,
    "Clnt": "Ana Helena",
    "Loja": ""
  },
  {
    "Id": 758,
    "Clnt": "Cliente Novo (1)",
    "Loja": ""
  },
  {
    "Id": 759,
    "Clnt": "A Nega Do Deposito De Água",
    "Loja": ""
  },
  {
    "Id": 760,
    "Clnt": "Pai Da Influencer Mirin",
    "Loja": ""
  },
  {
    "Id": 761,
    "Clnt": "Mina Da Paraiba",
    "Loja": ""
  },
  {
    "Id": 762,
    "Clnt": "Luan Consta",
    "Loja": ""
  },
  {
    "Id": 763,
    "Clnt": "Mercadinho Sabino",
    "Loja": ""
  },
  {
    "Id": 764,
    "Clnt": "Zz",
    "Loja": ""
  },
  {
    "Id": 765,
    "Clnt": "Cientes A 01",
    "Loja": ""
  },
  {
    "Id": 766,
    "Clnt": "Cientes A 02",
    "Loja": ""
  },
  {
    "Id": 767,
    "Clnt": "Cientes A 03",
    "Loja": ""
  },
  {
    "Id": 769,
    "Clnt": "Cientes A 05",
    "Loja": ""
  },
  {
    "Id": 770,
    "Clnt": "Cientes A 06",
    "Loja": ""
  },
  {
    "Id": 771,
    "Clnt": "Cientes A 07",
    "Loja": ""
  },
  {
    "Id": 773,
    "Clnt": "Cientes A 09",
    "Loja": ""
  },
  {
    "Id": 774,
    "Clnt": "Cientes A 10",
    "Loja": ""
  },
  {
    "Id": 775,
    "Clnt": "Cientes A 11",
    "Loja": ""
  },
  {
    "Id": 776,
    "Clnt": "Cientes A 12",
    "Loja": ""
  },
  {
    "Id": 777,
    "Clnt": "Cientes A 13",
    "Loja": ""
  },
  {
    "Id": 778,
    "Clnt": "Cientes A 14",
    "Loja": ""
  },
  {
    "Id": 780,
    "Clnt": "Cientes A 16",
    "Loja": ""
  },
  {
    "Id": 781,
    "Clnt": "Cientes A 17",
    "Loja": ""
  },
  {
    "Id": 782,
    "Clnt": "Cientes A 18",
    "Loja": ""
  },
  {
    "Id": 783,
    "Clnt": "Cientes A 19",
    "Loja": ""
  },
  {
    "Id": 784,
    "Clnt": "Cientes A 20",
    "Loja": ""
  },
  {
    "Id": 785,
    "Clnt": "Cientes A 21",
    "Loja": ""
  },
  {
    "Id": 786,
    "Clnt": "Cientes A 22",
    "Loja": ""
  },
  {
    "Id": 787,
    "Clnt": "Cientes A 23",
    "Loja": ""
  },
  {
    "Id": 788,
    "Clnt": "Cientes A 24",
    "Loja": ""
  },
  {
    "Id": 789,
    "Clnt": "Cientes A 25",
    "Loja": ""
  },
  {
    "Id": 790,
    "Clnt": "Cientes A 26",
    "Loja": ""
  },
  {
    "Id": 791,
    "Clnt": "Cientes A 27",
    "Loja": ""
  },
  {
    "Id": 792,
    "Clnt": "Cientes A 28",
    "Loja": ""
  },
  {
    "Id": 793,
    "Clnt": "Cientes A 29",
    "Loja": ""
  },
  {
    "Id": 794,
    "Clnt": "Cientes A 30",
    "Loja": ""
  },
  {
    "Id": 795,
    "Clnt": "Cientes A 31",
    "Loja": ""
  },
  {
    "Id": 797,
    "Clnt": "Cientes A 33",
    "Loja": ""
  },
  {
    "Id": 798,
    "Clnt": "Cientes A 34",
    "Loja": ""
  },
  {
    "Id": 799,
    "Clnt": "Cientes A 35",
    "Loja": ""
  },
  {
    "Id": 800,
    "Clnt": "Cientes A 36",
    "Loja": ""
  },
  {
    "Id": 801,
    "Clnt": "Cientes A 37",
    "Loja": ""
  },
  {
    "Id": 802,
    "Clnt": "Cientes A 38",
    "Loja": ""
  },
  {
    "Id": 803,
    "Clnt": "Cientes A 39",
    "Loja": ""
  },
  {
    "Id": 804,
    "Clnt": "Cientes A 40",
    "Loja": ""
  },
  {
    "Id": 805,
    "Clnt": "Cientes A 41",
    "Loja": ""
  },
  {
    "Id": 806,
    "Clnt": "Cientes A 42",
    "Loja": ""
  },
  {
    "Id": 807,
    "Clnt": "Cientes A 43",
    "Loja": ""
  },
  {
    "Id": 808,
    "Clnt": "Cientes A 44",
    "Loja": ""
  },
  {
    "Id": 809,
    "Clnt": "Cientes A 45",
    "Loja": ""
  },
  {
    "Id": 810,
    "Clnt": "Cientes A 46",
    "Loja": ""
  },
  {
    "Id": 811,
    "Clnt": "Cientes A 47",
    "Loja": ""
  },
  {
    "Id": 812,
    "Clnt": "Cientes A 48",
    "Loja": ""
  },
  {
    "Id": 813,
    "Clnt": "Cientes A 49",
    "Loja": ""
  },
  {
    "Id": 815,
    "Clnt": "Cientes A 51",
    "Loja": ""
  },
  {
    "Id": 816,
    "Clnt": "Cientes A 52",
    "Loja": ""
  },
  {
    "Id": 817,
    "Clnt": "Cientes A 53",
    "Loja": ""
  },
  {
    "Id": 818,
    "Clnt": "Cientes A 54",
    "Loja": ""
  },
  {
    "Id": 819,
    "Clnt": "Cientes A 55",
    "Loja": ""
  },
  {
    "Id": 820,
    "Clnt": "Cientes A 56",
    "Loja": ""
  },
  {
    "Id": 822,
    "Clnt": "Cientes A 58",
    "Loja": ""
  },
  {
    "Id": 823,
    "Clnt": "Mario 1",
    "Loja": ""
  },
  {
    "Id": 824,
    "Clnt": "Ster",
    "Loja": ""
  },
  {
    "Id": 825,
    "Clnt": "Mess",
    "Loja": ""
  },
  {
    "Id": 826,
    "Clnt": "Mario",
    "Loja": ""
  },
  {
    "Id": 827,
    "Clnt": "Elizangela Salão",
    "Loja": ""
  },
  {
    "Id": 828,
    "Clnt": "Marcelo Do Som Marcelo",
    "Loja": ""
  },
  {
    "Id": 829,
    "Clnt": "Zz 2",
    "Loja": ""
  },
  {
    "Id": 830,
    "Clnt": "Evilyn",
    "Loja": ""
  },
  {
    "Id": 831,
    "Clnt": "Hugor 🍃",
    "Loja": ""
  },
  {
    "Id": 832,
    "Clnt": "Sandroo",
    "Loja": ""
  },
  {
    "Id": 833,
    "Clnt": "Camila Beatriz",
    "Loja": ""
  },
  {
    "Id": 834,
    "Clnt": "Catarina",
    "Loja": ""
  },
  {
    "Id": 835,
    "Clnt": "Fabrício França",
    "Loja": ""
  },
  {
    "Id": 837,
    "Clnt": "Edu 🔥",
    "Loja": ""
  },
  {
    "Id": 838,
    "Clnt": "Doglas",
    "Loja": ""
  },
  {
    "Id": 839,
    "Clnt": "Wilton",
    "Loja": ""
  },
  {
    "Id": 840,
    "Clnt": "Artur",
    "Loja": ""
  },
  {
    "Id": 841,
    "Clnt": "Humberto",
    "Loja": ""
  },
  {
    "Id": 842,
    "Clnt": "Bruna Macias 🌹",
    "Loja": ""
  },
  {
    "Id": 844,
    "Clnt": "Repasso",
    "Loja": ""
  },
  {
    "Id": 845,
    "Clnt": "Talita Amorim 🥑",
    "Loja": ""
  },
  {
    "Id": 846,
    "Clnt": "Anny!",
    "Loja": ""
  },
  {
    "Id": 847,
    "Clnt": "Arthu 🍻👌",
    "Loja": ""
  },
  {
    "Id": 848,
    "Clnt": "Lek",
    "Loja": ""
  },
  {
    "Id": 849,
    "Clnt": "Lucymara 🔥👌",
    "Loja": ""
  },
  {
    "Id": 850,
    "Clnt": "Willy",
    "Loja": ""
  },
  {
    "Id": 851,
    "Clnt": "Aninha",
    "Loja": ""
  },
  {
    "Id": 852,
    "Clnt": "Moura",
    "Loja": ""
  },
  {
    "Id": 853,
    "Clnt": "Eduarda",
    "Loja": ""
  },
  {
    "Id": 854,
    "Clnt": "Vinicius",
    "Loja": ""
  },
  {
    "Id": 856,
    "Clnt": "Luv Silva 🔥",
    "Loja": ""
  },
  {
    "Id": 857,
    "Clnt": "Uma Nega Ai",
    "Loja": ""
  },
  {
    "Id": 858,
    "Clnt": "Ariane",
    "Loja": ""
  },
  {
    "Id": 859,
    "Clnt": "Marcela Academia",
    "Loja": ""
  },
  {
    "Id": 861,
    "Clnt": "Rhuan Marcelino",
    "Loja": ""
  },
  {
    "Id": 862,
    "Clnt": "Vinícius Novo",
    "Loja": ""
  },
  {
    "Id": 863,
    "Clnt": "Joao Victor (Mjoudier)",
    "Loja": ""
  },
  {
    "Id": 865,
    "Clnt": "Ceça🥂",
    "Loja": ""
  },
  {
    "Id": 866,
    "Clnt": "Layssa",
    "Loja": ""
  },
  {
    "Id": 867,
    "Clnt": "Wesley Kond",
    "Loja": ""
  },
  {
    "Id": 868,
    "Clnt": "Gree",
    "Loja": ""
  },
  {
    "Id": 869,
    "Clnt": "Keka",
    "Loja": ""
  },
  {
    "Id": 870,
    "Clnt": "Letícia",
    "Loja": ""
  },
  {
    "Id": 871,
    "Clnt": "ellen",
    "Loja": ""
  },
  {
    "Id": 872,
    "Clnt": "Bruna💫",
    "Loja": ""
  },
  {
    "Id": 873,
    "Clnt": "Igor Podcast 🔥",
    "Loja": ""
  },
  {
    "Id": 874,
    "Clnt": "Thiago 2",
    "Loja": ""
  },
  {
    "Id": 875,
    "Clnt": "juliazinha",
    "Loja": ""
  },
  {
    "Id": 876,
    "Clnt": "Emerson",
    "Loja": ""
  },
  {
    "Id": 877,
    "Clnt": "Party O4",
    "Loja": ""
  },
  {
    "Id": 878,
    "Clnt": "Rodrigo 👍",
    "Loja": ""
  },
  {
    "Id": 879,
    "Clnt": "Uma Gata",
    "Loja": ""
  },
  {
    "Id": 880,
    "Clnt": "Fã De Shevchenko",
    "Loja": ""
  },
  {
    "Id": 881,
    "Clnt": "Cayo",
    "Loja": ""
  },
  {
    "Id": 882,
    "Clnt": "Jonas",
    "Loja": ""
  },
  {
    "Id": 883,
    "Clnt": "Heinek",
    "Loja": ""
  },
  {
    "Id": 884,
    "Clnt": "Whitney",
    "Loja": ""
  },
  {
    "Id": 885,
    "Clnt": "Luciano 2",
    "Loja": ""
  },
  {
    "Id": 886,
    "Clnt": "Amanda Andrade",
    "Loja": ""
  },
  {
    "Id": 887,
    "Clnt": "Eli",
    "Loja": ""
  },
  {
    "Id": 888,
    "Clnt": "Charly 2",
    "Loja": ""
  },
  {
    "Id": 890,
    "Clnt": "Álisson André",
    "Loja": ""
  },
  {
    "Id": 891,
    "Clnt": "Marcelo Silva",
    "Loja": ""
  },
  {
    "Id": 892,
    "Clnt": "Douglas Martins",
    "Loja": ""
  },
  {
    "Id": 893,
    "Clnt": "José...",
    "Loja": ""
  },
  {
    "Id": 894,
    "Clnt": "SIdney",
    "Loja": ""
  },
  {
    "Id": 895,
    "Clnt": "Merdaaa",
    "Loja": ""
  },
  {
    "Id": 896,
    "Clnt": "Eli Santos",
    "Loja": ""
  },
  {
    "Id": 897,
    "Clnt": "Jandanta",
    "Loja": ""
  },
  {
    "Id": 899,
    "Clnt": "Andréa Maria",
    "Loja": ""
  },
  {
    "Id": 900,
    "Clnt": "Julya ❣",
    "Loja": ""
  },
  {
    "Id": 901,
    "Clnt": "Henrique",
    "Loja": ""
  },
  {
    "Id": 902,
    "Clnt": "Tarcio (Minho)",
    "Loja": ""
  },
  {
    "Id": 903,
    "Clnt": "Luciene Dias",
    "Loja": ""
  },
  {
    "Id": 904,
    "Clnt": "Maricelia Alves",
    "Loja": ""
  },
  {
    "Id": 905,
    "Clnt": "Vernica",
    "Loja": ""
  },
  {
    "Id": 906,
    "Clnt": "jose alves",
    "Loja": ""
  },
  {
    "Id": 907,
    "Clnt": "Raniere Vizinho 🇧🇷",
    "Loja": ""
  },
  {
    "Id": 908,
    "Clnt": "Cliente indicação valesca",
    "Loja": ""
  },
  {
    "Id": 910,
    "Clnt": "Pedro Nascimento",
    "Loja": ""
  },
  {
    "Id": 912,
    "Clnt": "Débora Carvalho",
    "Loja": ""
  },
  {
    "Id": 913,
    "Clnt": "Benício doIdera",
    "Loja": ""
  },
  {
    "Id": 914,
    "Clnt": "Italo Paulo",
    "Loja": ""
  },
  {
    "Id": 915,
    "Clnt": "Thainá Kilvia",
    "Loja": ""
  },
  {
    "Id": 916,
    "Clnt": "Mateus",
    "Loja": ""
  },
  {
    "Id": 918,
    "Clnt": "Ytalo",
    "Loja": ""
  },
  {
    "Id": 919,
    "Clnt": "JacicleIde",
    "Loja": ""
  },
  {
    "Id": 920,
    "Clnt": "Ana",
    "Loja": ""
  },
  {
    "Id": 921,
    "Clnt": "Lucars",
    "Loja": ""
  },
  {
    "Id": 922,
    "Clnt": "Rodolfo Vieira",
    "Loja": ""
  },
  {
    "Id": 923,
    "Clnt": "Washington",
    "Loja": "Fire"
  },
  {
    "Id": 924,
    "Clnt": "Mendonça",
    "Loja": ""
  },
  {
    "Id": 925,
    "Clnt": "Roberto",
    "Loja": ""
  },
  {
    "Id": 928,
    "Clnt": "Valeria",
    "Loja": ""
  },
  {
    "Id": 930,
    "Clnt": "Nathália Angeiras",
    "Loja": ""
  },
  {
    "Id": 932,
    "Clnt": "Paulo Cintra Jr",
    "Loja": ""
  },
  {
    "Id": 938,
    "Clnt": "José Lourenço",
    "Loja": ""
  },
  {
    "Id": 940,
    "Clnt": "Kewin",
    "Loja": ""
  },
  {
    "Id": 941,
    "Clnt": "Anderson Pirraia",
    "Loja": ""
  },
  {
    "Id": 942,
    "Clnt": "Aline Andrade 🥰",
    "Loja": ""
  },
  {
    "Id": 947,
    "Clnt": "Ana Paula Salão",
    "Loja": ""
  },
  {
    "Id": 949,
    "Clnt": "Eliane",
    "Loja": ""
  },
  {
    "Id": 951,
    "Clnt": "Rodrigo Martins 📊👌🏻",
    "Loja": ""
  },
  {
    "Id": 952,
    "Clnt": "Vga",
    "Loja": ""
  },
  {
    "Id": 953,
    "Clnt": "nataline campos",
    "Loja": ""
  },
  {
    "Id": 955,
    "Clnt": "Paulo",
    "Loja": ""
  },
  {
    "Id": 957,
    "Clnt": "junior 1",
    "Loja": ""
  },
  {
    "Id": 960,
    "Clnt": "Ricardo",
    "Loja": ""
  },
  {
    "Id": 961,
    "Clnt": "Carlos Augusto",
    "Loja": ""
  },
  {
    "Id": 963,
    "Clnt": "Bubu",
    "Loja": ""
  },
  {
    "Id": 964,
    "Clnt": "Kewin!",
    "Loja": ""
  },
  {
    "Id": 965,
    "Clnt": "Jessica (IngrId Party)",
    "Loja": ""
  },
  {
    "Id": 966,
    "Clnt": "2 (IngrId Party)",
    "Loja": ""
  },
  {
    "Id": 967,
    "Clnt": "Eduardo Serigrafia",
    "Loja": ""
  },
  {
    "Id": 968,
    "Clnt": "Abimael igreja Batista",
    "Loja": ""
  },
  {
    "Id": 969,
    "Clnt": "Adesivo Certo",
    "Loja": ""
  },
  {
    "Id": 970,
    "Clnt": "Águas finas",
    "Loja": ""
  },
  {
    "Id": 971,
    "Clnt": "Aldemir M&A",
    "Loja": ""
  },
  {
    "Id": 973,
    "Clnt": "Allan Graffit",
    "Loja": ""
  },
  {
    "Id": 974,
    "Clnt": "Anderson",
    "Loja": ""
  },
  {
    "Id": 976,
    "Clnt": "Antigo (100 Juizo)",
    "Loja": ""
  },
  {
    "Id": 977,
    "Clnt": "Armaz Silvano",
    "Loja": ""
  },
  {
    "Id": 978,
    "Clnt": "Armazem Asa Branca",
    "Loja": ""
  },
  {
    "Id": 979,
    "Clnt": "Assfibra Assistencia",
    "Loja": ""
  },
  {
    "Id": 981,
    "Clnt": "Baby",
    "Loja": ""
  },
  {
    "Id": 982,
    "Clnt": "Bela PetShop",
    "Loja": ""
  },
  {
    "Id": 984,
    "Clnt": "Braia* Edit 🎧",
    "Loja": ""
  },
  {
    "Id": 985,
    "Clnt": "Bruno Da KPMBIIII",
    "Loja": ""
  },
  {
    "Id": 986,
    "Clnt": "Callebe Trailer",
    "Loja": ""
  },
  {
    "Id": 987,
    "Clnt": "Carimbo",
    "Loja": ""
  },
  {
    "Id": 989,
    "Clnt": "Claudia Ramos (Aranjo De Flor)",
    "Loja": ""
  },
  {
    "Id": 990,
    "Clnt": "Claudio Alves",
    "Loja": ""
  },
  {
    "Id": 991,
    "Clnt": "Claudio Box",
    "Loja": ""
  },
  {
    "Id": 993,
    "Clnt": "D & G vIdraçaria",
    "Loja": ""
  },
  {
    "Id": 994,
    "Clnt": "Debora Da Plaquinha",
    "Loja": ""
  },
  {
    "Id": 996,
    "Clnt": "DistribuIdora De Galeto",
    "Loja": ""
  },
  {
    "Id": 997,
    "Clnt": "Djalma Drone",
    "Loja": ""
  },
  {
    "Id": 998,
    "Clnt": "Dr. Nivaldo Júnior (Estética)",
    "Loja": ""
  },
  {
    "Id": 1000,
    "Clnt": "Elisângela Salão",
    "Loja": ""
  },
  {
    "Id": 1001,
    "Clnt": "Erivaldo Bike",
    "Loja": ""
  },
  {
    "Id": 1002,
    "Clnt": "Erivaldo Motocross",
    "Loja": ""
  },
  {
    "Id": 1003,
    "Clnt": "Estácio Facul",
    "Loja": ""
  },
  {
    "Id": 1004,
    "Clnt": "Grafit Soluções Graficas",
    "Loja": ""
  },
  {
    "Id": 1005,
    "Clnt": "Homero",
    "Loja": ""
  },
  {
    "Id": 1008,
    "Clnt": "Gráfica Plastificadora",
    "Loja": ""
  },
  {
    "Id": 1009,
    "Clnt": "Plastificadora",
    "Loja": ""
  },
  {
    "Id": 1010,
    "Clnt": "Vendedor Impressora Térmica",
    "Loja": ""
  },
  {
    "Id": 1011,
    "Clnt": "Gráfica do Cabo S. Agostinho",
    "Loja": ""
  },
  {
    "Id": 1012,
    "Clnt": "Gráfica Vegetal",
    "Loja": ""
  },
  {
    "Id": 1013,
    "Clnt": "Gráfica Bureal",
    "Loja": ""
  },
  {
    "Id": 1015,
    "Clnt": "Marcone Impressora De Nota Paulino 💕",
    "Loja": ""
  },
  {
    "Id": 1016,
    "Clnt": "Kleyton Rezende",
    "Loja": ""
  },
  {
    "Id": 1017,
    "Clnt": "UniPlasticos Lobo",
    "Loja": ""
  },
  {
    "Id": 1018,
    "Clnt": "FarmaZap",
    "Loja": ""
  },
  {
    "Id": 1020,
    "Clnt": "ABP Marcas e Patentes",
    "Loja": ""
  },
  {
    "Id": 1022,
    "Clnt": "Antônio Cavalhete",
    "Loja": ""
  },
  {
    "Id": 1023,
    "Clnt": "Moda Todo Dia",
    "Loja": ""
  },
  {
    "Id": 1026,
    "Clnt": "Alvez Escolar",
    "Loja": ""
  },
  {
    "Id": 1028,
    "Clnt": "Fabricata",
    "Loja": ""
  },
  {
    "Id": 1029,
    "Clnt": "Ferro E Aço",
    "Loja": ""
  },
  {
    "Id": 1032,
    "Clnt": "Renato Miranda",
    "Loja": ""
  },
  {
    "Id": 1036,
    "Clnt": "Bbg Cancelamento",
    "Loja": ""
  },
  {
    "Id": 1037,
    "Clnt": "Nilma",
    "Loja": ""
  },
  {
    "Id": 1038,
    "Clnt": "D & M Photos",
    "Loja": ""
  },
  {
    "Id": 1039,
    "Clnt": "Siqueira",
    "Loja": ""
  },
  {
    "Id": 1040,
    "Clnt": "ArcSul",
    "Loja": ""
  },
  {
    "Id": 1041,
    "Clnt": "Sesc Santo Amaro",
    "Loja": ""
  },
  {
    "Id": 1042,
    "Clnt": "Banco",
    "Loja": ""
  },
  {
    "Id": 1044,
    "Clnt": "Rusiel",
    "Loja": ""
  },
  {
    "Id": 1045,
    "Clnt": "Viadão",
    "Loja": ""
  },
  {
    "Id": 1046,
    "Clnt": "Food Ponto",
    "Loja": ""
  },
  {
    "Id": 1048,
    "Clnt": "Rodrigo PlácIdo",
    "Loja": ""
  },
  {
    "Id": 1049,
    "Clnt": "Casa dos Frios",
    "Loja": ""
  },
  {
    "Id": 1050,
    "Clnt": "Rami Lima",
    "Loja": ""
  },
  {
    "Id": 1051,
    "Clnt": "Leandro",
    "Loja": ""
  },
  {
    "Id": 1052,
    "Clnt": "Luana",
    "Loja": ""
  },
  {
    "Id": 1053,
    "Clnt": "Regivaldo Alves",
    "Loja": ""
  },
  {
    "Id": 1054,
    "Clnt": "Andreza Felix",
    "Loja": ""
  },
  {
    "Id": 1055,
    "Clnt": "Rosângela (Prima De Tata)",
    "Loja": "thuca"
  },
  {
    "Id": 1056,
    "Clnt": "A da vitamina",
    "Loja": ""
  },
  {
    "Id": 1058,
    "Clnt": "Ellen Camisas",
    "Loja": ""
  },
  {
    "Id": 1059,
    "Clnt": "Jack Souza (Técnico Recorte)",
    "Loja": ""
  },
  {
    "Id": 1060,
    "Clnt": "Elias Jose",
    "Loja": ""
  },
  {
    "Id": 1061,
    "Clnt": "Nego_ das camisas",
    "Loja": ""
  },
  {
    "Id": 1062,
    "Clnt": "Camilly Camisas",
    "Loja": ""
  },
  {
    "Id": 1063,
    "Clnt": "Chaveiro Jailson",
    "Loja": ""
  },
  {
    "Id": 1064,
    "Clnt": "Andre PVC",
    "Loja": ""
  },
  {
    "Id": 1065,
    "Clnt": "AGSILVA REFORMAS",
    "Loja": ""
  },
  {
    "Id": 1066,
    "Clnt": "Rodrigo Atacado",
    "Loja": ""
  },
  {
    "Id": 1067,
    "Clnt": "Labo Life",
    "Loja": ""
  },
  {
    "Id": 1068,
    "Clnt": "Osmar_variedades",
    "Loja": ""
  },
  {
    "Id": 1069,
    "Clnt": "Osmar Camisas",
    "Loja": ""
  },
  {
    "Id": 1070,
    "Clnt": "Concurço",
    "Loja": ""
  },
  {
    "Id": 1071,
    "Clnt": "Joao",
    "Loja": ""
  },
  {
    "Id": 1072,
    "Clnt": "G.E Telas",
    "Loja": ""
  },
  {
    "Id": 1073,
    "Clnt": "Irann",
    "Loja": ""
  },
  {
    "Id": 1075,
    "Clnt": "Cara do React",
    "Loja": ""
  },
  {
    "Id": 1077,
    "Clnt": "Visinha do Salão",
    "Loja": ""
  },
  {
    "Id": 1078,
    "Clnt": "Nerly",
    "Loja": ""
  },
  {
    "Id": 1079,
    "Clnt": "Kali souza",
    "Loja": ""
  },
  {
    "Id": 1081,
    "Clnt": "Ísy Varejo e Atacado",
    "Loja": ""
  },
  {
    "Id": 1084,
    "Clnt": "Menino Do Gesso",
    "Loja": ""
  },
  {
    "Id": 1085,
    "Clnt": "Paintball",
    "Loja": ""
  },
  {
    "Id": 1087,
    "Clnt": "GM Informatica Pc",
    "Loja": ""
  },
  {
    "Id": 1088,
    "Clnt": "Rai Luz",
    "Loja": ""
  },
  {
    "Id": 1091,
    "Clnt": "Alexandre Multimarcas",
    "Loja": ""
  },
  {
    "Id": 1092,
    "Clnt": "Salão da Cris MarIdo",
    "Loja": ""
  },
  {
    "Id": 1093,
    "Clnt": "Tony 1",
    "Loja": ""
  },
  {
    "Id": 1094,
    "Clnt": "Willams Da Kombi",
    "Loja": ""
  },
  {
    "Id": 1096,
    "Clnt": "Paulo Henrique Quadro",
    "Loja": ""
  },
  {
    "Id": 1097,
    "Clnt": "moça do adesivo",
    "Loja": ""
  },
  {
    "Id": 1098,
    "Clnt": "Ebson Do Carro",
    "Loja": ""
  },
  {
    "Id": 1099,
    "Clnt": "Junior Placa",
    "Loja": ""
  },
  {
    "Id": 1100,
    "Clnt": "Irmão Jose",
    "Loja": ""
  },
  {
    "Id": 1101,
    "Clnt": "O Carinha Do Lado",
    "Loja": ""
  },
  {
    "Id": 1102,
    "Clnt": "Flavio Sifarma",
    "Loja": ""
  },
  {
    "Id": 1103,
    "Clnt": "Williams Lima",
    "Loja": ""
  },
  {
    "Id": 1104,
    "Clnt": "delícia de sabor",
    "Loja": ""
  },
  {
    "Id": 1105,
    "Clnt": "Roberta Recorte Igreija",
    "Loja": ""
  },
  {
    "Id": 1107,
    "Clnt": "Armazém Penedo",
    "Loja": ""
  },
  {
    "Id": 1108,
    "Clnt": "Ademir Fretes",
    "Loja": ""
  },
  {
    "Id": 1109,
    "Clnt": "Linda Selva☺️",
    "Loja": ""
  },
  {
    "Id": 1111,
    "Clnt": "Peu Pedreiro",
    "Loja": ""
  },
  {
    "Id": 1113,
    "Clnt": "Luciene Dias Goumet",
    "Loja": ""
  },
  {
    "Id": 1114,
    "Clnt": "Cara Do Vende-se",
    "Loja": ""
  },
  {
    "Id": 1115,
    "Clnt": "Solange da Placa",
    "Loja": ""
  },
  {
    "Id": 1116,
    "Clnt": "Pauzinho Chuck",
    "Loja": ""
  },
  {
    "Id": 1118,
    "Clnt": "Kauane da Camisa",
    "Loja": ""
  },
  {
    "Id": 1119,
    "Clnt": "Paula Nunes",
    "Loja": ""
  },
  {
    "Id": 1120,
    "Clnt": "Joseli Esposa De Luciano Borges",
    "Loja": ""
  },
  {
    "Id": 1121,
    "Clnt": "Ale Tattoo",
    "Loja": ""
  },
  {
    "Id": 1122,
    "Clnt": "I Love Burguer",
    "Loja": ""
  },
  {
    "Id": 1123,
    "Clnt": "Marcio 2",
    "Loja": ""
  },
  {
    "Id": 1124,
    "Clnt": "Djalma Dronee",
    "Loja": ""
  },
  {
    "Id": 1125,
    "Clnt": "Souto",
    "Loja": ""
  },
  {
    "Id": 1127,
    "Clnt": "JM REVENDEDORA DE ÁGUA",
    "Loja": ""
  },
  {
    "Id": 1128,
    "Clnt": "Mr.Cabelus",
    "Loja": ""
  },
  {
    "Id": 1129,
    "Clnt": "Dona Dayse",
    "Loja": ""
  },
  {
    "Id": 1131,
    "Clnt": "Açaí Tasty Food",
    "Loja": ""
  },
  {
    "Id": 1132,
    "Clnt": "Eli Gonçalves",
    "Loja": ""
  },
  {
    "Id": 1133,
    "Clnt": "Top",
    "Loja": ""
  },
  {
    "Id": 1134,
    "Clnt": "Nininho",
    "Loja": ""
  },
  {
    "Id": 1135,
    "Clnt": "Fabio 007",
    "Loja": ""
  },
  {
    "Id": 1137,
    "Clnt": "Luiz Brimo De Cilene",
    "Loja": ""
  },
  {
    "Id": 1138,
    "Clnt": "Edson Super Mega",
    "Loja": ""
  },
  {
    "Id": 1139,
    "Clnt": "Natallia Massa E Pesticos",
    "Loja": ""
  },
  {
    "Id": 1141,
    "Clnt": "Niedja Nals",
    "Loja": ""
  },
  {
    "Id": 1142,
    "Clnt": "Gesso e Eletrica Lucas",
    "Loja": ""
  },
  {
    "Id": 1143,
    "Clnt": "Pai De Dadinho",
    "Loja": ""
  },
  {
    "Id": 1144,
    "Clnt": "Edilza Carnê",
    "Loja": ""
  },
  {
    "Id": 1145,
    "Clnt": "Danny Explosão Do Sabor",
    "Loja": "Clone"
  },
  {
    "Id": 1147,
    "Clnt": "Givaldo ônibus (STCM)",
    "Loja": ""
  },
  {
    "Id": 1149,
    "Clnt": "Edy Amigo de Mago",
    "Loja": ""
  },
  {
    "Id": 1150,
    "Clnt": "Jhony Da Net Kk",
    "Loja": ""
  },
  {
    "Id": 1152,
    "Clnt": "Anderson Bonequinho De Minho",
    "Loja": ""
  },
  {
    "Id": 1153,
    "Clnt": "Erivan Cortes💈",
    "Loja": ""
  },
  {
    "Id": 1154,
    "Clnt": "Vende-se 2",
    "Loja": ""
  },
  {
    "Id": 1155,
    "Clnt": "Anderson Vangola (Grafica)",
    "Loja": ""
  },
  {
    "Id": 1156,
    "Clnt": "Bione BarBerShop",
    "Loja": ""
  },
  {
    "Id": 1160,
    "Clnt": "Peu Barbeiro",
    "Loja": ""
  },
  {
    "Id": 1161,
    "Clnt": "Dona Eliane",
    "Loja": ""
  },
  {
    "Id": 1162,
    "Clnt": "Luliinha",
    "Loja": ""
  },
  {
    "Id": 1163,
    "Clnt": "Raquel Do Banner",
    "Loja": ""
  },
  {
    "Id": 1164,
    "Clnt": "Mário Nivaldo",
    "Loja": ""
  },
  {
    "Id": 1165,
    "Clnt": "Alamys",
    "Loja": ""
  },
  {
    "Id": 1166,
    "Clnt": "Erick De Marcelo",
    "Loja": ""
  },
  {
    "Id": 1168,
    "Clnt": "Camila Pastell",
    "Loja": ""
  },
  {
    "Id": 1170,
    "Clnt": "Ana Filha De Sifarma",
    "Loja": ""
  },
  {
    "Id": 1171,
    "Clnt": "Luciano Refrigeração",
    "Loja": ""
  },
  {
    "Id": 1173,
    "Clnt": "aejfolheados",
    "Loja": ""
  },
  {
    "Id": 1174,
    "Clnt": "TV APCultura",
    "Loja": ""
  },
  {
    "Id": 1176,
    "Clnt": "Hélio batista",
    "Loja": ""
  },
  {
    "Id": 1177,
    "Clnt": "Lucio Galeto",
    "Loja": ""
  },
  {
    "Id": 1178,
    "Clnt": "Maria Alice Tutti dolci",
    "Loja": ""
  },
  {
    "Id": 1187,
    "Clnt": "Banner Vei_001",
    "Loja": ""
  },
  {
    "Id": 1192,
    "Clnt": "Banner Vei_003",
    "Loja": ""
  },
  {
    "Id": 1193,
    "Clnt": "Marcos Filadelfia",
    "Loja": ""
  },
  {
    "Id": 1225,
    "Clnt": "Pedro Adesivo Tanque Moto",
    "Loja": ""
  },
  {
    "Id": 1229,
    "Clnt": "Logixinfor",
    "Loja": ""
  },
  {
    "Id": 1239,
    "Clnt": "Casa Das Aguas",
    "Loja": ""
  },
  {
    "Id": 1242,
    "Clnt": "Iris Nails Designer",
    "Loja": ""
  },
  {
    "Id": 1260,
    "Clnt": "Val Fretes",
    "Loja": ""
  },
  {
    "Id": 1261,
    "Clnt": "Massa Delicia",
    "Loja": ""
  },
  {
    "Id": 1262,
    "Clnt": "Fernando 📊🖥",
    "Loja": ""
  },
  {
    "Id": 1272,
    "Clnt": "Cleyton Cara Do Adesivo Pardde",
    "Loja": ""
  },
  {
    "Id": 1275,
    "Clnt": "Aluga-se",
    "Loja": ""
  },
  {
    "Id": 1296,
    "Clnt": "Faz CARTAO",
    "Loja": ""
  },
  {
    "Id": 1298,
    "Clnt": "Central De Serviços Ltda",
    "Loja": ""
  },
  {
    "Id": 1300,
    "Clnt": "Natalie Adesivo",
    "Loja": ""
  },
  {
    "Id": 1303,
    "Clnt": "Camaragibe Produções",
    "Loja": ""
  },
  {
    "Id": 1308,
    "Clnt": "Galeto Taxi",
    "Loja": ""
  },
  {
    "Id": 1309,
    "Clnt": "Luan Good e Delicius",
    "Loja": ""
  },
  {
    "Id": 1314,
    "Clnt": "Marcos Salão de Festa",
    "Loja": ""
  },
  {
    "Id": 1326,
    "Clnt": "Wilson Pescados",
    "Loja": ""
  },
  {
    "Id": 1329,
    "Clnt": "Elinaldo Maquina De Padaria",
    "Loja": ""
  },
  {
    "Id": 1339,
    "Clnt": "Wanessa De Dadinho",
    "Loja": ""
  },
  {
    "Id": 1340,
    "Clnt": "Casa Das Polpas",
    "Loja": ""
  },
  {
    "Id": 1343,
    "Clnt": "João Cliente",
    "Loja": ""
  },
  {
    "Id": 1346,
    "Clnt": "Ricardo Bandeira Do Brazil",
    "Loja": ""
  },
  {
    "Id": 1349,
    "Clnt": "Paulista De Monumento",
    "Loja": ""
  },
  {
    "Id": 1351,
    "Clnt": "Parafusos",
    "Loja": ""
  },
  {
    "Id": 1355,
    "Clnt": "Pg Transportadora",
    "Loja": ""
  },
  {
    "Id": 1356,
    "Clnt": "Cliente 001",
    "Loja": ""
  },
  {
    "Id": 1357,
    "Clnt": "Banner Vei_002",
    "Loja": ""
  },
  {
    "Id": 1359,
    "Clnt": "Acai Do Patio",
    "Loja": ""
  },
  {
    "Id": 1366,
    "Clnt": "Levi GÁS",
    "Loja": ""
  },
  {
    "Id": 1367,
    "Clnt": "Banner 22",
    "Loja": ""
  },
  {
    "Id": 1370,
    "Clnt": "Andersoon Arte",
    "Loja": ""
  },
  {
    "Id": 1371,
    "Clnt": "Massa E Pesticos",
    "Loja": ""
  },
  {
    "Id": 1372,
    "Clnt": "Débora Morais Geladeira",
    "Loja": ""
  },
  {
    "Id": 1373,
    "Clnt": "Athayde Bezerra",
    "Loja": ""
  },
  {
    "Id": 1376,
    "Clnt": "Gráfica do Cabo S. Agostinho (Design Jhona)",
    "Loja": ""
  },
  {
    "Id": 1377,
    "Clnt": "Igor Angeiras",
    "Loja": ""
  },
  {
    "Id": 1378,
    "Clnt": "Irmão de Alamys",
    "Loja": ""
  },
  {
    "Id": 1379,
    "Clnt": "james",
    "Loja": ""
  },
  {
    "Id": 1380,
    "Clnt": "JANA DOCERIA",
    "Loja": ""
  },
  {
    "Id": 1381,
    "Clnt": "Jênisson Lava Jato Nascimento",
    "Loja": ""
  },
  {
    "Id": 1383,
    "Clnt": "Karl7nhos",
    "Loja": ""
  },
  {
    "Id": 1386,
    "Clnt": "(Lona) Comercial Teciplastic",
    "Loja": ""
  },
  {
    "Id": 1387,
    "Clnt": "(Lona) Casa Urbano",
    "Loja": ""
  },
  {
    "Id": 1388,
    "Clnt": "(Lona) Variante Decorações",
    "Loja": ""
  },
  {
    "Id": 1389,
    "Clnt": "(Lona) Casa do Plástico",
    "Loja": ""
  },
  {
    "Id": 1391,
    "Clnt": "Luiz Max CuradoIV",
    "Loja": ""
  },
  {
    "Id": 1392,
    "Clnt": "Luliinha Viana (Só Motos)",
    "Loja": ""
  },
  {
    "Id": 1393,
    "Clnt": "Marcos Cara Do Tratô",
    "Loja": ""
  },
  {
    "Id": 1396,
    "Clnt": "maria margarita",
    "Loja": ""
  },
  {
    "Id": 1407,
    "Clnt": "N Sei 22",
    "Loja": ""
  },
  {
    "Id": 1410,
    "Clnt": "Novo Caminhão De Água",
    "Loja": ""
  },
  {
    "Id": 1411,
    "Clnt": "O Barração",
    "Loja": ""
  },
  {
    "Id": 1412,
    "Clnt": "Alixxia Oliver",
    "Loja": ""
  },
  {
    "Id": 1413,
    "Clnt": "wilamis Clecio",
    "Loja": ""
  },
  {
    "Id": 1414,
    "Clnt": "Tata",
    "Loja": ""
  },
  {
    "Id": 1415,
    "Clnt": "Tanaka",
    "Loja": ""
  },
  {
    "Id": 1416,
    "Clnt": "Pedro AirSoft Martins",
    "Loja": ""
  },
  {
    "Id": 1417,
    "Clnt": "Tomaz Magno",
    "Loja": ""
  },
  {
    "Id": 1418,
    "Clnt": "Bruninho / EAGLE GRINGA",
    "Loja": ""
  },
  {
    "Id": 1419,
    "Clnt": "Ana Moça Do Piano",
    "Loja": ""
  },
  {
    "Id": 1420,
    "Clnt": "Jonathas Dance",
    "Loja": ""
  },
  {
    "Id": 1421,
    "Clnt": "Infinity Graff",
    "Loja": ""
  },
  {
    "Id": 1425,
    "Clnt": "Novinho Geração",
    "Loja": ""
  },
  {
    "Id": 1427,
    "Clnt": "Douglas Oliver",
    "Loja": ""
  },
  {
    "Id": 1432,
    "Clnt": "Pedro Da Combi",
    "Loja": ""
  },
  {
    "Id": 1433,
    "Clnt": "Popular na Web (PublicIdade Digital)",
    "Loja": ""
  },
  {
    "Id": 1434,
    "Clnt": "Rafael Etiqueta",
    "Loja": ""
  },
  {
    "Id": 1435,
    "Clnt": "Renanzinho",
    "Loja": ""
  },
  {
    "Id": 1438,
    "Clnt": "Ronaldo do Parque",
    "Loja": ""
  },
  {
    "Id": 1439,
    "Clnt": "Ronaldo igreja Batista",
    "Loja": ""
  },
  {
    "Id": 1441,
    "Clnt": "Tony 2",
    "Loja": ""
  },
  {
    "Id": 1444,
    "Clnt": "Velox Tracker",
    "Loja": "Rastreador De veículos"
  },
  {
    "Id": 1446,
    "Clnt": "Cicero Pinheiro",
    "Loja": ""
  },
  {
    "Id": 1447,
    "Clnt": "Audio & VIdeo",
    "Loja": ""
  },
  {
    "Id": 1448,
    "Clnt": "Xandinho",
    "Loja": ""
  },
  {
    "Id": 1449,
    "Clnt": "Suh Prata",
    "Loja": ""
  },
  {
    "Id": 1452,
    "Clnt": "JJ Sobresas",
    "Loja": ""
  },
  {
    "Id": 1453,
    "Clnt": "Regi Desmanche",
    "Loja": ""
  },
  {
    "Id": 1454,
    "Clnt": "Julio",
    "Loja": ""
  },
  {
    "Id": 1455,
    "Clnt": "Elan",
    "Loja": ""
  },
  {
    "Id": 1456,
    "Clnt": "Ronaldo",
    "Loja": ""
  },
  {
    "Id": 1458,
    "Clnt": "Oten Rall",
    "Loja": ""
  },
  {
    "Id": 1459,
    "Clnt": "Edilson",
    "Loja": "Empadinha"
  },
  {
    "Id": 1460,
    "Clnt": "Maago Morgado",
    "Loja": ""
  },
  {
    "Id": 1461,
    "Clnt": "Edesio Construção",
    "Loja": ""
  },
  {
    "Id": 1462,
    "Clnt": "Mecearia DKL",
    "Loja": ""
  },
  {
    "Id": 1463,
    "Clnt": "Laura de Jessica",
    "Loja": ""
  },
  {
    "Id": 1464,
    "Clnt": "Boyzinho Moreninho",
    "Loja": ""
  },
  {
    "Id": 1465,
    "Clnt": "Rodrigo Vasconcelos",
    "Loja": ""
  },
  {
    "Id": 1466,
    "Clnt": "Natalie",
    "Loja": ""
  },
  {
    "Id": 1467,
    "Clnt": "kennedy",
    "Loja": ""
  },
  {
    "Id": 1468,
    "Clnt": "Bryan",
    "Loja": ""
  },
  {
    "Id": 1469,
    "Clnt": "Guarani",
    "Loja": ""
  },
  {
    "Id": 1470,
    "Clnt": "Deyvison Cortes",
    "Loja": ""
  },
  {
    "Id": 1471,
    "Clnt": "Matheus Teteu",
    "Loja": ""
  },
  {
    "Id": 1473,
    "Clnt": "Julio excamozin",
    "Loja": ""
  },
  {
    "Id": 1474,
    "Clnt": "Vinicius amg alyne",
    "Loja": ""
  },
  {
    "Id": 1478,
    "Clnt": "Regi Jato",
    "Loja": ""
  },
  {
    "Id": 1480,
    "Clnt": "Almir STCM",
    "Loja": ""
  },
  {
    "Id": 1482,
    "Clnt": "Jão Barbeiro",
    "Loja": ""
  },
  {
    "Id": 1483,
    "Clnt": "Paredinha AtrevIda",
    "Loja": ""
  },
  {
    "Id": 1484,
    "Clnt": "Ale Oliveira",
    "Loja": ""
  },
  {
    "Id": 1485,
    "Clnt": "Inspira-se Acessório",
    "Loja": ""
  },
  {
    "Id": 1486,
    "Clnt": "Luan Henri",
    "Loja": ""
  },
  {
    "Id": 1487,
    "Clnt": "Douglas Grafica",
    "Loja": ""
  },
  {
    "Id": 1489,
    "Clnt": "SilvaFax",
    "Loja": ""
  },
  {
    "Id": 1490,
    "Clnt": "Loop",
    "Loja": ""
  },
  {
    "Id": 1491,
    "Clnt": "Margareth Martins",
    "Loja": "Trailer Burg"
  },
  {
    "Id": 1492,
    "Clnt": "BarberShop Camara",
    "Loja": ""
  },
  {
    "Id": 1493,
    "Clnt": "Ravi",
    "Loja": ""
  },
  {
    "Id": 1494,
    "Clnt": "Fabricio",
    "Loja": ""
  },
  {
    "Id": 1495,
    "Clnt": "Rogério Cimento",
    "Loja": "RM Armazém"
  },
  {
    "Id": 1496,
    "Clnt": "Darly",
    "Loja": ""
  },
  {
    "Id": 1497,
    "Clnt": "Alyne",
    "Loja": ""
  },
  {
    "Id": 1498,
    "Clnt": "Alex da Silva Kombi",
    "Loja": ""
  },
  {
    "Id": 1499,
    "Clnt": "Gatamaga",
    "Loja": ""
  },
  {
    "Id": 1500,
    "Clnt": "Branquinho dos Olhos Azuis",
    "Loja": ""
  },
  {
    "Id": 1501,
    "Clnt": "Esposa de Ubirajara",
    "Loja": ""
  },
  {
    "Id": 1502,
    "Clnt": "Kelvin",
    "Loja": ""
  },
  {
    "Id": 1503,
    "Clnt": "Biel Moreno",
    "Loja": ""
  },
  {
    "Id": 1504,
    "Clnt": "CT UNITED",
    "Loja": ""
  },
  {
    "Id": 1505,
    "Clnt": "RC Estética",
    "Loja": ""
  },
  {
    "Id": 1506,
    "Clnt": "Pai de Peitola",
    "Loja": ""
  },
  {
    "Id": 1507,
    "Clnt": "Boy Chorador",
    "Loja": ""
  },
  {
    "Id": 1508,
    "Clnt": "maguinho gatinho",
    "Loja": ""
  },
  {
    "Id": 1509,
    "Clnt": "Marcos Antonio",
    "Loja": ""
  },
  {
    "Id": 1510,
    "Clnt": "Cara do Caminhão",
    "Loja": ""
  },
  {
    "Id": 1511,
    "Clnt": "Paulo Gonçalves",
    "Loja": ""
  },
  {
    "Id": 1512,
    "Clnt": "Duduzinho Grafit",
    "Loja": ""
  },
  {
    "Id": 1513,
    "Clnt": "Miminho Cortes",
    "Loja": ""
  },
  {
    "Id": 1514,
    "Clnt": "Monster Novo",
    "Loja": ""
  },
  {
    "Id": 1515,
    "Clnt": "Zaqueu",
    "Loja": ""
  },
  {
    "Id": 1516,
    "Clnt": "Kezia e Lau",
    "Loja": ""
  },
  {
    "Id": 1517,
    "Clnt": "Paraiso Encantado",
    "Loja": ""
  },
  {
    "Id": 1518,
    "Clnt": "Dudu Fan 160",
    "Loja": ""
  },
  {
    "Id": 1519,
    "Clnt": "Otavio Rodrigues",
    "Loja": ""
  },
  {
    "Id": 1520,
    "Clnt": "Xina",
    "Loja": ""
  },
  {
    "Id": 1521,
    "Clnt": "SJ Turismo",
    "Loja": ""
  },
  {
    "Id": 1523,
    "Clnt": "Bart S Jorge",
    "Loja": ""
  },
  {
    "Id": 1524,
    "Clnt": "Emanuellen",
    "Loja": ""
  },
  {
    "Id": 1525,
    "Clnt": "MCLK",
    "Loja": ""
  },
  {
    "Id": 1526,
    "Clnt": "Fransisco Smith",
    "Loja": ""
  },
  {
    "Id": 1527,
    "Clnt": "Karol Designer",
    "Loja": ""
  },
  {
    "Id": 1528,
    "Clnt": "Thuco",
    "Loja": ""
  },
  {
    "Id": 1529,
    "Clnt": "irmã dos bonecos",
    "Loja": ""
  },
  {
    "Id": 1530,
    "Clnt": "Igor 244 Gordin",
    "Loja": ""
  },
  {
    "Id": 1531,
    "Clnt": "Igor Fumê",
    "Loja": ""
  },
  {
    "Id": 1533,
    "Clnt": "Van Tia Paula",
    "Loja": ""
  },
  {
    "Id": 1534,
    "Clnt": "Daniele Espetinho",
    "Loja": ""
  },
  {
    "Id": 1535,
    "Clnt": "Biel dos Cortes",
    "Loja": ""
  },
  {
    "Id": 1536,
    "Clnt": "Gerson",
    "Loja": ""
  },
  {
    "Id": 1537,
    "Clnt": "Emporio",
    "Loja": ""
  },
  {
    "Id": 1538,
    "Clnt": "amigo de mago 2",
    "Loja": ""
  },
  {
    "Id": 1539,
    "Clnt": "Bença da Abelha",
    "Loja": ""
  },
  {
    "Id": 1540,
    "Clnt": "cara da honda rosa",
    "Loja": ""
  },
  {
    "Id": 1541,
    "Clnt": "Donzelinhos",
    "Loja": ""
  },
  {
    "Id": 1542,
    "Clnt": "amg mago 3",
    "Loja": ""
  },
  {
    "Id": 1543,
    "Clnt": "mintirinha da Kombi",
    "Loja": ""
  },
  {
    "Id": 1544,
    "Clnt": "@rruan46_",
    "Loja": ""
  },
  {
    "Id": 1545,
    "Clnt": "@Joaozr8",
    "Loja": ""
  },
  {
    "Id": 1546,
    "Clnt": "Luizinho",
    "Loja": ""
  },
  {
    "Id": 1547,
    "Clnt": "@kaua_vitor_s",
    "Loja": ""
  },
  {
    "Id": 1548,
    "Clnt": "Moreno da 99",
    "Loja": ""
  },
  {
    "Id": 1549,
    "Clnt": "DesconhecIdo 3",
    "Loja": ""
  },
  {
    "Id": 1550,
    "Clnt": "Mulher do MotoCross",
    "Loja": ""
  },
  {
    "Id": 1551,
    "Clnt": "Mara dos Cortes",
    "Loja": ""
  },
  {
    "Id": 1552,
    "Clnt": "Luca de Neguinho",
    "Loja": ""
  },
  {
    "Id": 1554,
    "Clnt": "Irmã de ElIda",
    "Loja": ""
  },
  {
    "Id": 1555,
    "Clnt": "Boy Feinho",
    "Loja": ""
  },
  {
    "Id": 1556,
    "Clnt": "DesconhecIdo 4",
    "Loja": ""
  },
  {
    "Id": 1557,
    "Clnt": "Colombiano Mago",
    "Loja": ""
  },
  {
    "Id": 1558,
    "Clnt": "Boyzinho Novinho",
    "Loja": ""
  },
  {
    "Id": 1559,
    "Clnt": "Boy de Renata",
    "Loja": ""
  },
  {
    "Id": 1560,
    "Clnt": "DesconhecIdo 5",
    "Loja": ""
  },
  {
    "Id": 1561,
    "Clnt": "DesconhecIdo 6",
    "Loja": ""
  },
  {
    "Id": 1562,
    "Clnt": "Jaime Bolsas",
    "Loja": ""
  },
  {
    "Id": 1563,
    "Clnt": "Davi",
    "Loja": ""
  },
  {
    "Id": 1564,
    "Clnt": "Pedro",
    "Loja": ""
  },
  {
    "Id": 1565,
    "Clnt": "Vitinho 244",
    "Loja": ""
  },
  {
    "Id": 1566,
    "Clnt": "Fernando Onibus",
    "Loja": ""
  },
  {
    "Id": 1567,
    "Clnt": "Cristian Colombia",
    "Loja": ""
  },
  {
    "Id": 1568,
    "Clnt": "Branquinho donzelo",
    "Loja": ""
  },
  {
    "Id": 1569,
    "Clnt": "Chié",
    "Loja": ""
  },
  {
    "Id": 1570,
    "Clnt": "Batattis",
    "Loja": ""
  },
  {
    "Id": 1571,
    "Clnt": "Cada grandão",
    "Loja": ""
  },
  {
    "Id": 1572,
    "Clnt": "Vei da Ranger",
    "Loja": ""
  },
  {
    "Id": 1573,
    "Clnt": "Karol Oliveira",
    "Loja": ""
  },
  {
    "Id": 1574,
    "Clnt": "Ernande Pneus",
    "Loja": ""
  },
  {
    "Id": 1575,
    "Clnt": "Bruna Caú",
    "Loja": ""
  },
  {
    "Id": 1576,
    "Clnt": "P.V.0",
    "Loja": ""
  },
  {
    "Id": 1577,
    "Clnt": "Hygieni 360",
    "Loja": ""
  },
  {
    "Id": 1578,
    "Clnt": "Van Tia Lele",
    "Loja": ""
  },
  {
    "Id": 1579,
    "Clnt": "Elias Frete",
    "Loja": ""
  },
  {
    "Id": 1580,
    "Clnt": "Jhony Da Net",
    "Loja": ""
  },
  {
    "Id": 1581,
    "Clnt": "RS Panificadora",
    "Loja": ""
  },
  {
    "Id": 1582,
    "Clnt": "Ana Paula 2",
    "Loja": ""
  },
  {
    "Id": 1583,
    "Clnt": "Camila Maria de Lima",
    "Loja": ""
  },
  {
    "Id": 1584,
    "Clnt": "Cara do Corihtias",
    "Loja": ""
  },
  {
    "Id": 1585,
    "Clnt": "Nilson Prancha",
    "Loja": ""
  },
  {
    "Id": 1586,
    "Clnt": "Neguinho da CG Verde",
    "Loja": ""
  },
  {
    "Id": 1587,
    "Clnt": "Gilson",
    "Loja": ""
  },
  {
    "Id": 1588,
    "Clnt": "Henrique Motos",
    "Loja": ""
  },
  {
    "Id": 1589,
    "Clnt": "Justino no Asfalto",
    "Loja": ""
  },
  {
    "Id": 1590,
    "Clnt": "Barbeiro de Cria",
    "Loja": ""
  },
  {
    "Id": 1591,
    "Clnt": "boysinho novinho donzelo",
    "Loja": ""
  },
  {
    "Id": 1592,
    "Clnt": "Lula Fretes",
    "Loja": ""
  },
  {
    "Id": 1593,
    "Clnt": "Coronel de Netto",
    "Loja": ""
  },
  {
    "Id": 1594,
    "Clnt": "Edvaldo Nautico",
    "Loja": ""
  },
  {
    "Id": 1595,
    "Clnt": "Cara da Freezer Glttus",
    "Loja": ""
  },
  {
    "Id": 1596,
    "Clnt": "Jessica Nascimento 2",
    "Loja": ""
  },
  {
    "Id": 1597,
    "Clnt": "Tanque Patinhas",
    "Loja": ""
  },
  {
    "Id": 1598,
    "Clnt": "Menino do Ceará",
    "Loja": ""
  },
  {
    "Id": 1599,
    "Clnt": "Luzia Silva",
    "Loja": ""
  },
  {
    "Id": 1600,
    "Clnt": "Telekete",
    "Loja": ""
  },
  {
    "Id": 1601,
    "Clnt": "Daniel a Lapa",
    "Loja": ""
  },
  {
    "Id": 1602,
    "Clnt": "Stunt Race",
    "Loja": ""
  },
  {
    "Id": 1603,
    "Clnt": "LW Construção",
    "Loja": ""
  },
  {
    "Id": 1604,
    "Clnt": "Amanda 3D",
    "Loja": ""
  },
  {
    "Id": 1605,
    "Clnt": "MC LK",
    "Loja": ""
  },
  {
    "Id": 1606,
    "Clnt": "Bruna Mendes",
    "Loja": ""
  },
  {
    "Id": 1608,
    "Clnt": "Amg de Isaque Primo",
    "Loja": ""
  },
  {
    "Id": 1609,
    "Clnt": "Robson Moto",
    "Loja": ""
  },
  {
    "Id": 1610,
    "Clnt": "Junior Bomba",
    "Loja": ""
  },
  {
    "Id": 1611,
    "Clnt": "New Life",
    "Loja": ""
  },
  {
    "Id": 1612,
    "Clnt": "Boyzinho Sarara",
    "Loja": ""
  },
  {
    "Id": 1613,
    "Clnt": "Carla da 160",
    "Loja": ""
  },
  {
    "Id": 1614,
    "Clnt": "Rinaldo Wand",
    "Loja": ""
  },
  {
    "Id": 1615,
    "Clnt": "Jãozinho da rua",
    "Loja": ""
  },
  {
    "Id": 1616,
    "Clnt": "boyzinho Donzelo Novos",
    "Loja": ""
  },
  {
    "Id": 1617,
    "Clnt": "Junior do carro Baú",
    "Loja": ""
  },
  {
    "Id": 1618,
    "Clnt": "Gordinho 244 novo",
    "Loja": ""
  },
  {
    "Id": 1619,
    "Clnt": "Gleycielle Melo",
    "Loja": ""
  },
  {
    "Id": 1620,
    "Clnt": "Rafa Topo Bolo",
    "Loja": ""
  },
  {
    "Id": 1621,
    "Clnt": "DuhMotos",
    "Loja": ""
  },
  {
    "Id": 1622,
    "Clnt": "Suglayne",
    "Loja": ""
  },
  {
    "Id": 1624,
    "Clnt": "Bernardo Pingo Cortes",
    "Loja": ""
  },
  {
    "Id": 1625,
    "Clnt": "Elloá Vitória",
    "Loja": ""
  },
  {
    "Id": 1627,
    "Clnt": "Alexandre",
    "Loja": "Pizza Geka"
  },
  {
    "Id": 1628,
    "Clnt": "coisa do quartel",
    "Loja": ""
  },
  {
    "Id": 1629,
    "Clnt": "Manuel Colombia",
    "Loja": ""
  },
  {
    "Id": 1630,
    "Clnt": "BM Consultoria",
    "Loja": ""
  },
  {
    "Id": 1631,
    "Clnt": "Trailer Dogão",
    "Loja": ""
  },
  {
    "Id": 1632,
    "Clnt": "Veio do Aluga-se",
    "Loja": ""
  },
  {
    "Id": 1633,
    "Clnt": "Maisgiene",
    "Loja": ""
  },
  {
    "Id": 1634,
    "Clnt": "Tuzin 2.0",
    "Loja": ""
  },
  {
    "Id": 1636,
    "Clnt": "Edson Moto",
    "Loja": ""
  },
  {
    "Id": 1638,
    "Clnt": "Osmar Variedades",
    "Loja": ""
  },
  {
    "Id": 1639,
    "Clnt": "Icaro",
    "Loja": ""
  },
  {
    "Id": 1640,
    "Clnt": "LM Cosmeticos Marcio",
    "Loja": ""
  },
  {
    "Id": 1641,
    "Clnt": "Sinuca Leão",
    "Loja": ""
  },
  {
    "Id": 1642,
    "Clnt": "Icaro Donselo",
    "Loja": ""
  },
  {
    "Id": 1643,
    "Clnt": "Rebeca Souza",
    "Loja": ""
  },
  {
    "Id": 1645,
    "Clnt": "Car Expert PE",
    "Loja": ""
  },
  {
    "Id": 1646,
    "Clnt": "Cara do STCM",
    "Loja": ""
  },
  {
    "Id": 1647,
    "Clnt": "Silvano",
    "Loja": ""
  },
  {
    "Id": 1648,
    "Clnt": "Ubirajara",
    "Loja": ""
  },
  {
    "Id": 1649,
    "Clnt": "Viviane",
    "Loja": ""
  },
  {
    "Id": 1650,
    "Clnt": "Edna Guarani",
    "Loja": ""
  },
  {
    "Id": 1651,
    "Clnt": "Ju Santos",
    "Loja": ""
  },
  {
    "Id": 1652,
    "Clnt": "Edmundo",
    "Loja": ""
  },
  {
    "Id": 1653,
    "Clnt": "Luciana Camilo",
    "Loja": ""
  },
  {
    "Id": 1654,
    "Clnt": "Antonio Junior",
    "Loja": ""
  },
  {
    "Id": 1655,
    "Clnt": "Adriely Piso e Tinta",
    "Loja": ""
  },
  {
    "Id": 1656,
    "Clnt": "Adrielly Freitas",
    "Loja": ""
  },
  {
    "Id": 1657,
    "Clnt": "Mulher a Igreja",
    "Loja": ""
  },
  {
    "Id": 1658,
    "Clnt": "Francisco Smith",
    "Loja": ""
  },
  {
    "Id": 1659,
    "Clnt": "Wanderson Matheus",
    "Loja": ""
  },
  {
    "Id": 1660,
    "Clnt": "Andresa Reis",
    "Loja": ""
  },
  {
    "Id": 1661,
    "Clnt": "Lucas Martin",
    "Loja": ""
  },
  {
    "Id": 1662,
    "Clnt": "Marlon",
    "Loja": ""
  },
  {
    "Id": 1663,
    "Clnt": "Mc amg Fexta",
    "Loja": ""
  },
  {
    "Id": 1664,
    "Clnt": "Gago Motos",
    "Loja": ""
  },
  {
    "Id": 1666,
    "Clnt": "Talita AlaIde",
    "Loja": ""
  },
  {
    "Id": 1667,
    "Clnt": "Mateus Emanuel",
    "Loja": ""
  },
  {
    "Id": 1668,
    "Clnt": "NK BlIdagem",
    "Loja": ""
  },
  {
    "Id": 1669,
    "Clnt": "Nolberto",
    "Loja": ""
  },
  {
    "Id": 1670,
    "Clnt": "Maria Carla",
    "Loja": ""
  },
  {
    "Id": 1672,
    "Clnt": "Alexandre Quadro",
    "Loja": ""
  },
  {
    "Id": 1673,
    "Clnt": "Trailer Burger",
    "Loja": ""
  },
  {
    "Id": 1674,
    "Clnt": "Galeto da Vó",
    "Loja": ""
  },
  {
    "Id": 1675,
    "Clnt": "Conexão SLM",
    "Loja": ""
  },
  {
    "Id": 1676,
    "Clnt": "Lazer Oceania",
    "Loja": ""
  },
  {
    "Id": 1677,
    "Clnt": "Eduardo Brasil",
    "Loja": ""
  },
  {
    "Id": 1678,
    "Clnt": "robson",
    "Loja": ""
  },
  {
    "Id": 1679,
    "Clnt": "boy com jeito de colombiano",
    "Loja": ""
  },
  {
    "Id": 1680,
    "Clnt": "isaque da Kombi",
    "Loja": ""
  },
  {
    "Id": 1681,
    "Clnt": "Cara da Kombi Agitado",
    "Loja": ""
  },
  {
    "Id": 1682,
    "Clnt": "Emyllydiana",
    "Loja": ""
  },
  {
    "Id": 1683,
    "Clnt": "Igor Matheus",
    "Loja": ""
  },
  {
    "Id": 1684,
    "Clnt": "Tauan",
    "Loja": ""
  },
  {
    "Id": 1685,
    "Clnt": "Jadson Paraprejico",
    "Loja": ""
  },
  {
    "Id": 1686,
    "Clnt": "Italo Lino",
    "Loja": ""
  },
  {
    "Id": 1687,
    "Clnt": "Wando",
    "Loja": ""
  },
  {
    "Id": 1688,
    "Clnt": "Macone",
    "Loja": ""
  },
  {
    "Id": 1689,
    "Clnt": "Allan Ze delivery",
    "Loja": ""
  },
  {
    "Id": 1690,
    "Clnt": "Robson",
    "Loja": ""
  },
  {
    "Id": 1692,
    "Clnt": "coroa q veio com o cara do onibus",
    "Loja": ""
  },
  {
    "Id": 1695,
    "Clnt": "Cara do Ônibus",
    "Loja": ""
  },
  {
    "Id": 1696,
    "Clnt": "Eduardo",
    "Loja": ""
  },
  {
    "Id": 1697,
    "Clnt": "Cleonilda",
    "Loja": ""
  },
  {
    "Id": 1699,
    "Clnt": "Cara Grilaslho",
    "Loja": ""
  },
  {
    "Id": 1700,
    "Clnt": "Renan",
    "Loja": ""
  },
  {
    "Id": 1701,
    "Clnt": "higor",
    "Loja": ""
  },
  {
    "Id": 1702,
    "Clnt": "Nordeste Grafica",
    "Loja": ""
  },
  {
    "Id": 1703,
    "Clnt": "darlly pagou 10",
    "Loja": ""
  },
  {
    "Id": 1706,
    "Clnt": "Lay Santos",
    "Loja": ""
  },
  {
    "Id": 1710,
    "Clnt": "dois boy suado",
    "Loja": ""
  },
  {
    "Id": 1711,
    "Clnt": "Índia",
    "Loja": ""
  },
  {
    "Id": 1713,
    "Clnt": "Marcos LM Cosmetico",
    "Loja": ""
  },
  {
    "Id": 1714,
    "Clnt": "Tia Paula",
    "Loja": ""
  },
  {
    "Id": 1715,
    "Clnt": "Kesia",
    "Loja": ""
  },
  {
    "Id": 1716,
    "Clnt": "Filho de Lampeão",
    "Loja": ""
  },
  {
    "Id": 1717,
    "Clnt": "Marcio",
    "Loja": ""
  },
  {
    "Id": 1718,
    "Clnt": "Luca",
    "Loja": ""
  },
  {
    "Id": 1719,
    "Clnt": "Cosme Fransisco",
    "Loja": ""
  },
  {
    "Id": 1720,
    "Clnt": "Carlos André (Bar da Piaba)",
    "Loja": ""
  },
  {
    "Id": 1721,
    "Clnt": "Mônica Lopes",
    "Loja": ""
  },
  {
    "Id": 1723,
    "Clnt": "JOAO GABRIEL CARNEIRO DE SOUSA",
    "Loja": ""
  },
  {
    "Id": 1724,
    "Clnt": "Desconhecido",
    "Loja": ""
  },
  {
    "Id": 1726,
    "Clnt": "Cintyia PetShop",
    "Loja": ""
  },
  {
    "Id": 1727,
    "Clnt": "Wesley José",
    "Loja": ""
  },
  {
    "Id": 1728,
    "Clnt": "Helia Leão",
    "Loja": ""
  },
  {
    "Id": 1730,
    "Clnt": "ímã 81",
    "Loja": ""
  },
  {
    "Id": 1731,
    "Clnt": "Entregador de Nino",
    "Loja": ""
  },
  {
    "Id": 1733,
    "Clnt": "RS água e Gas (Lucas Ewerton)",
    "Loja": ""
  },
  {
    "Id": 1734,
    "Clnt": "Galego 244",
    "Loja": ""
  },
  {
    "Id": 1735,
    "Clnt": "ìndia",
    "Loja": ""
  },
  {
    "Id": 1736,
    "Clnt": "Tati",
    "Loja": ""
  },
  {
    "Id": 1737,
    "Clnt": "Ecoprime",
    "Loja": ""
  },
  {
    "Id": 1738,
    "Clnt": "Hora Doce Cake",
    "Loja": ""
  },
  {
    "Id": 1740,
    "Clnt": "Arthur",
    "Loja": ""
  },
  {
    "Id": 1742,
    "Clnt": "Rildak",
    "Loja": ""
  },
  {
    "Id": 1743,
    "Clnt": "Clenilda",
    "Loja": ""
  },
  {
    "Id": 1744,
    "Clnt": "Etiqueta do Urcinho",
    "Loja": ""
  },
  {
    "Id": 1745,
    "Clnt": "Wilson",
    "Loja": ""
  },
  {
    "Id": 1746,
    "Clnt": "Swane",
    "Loja": ""
  },
  {
    "Id": 1747,
    "Clnt": "Estofados Gênesis (Geraldo)",
    "Loja": ""
  },
  {
    "Id": 1748,
    "Clnt": "Laura Lima",
    "Loja": ""
  },
  {
    "Id": 1749,
    "Clnt": "Joelma Rê studio",
    "Loja": ""
  },
  {
    "Id": 1751,
    "Clnt": "Panela De Barro",
    "Loja": ""
  },
  {
    "Id": 1752,
    "Clnt": "Lucca de Neguinho",
    "Loja": ""
  },
  {
    "Id": 1756,
    "Clnt": "Fernando",
    "Loja": ""
  },
  {
    "Id": 1757,
    "Clnt": "Dudu 360",
    "Loja": ""
  },
  {
    "Id": 1758,
    "Clnt": "Orlando",
    "Loja": ""
  },
  {
    "Id": 1759,
    "Clnt": "JulioExcamozin",
    "Loja": ""
  },
  {
    "Id": 1760,
    "Clnt": "Polar Chups",
    "Loja": ""
  },
  {
    "Id": 1761,
    "Clnt": "RS água e Gas",
    "Loja": ""
  },
  {
    "Id": 1762,
    "Clnt": "Deyvison conexão SLM",
    "Loja": ""
  },
  {
    "Id": 1763,
    "Clnt": "Xandii",
    "Loja": ""
  },
  {
    "Id": 1764,
    "Clnt": "Everson ( Cova de Onça)",
    "Loja": ""
  },
  {
    "Id": 1765,
    "Clnt": "Biteupainho",
    "Loja": ""
  },
  {
    "Id": 1766,
    "Clnt": "Bilesinhodoscorte",
    "Loja": ""
  },
  {
    "Id": 1769,
    "Clnt": "cara do Adesivo do som",
    "Loja": ""
  },
  {
    "Id": 1771,
    "Clnt": "Nino",
    "Loja": ""
  },
  {
    "Id": 1778,
    "Clnt": "Cara do Estofado",
    "Loja": ""
  },
  {
    "Id": 1779,
    "Clnt": "Tassia",
    "Loja": ""
  },
  {
    "Id": 1780,
    "Clnt": "espaço lazer",
    "Loja": ""
  },
  {
    "Id": 1782,
    "Clnt": "Coroa Catamarã",
    "Loja": ""
  },
  {
    "Id": 1783,
    "Clnt": "Vânia",
    "Loja": ""
  },
  {
    "Id": 1784,
    "Clnt": "cap america",
    "Loja": ""
  },
  {
    "Id": 1785,
    "Clnt": "nono",
    "Loja": ""
  },
  {
    "Id": 1794,
    "Clnt": "Boyzinho novinho",
    "Loja": ""
  },
  {
    "Id": 1795,
    "Clnt": "Barbeiro de Ita",
    "Loja": ""
  },
  {
    "Id": 1796,
    "Clnt": "Boy do Cabelo Roxo",
    "Loja": ""
  },
  {
    "Id": 1797,
    "Clnt": "India",
    "Loja": ""
  },
  {
    "Id": 1799,
    "Clnt": "Colegio Desafio",
    "Loja": ""
  },
  {
    "Id": 1803,
    "Clnt": "Yuri",
    "Loja": ""
  },
  {
    "Id": 1804,
    "Clnt": "Romario",
    "Loja": ""
  },
  {
    "Id": 4000,
    "Clnt": "Eclesia Xavier",
    "Loja": ""
  },
  {
    "Id": 4001,
    "Clnt": "A.E Bike",
    "Loja": ""
  },
  {
    "Id": 4002,
    "Clnt": "Teleket",
    "Loja": ""
  },
  {
    "Id": 4003,
    "Clnt": "Lulinha",
    "Loja": ""
  },
  {
    "Id": 4004,
    "Clnt": "Mercado BemEstar",
    "Loja": ""
  },
  {
    "Id": 4005,
    "Clnt": "TMP transporte",
    "Loja": ""
  },
  {
    "Id": 4006,
    "Clnt": "Ana Paula",
    "Loja": ""
  },
  {
    "Id": 4008,
    "Clnt": "Cara do Peixe",
    "Loja": ""
  },
  {
    "Id": 4009,
    "Clnt": "Galego",
    "Loja": ""
  },
  {
    "Id": 4010,
    "Clnt": "Desconhecido Belin",
    "Loja": ""
  },
  {
    "Id": 4011,
    "Clnt": "Letra L",
    "Loja": ""
  },
  {
    "Id": 4012,
    "Clnt": "SG",
    "Loja": ""
  },
  {
    "Id": 4013,
    "Clnt": "Tia Dinha",
    "Loja": ""
  },
  {
    "Id": 4014,
    "Clnt": "Ernandes (Jr Moveis)",
    "Loja": ""
  },
  {
    "Id": 4015,
    "Clnt": "Bruno da Crosser",
    "Loja": ""
  },
  {
    "Id": 4016,
    "Clnt": "Henrique Piramide",
    "Loja": ""
  },
  {
    "Id": 4017,
    "Clnt": "Danny Explosão",
    "Loja": "Clone"
  },
  {
    "Id": 4018,
    "Clnt": "Linda Fashion",
    "Loja": ""
  },
  {
    "Id": 4020,
    "Clnt": "Gaucho",
    "Loja": ""
  },
  {
    "Id": 4021,
    "Clnt": "Boy Parece c/ Reino",
    "Loja": ""
  },
  {
    "Id": 4022,
    "Clnt": "Osvaldo",
    "Loja": ""
  },
  {
    "Id": 4023,
    "Clnt": "Hitalo PlayBoy",
    "Loja": ""
  },
  {
    "Id": 4024,
    "Clnt": "Kelvin",
    "Loja": ""
  },
  {
    "Id": 4025,
    "Clnt": "Regi Jato",
    "Loja": ""
  },
  {
    "Id": 4026,
    "Clnt": "Hitalo PlayBoy",
    "Loja": ""
  },
  {
    "Id": 4027,
    "Clnt": "Cara do Adesivo Roxo",
    "Loja": ""
  },
  {
    "Id": 4028,
    "Clnt": "Augusto Silva (Cantor)",
    "Loja": ""
  },
  {
    "Id": 4029,
    "Clnt": "Manu Maker",
    "Loja": ""
  },
  {
    "Id": 4030,
    "Clnt": "Lucas Barbeiro (de ITA)",
    "Loja": ""
  },
  {
    "Id": 4031,
    "Clnt": "Van Sonic",
    "Loja": ""
  },
  {
    "Id": 4032,
    "Clnt": "Claudio Vasos Ceramica",
    "Loja": ""
  },
  {
    "Id": 4033,
    "Clnt": "Flor do Luar",
    "Loja": ""
  },
  {
    "Id": 4034,
    "Clnt": "JuMedeiros",
    "Loja": ""
  },
  {
    "Id": 4036,
    "Clnt": "Bob Espoonja",
    "Loja": ""
  },
  {
    "Id": 4038,
    "Clnt": "Christopher ( Pizzaria)",
    "Loja": ""
  },
  {
    "Id": 4039,
    "Clnt": "Entregador de Lais",
    "Loja": ""
  },
  {
    "Id": 4040,
    "Clnt": "Hitalo PlayBoy",
    "Loja": ""
  },
  {
    "Id": 4041,
    "Clnt": "Marcela Arruda",
    "Loja": ""
  },
  {
    "Id": 4042,
    "Clnt": "Regi Jato",
    "Loja": ""
  },
  {
    "Id": 4043,
    "Clnt": "Josyas",
    "Loja": ""
  },
  {
    "Id": 4044,
    "Clnt": "Valeria",
    "Loja": ""
  },
  {
    "Id": 4045,
    "Clnt": "Igreja Laranja",
    "Loja": ""
  },
  {
    "Id": 4046,
    "Clnt": "Dalua",
    "Loja": ""
  },
  {
    "Id": 4047,
    "Clnt": "Mister Lanches",
    "Loja": ""
  },
  {
    "Id": 4048,
    "Clnt": "Amg Tropinha",
    "Loja": ""
  },
  {
    "Id": 4049,
    "Clnt": "Naldinho",
    "Loja": ""
  },
  {
    "Id": 4050,
    "Clnt": "igor 244",
    "Loja": ""
  },
  {
    "Id": 4051,
    "Clnt": "Fernando Onibus",
    "Loja": ""
  },
  {
    "Id": 4052,
    "Clnt": "GW",
    "Loja": ""
  },
  {
    "Id": 4053,
    "Clnt": "Linda Ellen",
    "Loja": ""
  },
  {
    "Id": 4054,
    "Clnt": "Tatiana Alves",
    "Loja": ""
  },
  {
    "Id": 4055,
    "Clnt": "SK",
    "Loja": ""
  },
  {
    "Id": 4056,
    "Clnt": "Ronaldo",
    "Loja": ""
  },
  {
    "Id": 4057,
    "Clnt": "Pisca",
    "Loja": ""
  },
  {
    "Id": 4058,
    "Clnt": "Migelito pra Vcs",
    "Loja": ""
  },
  {
    "Id": 4059,
    "Clnt": "Augusto Silva (Cantor)",
    "Loja": ""
  },
  {
    "Id": 4060,
    "Clnt": "Flor do Luar",
    "Loja": ""
  },
  {
    "Id": 4061,
    "Clnt": "Vanessa Açaí e Salada",
    "Loja": ""
  },
  {
    "Id": 4062,
    "Clnt": "Drocha Studio",
    "Loja": ""
  },
  {
    "Id": 4063,
    "Clnt": "Suh Pratas",
    "Loja": ""
  },
  {
    "Id": 4064,
    "Clnt": "Ernandes (Jr Moveis)",
    "Loja": ""
  },
  {
    "Id": 4065,
    "Clnt": "Icaro",
    "Loja": ""
  },
  {
    "Id": 4066,
    "Clnt": "Entregador Ifood",
    "Loja": ""
  },
  {
    "Id": 4067,
    "Clnt": "Amigo de Dadinho",
    "Loja": ""
  },
  {
    "Id": 4068,
    "Clnt": "Luizinho",
    "Loja": ""
  },
  {
    "Id": 4069,
    "Clnt": "Marcela Arruda",
    "Loja": ""
  },
  {
    "Id": 4070,
    "Clnt": "Kariny Alves",
    "Loja": "Van Sonic"
  },
  {
    "Id": 4071,
    "Clnt": "Guthyanne",
    "Loja": ""
  },
  {
    "Id": 4072,
    "Clnt": "Neide da Igreja",
    "Loja": ""
  },
  {
    "Id": 4073,
    "Clnt": "Neide da Igreja",
    "Loja": ""
  },
  {
    "Id": 4074,
    "Clnt": "VeryMarques",
    "Loja": ""
  },
  {
    "Id": 4075,
    "Clnt": "JS Turismo",
    "Loja": ""
  },
  {
    "Id": 4076,
    "Clnt": "G Burger",
    "Loja": ""
  },
  {
    "Id": 4077,
    "Clnt": "Lucas",
    "Loja": ""
  },
  {
    "Id": 4078,
    "Clnt": "Ernandes (Jr Moveis)",
    "Loja": ""
  },
  {
    "Id": 4079,
    "Clnt": "Maria Modas ",
    "Loja": ""
  },
  {
    "Id": 4080,
    "Clnt": "Laís Rodrigues ",
    "Loja": ""
  },
  {
    "Id": 4081,
    "Clnt": "Laís Rodrigues ",
    "Loja": ""
  },
  {
    "Id": 4083,
    "Clnt": "Lek Teleket",
    "Loja": ""
  },
  {
    "Id": 4085,
    "Clnt": "Thyfanny",
    "Loja": ""
  },
  {
    "Id": 4086,
    "Clnt": "Rosendo Gomes",
    "Loja": ""
  },
  {
    "Id": 4087,
    "Clnt": "Mercearia do Hilton ",
    "Loja": ""
  },
  {
    "Id": 4088,
    "Clnt": "Julinana",
    "Loja": ""
  },
  {
    "Id": 4089,
    "Clnt": "Lindoarte",
    "Loja": ""
  },
  {
    "Id": 4090,
    "Clnt": "Carlinhos",
    "Loja": ""
  },
  {
    "Id": 4091,
    "Clnt": "G Burger",
    "Loja": ""
  },
  {
    "Id": 4092,
    "Clnt": "Mulher do Banner Açaí",
    "Loja": ""
  },
  {
    "Id": 4093,
    "Clnt": "Nathy Unhas",
    "Loja": ""
  },
  {
    "Id": 4094,
    "Clnt": "Shok",
    "Loja": ""
  },
  {
    "Id": 4095,
    "Clnt": "LipeBurger",
    "Loja": ""
  },
  {
    "Id": 4096,
    "Clnt": "Shok",
    "Loja": ""
  },
  {
    "Id": 4097,
    "Clnt": "Abraão",
    "Loja": ""
  },
  {
    "Id": 4098,
    "Clnt": "A.F.CIA",
    "Loja": ""
  },
  {
    "Id": 4099,
    "Clnt": "Marcio do Armazén",
    "Loja": ""
  },
  {
    "Id": 4101,
    "Clnt": "Mercadinho Pe.Cicero",
    "Loja": ""
  },
  {
    "Id": 4102,
    "Clnt": "Rafael PedPano",
    "Loja": ""
  },
  {
    "Id": 4103,
    "Clnt": "PauloGonçalves",
    "Loja": ""
  },
  {
    "Id": 4104,
    "Clnt": "Gustavo Bruxo",
    "Loja": ""
  },
  {
    "Id": 4105,
    "Clnt": "W.Severino",
    "Loja": ""
  },
  {
    "Id": 4106,
    "Clnt": "Ninho",
    "Loja": ""
  },
  {
    "Id": 4108,
    "Clnt": "Alysson Galeto",
    "Loja": ""
  },
  {
    "Id": 4110,
    "Clnt": "Mithiele Junior",
    "Loja": ""
  },
  {
    "Id": 4111,
    "Clnt": "Sabor da Sula",
    "Loja": ""
  },
  {
    "Id": 4112,
    "Clnt": "Nono",
    "Loja": ""
  },
  {
    "Id": 4113,
    "Clnt": "Jonny ",
    "Loja": ""
  },
  {
    "Id": 4114,
    "Clnt": "SilvaFax",
    "Loja": ""
  },
  {
    "Id": 4115,
    "Clnt": "Icaro",
    "Loja": ""
  },
  {
    "Id": 4116,
    "Clnt": "Henrique Destaky",
    "Loja": ""
  },
  {
    "Id": 4117,
    "Clnt": "Junior e Lindomar",
    "Loja": ""
  },
  {
    "Id": 4118,
    "Clnt": "Brunna",
    "Loja": ""
  },
  {
    "Id": 4119,
    "Clnt": "Bianca Redufite",
    "Loja": ""
  },
  {
    "Id": 4120,
    "Clnt": "Galego",
    "Loja": ""
  },
  {
    "Id": 4122,
    "Clnt": "Lindoarte",
    "Loja": ""
  },
  {
    "Id": 4123,
    "Clnt": "Italo boyzinho",
    "Loja": ""
  },
  {
    "Id": 4124,
    "Clnt": "Swane Mendes",
    "Loja": ""
  },
  {
    "Id": 4125,
    "Clnt": "Toque Livre",
    "Loja": ""
  },
  {
    "Id": 4126,
    "Clnt": "Geka Pizza",
    "Loja": ""
  },
  {
    "Id": 4127,
    "Clnt": "McLK",
    "Loja": ""
  },
  {
    "Id": 4128,
    "Clnt": "DFA Adesivos",
    "Loja": ""
  },
  {
    "Id": 4129,
    "Clnt": "Suh Pratas",
    "Loja": ""
  },
  {
    "Id": 4131,
    "Clnt": "Swane Mendes",
    "Loja": ""
  },
  {
    "Id": 4132,
    "Clnt": "Guinga || Stefany",
    "Loja": ""
  },
  {
    "Id": 4133,
    "Clnt": "Thyfanny",
    "Loja": ""
  },
  {
    "Id": 4135,
    "Clnt": "Vitor Massa Delicia",
    "Loja": ""
  },
  {
    "Id": 4136,
    "Clnt": "Adilson mendes",
    "Loja": ""
  },
  {
    "Id": 4137,
    "Clnt": "Mercearia do Hilton ",
    "Loja": ""
  },
  {
    "Id": 4138,
    "Clnt": "Yuri",
    "Loja": ""
  },
  {
    "Id": 4139,
    "Clnt": "Dinho entregador de fernanda",
    "Loja": ""
  },
  {
    "Id": 4140,
    "Clnt": "Rafael Carlos",
    "Loja": ""
  },
  {
    "Id": 4141,
    "Clnt": "Sergio Transportes",
    "Loja": ""
  },
  {
    "Id": 4142,
    "Clnt": "Erivaldo Leleco Gelip",
    "Loja": ""
  },
  {
    "Id": 4143,
    "Clnt": "Orlando",
    "Loja": ""
  },
  {
    "Id": 4144,
    "Clnt": "Italo boyzinho",
    "Loja": ""
  },
  {
    "Id": 4145,
    "Clnt": "Ellcazo",
    "Loja": ""
  },
  {
    "Id": 4146,
    "Clnt": "Victor Carlos",
    "Loja": ""
  },
  {
    "Id": 4147,
    "Clnt": "Thyfanny",
    "Loja": ""
  },
  {
    "Id": 4148,
    "Clnt": "Will Motos",
    "Loja": ""
  },
  {
    "Id": 4149,
    "Clnt": "Quartel de Italo",
    "Loja": ""
  },
  {
    "Id": 4150,
    "Clnt": "Paulo Gonçalves",
    "Loja": ""
  },
  {
    "Id": 4151,
    "Clnt": "Gustavo Bruxo",
    "Loja": ""
  },
  {
    "Id": 4153,
    "Clnt": "Tubarão",
    "Loja": ""
  },
  {
    "Id": 4154,
    "Clnt": "Alex",
    "Loja": ""
  },
  {
    "Id": 4155,
    "Clnt": "Karlisson",
    "Loja": ""
  },
  {
    "Id": 4156,
    "Clnt": "Magnifico",
    "Loja": ""
  },
  {
    "Id": 4157,
    "Clnt": "Rogerio Lava Jato",
    "Loja": ""
  },
  {
    "Id": 4158,
    "Clnt": "Tubarão",
    "Loja": ""
  },
  {
    "Id": 4159,
    "Clnt": "Louan Richard",
    "Loja": "Autor Car"
  },
  {
    "Id": 4160,
    "Clnt": "Thuco",
    "Loja": ""
  },
  {
    "Id": 4161,
    "Clnt": "Lucas Rodrigo",
    "Loja": ""
  },
  {
    "Id": 4162,
    "Clnt": "Natalie",
    "Loja": ""
  },
  {
    "Id": 4163,
    "Clnt": "Josilda Escolar",
    "Loja": ""
  },
  {
    "Id": 4164,
    "Clnt": "igor 244",
    "Loja": ""
  },
  {
    "Id": 4165,
    "Clnt": "Brunna",
    "Loja": ""
  },
  {
    "Id": 4166,
    "Clnt": "Lindoarte",
    "Loja": ""
  },
  {
    "Id": 4167,
    "Clnt": "Padrasto Tarantula",
    "Loja": ""
  },
  {
    "Id": 4168,
    "Clnt": "Pisca",
    "Loja": ""
  },
  {
    "Id": 4170,
    "Clnt": "Pietro",
    "Loja": ""
  },
  {
    "Id": 4171,
    "Clnt": "Iasmim (A Burguesinha)",
    "Loja": ""
  },
  {
    "Id": 4172,
    "Clnt": "Jailson Chaveiro",
    "Loja": ""
  },
  {
    "Id": 4173,
    "Clnt": "Luiz Fernando",
    "Loja": ""
  },
  {
    "Id": 4175,
    "Clnt": "Gilho",
    "Loja": ""
  },
  {
    "Id": 4176,
    "Clnt": "Xandi",
    "Loja": ""
  },
  {
    "Id": 4177,
    "Clnt": "DJ Battata",
    "Loja": ""
  },
  {
    "Id": 4178,
    "Clnt": "igor 244",
    "Loja": ""
  },
  {
    "Id": 4179,
    "Clnt": "Iasmim (A Burguesinha)",
    "Loja": ""
  },
  {
    "Id": 4181,
    "Clnt": "Wandeson Pixe",
    "Loja": ""
  },
  {
    "Id": 4182,
    "Clnt": "Polar Chups",
    "Loja": ""
  },
  {
    "Id": 4184,
    "Clnt": "Jailson Van",
    "Loja": ""
  },
  {
    "Id": 4185,
    "Clnt": "Guismarino",
    "Loja": ""
  },
  {
    "Id": 4187,
    "Clnt": "Suh Pratas",
    "Loja": ""
  },
  {
    "Id": 4189,
    "Clnt": "Dayvson Deposito e Fogos",
    "Loja": ""
  },
  {
    "Id": 4190,
    "Clnt": "Wesley",
    "Loja": ""
  },
  {
    "Id": 4191,
    "Clnt": "Xandi",
    "Loja": ""
  },
  {
    "Id": 4192,
    "Clnt": "Boys de Farda",
    "Loja": ""
  },
  {
    "Id": 4194,
    "Clnt": "Mulher da igreja",
    "Loja": ""
  },
  {
    "Id": 4195,
    "Clnt": "Bateria Heliar",
    "Loja": ""
  },
  {
    "Id": 4196,
    "Clnt": "Gago Motos",
    "Loja": ""
  },
  {
    "Id": 4197,
    "Clnt": "Analice",
    "Loja": ""
  },
  {
    "Id": 4198,
    "Clnt": "Amigo de Gilerme",
    "Loja": ""
  },
  {
    "Id": 4199,
    "Clnt": "Thifanny",
    "Loja": ""
  },
  {
    "Id": 4200,
    "Clnt": "Thais FS",
    "Loja": ""
  },
  {
    "Id": 4202,
    "Clnt": "Auto Coserto",
    "Loja": ""
  },
  {
    "Id": 4203,
    "Clnt": "Tia Fia",
    "Loja": ""
  },
  {
    "Id": 4204,
    "Clnt": "Fonte da Banana",
    "Loja": ""
  },
  {
    "Id": 4205,
    "Clnt": "Entregador",
    "Loja": ""
  },
  {
    "Id": 4206,
    "Clnt": "Toque Livre",
    "Loja": ""
  },
  {
    "Id": 4207,
    "Clnt": "Elias Frete",
    "Loja": ""
  },
  {
    "Id": 4208,
    "Clnt": "Thiago Cachorrão TR",
    "Loja": ""
  },
  {
    "Id": 4209,
    "Clnt": "Lion Burger",
    "Loja": ""
  },
  {
    "Id": 4210,
    "Clnt": "HMG",
    "Loja": ""
  },
  {
    "Id": 4211,
    "Clnt": "Uber Carro Branco",
    "Loja": ""
  },
  {
    "Id": 4212,
    "Clnt": "Boy Novinho do Reserva",
    "Loja": ""
  },
  {
    "Id": 4213,
    "Clnt": "G Burger",
    "Loja": ""
  },
  {
    "Id": 4214,
    "Clnt": "Danny Explosão",
    "Loja": "Clone"
  },
  {
    "Id": 4215,
    "Clnt": "Miguelito pra Vcs",
    "Loja": ""
  },
  {
    "Id": 4216,
    "Clnt": "Coroa da Kombi",
    "Loja": ""
  },
  {
    "Id": 4217,
    "Clnt": "Iasmim (A Burguesinha)",
    "Loja": ""
  },
  {
    "Id": 4218,
    "Clnt": "Gael 244",
    "Loja": ""
  },
  {
    "Id": 4219,
    "Clnt": "Lindoarte",
    "Loja": ""
  },
  {
    "Id": 4220,
    "Clnt": "Miguelito pra Vcs",
    "Loja": ""
  },
  {
    "Id": 4221,
    "Clnt": "Lek Teleket",
    "Loja": ""
  },
  {
    "Id": 4222,
    "Clnt": "Nordeste Graff",
    "Loja": ""
  },
  {
    "Id": 4225,
    "Clnt": "Rayane Gomes (+55 81 9599-4621)",
    "Loja": ""
  },
  {
    "Id": 4226,
    "Clnt": "Edcarlos Santos",
    "Loja": ""
  },
  {
    "Id": 4227,
    "Clnt": "Lek Teleket",
    "Loja": ""
  },
  {
    "Id": 4228,
    "Clnt": "Emo",
    "Loja": ""
  },
  {
    "Id": 4229,
    "Clnt": "Joana",
    "Loja": ""
  },
  {
    "Id": 4230,
    "Clnt": "Panificadora Ponto Certo",
    "Loja": ""
  },
  {
    "Id": 4231,
    "Clnt": "McLK",
    "Loja": ""
  },
  {
    "Id": 4233,
    "Clnt": "ASP Distribuidora",
    "Loja": ""
  },
  {
    "Id": 4234,
    "Clnt": "Breno ",
    "Loja": ""
  },
  {
    "Id": 4235,
    "Clnt": "Miminho",
    "Loja": ""
  },
  {
    "Id": 4236,
    "Clnt": "Pek Bebidas",
    "Loja": ""
  },
  {
    "Id": 4237,
    "Clnt": "DJ Batatta",
    "Loja": ""
  },
  {
    "Id": 4238,
    "Clnt": "Brunna Nal",
    "Loja": ""
  },
  {
    "Id": 4239,
    "Clnt": "Brunna",
    "Loja": ""
  },
  {
    "Id": 4240,
    "Clnt": "Rodrigo Por do Sol",
    "Loja": ""
  },
  {
    "Id": 4241,
    "Clnt": "Maycon",
    "Loja": ""
  },
  {
    "Id": 4242,
    "Clnt": "Joãozinho amigo de Gui",
    "Loja": ""
  },
  {
    "Id": 4243,
    "Clnt": "Eduardo DUDU",
    "Loja": ""
  },
  {
    "Id": 4244,
    "Clnt": "Gordinho da Bross",
    "Loja": ""
  },
  {
    "Id": 4245,
    "Clnt": "Regi",
    "Loja": ""
  },
  {
    "Id": 4246,
    "Clnt": "Panificadora Ponto Certo",
    "Loja": ""
  },
  {
    "Id": 4247,
    "Clnt": "Nono",
    "Loja": ""
  },
  {
    "Id": 4248,
    "Clnt": "Rubinho",
    "Loja": ""
  },
  {
    "Id": 4249,
    "Clnt": "Conexão SLM",
    "Loja": ""
  },
  {
    "Id": 4250,
    "Clnt": "Adilson mendes",
    "Loja": ""
  },
  {
    "Id": 4251,
    "Clnt": "Janio Callebe",
    "Loja": ""
  },
  {
    "Id": 4252,
    "Clnt": "Josilda Escolar",
    "Loja": ""
  },
  {
    "Id": 4253,
    "Clnt": "Anderson Romeu",
    "Loja": ""
  },
  {
    "Id": 4254,
    "Clnt": "Bernado",
    "Loja": ""
  },
  {
    "Id": 4255,
    "Clnt": "Icaro",
    "Loja": ""
  },
  {
    "Id": 4256,
    "Clnt": "kaike",
    "Loja": ""
  },
  {
    "Id": 4257,
    "Clnt": "Adilson Mendes",
    "Loja": ""
  },
  {
    "Id": 4258,
    "Clnt": "Henrique Fedorento",
    "Loja": ""
  },
  {
    "Id": 4259,
    "Clnt": "Funeraria Edilza",
    "Loja": ""
  },
  {
    "Id": 4260,
    "Clnt": "Jailson Van",
    "Loja": ""
  },
  {
    "Id": 4261,
    "Clnt": "Gustavo 244",
    "Loja": ""
  },
  {
    "Id": 4262,
    "Clnt": "Miminho Cortes",
    "Loja": ""
  },
  {
    "Id": 4263,
    "Clnt": "Auto Car",
    "Loja": ""
  },
  {
    "Id": 4264,
    "Clnt": "João Anderson",
    "Loja": ""
  },
  {
    "Id": 4265,
    "Clnt": "Robson",
    "Loja": ""
  },
  {
    "Id": 4266,
    "Clnt": "Fernanda",
    "Loja": "Bar de Bel"
  },
  {
    "Id": 4267,
    "Clnt": "Gabriel244 (Parece antheus)",
    "Loja": ""
  },
  {
    "Id": 4269,
    "Clnt": "Kalinny",
    "Loja": ""
  },
  {
    "Id": 4270,
    "Clnt": "Lipe Burger",
    "Loja": ""
  },
  {
    "Id": 4272,
    "Clnt": "Ademir",
    "Loja": ""
  },
  {
    "Id": 4273,
    "Clnt": "Tiago",
    "Loja": ""
  },
  {
    "Id": 4274,
    "Clnt": "Ale Oliveira",
    "Loja": ""
  },
  {
    "Id": 4275,
    "Clnt": "Lulinha",
    "Loja": ""
  },
  {
    "Id": 4276,
    "Clnt": "Lucena",
    "Loja": ""
  },
  {
    "Id": 4277,
    "Clnt": "Polar Chups",
    "Loja": ""
  },
  {
    "Id": 4278,
    "Clnt": "Edna Guarani",
    "Loja": ""
  },
  {
    "Id": 4279,
    "Clnt": "Thyfanny",
    "Loja": ""
  },
  {
    "Id": 4280,
    "Clnt": "É O Neguinho O Óleo Diese",
    "Loja": ""
  },
  {
    "Id": 4281,
    "Clnt": "Regi Desmanche",
    "Loja": ""
  },
  {
    "Id": 4282,
    "Clnt": "juana Darc",
    "Loja": ""
  },
  {
    "Id": 4283,
    "Clnt": "Pagode",
    "Loja": ""
  },
  {
    "Id": 4284,
    "Clnt": "Dj Paredinha",
    "Loja": ""
  },
  {
    "Id": 4285,
    "Clnt": "Colombiano",
    "Loja": ""
  },
  {
    "Id": 4286,
    "Clnt": "Duda Vieira",
    "Loja": ""
  },
  {
    "Id": 4287,
    "Clnt": "Analice",
    "Loja": ""
  },
  {
    "Id": 4288,
    "Clnt": "Joana",
    "Loja": ""
  },
  {
    "Id": 4290,
    "Clnt": "Tubarão Atualizações",
    "Loja": ""
  },
  {
    "Id": 4292,
    "Clnt": "Techmap Topografia",
    "Loja": ""
  },
  {
    "Id": 4293,
    "Clnt": "Ubir",
    "Loja": ""
  },
  {
    "Id": 4294,
    "Clnt": "Inová",
    "Loja": ""
  },
  {
    "Id": 4295,
    "Clnt": "Lucas Rodoufo",
    "Loja": ""
  },
  {
    "Id": 4296,
    "Clnt": "Boa Net Turbo",
    "Loja": ""
  },
  {
    "Id": 4297,
    "Clnt": "Sua Prata",
    "Loja": ""
  },
  {
    "Id": 4298,
    "Clnt": "Pedrinho244",
    "Loja": ""
  },
  {
    "Id": 4299,
    "Clnt": "Mago244",
    "Loja": ""
  },
  {
    "Id": 4300,
    "Clnt": "Fagner Doblo",
    "Loja": ""
  },
  {
    "Id": 4301,
    "Clnt": "Day",
    "Loja": ""
  },
  {
    "Id": 4302,
    "Clnt": "Raphael Martins",
    "Loja": ""
  },
  {
    "Id": 4303,
    "Clnt": "Kalline do Job",
    "Loja": ""
  },
  {
    "Id": 4305,
    "Clnt": "cara da tatuagem",
    "Loja": ""
  },
  {
    "Id": 4306,
    "Clnt": "Pedrinho",
    "Loja": ""
  },
  {
    "Id": 4307,
    "Clnt": "Cabeça Jato",
    "Loja": ""
  },
  {
    "Id": 4308,
    "Clnt": "Anderson Silva",
    "Loja": ""
  },
  {
    "Id": 4309,
    "Clnt": "Anderson Silva",
    "Loja": ""
  },
  {
    "Id": 4310,
    "Clnt": "Jailson Van",
    "Loja": ""
  },
  {
    "Id": 4312,
    "Clnt": "Gael 244",
    "Loja": ""
  },
  {
    "Id": 4313,
    "Clnt": "Sthefany",
    "Loja": ""
  },
  {
    "Id": 4314,
    "Clnt": "Edson Master Streaming",
    "Loja": ""
  },
  {
    "Id": 4315,
    "Clnt": "Kombeiro amg Cidrak",
    "Loja": ""
  },
  {
    "Id": 4316,
    "Clnt": "Paulo Gonçalves",
    "Loja": ""
  },
  {
    "Id": 4317,
    "Clnt": "Regi Jato",
    "Loja": ""
  },
  {
    "Id": 4319,
    "Clnt": "Tio de Dadinho",
    "Loja": ""
  },
  {
    "Id": 4320,
    "Clnt": "Naiara",
    "Loja": ""
  },
  {
    "Id": 4321,
    "Clnt": "Lucas Barbeiro",
    "Loja": ""
  },
  {
    "Id": 4322,
    "Clnt": "Pedro",
    "Loja": ""
  },
  {
    "Id": 4323,
    "Clnt": "Julio Xcamozinho",
    "Loja": ""
  },
  {
    "Id": 4324,
    "Clnt": "Disinho",
    "Loja": ""
  },
  {
    "Id": 4325,
    "Clnt": "MS Transporte",
    "Loja": ""
  },
  {
    "Id": 4327,
    "Clnt": "DJ Battata",
    "Loja": ""
  },
  {
    "Id": 4328,
    "Clnt": "Alfredo",
    "Loja": ""
  },
  {
    "Id": 4329,
    "Clnt": "Wesley Orbia",
    "Loja": ""
  },
  {
    "Id": 4332,
    "Clnt": "Dona Lú",
    "Loja": ""
  },
  {
    "Id": 4333,
    "Clnt": "Dayvison ",
    "Loja": ""
  },
  {
    "Id": 4334,
    "Clnt": "Jailson Chaveiro",
    "Loja": ""
  },
  {
    "Id": 4336,
    "Clnt": "Sergio Figurinha",
    "Loja": ""
  },
  {
    "Id": 4337,
    "Clnt": "Val Fretes",
    "Loja": ""
  },
  {
    "Id": 4338,
    "Clnt": "Isaque da Kombi",
    "Loja": ""
  },
  {
    "Id": 4339,
    "Clnt": "Galedo Entregador",
    "Loja": ""
  },
  {
    "Id": 4340,
    "Clnt": "Desconhecido",
    "Loja": ""
  },
  {
    "Id": 4342,
    "Clnt": "Banner de Familia",
    "Loja": ""
  },
  {
    "Id": 4343,
    "Clnt": "David",
    "Loja": ""
  },
  {
    "Id": 4344,
    "Clnt": "Chirley Amancio",
    "Loja": ""
  },
  {
    "Id": 4345,
    "Clnt": "Gasparzinho",
    "Loja": ""
  },
  {
    "Id": 4346,
    "Clnt": "Egledson",
    "Loja": ""
  },
  {
    "Id": 4347,
    "Clnt": "Anderson feioso do oião",
    "Loja": ""
  },
  {
    "Id": 4348,
    "Clnt": "Cara do Sjorge amg tony",
    "Loja": ""
  },
  {
    "Id": 4349,
    "Clnt": "Anderson feioso do oião",
    "Loja": ""
  },
  {
    "Id": 4350,
    "Clnt": "Th doido",
    "Loja": ""
  },
  {
    "Id": 4351,
    "Clnt": "Gasparzinho",
    "Loja": ""
  },
  {
    "Id": 4352,
    "Clnt": "Filipe",
    "Loja": ""
  },
  {
    "Id": 4353,
    "Clnt": "Willker",
    "Loja": ""
  },
  {
    "Id": 4354,
    "Clnt": "Nicolas da cg125",
    "Loja": ""
  },
  {
    "Id": 4355,
    "Clnt": "Edson Fenix macenaria",
    "Loja": ""
  },
  {
    "Id": 4356,
    "Clnt": "Elias José",
    "Loja": ""
  },
  {
    "Id": 4358,
    "Clnt": "Chirley Amancio",
    "Loja": ""
  },
  {
    "Id": 4359,
    "Clnt": "Duduzinho",
    "Loja": ""
  },
  {
    "Id": 4360,
    "Clnt": "Paulo Gonçalves",
    "Loja": ""
  },
  {
    "Id": 4361,
    "Clnt": "igor 244",
    "Loja": ""
  },
  {
    "Id": 4362,
    "Clnt": "Kauã",
    "Loja": ""
  },
  {
    "Id": 4364,
    "Clnt": "DS Baterias",
    "Loja": ""
  },
  {
    "Id": 4366,
    "Clnt": "Rayane",
    "Loja": "Monte Aqui"
  },
  {
    "Id": 4367,
    "Clnt": "Car Studio",
    "Loja": ""
  },
  {
    "Id": 4368,
    "Clnt": "Elinude",
    "Loja": ""
  },
  {
    "Id": 4370,
    "Clnt": "Danny",
    "Loja": "Explosão do Sabor"
  },
  {
    "Id": 4371,
    "Clnt": "Filipe da CG Peixe",
    "Loja": ""
  },
  {
    "Id": 4372,
    "Clnt": "Eduardo",
    "Loja": ""
  },
  {
    "Id": 4373,
    "Clnt": "Louan",
    "Loja": "Auto Car"
  },
  {
    "Id": 4375,
    "Clnt": "Cristian",
    "Loja": ""
  },
  {
    "Id": 4376,
    "Clnt": "Massa Delicia",
    "Loja": ""
  },
  {
    "Id": 4377,
    "Clnt": "Iasmim",
    "Loja": ""
  },
  {
    "Id": 4378,
    "Clnt": "Nildo Motos",
    "Loja": ""
  },
  {
    "Id": 4379,
    "Clnt": "cara da Hamburegeria",
    "Loja": ""
  },
  {
    "Id": 4380,
    "Clnt": "Padaria GW",
    "Loja": ""
  },
  {
    "Id": 4381,
    "Clnt": "Klebson Guedes",
    "Loja": ""
  },
  {
    "Id": 4382,
    "Clnt": "Henrique Fedorento",
    "Loja": ""
  },
  {
    "Id": 4383,
    "Clnt": "Nildo Motos (Lucas Barbeiro)",
    "Loja": ""
  },
  {
    "Id": 4384,
    "Clnt": "Eurikvendeu",
    "Loja": ""
  },
  {
    "Id": 5000,
    "Clnt": "",
    "Loja": ""
  },
  {
    "Id": 5010,
    "Clnt": "Sofh",
    "Loja": ""
  },
  {
    "Id": 5011,
    "Clnt": "Anderson Medeiros",
    "Loja": ""
  },
  {
    "Id": 5012,
    "Clnt": "",
    "Loja": ""
  },
  {
    "Id": 5013,
    "Clnt": "",
    "Loja": ""
  },
  {
    "Id": 5014,
    "Clnt": "",
    "Loja": ""
  },
  {
    "Id": 5015,
    "Clnt": "",
    "Loja": ""
  },
  {
    "Id": 5016,
    "Clnt": "Cara Motoboy",
    "Loja": ""
  },
  {
    "Id": 5017,
    "Clnt": "Hilton",
    "Loja": ""
  },
  {
    "Id": 5018,
    "Clnt": "kaua vitor",
    "Loja": ""
  },
  {
    "Id": 5019,
    "Clnt": "Engenharia",
    "Loja": ""
  },
  {
    "Id": 5020,
    "Clnt": "Manu",
    "Loja": ""
  },
  {
    "Id": 5021,
    "Clnt": "Jaime",
    "Loja": ""
  },
  {
    "Id": 5022,
    "Clnt": "Mariachic",
    "Loja": ""
  },
  {
    "Id": 5023,
    "Clnt": "MotoUber",
    "Loja": ""
  },
  {
    "Id": 5024,
    "Clnt": "Agnaldo",
    "Loja": ""
  },
  {
    "Id": 5026,
    "Clnt": "Pé na Ilha",
    "Loja": ""
  },
  {
    "Id": 5028,
    "Clnt": "Figuinha",
    "Loja": ""
  },
  {
    "Id": 5030,
    "Clnt": "Kauã",
    "Loja": ""
  },
  {
    "Id": 5031,
    "Clnt": "Marcelo",
    "Loja": ""
  },
  {
    "Id": 5032,
    "Clnt": "Stay Clean",
    "Loja": ""
  },
  {
    "Id": 5033,
    "Clnt": "Camila Maria",
    "Loja": ""
  },
  {
    "Id": 5034,
    "Clnt": "Tefinho",
    "Loja": ""
  },
  {
    "Id": 5035,
    "Clnt": "Igo Fumê",
    "Loja": ""
  },
  {
    "Id": 5036,
    "Clnt": "Icaro",
    "Loja": ""
  },
  {
    "Id": 5037,
    "Clnt": "Joel Guilhermino",
    "Loja": ""
  },
  {
    "Id": 5038,
    "Clnt": "Trailer Burger",
    "Loja": ""
  },
  {
    "Id": 5039,
    "Clnt": "Marcelo",
    "Loja": "Profundos Hotel"
  },
  {
    "Id": 5040,
    "Clnt": "Galego da Bucha",
    "Loja": ""
  },
  {
    "Id": 5041,
    "Clnt": "Lindoarte",
    "Loja": ""
  },
  {
    "Id": 5042,
    "Clnt": "Rykewmy Ekton",
    "Loja": ""
  },
  {
    "Id": 5044,
    "Clnt": "Geane Santos",
    "Loja": ""
  },
  {
    "Id": 5045,
    "Clnt": "Vinicius",
    "Loja": ""
  },
  {
    "Id": 5046,
    "Clnt": "Oscar Leite",
    "Loja": ""
  },
  {
    "Id": 5047,
    "Clnt": "Laissa",
    "Loja": ""
  },
  {
    "Id": 5048,
    "Clnt": "Vila Brasil",
    "Loja": ""
  },
  {
    "Id": 5049,
    "Clnt": "Icaro",
    "Loja": ""
  },
  {
    "Id": 5050,
    "Clnt": "Serralharia Pai e Filho",
    "Loja": ""
  },
  {
    "Id": 5051,
    "Clnt": "Paulo Lopes",
    "Loja": ""
  },
  {
    "Id": 5052,
    "Clnt": "Coroa da Hilux",
    "Loja": ""
  },
  {
    "Id": 5053,
    "Clnt": "Luccas Barbeiro",
    "Loja": ""
  },
  {
    "Id": 5054,
    "Clnt": "Hitalo ",
    "Loja": ""
  },
  {
    "Id": 5055,
    "Clnt": "Hélia Leão",
    "Loja": ""
  },
  {
    "Id": 5056,
    "Clnt": "Johnata Paixão",
    "Loja": ""
  },
  {
    "Id": 5057,
    "Clnt": "Paulo Gonçalves",
    "Loja": ""
  },
  {
    "Id": 5058,
    "Clnt": "Fabrício Geladeira",
    "Loja": ""
  },
  {
    "Id": 5059,
    "Clnt": "Liliane Rodrigues",
    "Loja": ""
  },
  {
    "Id": 5060,
    "Clnt": "Paulo Lopes",
    "Loja": ""
  },
  {
    "Id": 5061,
    "Clnt": "Magnifico",
    "Loja": ""
  },
  {
    "Id": 5062,
    "Clnt": "Auto Concerto",
    "Loja": ""
  },
  {
    "Id": 5063,
    "Clnt": "Luciano Souza (Ônibus)",
    "Loja": ""
  },
  {
    "Id": 5064,
    "Clnt": "Cynthia Petshop",
    "Loja": ""
  },
  {
    "Id": 5066,
    "Clnt": "Migelito pra Vcs",
    "Loja": ""
  },
  {
    "Id": 5067,
    "Clnt": "natan filho de naum",
    "Loja": ""
  },
  {
    "Id": 5068,
    "Clnt": "Naldinho Burger",
    "Loja": ""
  },
  {
    "Id": 5069,
    "Clnt": "Chirley Amancio",
    "Loja": ""
  },
  {
    "Id": 5070,
    "Clnt": "Vinicius trailer",
    "Loja": ""
  },
  {
    "Id": 5071,
    "Clnt": "Airton Souza",
    "Loja": ""
  },
  {
    "Id": 5072,
    "Clnt": "Joalisson",
    "Loja": ""
  },
  {
    "Id": 5074,
    "Clnt": "edvaldo",
    "Loja": ""
  },
  {
    "Id": 5075,
    "Clnt": "klebson guedes",
    "Loja": ""
  },
  {
    "Id": 5076,
    "Clnt": "barbearia victor",
    "Loja": ""
  },
  {
    "Id": 5077,
    "Clnt": "Douglas",
    "Loja": ""
  },
  {
    "Id": 5078,
    "Clnt": "joel",
    "Loja": ""
  },
  {
    "Id": 5079,
    "Clnt": "Boy da oreia grande",
    "Loja": ""
  },
  {
    "Id": 5080,
    "Clnt": "Lype Stoned2",
    "Loja": ""
  },
  {
    "Id": 5081,
    "Clnt": "cliente",
    "Loja": ""
  },
  {
    "Id": 5082,
    "Clnt": "Central De Serviços",
    "Loja": ""
  },
  {
    "Id": 5083,
    "Clnt": "Juan",
    "Loja": ""
  },
  {
    "Id": 5084,
    "Clnt": "Julio Xcamozin",
    "Loja": ""
  },
  {
    "Id": 5085,
    "Clnt": "Laissa",
    "Loja": ""
  },
  {
    "Id": 5086,
    "Clnt": "Bruna Trufados",
    "Loja": ""
  },
  {
    "Id": 5087,
    "Clnt": "Zezinho (José Ferreira)",
    "Loja": ""
  },
  {
    "Id": 5088,
    "Clnt": "Salomão",
    "Loja": ""
  },
  {
    "Id": 5089,
    "Clnt": "Claudio ",
    "Loja": ""
  },
  {
    "Id": 5090,
    "Clnt": "Tubarão Atualizações",
    "Loja": ""
  },
  {
    "Id": 5091,
    "Clnt": "Duduzinho",
    "Loja": ""
  },
  {
    "Id": 5092,
    "Clnt": "Terfinho",
    "Loja": ""
  },
  {
    "Id": 5093,
    "Clnt": "bruna Store",
    "Loja": ""
  },
  {
    "Id": 5094,
    "Clnt": "Gaiamum",
    "Loja": ""
  },
  {
    "Id": 5095,
    "Clnt": "Regi Desmanche",
    "Loja": ""
  },
  {
    "Id": 5096,
    "Clnt": "Betânia",
    "Loja": ""
  },
  {
    "Id": 5097,
    "Clnt": "Gaucho",
    "Loja": ""
  },
  {
    "Id": 5098,
    "Clnt": "sem nome",
    "Loja": ""
  },
  {
    "Id": 5099,
    "Clnt": "edson fretes ",
    "Loja": ""
  },
  {
    "Id": 5100,
    "Clnt": "bielzinhoducorte",
    "Loja": ""
  },
  {
    "Id": 5101,
    "Clnt": "Dodo",
    "Loja": ""
  },
  {
    "Id": 5102,
    "Clnt": "Anderson Camará",
    "Loja": "LIXO"
  },
  {
    "Id": 5103,
    "Clnt": "Mitthieloe Jr",
    "Loja": ""
  },
  {
    "Id": 5109,
    "Clnt": "isaias",
    "Loja": ""
  },
  {
    "Id": 5110,
    "Clnt": "amigo de tropinha",
    "Loja": ""
  },
  {
    "Id": 5111,
    "Clnt": "Entregador da ilha",
    "Loja": ""
  },
  {
    "Id": 5112,
    "Clnt": "silvano",
    "Loja": ""
  },
  {
    "Id": 5113,
    "Clnt": "lucas",
    "Loja": ""
  },
  {
    "Id": 5114,
    "Clnt": "Xica",
    "Loja": ""
  },
  {
    "Id": 5115,
    "Clnt": "Terra Viva",
    "Loja": ""
  },
  {
    "Id": 5116,
    "Clnt": "sem nome",
    "Loja": ""
  },
  {
    "Id": 5117,
    "Clnt": "joão",
    "Loja": ""
  },
  {
    "Id": 5118,
    "Clnt": "luiz",
    "Loja": ""
  },
  {
    "Id": 5119,
    "Clnt": "willian",
    "Loja": ""
  },
  {
    "Id": 5120,
    "Clnt": "sem nome",
    "Loja": ""
  },
  {
    "Id": 5121,
    "Clnt": "macedo",
    "Loja": ""
  },
  {
    "Id": 5122,
    "Clnt": "fim soluções",
    "Loja": ""
  },
  {
    "Id": 5123,
    "Clnt": "cleonilda",
    "Loja": ""
  },
  {
    "Id": 5124,
    "Clnt": "alamys",
    "Loja": ""
  },
  {
    "Id": 5125,
    "Clnt": "Lupa Transportes",
    "Loja": ""
  },
  {
    "Id": 5126,
    "Clnt": "ailson",
    "Loja": ""
  },
  {
    "Id": 5127,
    "Clnt": "susan patricia",
    "Loja": ""
  },
  {
    "Id": 5128,
    "Clnt": "marinho",
    "Loja": ""
  },
  {
    "Id": 5129,
    "Clnt": "Paulinha",
    "Loja": ""
  },
  {
    "Id": 5130,
    "Clnt": "ingrid lima",
    "Loja": ""
  },
  {
    "Id": 5131,
    "Clnt": "linda hellen",
    "Loja": ""
  },
  {
    "Id": 5132,
    "Clnt": "kael",
    "Loja": ""
  },
  {
    "Id": 5134,
    "Clnt": "turz",
    "Loja": ""
  },
  {
    "Id": 5135,
    "Clnt": "nataly andrade",
    "Loja": ""
  },
  {
    "Id": 5136,
    "Clnt": "chefin",
    "Loja": ""
  },
  {
    "Id": 5137,
    "Clnt": "kaue",
    "Loja": ""
  },
  {
    "Id": 5138,
    "Clnt": "garota da massa pizza",
    "Loja": ""
  },
  {
    "Id": 5139,
    "Clnt": "val frete filho",
    "Loja": ""
  },
  {
    "Id": 5140,
    "Clnt": "henrique",
    "Loja": ""
  },
  {
    "Id": 5141,
    "Clnt": "andres",
    "Loja": ""
  },
  {
    "Id": 5142,
    "Clnt": "Renanzinho a Midia",
    "Loja": ""
  },
  {
    "Id": 5143,
    "Clnt": "Mauro Inox",
    "Loja": ""
  },
  {
    "Id": 5146,
    "Clnt": "Theus Burger",
    "Loja": ""
  },
  {
    "Id": 5147,
    "Clnt": "Biel Lopes",
    "Loja": ""
  },
  {
    "Id": 5148,
    "Clnt": "wemerson",
    "Loja": ""
  },
  {
    "Id": 5149,
    "Clnt": "wendehl",
    "Loja": ""
  },
  {
    "Id": 5150,
    "Clnt": "indigente",
    "Loja": ""
  },
  {
    "Id": 5151,
    "Clnt": "allan",
    "Loja": ""
  },
  {
    "Id": 5153,
    "Clnt": "sem nome",
    "Loja": ""
  },
  {
    "Id": 5154,
    "Clnt": "henrique",
    "Loja": ""
  },
  {
    "Id": 5155,
    "Clnt": "hitalo renam",
    "Loja": ""
  },
  {
    "Id": 5156,
    "Clnt": "Cara da Moto Tarantula",
    "Loja": ""
  },
  {
    "Id": 5157,
    "Clnt": "denilson",
    "Loja": ""
  },
  {
    "Id": 5158,
    "Clnt": "elinaldo filho",
    "Loja": ""
  },
  {
    "Id": 5159,
    "Clnt": "Bruno Primo",
    "Loja": ""
  },
  {
    "Id": 5160,
    "Clnt": "jão",
    "Loja": ""
  },
  {
    "Id": 5161,
    "Clnt": "Marcela Farmacia",
    "Loja": ""
  },
  {
    "Id": 5162,
    "Clnt": "ninguém",
    "Loja": ""
  },
  {
    "Id": 5163,
    "Clnt": "vitinho",
    "Loja": ""
  },
  {
    "Id": 5164,
    "Clnt": "nego de Dinha",
    "Loja": ""
  },
  {
    "Id": 5165,
    "Clnt": "Alexandre Melo",
    "Loja": ""
  },
  {
    "Id": 5166,
    "Clnt": "ane max",
    "Loja": ""
  },
  {
    "Id": 5167,
    "Clnt": "flavielly",
    "Loja": ""
  },
  {
    "Id": 5168,
    "Clnt": "Pedro",
    "Loja": ""
  },
  {
    "Id": 5169,
    "Clnt": "guiizinho",
    "Loja": ""
  },
  {
    "Id": 5170,
    "Clnt": "neto",
    "Loja": ""
  },
  {
    "Id": 5171,
    "Clnt": "jadyson santos",
    "Loja": ""
  },
  {
    "Id": 5172,
    "Clnt": "italo",
    "Loja": ""
  },
  {
    "Id": 5173,
    "Clnt": "alguém",
    "Loja": ""
  },
  {
    "Id": 5174,
    "Clnt": "serviço automotivo",
    "Loja": ""
  },
  {
    "Id": 5175,
    "Clnt": "Pedro",
    "Loja": ""
  },
  {
    "Id": 5176,
    "Clnt": "trailer lanches",
    "Loja": ""
  },
  {
    "Id": 5177,
    "Clnt": "Novo Sabor",
    "Loja": ""
  },
  {
    "Id": 5178,
    "Clnt": "Frei Migelin",
    "Loja": ""
  },
  {
    "Id": 5179,
    "Clnt": "lua",
    "Loja": ""
  },
  {
    "Id": 5180,
    "Clnt": "Cristian",
    "Loja": ""
  },
  {
    "Id": 5181,
    "Clnt": "thays souza",
    "Loja": ""
  },
  {
    "Id": 5182,
    "Clnt": "Boas Estetica",
    "Loja": ""
  },
  {
    "Id": 5183,
    "Clnt": "Rogerio Cimento",
    "Loja": ""
  },
  {
    "Id": 5184,
    "Clnt": "Talita TATA",
    "Loja": ""
  },
  {
    "Id": 5185,
    "Clnt": "Cara da Moto Tanque",
    "Loja": ""
  },
  {
    "Id": 5186,
    "Clnt": "Rodrigo cézar",
    "Loja": ""
  },
  {
    "Id": 5187,
    "Clnt": "day boy",
    "Loja": ""
  },
  {
    "Id": 5188,
    "Clnt": "weslley",
    "Loja": ""
  },
  {
    "Id": 5190,
    "Clnt": "Randeson",
    "Loja": ""
  },
  {
    "Id": 5191,
    "Clnt": "Peixe",
    "Loja": ""
  },
  {
    "Id": 5192,
    "Clnt": "leandro bananas",
    "Loja": ""
  },
  {
    "Id": 5193,
    "Clnt": "isac",
    "Loja": ""
  },
  {
    "Id": 5194,
    "Clnt": "Neto de Wilson",
    "Loja": ""
  },
  {
    "Id": 5195,
    "Clnt": "andré jose",
    "Loja": ""
  },
  {
    "Id": 5196,
    "Clnt": "Largar Burger",
    "Loja": ""
  },
  {
    "Id": 5200,
    "Clnt": "RAFAEL ",
    "Loja": ""
  },
  {
    "Id": 5201,
    "Clnt": "Lenildo",
    "Loja": ""
  },
  {
    "Id": 5202,
    "Clnt": "alguém",
    "Loja": ""
  },
  {
    "Id": 5203,
    "Clnt": "jefferson",
    "Loja": ""
  },
  {
    "Id": 5204,
    "Clnt": "gabriel",
    "Loja": ""
  },
  {
    "Id": 5205,
    "Clnt": "luana",
    "Loja": ""
  },
  {
    "Id": 5206,
    "Clnt": "geraldo",
    "Loja": ""
  },
  {
    "Id": 5207,
    "Clnt": "alexandre",
    "Loja": ""
  },
  {
    "Id": 5208,
    "Clnt": "Sol Lima",
    "Loja": ""
  },
  {
    "Id": 5210,
    "Clnt": "Wilderson",
    "Loja": ""
  },
  {
    "Id": 5211,
    "Clnt": "ana",
    "Loja": ""
  },
  {
    "Id": 5212,
    "Clnt": "andré luiz",
    "Loja": ""
  },
  {
    "Id": 5213,
    "Clnt": "Tata ",
    "Loja": ""
  },
  {
    "Id": 5214,
    "Clnt": "lara burguer",
    "Loja": ""
  },
  {
    "Id": 5215,
    "Clnt": "márcio",
    "Loja": ""
  },
  {
    "Id": 5216,
    "Clnt": "milson",
    "Loja": ""
  },
  {
    "Id": 5217,
    "Clnt": "pp",
    "Loja": ""
  },
  {
    "Id": 5218,
    "Clnt": "julio carvalho",
    "Loja": ""
  },
  {
    "Id": 5220,
    "Clnt": "motinha",
    "Loja": ""
  },
  {
    "Id": 5221,
    "Clnt": "suzana gomes",
    "Loja": ""
  },
  {
    "Id": 5223,
    "Clnt": "Pedrinho Cortes",
    "Loja": ""
  },
  {
    "Id": 5224,
    "Clnt": "lucas",
    "Loja": ""
  },
  {
    "Id": 5225,
    "Clnt": "detona",
    "Loja": ""
  },
  {
    "Id": 5228,
    "Clnt": "paulo madruga",
    "Loja": ""
  },
  {
    "Id": 5229,
    "Clnt": "dedera",
    "Loja": ""
  },
  {
    "Id": 5230,
    "Clnt": "cantinho do sabor",
    "Loja": ""
  },
  {
    "Id": 5231,
    "Clnt": "Higor",
    "Loja": ""
  },
  {
    "Id": 5232,
    "Clnt": "will Motos",
    "Loja": ""
  },
  {
    "Id": 5233,
    "Clnt": "leomar",
    "Loja": ""
  },
  {
    "Id": 5234,
    "Clnt": "paloma rodrigo",
    "Loja": ""
  },
  {
    "Id": 5235,
    "Clnt": "tia jana",
    "Loja": ""
  },
  {
    "Id": 5236,
    "Clnt": "italo reis",
    "Loja": ""
  },
  {
    "Id": 5237,
    "Clnt": "xande",
    "Loja": ""
  },
  {
    "Id": 5238,
    "Clnt": "sérgio turismo",
    "Loja": ""
  },
  {
    "Id": 5239,
    "Clnt": "Fernando",
    "Loja": ""
  },
  {
    "Id": 5241,
    "Clnt": "cabelo",
    "Loja": ""
  },
  {
    "Id": 5242,
    "Clnt": "vitor do grau",
    "Loja": ""
  },
  {
    "Id": 5243,
    "Clnt": "matheus",
    "Loja": ""
  },
  {
    "Id": 5244,
    "Clnt": "junior bala",
    "Loja": ""
  },
  {
    "Id": 5245,
    "Clnt": "mmm",
    "Loja": ""
  },
  {
    "Id": 5246,
    "Clnt": "Neto natam",
    "Loja": ""
  },
  {
    "Id": 5248,
    "Clnt": "outro",
    "Loja": ""
  },
  {
    "Id": 5249,
    "Clnt": "ana paula escolar",
    "Loja": ""
  },
  {
    "Id": 5251,
    "Clnt": "Erick Jefferson",
    "Loja": ""
  },
  {
    "Id": 5252,
    "Clnt": "Djalma",
    "Loja": ""
  },
  {
    "Id": 5253,
    "Clnt": "Eduarda Moura",
    "Loja": ""
  },
  {
    "Id": 5254,
    "Clnt": "Anderson Reis",
    "Loja": ""
  },
  {
    "Id": 5255,
    "Clnt": "Veronildo Frete",
    "Loja": ""
  },
  {
    "Id": 5256,
    "Clnt": "pão doce",
    "Loja": ""
  },
  {
    "Id": 5257,
    "Clnt": "lucas",
    "Loja": ""
  },
  {
    "Id": 5258,
    "Clnt": "pedro henrique",
    "Loja": ""
  },
  {
    "Id": 5259,
    "Clnt": "moto",
    "Loja": ""
  },
  {
    "Id": 5260,
    "Clnt": "policial",
    "Loja": ""
  },
  {
    "Id": 5261,
    "Clnt": "vitinho osascortes",
    "Loja": ""
  },
  {
    "Id": 5262,
    "Clnt": "jaqueline",
    "Loja": ""
  },
  {
    "Id": 5263,
    "Clnt": "israel",
    "Loja": ""
  },
  {
    "Id": 5264,
    "Clnt": "deyvid",
    "Loja": ""
  },
  {
    "Id": 5265,
    "Clnt": "Sandra ",
    "Loja": ""
  },
  {
    "Id": 5266,
    "Clnt": "menor5",
    "Loja": ""
  },
  {
    "Id": 5267,
    "Clnt": "lucas",
    "Loja": ""
  },
  {
    "Id": 5268,
    "Clnt": "JETSKI ",
    "Loja": ""
  },
  {
    "Id": 5269,
    "Clnt": "lucas",
    "Loja": ""
  },
  {
    "Id": 5270,
    "Clnt": "viny",
    "Loja": ""
  },
  {
    "Id": 5271,
    "Clnt": "liila",
    "Loja": ""
  },
  {
    "Id": 5273,
    "Clnt": "anderson Judô",
    "Loja": ""
  },
  {
    "Id": 5274,
    "Clnt": "Larissa Honorato",
    "Loja": ""
  },
  {
    "Id": 5275,
    "Clnt": "divinos burguer",
    "Loja": ""
  },
  {
    "Id": 5276,
    "Clnt": "Patricia Santos",
    "Loja": ""
  },
  {
    "Id": 5277,
    "Clnt": "Michelene",
    "Loja": ""
  },
  {
    "Id": 5279,
    "Clnt": "bianca",
    "Loja": ""
  },
  {
    "Id": 5280,
    "Clnt": "lis coutinho",
    "Loja": ""
  },
  {
    "Id": 5281,
    "Clnt": "Manuel das Maquinas",
    "Loja": ""
  },
  {
    "Id": 5282,
    "Clnt": "HMG",
    "Loja": ""
  },
  {
    "Id": 5287,
    "Clnt": "obito",
    "Loja": ""
  },
  {
    "Id": 5288,
    "Clnt": "suany",
    "Loja": ""
  },
  {
    "Id": 5289,
    "Clnt": "assuelia",
    "Loja": ""
  },
  {
    "Id": 5290,
    "Clnt": "inesistente",
    "Loja": ""
  },
  {
    "Id": 5291,
    "Clnt": "hélcia lima",
    "Loja": ""
  },
  {
    "Id": 5292,
    "Clnt": "michel",
    "Loja": ""
  },
  {
    "Id": 5293,
    "Clnt": "Alexandre souza",
    "Loja": ""
  },
  {
    "Id": 5295,
    "Clnt": "joao",
    "Loja": ""
  },
  {
    "Id": 5296,
    "Clnt": "crente",
    "Loja": ""
  },
  {
    "Id": 5297,
    "Clnt": "jefferson barros",
    "Loja": ""
  },
  {
    "Id": 5298,
    "Clnt": "tanque",
    "Loja": ""
  },
  {
    "Id": 5299,
    "Clnt": "Fenix Barbearia",
    "Loja": ""
  },
  {
    "Id": 5300,
    "Clnt": "amanda lins",
    "Loja": ""
  },
  {
    "Id": 5301,
    "Clnt": "andre luiz",
    "Loja": ""
  },
  {
    "Id": 5303,
    "Clnt": "Valeria Ribeiro",
    "Loja": ""
  },
  {
    "Id": 5306,
    "Clnt": "Rosival",
    "Loja": ""
  },
  {
    "Id": 5307,
    "Clnt": "Regina Davi",
    "Loja": ""
  },
  {
    "Id": 5309,
    "Clnt": "2 Boys",
    "Loja": ""
  },
  {
    "Id": 5310,
    "Clnt": "Kleber Role na City",
    "Loja": ""
  },
  {
    "Id": 5316,
    "Clnt": "O Bruxo",
    "Loja": ""
  },
  {
    "Id": 5317,
    "Clnt": "flex net",
    "Loja": ""
  },
  {
    "Id": 5318,
    "Clnt": "Galeguinho",
    "Loja": ""
  },
  {
    "Id": 5319,
    "Clnt": "wendinho",
    "Loja": ""
  },
  {
    "Id": 5320,
    "Clnt": "Francisco Nação",
    "Loja": ""
  },
  {
    "Id": 5321,
    "Clnt": "sementeira lima",
    "Loja": ""
  },
  {
    "Id": 5322,
    "Clnt": "rayane",
    "Loja": ""
  },
  {
    "Id": 5323,
    "Clnt": "jeferson",
    "Loja": ""
  },
  {
    "Id": 5324,
    "Clnt": "nado",
    "Loja": ""
  },
  {
    "Id": 5325,
    "Clnt": "jefersson",
    "Loja": ""
  },
  {
    "Id": 5326,
    "Clnt": "daniele freitas",
    "Loja": ""
  },
  {
    "Id": 5327,
    "Clnt": "azul",
    "Loja": ""
  },
  {
    "Id": 5328,
    "Clnt": "Aguinaldo",
    "Loja": ""
  },
  {
    "Id": 5329,
    "Clnt": "pedro",
    "Loja": ""
  },
  {
    "Id": 5330,
    "Clnt": "adonias",
    "Loja": ""
  },
  {
    "Id": 5331,
    "Clnt": "lukinhas",
    "Loja": ""
  },
  {
    "Id": 5332,
    "Clnt": "verde",
    "Loja": ""
  },
  {
    "Id": 5333,
    "Clnt": "Camila",
    "Loja": ""
  },
  {
    "Id": 5334,
    "Clnt": "uber",
    "Loja": ""
  },
  {
    "Id": 5335,
    "Clnt": "cyclone",
    "Loja": ""
  },
  {
    "Id": 5336,
    "Clnt": "italo silva",
    "Loja": ""
  },
  {
    "Id": 5337,
    "Clnt": "ismael",
    "Loja": ""
  },
  {
    "Id": 5338,
    "Clnt": "sementeira lima",
    "Loja": ""
  },
  {
    "Id": 5341,
    "Clnt": "brecho angel",
    "Loja": ""
  },
  {
    "Id": 5342,
    "Clnt": "gregory",
    "Loja": ""
  },
  {
    "Id": 5344,
    "Clnt": "bolo de pote",
    "Loja": ""
  },
  {
    "Id": 5345,
    "Clnt": "thays",
    "Loja": ""
  },
  {
    "Id": 5347,
    "Clnt": "leopoldo",
    "Loja": ""
  },
  {
    "Id": 5349,
    "Clnt": "nilton água",
    "Loja": ""
  },
  {
    "Id": 5350,
    "Clnt": "Otavio da Kombi",
    "Loja": ""
  },
  {
    "Id": 5351,
    "Clnt": "otavio",
    "Loja": ""
  },
  {
    "Id": 5352,
    "Clnt": "beleza cosmeticos",
    "Loja": ""
  },
  {
    "Id": 5353,
    "Clnt": "bike preta",
    "Loja": ""
  },
  {
    "Id": 5354,
    "Clnt": "paula moda",
    "Loja": ""
  },
  {
    "Id": 5355,
    "Clnt": "G burguer",
    "Loja": ""
  },
  {
    "Id": 5356,
    "Clnt": "Kezia e Lau #",
    "Loja": ""
  },
  {
    "Id": 5357,
    "Clnt": "Polar Chups",
    "Loja": ""
  },
  {
    "Id": 5358,
    "Clnt": "profeta",
    "Loja": ""
  },
  {
    "Id": 5360,
    "Clnt": "francisco smith",
    "Loja": ""
  },
  {
    "Id": 5361,
    "Clnt": "Givaldo",
    "Loja": ""
  },
  {
    "Id": 5376,
    "Clnt": "deyvison vitor",
    "Loja": ""
  },
  {
    "Id": 5377,
    "Clnt": "luckas tonny",
    "Loja": ""
  },
  {
    "Id": 5378,
    "Clnt": "lg",
    "Loja": ""
  },
  {
    "Id": 5379,
    "Clnt": "wendinho",
    "Loja": ""
  },
  {
    "Id": 5380,
    "Clnt": "dayane",
    "Loja": ""
  },
  {
    "Id": 5381,
    "Clnt": "amauri",
    "Loja": ""
  },
  {
    "Id": 5382,
    "Clnt": "laura tayza",
    "Loja": ""
  },
  {
    "Id": 5383,
    "Clnt": "Carlos",
    "Loja": ""
  },
  {
    "Id": 5384,
    "Clnt": "Gilvaldo Onibus",
    "Loja": ""
  },
  {
    "Id": 5385,
    "Clnt": "henrique eletricista",
    "Loja": ""
  },
  {
    "Id": 5386,
    "Clnt": "michael",
    "Loja": ""
  },
  {
    "Id": 5387,
    "Clnt": "homem",
    "Loja": ""
  },
  {
    "Id": 5388,
    "Clnt": "tia clarice",
    "Loja": ""
  },
  {
    "Id": 5389,
    "Clnt": "osascorte",
    "Loja": ""
  },
  {
    "Id": 5390,
    "Clnt": "wilamis",
    "Loja": ""
  },
  {
    "Id": 5391,
    "Clnt": "MD Açaí",
    "Loja": ""
  },
  {
    "Id": 5392,
    "Clnt": "lucas barbeiro",
    "Loja": ""
  },
  {
    "Id": 5393,
    "Clnt": "FeL locações",
    "Loja": ""
  },
  {
    "Id": 5394,
    "Clnt": "juliana vieira",
    "Loja": ""
  },
  {
    "Id": 5395,
    "Clnt": "weslley",
    "Loja": ""
  },
  {
    "Id": 5396,
    "Clnt": "boné",
    "Loja": ""
  },
  {
    "Id": 5397,
    "Clnt": "eduardinho",
    "Loja": ""
  },
  {
    "Id": 5399,
    "Clnt": "capacete azul",
    "Loja": ""
  },
  {
    "Id": 5400,
    "Clnt": "anderson",
    "Loja": ""
  },
  {
    "Id": 5402,
    "Clnt": "Eduardo Barbeiro",
    "Loja": ""
  },
  {
    "Id": 5403,
    "Clnt": "Luciano engenharia",
    "Loja": ""
  },
  {
    "Id": 5404,
    "Clnt": "Reinaldo",
    "Loja": ""
  },
  {
    "Id": 5405,
    "Clnt": "boys Moreno donzelo",
    "Loja": ""
  },
  {
    "Id": 5406,
    "Clnt": "Day Casada",
    "Loja": ""
  },
  {
    "Id": 5407,
    "Clnt": "Mateus",
    "Loja": ""
  },
  {
    "Id": 5408,
    "Clnt": "moto vermelha",
    "Loja": ""
  },
  {
    "Id": 5409,
    "Clnt": "fabiano",
    "Loja": ""
  },
  {
    "Id": 5410,
    "Clnt": "heitor",
    "Loja": ""
  },
  {
    "Id": 5411,
    "Clnt": "Lucas Gileade",
    "Loja": ""
  },
  {
    "Id": 5412,
    "Clnt": "conceição ceça",
    "Loja": ""
  },
  {
    "Id": 5413,
    "Clnt": "pedro",
    "Loja": ""
  },
  {
    "Id": 5414,
    "Clnt": "oculos",
    "Loja": ""
  },
  {
    "Id": 5415,
    "Clnt": "thays FS",
    "Loja": ""
  },
  {
    "Id": 5416,
    "Clnt": "funeraria arcoiris",
    "Loja": ""
  },
  {
    "Id": 5417,
    "Clnt": "kassio henrique",
    "Loja": ""
  },
  {
    "Id": 5418,
    "Clnt": "genilson",
    "Loja": ""
  },
  {
    "Id": 5419,
    "Clnt": "fernando Brasil Extremos",
    "Loja": ""
  },
  {
    "Id": 5420,
    "Clnt": "rodrigo",
    "Loja": ""
  },
  {
    "Id": 5421,
    "Clnt": "Lucas sativo",
    "Loja": ""
  },
  {
    "Id": 5422,
    "Clnt": "Ds barbearia",
    "Loja": ""
  },
  {
    "Id": 5423,
    "Clnt": "menino",
    "Loja": ""
  },
  {
    "Id": 5424,
    "Clnt": "D boy",
    "Loja": ""
  },
  {
    "Id": 5425,
    "Clnt": "Flávio refrigeração",
    "Loja": ""
  },
  {
    "Id": 5426,
    "Clnt": "mulher",
    "Loja": ""
  },
  {
    "Id": 5427,
    "Clnt": "DS Baterias",
    "Loja": ""
  },
  {
    "Id": 5428,
    "Clnt": "Edson colombiano",
    "Loja": ""
  },
  {
    "Id": 5429,
    "Clnt": "O Grego",
    "Loja": ""
  },
  {
    "Id": 5430,
    "Clnt": "joão Gabriel",
    "Loja": ""
  },
  {
    "Id": 5431,
    "Clnt": "Campeão Atacarejo",
    "Loja": ""
  },
  {
    "Id": 5432,
    "Clnt": "brasil",
    "Loja": ""
  },
  {
    "Id": 5433,
    "Clnt": "eduardo souza",
    "Loja": ""
  },
  {
    "Id": 5434,
    "Clnt": "cheirosinho",
    "Loja": ""
  },
  {
    "Id": 5435,
    "Clnt": "renato",
    "Loja": ""
  },
  {
    "Id": 5436,
    "Clnt": "jéssica andrade",
    "Loja": ""
  },
  {
    "Id": 5437,
    "Clnt": "preto",
    "Loja": ""
  },
  {
    "Id": 5438,
    "Clnt": "vermelho",
    "Loja": ""
  },
  {
    "Id": 5439,
    "Clnt": "ewerton monteiro",
    "Loja": ""
  },
  {
    "Id": 5440,
    "Clnt": "barbearia alves",
    "Loja": ""
  },
  {
    "Id": 5441,
    "Clnt": "mirian",
    "Loja": ""
  },
  {
    "Id": 5442,
    "Clnt": "BatCar",
    "Loja": ""
  },
  {
    "Id": 5443,
    "Clnt": "lucas",
    "Loja": ""
  },
  {
    "Id": 5444,
    "Clnt": "matheus",
    "Loja": ""
  },
  {
    "Id": 5445,
    "Clnt": "jose",
    "Loja": ""
  },
  {
    "Id": 5446,
    "Clnt": "Jhonas Gabriel",
    "Loja": ""
  },
  {
    "Id": 5447,
    "Clnt": "cara",
    "Loja": ""
  },
  {
    "Id": 5448,
    "Clnt": "Heitor Monster",
    "Loja": ""
  },
  {
    "Id": 5449,
    "Clnt": "menininho",
    "Loja": ""
  },
  {
    "Id": 5450,
    "Clnt": "Jailson Tio do barbeiro",
    "Loja": ""
  },
  {
    "Id": 5451,
    "Clnt": "karoliny lima",
    "Loja": ""
  },
  {
    "Id": 5452,
    "Clnt": "vitinho",
    "Loja": ""
  },
  {
    "Id": 5453,
    "Clnt": "everton hamburgueria",
    "Loja": ""
  },
  {
    "Id": 5454,
    "Clnt": "amanda",
    "Loja": ""
  },
  {
    "Id": 5455,
    "Clnt": "bruna",
    "Loja": ""
  },
  {
    "Id": 5456,
    "Clnt": "relojoeiro",
    "Loja": ""
  },
  {
    "Id": 5457,
    "Clnt": "marcelo braga",
    "Loja": ""
  },
  {
    "Id": 5458,
    "Clnt": "paulo fretes",
    "Loja": ""
  },
  {
    "Id": 5459,
    "Clnt": "seaway",
    "Loja": ""
  },
  {
    "Id": 5460,
    "Clnt": "marllon",
    "Loja": ""
  },
  {
    "Id": 5461,
    "Clnt": "Barbeiro lukinha ",
    "Loja": ""
  },
  {
    "Id": 5462,
    "Clnt": "dede borracheiro",
    "Loja": ""
  },
  {
    "Id": 5463,
    "Clnt": "gordinho galego",
    "Loja": ""
  },
  {
    "Id": 5464,
    "Clnt": "zacarias engenharia",
    "Loja": ""
  },
  {
    "Id": 5465,
    "Clnt": "tarcisio",
    "Loja": ""
  },
  {
    "Id": 5466,
    "Clnt": "G xibox",
    "Loja": ""
  },
  {
    "Id": 5467,
    "Clnt": "evelim",
    "Loja": ""
  },
  {
    "Id": 5468,
    "Clnt": "vitor",
    "Loja": ""
  },
  {
    "Id": 5469,
    "Clnt": "pedro",
    "Loja": ""
  },
  {
    "Id": 5470,
    "Clnt": "alice santos",
    "Loja": ""
  },
  {
    "Id": 5471,
    "Clnt": "miqueias",
    "Loja": ""
  },
  {
    "Id": 5472,
    "Clnt": "djair",
    "Loja": ""
  },
  {
    "Id": 5473,
    "Clnt": "claudio",
    "Loja": ""
  },
  {
    "Id": 5474,
    "Clnt": "magaly",
    "Loja": ""
  },
  {
    "Id": 5475,
    "Clnt": "abel",
    "Loja": ""
  },
  {
    "Id": 5476,
    "Clnt": "João Gabriel Carneiro",
    "Loja": ""
  },
  {
    "Id": 5477,
    "Clnt": "alex",
    "Loja": ""
  },
  {
    "Id": 5478,
    "Clnt": "Robson",
    "Loja": ""
  },
  {
    "Id": 5479,
    "Clnt": "JJ estetica automotiva",
    "Loja": ""
  },
  {
    "Id": 5480,
    "Clnt": "ariane alburqueque",
    "Loja": ""
  },
  {
    "Id": 5481,
    "Clnt": "joao victor (GB Burger)",
    "Loja": "GB Burger"
  },
  {
    "Id": 5482,
    "Clnt": "Jailson Chaveiro",
    "Loja": ""
  },
  {
    "Id": 5483,
    "Clnt": "Lava jato Rj",
    "Loja": ""
  },
  {
    "Id": 5484,
    "Clnt": "jonatas",
    "Loja": ""
  },
  {
    "Id": 5485,
    "Clnt": "ferreira e silva",
    "Loja": ""
  },
  {
    "Id": 5486,
    "Clnt": "midia do grau",
    "Loja": ""
  },
  {
    "Id": 5487,
    "Clnt": "pedro",
    "Loja": ""
  },
  {
    "Id": 5488,
    "Clnt": "Ph",
    "Loja": ""
  },
  {
    "Id": 5489,
    "Clnt": "Wr",
    "Loja": ""
  },
  {
    "Id": 5490,
    "Clnt": "Tubarão lazer",
    "Loja": ""
  },
  {
    "Id": 5491,
    "Clnt": "marquinhos locações",
    "Loja": ""
  },
  {
    "Id": 5492,
    "Clnt": "allan",
    "Loja": ""
  },
  {
    "Id": 5493,
    "Clnt": "kaua",
    "Loja": ""
  },
  {
    "Id": 5495,
    "Clnt": "elinaldo filho",
    "Loja": ""
  },
  {
    "Id": 5496,
    "Clnt": "emerson",
    "Loja": ""
  },
  {
    "Id": 5497,
    "Clnt": "moto vermelha",
    "Loja": ""
  },
  {
    "Id": 5498,
    "Clnt": "alvez escolar",
    "Loja": ""
  },
  {
    "Id": 5500,
    "Clnt": "klebson",
    "Loja": ""
  },
  {
    "Id": 5501,
    "Clnt": "David Jose",
    "Loja": ""
  },
  {
    "Id": 5502,
    "Clnt": "analfabeto",
    "Loja": ""
  },
  {
    "Id": 5506,
    "Clnt": "SOS Graff",
    "Loja": ""
  },
  {
    "Id": 5512,
    "Clnt": "edson",
    "Loja": ""
  },
  {
    "Id": 5516,
    "Clnt": "amanda melo",
    "Loja": ""
  },
  {
    "Id": 5517,
    "Clnt": "natanael furtuno",
    "Loja": ""
  },
  {
    "Id": 5518,
    "Clnt": "cabelo verde",
    "Loja": ""
  },
  {
    "Id": 5520,
    "Clnt": "Trailer Megaburguer",
    "Loja": ""
  },
  {
    "Id": 5521,
    "Clnt": "Art Papelaria",
    "Loja": ""
  },
  {
    "Id": 5523,
    "Clnt": "jorge luiz",
    "Loja": ""
  },
  {
    "Id": 5524,
    "Clnt": "Papelaria Muribara",
    "Loja": ""
  },
  {
    "Id": 5525,
    "Clnt": "Prefeitura Escada",
    "Loja": ""
  },
  {
    "Id": 5526,
    "Clnt": "Maria Elisa",
    "Loja": ""
  },
  {
    "Id": 5527,
    "Clnt": "judá",
    "Loja": ""
  },
  {
    "Id": 5528,
    "Clnt": "edvan",
    "Loja": ""
  },
  {
    "Id": 5529,
    "Clnt": "Biel Bobinho",
    "Loja": ""
  },
  {
    "Id": 5530,
    "Clnt": "glebson condomínio",
    "Loja": ""
  },
  {
    "Id": 5531,
    "Clnt": "Amanda",
    "Loja": ""
  },
  {
    "Id": 5532,
    "Clnt": "shork",
    "Loja": ""
  },
  {
    "Id": 5533,
    "Clnt": "icaro filho",
    "Loja": ""
  },
  {
    "Id": 5534,
    "Clnt": "adriana souza",
    "Loja": ""
  },
  {
    "Id": 5535,
    "Clnt": "Levy",
    "Loja": ""
  },
  {
    "Id": 5536,
    "Clnt": "matheus",
    "Loja": ""
  },
  {
    "Id": 5537,
    "Clnt": "leonardo amendoim",
    "Loja": ""
  },
  {
    "Id": 5538,
    "Clnt": "Tinho Queiroz",
    "Loja": ""
  },
  {
    "Id": 5539,
    "Clnt": "brasil gás",
    "Loja": ""
  },
  {
    "Id": 5540,
    "Clnt": "recortinho",
    "Loja": ""
  },
  {
    "Id": 5541,
    "Clnt": "gordinho ",
    "Loja": ""
  },
  {
    "Id": 5542,
    "Clnt": "Tomaz",
    "Loja": ""
  },
  {
    "Id": 5543,
    "Clnt": "Marcos Caldo de Cana",
    "Loja": ""
  },
  {
    "Id": 5544,
    "Clnt": "Welington S10",
    "Loja": ""
  },
  {
    "Id": 5545,
    "Clnt": "Donna Ví",
    "Loja": ""
  },
  {
    "Id": 5546,
    "Clnt": "anghel",
    "Loja": ""
  },
  {
    "Id": 5548,
    "Clnt": "VINICIUS ",
    "Loja": ""
  },
  {
    "Id": 5549,
    "Clnt": "joão bosco",
    "Loja": ""
  },
  {
    "Id": 5550,
    "Clnt": "andrea carla",
    "Loja": ""
  },
  {
    "Id": 5551,
    "Clnt": "pedro",
    "Loja": ""
  },
  {
    "Id": 5552,
    "Clnt": "boysinhos donzelo",
    "Loja": ""
  },
  {
    "Id": 5553,
    "Clnt": "keya",
    "Loja": ""
  },
  {
    "Id": 5554,
    "Clnt": "mottu",
    "Loja": ""
  },
  {
    "Id": 5555,
    "Clnt": "jaqueline barbosa",
    "Loja": ""
  },
  {
    "Id": 5556,
    "Clnt": "chapeu",
    "Loja": ""
  },
  {
    "Id": 5557,
    "Clnt": "Erasmos Soares",
    "Loja": ""
  },
  {
    "Id": 5558,
    "Clnt": "Vitinho",
    "Loja": ""
  },
  {
    "Id": 5559,
    "Clnt": "pastor josué batista",
    "Loja": ""
  },
  {
    "Id": 5560,
    "Clnt": "ruthe gabrielly",
    "Loja": ""
  },
  {
    "Id": 5561,
    "Clnt": "Reserva dog",
    "Loja": ""
  },
  {
    "Id": 5562,
    "Clnt": "ketilin",
    "Loja": ""
  },
  {
    "Id": 5563,
    "Clnt": "indridy",
    "Loja": ""
  },
  {
    "Id": 5564,
    "Clnt": "wellington HMG",
    "Loja": ""
  },
  {
    "Id": 5565,
    "Clnt": "ds",
    "Loja": ""
  },
  {
    "Id": 5566,
    "Clnt": "Rafael",
    "Loja": ""
  },
  {
    "Id": 5567,
    "Clnt": "Elaine felix",
    "Loja": ""
  },
  {
    "Id": 5570,
    "Clnt": "Manoel Ricardo",
    "Loja": ""
  },
  {
    "Id": 5571,
    "Clnt": "duende",
    "Loja": ""
  },
  {
    "Id": 5572,
    "Clnt": "gustavo",
    "Loja": ""
  },
  {
    "Id": 5573,
    "Clnt": "joão vitor",
    "Loja": ""
  },
  {
    "Id": 5574,
    "Clnt": "Heitor Vitor",
    "Loja": ""
  },
  {
    "Id": 5575,
    "Clnt": "geraldo alves",
    "Loja": ""
  },
  {
    "Id": 5577,
    "Clnt": "paulo",
    "Loja": ""
  },
  {
    "Id": 5578,
    "Clnt": "ferraz hortifruti",
    "Loja": ""
  },
  {
    "Id": 5579,
    "Clnt": "Firme e Forte",
    "Loja": ""
  },
  {
    "Id": 5580,
    "Clnt": "",
    "Loja": ""
  },
  {
    "Id": 5581,
    "Clnt": "amg de vitinho",
    "Loja": ""
  },
  {
    "Id": 5582,
    "Clnt": "raphael",
    "Loja": ""
  },
  {
    "Id": 5583,
    "Clnt": "Adriano Combi",
    "Loja": ""
  },
  {
    "Id": 5584,
    "Clnt": "Rosemberg",
    "Loja": ""
  },
  {
    "Id": 5585,
    "Clnt": "Felipe",
    "Loja": ""
  },
  {
    "Id": 5586,
    "Clnt": "Jacy",
    "Loja": ""
  },
  {
    "Id": 5588,
    "Clnt": "igor leonardo",
    "Loja": ""
  },
  {
    "Id": 5589,
    "Clnt": "healerrandro",
    "Loja": ""
  },
  {
    "Id": 5590,
    "Clnt": "KAROL",
    "Loja": ""
  },
  {
    "Id": 5591,
    "Clnt": "everaldo",
    "Loja": ""
  },
  {
    "Id": 5592,
    "Clnt": "gratidão",
    "Loja": ""
  },
  {
    "Id": 5593,
    "Clnt": "Marcelo",
    "Loja": ""
  },
  {
    "Id": 5594,
    "Clnt": "kauan",
    "Loja": ""
  },
  {
    "Id": 5595,
    "Clnt": "TMP transportes",
    "Loja": ""
  },
  {
    "Id": 5596,
    "Clnt": "PH",
    "Loja": ""
  },
  {
    "Id": 5597,
    "Clnt": "tanque",
    "Loja": ""
  },
  {
    "Id": 5598,
    "Clnt": "tropoinha 244",
    "Loja": ""
  },
  {
    "Id": 5599,
    "Clnt": "aleff",
    "Loja": ""
  },
  {
    "Id": 5600,
    "Clnt": "Rafael",
    "Loja": ""
  },
  {
    "Id": 5602,
    "Clnt": "Herbert Camargo",
    "Loja": ""
  },
  {
    "Id": 5603,
    "Clnt": "Elisson",
    "Loja": ""
  },
  {
    "Id": 5605,
    "Clnt": "Rute Inova",
    "Loja": ""
  },
  {
    "Id": 5606,
    "Clnt": "alex cell",
    "Loja": ""
  },
  {
    "Id": 5607,
    "Clnt": "amigo de fenix",
    "Loja": ""
  },
  {
    "Id": 5608,
    "Clnt": "Kyvson",
    "Loja": ""
  },
  {
    "Id": 5609,
    "Clnt": "moto peixe 99",
    "Loja": ""
  },
  {
    "Id": 5610,
    "Clnt": "Iago amigo de roberto",
    "Loja": ""
  },
  {
    "Id": 5611,
    "Clnt": "João",
    "Loja": ""
  },
  {
    "Id": 5612,
    "Clnt": "Daniel Alves",
    "Loja": ""
  },
  {
    "Id": 5622,
    "Clnt": "Coroa",
    "Loja": ""
  },
  {
    "Id": 5625,
    "Clnt": "Marcelo",
    "Loja": ""
  },
  {
    "Id": 5626,
    "Clnt": "Maycon 244",
    "Loja": ""
  },
  {
    "Id": 5627,
    "Clnt": "Claudio Delta Force",
    "Loja": ""
  },
  {
    "Id": 5630,
    "Clnt": "Nunes Locutor",
    "Loja": ""
  },
  {
    "Id": 5631,
    "Clnt": "Wiliam",
    "Loja": ""
  },
  {
    "Id": 5634,
    "Clnt": "Wesley Ricardo",
    "Loja": ""
  },
  {
    "Id": 5636,
    "Clnt": "Eduardo Henrique",
    "Loja": ""
  },
  {
    "Id": 5637,
    "Clnt": "Jaimerson Vitor",
    "Loja": ""
  },
  {
    "Id": 5642,
    "Clnt": "Bruxo dos cortes",
    "Loja": ""
  },
  {
    "Id": 5643,
    "Clnt": "Lacaio",
    "Loja": ""
  },
  {
    "Id": 5645,
    "Clnt": "Pablo",
    "Loja": ""
  },
  {
    "Id": 5646,
    "Clnt": "sergio turismo",
    "Loja": ""
  },
  {
    "Id": 5647,
    "Clnt": "SJ Locações",
    "Loja": ""
  },
  {
    "Id": 5648,
    "Clnt": "Maycon",
    "Loja": ""
  },
  {
    "Id": 5649,
    "Clnt": "Elisson",
    "Loja": ""
  },
  {
    "Id": 5650,
    "Clnt": "João Eldo",
    "Loja": ""
  },
  {
    "Id": 5651,
    "Clnt": "sergio Turismo",
    "Loja": ""
  },
  {
    "Id": 5652,
    "Clnt": "Kleberson",
    "Loja": ""
  },
  {
    "Id": 5653,
    "Clnt": "Gustavo",
    "Loja": ""
  },
  {
    "Id": 5654,
    "Clnt": "Barbeiro vizinho",
    "Loja": ""
  },
  {
    "Id": 5655,
    "Clnt": "Sandro Escada",
    "Loja": ""
  },
  {
    "Id": 5656,
    "Clnt": "Flávia Santos",
    "Loja": ""
  },
  {
    "Id": 5657,
    "Clnt": "Nino",
    "Loja": ""
  },
  {
    "Id": 5658,
    "Clnt": "Bárbara",
    "Loja": ""
  },
  {
    "Id": 5659,
    "Clnt": "Davi da Kombi",
    "Loja": ""
  },
  {
    "Id": 5660,
    "Clnt": "Edson Júnior",
    "Loja": ""
  },
  {
    "Id": 5661,
    "Clnt": "igor",
    "Loja": ""
  },
  {
    "Id": 5662,
    "Clnt": "Maike Barretos",
    "Loja": ""
  },
  {
    "Id": 5663,
    "Clnt": "Edson Carlos",
    "Loja": ""
  },
  {
    "Id": 5665,
    "Clnt": "Sankley",
    "Loja": ""
  },
  {
    "Id": 5666,
    "Clnt": "Kauanzinho Barbeiro",
    "Loja": ""
  },
  {
    "Id": 5667,
    "Clnt": "Raquel Batista",
    "Loja": ""
  },
  {
    "Id": 5668,
    "Clnt": "Lucas Ailton",
    "Loja": ""
  },
  {
    "Id": 5669,
    "Clnt": "João Batista",
    "Loja": ""
  },
  {
    "Id": 5670,
    "Clnt": "Lucas wendel",
    "Loja": ""
  },
  {
    "Id": 5671,
    "Clnt": "Estética GR",
    "Loja": ""
  },
  {
    "Id": 5672,
    "Clnt": "Wilha Olhos azuls",
    "Loja": ""
  },
  {
    "Id": 5673,
    "Clnt": "Top Lanches",
    "Loja": ""
  },
  {
    "Id": 5674,
    "Clnt": "thalys TH",
    "Loja": ""
  },
  {
    "Id": 5675,
    "Clnt": "Apollo Gabriel",
    "Loja": ""
  },
  {
    "Id": 5677,
    "Clnt": "china",
    "Loja": ""
  },
  {
    "Id": 5678,
    "Clnt": "neguin22",
    "Loja": ""
  },
  {
    "Id": 5679,
    "Clnt": "Recife Floricutura",
    "Loja": ""
  },
  {
    "Id": 5680,
    "Clnt": "Thays Emilly",
    "Loja": ""
  },
  {
    "Id": 5681,
    "Clnt": "Gustavo Henrique",
    "Loja": ""
  },
  {
    "Id": 5682,
    "Clnt": "Kauã da oficina",
    "Loja": ""
  },
  {
    "Id": 5683,
    "Clnt": "regilson da kombi",
    "Loja": ""
  },
  {
    "Id": 5684,
    "Clnt": "AM Transportes",
    "Loja": ""
  },
  {
    "Id": 5685,
    "Clnt": "Amanda Marmore",
    "Loja": ""
  },
  {
    "Id": 5686,
    "Clnt": "isaque",
    "Loja": ""
  },
  {
    "Id": 5687,
    "Clnt": "Erick Alves",
    "Loja": ""
  },
  {
    "Id": 5688,
    "Clnt": "Alessandro",
    "Loja": ""
  },
  {
    "Id": 5689,
    "Clnt": "Gás e àgua Wilames",
    "Loja": ""
  },
  {
    "Id": 5690,
    "Clnt": "Arthur Delfino",
    "Loja": ""
  },
  {
    "Id": 5692,
    "Clnt": "Henrique STJ",
    "Loja": ""
  },
  {
    "Id": 5693,
    "Clnt": "Erinaldo",
    "Loja": ""
  },
  {
    "Id": 5695,
    "Clnt": "Rc Moda Msaculina",
    "Loja": ""
  },
  {
    "Id": 5696,
    "Clnt": "Irmão de Juliana",
    "Loja": ""
  },
  {
    "Id": 5697,
    "Clnt": "João Eldo",
    "Loja": ""
  },
  {
    "Id": 5698,
    "Clnt": "dr thais",
    "Loja": ""
  },
  {
    "Id": 5699,
    "Clnt": "Caue dos cortes",
    "Loja": ""
  },
  {
    "Id": 5700,
    "Clnt": "Baly Energy",
    "Loja": ""
  },
  {
    "Id": 5701,
    "Clnt": "Everaldo",
    "Loja": ""
  },
  {
    "Id": 5702,
    "Clnt": "regis",
    "Loja": ""
  },
  {
    "Id": 5703,
    "Clnt": "Heitor",
    "Loja": ""
  },
  {
    "Id": 5704,
    "Clnt": "Igor Pietro",
    "Loja": ""
  },
  {
    "Id": 5705,
    "Clnt": "Polly Xika",
    "Loja": ""
  },
  {
    "Id": 5706,
    "Clnt": "Bruno Serralharia",
    "Loja": ""
  },
  {
    "Id": 5707,
    "Clnt": "neguinho",
    "Loja": ""
  },
  {
    "Id": 5709,
    "Clnt": "barbearia victor Cortes",
    "Loja": ""
  },
  {
    "Id": 5710,
    "Clnt": "Alex ",
    "Loja": ""
  },
  {
    "Id": 5713,
    "Clnt": "Alex",
    "Loja": ""
  },
  {
    "Id": 5714,
    "Clnt": "Douglas Ramos",
    "Loja": ""
  },
  {
    "Id": 5715,
    "Clnt": "Carlos Paralama",
    "Loja": ""
  },
  {
    "Id": 5716,
    "Clnt": "Gutemberg Lima",
    "Loja": ""
  },
  {
    "Id": 5717,
    "Clnt": "Marcos Fan",
    "Loja": ""
  },
  {
    "Id": 5718,
    "Clnt": "Vitor 2",
    "Loja": ""
  },
  {
    "Id": 5719,
    "Clnt": "Larissa Santana",
    "Loja": ""
  },
  {
    "Id": 5721,
    "Clnt": "Kaue Criança",
    "Loja": ""
  },
  {
    "Id": 5722,
    "Clnt": "Pedro Henrique F.",
    "Loja": ""
  },
  {
    "Id": 5723,
    "Clnt": "victtor",
    "Loja": ""
  },
  {
    "Id": 5724,
    "Clnt": "monica Ação Social",
    "Loja": ""
  },
  {
    "Id": 5725,
    "Clnt": "Vitor Escolar",
    "Loja": ""
  },
  {
    "Id": 5726,
    "Clnt": "Irmã Neide (Toten)",
    "Loja": ""
  },
  {
    "Id": 5727,
    "Clnt": "PH 244",
    "Loja": ""
  },
  {
    "Id": 5728,
    "Clnt": "Daniele Freitas",
    "Loja": ""
  },
  {
    "Id": 5729,
    "Clnt": "Ronaldo Son",
    "Loja": "Amigo do Son"
  },
  {
    "Id": 5730,
    "Clnt": "Fafa",
    "Loja": ""
  },
  {
    "Id": 5731,
    "Clnt": "boy Novo 244",
    "Loja": ""
  },
  {
    "Id": 5732,
    "Clnt": "Abi Reboque",
    "Loja": ""
  },
  {
    "Id": 5733,
    "Clnt": "Elielson",
    "Loja": ""
  },
  {
    "Id": 5734,
    "Clnt": "wesley Orbia",
    "Loja": ""
  },
  {
    "Id": 5735,
    "Clnt": "Nordeste Tempero",
    "Loja": ""
  },
  {
    "Id": 5736,
    "Clnt": "Aziel",
    "Loja": ""
  },
  {
    "Id": 5737,
    "Clnt": "Maycon criança",
    "Loja": ""
  },
  {
    "Id": 5738,
    "Clnt": "Leh",
    "Loja": ""
  },
  {
    "Id": 5739,
    "Clnt": "Nicolas Detona",
    "Loja": ""
  },
  {
    "Id": 5740,
    "Clnt": "Ig",
    "Loja": ""
  },
  {
    "Id": 5741,
    "Clnt": "Edivaldo Pvc",
    "Loja": ""
  },
  {
    "Id": 5742,
    "Clnt": "cliente aleatorio",
    "Loja": ""
  },
  {
    "Id": 5743,
    "Clnt": "Ciente aleatorio",
    "Loja": ""
  },
  {
    "Id": 5744,
    "Clnt": "Matheus Vascurado",
    "Loja": ""
  },
  {
    "Id": 5745,
    "Clnt": "amigo de roberto ",
    "Loja": ""
  },
  {
    "Id": 5746,
    "Clnt": "Mikael",
    "Loja": ""
  },
  {
    "Id": 5747,
    "Clnt": "Elisa Oliveira",
    "Loja": "Açaí do Gordo"
  },
  {
    "Id": 5748,
    "Clnt": "Lidiane Pereira",
    "Loja": ""
  },
  {
    "Id": 5749,
    "Clnt": "Hitalo",
    "Loja": "244"
  },
  {
    "Id": 5750,
    "Clnt": "Robson gás ",
    "Loja": ""
  },
  {
    "Id": 5751,
    "Clnt": "Ronnie",
    "Loja": ""
  },
  {
    "Id": 5753,
    "Clnt": "Carlos",
    "Loja": ""
  },
  {
    "Id": 5754,
    "Clnt": "Carlos Alberto",
    "Loja": ""
  },
  {
    "Id": 5755,
    "Clnt": "Jose Andre",
    "Loja": ""
  },
  {
    "Id": 5756,
    "Clnt": "cara da combi 2",
    "Loja": ""
  },
  {
    "Id": 5757,
    "Clnt": "hitalo",
    "Loja": ""
  },
  {
    "Id": 5758,
    "Clnt": "Linalva Lima",
    "Loja": ""
  },
  {
    "Id": 5759,
    "Clnt": "Açaí do Gordo",
    "Loja": ""
  },
  {
    "Id": 5760,
    "Clnt": "Vinicius ",
    "Loja": ""
  },
  {
    "Id": 5761,
    "Clnt": "Jordan ",
    "Loja": ""
  },
  {
    "Id": 5762,
    "Clnt": "Coutinho Andaimes",
    "Loja": ""
  },
  {
    "Id": 5763,
    "Clnt": "Tr Edvaldo",
    "Loja": ""
  },
  {
    "Id": 5764,
    "Clnt": "Merivania furtunato",
    "Loja": ""
  },
  {
    "Id": 5765,
    "Clnt": "Renato gás",
    "Loja": ""
  },
  {
    "Id": 5766,
    "Clnt": "Fernando 244",
    "Loja": ""
  },
  {
    "Id": 5767,
    "Clnt": "Gidson Supercilo",
    "Loja": ""
  },
  {
    "Id": 5768,
    "Clnt": "charles de Lima",
    "Loja": ""
  },
  {
    "Id": 5769,
    "Clnt": "amigo do barbeiro",
    "Loja": ""
  },
  {
    "Id": 5770,
    "Clnt": "JG viagens",
    "Loja": ""
  },
  {
    "Id": 5771,
    "Clnt": "Tassia",
    "Loja": ""
  },
  {
    "Id": 5772,
    "Clnt": "Neto Forro de PVC",
    "Loja": ""
  },
  {
    "Id": 5774,
    "Clnt": "esposa de louan",
    "Loja": ""
  },
  {
    "Id": 5775,
    "Clnt": "Jaimerson Vitorr",
    "Loja": ""
  },
  {
    "Id": 5776,
    "Clnt": "Gabriel PAI",
    "Loja": ""
  },
  {
    "Id": 5777,
    "Clnt": "Roberto Bancada",
    "Loja": ""
  },
  {
    "Id": 5778,
    "Clnt": "Super Motos",
    "Loja": ""
  },
  {
    "Id": 5779,
    "Clnt": "Rafael Henrique",
    "Loja": "Vitalle"
  },
  {
    "Id": 5780,
    "Clnt": "Tatiana Alves",
    "Loja": ""
  },
  {
    "Id": 5781,
    "Clnt": "Duarte Cell",
    "Loja": ""
  },
  {
    "Id": 5782,
    "Clnt": "Amanda WF",
    "Loja": ""
  },
  {
    "Id": 5784,
    "Clnt": "Henrique de Oliveira",
    "Loja": ""
  },
  {
    "Id": 5785,
    "Clnt": "Rafael Henrique (vitalle)",
    "Loja": ""
  },
  {
    "Id": 5786,
    "Clnt": "jadeilson Sabor Nordestino",
    "Loja": ""
  },
  {
    "Id": 5787,
    "Clnt": "Brasil gas",
    "Loja": ""
  },
  {
    "Id": 5788,
    "Clnt": "Batcas Bateria",
    "Loja": ""
  },
  {
    "Id": 5789,
    "Clnt": "amg do babeiro",
    "Loja": ""
  },
  {
    "Id": 5790,
    "Clnt": "Peixaria do Tony",
    "Loja": ""
  },
  {
    "Id": 5791,
    "Clnt": "Kessyla Silva",
    "Loja": ""
  },
  {
    "Id": 5792,
    "Clnt": "Ph",
    "Loja": ""
  },
  {
    "Id": 5793,
    "Clnt": "Maria do socorro (Point Feijoada)",
    "Loja": ""
  },
  {
    "Id": 5794,
    "Clnt": "Fabio Castro",
    "Loja": ""
  },
  {
    "Id": 5795,
    "Clnt": "Raquel Barbosa",
    "Loja": ""
  },
  {
    "Id": 5797,
    "Clnt": "Meiry Salão",
    "Loja": ""
  },
  {
    "Id": 5798,
    "Clnt": "Ravy",
    "Loja": ""
  },
  {
    "Id": 5799,
    "Clnt": "Culto",
    "Loja": ""
  },
  {
    "Id": 5800,
    "Clnt": "Valquieria",
    "Loja": ""
  },
  {
    "Id": 5801,
    "Clnt": "Bianca Moura",
    "Loja": ""
  },
  {
    "Id": 5802,
    "Clnt": "Amanda Camisa",
    "Loja": ""
  },
  {
    "Id": 5803,
    "Clnt": "Mktp Rinaldo",
    "Loja": ""
  },
  {
    "Id": 5804,
    "Clnt": "Davi Ezidio",
    "Loja": ""
  },
  {
    "Id": 5805,
    "Clnt": "Alê",
    "Loja": ""
  },
  {
    "Id": 5806,
    "Clnt": "Mirian (Rainha da Impada)",
    "Loja": ""
  },
  {
    "Id": 5807,
    "Clnt": "Sandro Placa",
    "Loja": ""
  },
  {
    "Id": 5808,
    "Clnt": "Monica Perfumaria",
    "Loja": ""
  },
  {
    "Id": 5812,
    "Clnt": "Dacoro Lupas",
    "Loja": null
  },
  {
    "Id": 5813,
    "Clnt": "Amanda Lins",
    "Loja": null
  },
  {
    "Id": 5814,
    "Clnt": "Cliente Regerinha",
    "Loja": null
  },
  {
    "Id": 5816,
    "Clnt": "Peloso",
    "Loja": null
  },
  {
    "Id": 5817,
    "Clnt": "Cyntia Martins",
    "Loja": null
  },
  {
    "Id": 5818,
    "Clnt": "Jose Ricardo Samu",
    "Loja": null
  },
  {
    "Id": 5819,
    "Clnt": "Clietne Aleatório",
    "Loja": null
  },
  {
    "Id": 5820,
    "Clnt": "Leo Equipe Corre Na Lama",
    "Loja": null
  },
  {
    "Id": 5821,
    "Clnt": "Cleonilda",
    "Loja": null
  },
  {
    "Id": 5822,
    "Clnt": "Menor B5",
    "Loja": null
  },
  {
    "Id": 5823,
    "Clnt": "Le Midia",
    "Loja": null
  },
  {
    "Id": 5824,
    "Clnt": "Venda",
    "Loja": null
  },
  {
    "Id": 5825,
    "Clnt": "Aleatorio",
    "Loja": null
  },
  {
    "Id": 5826,
    "Clnt": "Everaldinho",
    "Loja": null
  },
  {
    "Id": 5827,
    "Clnt": "Pedro",
    "Loja": null
  },
  {
    "Id": 5828,
    "Clnt": "Priscilla Freitas",
    "Loja": null
  },
  {
    "Id": 5829,
    "Clnt": "Aleatório",
    "Loja": null
  },
  {
    "Id": 5830,
    "Clnt": "Masinho",
    "Loja": null
  },
  {
    "Id": 5831,
    "Clnt": "Jô silva",
    "Loja": null
  },
  {
    "Id": 5832,
    "Clnt": "DUDU Fan160",
    "Loja": null
  },
  {
    "Id": 5833,
    "Clnt": "Coloral",
    "Loja": null
  },
  {
    "Id": 5834,
    "Clnt": "Hur Barros",
    "Loja": "Churros"
  },
  {
    "Id": 5835,
    "Clnt": "Pedro",
    "Loja": null
  },
  {
    "Id": 5836,
    "Clnt": "Bruxo_dos_cortes",
    "Loja": null
  },
  {
    "Id": 5837,
    "Clnt": "Jessica",
    "Loja": null
  },
  {
    "Id": 5838,
    "Clnt": "Brasil Gás",
    "Loja": null
  },
  {
    "Id": 5839,
    "Clnt": "Rainha Impada",
    "Loja": null
  },
  {
    "Id": 5840,
    "Clnt": "Bomba",
    "Loja": null
  },
  {
    "Id": 5841,
    "Clnt": "Ailton",
    "Loja": null
  },
  {
    "Id": 5842,
    "Clnt": "Fé no Pai",
    "Loja": "Weed"
  },
  {
    "Id": 5843,
    "Clnt": "Thiago",
    "Loja": null
  },
  {
    "Id": 5844,
    "Clnt": "Valquiria",
    "Loja": null
  },
  {
    "Id": 5845,
    "Clnt": "Dissinho",
    "Loja": null
  },
  {
    "Id": 5846,
    "Clnt": "Esposo de Louan",
    "Loja": null
  },
  {
    "Id": 5848,
    "Clnt": "Jorge",
    "Loja": null
  },
  {
    "Id": 5849,
    "Clnt": "Gutemberg Lima",
    "Loja": null
  },
  {
    "Id": 5850,
    "Clnt": "Jorge Whashigton",
    "Loja": "Pitbull"
  },
  {
    "Id": 5851,
    "Clnt": "Welley",
    "Loja": null
  },
  {
    "Id": 5852,
    "Clnt": "Jorge",
    "Loja": null
  },
  {
    "Id": 5853,
    "Clnt": "Elivelton Carneiro",
    "Loja": ""
  },
  {
    "Id": 5854,
    "Clnt": "VN Refrigeração",
    "Loja": ""
  },
  {
    "Id": 5855,
    "Clnt": "Day Twister",
    "Loja": ""
  },
  {
    "Id": 5856,
    "Clnt": "Qra Agoniado",
    "Loja": ""
  },
  {
    "Id": 5857,
    "Clnt": "Elisangela Nails",
    "Loja": ""
  },
  {
    "Id": 5858,
    "Clnt": "Arthur Vinicius",
    "Loja": ""
  },
  {
    "Id": 5859,
    "Clnt": "Maria Souza Padaria",
    "Loja": ""
  },
  {
    "Id": 5860,
    "Clnt": "Arthur Duque",
    "Loja": ""
  },
  {
    "Id": 5861,
    "Clnt": "Xandinho Amigo",
    "Loja": ""
  },
  {
    "Id": 5862,
    "Clnt": "Sandra Prima",
    "Loja": ""
  },
  {
    "Id": 5863,
    "Clnt": "Joyce Cavalcante",
    "Loja": ""
  },
  {
    "Id": 5865,
    "Clnt": "Blaynner",
    "Loja": ""
  },
  {
    "Id": 5868,
    "Clnt": "Ronaldo Trator",
    "Loja": ""
  },
  {
    "Id": 5869,
    "Clnt": "Jessy",
    "Loja": ""
  },
  {
    "Id": 5870,
    "Clnt": "Allan Estética",
    "Loja": ""
  },
  {
    "Id": 5871,
    "Clnt": "Thiago",
    "Loja": ""
  },
  {
    "Id": 5872,
    "Clnt": "Boynho Goridinho",
    "Loja": ""
  },
  {
    "Id": 5873,
    "Clnt": "dg.fiel57",
    "Loja": ""
  },
  {
    "Id": 5874,
    "Clnt": "Dorgilvanio",
    "Loja": ""
  },
  {
    "Id": 5875,
    "Clnt": "Lucio Mauro",
    "Loja": ""
  },
  {
    "Id": 5876,
    "Clnt": "Disom Luiz",
    "Loja": ""
  },
  {
    "Id": 5877,
    "Clnt": "Fernando 2",
    "Loja": ""
  },
  {
    "Id": 5878,
    "Clnt": "Marcelo Um 2",
    "Loja": ""
  },
  {
    "Id": 5879,
    "Clnt": "Off",
    "Loja": ""
  },
  {
    "Id": 5880,
    "Clnt": "boy do olho azul",
    "Loja": ""
  },
  {
    "Id": 5881,
    "Clnt": "Nalva Variedade",
    "Loja": ""
  },
  {
    "Id": 5882,
    "Clnt": "Tatiane Monte",
    "Loja": ""
  },
  {
    "Id": 5884,
    "Clnt": "Dinho Reggae",
    "Loja": ""
  },
  {
    "Id": 5885,
    "Clnt": "roberto tronco",
    "Loja": ""
  },
  {
    "Id": 5886,
    "Clnt": "Laylson Fernandes",
    "Loja": ""
  },
  {
    "Id": 5887,
    "Clnt": "Elegancia Divina",
    "Loja": ""
  },
  {
    "Id": 5888,
    "Clnt": "Joel",
    "Loja": ""
  },
  {
    "Id": 5889,
    "Clnt": "Bruna Landra",
    "Loja": ""
  },
  {
    "Id": 5890,
    "Clnt": "Silvano Placa Obra",
    "Loja": ""
  },
  {
    "Id": 5891,
    "Clnt": "Dimas Barbeiro",
    "Loja": ""
  },
  {
    "Id": 5892,
    "Clnt": "Camila Igreja",
    "Loja": ""
  },
  {
    "Id": 5893,
    "Clnt": "Alfredo Alves",
    "Loja": ""
  },
  {
    "Id": 5894,
    "Clnt": "Kaylane Oliveira",
    "Loja": ""
  },
  {
    "Id": 5895,
    "Clnt": "João Victor",
    "Loja": "UltraMega"
  },
  {
    "Id": 5896,
    "Clnt": "Edson Silva",
    "Loja": ""
  },
  {
    "Id": 5897,
    "Clnt": "Wendinho",
    "Loja": ""
  },
  {
    "Id": 5899,
    "Clnt": "amg de will",
    "Loja": ""
  },
  {
    "Id": 5900,
    "Clnt": "João Victor Pop100",
    "Loja": ""
  },
  {
    "Id": 5901,
    "Clnt": "Abel Bento",
    "Loja": ""
  },
  {
    "Id": 5902,
    "Clnt": "Daniel Palete",
    "Loja": ""
  },
  {
    "Id": 5903,
    "Clnt": "Pelozo",
    "Loja": ""
  },
  {
    "Id": 5904,
    "Clnt": "JAQ Hidraulica",
    "Loja": ""
  },
  {
    "Id": 5905,
    "Clnt": "Jair Almoço",
    "Loja": ""
  },
  {
    "Id": 5906,
    "Clnt": "Rogerio Oliveira",
    "Loja": ""
  },
  {
    "Id": 5908,
    "Clnt": "Diana Açaí",
    "Loja": ""
  },
  {
    "Id": 5909,
    "Clnt": "Albérico",
    "Loja": ""
  },
  {
    "Id": 5910,
    "Clnt": "Marcio Victor 244",
    "Loja": ""
  },
  {
    "Id": 5912,
    "Clnt": "Antonio Roberto",
    "Loja": ""
  },
  {
    "Id": 5913,
    "Clnt": "Wellington Vinnycius",
    "Loja": ""
  },
  {
    "Id": 5914,
    "Clnt": "Bianca Levy",
    "Loja": ""
  },
  {
    "Id": 5916,
    "Clnt": "Gleydson_dapvs",
    "Loja": ""
  },
  {
    "Id": 5917,
    "Clnt": "João Batista Piloto",
    "Loja": ""
  },
  {
    "Id": 5918,
    "Clnt": "Ricardo Cruz",
    "Loja": ""
  },
  {
    "Id": 5919,
    "Clnt": "João Vitor",
    "Loja": ""
  },
  {
    "Id": 5920,
    "Clnt": "Susan Patricia",
    "Loja": ""
  },
  {
    "Id": 5921,
    "Clnt": "Jose Ronilton",
    "Loja": ""
  },
  {
    "Id": 5922,
    "Clnt": "italo Ellcazo",
    "Loja": ""
  },
  {
    "Id": 5923,
    "Clnt": "Irmã Viviane (Toten)",
    "Loja": ""
  },
  {
    "Id": 5924,
    "Clnt": "Izabela",
    "Loja": ""
  },
  {
    "Id": 5925,
    "Clnt": "Izabela",
    "Loja": ""
  },
  {
    "Id": 5926,
    "Clnt": "Thaysa Fox",
    "Loja": ""
  },
  {
    "Id": 5927,
    "Clnt": "Jb da Kombi",
    "Loja": ""
  },
  {
    "Id": 5928,
    "Clnt": "Yasmim T",
    "Loja": ""
  },
  {
    "Id": 5929,
    "Clnt": "Jercy Lins",
    "Loja": ""
  },
  {
    "Id": 5930,
    "Clnt": "Gabriel Tiuma",
    "Loja": ""
  },
  {
    "Id": 5931,
    "Clnt": "Andinho",
    "Loja": ""
  },
  {
    "Id": 5932,
    "Clnt": "Edivan Carlos",
    "Loja": ""
  },
  {
    "Id": 5933,
    "Clnt": "Renato 244",
    "Loja": "Tiuma"
  },
  {
    "Id": 5934,
    "Clnt": "Sergio  Bike",
    "Loja": ""
  },
  {
    "Id": 5935,
    "Clnt": "Saudades Irmão LS2",
    "Loja": ""
  },
  {
    "Id": 5936,
    "Clnt": "Amigo de LS2",
    "Loja": ""
  },
  {
    "Id": 5937,
    "Clnt": "Antonio Peixaria",
    "Loja": ""
  },
  {
    "Id": 5938,
    "Clnt": "Ailton Vidael",
    "Loja": ""
  },
  {
    "Id": 5939,
    "Clnt": "Arthur de Guilherme",
    "Loja": ""
  },
  {
    "Id": 5940,
    "Clnt": "TS Sport",
    "Loja": ""
  },
  {
    "Id": 5941,
    "Clnt": "Josemir Ferreira",
    "Loja": ""
  },
  {
    "Id": 5942,
    "Clnt": "Moreno q sempre vem",
    "Loja": ""
  },
  {
    "Id": 5943,
    "Clnt": "Jefferson Trajano",
    "Loja": ""
  },
  {
    "Id": 5944,
    "Clnt": "Debora Vizinha",
    "Loja": ""
  },
  {
    "Id": 5945,
    "Clnt": "Davi menino",
    "Loja": ""
  },
  {
    "Id": 5946,
    "Clnt": " Vinicius Traler",
    "Loja": ""
  },
  {
    "Id": 5947,
    "Clnt": "Lucas (Neguinho)",
    "Loja": ""
  },
  {
    "Id": 5948,
    "Clnt": "Pai de Dadinho",
    "Loja": ""
  },
  {
    "Id": 5949,
    "Clnt": "Rian ",
    "Loja": ""
  },
  {
    "Id": 5950,
    "Clnt": "Rian Kombi",
    "Loja": ""
  },
  {
    "Id": 5951,
    "Clnt": "Patroa Fitness",
    "Loja": ""
  },
  {
    "Id": 5952,
    "Clnt": "Alan Motos",
    "Loja": ""
  },
  {
    "Id": 5953,
    "Clnt": "Geraldo",
    "Loja": ""
  },
  {
    "Id": 5954,
    "Clnt": "Leila",
    "Loja": ""
  },
  {
    "Id": 5955,
    "Clnt": "Glaybson",
    "Loja": ""
  },
  {
    "Id": 5956,
    "Clnt": "Alberto Barbeiro",
    "Loja": "Portugal"
  },
  {
    "Id": 5957,
    "Clnt": "Leandro Cell",
    "Loja": ""
  },
  {
    "Id": 5958,
    "Clnt": "Pedro Criança",
    "Loja": ""
  },
  {
    "Id": 5959,
    "Clnt": "Marcos Caldo cana",
    "Loja": ""
  },
  {
    "Id": 5960,
    "Clnt": "Vitor  da Pizzaria",
    "Loja": ""
  },
  {
    "Id": 5961,
    "Clnt": "Cleito Metria Visual",
    "Loja": ""
  },
  {
    "Id": 5962,
    "Clnt": "Dayana Empréstimo",
    "Loja": ""
  },
  {
    "Id": 5963,
    "Clnt": "Diana Inácio",
    "Loja": ""
  },
  {
    "Id": 5964,
    "Clnt": "Orlando 244",
    "Loja": ""
  },
  {
    "Id": 5965,
    "Clnt": "Elias Recorte",
    "Loja": ""
  },
  {
    "Id": 5966,
    "Clnt": "Jonas Alencar",
    "Loja": ""
  },
  {
    "Id": 5967,
    "Clnt": "Neide (Toten)",
    "Loja": ""
  },
  {
    "Id": 5969,
    "Clnt": "Isaque Agua",
    "Loja": ""
  },
  {
    "Id": 5970,
    "Clnt": "Micael Silva",
    "Loja": ""
  },
  {
    "Id": 5972,
    "Clnt": "Alex Rasta",
    "Loja": ""
  },
  {
    "Id": 5973,
    "Clnt": "Dr. Neto",
    "Loja": ""
  },
  {
    "Id": 5974,
    "Clnt": "João Vitor Abençoado",
    "Loja": ""
  },
  {
    "Id": 5975,
    "Clnt": "Erika Araujo",
    "Loja": ""
  },
  {
    "Id": 5976,
    "Clnt": "Eraldo Souza",
    "Loja": ""
  },
  {
    "Id": 5977,
    "Clnt": "carollayne_fe",
    "Loja": ""
  },
  {
    "Id": 5979,
    "Clnt": "Thurzão",
    "Loja": ""
  },
  {
    "Id": 5980,
    "Clnt": "Jefferson Thiago dos Santos",
    "Loja": ""
  },
  {
    "Id": 5981,
    "Clnt": "Valeria Tayana",
    "Loja": ""
  },
  {
    "Id": 5982,
    "Clnt": "Audilene",
    "Loja": ""
  },
  {
    "Id": 5983,
    "Clnt": "Moras",
    "Loja": ""
  },
  {
    "Id": 5984,
    "Clnt": "Neide Amiga",
    "Loja": ""
  },
  {
    "Id": 5986,
    "Clnt": "Edilson Touro",
    "Loja": ""
  },
  {
    "Id": 5987,
    "Clnt": "Emanoel",
    "Loja": "Central Mecanica"
  },
  {
    "Id": 5988,
    "Clnt": "Pedro Amigo",
    "Loja": ""
  },
  {
    "Id": 5989,
    "Clnt": "Irjmã Viviane",
    "Loja": ""
  },
  {
    "Id": 5991,
    "Clnt": "Robson Severino",
    "Loja": ""
  },
  {
    "Id": 5992,
    "Clnt": "Jussara Muniz",
    "Loja": ""
  },
  {
    "Id": 5993,
    "Clnt": "André Casamento",
    "Loja": ""
  },
  {
    "Id": 5994,
    "Clnt": "Karoliny Lima",
    "Loja": ""
  },
  {
    "Id": 5995,
    "Clnt": "Tio Albertinho",
    "Loja": ""
  },
  {
    "Id": 5996,
    "Clnt": "Arielly Mota",
    "Loja": ""
  },
  {
    "Id": 5997,
    "Clnt": "Alexandra",
    "Loja": ""
  },
  {
    "Id": 5998,
    "Clnt": "Tr.",
    "Loja": ""
  },
  {
    "Id": 5999,
    "Clnt": "Jeferson Jacaré",
    "Loja": ""
  },
  {
    "Id": 6000,
    "Clnt": "YuriJosé 244",
    "Loja": ""
  },
  {
    "Id": 6002,
    "Clnt": "Rildo",
    "Loja": ""
  },
  {
    "Id": 6003,
    "Clnt": "Happy Kids",
    "Loja": ""
  },
  {
    "Id": 6004,
    "Clnt": "TETE Kombi",
    "Loja": ""
  },
  {
    "Id": 6005,
    "Clnt": "Nataly Andrade",
    "Loja": ""
  },
  {
    "Id": 6006,
    "Clnt": "Adrielly Freitas",
    "Loja": ""
  },
  {
    "Id": 6007,
    "Clnt": "Bruno Rockeiro",
    "Loja": ""
  },
  {
    "Id": 6008,
    "Clnt": "Marcelo Hotel Lemos",
    "Loja": "Lixo"
  },
  {
    "Id": 6010,
    "Clnt": "Marcelo Mini Bug",
    "Loja": "Mini Bug"
  },
  {
    "Id": 6011,
    "Clnt": "Renato Roberto Ambulancia",
    "Loja": ""
  },
  {
    "Id": 6012,
    "Clnt": "Regilson",
    "Loja": ""
  },
  {
    "Id": 6013,
    "Clnt": "Yasmim Fernanda",
    "Loja": ""
  },
  {
    "Id": 6014,
    "Clnt": "Mãe de dadinho",
    "Loja": ""
  },
  {
    "Id": 6015,
    "Clnt": "Elza Oliveira",
    "Loja": ""
  },
  {
    "Id": 6016,
    "Clnt": "Italo Kuds",
    "Loja": ""
  },
  {
    "Id": 6018,
    "Clnt": "Lucas Cartela",
    "Loja": ""
  },
  {
    "Id": 6020,
    "Clnt": "marcelo mini burg",
    "Loja": "Lixo"
  },
  {
    "Id": 6022,
    "Clnt": "Hozana",
    "Loja": ""
  },
  {
    "Id": 6023,
    "Clnt": "Sidrake",
    "Loja": ""
  },
  {
    "Id": 6024,
    "Clnt": "M4theus",
    "Loja": ""
  },
  {
    "Id": 6025,
    "Clnt": "Mail Joselha",
    "Loja": ""
  },
  {
    "Id": 6026,
    "Clnt": "Marlon Ramos",
    "Loja": ""
  },
  {
    "Id": 6027,
    "Clnt": "Jonas Moto",
    "Loja": ""
  },
  {
    "Id": 6028,
    "Clnt": "meninos",
    "Loja": ""
  },
  {
    "Id": 6029,
    "Clnt": "Anderson de Lima",
    "Loja": ""
  },
  {
    "Id": 6030,
    "Clnt": "Vicete do taxi",
    "Loja": ""
  },
  {
    "Id": 6031,
    "Clnt": "Kaun Cacheado",
    "Loja": ""
  },
  {
    "Id": 6032,
    "Clnt": "boy galego",
    "Loja": ""
  },
  {
    "Id": 6033,
    "Clnt": "Otavio da Uva",
    "Loja": ""
  },
  {
    "Id": 6034,
    "Clnt": "Marivaldo Frete",
    "Loja": ""
  },
  {
    "Id": 6035,
    "Clnt": "Henrique da Moto",
    "Loja": ""
  },
  {
    "Id": 6036,
    "Clnt": "Aline",
    "Loja": ""
  },
  {
    "Id": 6038,
    "Clnt": "Jefferson Leolpodino",
    "Loja": ""
  },
  {
    "Id": 6039,
    "Clnt": "Livia",
    "Loja": ""
  },
  {
    "Id": 6040,
    "Clnt": "Ewerton Monte Aqui",
    "Loja": ""
  },
  {
    "Id": 6041,
    "Clnt": "Thyfanny Rayane",
    "Loja": ""
  },
  {
    "Id": 6042,
    "Clnt": "Emporio do Parque",
    "Loja": ""
  },
  {
    "Id": 6043,
    "Clnt": "Luciano Casa de Rolamento",
    "Loja": ""
  },
  {
    "Id": 6044,
    "Clnt": "Everaldo (Renato)",
    "Loja": ""
  },
  {
    "Id": 6046,
    "Clnt": "Nova Geração",
    "Loja": ""
  },
  {
    "Id": 6047,
    "Clnt": "Alfreso (Fenix)",
    "Loja": ""
  },
  {
    "Id": 6048,
    "Clnt": "Maria do Socorro",
    "Loja": ""
  },
  {
    "Id": 6049,
    "Clnt": "Boy Criança Cabeludo",
    "Loja": ""
  },
  {
    "Id": 6050,
    "Clnt": "Panela de barro",
    "Loja": ""
  },
  {
    "Id": 6051,
    "Clnt": "Ivanildo",
    "Loja": ""
  },
  {
    "Id": 6052,
    "Clnt": "Lucas  Guilheme ",
    "Loja": ""
  },
  {
    "Id": 6053,
    "Clnt": "Alvandir",
    "Loja": ""
  },
  {
    "Id": 6054,
    "Clnt": "Deivd Malagueta",
    "Loja": ""
  },
  {
    "Id": 6055,
    "Clnt": "Alan Estetica Automotiva",
    "Loja": ""
  },
  {
    "Id": 6056,
    "Clnt": "Janai",
    "Loja": ""
  },
  {
    "Id": 6058,
    "Clnt": "Couro Urbano",
    "Loja": ""
  },
  {
    "Id": 6059,
    "Clnt": "Mateus Cabeção",
    "Loja": ""
  },
  {
    "Id": 6060,
    "Clnt": "Biel Gordinho Galego",
    "Loja": ""
  },
  {
    "Id": 6061,
    "Clnt": "Guiado Por Deus",
    "Loja": ""
  },
  {
    "Id": 6062,
    "Clnt": "lorinho Cacheado",
    "Loja": ""
  },
  {
    "Id": 6063,
    "Clnt": "Lucas Barbosa",
    "Loja": ""
  },
  {
    "Id": 6064,
    "Clnt": "G-Kezia",
    "Loja": ""
  },
  {
    "Id": 6065,
    "Clnt": "Barbearia Alves",
    "Loja": ""
  },
  {
    "Id": 6066,
    "Clnt": "Vinicius da Vila",
    "Loja": ""
  },
  {
    "Id": 6067,
    "Clnt": "Vinicius Vaqueiro",
    "Loja": ""
  },
  {
    "Id": 6068,
    "Clnt": "João Vitor Jv",
    "Loja": ""
  },
  {
    "Id": 6069,
    "Clnt": "Ketyli ",
    "Loja": ""
  },
  {
    "Id": 6070,
    "Clnt": "Jeane",
    "Loja": ""
  },
  {
    "Id": 6071,
    "Clnt": "Wanderson Satvision Solar",
    "Loja": ""
  },
  {
    "Id": 6072,
    "Clnt": "Tiago Israel",
    "Loja": ""
  },
  {
    "Id": 6073,
    "Clnt": "Geraldo Alves",
    "Loja": ""
  },
  {
    "Id": 6074,
    "Clnt": "Deivison",
    "Loja": ""
  },
  {
    "Id": 6075,
    "Clnt": "Anderson (Escolar)",
    "Loja": ""
  },
  {
    "Id": 6076,
    "Clnt": "Anderson Lima",
    "Loja": "Adega"
  },
  {
    "Id": 6077,
    "Clnt": "Wandeson",
    "Loja": ""
  },
  {
    "Id": 6078,
    "Clnt": "Irmã Monica",
    "Loja": ""
  },
  {
    "Id": 6079,
    "Clnt": "Iasmim Fernanda",
    "Loja": ""
  },
  {
    "Id": 6080,
    "Clnt": "Willian Frete",
    "Loja": ""
  },
  {
    "Id": 6081,
    "Clnt": "Vitor",
    "Loja": ""
  },
  {
    "Id": 6082,
    "Clnt": "Yasmin T",
    "Loja": ""
  },
  {
    "Id": 6083,
    "Clnt": "Rose Cachos",
    "Loja": ""
  },
  {
    "Id": 6084,
    "Clnt": "Casa da Cenoura",
    "Loja": ""
  },
  {
    "Id": 6085,
    "Clnt": "Jotinhaafera",
    "Loja": ""
  },
  {
    "Id": 6086,
    "Clnt": "Aline Placas",
    "Loja": ""
  },
  {
    "Id": 6087,
    "Clnt": "Stephany Luna",
    "Loja": ""
  },
  {
    "Id": 6088,
    "Clnt": "Beatriz Garcia",
    "Loja": ""
  },
  {
    "Id": 6089,
    "Clnt": "Jeffeson Leopoldino",
    "Loja": ""
  },
  {
    "Id": 6090,
    "Clnt": "Nido Motos",
    "Loja": ""
  },
  {
    "Id": 6091,
    "Clnt": "Nego Jato",
    "Loja": ""
  },
  {
    "Id": 6092,
    "Clnt": "Ricardo Dias",
    "Loja": ""
  },
  {
    "Id": 6093,
    "Clnt": "Boy do Passarinho",
    "Loja": ""
  },
  {
    "Id": 6094,
    "Clnt": "Rodrigo Maia",
    "Loja": ""
  },
  {
    "Id": 6095,
    "Clnt": "Biro Jato",
    "Loja": ""
  },
  {
    "Id": 6096,
    "Clnt": "Manoel Ricardo (Santa Cruz)",
    "Loja": ""
  },
  {
    "Id": 6098,
    "Clnt": "Lucas cartela amg JAci",
    "Loja": ""
  },
  {
    "Id": 6099,
    "Clnt": "Zero81",
    "Loja": ""
  },
  {
    "Id": 6101,
    "Clnt": "Marco Sena",
    "Loja": ""
  },
  {
    "Id": 6102,
    "Clnt": "Regi Desmanche",
    "Loja": ""
  },
  {
    "Id": 6103,
    "Clnt": "Michelli Rocha",
    "Loja": ""
  },
  {
    "Id": 6104,
    "Clnt": "Robson",
    "Loja": ""
  },
  {
    "Id": 6105,
    "Clnt": "Thaigo Francisco",
    "Loja": ""
  },
  {
    "Id": 6106,
    "Clnt": "Kelia",
    "Loja": ""
  },
  {
    "Id": 6107,
    "Clnt": "Sergio sertec",
    "Loja": ""
  },
  {
    "Id": 6108,
    "Clnt": "Leila Alexandrino",
    "Loja": ""
  },
  {
    "Id": 6112,
    "Clnt": "Diego Rodrigues",
    "Loja": ""
  },
  {
    "Id": 6113,
    "Clnt": "Burger Davi Golias",
    "Loja": ""
  },
  {
    "Id": 6114,
    "Clnt": "Rege Jato",
    "Loja": ""
  },
  {
    "Id": 6115,
    "Clnt": "Alexndre Rodrigues",
    "Loja": ""
  },
  {
    "Id": 6116,
    "Clnt": "Talita Micaela",
    "Loja": ""
  },
  {
    "Id": 6117,
    "Clnt": "Pedro Moveis",
    "Loja": ""
  },
  {
    "Id": 6119,
    "Clnt": "Edvan Carlos",
    "Loja": ""
  },
  {
    "Id": 6120,
    "Clnt": "Riquinho",
    "Loja": ""
  },
  {
    "Id": 6121,
    "Clnt": "Ricardo Pai Ita",
    "Loja": ""
  },
  {
    "Id": 6122,
    "Clnt": "Meyre",
    "Loja": ""
  },
  {
    "Id": 6123,
    "Clnt": "Rodolfo Macedo",
    "Loja": ""
  },
  {
    "Id": 6124,
    "Clnt": "Fred Cartões",
    "Loja": ""
  },
  {
    "Id": 6125,
    "Clnt": "Braulio",
    "Loja": "(Adubo)"
  },
  {
    "Id": 6126,
    "Clnt": "Roseane Laços da Gi",
    "Loja": ""
  },
  {
    "Id": 6127,
    "Clnt": "Espetinho Alex",
    "Loja": ""
  },
  {
    "Id": 6128,
    "Clnt": "Zizi",
    "Loja": ""
  },
  {
    "Id": 6129,
    "Clnt": "Ruan",
    "Loja": ""
  },
  {
    "Id": 6130,
    "Clnt": "Moreno Reggae",
    "Loja": ""
  },
  {
    "Id": 6131,
    "Clnt": "Tiel",
    "Loja": ""
  },
  {
    "Id": 6132,
    "Clnt": "Lukita Burger",
    "Loja": ""
  },
  {
    "Id": 6133,
    "Clnt": "Alan Menino",
    "Loja": ""
  },
  {
    "Id": 6134,
    "Clnt": "menor B5",
    "Loja": ""
  },
  {
    "Id": 6135,
    "Clnt": "Shelbe",
    "Loja": ""
  },
  {
    "Id": 6136,
    "Clnt": "Dido",
    "Loja": ""
  },
  {
    "Id": 6137,
    "Clnt": "Basttos",
    "Loja": ""
  },
  {
    "Id": 6138,
    "Clnt": "Lucenita",
    "Loja": ""
  },
  {
    "Id": 6139,
    "Clnt": "Adriano Lava Jato",
    "Loja": ""
  },
  {
    "Id": 6140,
    "Clnt": "Beh Petshop",
    "Loja": ""
  },
  {
    "Id": 6141,
    "Clnt": "Carlos Eduardo",
    "Loja": ""
  },
  {
    "Id": 6142,
    "Clnt": "Jessy",
    "Loja": ""
  },
  {
    "Id": 6143,
    "Clnt": "Jose Alves",
    "Loja": ""
  },
  {
    "Id": 6144,
    "Clnt": "Jaci",
    "Loja": ""
  },
  {
    "Id": 6145,
    "Clnt": "Ruan Maguinho de oculus",
    "Loja": ""
  },
  {
    "Id": 6147,
    "Clnt": "Jessica Igreja",
    "Loja": ""
  },
  {
    "Id": 6148,
    "Clnt": "Pedro Lima Martins",
    "Loja": ""
  },
  {
    "Id": 6149,
    "Clnt": "Pedrinho.vz1",
    "Loja": ""
  },
  {
    "Id": 6150,
    "Clnt": "Binho Motos",
    "Loja": ""
  },
  {
    "Id": 6151,
    "Clnt": "Camila Souza",
    "Loja": ""
  },
  {
    "Id": 6152,
    "Clnt": "Vitinho Barbeiro",
    "Loja": ""
  },
  {
    "Id": 6153,
    "Clnt": "Denize",
    "Loja": ""
  },
  {
    "Id": 6155,
    "Clnt": "Borgem",
    "Loja": ""
  },
  {
    "Id": 6156,
    "Clnt": "Ewerton Morais",
    "Loja": ""
  },
  {
    "Id": 6157,
    "Clnt": "Theuzinn",
    "Loja": ""
  },
  {
    "Id": 6158,
    "Clnt": "Silvaalexandro",
    "Loja": ""
  },
  {
    "Id": 6159,
    "Clnt": "Ruta Dayana",
    "Loja": ""
  },
  {
    "Id": 6160,
    "Clnt": "Lucas Kauã",
    "Loja": ""
  },
  {
    "Id": 6161,
    "Clnt": "Anderson Luiz",
    "Loja": ""
  },
  {
    "Id": 6162,
    "Clnt": "Nice Galdino",
    "Loja": ""
  },
  {
    "Id": 6163,
    "Clnt": "Bruna Virginia",
    "Loja": ""
  },
  {
    "Id": 6164,
    "Clnt": "Anderson Jose",
    "Loja": ""
  },
  {
    "Id": 6165,
    "Clnt": "Irma Monica",
    "Loja": ""
  },
  {
    "Id": 6166,
    "Clnt": "Roseane",
    "Loja": ""
  },
  {
    "Id": 6167,
    "Clnt": "Adriano Bezerra",
    "Loja": ""
  },
  {
    "Id": 6168,
    "Clnt": "Lord Barber",
    "Loja": ""
  },
  {
    "Id": 6169,
    "Clnt": "Tarcisio Condomínio",
    "Loja": ""
  },
  {
    "Id": 6170,
    "Clnt": "Luckas Tony",
    "Loja": ""
  },
  {
    "Id": 6171,
    "Clnt": "Erica",
    "Loja": ""
  },
  {
    "Id": 6172,
    "Clnt": "Lais",
    "Loja": ""
  },
  {
    "Id": 6173,
    "Clnt": "Vitor",
    "Loja": ""
  },
  {
    "Id": 6174,
    "Clnt": "Cliente Lula",
    "Loja": ""
  },
  {
    "Id": 6175,
    "Clnt": "Geovane",
    "Loja": ""
  },
  {
    "Id": 6176,
    "Clnt": "Daminhão Samuel",
    "Loja": ""
  },
  {
    "Id": 6177,
    "Clnt": "Mix infocell",
    "Loja": ""
  },
  {
    "Id": 6179,
    "Clnt": "Samoel",
    "Loja": ""
  },
  {
    "Id": 6180,
    "Clnt": "João Vitor JV",
    "Loja": ""
  },
  {
    "Id": 6181,
    "Clnt": "Baixinho ",
    "Loja": ""
  },
  {
    "Id": 6182,
    "Clnt": "Edson",
    "Loja": ""
  },
  {
    "Id": 6183,
    "Clnt": "Rute Fabricio",
    "Loja": ""
  },
  {
    "Id": 6184,
    "Clnt": "Emylle Isa",
    "Loja": ""
  },
  {
    "Id": 6185,
    "Clnt": "Carla Pastora",
    "Loja": ""
  },
  {
    "Id": 6186,
    "Clnt": "Lilian",
    "Loja": ""
  },
  {
    "Id": 6187,
    "Clnt": "Irmão Junior",
    "Loja": ""
  },
  {
    "Id": 6189,
    "Clnt": "Areli",
    "Loja": ""
  },
  {
    "Id": 6190,
    "Clnt": "Macio 244",
    "Loja": ""
  },
  {
    "Id": 6192,
    "Clnt": "João",
    "Loja": ""
  },
  {
    "Id": 6193,
    "Clnt": "Will",
    "Loja": ""
  },
  {
    "Id": 6194,
    "Clnt": "Gratidão",
    "Loja": ""
  },
  {
    "Id": 6195,
    "Clnt": "Jo Maria",
    "Loja": ""
  },
  {
    "Id": 6196,
    "Clnt": "Bruna",
    "Loja": ""
  },
  {
    "Id": 6197,
    "Clnt": "Deise",
    "Loja": ""
  },
  {
    "Id": 6198,
    "Clnt": "Dayane",
    "Loja": ""
  },
  {
    "Id": 6199,
    "Clnt": "Michelly Rocha",
    "Loja": ""
  },
  {
    "Id": 6200,
    "Clnt": "Renata Caldas",
    "Loja": ""
  },
  {
    "Id": 6201,
    "Clnt": "Luiz Claudio",
    "Loja": ""
  },
  {
    "Id": 6202,
    "Clnt": "Jeffeson Adesivador",
    "Loja": ""
  },
  {
    "Id": 6203,
    "Clnt": "Simone Silva",
    "Loja": ""
  },
  {
    "Id": 6204,
    "Clnt": "Bolos Caseiro",
    "Loja": ""
  },
  {
    "Id": 6205,
    "Clnt": "Fernando Brasil Extremo",
    "Loja": ""
  },
  {
    "Id": 6206,
    "Clnt": "Zacarias",
    "Loja": ""
  },
  {
    "Id": 6207,
    "Clnt": "Davd",
    "Loja": ""
  },
  {
    "Id": 6208,
    "Clnt": "Revotado",
    "Loja": ""
  },
  {
    "Id": 6209,
    "Clnt": "Rodrigo Roma",
    "Loja": ""
  },
  {
    "Id": 6210,
    "Clnt": "Ds Daniel",
    "Loja": ""
  },
  {
    "Id": 6211,
    "Clnt": "Natalia Medeiros",
    "Loja": ""
  },
  {
    "Id": 6212,
    "Clnt": "Daiana",
    "Loja": ""
  },
  {
    "Id": 6213,
    "Clnt": "Toni",
    "Loja": ""
  },
  {
    "Id": 6215,
    "Clnt": "Eraldo Jose",
    "Loja": ""
  },
  {
    "Id": 6216,
    "Clnt": "Nikole",
    "Loja": ""
  },
  {
    "Id": 6217,
    "Clnt": "Emilly isa",
    "Loja": ""
  },
  {
    "Id": 6218,
    "Clnt": "Andre  Borges",
    "Loja": ""
  },
  {
    "Id": 6219,
    "Clnt": "Erik",
    "Loja": ""
  },
  {
    "Id": 6220,
    "Clnt": "Pastor Josueu",
    "Loja": ""
  },
  {
    "Id": 6222,
    "Clnt": "João vitor",
    "Loja": ""
  },
  {
    "Id": 6223,
    "Clnt": "Criancinha",
    "Loja": ""
  },
  {
    "Id": 6224,
    "Clnt": "Victor Alburquerquer",
    "Loja": ""
  },
  {
    "Id": 6225,
    "Clnt": "Adriana Cysneiro",
    "Loja": ""
  },
  {
    "Id": 6226,
    "Clnt": "Daivoson",
    "Loja": ""
  },
  {
    "Id": 6227,
    "Clnt": "Graziele",
    "Loja": ""
  },
  {
    "Id": 6228,
    "Clnt": "Jasminy",
    "Loja": ""
  },
  {
    "Id": 6229,
    "Clnt": "Natalia Criança",
    "Loja": ""
  },
  {
    "Id": 6230,
    "Clnt": "Lukas magnifico",
    "Loja": ""
  },
  {
    "Id": 6231,
    "Clnt": "Fennefer",
    "Loja": ""
  },
  {
    "Id": 6232,
    "Clnt": "Ana",
    "Loja": ""
  },
  {
    "Id": 6233,
    "Clnt": "Oficina Bake",
    "Loja": ""
  }
]