# <img width="96" height="96" src="https://img.icons8.com/doodle/96/mario-kart-tour.png" alt="mario-kart-tour"/> Desafio de Projeto do Felipão: Mario KartJs

**Objetivo:** Mario kart é uma série de jogos de corrida desenvolvida e publicada pela nitendo. Nosso desafio será criar uma lógica de um jogo de video game para simular uma corrida de de mario kart, lvando em consideração as regras e mecânicas abaixo.

# Jogadores

<table>
  <thead>
    <tr>
      <td colspan="2"><b>mario</b></td>
      <td colspan="2"><b>Peach</b></td>
      <td colspan="2"><b>Yoshi</b></td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3"><img width="50" src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyd2h5dHNwMDE4Y3RpaWxqMXpjcnhwejlmajZsNzkzNm52aGl3bHRuZiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/10RgZyfaX0HBSg/200w.gif"></td>
      <td>velocidade: 4</td>
      <td rowspan="3"><img width="60" src="https://64.media.tumblr.com/573a778fc6768545c0d6afb8e5e3ec82/tumblr_mqpgn9XpoB1rrftcdo7_250.gif"></td>
      <td>velocidade: 3</td>
      <td rowspan="3"><img width="50" src="https://pa1.aminoapps.com/6323/f5721e145ea9e98025b364553ab77113ba0bdcbb_00.gif"></td>
      <td>velocidade: 2</td>
    </tr>
    <tr>
      <td>Manobarabilidade: 2</td>
      <td>Manobarabilidade: 4</td>
      <td>Manobarabilidade: 4</td>
    </tr>
    <tr>
      <td>Poder: 3</td>
      <td>Poder: 2</td>
      <td>Poder: 3</td>
    </tr>
   <tr>
      <td colspan="2"><b>Bowser</b></td>
      <td colspan="2"><b>Luigi</b></td>
      <td colspan="2"><b>Donkey Kong</b></td>
    </tr>
    <tr>
      <td rowspan="3"><img width="60" src="https://64.media.tumblr.com/eae3d2e66a1b9771e22953649d456d5f/tumblr_mxq15qNxmw1rby4vso1_500.gif"></td>
      <td>Velocidade: 5</td>
      <td rowspan="3"><img width="60" src="https://64.media.tumblr.com/90e3a4d34ab47ffaa8147e6c312ca8f4/tumblr_mxk56xFcDU1rby4vso1_500.gif"></td>
      <td>Velocidade: 3</td>
      <td rowspan="3"><img width="50" src="https://66.media.tumblr.com/0c4506f326a7a9ba46960bdf60bd5c7a/tumblr_mfqecgLI6C1rfjowdo1_500.gif"></td>
      <td>Velocidade: 2</td>
    </tr>
    <tr>
      <td>Manobrabilidade: 2</td>
      <td>Manobrabilidade: 4</td>
      <td>Manobrabilidade: 2</td>
    </tr>
    <tr>
      <td>Poder: 5</td>
      <td>Poder: 4</td>
      <td>Poder: 5</td>
    </tr>
  </tbody>
</table>


# Regras e Mecânicas

## Jogadores

- O computador deve receber dois personagens para disputar a corrida em um objeto cada.

**Pistas:**

- Os personagens irão correr em uma pisat aleatória de 5 rodadad
- A cada rodada.será sorteado um bloco da pista ser uma reta, curva ou confronto.
    - Caso o bloco da pista seja uma `RETA`, o jogador deve jogar um dado de 6 lados e somar o atributo ` VELOCIDADE`, quem vencer ganha um ponto.
    - Caso o bloco da pista seja uma `CURVA`, o jogador deve jogar um dado de 6 lados e somao o atributo `MANOBRABILIDADE`, quem vencer ganha um ponto.
    - Caso o bloco da pista seja um `CONFRONTO`, o jagador deve jogar um de dado de 6 lados e somar o atributo `PODER`, quem perder, perde um ponto
    - Nenhum jogador pode ter pontuação negativa(valores abaixo de 0)

## Condições de vitória:
- Ao final, vence quem acumulou mais pontos.

## Desafio extra!!
- Confronto:
    - sortear aleatoriamente se é um casco (- 1 ponto) ou uma bomba (-2 pontos)
    - Quem vence o confronto ganha um turbo(+1 ponto) aleatoriamente

