#   Nome do Aplicativo

### Descrição do Projeto
Um app ao estilo nextflix, aonde eu possa ceralizar diferentes podcast episodios separados por categoria.

### Domínio 
podcast feitos em video

### Features(Funcionalidades)
- Listar os  episódios podcasts em sessões de categorias
    - [saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcast

### Como 

#### Features:
- Listar os epsisódios podcasts em sessõees de categorias
### Como vou implemetar:

GET:Vou retornar uma api rest (json) o nome do podcast, nome do episódios, imgem de capa, link, category
- Retorna lista de episódios

response:

```json
[
{
  "podcastName": "flow",
   " episode": "NUNCA VI 1 CIENTISTA [Ana e Laura] - Flow #513",
    "videoId":"-OQkCGr6WQc",
   " cover": "https://i.ytimg.com/vi/-OQkCGr6WQc/maxresdefault.jpg",
  "  link": "https://www.youtube.com/watch?v=-OQkCGr6WQc&list=PLWieWKZeFoVSyI--JwyTth19kUrMrF5Am&index=1&pp=iAQB",
   " categories": ["ciência","saúde"]
},
{
   " podcastName": "flow",
    "episode": "RUBENS BARRICHELLO - Flow #339",
    "videoId":"4KDGTdiOV4I",
   " cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I&list=PLWieWKZeFoVTVmWukdpOnjCbHKB-iSvvM&index=29",
   " categories": ["esporte","corrida"]
}
]
```

#### filter-episodes-service.ts

GET: retorna lista de episódios baseado em um parametro enviado pelo cliente di nome do podcast