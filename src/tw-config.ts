// https://www.tradingview.com/widget/advanced-chart/
export const chartOptions = {
  symbol: 'NYSE:DIS',
  theme: 'dark',
  studies: [
    'BB@tv-basicstudies',
    'CCI@tv-basicstudies', // Commodity Channel Index overbought/oversold
    'MACD@tv-basicstudies',
    'MAExp@tv-basicstudies', // Moving Average Exponential
  ],
  details: true,
};

// https://www.tradingview.com/widget/technical-analysis/
export const technicalanalysisOptions = {
  interval: '1D',
  symbol: 'NYSE:DIS',
  isTransparent: true,
  showIntervalTabs: false,
};

// https://tw.tradingview.com/widget/ticker-tape/
export const tickerTapeOptions = {
  symbols: [
    {
      proName: 'FOREXCOM:SPXUSD',
      title: '標準普爾500',
    },
    {
      proName: 'NASDAQ:SOXX',
      title: 'SOXX',
    },
    {
      proName: 'FOREXCOM:NSXUSD',
      title: '那斯達克 100', // 科技
    },
    {
      proName: 'BITSTAMP:ETHUSD',
      title: 'Ethereum',
    },
    {
      proName: 'BITSTAMP:BTCUSD',
      title: 'Bitcoin',
    },
  ],
};
