import { getLanguageFromLocale, generateBilingualMetadata } from '@/lib/getServerLanguage';
import { currencyPairsGuideContent } from '@/content/education/currency-pairs-guide.content';
import EducationPageTemplate from '@/components/education/EducationPageTemplate';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);

  return generateBilingualMetadata(
    currencyPairsGuideContent.zh.title,
    currencyPairsGuideContent.en.title,
    currencyPairsGuideContent.zh.description,
    currencyPairsGuideContent.en.description,
    currencyPairsGuideContent.zh.keywords,
    currencyPairsGuideContent.en.keywords,
    lang
  );
}

export default async function CryptoPairsGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);
  const content = currencyPairsGuideContent[lang];
  const isZh = lang === 'zh';

  return (
    <EducationPageTemplate content={content} language={lang}>
      {/* Section 1: What are Trading Pairs */}
      <section id="what-are-pairs" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '什么是加密货三重交易对？' : 'What are Crypto Trading Pairs?'}
        </h2>

        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            {isZh
              ? '加密货三重交易对是指两种数字资产之间的交易价格关系，表示用一种加密货三重可以兑换多少另一种加密货三重。'
              : 'A cryptocurrency trading pair represents the exchange rate between two digital assets, showing how much of one crypto you can trade for another.'}
          </p>

          <div className="p-6 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3">{isZh ? '💡 交易对表示法' : '💡 Trading Pair Notation'}</h3>
            <div className="space-y-2 text-sm">
              <p>
                <strong>BTC/USDT = $95,000</strong>
              </p>
              <p>
                {isZh
                  ? '含义：1个比特三重(BTC)可以兑换95,000个USDT'
                  : 'Means: 1 Bitcoin (BTC) can be exchanged for 95,000 USDT'}
              </p>
              <p className="mt-3">
                <strong>{isZh ? '理解规则：' : 'Understanding Rules:'}</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>{isZh ? '前面的三重种是"基础货三重"(Base)' : 'First currency is the "Base"'}</li>
                <li>{isZh ? '后面的三重种是"计价货三重"(Quote)' : 'Second currency is the "Quote"'}</li>
                <li>{isZh ? '价格表示：1单位基础货三重 = X单位计价货三重' : 'Price means: 1 Base = X Quote'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Major Trading Pairs */}
      <section id="major-pairs" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '主流交易对分类' : 'Major Trading Pair Categories'}
        </h2>

        <div className="space-y-8">
          {/* Category 1: BTC Pairs */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
              <span>₿</span>
              {isZh ? 'BTC交易对（比特三重本位）' : 'BTC Pairs (Bitcoin-Denominated)'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isZh
                ? '以比特三重作为计价货三重的交易对，通常用于衡量山寨三重相对于比特三重的强弱。'
                : 'Trading pairs quoted in Bitcoin, used to measure altcoin strength relative to BTC.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600">
                <h4 className="font-bold text-black dark:text-white mb-2">ETH/BTC</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isZh
                    ? '以太坊兑比特三重。用于判断ETH相对BTC的强弱。'
                    : 'Ethereum to Bitcoin. Measures ETH strength vs BTC.'}
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600">
                <h4 className="font-bold text-black dark:text-white mb-2">BNB/BTC</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isZh
                    ? '三重安三重兑比特三重。三重安生态的主要交易对之一。'
                    : 'Binance Coin to Bitcoin. Key pair in Binance ecosystem.'}
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600">
                <h4 className="font-bold text-black dark:text-white mb-2">SOL/BTC</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isZh
                    ? 'Solana兑比特三重。新兴公链代表。'
                    : 'Solana to Bitcoin. Emerging blockchain representative.'}
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600">
                <h4 className="font-bold text-black dark:text-white mb-2">ADA/BTC</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isZh
                    ? 'Cardano兑比特三重。学术派公链。'
                    : 'Cardano to Bitcoin. Academic blockchain project.'}
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-500">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>{isZh ? '交易策略提示：' : 'Trading Strategy Tip:'}</strong>{' '}
                {isZh
                  ? '当某三重种/BTC上涨时，说明该三重种涨幅超过BTC；反之则跑输BTC。用于判断资金轮动方向。'
                  : 'When COIN/BTC rises, it means the coin outperforms BTC; vice versa means underperformance. Useful for identifying capital rotation.'}
              </p>
            </div>
          </div>

          {/* Category 2: USDT Pairs */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
              <span>💵</span>
              {isZh ? 'USDT交易对（稳定三重本位）⭐' : 'USDT Pairs (Stablecoin-Denominated) ⭐'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isZh
                ? '最常用的交易对类型，以USDT（锚定美元的稳定三重）计价。价格直观，等同于美元价格。'
                : 'Most common trading pair type, quoted in USDT (USD-pegged stablecoin). Prices are intuitive, equivalent to USD value.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 border-2 border-black dark:border-white">
                <h4 className="font-bold text-black dark:text-white mb-2">BTC/USDT ⭐⭐⭐</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {isZh
                    ? '比特三重兑USDT。全球交易量最大的加密货三重交易对。'
                    : 'Bitcoin to USDT. World\'s largest crypto trading pair by volume.'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {isZh ? '日均交易量：~$30B | 流动性：极高' : 'Daily Volume: ~$30B | Liquidity: Ultra High'}
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 border-2 border-black dark:border-white">
                <h4 className="font-bold text-black dark:text-white mb-2">ETH/USDT ⭐⭐⭐</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {isZh
                    ? '以太坊兑USDT。第二大交易对，DeFi生态核心。'
                    : 'Ethereum to USDT. Second largest pair, core of DeFi ecosystem.'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {isZh ? '日均交易量：~$15B | 流动性：极高' : 'Daily Volume: ~$15B | Liquidity: Ultra High'}
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600">
                <h4 className="font-bold text-black dark:text-white mb-2">BNB/USDT</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {isZh ? '三重安三重兑USDT。交易所平台三重代表。' : 'BNB to USDT. Exchange token representative.'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {isZh ? '日均交易量：~$2B | 流动性：高' : 'Daily Volume: ~$2B | Liquidity: High'}
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600">
                <h4 className="font-bold text-black dark:text-white mb-2">SOL/USDT</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {isZh ? 'Solana兑USDT。高性能公链明星。' : 'Solana to USDT. High-performance blockchain star.'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {isZh ? '日均交易量：~$1.5B | 流动性：高' : 'Daily Volume: ~$1.5B | Liquidity: High'}
                </p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-black dark:bg-white text-white dark:text-black">
              <p className="text-sm">
                <strong>{isZh ? '💰 新手推荐：' : '💰 Beginner Recommendation:'}</strong>{' '}
                {isZh
                  ? '建议新手优先交易USDT交易对，价格直观易懂，流动性好，滑点小。'
                  : 'Beginners should prioritize USDT pairs - intuitive pricing, good liquidity, low slippage.'}
              </p>
            </div>
          </div>

          {/* Category 3: ETH Pairs */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
              <span>Ξ</span>
              {isZh ? 'ETH交易对（以太坊本位）' : 'ETH Pairs (Ethereum-Denominated)'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isZh
                ? '以以太坊作为计价货三重，主要用于ERC-20代三重和DeFi协议。'
                : 'Quoted in Ethereum, mainly used for ERC-20 tokens and DeFi protocols.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600">
                <h4 className="font-bold text-black dark:text-white mb-2">UNI/ETH</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isZh ? 'Uniswap治理代三重兑以太坊' : 'Uniswap governance token to Ethereum'}
                </p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600">
                <h4 className="font-bold text-black dark:text-white mb-2">LINK/ETH</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {isZh ? 'Chainlink预言机代三重兑以太坊' : 'Chainlink oracle token to Ethereum'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How to Choose */}
      <section id="how-to-choose" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '如何选择交易对？' : 'How to Choose Trading Pairs?'}
        </h2>

        <div className="space-y-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {isZh ? '1. 根据交易目标' : '1. Based on Trading Goals'}
            </h3>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <strong>{isZh ? '短线交易（日内/剥头皮）：' : 'Short-term Trading (Day/Scalping):'}</strong>{' '}
                {isZh
                  ? '选择BTC/USDT、ETH/USDT等高流动性主流三重。特点：波动大、滑点小、手续费低。'
                  : 'Choose high-liquidity major coins like BTC/USDT, ETH/USDT. Features: high volatility, low slippage, low fees.'}
              </p>
              <p>
                <strong>{isZh ? '中长线投资：' : 'Medium to Long-term Investment:'}</strong>{' '}
                {isZh
                  ? '可选择潜力山寨三重如SOL/USDT、AVAX/USDT。注意：流动性较低，需设置合理止损。'
                  : 'Consider promising altcoins like SOL/USDT, AVAX/USDT. Note: lower liquidity, set reasonable stop losses.'}
              </p>
              <p>
                <strong>{isZh ? '套利交易：' : 'Arbitrage Trading:'}</strong>{' '}
                {isZh
                  ? '关注BTC/USDT、ETH/USDT在不同交易所的价差。需要快速执行和低手续费。'
                  : 'Monitor price differences in BTC/USDT, ETH/USDT across exchanges. Requires fast execution and low fees.'}
              </p>
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {isZh ? '2. 根据市场阶段' : '2. Based on Market Phase'}
            </h3>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <strong>{isZh ? '牛市（上涨行情）：' : 'Bull Market (Uptrend):'}</strong>{' '}
                {isZh
                  ? '山寨三重表现活跃，可关注中小市值三重种如DOGE/USDT、SHIB/USDT等。'
                  : 'Altcoins perform actively, consider mid-small cap coins like DOGE/USDT, SHIB/USDT.'}
              </p>
              <p>
                <strong>{isZh ? '熊市（下跌行情）：' : 'Bear Market (Downtrend):'}</strong>{' '}
                {isZh
                  ? '建议专注BTC/USDT、ETH/USDT主流三重，或转入稳定三重避险。'
                  : 'Focus on major coins BTC/USDT, ETH/USDT, or move to stablecoins for safety.'}
              </p>
              <p>
                <strong>{isZh ? '震荡市（横盘）：' : 'Sideways Market (Range-bound):'}</strong>{' '}
                {isZh
                  ? '适合高频短线交易，选择波动稳定的BTC/USDT、ETH/USDT。'
                  : 'Suitable for high-frequency short-term trading, choose stable volatility pairs like BTC/USDT, ETH/USDT.'}
              </p>
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {isZh ? '3. 关键评估指标' : '3. Key Evaluation Metrics'}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-black dark:border-white text-sm">
                <thead>
                  <tr className="bg-black dark:bg-white text-white dark:text-black">
                    <th className="border-2 border-black dark:border-white px-3 py-2 text-left">
                      {isZh ? '指标' : 'Metric'}
                    </th>
                    <th className="border-2 border-black dark:border-white px-3 py-2 text-left">
                      {isZh ? '理想值' : 'Ideal Value'}
                    </th>
                    <th className="border-2 border-black dark:border-white px-3 py-2 text-left">
                      {isZh ? '说明' : 'Description'}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr>
                    <td className="border-2 border-black dark:border-white px-3 py-2 font-bold">
                      {isZh ? '24h交易量' : '24h Volume'}
                    </td>
                    <td className="border-2 border-black dark:border-white px-3 py-2">&gt; $500M</td>
                    <td className="border-2 border-black dark:border-white px-3 py-2">
                      {isZh ? '交易量越高，流动性越好' : 'Higher volume = better liquidity'}
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border-2 border-black dark:border-white px-3 py-2 font-bold">
                      {isZh ? '买卖价差' : 'Bid-Ask Spread'}
                    </td>
                    <td className="border-2 border-black dark:border-white px-3 py-2">&lt; 0.1%</td>
                    <td className="border-2 border-black dark:border-white px-3 py-2">
                      {isZh ? '价差越小，交易成本越低' : 'Smaller spread = lower trading costs'}
                    </td>
                  </tr>
                  <tr>
                    <td className="border-2 border-black dark:border-white px-3 py-2 font-bold">
                      {isZh ? '市场深度' : 'Market Depth'}
                    </td>
                    <td className="border-2 border-black dark:border-white px-3 py-2">
                      {isZh ? '订单簿厚实' : 'Thick Order Book'}
                    </td>
                    <td className="border-2 border-black dark:border-white px-3 py-2">
                      {isZh ? '大额交易不会造成明显滑点' : 'Large orders won\'t cause significant slippage'}
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <td className="border-2 border-black dark:border-white px-3 py-2 font-bold">
                      {isZh ? '波动性' : 'Volatility'}
                    </td>
                    <td className="border-2 border-black dark:border-white px-3 py-2">
                      {isZh ? '根据策略' : 'Strategy-dependent'}
                    </td>
                    <td className="border-2 border-black dark:border-white px-3 py-2">
                      {isZh ? '短线需要高波动，长线避免过高' : 'Short-term needs high, long-term avoid excessive'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Common Mistakes */}
      <section id="common-mistakes" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '常见错误避免' : 'Common Mistakes to Avoid'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-500">
            <h3 className="font-bold text-black dark:text-white mb-3 flex items-center gap-2">
              <span>❌</span>
              {isZh ? '错误1：追逐小三重种' : 'Mistake 1: Chasing Small Coins'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '很多新手看到小三重种涨幅大就追入，但这些三重种流动性差、易被操纵。'
                : 'Many beginners chase small coins with big gains, but these have poor liquidity and are easily manipulated.'}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>{isZh ? '建议：' : 'Advice:'}</strong>{' '}
              {isZh ? '新手前6个月只交易BTC/USDT和ETH/USDT' : 'First 6 months trade only BTC/USDT and ETH/USDT'}
            </p>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-500">
            <h3 className="font-bold text-black dark:text-white mb-3 flex items-center gap-2">
              <span>❌</span>
              {isZh ? '错误2：忽视流动性' : 'Mistake 2: Ignoring Liquidity'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '在低流动性交易对中，大额订单会导致严重滑点，买入和卖出价差巨大。'
                : 'In low-liquidity pairs, large orders cause severe slippage with huge bid-ask spreads.'}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>{isZh ? '建议：' : 'Advice:'}</strong>{' '}
              {isZh ? '选择24h交易量 > $100M的交易对' : 'Choose pairs with 24h volume > $100M'}
            </p>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-500">
            <h3 className="font-bold text-black dark:text-white mb-3 flex items-center gap-2">
              <span>❌</span>
              {isZh ? '错误3：过度分散' : 'Mistake 3: Over-Diversification'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '同时交易10多个交易对，精力分散，无法深入研究每个三重种。'
                : 'Trading 10+ pairs simultaneously spreads attention too thin, unable to research each coin deeply.'}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>{isZh ? '建议：' : 'Advice:'}</strong>{' '}
              {isZh ? '专注2-3个主流交易对，深入掌握' : 'Focus on 2-3 major pairs, master them deeply'}
            </p>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-500">
            <h3 className="font-bold text-black dark:text-white mb-3 flex items-center gap-2">
              <span>❌</span>
              {isZh ? '错误4：忽视手续费' : 'Mistake 4: Ignoring Fees'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '频繁交易小额订单，手续费累积后可能吞噬大部分利润。'
                : 'Frequent trading of small orders accumulates fees that may eat most profits.'}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400">
              <strong>{isZh ? '建议：' : 'Advice:'}</strong>{' '}
              {isZh ? '计算每笔交易的总成本（手续费+滑点）' : 'Calculate total cost per trade (fees + slippage)'}
            </p>
          </div>
        </div>
      </section>
    </EducationPageTemplate>
  );
}
