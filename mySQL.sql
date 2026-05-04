CREATE OR REPLACE FUNCTION GetDsngUsers()
RETURNS TABLE (
    "Rank"  text,
    "Nome"  text,
    "User"  text,
    "Crgo"  text,
    "On"    boolean,
    "Artes" jsonb
)
LANGUAGE sql
SECURITY DEFINER
AS $$
    
    SELECT
        U."Rank",
        U."Nome",
        U."User",
        U."Crgo",
        U."On",

        COALESCE(
            (
                SELECT jsonb_agg(
                    jsonb_build_object(
                        'Clnt',  A."Clnt",
                        'Data',  A."Data",
                        'Dslk',  A."Dslk",
                        'Dsng',  A."Dsng",
                        'Id',    A."Id",
                        'Img',   A."Img",
                        'Nome',  A."Nome",
                        'Prazo', A."Prazo",
                        'Stts',  A."Stts",
                        'Tema',  A."Tema",
                        'Tempo', A."Tempo",
                        'Tipo',  A."Tipo",
                        'Valr',  A."Valr"
                    )
                )
                FROM public."ARTE" A
                WHERE A."user_id" = U."Id"
            ),
            '[]'::jsonb
        ) AS "Artes"

    FROM public."USER2" U

    WHERE U."Prof" ? 'Dsng';

$$;