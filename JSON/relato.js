// como ficava antes

const J = {
    PDDS: DadosPDDS,
    SERV: DadosPDDS.flatMap(obj=>obj.Serv),
    PGMT: DadosPDDS.flatMap(obj=>obj.Pgmt),
    GRAD: DadosGRAD,
    MPAG: DadosMPAG,
    OOSS: DadosOOSS,
    UBER: DadosUBER,
    CLNT: DadosCLNT,
}