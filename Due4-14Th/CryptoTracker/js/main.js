
const url = 'https://api.coinlore.net/api/tickers/?limit=5';

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data);

      document.querySelector('.NameAndTicker.BTC').innerText = `${data.data[0].name} (${data.data[0].symbol})`;
      document.querySelector('.Price.BTC').innerText = `Price: $${data.data[0].price_usd}`;
      document.querySelector('.Change.BTC').innerText = `24hr Change: ${data.data[0].percent_change_24h} %`;
      document.querySelector('.Volume.BTC').innerText = `24hr Volume: ${Math.round(data.data[0].volume24)}`;

      document.querySelector('.NameAndTicker.ETH').innerText = `${data.data[1].name} (${data.data[1].symbol})`;
      document.querySelector('.Price.ETH').innerText = `Price: $${data.data[1].price_usd}`;
      document.querySelector('.Change.ETH').innerText = `24hr Change: ${data.data[1].percent_change_24h} %`;
      document.querySelector('.Volume.ETH').innerText = `24hr Volume: ${Math.round(data.data[1].volume24)}`;

      document.querySelector('.NameAndTicker.USDT').innerText = `${data.data[2].name} (${data.data[2].symbol})`;
      document.querySelector('.Price.USDT').innerText = `Price: $${data.data[2].price_usd}`;
      document.querySelector('.Change.USDT').innerText = `24hr Change: ${data.data[2].percent_change_24h} %`;
      document.querySelector('.Volume.USDT').innerText = `24hr Volume: ${Math.round(data.data[2].volume24)}`;

      document.querySelector('.NameAndTicker.BNB').innerText = `${data.data[3].name} (${data.data[3].symbol})`;
      document.querySelector('.Price.BNB').innerText = `Price: $${data.data[3].price_usd}`;
      document.querySelector('.Change.BNB').innerText = `24hr Change: ${data.data[3].percent_change_24h} %`;
      document.querySelector('.Volume.BNB').innerText = `24hr Volume: ${Math.round(data.data[3].volume24)}`;

      document.querySelector('.NameAndTicker.USDC').innerText = `${data.data[4].name} (${data.data[4].symbol})`;
      document.querySelector('.Price.USDC').innerText = `Price: $${data.data[4].price_usd}`;
      document.querySelector('.Change.USDC').innerText = `24hr Change: ${data.data[4].percent_change_24h} %`;
      document.querySelector('.Volume.USDC').innerText = `24hr Volume: ${Math.round(data.data[4].volume24)}`;

    })
    .catch(err => {
        console.log(`error ${err}`)
    });