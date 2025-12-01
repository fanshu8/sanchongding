import { getLanguageFromLocale, generateBilingualMetadata } from '@/lib/getServerLanguage';
import { emaMovingAveragesContent } from '@/content/education/ema-moving-averages.content';
import EducationPageTemplate from '@/components/education/EducationPageTemplate';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);

  return generateBilingualMetadata(
    emaMovingAveragesContent.zh.title,
    emaMovingAveragesContent.en.title,
    emaMovingAveragesContent.zh.description,
    emaMovingAveragesContent.en.description,
    emaMovingAveragesContent.zh.keywords,
    emaMovingAveragesContent.en.keywords,
    lang
  );
}

export default async function EMAMovingAveragesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);
  const content = emaMovingAveragesContent[lang];
  const isZh = lang === 'zh';

  return (
    <EducationPageTemplate content={content} language={lang}>
      {/* Section 1: What is EMA */}
      <section id="what-is-ema" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '什么是EMA？' : 'What is EMA?'}
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            {isZh
              ? 'EMA（Exponential Moving Average，指数移动平均线）是一种给予近期价格更大权重的移动平均线。与简单移动平均线（SMA）相比，EMA对最新价格变化更加敏感，能更快地反映市场趋势的变化，因此成为外汇和股票交易中最受欢迎的技术指标之一。'
              : 'EMA (Exponential Moving Average) is a moving average that gives greater weight to recent prices. Compared to Simple Moving Average (SMA), EMA is more sensitive to latest price changes, reflects market trend changes faster, making it one of the most popular technical indicators in cryptocurrency and stock trading.'}
          </p>

          <div className="p-6 bg-black dark:bg-white text-white dark:text-black">
            <h3 className="text-xl font-bold mb-4">{isZh ? 'EMA的核心特点' : 'EMA Core Features'}</h3>
            <ul className="space-y-2">
              <li>
                <strong>{isZh ? '指数加权：' : 'Exponential weighting:'}</strong>{' '}
                {isZh
                  ? '最新价格权重最大，权重随时间指数递减'
                  : 'Latest prices have greatest weight, weight decays exponentially over time'}
              </li>
              <li>
                <strong>{isZh ? '反应迅速：' : 'Quick response:'}</strong>{' '}
                {isZh
                  ? '比SMA更快捕捉趋势转折点'
                  : 'Captures trend turning points faster than SMA'}
              </li>
              <li>
                <strong>{isZh ? '趋势跟踪：' : 'Trend following:'}</strong>{' '}
                {isZh
                  ? '优秀的动态支撑阻力位'
                  : 'Excellent dynamic support/resistance levels'}
              </li>
              <li>
                <strong>{isZh ? '广泛应用：' : 'Wide application:'}</strong>{' '}
                {isZh
                  ? '是MACD、布林带等众多指标的计算基础'
                  : 'Foundation for many indicators like MACD, Bollinger Bands'}
              </li>
            </ul>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? 'EMA的主要用途' : 'EMA Main Applications'}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>{isZh ? '趋势识别：' : 'Trend identification:'}</strong>{' '}
                {isZh ? '价格在EMA上方=上升趋势，下方=下降趋势' : 'Price above EMA = uptrend, below = downtrend'}
              </li>
              <li>
                <strong>{isZh ? '交叉信号：' : 'Crossover signals:'}</strong>{' '}
                {isZh ? '快速EMA穿越慢速EMA产生买卖信号' : 'Fast EMA crossing slow EMA generates buy/sell signals'}
              </li>
              <li>
                <strong>{isZh ? '动态支撑阻力：' : 'Dynamic support/resistance:'}</strong>{' '}
                {isZh ? 'EMA作为价格回调的支撑或反弹的阻力' : 'EMA acts as support on pullbacks or resistance on bounces'}
              </li>
              <li>
                <strong>{isZh ? '止损设置：' : 'Stop loss placement:'}</strong>{' '}
                {isZh ? '根据EMA位置设置动态止损' : 'Set dynamic stops based on EMA position'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 2: EMA vs SMA */}
      <section id="ema-vs-sma" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? 'EMA与SMA的区别' : 'EMA vs SMA Differences'}
        </h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            {isZh
              ? '理解EMA和SMA的区别对选择合适的均线至关重要：'
              : 'Understanding EMA vs SMA differences is crucial for choosing the right moving average:'}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-2 border-black dark:border-white">
              <thead>
                <tr className="bg-black dark:bg-white text-white dark:text-black">
                  <th className="border-2 border-black dark:border-white p-3 text-left">
                    {isZh ? '特征' : 'Feature'}
                  </th>
                  <th className="border-2 border-black dark:border-white p-3 text-left">
                    {isZh ? 'EMA（指数移动平均）' : 'EMA (Exponential)'}
                  </th>
                  <th className="border-2 border-black dark:border-white p-3 text-left">
                    {isZh ? 'SMA（简单移动平均）' : 'SMA (Simple)'}
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300">
                <tr>
                  <td className="border-2 border-black dark:border-white p-3 font-bold">
                    {isZh ? '计算方法' : 'Calculation'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '指数加权，近期价格权重大' : 'Exponentially weighted, recent prices weighted more'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '简单平均，所有价格权重相同' : 'Simple average, all prices weighted equally'}
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border-2 border-black dark:border-white p-3 font-bold">
                    {isZh ? '敏感度' : 'Sensitivity'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '高 - 快速反应价格变化' : 'High - quick to react to price changes'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '低 - 反应较慢但更平滑' : 'Low - slower to react but smoother'}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-black dark:border-white p-3 font-bold">
                    {isZh ? '信号速度' : 'Signal Speed'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '更快，早期捕捉趋势' : 'Faster, catches trends earlier'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '较慢，确认性更强' : 'Slower, stronger confirmation'}
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border-2 border-black dark:border-white p-3 font-bold">
                    {isZh ? '假信号' : 'False Signals'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '相对较多' : 'Relatively more'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '相对较少' : 'Relatively fewer'}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-black dark:border-white p-3 font-bold">
                    {isZh ? '最佳应用' : 'Best Application'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '短线交易、趋势跟踪' : 'Short-term trading, trend following'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '长线交易、整体趋势判断' : 'Long-term trading, overall trend judgment'}
                  </td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="border-2 border-black dark:border-white p-3 font-bold">
                    {isZh ? '数字货三重交易' : 'Cryptocurrency Trading'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '更受欢迎，适合快速市场' : 'More popular, suits fast markets'}
                  </td>
                  <td className="border-2 border-black dark:border-white p-3">
                    {isZh ? '用于长期趋势判断' : 'Used for long-term trend judgment'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-black dark:bg-white text-white dark:text-black">
            <h3 className="text-xl font-bold mb-4">{isZh ? '形象对比' : 'Visual Comparison'}</h3>
            <p className="mb-3">
              {isZh
                ? '想象一辆汽车跟随路线行驶：'
                : 'Imagine a car following a route:'}
            </p>
            <ul className="space-y-2">
              <li>
                <strong>EMA</strong> = {isZh ? '运动型跑车，反应灵敏，快速转向，但可能过度反应小颠簸' : 'Sports car, responsive, quick turns, but may overreact to small bumps'}
              </li>
              <li>
                <strong>SMA</strong> = {isZh ? '豪华轿车，行驶平稳，转向平缓，不受小波动影响' : 'Luxury sedan, smooth ride, gentle turns, unaffected by small fluctuations'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: Calculation */}
      <section id="calculation" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? 'EMA的计算与参数设置' : 'EMA Calculation and Parameter Settings'}
        </h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          <div className="p-6 bg-black dark:bg-white text-white dark:text-black">
            <h3 className="text-xl font-bold mb-4">{isZh ? '计算公式' : 'Calculation Formula'}</h3>
            <div className="space-y-3 font-mono text-sm">
              <p>
                <strong>{isZh ? '1. 计算平滑因子（乘数）：' : '1. Calculate Smoothing Factor (Multiplier):'}</strong>
              </p>
              <p className="pl-4">
                {isZh ? '乘数 = 2 ÷ (周期 + 1)' : 'Multiplier = 2 ÷ (Period + 1)'}
              </p>
              <p className="pl-4 text-white/60 dark:text-black/60">
                {isZh ? '例如：20周期EMA的乘数 = 2 ÷ 21 = 0.0952' : 'Example: 20-period EMA multiplier = 2 ÷ 21 = 0.0952'}
              </p>
              <p className="mt-3">
                <strong>{isZh ? '2. 计算当前EMA：' : '2. Calculate Current EMA:'}</strong>
              </p>
              <p className="pl-4">
                {isZh ? 'EMA今 = (收盘价今 - EMA昨) × 乘数 + EMA昨' : 'EMA_current = (Close_current - EMA_previous) × Multiplier + EMA_previous'}
              </p>
              <p className="mt-3">
                <strong>{isZh ? '或简化为：' : 'Or simplified as:'}</strong>
              </p>
              <p className="pl-4">
                {isZh ? 'EMA今 = 收盘价今 × 乘数 + EMA昨 × (1 - 乘数)' : 'EMA_current = Close_current × Multiplier + EMA_previous × (1 - Multiplier)'}
              </p>
              <p className="mt-3 text-white/80 dark:text-black/80">
                {isZh
                  ? '💡 这个公式显示EMA给予当前价格约9.52%的权重，过去EMA约90.48%的权重'
                  : '💡 This formula shows EMA gives current price ~9.52% weight, past EMA ~90.48% weight'}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 border-2 border-black dark:border-white">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? '8 EMA' : '8 EMA'}
              </h3>
              <p className="mb-2 text-sm">
                {isZh ? '超短期趋势' : 'Ultra-short trend'}
              </p>
              <p className="text-sm">
                {isZh
                  ? '适合5分钟/15分钟图，日内交易快速入场信号'
                  : 'Suitable for 5min/15min charts, intraday quick entry signals'}
              </p>
            </div>

            <div className="p-6 border-2 border-black dark:border-white">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? '21 EMA' : '21 EMA'}
              </h3>
              <p className="mb-2 text-sm">
                {isZh ? '短期趋势' : 'Short-term trend'}
              </p>
              <p className="text-sm">
                {isZh
                  ? '最常用周期，适合1小时/4小时图，日内和波段交易核心'
                  : 'Most common period, suitable for 1H/4H charts, intraday and swing trading core'}
              </p>
            </div>

            <div className="p-6 border-2 border-black dark:border-white">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? '55 EMA' : '55 EMA'}
              </h3>
              <p className="mb-2 text-sm">
                {isZh ? '中期趋势' : 'Medium-term trend'}
              </p>
              <p className="text-sm">
                {isZh
                  ? '适合4小时/日线图，波段交易重要参考，强支撑阻力位'
                  : 'Suitable for 4H/daily charts, swing trading reference, strong S/R level'}
              </p>
            </div>

            <div className="p-6 border-2 border-black dark:border-white">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? '200 EMA' : '200 EMA'}
              </h3>
              <p className="mb-2 text-sm">
                {isZh ? '长期趋势' : 'Long-term trend'}
              </p>
              <p className="text-sm">
                {isZh
                  ? '适合日线/周线图，牛熊分水岭，全球交易员最关注的均线'
                  : 'Suitable for daily/weekly charts, bull/bear dividing line, most watched MA globally'}
              </p>
            </div>
          </div>

          <div className="p-6 bg-gray-100 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              {isZh ? '💡 经典EMA组合' : '💡 Classic EMA Combinations'}
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>{isZh ? '8/21交叉系统：' : '8/21 Crossover System:'}</strong>{' '}
                {isZh ? '短线交易，信号快速但需严格止损' : 'Short-term trading, fast signals but need strict stops'}
              </li>
              <li>
                <strong>{isZh ? '21/55交叉系统：' : '21/55 Crossover System:'}</strong>{' '}
                {isZh ? '波段交易，平衡性最佳，推荐新手使用' : 'Swing trading, best balance, recommended for beginners'}
              </li>
              <li>
                <strong>{isZh ? '50/100/200三均线系统：' : '50/100/200 Triple MA System:'}</strong>{' '}
                {isZh ? '趋势判断，多头排列=强上升趋势' : 'Trend judgment, bullish alignment = strong uptrend'}
              </li>
              <li>
                <strong>{isZh ? '单一200EMA：' : 'Single 200EMA:'}</strong>{' '}
                {isZh ? '简单有效，价格在上方=做多市场' : 'Simple effective, price above = long market'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4: Trading Strategies */}
      <section id="trading-strategies" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '经典EMA交易策略' : 'Classic EMA Trading Strategies'}
        </h2>
        <div className="space-y-6">
          <div className="p-6 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '策略1：EMA交叉系统（金叉死叉）' : 'Strategy 1: EMA Crossover System (Golden/Death Cross)'}
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>{isZh ? '原理：' : 'Principle:'}</strong>{' '}
                {isZh
                  ? '快速EMA向上穿越慢速EMA形成金叉，产生买入信号；向下穿越形成死叉，产生卖出信号。'
                  : 'Fast EMA crossing above slow EMA forms golden cross, buy signal; crossing below forms death cross, sell signal.'}
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800">
                <p className="font-bold mb-2">{isZh ? '21/55 EMA交叉（推荐）：' : '21/55 EMA Crossover (Recommended):'}</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    <strong>{isZh ? '金叉做多：' : 'Golden Cross Long:'}</strong>{' '}
                    {isZh ? '21EMA向上穿越55EMA' : '21EMA crosses above 55EMA'}
                  </li>
                  <li>{isZh ? '确认：收盘价在两条均线上方' : 'Confirm: Close above both EMAs'}</li>
                  <li>{isZh ? '入场：下一根K线开盘或回调至21EMA' : 'Entry: Next candle open or pullback to 21EMA'}</li>
                  <li>{isZh ? '止损：55EMA下方20-30点' : 'Stop: 20-30 pips below 55EMA'}</li>
                  <li>{isZh ? '止盈：风险回报比1:2-1:3' : 'Target: Risk-reward ratio 1:2-1:3'}</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 mt-3">
                <p className="font-bold mb-2">{isZh ? '死叉做空：' : 'Death Cross Short:'}</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>{isZh ? '21EMA向下穿越55EMA' : '21EMA crosses below 55EMA'}</li>
                  <li>{isZh ? '确认：收盘价在两条均线下方' : 'Confirm: Close below both EMAs'}</li>
                  <li>{isZh ? '入场：下一根K线开盘或反弹至21EMA' : 'Entry: Next candle open or bounce to 21EMA'}</li>
                  <li>{isZh ? '止损：55EMA上方20-30点' : 'Stop: 20-30 pips above 55EMA'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '策略2：EMA动态支撑阻力交易' : 'Strategy 2: EMA Dynamic Support/Resistance Trading'}
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>{isZh ? '原理：' : 'Principle:'}</strong>{' '}
                {isZh
                  ? '在强趋势中，价格回调至关键EMA时往往反弹，这是低风险的加仓或入场机会。'
                  : 'In strong trends, price pullbacks to key EMA often bounce, providing low-risk add-on or entry opportunities.'}
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800">
                <p className="font-bold mb-2">{isZh ? '上升趋势EMA回调买入：' : 'Uptrend EMA Pullback Buy:'}</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>{isZh ? '确认上升趋势：价格持续在21EMA和55EMA上方' : 'Confirm uptrend: Price consistently above 21EMA and 55EMA'}</li>
                  <li>{isZh ? '等待回调：价格回落触及21EMA或55EMA' : 'Wait for pullback: Price retreats to 21EMA or 55EMA'}</li>
                  <li>{isZh ? '观察反应：在EMA处出现看涨K线形态（如Pin Bar）' : 'Observe reaction: Bullish pattern at EMA (e.g., Pin Bar)'}</li>
                  <li>{isZh ? '入场：K线收盘确认反弹后' : 'Entry: After candle close confirms bounce'}</li>
                  <li>{isZh ? '止损：EMA下方10-20点' : 'Stop: 10-20 pips below EMA'}</li>
                  <li>{isZh ? '止盈：前高或新高' : 'Target: Previous high or new high'}</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 mt-3">
                <p className="font-bold mb-2">{isZh ? '⚠️ 注意事项：' : '⚠️ Important Notes:'}</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>{isZh ? '只在明确趋势中使用此策略' : 'Only use this strategy in clear trends'}</li>
                  <li>{isZh ? '如果价格跌破关键EMA，立即止损' : 'If price breaks key EMA, stop out immediately'}</li>
                  <li>{isZh ? '首次触及EMA往往反弹，二次测试突破概率增加' : 'First EMA touch often bounces, second test has higher breakout probability'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '策略3：200EMA牛熊分界线策略' : 'Strategy 3: 200EMA Bull/Bear Dividing Line Strategy'}
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                <strong>{isZh ? '原理：' : 'Principle:'}</strong>{' '}
                {isZh
                  ? '200EMA是全球交易员最关注的均线，价格与200EMA的关系决定了市场的长期趋势方向。'
                  : '200EMA is the most watched MA globally, price relationship with 200EMA determines long-term market trend direction.'}
              </p>
              <div className="p-4 bg-gray-50 dark:bg-gray-800">
                <p className="font-bold mb-2">{isZh ? '使用规则：' : 'Usage Rules:'}</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>
                    <strong>{isZh ? '价格在200EMA上方：' : 'Price above 200EMA:'}</strong>{' '}
                    {isZh ? '牛市环境，优先考虑做多，只做金叉多单' : 'Bull market, prioritize longs, only long on golden cross'}
                  </li>
                  <li>
                    <strong>{isZh ? '价格在200EMA下方：' : 'Price below 200EMA:'}</strong>{' '}
                    {isZh ? '熊市环境，优先考虑做空，只做死叉空单' : 'Bear market, prioritize shorts, only short on death cross'}
                  </li>
                  <li>
                    <strong>{isZh ? '触及200EMA：' : 'Touching 200EMA:'}</strong>{' '}
                    {isZh ? '强支撑/阻力位，首次触及往往反弹/回落' : 'Strong S/R level, first touch often bounces/retraces'}
                  </li>
                  <li>
                    <strong>{isZh ? '突破200EMA：' : 'Breaking 200EMA:'}</strong>{' '}
                    {isZh ? '重大趋势转变信号，等待回测确认后入场' : 'Major trend change signal, wait for retest confirmation'}
                  </li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-800 mt-3">
                <p className="font-bold mb-2">{isZh ? '实战技巧：' : 'Practical Tips:'}</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>{isZh ? '日线和周线200EMA同时支撑/阻力 = 极强位置' : 'Daily and weekly 200EMA both supporting/resisting = extremely strong level'}</li>
                  <li>{isZh ? '价格远离200EMA时要谨慎追单，可能回归' : 'When price far from 200EMA, cautious chasing, may revert'}</li>
                  <li>{isZh ? '200EMA斜率：向上倾斜=上升趋势，向下倾斜=下降趋势' : '200EMA slope: upward = uptrend, downward = downtrend'}</li>
                </ul>
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
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-black dark:border-white">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? 'EMA + 价格行为' : 'EMA + Price Action'}
              </h3>
              <p className="mb-3 text-sm">
                {isZh
                  ? 'EMA配合K线形态，提高信号质量：'
                  : 'EMA with candlestick patterns improves signal quality:'}
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>{isZh ? '21EMA处的Pin Bar = 强反转信号' : 'Pin Bar at 21EMA = strong reversal'}</li>
                <li>{isZh ? '55EMA处的看涨吞没 = 趋势延续确认' : 'Bullish engulfing at 55EMA = trend continuation confirmation'}</li>
                <li>{isZh ? 'EMA金叉 + 突破关键阻力 = 最强入场点' : 'EMA golden cross + break key resistance = strongest entry'}</li>
              </ul>
            </div>

            <div className="p-6 border-2 border-black dark:border-white">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? 'EMA + MACD' : 'EMA + MACD'}
              </h3>
              <p className="mb-3 text-sm">
                {isZh
                  ? 'MACD基于EMA计算，两者天然配合：'
                  : 'MACD calculated from EMA, naturally compatible:'}
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>{isZh ? 'EMA金叉 + MACD金叉 = 双重确认做多' : 'EMA golden cross + MACD golden cross = double confirmation long'}</li>
                <li>{isZh ? '价格在200EMA上 + MACD零轴上金叉 = 最强趋势' : 'Price above 200EMA + MACD golden cross above zero = strongest trend'}</li>
                <li>{isZh ? 'EMA背离 + MACD背离 = 极强反转警告' : 'EMA divergence + MACD divergence = extremely strong reversal warning'}</li>
              </ul>
            </div>

            <div className="p-6 border-2 border-black dark:border-white">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? 'EMA动态止损' : 'EMA Dynamic Stop Loss'}
              </h3>
              <p className="mb-3 text-sm">
                {isZh
                  ? '使用EMA跟踪止损，锁定利润：'
                  : 'Use EMA trailing stops to lock in profits:'}
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>{isZh ? '做多时：止损随21EMA上移' : 'In longs: Stop trails below 21EMA'}</li>
                <li>{isZh ? '波段持仓：使用55EMA或200EMA' : 'Swing positions: Use 55EMA or 200EMA'}</li>
                <li>{isZh ? '收盘价跌破EMA才止损，避免短期波动' : 'Only stop on close below EMA, avoid short-term noise'}</li>
              </ul>
            </div>

            <div className="p-6 border-2 border-black dark:border-white">
              <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
                {isZh ? '多周期EMA分析' : 'Multi-Timeframe EMA Analysis'}
              </h3>
              <p className="mb-3 text-sm">
                {isZh
                  ? '自上而下分析，提高成功率：'
                  : 'Top-down analysis improves success rate:'}
              </p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>{isZh ? '日线：200EMA确定整体趋势方向' : 'Daily: 200EMA determines overall trend direction'}</li>
                <li>{isZh ? '4小时：21/55EMA寻找入场时机' : '4H: 21/55EMA finds entry timing'}</li>
                <li>{isZh ? '1小时：8/21EMA精确入场点' : '1H: 8/21EMA pinpoints entry'}</li>
                <li>{isZh ? '三个周期EMA均多头排列 = 最强趋势' : 'All three timeframes bullish alignment = strongest trend'}</li>
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
              ❌ {isZh ? '错误1：在震荡市中频繁交易EMA交叉' : 'Mistake 1: Overtrading EMA Crosses in Range Markets'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '市场横盘整理时，EMA反复交叉产生大量假信号，频繁进出导致亏损。'
                : 'During market consolidation, EMA repeatedly crosses generating many false signals, frequent trades lead to losses.'}
            </p>
            <p className="text-green-600 dark:text-green-400 font-bold">
              ✅ {isZh ? '正确做法：' : 'Solution:'}{' '}
              {isZh
                ? '识别市场环境。EMA缠绕、横向移动=震荡市，暂停EMA交叉策略，改用支撑阻力或其他策略。'
                : 'Identify market environment. EMAs tangled, moving sideways = range market, pause crossover strategy, use S/R or other strategies.'}
            </p>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-600">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              ❌ {isZh ? '错误2：使用过多EMA' : 'Mistake 2: Using Too Many EMAs'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '图表上添加5-6条甚至更多EMA，导致图表混乱，分析瘫痪。'
                : 'Adding 5-6 or more EMAs to chart, causing chart clutter and analysis paralysis.'}
            </p>
            <p className="text-green-600 dark:text-green-400 font-bold">
              ✅ {isZh ? '正确做法：' : 'Solution:'}{' '}
              {isZh
                ? '保持简洁。2-3条EMA足够（如21/55或50/200）。记住：Less is more，简单系统更易执行。'
                : 'Keep it simple. 2-3 EMAs sufficient (e.g., 21/55 or 50/200). Remember: Less is more, simple systems easier to execute.'}
            </p>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-600">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              ❌ {isZh ? '错误3：逆势交易EMA交叉' : 'Mistake 3: Counter-Trend Trading EMA Crosses'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '在强下降趋势中看到短期EMA金叉就做多，不考虑大趋势方向。'
                : 'Going long on short-term EMA golden cross in strong downtrend, ignoring major trend direction.'}
            </p>
            <p className="text-green-600 dark:text-green-400 font-bold">
              ✅ {isZh ? '正确做法：' : 'Solution:'}{' '}
              {isZh
                ? '永远顺势而为。先看大周期200EMA确定趋势，只做顺势交易。上升趋势只做多，下降趋势只做空。'
                : 'Always trade with trend. Check larger timeframe 200EMA first, only trade with trend. Uptrend only long, downtrend only short.'}
            </p>
          </div>

          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-600">
            <h3 className="text-lg font-bold mb-3 text-black dark:text-white">
              ❌ {isZh ? '错误4：期待EMA提供完美入场点' : 'Mistake 4: Expecting EMA to Provide Perfect Entries'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {isZh
                ? '认为EMA交叉就是最佳入场点，不等待价格确认，经常买在假突破。'
                : 'Believing EMA cross is best entry without price confirmation, often buying false breakouts.'}
            </p>
            <p className="text-green-600 dark:text-green-400 font-bold">
              ✅ {isZh ? '正确做法：' : 'Solution:'}{' '}
              {isZh
                ? 'EMA是趋势指标，不是精确入场工具。等待价格确认（如收盘价、K线形态）后入场，或等待回调至EMA后反弹。'
                : 'EMA is trend indicator, not precise entry tool. Wait for price confirmation (close, patterns) before entry, or wait for pullback to EMA then bounce.'}
            </p>
          </div>
        </div>
      </section>
    </EducationPageTemplate>
  );
}
