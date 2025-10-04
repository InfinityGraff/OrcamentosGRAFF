const ValidEmail  = ["@gmail.com","@yahoo.com","@yahoo.co.uk","@outlook.com","@hotmail.com","@live.com","@icloud.com","@me.com","@aol.com","@protonmail.com","@zoho.com","@mail.com","@gmx.com","@yandex.com"]
const StockjVinil = ["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF","#FFA500","#A52A2A","#800080","#000000","#FFFFFF","#808080"]
const Eximg       = ["jpg","jpeg","png","gif","webp","svg"]

const CopyPresset = {
    Pix:`
  Chave: 81987265401
  Nome: Alan Ferreira da Silva`
}

const TM = {
     Edi :'contenteditable="true"'
    ,Err :`onerror="this.src='./SVG/placeholder.svg'"`
    ,Pss:'Senha Inválida'
}
const Mnsg  = {PreTbl:(Typ)=>`A Tabela ${Typ} já estava Carregada...`}

const SVGEtapas = {

    'Orçamento'  :`<svg name="Orçamento"   class="EtpSVG P-P" viewBox="0 0 397.77 408.68">
        <path class="fil0" d="M99.19 84.48c0,-3 0.91,-3.91 3.91,-3.91l151.17 0 0 37.78c0,20.7 44.31,2.44 44.31,14.33l0 192.82c0,3 -0.91,3.91 -3.91,3.91l-191.56 0c-4.99,0 -2.7,-0.77 -3.3,-3.01 -1.57,-5.9 0.69,-42.64 0.71,-50.41 0.01,-9.1 -1.27,-13.05 -1.37,-20.79l0.05 -170.72zm36.49 192.82c0,5.35 5.23,11.73 11.73,11.73l67.76 0c20.75,0 21.09,-24.75 -1.3,-24.75l-65.16 0c-6.67,0 -13.03,6.85 -13.03,13.03zm0 -58.63c0,6.1 6.4,11.73 13.03,11.73l97.74 0c24.88,0 21.86,-24.75 5.21,-24.75l-104.25 0c-7.21,0 -11.73,5.87 -11.73,13.03zm-1.3 -61.23c0,5.35 5.23,11.73 11.73,11.73l102.95 0c21.42,0 20.78,-24.75 -1.3,-24.75l-100.34 0c-6.67,0 -13.03,6.85 -13.03,13.03zm-58.64 -82.08l0 256.66c0,6.68 2.36,9.47 5.14,13.1 1.81,2.37 6.89,7.75 10.49,7.75l213.72 0c8.79,0 16.94,-11.43 16.94,-20.84l0 -218.88c0,-7 -7.37,-11.94 -11.4,-15.96 -5.42,-5.42 -37.97,-41.36 -43.33,-41.36l-172.02 0c-7.85,0 -19.55,11.69 -19.55,19.54z"/>
    </svg>
    `,
    'Arte'       :`<svg name="Arte"        class="EtpSVG P-P" viewBox="0 0 397.77 408.68">
        <path d="M285.23 175.49c18.81,-25.7 37.08,-54.64 54.48,-81.51 10.14,-16.33 23.09,-44.07 -4.34,-51.65 -21.94,-6.07 -43.6,15.14 -59.01,28.46 -10.14,8.77 -20.03,17.83 -29.99,26.81 -12.98,11.69 -25.76,23.54 -38.58,35.4 -18.15,16.77 -65.64,61.86 -65.28,87.13 0.13,2.1 0.48,2.89 1.23,4.78 9.4,9.68 18.98,20 28.5,29.45 9.94,9.88 18.4,11.21 31.71,6.94 16.63,-5.33 33.38,-26.42 44.69,-39.55 12.89,-14.96 24.9,-30.34 36.59,-46.26zm-109.14 107.27l-45.55 -41.29c-4.27,-3.51 -4.56,-3.39 -10.76,-4.13 -31.76,-2.59 -58.52,10.48 -56.66,46.08 1.6,25.64 8.5,37.44 -10.58,58.2 -8.1,8.82 -10.38,14.75 2.72,20.22 35.03,13.82 88.27,1.37 108.91,-31.52 8.86,-14.13 11.32,-31.17 11.91,-47.56z"/>
    </svg>
    `,
    'Analise Art':`<svg name="Analise Art" class="EtpSVG P-P" viewBox="0 0 397.77 408.68">
        <path d="M285.23 175.49c18.81,-25.7 37.08,-54.64 54.48,-81.51 10.14,-16.33 23.09,-44.07 -4.34,-51.65 -21.94,-6.07 -43.6,15.14 -59.01,28.46 -10.14,8.77 -20.03,17.83 -29.99,26.81 -12.98,11.69 -25.76,23.54 -38.58,35.4 -18.15,16.77 -65.64,61.86 -65.28,87.13 0.13,2.1 0.48,2.89 1.23,4.78 9.4,9.68 18.98,20 28.5,29.45 9.94,9.88 18.4,11.21 31.71,6.94 16.63,-5.33 33.38,-26.42 44.69,-39.55 12.89,-14.96 24.9,-30.34 36.59,-46.26zm-109.14 107.27l-45.55 -41.29c-4.27,-3.51 -4.56,-3.39 -10.76,-4.13 -31.76,-2.59 -58.52,10.48 -56.66,46.08 1.6,25.64 8.5,37.44 -10.58,58.2 -8.1,8.82 -10.38,14.75 2.72,20.22 35.03,13.82 88.27,1.37 108.91,-31.52 8.86,-14.13 11.32,-31.17 11.91,-47.56z"/>
    </svg>
    `,
    'Impressão'  :`<svg name="Impressão"   class="EtpSVG P-P" viewBox="0 0 397.77 408.68">
        <path d="M314 176.66c0,-16.29 21.09,-13.29 21.09,-0.88 0,10.33 -7.7,10.54 -13.18,10.54 -2.61,0 -7.91,-4.44 -7.91,-9.66zm-191.57 94.88l-0.24 45.19c-0.41,10.96 -1.24,23.89 7.69,29.08 1.41,0.82 4.86,2.17 6.62,2.17l123.9 0c6.62,0 15.82,-8.5 15.82,-18.45 0,-10.93 0.83,-63.16 -0.92,-70.24 -0.74,-3.02 -2.31,-4.43 -6.11,-4.43l-141.48 0c-8.04,0 -5.27,10.04 -5.27,16.69zm-35.87 -140.56c-5.4,0.43 -11.41,0.15 -17.29,0l-0.01 0c-8.7,-0.22 -17.12,-0.15 -22.94,2.98 -2.75,1.48 -5.23,3.24 -7.41,4.89 -7.77,5.89 -11.39,16.93 -11.39,27.27l0 87.85c0,12.03 3.82,20.71 13.17,27.25 12.61,8.83 28.65,6.13 47.47,6.13 3.19,0 4.9,-0.74 7.03,-1.76 3.55,-15.24 -1.9,-42.05 2.61,-49.22 1.77,-2.81 6.09,-7 10.57,-7l177.51 0c6.86,0 8.81,1.54 12.08,5.5 3.82,4.63 2.87,7.87 2.86,15.59 -0.02,13.15 -0.19,22.33 0.88,35.14 6.14,1.43 43.08,2.36 50.4,-1.45 1.83,-0.95 0.9,-0.56 2.23,-1.29l6.06 -4.48c5.17,-4.62 9.85,-10.39 9.85,-18.26l0 -96.64c0,-13.75 -5.96,-21.54 -14.05,-27.25 -4.18,-2.95 -9.22,-4.48 -14.52,-5.25l-255.11 0zm219.73 -15.35c0.27,-16.41 0.37,-39.18 -3.09,-45.9 -1.87,-3.65 -7.01,-9.04 -12.05,-9.04l-183.66 0c-7.77,0 -9.36,3.76 -12.04,9.05 -4.73,9.37 -2.68,30.27 -2.26,45.89l213.09 0z"/>
    </svg>
    `,
    'Acabamento' :`<svg name="Acabamento"  class="EtpSVG P-P" viewBox="0 0 397.77 408.68">
        <path d="M330.12 159.77l-22.31 -13.92 -6.57 10.54 22.31 13.92 6.57 -10.54zm-151.84 95.53c-3.38,5.42 -14.92,21.63 -19.74,27.09 -11.44,12.97 -24.32,33.32 -30.72,50.18 -2.96,7.79 -5.86,12.91 -14.22,16.26 -3.74,1.5 -10.29,2.12 -15.44,-1.1l-39.68 -24.72c-1.68,-1.05 -3.89,-4 -4.74,-5.42 -9.72,-16.33 11.06,-30.89 17.32,-40.91 10.14,-16.23 13.57,-22.32 22.24,-39.65 6.48,-12.96 14.14,-27.72 23.13,-38.13 2.8,-3.24 6.62,-6.59 9.88,-9.31l21.17 -14.58 45.88 28.58c-1.95,3.97 -0.65,28.61 -15.08,51.71zm167.09 -93.76l-27.06 43.38c-2.99,4.79 -7.28,5.78 -12.07,2.8l-30.99 -19.33c-12.29,-7.66 -5.21,-25.71 -27.47,-31.61 -14.48,-3.83 -29.73,7.37 -36.57,18.35l-12.23 19.46 -45.87 -28.58 10.7 -17.01c7.01,-11.24 8.37,-23.39 5.42,-32.54 -5.46,-16.96 -24.48,-27.23 -41.17,-30.23 -5.32,-0.95 -10.92,-1.45 -16.13,-0.96 -2.93,0.27 -4.97,0.28 -7.74,0.91 -4.38,0.99 -18.85,4.48 -22.11,7.53 -1.84,-1.85 -3.64,-5.2 -4.88,-7.35 2.67,-1.55 4.46,-3.47 7.27,-5.24 17.2,-10.82 18.31,-10.05 34.97,-16.13 1.93,-0.71 1.96,-0.81 3.94,-1.28l16.73 -3.28c5.69,-0.83 10.77,-1.17 16.59,-1.6 11.22,-0.82 24.1,0.82 35.15,2.98 4.94,0.97 14.05,4.11 19.19,7.31l48.34 30.15c8.62,5.38 3.73,17.82 17.21,26.23 5.49,3.42 11.62,4.23 16.33,4.14 5.1,-0.09 9.39,-3.59 15.42,0.17l35.32 22.03c3.34,2.09 3.67,6.54 1.71,9.68z"/>
    </svg>
    `,
    'Entregue'   :`<svg name="Entregue"    class="EtpSVG P-P" viewBox="0 0 397.77 408.68">
        <path d="M172.12 276.62c11.36,0 22.77,-16.13 29.23,-22.73l33.66 -34.48c9.52,-9.62 56.65,-52.86 56.65,-63.52 0,-9.42 -4.96,-15.88 -12.42,-18.23 -9.29,-2.93 -14.37,0.84 -20.19,6.92l-88.71 88.8c-8.18,-5.54 -36.21,-39.64 -42.82,-39.64 -12.85,0 -21.41,6.04 -21.41,19.82 0,6.92 36.97,41.76 45.94,50.91 5.64,5.74 9.52,12.16 20.08,12.16zm26.76 -222.98l0 0c82.88,0 150.69,67.81 150.69,150.69l0 0.01c0,82.88 -67.81,150.69 -150.69,150.69l-0 0c-82.88,0 -150.69,-67.81 -150.69,-150.69l0 -0.01c0,-82.88 67.81,-150.69 150.69,-150.69z"/>
    </svg>
    `,
    'Pronto'     :`<svg name="Pronto"      class="EtpSVG P-P" viewBox="0 0 397.77 408.68">
        <path d="M202.23 187.59l0 177.89c2.16,-0.18 37.52,-17.04 43.23,-19.35 2.83,-1.15 5.71,-2.75 8.81,-4.05 2.98,-1.24 5.71,-2.48 8.53,-3.9 1.62,-0.81 2.82,-1.18 4.44,-1.99 1.65,-0.83 2.63,-1.36 4.36,-2.06 5.75,-2.35 11.3,-5.17 17.09,-7.78l52.14 -23.73c2.95,-1.43 5.5,-2.58 8.55,-3.88 6.47,-2.77 6.02,-2.4 6.15,-5.56 0.32,-8.19 0.16,-16.7 0.16,-25.01l0 -138.89c0,-2.92 0.24,-8.7 -0.43,-11.58l-76.59 34.86c-3.2,1.61 -6.24,2.68 -9.43,4.29 -3.29,1.66 -6.44,2.77 -9.71,4.43l-14.15 6.43c-1.77,0.85 -3.38,1.48 -5,2.28 -3.07,1.52 -6.38,2.78 -9.43,4.29l-28.72 13.3zm-154.75 -75.87l0 0.85c1.83,0.43 7.03,3.19 9.18,4.1l28.25 12.9c2.17,1.01 11.14,5.47 12.85,5.01l12.45 -5.58c2.17,-1.05 3.97,-1.82 6.13,-2.87l12.73 -5.71c2.23,-1.07 4.22,-1.89 6.42,-3.01l21.84 -9.88c1.28,-0.55 1.9,-0.99 3.18,-1.53l78.58 -35.88c1.18,-0.53 2.02,-0.8 3.28,-1.43 2.42,-1.21 5.35,-2.21 6.14,-3.29l-37.48 -16.96c-2.17,-0.9 -11.02,-5.57 -12.98,-5.26l-12.41 5.65c-11.03,4.94 -27.27,12.87 -37.69,17.18 -1.21,0.5 -1.76,0.86 -2.89,1.39 -1.26,0.59 -2.17,0.86 -3.29,1.42l-40.59 18.56c-1.37,0.58 -1.97,0.8 -3.27,1.45 -2.16,1.09 -3.97,1.76 -6.15,2.86l-25.07 11.36c-1.38,0.56 -1.9,0.85 -3.22,1.49l-16.01 7.14zm93.88 42.87l0 0.86c1.5,0.35 2.13,0.92 3.61,1.54 1.51,0.63 2.19,0.94 3.62,1.53 2.19,0.9 4.92,2.28 7,3.29 1.35,0.65 2.13,0.94 3.6,1.55 1.41,0.59 2.13,1.04 3.46,1.68l27.73 12.6c10.54,5.05 7.15,4.42 18,-0.6 3.36,-1.56 6.16,-2.65 9.43,-4.29 1.6,-0.8 3.06,-1.39 4.76,-2.09l127.56 -58.91c-2.13,-0.5 -24.64,-11.29 -28.66,-12.92 -4.75,-1.93 -27.22,-12.8 -28.78,-12.8 -1.05,0 -24.46,10.71 -28.43,12.72l-23.58 10.71c-1.73,0.88 -2.98,1.3 -4.72,2.14l-37.7 17.17c-3.27,1.4 -6.26,3.09 -9.37,4.35 -12.74,5.17 -29.81,14.12 -42.44,19.28 -1.76,0.72 -3.41,1.82 -5.08,2.21zm-78.44 100.73c1.3,0.63 2.55,1.05 3.85,1.72l18.25 8.33c2.08,0.85 5.44,2.78 7.47,3.25l0 25.72c-1.39,-0.37 -27.25,-12.75 -29.58,-13.29l0 -25.72zm-20.58 -133.74l0 172.32c0,1.14 -0.76,1.11 0.34,2.2l16.8 7.66c3.25,1.45 6.21,3.03 9.68,4.46l19.47 8.82c1.57,0.7 2.89,1.53 4.6,2.26l33.93 15.37c7.95,3.23 20.66,9.85 29.15,13.29 7.53,3.05 21.01,9.9 29.09,13.35 1.88,0.8 2.96,1.39 4.71,2.14 1.54,0.66 3.79,1.9 5.27,2.02l0 -177.89 -59.15 -27.01c-0.43,0.94 -0.87,33.23 -0.36,38.98 0.09,1.05 0.43,2.56 -0.07,3.46 -1.25,-0.29 -3.82,-1.56 -5.14,-2.15 -1.82,-0.81 -3.19,-1.55 -5.27,-2.44l-31.6 -14.27 0 -42.87c-1.42,-0.95 -4.43,-2.28 -6.06,-2.94l-16.22 -7.35c-1.08,-0.48 -1.96,-1.02 -3.15,-1.57l-13.03 -5.83c-1.3,-0.54 -1.95,-0.9 -3.24,-1.47l-9.74 -4.41c-0.67,1.62 0,2.72 0,3.86z"/>
    </svg>
    `,
    'Devendo'    :`<svg name="Devendo"     class="EtpSVG P-P" viewBox="0 0 397.77 408.68">
        <path class="fil0" d="M192.63 306.35c-20.61,0 -43.78,-9.88 -58.44,-21.22 -15.19,-11.75 -25.69,-24.69 -33.58,-43.43 -11.3,-26.82 -11.13,-59.36 0.83,-84.94 11.11,-23.77 26.46,-41.75 50.02,-53.54 29.71,-14.87 63.57,-14.35 93.43,0.88 9.22,4.7 21.84,14.13 29.11,21.35 52.14,51.78 35.87,136.63 -28.22,170.3 -18.19,9.56 -32.32,10.6 -53.14,10.6zm-11.95 -134.08c0,-11.22 15.01,-9.29 22.57,-9.29 4.01,0 35.85,20.08 35.85,-3.98 0,-10.03 -9.64,-14.24 -19.91,-17.27 -3.38,-1 -5,-1.22 -7.98,-2.65 0,-12.85 -0.34,-18.58 -13.28,-18.58 -11.16,0 -11.95,8.85 -11.95,19.91 -8.66,0.72 -15.38,6.5 -20.29,11.58 -5.02,5.19 -8.93,12.01 -8.93,21.61 0,26.02 27.54,32.8 47.06,40.57 30.66,12.21 10.71,26.79 -8.77,23.4 -15.68,-2.73 -18.7,-9.54 -26.34,-9.54 -6.69,0 -13.28,3.05 -13.28,11.95 0,15.12 23.47,17.85 30.54,21.24 0,11.06 0.79,19.91 11.95,19.91 13.01,0 13.28,-4.36 13.28,-19.91 8.58,-2 15.73,-5.07 21.6,-10.26 10.69,-9.44 10.27,-18.06 10.27,-29.56 0,-20.08 -31.15,-31.48 -46.64,-37 -5.31,-1.89 -15.77,-5.69 -15.77,-12.12zm-114.19 23.9c0,22.32 0.42,28.44 6.92,48.84 10.23,32.13 37.22,61.23 67.86,75.52 30.8,14.37 58,15.03 89.75,8.27 7.19,-1.53 18.11,-4.86 23.96,-7.91l19.98 -11.88c4.09,-2.7 5.26,-3.43 8.96,-6.98 11.57,-11.08 10.67,-7.62 22.9,-24.89 26.56,-37.52 32.92,-92.36 11.97,-134.09 -17.16,-34.18 -47.97,-61.25 -85.28,-71.39 -3.94,-1.07 -3.76,-1.4 -7.01,-2.29 -22.08,-6.04 -49.25,-3.16 -70.78,3.6 -50.1,15.72 -89.23,68.15 -89.23,123.19z"/>
    </svg>
    `,
    'Falta Uber' :`<svg name="Falta Uber"  class="EtpSVG P-P" viewBox="0 0 397.77 408.68">
    <path class="fil1" d="M169.18 273.2c4,0 8.46,-1.49 11.8,-4.88l90.35 -91.45c10.09,-10.21 17.39,-20.11 17.39,-24.4 0,-9.42 -4.96,-15.88 -12.42,-18.23 -9.29,-2.93 -14.37,0.84 -20.19,6.92l-88.71 88.8c-8.18,-5.54 -36.21,-39.64 -42.82,-39.64 -12.85,0 -21.41,6.04 -21.41,19.82 0,1 0.46,2.83 2.11,4.58l43.82 46.34c5.64,5.74 9.52,12.16 20.08,12.16zm131.77 -33.59l54.91 105.81c3.22,6.21 -1.26,13.58 -8.26,13.58l-109.81 0c-7,0 -11.48,-7.37 -8.26,-13.58l54.91 -105.81c3.48,-6.7 13.03,-6.7 16.51,0zm-14.09 73.35l-2.18 -36.17c0,-11.08 11.98,-11.33 14.48,-6.19 2,4.11 1.66,11.08 1.18,16.26 -0.6,6.42 -1.8,29.12 -3.89,33.41 -0.86,1.78 -8.19,7.73 -9.59,-7.3zm5.89 35.02c-10.91,0 -10.52,-15.91 -0.11,-15.91 10.55,0 10.83,15.91 0.11,15.91zm-96.8 -297.76c113.02,0 185.44,120.69 133.77,219.88l-18.57 -35.78c-7.75,-14.94 -29.15,-14.94 -36.9,0l-54.91 105.81c-1.65,3.17 -2.43,6.6 -2.36,10 -90.12,12.77 -171.73,-57.78 -171.73,-149.22 0,-82.88 67.81,-150.69 150.69,-150.69z"/>
    </svg>
    `,
    'Grad Uber'  :`<svg name="Grad Uber"   class="EtpSVG P-P" viewBox="0 0 397.77 408.68">
    <path class="fil1" d="M169.18 273.2c4,0 8.46,-1.49 11.8,-4.88l90.35 -91.45c10.09,-10.21 17.39,-20.11 17.39,-24.4 0,-9.42 -4.96,-15.88 -12.42,-18.23 -9.29,-2.93 -14.37,0.84 -20.19,6.92l-88.71 88.8c-8.18,-5.54 -36.21,-39.64 -42.82,-39.64 -12.85,0 -21.41,6.04 -21.41,19.82 0,1 0.46,2.83 2.11,4.58l43.82 46.34c5.64,5.74 9.52,12.16 20.08,12.16zm131.77 -33.59l54.91 105.81c3.22,6.21 -1.26,13.58 -8.26,13.58l-109.81 0c-7,0 -11.48,-7.37 -8.26,-13.58l54.91 -105.81c3.48,-6.7 13.03,-6.7 16.51,0zm-14.09 73.35l-2.18 -36.17c0,-11.08 11.98,-11.33 14.48,-6.19 2,4.11 1.66,11.08 1.18,16.26 -0.6,6.42 -1.8,29.12 -3.89,33.41 -0.86,1.78 -8.19,7.73 -9.59,-7.3zm5.89 35.02c-10.91,0 -10.52,-15.91 -0.11,-15.91 10.55,0 10.83,15.91 0.11,15.91zm-96.8 -297.76c113.02,0 185.44,120.69 133.77,219.88l-18.57 -35.78c-7.75,-14.94 -29.15,-14.94 -36.9,0l-54.91 105.81c-1.65,3.17 -2.43,6.6 -2.36,10 -90.12,12.77 -171.73,-57.78 -171.73,-149.22 0,-82.88 67.81,-150.69 150.69,-150.69z"/>
    </svg>
    `

}


// todos tem q ter pre e pos
// 'Pre' : 'https://www.mercadopago.com.br/activities/detail/'
// 'pos' : '?from=activities-frontend'
// 'mo'   : 'pix_transfer_mo_payout_movement-'
// 'mi'   : 'pix_transfer_mi_movement-'
// 'ch'   : 'checkout_merchant_order-'
// 'qr'   : 'instore_pix_qr-'
// 'qrm'  : 'qr_merchant_order-'
// 'trn'  : 'pix_transfer_mo_payment_movement-'
// 'pay'  : 'pix_payment_mo_payout_movement-'
// 'sig'  : 'single_player_prepaid-'
// 'card' : 'mp_card-'
// 'Cry'  : 'investment_crypto_bhs-'
// 'non'  : 'non_transactional-'
// 'deb'  : 'debt_notifications-'

const Ramos = {
  'Alimentos e Bebidas': {
      Comr:['Padaria','Depósito de Bebidas','Depósito de Água e Gás','Mercadinho','Frigorifico & Peixe','Frutas & Verduras','Empório','Ração'],
      CoSv:['Churrascaria','Restaurante','Lanchonete','Bar','Bistrô & Café','Buffet','Sorveteria','Barraca Lanche','Conveniência','Açaíteria','Tapiocaria','Pizzaria','Temakeria','Casa de Bolo','Confeiteiro'],
      Fabr:['Fábrica de Sorvete']
  },'Vendas e Objetos': {
      Comr:['Arte e Antiguidades','Artigos Religiosos','Bebês e Cia','Brinquedos e Games','Casa e Decoração','Colecionáveis','Cosméticos e Perfumaria','Eletrodomésticos','Fotografia','Flores, Cestas e Presentes','Instrumentos Musicais','Joalheria','Livros','Funerários','Variedades','Gráfica','Papelaria e Escritório','Místicos']
  },'Estétia e Moda': {
      Comr:['Sapatos','Roupas e Acessórios','Sex Shop'],
      Serv:['Salão Cabeleireiro','Sobrancelha','Unha em Gel','Barbearia','Tatuagem']
  },'Técnologia': {
      Comr:['Informática','Assesórios Celular','Eletrônica'],
      Serv:['Internet','Téc. Refrigeração'],
      'Comércio/Serviço': ['Equipadora Som','Assistência Téc. PC','Assistência Téc. Celular']
  },'Saúde e Medicamento': {
      Serv:['Nutrição','Pscicologia','Laboratório e Exame','Odontologia'],
      Comr:['Farmácia'],
      CoSv:['Vetrinário']
  },'Construção e Ferramentas': {
      Serv:['Serralharia','Marcenaria','Pedreiro','Engenharia','Eletricista','Encanação'],
      CoSv:['Gesso'],
      Comr:['Armazém']
  },'Serviços Pessoais': {
      Serv:['Seguradora','Segurança','Transporte','Turismo','Motéis','Aluguel e Locações']
  },'Instituições': {
      Serv:['Associações','Advocacia','Cartórios','Bibliotecas','Casas Lotéricas','Consórcios','Cooperativas','Emissoras de Rádio','Emissoras de Televisão','Instituições Religiosas','Prefeitura']
  },'Educação': {
      Serv:['Escola','Curso']
  },'Serviço': {
      Serv:['Estacionamentos','limpeza','Ecologia','Agricultura','Festas & Eventos','Mecânico','Costureira','Serviços Gráficos','Pet Shop']
  }
}

const ListGRD = [
    "CBG_004",
    
    "G_540","G_540_1",
    
    "U_025","U_025_1",
    "U_026","U_026_1",
    
    "B_248","B_248_1",
    "B_250","B_250_1",
    "B_251","B_251_1",
    "B_252","B_252_1","B_252_2",
    "B_253","B_253_1","B_253_2","B_253_3",

    "J_016","J_016_1","J_016_2",

]

const ListOS = [
    "B_003476",
]

const Fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Comic Sans MS", "Trebuchet MS", "Impact", "Lucida Console", "Tahoma", "Helvetica", "Palatino Linotype", "Frank Ruhl Libre", "Montserrat", "Open Sans"]
const KitFonts = [
    'advent-Bd1',
    'advent-Bd2',
    'advent-Bd3',
    'advent-Lt1',
    'advent-Lt2',
    'advent-Lt3',
    'advent-Re',
    'Almarose-Black',
    'Almarose-Bold',
    'Almarose-ExtraBlack',
    'Almarose-Extrabold',
    'Almarose-Light',
    'Almarose-Medium',
    'Almarose-Regular',
    'Almarose-Semibold',
    'Almarose-Thin',
    'Anja Eliane accent002',
    'arial-rounded-mt-bold',
    'Balbek-Personal Use Only',
    'BebasNeue-Regular',
    'BebasNeue-Regular',
    'Dunkin Bold',
    'Dunkin Sans Bold',
    'EngraversGothic BT',
    'Exotc350 Bd BT Bold',
    'Exotc350 DmBd BT Demi-Bold',
    'Futura Bk BT Book',
    'Futura Bold BT',
    'Futura Bold Condensed BT',
    'Futura Light Condensed BT',
    'Futura Md BT Bold',
    'Futura Md BT Medium',
    'Futura Medium Condensed BT',
    'Futura-Condensed-Bold',
    'Futura-Condensed-Normal',
    'Futura-Condensed-Thin',
    'Futura-CondensedExtraBold-Th',
    'Futura-CondensedLight-Normal',
    'Futura-CondensedLight-Thin',
    'Futura-Normal',
    'FuturaCnd-Bold',
    'FuturaCnd-Norma',
    'FuturaCondLightE Regular',
    'Geometr212 BkCn BT Book',
    'Geometr212 BkCn BT Heavy',
    'Geometr415 Blk BT Black',
    'Geometr706 BlkCn BT Black',
    'GlacialIndifference-Bold',
    'GlacialIndifference-Regular',
    'Gotham Black Regular',
    'gotham-black',
    'holomdl2',
    'Humanst521 BT Bold',
    'Humanst521 BT Roman',
    'Humanst521 Lt BT Light',
    'Humnst777 BlkCn BT Black',
    'Humnst777 BT Roman',
    'Humnst777 Cn BT Bold',
    'Humnst777 Cn BT',
    'Humnst777 Lt BT Light',
    'IN901XKI',
    'Insanibc',
    'Insanibu',
    'integral-cf-medium',
    'Netraly',
    'neuzeitgrotblaextcon',
    'NewsGoth BT Bold',
    'NewsGoth BT Roman',
    'NewsGoth Lt BT Light',
    'ntailu',
    'ntailub',
    'OCR-B 10 BT',
    'phagspa',
    'phagspab',
    'Square721 BT Bold',
    'Square721 BT Roman',
    'Square721 Cn BT Bold',
    'Square721 Cn BT Roman',
    'Swis721 Blk BT Black',
    'Swis721 BlkCn BT Black',
    'Swis721 BT Bold',
    'Swis721 BT Roman',
    'Swis721 Cn BT Bold',
    'Swis721 Cn BT Roman',
    'Swis721 Hv BT Heavy',
    'Swis721 Lt BT Light',
    'Swis721 LtEx BT Light',
    'Swis721 WGL4 BT Bold',
    'Swis721 WGL4 BT Roman',
    'taile',
    'taileb',
    'Black-coffee-shadow',
    'Black-coffee',
    'CFGlitchCity-Regular',
    'CoffeCake',
    'Empires',
    'Freehand521 BT',
    'Gloomy Things',
    'Jacksilver',
    'Jamstreet Graffiti',
    'KOMIKAX_',
    'Malvie Trial',
    'MARSNEVENEKSK-Clean',
    'Mermaid Babies',
    'Mustard Smile',
    'Sandler Trial',
    'SOUTH-CREW',
    'Starlight',
    'Starlight',
    'Study Alone',
    'Thunder Bold',
    'Trolls Movie Font',
    'True Lies',
    'waltograph42',
    'waltographUI',
    'whoa!',
    'Fluo Gums',
    'GAGARIN_',
    'GAGASM__',
    'Gobold Blocky Regular',
    'Good Morning',
    'Jackpot Demo',
    'KGHAPPYSolid',
    'Legend M54',
    'Magnificent Personal Use',
    'Amsterdam',
    'April June',
    'Austria',
    'Bacalisties',
    'Blacksword',
    'boutiera-regular',
    'BrushScriptOpti-Regular',
    'buttercup_sample',
    'Caroline',
    'Contoursy Free',
    'Cream Cake',
    'Delight Sunset',
    'dk-combustible-regular',
    'Embassy BT',
    'exmouth',
    'FontsFree-Net-MoonTime-Regular-1',
    'Gillian Rode',
    'Halimun',
    'harlow-solid-std',
    'Howell Rode',
    'Kaufmann BT',
    'LOKICOLA',
    'Madina',
    'Manly Signature Regular',
    'Maria Aishane Script',
    'Maria Aishane Script',
    'Maria_lucia',
    'Pantherdam Signature',
    'Pinky Promise',
    'PinkyPromise',
    'Ruthligos',
    'Streamster',
    'Summer Lightning Demo',
    'The Golden Elephant',
    'The Yoshi',
    'TypoUpright BT',
    'Weather Sunday - Personal Use',
    'Meatloaf Solid',
    'PWYummyDonuts',
    'Quark Cheese - Personal Use',
    'Quillain (DEMO)',
    'Quillain (DEMO)',
    'RifficFree-Bold',
    'Rightland',
    'Run! Demo',
    'aachen-bold',
    'AgreloyInT3',
    'Ancient Medium',
    'atwriter',
    'belwe-std-condensed',
    'BerkshireSwash-Regular',
    'bernard-mt-std-condensed',
    'Bodoni Bd BT Bold',
    'Bodoni Bk BT Book',
    'CentSchbkCyrill BT Bold Italic',
    'CentSchbkCyrill BT Bold',
    'CentSchbkCyrill BT Italic',
    'CentSchbkCyrill BT Roman',
    'Century Oldstyle Bold',
    'Century Oldstyle Italic',
    'Century Oldstyle Regular',
    'Century725 Cn BT',
    'Century751 BT Italic',
    'Century751 BT Roman',
    'Century751 No2 BT Bold Italic',
    'Century751 No2 BT Bold',
    'Century751 No2 BT Italic',
    'Century751 No2 BT Roman',
    'Century751 SeBd BT Semi Bold Italic',
    'Century751 SeBd BT Semi Bold',
    'Clarendon Blk BT Black',
    'Clarendon BT Bold',
    'Clarendon BT Roman',
    'Clarendon Lt BT Light',
    'Cloister Oldstyle Roman',
    'CloisterBlack',
    'DeVinne Txt BT',
    'Edensor-FREE',
    'FE-FONT',
    'FONTLERO',
    'GeoSlab703 Md BT Bold',
    'GeoSlab703 Md BT Medium',
    'GeoSlab703 MdCn BT Bold',
    'GeoSlab703 MdCn BT Medium',
    'Home Christmas',
    'Hundo',
    'IFC INSANE RODEO BOLD Bold',
    'IFC INSANE RODEO',
    'MADEAvenuePERSONALUSE-Regular',
    'MAK-bold',
    'MAK',
    'News701 BT Bold',
    'News701 BT Italic',
    'News706 BT Bold',
    'OCR-A BT',
    'Olondona',
    'PirataOne-Regular',
    'PlateGtFourMTStd-Bd',
    'Qeilab',
    'RalstedaBold-d9d56',
    'RalstedaExtralight-L3vAg',
    'RalstedaHeavy-gxX2Y',
    'RalstedaLight-X3RXo',
    'RalstedaMedium-owAxV',
    'RalstedaRegular-4Bqy9',
    'Saddlebag',
    'Schadow BT Bold',
    'Schadow BT Roman',
    'Seagram tfb',
    'symbol',
    'TequilaSunrise-Regular',
    'TEXAT BOLD PERSONAL USE___',
    'TrajanPro-Bold',
    'TrajanPro-Regular',
    'VarsityTeam-Bold',
    'VASTN___',
    'Smartphone Color Pro',
    'Social Logos',
    'Splatch',
    'Stella Demo',
    'Stella Demo',
    'airstrike',
    'airstrike3d',
    'airstrikeacad',
    'airstrikeb3d',
    'airstrikebold',
    'airstrikebullet',
    'airstrikecond',
    'airstrikeexpand',
    'airstrikegrad',
    'airstrikehalf',
    'airstrikelaser',
    'airstrikeout',
    'Clark Bold Hollow',
    'Clark Bold',
    'Clark Hollow',
    'Clark',
    'DEADJIM',
    'Digital-Desolation-Plus',
    'Dihil',
    'Elektronik Italic',
    'Elektronik',
    'FontsFree-Net-Nura-ExtraLight',
    'High Speed',
    'Hindsight 2020',
    'hyperspace-race-extended-heavy',
    'Inlanders Demo',
    'Kardust TS Condensed Bold Italic',
    'KITCHENPOLICE',
    'LinkStart',
    'osaka-re',
    'paladins',
    'paladins3d',
    'paladinsgrad',
    'paladinslaser',
    'paladinsout',
    'paladinsstraight',
    'pricedown bl',
    'Reckoner',
    'Reckoner_Bold',
    'Rektec',
    'SOLVAST',
    'Square',
    'SwipeRaceDemo',
    'techno_hideo',
    'Vudotronic',
    'zrnic rg',
    'The Blacklist',
    'Type Icons',
    'aAttackGraffiti',
    'Comix Loud',
    'Dunkin Sans',
    'Dunkin',
    'Gemstone',
    'GROBOLD',
    'Irresponsible Direction',
    'Karate',
    'lastninja',
    'Minnie',
    'mvboli',
    'Neonblitz',
    'PlazaITC-Normal',
    'Rockit',
    'RUSTY ATTACK DEMO Regular',
    'seasideresortnf.regular',
    'shanghai',
    'TheGeorgia',
    'varsity_regular',
    'Wicked Mouse Demo',
    'xilosa',
]