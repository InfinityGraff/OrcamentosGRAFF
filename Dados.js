const J = {
    PDDS:[{
    "ID": 1,
    "RG": "02/12/2024 21:50:23",
    "Data": "2024-12-02",
    "Clnt": 1,
    "Serv": 1,
    "Valr": "",
    "Pgmt": "",
    "Lcro": "",
    "Stts": "001",
    "OFF": 1
},
{
    "ID": 3,
    "RG": "04/12/2024 00:56:56",
    "Data": "2024-12-03",
    "Clnt": 2,
    "Serv": 1,
    "Valr": "",
    "Pgmt": "",
    "Lcro": "",
    "Stts": "004",
    "OFF": 1
},
{
    "ID": 4,
    "RG": "04/12/2024 01:34:35",
    "Data": "2024-12-03",
    "Clnt": 3,
    "Serv": 1,
    "Valr": "",
    "Pgmt": 1,
    "Lcro": "",
    "Stts": "006",
    "OFF": 1








},],SERV:[{
    "ID": "1|1",
    "Serv": "Quadro",
    "Desc": "",
    "Calc": {
        "Typ": "M2",
        "Lag": 0.2,
        "Alt": 0.3,
        "Qnt": 1,
        "Val": ""
    },
    "Arte": "Baby",
    "Valr": "16",
    "Forn": "BPrint",
    "OK": true,
    "Entregue": true,
    "DataEntg": "",
    "Coment": "",
    "SVG": "",
    "Grad": 8,
    "Clnt": 1449,
    "Data": "2024-12-02"
},
{
    "ID": "2|1",
    "Serv": "Banner",
    "Desc": "",
    "Calc": {
        "Typ": "M2",
        "Lag": 2,
        "Alt": 0.6,
        "Qnt": 1,
        "Val": ""
    },
    "Arte": "",
    "Valr": "80",
    "Forn": "-",
    "OK": false,
    "Entregue": false,
    "DataEntg": "",
    "Coment": "",
    "SVG": "",
    "Grad": "",
    "Clnt": 1450,
    "Data": ""
},
{
    "ID": "3|1",
    "Serv": "Adesivo",
    "Desc": "2 - A4",
    "Calc": {
        "Typ": "",
        "Lag": "",
        "Alt": "",
        "Qnt": "",
        "Val": ""
    },
    "Arte": "Baby",
    "Valr": "16",
    "Forn": "BPrint",
    "OK": true,
    "Entregue": true,
    "DataEntg": "",
    "Coment": "",
    "SVG": "",
    "Grad": 8,
    "Clnt": 1451,
    "Data": "2024-12-03"
},
{
    "ID": "4|1",
    "Serv": "Arte",
    "Desc": "Rifa",
    "Calc": {
        "Typ": "",
        "Lag": "",
        "Alt": "",
        "Qnt": "",
        "Val": ""
    },
    "Arte": "Baby",
    "Valr": "10",
    "Forn": "Arte",
    "OK": true,
    "Entregue": true,
    "DataEntg": "",
    "Coment": "",
    "SVG": "",
    "Grad": "",
    "Clnt": 125,
    "Data": "2024-12-03"
},],CLNT:[    {
    "ID": 1,
    "Clnt": "Manu trailer",
    "Cmpt": "",
    "Cntt": "(81) 98430-3095",
    "Lcal": "Centro",
    "Loja": "",
    "CtLj": "",
    "Cat": "Maquiagem",
    "Stts": "",
    "Link": ""
},
{
    "ID": 2,
    "Clnt": "Coloral",
    "Cmpt": "",
    "Cntt": "(81) 99624-5098",
    "Lcal": "Estrada do Tip",
    "Loja": "",
    "CtLj": "",
    "Cat": "",
    "Stts": "",
    "Link": ""
},
{
    "ID": 3,
    "Clnt": "Elizangela Nails",
    "Cmpt": "",
    "Cntt": "(81) 99624-5098",
    "Lcal": "Estrada do Tip",
    "Loja": "",
    "CtLj": "",
    "Cat": "Salão",
    "Stts": "",
    "Link": ""
},],PGMT:[],GRAD:[],OOSS:[],UBER:[],MPAG:[]}


const NovoJson = [
    {
        "Id": 1,
        "Rg": "2025-03-12 14:30:00",
        "Data": "2025-03-12",
        "Clnt": 123,  
        "Serv": [
          {
            "Id": 1,
            "Serv": "Impressão de adesivos",
            "Desc": "Adesivos personalizados para vitrines",
            "Calc": [
              "30|40|10",
              "50|60|5"
            ],
            "Arte": true,
            "Valr": 150.00,
            "Forn": "Fornecedor X",
            "Ok": true,
            "Entregue": false,
            "Data_entregue": null,
            "Coment": "Cliente pediu bordas arredondadas",
            "Svg": "<svg>...</svg>"
          },
          {
            "Id": 2,
            "Serv": "Corte de adesivos",
            "Desc": "Corte especial em adesivos personalizados",
            "Calc": [
              "20|30|15"
            ],
            "Arte": false,
            "Valr": 80.00,
            "Forn": "Fornecedor Y",
            "Ok": true,
            "Entregue": true,
            "Data_entregue": "2025-03-11",
            "Coment": "Corte ajustado conforme solicitado",
            "Svg": "<svg>...</svg>"
          }
        ],
        "Valr": 230.00,
        "Pgmt": [
          {
            "Id": 1,
            "Data": "2025-03-12 15:00:00",
            "Valor": 100.00,
            "Forma": "Pix",
            "Desc": "Pagamento inicial",
            "Mpag": true
          },
          {
            "Id": 2,
            "Data": "2025-03-13 10:30:00",
            "Valor": 130.00,
            "Forma": "Dinheiro",
            "Desc": "Pagamento final",
            "Mpag": true
          }
        ],
        "Finc": "Pago"
      }
      
]