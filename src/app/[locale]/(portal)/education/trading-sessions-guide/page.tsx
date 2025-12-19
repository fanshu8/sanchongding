import { getLanguageFromLocale, generateBilingualMetadata } from '@/lib/getServerLanguage';
import { tradingSessionsContent } from '@/content/education/trading-sessions-guide.content';
import EducationPageTemplate from '@/components/education/EducationPageTemplate';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);

  return generateBilingualMetadata(
    tradingSessionsContent.zh.title,
    tradingSessionsContent.en.title,
    tradingSessionsContent.zh.description,
    tradingSessionsContent.en.description,
    tradingSessionsContent.zh.keywords,
    tradingSessionsContent.en.keywords,
    lang
  );
}

export default async function TradingSessionsGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);
  const content = tradingSessionsContent[lang];
  const isZh = lang === 'zh';

  return (
    <EducationPageTemplate content={content} language={lang}>
      {/* Section 1: 24/7 Nature */}
      <section id="crypto-24-7" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '加密货币的24/7交易特性' : '24/7 Nature of Crypto Trading'}
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            {isZh
              ? '数字货币市场与传统金融市场最大的不同在于：'
              : 'The biggest difference between cryptocurrency markets and traditional financial markets:'}
            <strong className="text-black dark:text-white">
              {isZh ? '全年无休，24小时不间断交易' : 'Year-round, 24-hour continuous trading'}
            </strong>
            {isZh
              ? '。这意味着无论是周末、节假日，还是凌晨三点，你都可以随时进行交易。'
              : '. This means you can trade anytime, whether it\'s weekends, holidays, or 3 AM.'}
          </p>

          <div className="bg-black dark:bg-white text-white dark:text-black p-6 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3">
              {isZh ? '💡 为什么数字货币能做到24/7？' : '💡 Why Can Crypto Trade 24/7?'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <strong>{isZh ? '去中心化：' : 'Decentralized:'}</strong>{' '}
                {isZh
                  ? '没有中央交易所，全球各地的交易所和节点同时运行'
                  : 'No central exchange - exchanges and nodes worldwide operate simultaneously'}
              </li>
              <li>
                <strong>{isZh ? '区块链技术：' : 'Blockchain Technology:'}</strong>{' '}
                {isZh
                  ? '交易记录在区块链上，无需等待银行营业时间'
                  : 'Transactions recorded on blockchain, no need to wait for banking hours'}
              </li>
              <li>
                <strong>{isZh ? '全球参与：' : 'Global Participation:'}</strong>{' '}
                {isZh
                  ? '来自全球各时区的交易者提供持续流动性'
                  : 'Traders from all time zones provide continuous liquidity'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: Active Periods */}
      <section id="active-periods" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '全球交易活跃时段分析' : 'Global Active Trading Periods'}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {isZh
            ? '虽然可以24小时交易，但并非所有时段的流动性和波动性都相同。根据全球主要交易所和交易者分布，以下时段最为活跃：'
            : 'While trading is available 24 hours, liquidity and volatility vary. Based on major exchanges and trader distribution, these periods are most active:'}
        </p>

        {/* Period 1: Asia Prime Time */}
        <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
            <span>🌏</span>
            {isZh ? '亚洲时段（中等活跃）' : 'Asian Session (Moderate Activity)'}
          </h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>{isZh ? '时间段：' : 'Time Period:'}</strong>{' '}
              {isZh ? '北京时间 06:00 - 15:00' : '06:00 - 15:00 Beijing Time (UTC+8)'}
            </p>
            <p>
              <strong>{isZh ? '特征：' : 'Characteristics:'}</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {isZh
                  ? '交易量相对较低，占全球总量的约15-20%'
                  : 'Relatively lower volume, ~15-20% of global total'}
              </li>
              <li>
                {isZh
                  ? '价格波动较小，适合趋势跟踪和新手练习'
                  : 'Smaller price movements, suitable for trend-following and beginner practice'}
              </li>
              <li>
                {isZh
                  ? '币安（Binance）、OKX等亚洲交易所活跃度高'
                  : 'High activity on Asian exchanges like Binance and OKX'}
              </li>
              <li>
                {isZh
                  ? '适合交易：BNB/USDT, AVAX/USDT等亚洲关注度高的币种'
                  : 'Good for trading: BNB/USDT, AVAX/USDT and other Asia-focused coins'}
              </li>
            </ul>
          </div>
        </div>

        {/* Period 2: European Prime Time */}
        <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
            <span>🌍</span>
            {isZh ? '欧洲时段（高活跃）' : 'European Session (High Activity)'}
          </h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>{isZh ? '时间段：' : 'Time Period:'}</strong>{' '}
              {isZh ? '北京时间 15:00 - 23:00' : '15:00 - 23:00 Beijing Time (07:00 - 15:00 UTC)'}
            </p>
            <p>
              <strong>{isZh ? '特征：' : 'Characteristics:'}</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {isZh
                  ? '交易量开始增加，占全球总量的约25-30%'
                  : 'Volume starts increasing, ~25-30% of global total'}
              </li>
              <li>
                {isZh
                  ? '波动性增强，机构投资者开始活跃'
                  : 'Volatility increases, institutional investors become active'}
              </li>
              <li>
                {isZh
                  ? 'Coinbase（欧洲用户）、Kraken等交易所流动性增强'
                  : 'Increased liquidity on Coinbase (European users) and Kraken'}
              </li>
              <li>
                {isZh
                  ? '适合交易主流币种：BTC/USDT, ETH/USDT'
                  : 'Good for major coins: BTC/USDT, ETH/USDT'}
              </li>
            </ul>
          </div>
        </div>

        {/* Period 3: US Prime Time (Peak) */}
        <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-4 border-black dark:border-white">
          <h3 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
            <span>🌎</span>
            {isZh ? '美国时段（最高活跃）⭐' : 'US Session (Peak Activity) ⭐'}
          </h3>
          <div className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>{isZh ? '时间段：' : 'Time Period:'}</strong>{' '}
              {isZh ? '北京时间 20:00 - 次日 02:00' : '20:00 - 02:00 next day Beijing Time (12:00 - 18:00 UTC)'}
            </p>
            <p>
              <strong>{isZh ? '特征：' : 'Characteristics:'}</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                {isZh
                  ? '全天交易量最高，占全球总量的40-50%'
                  : 'Highest daily volume, ~40-50% of global total'}
              </li>
              <li>
                {isZh
                  ? '欧美时段重叠（北京时间20:00-23:00），流动性最强'
                  : 'EU-US overlap (20:00-23:00 Beijing), strongest liquidity'}
              </li>
              <li>
                {isZh
                  ? '重大新闻（美联储决议、CPI数据）通常在此时段发布'
                  : 'Major news (Fed decisions, CPI data) typically released during this period'}
              </li>
              <li>
                {isZh
                  ? 'Coinbase、Gemini、Kraken等美国交易所达到日内峰值'
                  : 'Coinbase, Gemini, Kraken reach daily peak activity'}
              </li>
              <li>
                {isZh
                  ? '价格波动最剧烈，适合日内交易和突破策略'
                  : 'Most volatile period, ideal for day trading and breakout strategies'}
              </li>
            </ul>
            <div className="mt-4 p-4 bg-black dark:bg-white text-white dark:text-black">
              <p className="font-bold">
                {isZh ? '💰 最佳交易时段推荐' : '💰 Recommended Best Trading Hours'}
              </p>
              <p className="text-sm mt-2">
                {isZh
                  ? '如果只能选择一个时段交易，建议选择北京时间20:00-02:00（美国东部时间8:00-14:00），这是全球流动性最强、价格发现最有效的黄金时段。'
                  : 'If you can only trade during one period, choose 20:00-02:00 Beijing Time (8:00-14:00 US Eastern) - the golden hours with highest global liquidity and most efficient price discovery.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Exchange Peak Hours */}
      <section id="exchange-peaks" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '主要交易所高峰时段' : 'Major Exchange Peak Hours'}
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-2 border-black dark:border-white">
            <thead>
              <tr className="bg-black dark:bg-white text-white dark:text-black">
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '交易所' : 'Exchange'}
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '主要地区' : 'Primary Region'}
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '高峰时段（北京时间）' : 'Peak Hours (Beijing Time)'}
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '特色币种' : 'Featured Coins'}
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr>
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">Binance</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '全球（亚洲为主）' : 'Global (Asia-focused)'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">09:00 - 01:00</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">BNB, BTC, ETH</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">Coinbase</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '美国' : 'United States'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">20:00 - 02:00</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">BTC, ETH, SOL</td>
              </tr>
              <tr>
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">OKX</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '亚洲' : 'Asia'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">08:00 - 24:00</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">BTC, ETH, OKB</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">Kraken</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '欧美' : 'Europe/US'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">15:00 - 02:00</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">BTC, ETH, XRP</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 4: Volume & Liquidity */}
      <section id="trading-volume" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '交易量分布与流动性' : 'Volume Distribution & Liquidity'}
        </h2>

        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {isZh
              ? '根据CoinMarketCap和各大交易所数据，全球数字货币市场24小时交易量分布如下：'
              : 'According to CoinMarketCap and major exchange data, 24-hour crypto trading volume distribution:'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600">
              <div className="text-3xl font-black text-black dark:text-white mb-2">15-20%</div>
              <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                {isZh ? '亚洲时段' : 'Asian Session'}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                {isZh ? '06:00-15:00 北京时间' : '06:00-15:00 Beijing Time'}
              </div>
            </div>

            <div className="p-6 bg-gray-100 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600">
              <div className="text-3xl font-black text-black dark:text-white mb-2">25-30%</div>
              <div className="text-sm font-bold text-gray-600 dark:text-gray-400 mb-2">
                {isZh ? '欧洲时段' : 'European Session'}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-500">
                {isZh ? '15:00-23:00 北京时间' : '15:00-23:00 Beijing Time'}
              </div>
            </div>

            <div className="p-6 bg-black dark:bg-white border-2 border-black dark:border-white">
              <div className="text-3xl font-black text-white dark:text-black mb-2">40-50%</div>
              <div className="text-sm font-bold text-white dark:text-black mb-2">
                {isZh ? '美国时段 ⭐' : 'US Session ⭐'}
              </div>
              <div className="text-xs text-gray-300 dark:text-gray-700">
                {isZh ? '20:00-02:00 北京时间' : '20:00-02:00 Beijing Time'}
              </div>
            </div>
          </div>

          <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-500">
            <h3 className="font-bold text-black dark:text-white mb-2">
              {isZh ? '⚠️ 流动性警示' : '⚠️ Liquidity Warning'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {isZh
                ? '在低流动性时段（如凌晨3-6点），大额订单可能导致显著滑点。建议将大额交易拆分为多个小单，或等待流动性高峰期执行。'
                : 'During low liquidity periods (like 3-6 AM), large orders may cause significant slippage. Consider splitting large trades into smaller orders or waiting for peak liquidity.'}
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Best Times by Strategy */}
      <section id="best-times" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '不同策略的最佳交易时间' : 'Best Trading Times by Strategy'}
        </h2>

        <div className="space-y-6">
          {/* Scalping */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {isZh ? '剥头皮交易（Scalping）' : 'Scalping'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>{isZh ? '推荐时段：' : 'Recommended Hours:'}</strong>{' '}
              {isZh ? '北京时间 20:00 - 02:00（美国高峰）' : '20:00 - 02:00 Beijing Time (US Peak)'}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isZh
                ? '剥头皮需要极高的流动性和最窄的买卖价差。美国时段流动性最强，订单执行速度最快，滑点最小。'
                : 'Scalping requires maximum liquidity and tightest spreads. US session offers best liquidity, fastest execution, and minimal slippage.'}
            </p>
          </div>

          {/* Day Trading */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {isZh ? '日内交易（Day Trading）' : 'Day Trading'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>{isZh ? '推荐时段：' : 'Recommended Hours:'}</strong>{' '}
              {isZh ? '北京时间 15:00 - 02:00（欧美时段）' : '15:00 - 02:00 Beijing Time (EU-US)'}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isZh
                ? '日内交易适合在波动性较高的时段进行。欧美时段重叠时期（20:00-23:00）是最佳窗口，价格走势明确，趋势容易形成。'
                : 'Day trading thrives in high-volatility periods. EU-US overlap (20:00-23:00) is the golden window with clear price action and strong trends.'}
            </p>
          </div>

          {/* Swing Trading */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {isZh ? '波段交易（Swing Trading）' : 'Swing Trading'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>{isZh ? '推荐时段：' : 'Recommended Hours:'}</strong>{' '}
              {isZh ? '任何时段（关注周线/日线）' : 'Any Time (Focus on Weekly/Daily Charts)'}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isZh
                ? '波段交易持仓时间较长（数天到数周），对具体入场时间要求不高。但建议在流动性高峰期执行订单，以获得更好的价格。'
                : 'Swing trading holds positions for days to weeks, so entry timing is less critical. However, execute orders during peak liquidity for better prices.'}
            </p>
          </div>

          {/* Trend Following */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {isZh ? '趋势跟踪（Trend Following）' : 'Trend Following'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>{isZh ? '推荐时段：' : 'Recommended Hours:'}</strong>{' '}
              {isZh ? '北京时间 06:00 - 15:00（亚洲时段）' : '06:00 - 15:00 Beijing Time (Asian Session)'}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isZh
                ? '亚洲时段波动较小，适合趋势跟踪策略。此时段价格走势相对平稳，假突破较少，更容易捕捉持续的趋势。'
                : 'Asian session has lower volatility, ideal for trend following. Price action is smoother with fewer false breakouts, making it easier to catch sustained trends.'}
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Weekend Trading */}
      <section id="weekend-trading" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '周末交易特点与注意事项' : 'Weekend Trading Characteristics'}
        </h2>

        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {isZh
              ? '数字货币市场周末照常运行，但交易特征与工作日有显著差异：'
              : 'Crypto markets operate normally on weekends, but trading characteristics differ significantly from weekdays:'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-500">
              <h3 className="font-bold text-black dark:text-white mb-3 flex items-center gap-2">
                <span>⚠️</span>
                {isZh ? '周末风险' : 'Weekend Risks'}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>{isZh ? '流动性下降：' : 'Lower Liquidity:'}</strong>{' '}
                  {isZh ? '交易量比工作日低20-40%' : 'Volume 20-40% lower than weekdays'}
                </li>
                <li>
                  <strong>{isZh ? '滑点增加：' : 'Increased Slippage:'}</strong>{' '}
                  {isZh ? '大额订单更容易造成价格滑动' : 'Large orders more likely to cause price slippage'}
                </li>
                <li>
                  <strong>{isZh ? '波动异常：' : 'Abnormal Volatility:'}</strong>{' '}
                  {isZh ? '"周末行情"可能导致突然暴涨暴跌' : '"Weekend moves" can cause sudden pumps or dumps'}
                </li>
                <li>
                  <strong>{isZh ? '支持有限：' : 'Limited Support:'}</strong>{' '}
                  {isZh ? '交易所客服响应速度较慢' : 'Exchange customer service response slower'}
                </li>
              </ul>
            </div>

            <div className="p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-500">
              <h3 className="font-bold text-black dark:text-white mb-3 flex items-center gap-2">
                <span>✅</span>
                {isZh ? '周末建议' : 'Weekend Recommendations'}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>{isZh ? '降低仓位：' : 'Reduce Position Size:'}</strong>{' '}
                  {isZh ? '使用平时50-70%的仓位' : 'Use 50-70% of your typical position'}
                </li>
                <li>
                  <strong>{isZh ? '放宽止损：' : 'Wider Stop Loss:'}</strong>{' '}
                  {isZh ? '增加10-20%的止损空间' : 'Add 10-20% buffer to stop loss'}
                </li>
                <li>
                  <strong>{isZh ? '避免追单：' : 'Avoid Chasing:'}</strong>{' '}
                  {isZh ? '不要追逐周末突然出现的行情' : 'Don\'t chase sudden weekend moves'}
                </li>
                <li>
                  <strong>{isZh ? '提前设单：' : 'Set Orders in Advance:'}</strong>{' '}
                  {isZh ? '使用限价单和止损单' : 'Use limit orders and stop losses'}
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white">
            <h3 className="font-bold mb-2">
              {isZh ? '💡 职业交易员的周末习惯' : '💡 Professional Trader Weekend Habits'}
            </h3>
            <p className="text-sm">
              {isZh
                ? '大多数职业交易员会在周末减少交易频率，利用这段时间复盘上周的交易、规划下周策略、学习新知识。记住：不交易也是一种交易策略。'
                : 'Most professional traders reduce trading frequency on weekends, using this time to review last week\'s trades, plan next week\'s strategy, and learn new skills. Remember: not trading is also a trading strategy.'}
            </p>
          </div>
        </div>
      </section>
    </EducationPageTemplate>
  );
}
