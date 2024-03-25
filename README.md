-Welcome... To run this project locally you need to open a terminal and follow
the steps:

1- clone the repository:  
git clone https://github.com/oswaldojsotto/blockchainapp.git

2- enter this command after cloning the repo: cd blockchainapp

3- run "npm install" to install all dependencies of the project and wait for
them to install

4- open the folder of the project with your favorite code editor and run this
command: "npm run dev"

5- go to the following url http://localhost:3000/ in your browser

- If you have some trouble running the app locally you can contact me

- The project is also deployed in Vercel: follow this link:
  https://blockchainapp-eta.vercel.app/.

  Hope you like my work... :)

  Additional Notes:

-Installed Next JS v14 for development enviroment framework with typescript and
tailwind css support. Also has built in React-router to handle page routing.

-One of the requirements were to use Redux, in the case I used it, it wasn't
necessary but, I wanted to use it just in case

the case where is used is: when you connect your wallet, you also fetch the
current usd price of the Ethereum, and send the price of the ethereum with the
current ethereums in the wallet to the slice, then the slice calculates the
aprox value of the ethereum in usd dollars, and we show it in the balance of the
user.

-Installed dependency on @rainbow-me/rainbowkit to connect to wallets

-Installed dependency Axios and React Query to manage API requests

-The API used in this App are provided by
https://www.coinlore.com/cryptocurrency-data-api

-Installed Shadcn for import some additional reusable components

-Installed the react-google-charts to handle the charts

-Adjustments on the Details Page
