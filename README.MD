# Clima Agora ⛅

Aplicação web que permite consultar o clima atual de qualquer cidade do mundo, desenvolvida originalmente em HTML, CSS e JavaScript e migrada para React com TypeScript.

## Funcionalidades

- Exibe a temperatura atual em graus Celsius.
- Mostra uma descrição do clima (ex: ensolarado, nublado).
- Apresenta um ícone que representa as condições climáticas.
- Tratamento de erros para cidades não encontradas.

## Como usar

1. Digite o nome da cidade desejada no campo de busca.
2. Clique no botão "Buscar".
3. As informações do clima serão exibidas na tela.

## Tecnologias Utilizadas

- React
- TypeScript
- SCSS (CSS Modules)
- Axios
- Vite
- [OpenWeatherMap API](https://openweathermap.org/api)

## Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/renatastephanie/clima-tempo

# Entre na pasta do projeto
cd front-end

# Instale as dependências
npm install

# Crie o arquivo .env com sua chave da API
VITE_WEATHER_API_KEY=sua_chave_aqui

# Rode o projeto
npm run dev
```

## Visualização do Projeto
Para acessar o projeto online, [clique aqui](https://clima-tempo-ccel.vercel.app/).