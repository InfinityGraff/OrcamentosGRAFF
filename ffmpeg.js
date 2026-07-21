import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile } from "@ffmpeg/util";


const ffmpeg = new FFmpeg();


export async function loadFFmpeg(){

    if(!ffmpeg.loaded){

        await ffmpeg.load();

    }

}


export async function exportVideo(takes){


    await loadFFmpeg();


    let inputs = [];


    for(let i=0;i<takes.length;i++){


        const take = takes[i];


        const filename =
            `input${i}.mp4`;


        await ffmpeg.writeFile(

            filename,

            await fetchFile(take.file)

        );


        inputs.push(filename);


    }


    let filter = "";


    inputs.forEach((file,index)=>{


        const take = takes[index];


        filter +=

        `[${index}:v]trim=`+

        `start=${take.start}:end=${take.end},`+

        `setpts=PTS-STARTPTS[v${index}];`;


    });



    const concatInputs =

    takes
    .map((_,i)=>`[v${i}]`)
    .join("");



    filter +=

    `${concatInputs}`+

    `concat=n=${takes.length}:v=1:a=0[outv]`;



    await ffmpeg.exec([


        ...inputs.flatMap(
            file=>["-i",file]
        ),


        "-filter_complex",

        filter,


        "-map",

        "[outv]",


        "-c:v",

        "libx264",


        "-preset",

        "fast",


        "saida.mp4"


    ]);



    const data =

        await ffmpeg.readFile(
            "saida.mp4"
        );


    const url =

        URL.createObjectURL(

            new Blob(

                [data.buffer],

                {
                    type:"video/mp4"
                }

            )

        );


    return url;

}