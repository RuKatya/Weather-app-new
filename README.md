<p align="center">
<img src="./imagesReadMe/weather-new-desk.JPG" alt="main page of desktop" style="width: 80%"/>
</p>

<!-- <h3 align="center">Create with</h3> -->

<p align="center">
<img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=for-the-badge&logo=react&logoColor=white" />
<img alt="Vite" src="https://img.shields.io/badge/-vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
<img alt="Sass" src="https://img.shields.io/badge/-Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
<img alt="Vercel" src="https://img.shields.io/badge/-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

- [Weather Web App](#weather-web-app)
  - [Demo](#demo)
  - [Installation](#installation)
  - [Example](#example)
  - [Mobile support](#mobile-support)
  - [Site](#site)

# Weather Web App

<table>
<tr>
<td>
  A webapp using Quandl API to display history of stock growth in a given period of time. It helps predict the growth of stocks from the  charts of stock performace in any period of time. It helps to judge stocks, with the principle of momentum investing, which returns 1% per month on average.
</td>
</tr>
</table>

## Demo
You can see live demo here: https://weather-app-new-phi.vercel.app

## Installation
Please follow the steps to install and setting up the app.

* Get a free API Key at https://openweathermap.org
* Clone the repo
```sh
    git clone https://github.com/RuKatya/Weather-app-new.git
```

Install NPM packages
```sh
   npm install
```

Enter your API Key in App component enstead of `your_api_key`
```js
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${your_api_key}`)
```
   
## Example


## Mobile support
## Site