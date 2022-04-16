
// API URL gets top 100 coins 
const url = 'https://api.coinlore.net/api/tickers/?limit=100';

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      // Create our number formatter for prices above threshold
      // shows $xx.xx format
      const currencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'USD'
      });

      // Create our number formatter for prices below threshold
      // shows $xx.xxxxxxxx format
      const longDecimalFormat = new Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 8
      });

      // Create our number formatter for prices below threshold
      // shows $xx format
      const noCentsFormat = new Intl.NumberFormat('en-US', {
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 0
      });
      
      // Create an array of coins from api return
      let coins = data.data;
      // Variable for the main HTML container section
      let mainContainer = document.querySelector('.mainContainer');

      // For each coin...
      coins.forEach( (coin , i) => {

        // Create a div for each line and alternate between white and gray background
        let div = document.createElement('div');
        div.style.background = i % 2 === 0 ? 'white' : 'lightGray';

        // Create span and assign coinName to class list
        let coinName = document.createElement('span');
        coinName.classList.add('coinName');

        // Create span and assign coinSymbol to class list
        let coinSymbol = document.createElement('span');
        coinSymbol.classList.add('coinSymbol');

        // Create span and assign price to class list
        let price = document.createElement('span');
        price.classList.add('price');

        // Create span and assign change to class list
        let change = document.createElement('span');
        change.classList.add('change');

        //Create span and assign volume to class list
        let volume = document.createElement('span');
        volume.classList.add('volume');

        // Append div line to main container
        mainContainer.appendChild(div);

        // Append each item to the div line
        div.appendChild(coinName);
        div.appendChild(coinSymbol);
        div.appendChild(price);
        div.appendChild(change);
        div.appendChild(volume);

        // Add coin name and symbol to line
        coinName.innerText = coin.name;
        coinSymbol.innerText = coin.symbol;

        // Add price to line
        // If price is under 25 cents show 8 decimal places
        if(coin['price_usd'] < 0.25) {
          price.innerText = longDecimalFormat.format(coin['price_usd']);
        }else {
          price.innerText = currencyFormat.format(coin['price_usd']);
        }

        // Add change to line
        // If below zero show red, if above show green
        change.innerText = coin['percent_change_24h'] + ' %';
        change.style.color = coin['percent_change_24h'] < 0 ? 'red' : 'green';

        // Add volume to line and show no cents (since they're always .00)
        volume.innerText = noCentsFormat.format(Math.round(coin.volume24));
      });

    })
    .catch(err => {
        console.log(`error ${err}`)
    });