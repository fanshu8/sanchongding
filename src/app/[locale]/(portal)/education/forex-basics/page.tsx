import { getLanguageFromLocale, generateBilingualMetadata } from '@/lib/getServerLanguage';
import { forexBasicsContent } from '@/content/education/forex-basics.content';
import EducationPageTemplate from '@/components/education/EducationPageTemplate';
import LocaleLink from '@/components/navigation/LocaleLink';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);

  return generateBilingualMetadata(
    forexBasicsContent.zh.title,
    forexBasicsContent.en.title,
    forexBasicsContent.zh.description,
    forexBasicsContent.en.description,
    forexBasicsContent.zh.keywords,
    forexBasicsContent.en.keywords,
    lang
  );
}

export default async function CryptoBasicsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);
  const content = forexBasicsContent[lang];
  const isZh = lang === 'zh';

  return (
    <EducationPageTemplate content={content} language={lang}>
      {/* Section 1: What is Cryptocurrency Trading */}
      <section id="what-is-cryptocurrency" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '什么是数字货币交易？' : 'What is Cryptocurrency Trading?'}
        </h2>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            <strong className="text-black dark:text-white">
              {isZh ? '数字货币交易（Cryptocurrency Trading）' : 'Cryptocurrency Trading'}
            </strong>
            {isZh
              ? '，是通过交易所买卖比特币、以太坊等加密资产，通过价格波动获取收益的投资方式。数字货币市场是全球规模最大、流动性最强、24小时不间断运作的金融市场。'
              : ' refers to buying and selling cryptocurrencies like Bitcoin and Ethereum on exchanges to profit from price fluctuations. The cryptocurrency market is the world\'s largest, most liquid, and operates 24/7 without interruption.'}
          </p>

          <div className="bg-black dark:bg-white text-white dark:text-black p-6 my-6 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4">
              {isZh ? '💡 核心概念' : '💡 Core Concept'}
            </h3>
            <p className="mb-0">
              {isZh
                ? '数字货币交易的本质是'
                : 'The essence of cryptocurrency trading is '}
              <strong>
                {isZh ? '交易对之间的价值交换' : 'value exchange between trading pairs'}
              </strong>
              {isZh
                ? '。例如，当你交易BTC/USDT时，你实际上是在用USDT买入比特币（做多），或卖出比特币换取USDT（做空）。价格的波动就是你的盈利来源。'
                : '. For example, when trading BTC/USDT, you are buying Bitcoin with USDT (going long), or selling Bitcoin for USDT (going short). Price fluctuations are your source of profit.'}
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-black dark:text-white">
            {isZh ? '数字货币市场的规模' : 'Scale of the Cryptocurrency Market'}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {isZh
              ? '根据CoinMarketCap数据，全球数字货币市场日均交易量超过'
              : 'According to CoinMarketCap, the global cryptocurrency market\'s average daily trading volume exceeds '}
            <strong className="text-black dark:text-white">
              {isZh ? '1000亿美元' : '$100 billion'}
            </strong>
            {isZh
              ? '，总市值超过2万亿美元。这种巨大的流动性意味着：'
              : ', with a total market cap exceeding $2 trillion. This enormous liquidity means:'}
          </p>

          <ul className="list-none space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-black dark:text-white font-bold">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                {isZh ? '订单执行速度快，几乎无滑点' : 'Fast order execution with minimal slippage'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-black dark:text-white font-bold">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                {isZh ? '买卖价差（手续费）极小，交易成本低' : 'Extremely tight bid-ask spreads, low trading costs'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-black dark:text-white font-bold">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                {isZh ? '24/7全天候交易，无周末休市' : '24/7 trading, no weekend closures'}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-black dark:text-white font-bold">✓</span>
              <span className="text-gray-700 dark:text-gray-300">
                {isZh ? '全球化市场，价格公正透明' : 'Global market with fair and transparent pricing'}
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2: How Crypto Trading Works */}
      <section id="how-it-works" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '数字货币交易如何运作？' : 'How Does Cryptocurrency Trading Work?'}
        </h2>

        <div className="space-y-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '1. 交易对机制' : '1. Trading Pair Mechanism'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isZh
                ? '数字货币交易始终以"交易对"形式进行，例如BTC/USDT、ETH/USDT等。交易对中，第一个币种是基础货币（Base Currency），第二个是报价货币（Quote Currency）。'
                : 'Cryptocurrency trading always occurs in "trading pairs" like BTC/USDT, ETH/USDT. In a trading pair, the first currency is the base currency, and the second is the quote currency.'}
            </p>

            <div className="bg-white dark:bg-gray-900 p-4 border-l-4 border-black dark:border-white">
              <p className="font-bold text-black dark:text-white mb-2">{isZh ? '示例：' : 'Example:'}</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                <strong>BTC/USDT = $95,000</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                {isZh
                  ? '• 做多（买入）：用95,000 USDT买入1 BTC，预期BTC价格上涨'
                  : '• Going Long (Buy): Use 95,000 USDT to buy 1 BTC, expecting BTC price to rise'}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {isZh
                  ? '• 做空（卖出）：卖出1 BTC获得95,000 USDT，预期BTC价格下跌'
                  : '• Going Short (Sell): Sell 1 BTC to get 95,000 USDT, expecting BTC price to fall'}
              </p>
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '2. 中心化交易所 (CEX) vs 去中心化交易所 (DEX)' : '2. Centralized (CEX) vs Decentralized (DEX) Exchanges'}
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-900 p-4 border-2 border-black dark:border-white">
                <h4 className="font-bold text-black dark:text-white mb-2">
                  {isZh ? '中心化交易所 (CEX)' : 'Centralized Exchange (CEX)'}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {isZh ? '如：Binance、OKX、Coinbase' : 'Examples: Binance, OKX, Coinbase'}
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• {isZh ? '高流动性，交易快速' : 'High liquidity, fast trading'}</li>
                  <li>• {isZh ? '用户界面友好' : 'User-friendly interface'}</li>
                  <li>• {isZh ? '需要KYC验证' : 'Requires KYC verification'}</li>
                  <li>• {isZh ? '资金托管在平台' : 'Funds custodied by platform'}</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 border-2 border-black dark:border-white">
                <h4 className="font-bold text-black dark:text-white mb-2">
                  {isZh ? '去中心化交易所 (DEX)' : 'Decentralized Exchange (DEX)'}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {isZh ? '如：Uniswap、PancakeSwap、Curve' : 'Examples: Uniswap, PancakeSwap, Curve'}
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• {isZh ? '用户保管资金' : 'User custody of funds'}</li>
                  <li>• {isZh ? '无需KYC，匿名交易' : 'No KYC, anonymous trading'}</li>
                  <li>• {isZh ? '需支付Gas费' : 'Requires gas fees'}</li>
                  <li>• {isZh ? '流动性相对较低' : 'Relatively lower liquidity'}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '3. 现货交易 vs 合约交易' : '3. Spot Trading vs Futures Trading'}
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white dark:bg-gray-900 p-4 border-l-4 border-green-600">
                <h4 className="font-bold text-black dark:text-white mb-2">
                  {isZh ? '现货交易（Spot Trading）' : 'Spot Trading'}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {isZh
                    ? '直接买卖实际加密货币，交割即时。买入BTC后你拥有真实的BTC，可以转到钱包或长期持有。无杠杆风险，但需要全额资金。'
                    : 'Directly buy and sell actual cryptocurrencies with immediate settlement. When you buy BTC, you own real BTC that can be transferred to wallets or held long-term. No leverage risk but requires full funds.'}
                </p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-4 border-l-4 border-red-600">
                <h4 className="font-bold text-black dark:text-white mb-2">
                  {isZh ? '合约交易（Futures/Perpetual）' : 'Futures/Perpetual Trading'}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {isZh
                    ? '交易的是价格合约，而非实际加密货币。支持杠杆（最高125倍），可双向交易（做多/做空）。高风险高收益，不持有实际代币。'
                    : 'Trading price contracts, not actual crypto. Supports leverage (up to 125x), allows bidirectional trading (long/short). High risk/reward, no actual token ownership.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Key Trading Concepts */}
      <section id="key-concepts" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '核心交易概念' : 'Key Trading Concepts'}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {isZh ? '📊 杠杆（Leverage）' : '📊 Leverage'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              {isZh
                ? '用小资金控制大仓位。10倍杠杆意味着用1000 USDT可交易价值10,000 USDT的加密货币。放大收益的同时也放大风险。'
                : 'Control larger positions with smaller capital. 10x leverage means $1,000 can trade $10,000 worth of crypto. Amplifies both gains and losses.'}
            </p>
            <div className="bg-white dark:bg-gray-900 p-3 text-xs text-gray-600 dark:text-gray-400">
              {isZh ? '⚠️ 新手建议：1-5倍杠杆，熟练后可增至10-20倍' : '⚠️ Beginner recommendation: 1-5x leverage, increase to 10-20x after mastery'}
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {isZh ? '💰 保证金（Margin）' : '💰 Margin'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              {isZh
                ? '开仓所需的最低资金。使用10倍杠杆交易10,000 USDT，只需1,000 USDT保证金。当账户余额低于维持保证金时会被强制平仓。'
                : 'Minimum capital required to open a position. Trading $10,000 with 10x leverage requires only $1,000 margin. Liquidation occurs when account balance falls below maintenance margin.'}
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {isZh ? '🎯 点数与手续费' : '🎯 Points & Fees'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              {isZh
                ? 'BTC从95,000涨到95,001美元 = 1个价格点。主流交易对手续费0.02%-0.1%，现货一般0.1%，合约Maker 0.02% / Taker 0.05%。'
                : 'BTC rising from $95,000 to $95,001 = 1 price point. Major pair fees 0.02%-0.1%, spot typically 0.1%, futures Maker 0.02% / Taker 0.05%.'}
            </p>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              {isZh ? '🛑 止损与止盈' : '🛑 Stop Loss & Take Profit'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
              {isZh
                ? '止损（SL）：价格到达设定值自动平仓止损。止盈（TP）：价格到达目标自动平仓获利。永远设置止损保护本金！'
                : 'Stop Loss (SL): Automatically close position at set price to limit loss. Take Profit (TP): Automatically close at target price to secure profit. Always set stop loss!'}
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Why Trade Crypto? */}
      <section id="why-trade-crypto" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '为什么选择数字货币交易？' : 'Why Trade Cryptocurrencies?'}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-600">
            <div className="text-4xl mb-3">⏰</div>
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">
              {isZh ? '24/7 全天候交易' : '24/7 Trading'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {isZh
                ? '无周末休市，随时交易。不受传统金融市场开盘时间限制，适合全球任何时区的交易者。'
                : 'No weekend closures, trade anytime. Not restricted by traditional market hours, suitable for traders in any timezone.'}
            </p>
          </div>

          <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-600">
            <div className="text-4xl mb-3">📈</div>
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">
              {isZh ? '高波动性机会' : 'High Volatility Opportunities'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {isZh
                ? 'BTC单日波动5-10%，远高于股票和外汇。高波动意味着更多交易机会和更大的盈利空间。'
                : 'BTC can move 5-10% daily, far exceeding stocks and forex. High volatility means more trading opportunities and profit potential.'}
            </p>
          </div>

          <div className="p-6 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-600">
            <div className="text-4xl mb-3">🚀</div>
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">
              {isZh ? '低门槛高杠杆' : 'Low Barriers, High Leverage'}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {isZh
                ? '最低10 USDT即可开始交易，支持最高125倍杠杆。小资金也能参与大市场，实现资本快速增长。'
                : 'Start trading with as little as $10 USDT, leverage up to 125x. Small capital can participate in big markets for rapid growth.'}
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Getting Started */}
      <section id="getting-started" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '如何开始数字货币交易？' : 'How to Start Cryptocurrency Trading?'}
        </h2>

        <div className="space-y-6">
          <div className="p-6 bg-white dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-black dark:text-white">1</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                  {isZh ? '选择可信赖的交易所' : 'Choose a Trusted Exchange'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  {isZh
                    ? '推荐：Binance（币安）、OKX（欧易）、Coinbase。选择有监管牌照、交易量大、安全性高的平台。'
                    : 'Recommended: Binance, OKX, Coinbase. Choose platforms with regulatory licenses, high volume, and strong security.'}
                </p>
                <LocaleLink
                  href="/education/broker-selection-guide"
                  className="text-sm text-black dark:text-white underline font-bold hover:no-underline"
                >
                  {isZh ? '→ 查看完整交易所对比' : '→ View Complete Exchange Comparison'}
                </LocaleLink>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-black dark:text-white">2</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                  {isZh ? '注册并完成身份验证 (KYC)' : 'Register and Complete KYC'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {isZh
                    ? '提供身份证件、人脸识别完成KYC验证。合规交易所要求KYC以防洗钱，保护用户资金安全。'
                    : 'Provide ID documents and facial recognition for KYC. Compliant exchanges require KYC to prevent money laundering and protect user funds.'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-black dark:text-white">3</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                  {isZh ? '充值并学习交易基础' : 'Deposit Funds and Learn Trading Basics'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  {isZh
                    ? '通过银行卡、信用卡或加密货币充值USDT。建议先用模拟账户练习，熟悉平台操作和交易规则后再入金。'
                    : 'Deposit USDT via bank card, credit card, or crypto transfer. Recommended to practice with demo account first before depositing real funds.'}
                </p>
                <LocaleLink
                  href="/tools/position-calculator"
                  className="text-sm text-black dark:text-white underline font-bold hover:no-underline"
                >
                  {isZh ? '→ 使用仓位计算器' : '→ Use Position Calculator'}
                </LocaleLink>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <div className="flex items-start gap-4">
              <div className="text-3xl font-black text-black dark:text-white">4</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                  {isZh ? '执行第一笔交易' : 'Execute Your First Trade'}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {isZh
                    ? '从BTC/USDT开始，使用小仓位（账户的1-2%），设置止损止盈。永远不要全仓交易，严格控制风险。'
                    : 'Start with BTC/USDT using small positions (1-2% of account), set stop loss and take profit. Never go all-in, strictly control risk.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white">
          <h3 className="text-xl font-bold mb-3">
            {isZh ? '⚠️ 新手最重要的三条原则' : '⚠️ Three Most Important Rules for Beginners'}
          </h3>
          <ol className="space-y-2 text-sm">
            <li><strong>{isZh ? '1. 永远使用止损' : '1. Always use stop loss'}</strong> - {isZh ? '保护本金比赚钱更重要' : 'Protecting capital is more important than making money'}</li>
            <li><strong>{isZh ? '2. 控制仓位大小' : '2. Control position size'}</strong> - {isZh ? '单笔风险不超过账户的1-2%' : 'Risk no more than 1-2% per trade'}</li>
            <li><strong>{isZh ? '3. 避免高杠杆' : '3. Avoid high leverage'}</strong> - {isZh ? '新手建议1-5倍杠杆，熟练后再增加' : 'Beginners should use 1-5x, increase only after mastery'}</li>
          </ol>
        </div>
      </section>
    </EducationPageTemplate>
  );
}
