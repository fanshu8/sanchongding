import { getLanguageFromLocale, generateBilingualMetadata } from '@/lib/getServerLanguage';
import { bollingerBandsContent } from '@/content/education/bollinger-bands.content';
import EducationPageTemplate from '@/components/education/EducationPageTemplate';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);

  return generateBilingualMetadata(
    bollingerBandsContent.zh.title,
    bollingerBandsContent.en.title,
    bollingerBandsContent.zh.description,
    bollingerBandsContent.en.description,
    bollingerBandsContent.zh.keywords,
    bollingerBandsContent.en.keywords,
    lang
  );
}

export default async function BollingerBandsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);
  const content = bollingerBandsContent[lang];
  const isZh = lang === 'zh';

  return (
    <EducationPageTemplate content={content} language={lang}>
      {/* Section 1: What is Bollinger Bands */}
      <section id="what-is-bb" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '什么是布林带？' : 'What is Bollinger Bands?'}
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            {isZh
              ? '布林带（Bollinger Bands，简称BB）由约翰·布林格（John Bollinger）在1980年代创建，是技术分析中最受欢迎的波动性指标之一。它通过计算价格的标准差来动态调整上下轨道，从而形成一个"价格通道"，帮助交易者识别价格的相对高低、趋势强度和潜在的突破或反转点。'
              : 'Bollinger Bands (BB) were created by John Bollinger in the 1980s, one of the most popular volatility indicators in technical analysis. It dynamically adjusts upper and lower bands by calculating price standard deviation, forming a "price channel" that helps traders identify relative price levels, trend strength, and potential breakouts or reversals.'}
          </p>

          <div className="p-6 bg-black dark:bg-white text-white dark:text-black">
            <h3 className="text-xl font-bold mb-4">{isZh ? '布林带的三个组成部分' : 'Bollinger Bands Three Components'}</h3>
            <ul className="space-y-3">
              <li>
                <strong>{isZh ? '1. 中轨（Middle Band）：' : '1. Middle Band:'}</strong>{' '}
                {isZh
                  ? '通常为20周期简单移动平均线（SMA），代表价格的中心趋势'
                  : 'Usually 20-period Simple Moving Average (SMA), represents central price trend'}
              </li>
              <li>
                <strong>{isZh ? '2. 上轨（Upper Band）：' : '2. Upper Band:'}</strong>{' '}
                {isZh
                  ? '中轨 + (2倍标准差)，代表价格的上方阻力区域'
                  : 'Middle Band + (2 × Standard Deviation), represents upper resistance zone'}
              </li>
              <li>
                <strong>{isZh ? '3. 下轨（Lower Band）：' : '3. Lower Band:'}</strong>{' '}
                {isZh
                  ? '中轨 - (2倍标准差)，代表价格的下方支撑区域'
                  : 'Middle Band - (2 × Standard Deviation), represents lower support zone'}
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? '布林带的核心优势' : 'Bollinger Bands Core Advantages'}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>{isZh ? '动态适应性：' : 'Dynamic adaptability:'}</strong>{' '}
                {isZh ? '自动根据市场波动性调整带宽，高波动时扩张，低波动时收缩' : 'Automatically adjusts bandwidth based on market volatility, expands in high volatility, contracts in low volatility'}
              </li>
              <li>
                <strong>{isZh ? '多功能应用：' : 'Multi-functional:'}</strong>{' '}
                {isZh ? '可用于趋势识别、支撑阻力、超买超卖、突破交易' : 'Used for trend identification, support/resistance, overbought/oversold, breakout trading'}
              </li>
              <li>
                <strong>{isZh ? '波动性测量：' : 'Volatility measurement:'}</strong>{' '}
                {isZh ? '带宽直观反映市场波动程度，帮助调整交易策略和仓位' : 'Bandwidth visually reflects market volatility, helps adjust trading strategy and position size'}
              </li>
              <li>
                <strong>{isZh ? '视觉直观：' : 'Visual clarity:'}</strong>{' '}
                {isZh ? '价格与上下轨的关系一目了然，易于理解和应用' : 'Price relationship with bands clear at a glance, easy to understand and apply'}
              </li>
              <li>
                <strong>{isZh ? '统计基础：' : 'Statistical foundation:'}</strong>{' '}
                {isZh ? '基于标准差，理论上95%的价格应在上下轨之间波动' : 'Based on standard deviation, theoretically 95% of prices should fluctuate between bands'}
              </li>
            </ul>
          </div>

          <div className="p-6 border-2 border-black dark:border-white">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? '布林带的独特之处' : 'What Makes Bollinger Bands Unique'}
            </h3>
            <p className="mb-3">
              {isZh
                ? '与固定的支撑阻力线不同，布林带会根据市场状态自动调整。在高波动的趋势市场中，布林带会扩张，给价格更大的运行空间；在低波动的震荡市场中，布林带会收缩，价格触及上下轨的频率增加。这种"自适应"特性使布林带在不同市场环境下都能保持有效性。'
                : 'Unlike fixed support/resistance lines, Bollinger Bands automatically adjust based on market conditions. In high-volatility trending markets, bands expand, giving price more room to move; in low-volatility ranging markets, bands contract, price touches bands more frequently. This "adaptive" characteristic keeps Bollinger Bands effective across different market environments.'}
            </p>
            <p className="text-sm italic">
              {isZh
                ? '约翰·布林格本人强调："布林带不提供连续的建议，而是帮助识别价格相对高或低的时刻。"'
                : 'John Bollinger himself emphasized: "Bollinger Bands do not provide continuous advice, but help identify when prices are relatively high or low."'}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Calculation and Parameters */}
      <section id="calculation" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '布林带的计算与参数设置' : 'Bollinger Bands Calculation and Parameter Settings'}
        </h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <div className="p-6 bg-black dark:bg-white text-white dark:text-black">
            <h3 className="text-xl font-bold mb-4">{isZh ? '计算公式' : 'Calculation Formulas'}</h3>
            <div className="space-y-3 font-mono text-sm">
              <p>
                <strong>{isZh ? '1. 计算中轨（20周期SMA）：' : '1. Calculate Middle Band (20-period SMA):'}</strong>
              </p>
              <p className="pl-4">
                {isZh ? '中轨 = SMA(收盘价, 20)' : 'Middle Band = SMA(Close, 20)'}
              </p>
              <p className="mt-3">
                <strong>{isZh ? '2. 计算标准差（Standard Deviation）：' : '2. Calculate Standard Deviation:'}</strong>
              </p>
              <p className="pl-4">
                {isZh ? 'σ = SQRT(SUM[(价格 - 中轨)² ] / 20)' : 'σ = SQRT(SUM[(Price - Middle Band)²] / 20)'}
              </p>
              <p className="mt-3">
                <strong>{isZh ? '3. 计算上轨：' : '3. Calculate Upper Band:'}</strong>
              </p>
              <p className="pl-4">
                {isZh ? '上轨 = 中轨 + (2 × σ)' : 'Upper Band = Middle Band + (2 × σ)'}
              </p>
              <p className="mt-3">
                <strong>{isZh ? '4. 计算下轨：' : '4. Calculate Lower Band:'}</strong>
              </p>
              <p className="pl-4">
                {isZh ? '下轨 = 中轨 - (2 × σ)' : 'Lower Band = Middle Band - (2 × σ)'}
              </p>
              <p className="mt-3 text-white/80 dark:text-black/80">
                {isZh ? '* 标准参数：周期=20，标准差倍数=2' : '* Standard parameters: Period=20, Standard Deviation Multiple=2'}
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '参数对比表' : 'Parameter Comparison Table'}
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-black dark:border-white">
                <thead>
                  <tr className="bg-black dark:bg-white text-white dark:text-black">
                    <th className="border border-black dark:border-white p-3 text-left">
                      {isZh ? '参数设置' : 'Parameter Setting'}
                    </th>
                    <th className="border border-black dark:border-white p-3 text-left">
                      {isZh ? '适用场景' : 'Applicable Scenario'}
                    </th>
                    <th className="border border-black dark:border-white p-3 text-left">
                      {isZh ? '特点' : 'Characteristics'}
                    </th>
                    <th className="border border-black dark:border-white p-3 text-left">
                      {isZh ? '优缺点' : 'Pros & Cons'}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border border-black dark:border-white">
                    <td className="border border-black dark:border-white p-3 font-bold">(20, 2)</td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '标准参数，适合大多数市场和时间框架' : 'Standard parameter, suitable for most markets and timeframes'}
                    </td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '平衡灵敏度与可靠性，95%价格在带内' : 'Balances sensitivity and reliability, 95% prices within bands'}
                    </td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '✅ 经典验证 ❌ 可能不够精准' : '✅ Classically validated ❌ May lack precision'}
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800 border border-black dark:border-white">
                    <td className="border border-black dark:border-white p-3 font-bold">(20, 2.5)</td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '高波动市场（如加密货三重、新闻行情）' : 'High volatility markets (e.g., crypto, news events)'}
                    </td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '带宽更宽，减少假突破信号' : 'Wider bands, reduces false breakout signals'}
                    </td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '✅ 减少噪音 ❌ 信号延迟' : '✅ Reduces noise ❌ Signal lag'}
                    </td>
                  </tr>
                  <tr className="border border-black dark:border-white">
                    <td className="border border-black dark:border-white p-3 font-bold">(20, 1.5)</td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '低波动市场、震荡区间交易' : 'Low volatility markets, range trading'}
                    </td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '带宽更窄，更频繁触及上下轨' : 'Narrower bands, more frequent touches'}
                    </td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '✅ 更多信号 ❌ 假信号增加' : '✅ More signals ❌ More false signals'}
                    </td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800 border border-black dark:border-white">
                    <td className="border border-black dark:border-white p-3 font-bold">(10, 2)</td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '短线日内交易（5分钟、15分钟图）' : 'Short-term day trading (5min, 15min charts)'}
                    </td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '快速响应价格变化，适合快进快出' : 'Quick response to price changes, suitable for quick in-out'}
                    </td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '✅ 快速信号 ❌ 噪音多' : '✅ Fast signals ❌ More noise'}
                    </td>
                  </tr>
                  <tr className="border border-black dark:border-white">
                    <td className="border border-black dark:border-white p-3 font-bold">(50, 2.5)</td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '长线波段交易（日线、周线）' : 'Long-term swing trading (daily, weekly)'}
                    </td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '更平滑，过滤短期波动，捕捉主趋势' : 'Smoother, filters short-term fluctuations, captures main trend'}
                    </td>
                    <td className="border border-black dark:border-white p-3">
                      {isZh ? '✅ 高可靠性 ❌ 信号少且慢' : '✅ High reliability ❌ Few and slow signals'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? '⚠️ 参数调整建议' : '⚠️ Parameter Adjustment Recommendations'}
            </h3>
            <p className="mb-2">
              {isZh
                ? '虽然布林带参数可以调整，但建议以(20, 2)为基准进行优化。调整标准差倍数（1.5-3）比调整周期更常见，因为它直接影响带宽和信号频率。'
                : 'While Bollinger Bands parameters can be adjusted, recommend using (20, 2) as baseline for optimization. Adjusting standard deviation multiple (1.5-3) more common than period, as it directly affects bandwidth and signal frequency.'}
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                {isZh
                  ? '不同市场特性：股票通常(20, 2)，数字货三重可尝试(20, 2.5)，加密货三重可能需要(20, 3)'
                  : 'Different market characteristics: stocks typically (20, 2), cryptocurrency try (20, 2.5), crypto may need (20, 3)'}
              </li>
              <li>
                {isZh
                  ? '时间框架匹配：日内短线用较小周期(10-15)，波段用标准(20)，长线用较大周期(50)'
                  : 'Timeframe matching: intraday use smaller period (10-15), swing use standard (20), long-term use larger (50)'}
              </li>
              <li>
                {isZh
                  ? '回测验证：任何参数修改都必须在充足的历史数据上回测，避免过度拟合'
                  : 'Backtest validation: any parameter modification must be backtested on sufficient historical data, avoid overfitting'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Signal Interpretation */}
      <section id="interpretation" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '如何解读布林带信号' : 'How to Interpret Bollinger Bands Signals'}
        </h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-green-600 bg-green-50 dark:bg-green-900/20">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? '✅ 触及下轨（买入信号）' : '✅ Touch Lower Band (Buy Signal)'}
              </h3>
              <p className="mb-3 text-sm">
                {isZh
                  ? '价格触及或穿透下轨，通常表示价格相对低位'
                  : 'Price touches or penetrates lower band, typically indicates relatively low price'}
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>{isZh ? '震荡市中：' : 'In ranging markets:'}</strong>{' '}
                  {isZh ? '触及下轨是强支撑，高概率反弹，可做多' : 'Lower band touch is strong support, high probability bounce, can long'}
                </p>
                <p>
                  <strong>{isZh ? '下降趋势中：' : 'In downtrends:'}</strong>{' '}
                  {isZh ? '可能只是短暂反弹，需结合其他指标确认反转' : 'May be only brief bounce, need other indicators to confirm reversal'}
                </p>
                <p>
                  <strong>{isZh ? '最佳入场：' : 'Best entry:'}</strong>{' '}
                  {isZh ? '价格触及下轨后开始反弹，配合看涨K线形态' : 'Price starts bouncing after lower band touch, with bullish candlestick pattern'}
                </p>
              </div>
            </div>

            <div className="p-6 border-2 border-red-600 bg-red-50 dark:bg-red-900/20">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? '❌ 触及上轨（卖出信号）' : '❌ Touch Upper Band (Sell Signal)'}
              </h3>
              <p className="mb-3 text-sm">
                {isZh
                  ? '价格触及或穿透上轨，通常表示价格相对高位'
                  : 'Price touches or penetrates upper band, typically indicates relatively high price'}
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>{isZh ? '震荡市中：' : 'In ranging markets:'}</strong>{' '}
                  {isZh ? '触及上轨是强阻力，高概率回落，可做空' : 'Upper band touch is strong resistance, high probability pullback, can short'}
                </p>
                <p>
                  <strong>{isZh ? '上升趋势中：' : 'In uptrends:'}</strong>{' '}
                  {isZh ? '可能只是短暂回调，趋势可能延续（沿轨运行）' : 'May be only brief pullback, trend may continue (walking the bands)'}
                </p>
                <p>
                  <strong>{isZh ? '最佳入场：' : 'Best entry:'}</strong>{' '}
                  {isZh ? '价格触及上轨后开始回落，配合看跌K线形态' : 'Price starts falling after upper band touch, with bearish candlestick pattern'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-black dark:bg-white text-white dark:text-black">
            <h3 className="text-xl font-bold mb-4">{isZh ? '布林带宽度（Bandwidth）的意义' : 'Bollinger Bandwidth Significance'}</h3>
            <p className="mb-3">
              {isZh
                ? '带宽 = (上轨 - 下轨) / 中轨，直接反映市场波动性。'
                : 'Bandwidth = (Upper Band - Lower Band) / Middle Band, directly reflects market volatility.'}
            </p>
            <ul className="space-y-2">
              <li>
                <strong>{isZh ? '带宽扩张（Expansion）：' : 'Bandwidth Expansion:'}</strong>{' '}
                {isZh
                  ? '市场波动性增加，通常发生在趋势启动或加速阶段。扩张越快，趋势越强劲。'
                  : 'Market volatility increasing, typically occurs during trend initiation or acceleration. Faster expansion = stronger trend.'}
              </li>
              <li>
                <strong>{isZh ? '带宽收缩（Contraction）：' : 'Bandwidth Contraction:'}</strong>{' '}
                {isZh
                  ? '市场波动性降低，价格在窄幅区间震荡。通常预示即将出现突破或大行情。'
                  : 'Market volatility decreasing, price oscillating in narrow range. Typically precedes breakout or significant move.'}
              </li>
              <li>
                <strong>{isZh ? '布林带挤压（Squeeze）：' : 'Bollinger Squeeze:'}</strong>{' '}
                {isZh
                  ? '带宽收窄至极低水平（历史低点附近），是最强的突破预警信号。挤压后必有大行情，但方向需突破确认。'
                  : 'Bandwidth narrows to extremely low level (near historical lows), strongest breakout warning signal. After squeeze comes significant move, but direction needs breakout confirmation.'}
              </li>
              <li>
                <strong>{isZh ? '带宽正常：' : 'Normal Bandwidth:'}</strong>{' '}
                {isZh
                  ? '市场处于正常波动状态，按常规策略交易。'
                  : 'Market in normal volatility state, trade with regular strategies.'}
              </li>
            </ul>
          </div>

          <div className="p-6 border-2 border-black dark:border-white">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? '📊 价格与中轨的关系' : '📊 Price Relationship with Middle Band'}
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong>{isZh ? '价格在中轨上方运行：' : 'Price running above middle band:'}</strong>{' '}
                {isZh ? '市场处于上升趋势，买盘强劲。中轨可作为动态支撑。' : 'Market in uptrend, strong buying pressure. Middle band can act as dynamic support.'}
              </li>
              <li>
                <strong>{isZh ? '价格在中轨下方运行：' : 'Price running below middle band:'}</strong>{' '}
                {isZh ? '市场处于下降趋势，卖盘强劲。中轨可作为动态阻力。' : 'Market in downtrend, strong selling pressure. Middle band can act as dynamic resistance.'}
              </li>
              <li>
                <strong>{isZh ? '价格穿越中轨：' : 'Price crossing middle band:'}</strong>{' '}
                {isZh ? '向上穿越=趋势可能转多；向下穿越=趋势可能转空。中轨是重要的多空分界线。' : 'Upward cross = trend may turn bullish; downward cross = trend may turn bearish. Middle band is important bull/bear dividing line.'}
              </li>
              <li>
                <strong>{isZh ? '价格频繁穿越中轨：' : 'Price frequently crossing middle band:'}</strong>{' '}
                {isZh ? '市场无明确方向，处于震荡整理阶段，不适合趋势交易。' : 'Market has no clear direction, in consolidation phase, unsuitable for trend trading.'}
              </li>
            </ul>
          </div>

          <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-600">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? '⚠️ 重要提醒：沿轨运行（Walking the Bands）' : '⚠️ Important Note: Walking the Bands'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {isZh
                ? '在强趋势中，价格可能沿着布林带上轨（上升趋势）或下轨（下降趋势）持续运行数日甚至数周。这时触及上下轨不是反转信号，而是趋势强劲的标志。新手常犯的错误是看到价格触及上轨就做空，结果被强趋势止损出局。正确做法：识别沿轨运行模式，顺势而为，等待明确的反转信号（如带宽收缩、价格跌破中轨）再考虑反向交易。'
                : 'In strong trends, price may run along Bollinger upper band (uptrend) or lower band (downtrend) for days or even weeks. Band touches are not reversal signals but signs of strong trend. Common beginner mistake: shorting when price touches upper band, getting stopped out by strong trend. Correct approach: identify walking-the-bands pattern, trade with trend, wait for clear reversal signals (bandwidth contraction, price breaking middle band) before considering counter-trend trades.'}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Trading Strategies */}
      <section id="trading-strategies" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '经典布林带交易策略' : 'Classic Bollinger Bands Trading Strategies'}
        </h2>
        <div className="space-y-6">
          <div className="p-6 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '策略1：布林带反转策略（均值回归）' : 'Strategy 1: Bollinger Band Reversal (Mean Reversion)'}
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>{isZh ? '原理：' : 'Principle:'}</strong>{' '}
                {isZh
                  ? '在震荡市场中，价格触及布林带极端位置（上轨或下轨）后，倾向于回归中轨。这是布林带最经典的应用。'
                  : 'In ranging markets, price tends to revert to middle band after touching extreme positions (upper or lower bands). This is the most classic BB application.'}
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800">
                <p className="font-bold mb-2">{isZh ? '做多设置：' : 'Long Setup:'}</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>{isZh ? '市场环境：震荡市，无明确趋势（价格在中轨上下频繁穿越）' : 'Market context: ranging market, no clear trend (price frequently crossing middle band)'}</li>
                  <li>{isZh ? '价格触及或穿透布林带下轨' : 'Price touches or penetrates lower band'}</li>
                  <li>{isZh ? '出现看涨反转K线形态（如Pin Bar、锤子线）' : 'Bullish reversal candlestick appears (e.g., Pin Bar, hammer)'}</li>
                  <li>{isZh ? 'RSI超卖（<30）可提高信号质量' : 'RSI oversold (<30) improves signal quality'}</li>
                  <li>{isZh ? '入场：下一根K线开盘价' : 'Entry: next candle open price'}</li>
                  <li>{isZh ? '止损：下轨下方20-30点，或最近低点下方' : 'Stop: 20-30 pips below lower band, or below recent low'}</li>
                  <li>{isZh ? '止盈：中轨附近，或风险回报比1:2' : 'Target: near middle band, or 1:2 risk-reward ratio'}</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 mt-3">
                <p className="font-bold mb-2">{isZh ? '做空设置：' : 'Short Setup:'}</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>{isZh ? '市场环境：震荡市，无明确趋势' : 'Market context: ranging market, no clear trend'}</li>
                  <li>{isZh ? '价格触及或穿透布林带上轨' : 'Price touches or penetrates upper band'}</li>
                  <li>{isZh ? '出现看跌反转K线形态（如射击之星、倒锤子）' : 'Bearish reversal candlestick appears (e.g., shooting star, inverted hammer)'}</li>
                  <li>{isZh ? 'RSI超买（>70）可提高信号质量' : 'RSI overbought (>70) improves signal quality'}</li>
                  <li>{isZh ? '入场：下一根K线开盘价' : 'Entry: next candle open price'}</li>
                  <li>{isZh ? '止损：上轨上方20-30点，或最近高点上方' : 'Stop: 20-30 pips above upper band, or above recent high'}</li>
                  <li>{isZh ? '止盈：中轨附近，或风险回报比1:2' : 'Target: near middle band, or 1:2 risk-reward ratio'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '策略2：布林带突破策略（趋势延续）' : 'Strategy 2: Bollinger Band Breakout (Trend Continuation)'}
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>{isZh ? '原理：' : 'Principle:'}</strong>{' '}
                {isZh
                  ? '在趋势市场中，价格突破布林带上轨（上升趋势）或下轨（下降趋势）后，趋势往往会延续。这与反转策略相反。'
                  : 'In trending markets, after price breaks above upper band (uptrend) or below lower band (downtrend), trend often continues. Opposite of reversal strategy.'}
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800">
                <p className="font-bold mb-2">{isZh ? '向上突破做多：' : 'Upward Breakout Long:'}</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>{isZh ? '市场环境：明确上升趋势（价格持续在中轨上方）' : 'Market context: clear uptrend (price consistently above middle band)'}</li>
                  <li>{isZh ? '价格突破布林带上轨，收盘价在上轨上方' : 'Price breaks above upper band, close above upper band'}</li>
                  <li>{isZh ? '带宽扩张，表明波动性增加，趋势加速' : 'Bandwidth expanding, indicating increased volatility, trend acceleration'}</li>
                  <li>{isZh ? '配合成交量放大（如有成交量数据）' : 'Accompanied by volume increase (if volume data available)'}</li>
                  <li>{isZh ? '入场：突破确认后的第一个回调至上轨或中轨' : 'Entry: first pullback to upper band or middle band after breakout confirmation'}</li>
                  <li>{isZh ? '止损：中轨下方，或最近低点下方' : 'Stop: below middle band, or below recent low'}</li>
                  <li>{isZh ? '止盈：追踪止盈，或使用风险回报比2:1或3:1' : 'Target: trailing stop, or use 2:1 or 3:1 risk-reward ratio'}</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 mt-3">
                <p className="font-bold mb-2">{isZh ? '向下突破做空：' : 'Downward Breakout Short:'}</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>{isZh ? '市场环境：明确下降趋势（价格持续在中轨下方）' : 'Market context: clear downtrend (price consistently below middle band)'}</li>
                  <li>{isZh ? '价格跌破布林带下轨，收盘价在下轨下方' : 'Price breaks below lower band, close below lower band'}</li>
                  <li>{isZh ? '带宽扩张，趋势加速' : 'Bandwidth expanding, trend acceleration'}</li>
                  <li>{isZh ? '配合成交量放大' : 'Accompanied by volume increase'}</li>
                  <li>{isZh ? '入场：突破确认后的第一个反弹至下轨或中轨' : 'Entry: first bounce to lower band or middle band after breakout confirmation'}</li>
                  <li>{isZh ? '止损：中轨上方，或最近高点上方' : 'Stop: above middle band, or above recent high'}</li>
                  <li>{isZh ? '止盈：追踪止盈，或使用风险回报比2:1或3:1' : 'Target: trailing stop, or use 2:1 or 3:1 risk-reward ratio'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '策略3：布林带挤压策略（低波动后爆发）' : 'Strategy 3: Bollinger Squeeze Strategy (Breakout After Low Volatility)'}
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>{isZh ? '原理：' : 'Principle:'}</strong>{' '}
                {isZh
                  ? '当布林带收窄至极低水平（带宽处于历史低位），表明市场波动性极低，通常预示即将出现大行情（突破或崩溃）。这种"挤压"后必有释放，但方向需等待确认。'
                  : 'When Bollinger Bands narrow to extremely low level (bandwidth at historical lows), indicates extremely low market volatility, typically precedes significant move (breakout or breakdown). After "squeeze" comes release, but direction needs confirmation.'}
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800">
                <p className="font-bold mb-2">{isZh ? '挤压识别与入场：' : 'Squeeze Identification and Entry:'}</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>{isZh ? '带宽收窄至近期最低水平（可用带宽指标量化）' : 'Bandwidth narrows to recent lowest level (can quantify with bandwidth indicator)'}</li>
                  <li>{isZh ? '价格在窄幅区间内震荡，上下轨几乎平行' : 'Price oscillating in narrow range, upper and lower bands nearly parallel'}</li>
                  <li>{isZh ? '等待价格突破上轨（做多）或跌破下轨（做空）' : 'Wait for price to break above upper band (long) or below lower band (short)'}</li>
                  <li>{isZh ? '突破必须伴随带宽扩张和收盘价确认' : 'Breakout must be accompanied by bandwidth expansion and close confirmation'}</li>
                  <li>{isZh ? '入场：突破K线收盘后，或回测突破点时' : 'Entry: after breakout candle closes, or on retest of breakout point'}</li>
                  <li>{isZh ? '止损：挤压区间的相反边界（上轨突破止损设在下轨）' : 'Stop: opposite boundary of squeeze range (upper breakout stop at lower band)'}</li>
                  <li>{isZh ? '止盈：测算移动距离=挤压区间高度的2-3倍' : 'Target: projected move = 2-3x squeeze range height'}</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-600 mt-3">
                <p className="font-bold mb-2 text-black dark:text-white">
                  {isZh ? '⚠️ 风险提示：' : '⚠️ Risk Warning:'}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {isZh
                    ? '挤压后的假突破很常见！价格可能先向一个方向突破，然后迅速反转向相反方向大幅移动。务必等待收盘价确认，并设置合理止损。建议配合其他指标（如MACD、RSI）确认方向。'
                    : 'False breakouts after squeeze are common! Price may break one direction first, then quickly reverse for significant move opposite direction. Must wait for close confirmation and set reasonable stop. Recommend combining with other indicators (MACD, RSI) to confirm direction.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Advanced Techniques */}
      <section id="advanced-techniques" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '进阶技巧与组合应用' : 'Advanced Techniques and Combinations'}
        </h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <div className="p-6 border-2 border-black dark:border-white">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? '双布林带策略（Multi-Bollinger Bands）' : 'Multi-Bollinger Bands Strategy'}
            </h3>
            <p className="mb-3">
              {isZh
                ? '同时使用两组布林带，例如(20, 1)和(20, 2)，或(20, 2)和(20, 3)。内层带用于识别小幅波动，外层带用于识别极端波动。'
                : 'Use two sets of Bollinger Bands simultaneously, e.g., (20, 1) and (20, 2), or (20, 2) and (20, 3). Inner bands identify minor fluctuations, outer bands identify extreme moves.'}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong>{isZh ? '应用1：' : 'Application 1:'}</strong>{' '}
                {isZh
                  ? '价格在内外层带之间运行=正常波动；触及外层带=极端超买超卖，反转概率高'
                  : 'Price between inner/outer bands = normal fluctuation; touching outer bands = extreme overbought/oversold, high reversal probability'}
              </li>
              <li>
                <strong>{isZh ? '应用2：' : 'Application 2:'}</strong>{' '}
                {isZh
                  ? '突破外层带=强趋势；回测内层带=加仓点'
                  : 'Breaking outer band = strong trend; retesting inner band = add-on point'}
              </li>
              <li>
                <strong>{isZh ? '应用3：' : 'Application 3:'}</strong>{' '}
                {isZh
                  ? '内外层带同时收窄=超级挤压，爆发力更强'
                  : 'Both inner/outer bands narrowing = super squeeze, stronger explosive potential'}
              </li>
            </ul>
          </div>

          <div className="p-6 border-2 border-black dark:border-white">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? '布林带 + RSI组合' : 'Bollinger Bands + RSI Combination'}
            </h3>
            <p className="mb-3">
              {isZh
                ? '布林带显示价格相对位置，RSI显示动能强度。两者结合可大幅提高信号质量。'
                : 'BB shows relative price position, RSI shows momentum strength. Combining both significantly improves signal quality.'}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong>{isZh ? '超买确认：' : 'Overbought confirmation:'}</strong>{' '}
                {isZh
                  ? '价格触及布林带上轨 + RSI>70 = 强做空信号（震荡市）'
                  : 'Price at BB upper band + RSI>70 = strong short signal (ranging market)'}
              </li>
              <li>
                <strong>{isZh ? '超卖确认：' : 'Oversold confirmation:'}</strong>{' '}
                {isZh
                  ? '价格触及布林带下轨 + RSI<30 = 强做多信号（震荡市）'
                  : 'Price at BB lower band + RSI<30 = strong long signal (ranging market)'}
              </li>
              <li>
                <strong>{isZh ? '背离识别：' : 'Divergence identification:'}</strong>{' '}
                {isZh
                  ? '价格创新高触及上轨，但RSI未创新高 = 顶背离，强反转信号'
                  : 'Price new high touching upper band, but RSI not new high = bearish divergence, strong reversal'}
              </li>
              <li>
                <strong>{isZh ? '假信号过滤：' : 'False signal filter:'}</strong>{' '}
                {isZh
                  ? '价格触及下轨但RSI未超卖 = 可能假突破，谨慎做多'
                  : 'Price at lower band but RSI not oversold = possible false breakout, cautious long'}
              </li>
            </ul>
          </div>

          <div className="p-6 border-2 border-black dark:border-white">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? '布林带%B指标（%B Indicator）' : 'Bollinger %B Indicator'}
            </h3>
            <p className="mb-3">
              {isZh
                ? '%B = (价格 - 下轨) / (上轨 - 下轨)，量化价格在布林带中的相对位置。'
                : '%B = (Price - Lower Band) / (Upper Band - Lower Band), quantifies price relative position within bands.'}
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li>
                <strong>%B = 1：</strong>{' '}
                {isZh ? '价格位于上轨' : 'Price at upper band'}
              </li>
              <li>
                <strong>%B = 0：</strong>{' '}
                {isZh ? '价格位于下轨' : 'Price at lower band'}
              </li>
              <li>
                <strong>%B = 0.5：</strong>{' '}
                {isZh ? '价格位于中轨' : 'Price at middle band'}
              </li>
              <li>
                <strong>%B &gt; 1：</strong>{' '}
                {isZh ? '价格在上轨上方，强上升趋势' : 'Price above upper band, strong uptrend'}
              </li>
              <li>
                <strong>%B &lt; 0：</strong>{' '}
                {isZh ? '价格在下轨下方，强下降趋势' : 'Price below lower band, strong downtrend'}
              </li>
            </ul>
            <p className="mt-3 text-sm">
              <strong>{isZh ? '实战应用：' : 'Practical application:'}</strong>{' '}
              {isZh
                ? '%B可用于量化超买超卖程度，制定更精确的入场出场规则。例如：%B<0.2做多，%B>0.8做空（震荡市）。'
                : '%B can quantify overbought/oversold levels, create more precise entry/exit rules. Example: %B<0.2 long, %B>0.8 short (ranging market).'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-black dark:border-white">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? '布林带 + 支撑阻力' : 'Bollinger Bands + Support/Resistance'}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>{isZh ? '关键支撑位 + 布林带下轨 = 双重支撑，强反弹点' : 'Key support + BB lower band = double support, strong bounce point'}</li>
                <li>{isZh ? '关键阻力位 + 布林带上轨 = 双重阻力，强回落点' : 'Key resistance + BB upper band = double resistance, strong pullback point'}</li>
                <li>{isZh ? '突破阻力 + 布林带扩张 = 有效突破确认' : 'Break resistance + BB expansion = valid breakout confirmation'}</li>
              </ul>
            </div>

            <div className="p-6 border-2 border-black dark:border-white">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? '布林带 + MACD' : 'Bollinger Bands + MACD'}
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>{isZh ? '布林带识别价格位置，MACD确认趋势动能' : 'BB identifies price position, MACD confirms trend momentum'}</li>
                <li>{isZh ? '价格触及上轨 + MACD死叉 = 强做空' : 'Price at upper band + MACD death cross = strong short'}</li>
                <li>{isZh ? '价格触及下轨 + MACD金叉 = 强做多' : 'Price at lower band + MACD golden cross = strong long'}</li>
                <li>{isZh ? '布林带挤压 + MACD柱状图扩大 = 突破方向确认' : 'BB squeeze + MACD histogram expansion = breakout direction confirmation'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Common Mistakes */}
      <section id="common-mistakes" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '常见错误与规避方法' : 'Common Mistakes and Solutions'}
        </h2>
        <div className="space-y-6">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-600">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              ❌ {isZh ? '错误1：在趋势市中逆势交易' : 'Mistake 1: Counter-Trend Trading in Trending Markets'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '在明确的上升趋势中，看到价格触及上轨就做空；或在下降趋势中，看到价格触及下轨就做多。忽视了"沿轨运行"现象。'
                : 'In clear uptrend, shorting when price touches upper band; or in downtrend, going long when price touches lower band. Ignoring "walking the bands" phenomenon.'}
            </p>
            <p className="text-green-600 dark:text-green-400 font-bold">
              ✅ {isZh ? '正确做法：' : 'Solution:'}{' '}
              {isZh
                ? '首先判断市场环境（趋势市 vs 震荡市）。在趋势市中，布林带是动态支撑阻力，不是反转信号。上升趋势只做多（回调至中轨或下轨时买入），下降趋势只做空（反弹至中轨或上轨时卖出）。'
                : 'First determine market environment (trending vs ranging). In trending markets, BB is dynamic support/resistance, not reversal signal. In uptrend only long (buy on pullback to middle/lower band), in downtrend only short (sell on bounce to middle/upper band).'}
            </p>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-600">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              ❌ {isZh ? '错误2：挤压后立即入场，不等突破确认' : 'Mistake 2: Entering Immediately After Squeeze Without Breakout Confirmation'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '看到布林带挤压后就提前入场，试图"猜测"突破方向，结果遭遇假突破或双向止损。'
                : 'Entering early after seeing BB squeeze, trying to "guess" breakout direction, resulting in false breakouts or getting stopped both ways.'}
            </p>
            <p className="text-green-600 dark:text-green-400 font-bold">
              ✅ {isZh ? '正确做法：' : 'Solution:'}{' '}
              {isZh
                ? '挤压只是预警信号，不是入场信号。必须等待价格突破上轨或下轨，并且收盘价确认突破（避免"假突破"），再结合带宽扩张和其他指标（如MACD、成交量）确认后入场。耐心等待，不要急于进场。'
                : 'Squeeze is only warning signal, not entry signal. Must wait for price to break above upper or below lower band, close confirms breakout (avoid "false breakout"), combine with bandwidth expansion and other indicators (MACD, volume) before entry. Be patient, don\'t rush.'}
            </p>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-600">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              ❌ {isZh ? '错误3：忽视布林带带宽变化' : 'Mistake 3: Ignoring Bollinger Bandwidth Changes'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '只关注价格与上下轨的关系，忽视带宽的扩张和收缩，错过重要的波动性信息。'
                : 'Only focusing on price relationship with bands, ignoring bandwidth expansion and contraction, missing important volatility information.'}
            </p>
            <p className="text-green-600 dark:text-green-400 font-bold">
              ✅ {isZh ? '正确做法：' : 'Solution:'}{' '}
              {isZh
                ? '带宽是布林带的"第四条线"，非常重要。带宽扩张=趋势加速，应顺势持仓；带宽收缩=波动性降低，应谨慎交易或等待挤压突破。可使用布林带宽度指标（Bollinger Bandwidth）量化监控，或在图表上观察上下轨的距离变化。'
                : 'Bandwidth is BB\'s "fourth line", very important. Bandwidth expansion = trend acceleration, hold positions with trend; bandwidth contraction = volatility decreasing, trade cautiously or wait for squeeze breakout. Can use Bollinger Bandwidth indicator for quantified monitoring, or observe band distance changes on chart.'}
            </p>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-600">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              ❌ {isZh ? '错误4：单独使用布林带，不结合其他工具' : 'Mistake 4: Using BB Alone Without Other Tools'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '认为布林带足够强大，不需要其他指标或工具，导致频繁遭遇假信号和亏损。'
                : 'Believing BB is powerful enough alone, not needing other indicators or tools, leading to frequent false signals and losses.'}
            </p>
            <p className="text-green-600 dark:text-green-400 font-bold">
              ✅ {isZh ? '正确做法：' : 'Solution:'}{' '}
              {isZh
                ? '布林带应作为完整交易系统的一部分，而非唯一依据。建议组合使用：1) BB + RSI（确认超买超卖）；2) BB + MACD（确认趋势和动能）；3) BB + 支撑阻力（识别关键位置）；4) BB + K线形态（确认反转信号）。多重确认可显著提高胜率和盈利稳定性。'
                : 'BB should be part of complete trading system, not sole basis. Recommend combinations: 1) BB + RSI (confirm overbought/oversold); 2) BB + MACD (confirm trend and momentum); 3) BB + S/R (identify key levels); 4) BB + candlestick patterns (confirm reversal signals). Multiple confirmations significantly improve win rate and profit stability.'}
            </p>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-600">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              ❌ {isZh ? '错误5：参数过度优化（曲线拟合）' : 'Mistake 5: Over-Optimizing Parameters (Curve Fitting)'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '不断调整布林带参数，试图找到"完美"设置，在历史数据上回测效果极好，但实盘交易时完全失效。'
                : 'Constantly adjusting BB parameters, trying to find "perfect" setting, excellent backtest results on historical data, but completely fails in live trading.'}
            </p>
            <p className="text-green-600 dark:text-green-400 font-bold">
              ✅ {isZh ? '正确做法：' : 'Solution:'}{' '}
              {isZh
                ? '避免过度优化。标准参数(20, 2)经过数十年验证，适用于大多数情况。如需调整，只做小幅修改（如2.0→2.5），并在足够长的时间范围（至少1-2年）和不同市场环境下回测验证。记住：更好的策略来自于如何使用指标，而非调整参数。'
                : 'Avoid over-optimization. Standard (20, 2) validated over decades, suitable for most situations. If adjustments needed, only make minor changes (e.g., 2.0→2.5), backtest over sufficient timeframe (at least 1-2 years) and different market conditions. Remember: better strategies come from how you use indicators, not parameter tweaking.'}
            </p>
          </div>
        </div>
      </section>
    </EducationPageTemplate>
  );
}
