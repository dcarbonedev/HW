
const url = 'https://api.coinlore.net/api/tickers/?limit=100';

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      // Create our number formatter.
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });

      let coin = data.data;
      let mainContainer = document.querySelector('.mainContainer');

      coin.forEach( (e,i) => {

        let div = document.createElement('div');
        div.style.background = i % 2 === 0 ? 'white' : 'lightGray';
        let coinName = document.createElement('span');
        coinName.classList.add('coinName');
        let coinSymbol = document.createElement('span');
        coinSymbol.classList.add('coinSymbol');
        let price = document.createElement('span');
        price.classList.add('price');
        let change = document.createElement('span');
        change.classList.add('change');
        let volume = document.createElement('span');
        volume.classList.add('volume');

        mainContainer.appendChild(div);
        div.appendChild(coinName);
        div.appendChild(coinSymbol);
        div.appendChild(price);
        div.appendChild(change);
        div.appendChild(volume);

        coinName.innerText = e.name;
        coinSymbol.innerText = e.symbol;
        price.innerText = formatter.format(e['price_usd']);
        change.innerText = e['percent_change_24h'] + ' %';
        change.style.color = e['percent_change_24h'] < 0 ? 'red' : 'green';
        volume.innerText = formatter.format(Math.round(e.volume24));
      });

    })
    .catch(err => {
        console.log(`error ${err}`)
    });