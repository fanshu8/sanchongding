import { getLanguageFromLocale, generateBilingualMetadata } from '@/lib/getServerLanguage';
import { marketParticipantsContent } from '@/content/education/market-participants.content';
import EducationPageTemplate from '@/components/education/EducationPageTemplate';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);

  return generateBilingualMetadata(
    marketParticipantsContent.zh.title,
    marketParticipantsContent.en.title,
    marketParticipantsContent.zh.description,
    marketParticipantsContent.en.description,
    marketParticipantsContent.zh.keywords,
    marketParticipantsContent.en.keywords,
    lang
  );
}

export default async function MarketParticipantsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);
  const content = marketParticipantsContent[lang];
  const isZh = lang === 'zh';

  return (
    <EducationPageTemplate content={content} language={lang}>
      {/* Section 1: Market Structure */}
      <section id="market-structure" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '数字货三重市场结构与层级' : 'Cryptocurrency Market Structure & Hierarchy'}
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          {isZh
            ? '与传统金融市场不同，数字货三重市场是一个去中心化的全球网络，由多种类型的参与者构成。理解这些参与者的角色和行为模式，是成功交易的关键。'
            : 'Unlike traditional financial markets, the cryptocurrency market is a decentralized global network composed of various types of participants. Understanding their roles and behavior patterns is key to successful trading.'}
        </p>

        <div className="p-6 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white mb-8">
          <h3 className="text-xl font-bold mb-3">
            {isZh ? '💡 加密货三重市场的独特性' : '💡 Unique Characteristics of Crypto Markets'}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <strong>{isZh ? '去中心化：' : 'Decentralized:'}</strong>{' '}
              {isZh ? '无单一中央权威机构控制' : 'No single central authority controls the market'}
            </li>
            <li>
              <strong>{isZh ? '24/7运行：' : '24/7 Operation:'}</strong>{' '}
              {isZh ? '全年无休，随时可交易' : 'Trades year-round without breaks'}
            </li>
            <li>
              <strong>{isZh ? '全球参与：' : 'Global Participation:'}</strong>{' '}
              {isZh ? '任何人都可无门槛进入' : 'Anyone can participate without barriers'}
            </li>
            <li>
              <strong>{isZh ? '透明度高：' : 'High Transparency:'}</strong>{' '}
              {isZh ? '所有交易链上可查' : 'All transactions visible on-chain'}
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">🏢 {isZh ? '交易所' : 'Exchanges'}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isZh ? '市场基础设施，提供交易平台和流动性' : 'Market infrastructure providing trading platforms and liquidity'}
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">⛏️ {isZh ? '矿工' : 'Miners'}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isZh ? '维护网络安全，控制新三重供应' : 'Maintain network security, control new coin supply'}
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">🏦 {isZh ? '机构投资者' : 'Institutions'}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isZh ? '大资金参与者，影响价格走势' : 'Large capital participants affecting price movements'}
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">🔗 {isZh ? 'DeFi协议' : 'DeFi Protocols'}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isZh ? '去中心化金融服务提供者' : 'Decentralized financial service providers'}
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">🐋 {isZh ? '巨鲸' : 'Whales'}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isZh ? '持有大量加密货三重的个人或实体' : 'Individuals/entities holding massive crypto amounts'}
            </p>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-2 text-black dark:text-white">👥 {isZh ? '散户交易者' : 'Retail Traders'}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {isZh ? '普通个人投资者，市场主要参与者' : 'Individual investors, majority market participants'}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Exchanges */}
      <section id="exchanges" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '交易所：市场的核心枢纽' : 'Exchanges: The Core Hub'}
        </h2>

        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {isZh
              ? '交易所是加密货三重市场的基础设施，分为中心化交易所(CEX)和去中心化交易所(DEX)。它们提供流动性、撮合订单、设定价格发现机制。'
              : 'Exchanges are the infrastructure of crypto markets, divided into CEX and DEX. They provide liquidity, match orders, and establish price discovery mechanisms.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-black dark:border-white">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
                <span>🏢</span>
                {isZh ? '中心化交易所 (CEX)' : 'Centralized Exchanges (CEX)'}
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <h4 className="font-bold text-black dark:text-white mb-1">{isZh ? '代表：' : 'Examples:'}</h4>
                  <p>Binance, OKX, Coinbase, Bybit, Kraken</p>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-white mb-1">{isZh ? '角色：' : 'Role:'}</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{isZh ? '提供最高流动性（日均交易量$50B+）' : 'Provide highest liquidity ($50B+ daily volume)'}</li>
                    <li>{isZh ? '充当做市商，维持买卖价差' : 'Act as market makers, maintain bid-ask spreads'}</li>
                    <li>{isZh ? '提供杠杆和合约产品' : 'Offer leverage and futures products'}</li>
                    <li>{isZh ? '法三重出入金通道' : 'Fiat on/off-ramp gateways'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-white mb-1">{isZh ? '对价格的影响：' : 'Price Impact:'}</h4>
                  <p>
                    {isZh
                      ? '作为价格发现的主要场所，CEX的价格通常成为市场标准。大型CEX的订单簿深度直接影响价格稳定性。'
                      : 'As primary price discovery venues, CEX prices typically set market standards. Order book depth directly affects price stability.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-black dark:border-white">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
                <span>🔗</span>
                {isZh ? '去中心化交易所 (DEX)' : 'Decentralized Exchanges (DEX)'}
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <div>
                  <h4 className="font-bold text-black dark:text-white mb-1">{isZh ? '代表：' : 'Examples:'}</h4>
                  <p>Uniswap, PancakeSwap, Curve, SushiSwap</p>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-white mb-1">{isZh ? '角色：' : 'Role:'}</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{isZh ? '通过AMM算法自动做市' : 'Automated market making via AMM algorithms'}</li>
                    <li>{isZh ? '为长尾资产提供流动性' : 'Provide liquidity for long-tail assets'}</li>
                    <li>{isZh ? '完全链上透明' : 'Fully on-chain transparent'}</li>
                    <li>{isZh ? '无需KYC，匿名交易' : 'No KYC required, anonymous trading'}</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-black dark:text-white mb-1">{isZh ? '对价格的影响：' : 'Price Impact:'}</h4>
                  <p>
                    {isZh
                      ? 'DEX价格通常跟随CEX，但在新三重首发和特定资产交易中可能领先。套利机器人会平衡CEX和DEX之间的价差。'
                      : 'DEX prices usually follow CEX, but may lead for new token launches and specific assets. Arbitrage bots balance price differences between CEX and DEX.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Institutional Participants */}
      <section id="institutional-participants" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '机构参与者详解' : 'Institutional Participants'}
        </h2>

        <div className="space-y-8">
          {/* Crypto Funds */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '1. 加密货三重基金' : '1. Crypto Funds'}
            </h3>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <strong>{isZh ? '代表：' : 'Examples:'}</strong>{' '}
                Grayscale, Pantera Capital, a16z Crypto, Polychain Capital
              </p>
              <p>
                <strong>{isZh ? '资金规模：' : 'AUM:'}</strong>{' '}
                {isZh ? '$10B - $50B（单个基金）' : '$10B - $50B (per fund)'}
              </p>
              <p>
                <strong>{isZh ? '交易特点：' : 'Trading Characteristics:'}</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>{isZh ? '长线持仓为主，持有周期数月至数年' : 'Primarily long-term holdings, months to years'}</li>
                <li>{isZh ? '关注基本面和项目价值' : 'Focus on fundamentals and project value'}</li>
                <li>{isZh ? '大额买卖会提前布局，避免冲击市场' : 'Large trades planned in advance to avoid market impact'}</li>
                <li>{isZh ? '通常通过OTC市场完成大宗交易' : 'Usually complete bulk trades via OTC markets'}</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-500">
                <p className="text-xs">
                  <strong>{isZh ? '📊 散户启示：' : '📊 Retail Insight:'}</strong>{' '}
                  {isZh
                    ? '关注Grayscale等机构的持仓报告（每季度公布），可以了解Smart Money的配置方向。当机构大幅增持某三重种时，通常预示看好长期价值。'
                    : 'Follow institutional holdings reports (quarterly) from Grayscale and others to understand Smart Money allocation. Large institutional accumulation often signals long-term value conviction.'}
                </p>
              </div>
            </div>
          </div>

          {/* Mining Companies */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '2. 矿业公司' : '2. Mining Companies'}
            </h3>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <strong>{isZh ? '代表：' : 'Examples:'}</strong>{' '}
                Marathon Digital, Riot Platforms, Core Scientific
              </p>
              <p>
                <strong>{isZh ? '角色：' : 'Role:'}</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>{isZh ? '挖出新比特三重，是市场主要供应方' : 'Mine new Bitcoin, primary market suppliers'}</li>
                <li>{isZh ? '需要定期卖三重支付电费和运营成本' : 'Regular coin sales to cover electricity and operations'}</li>
                <li>{isZh ? '持有大量BTC库存，可能在价格高点抛售' : 'Hold large BTC reserves, may sell at price peaks'}</li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-500">
                <p className="text-xs">
                  <strong>{isZh ? '⚠️ 价格影响：' : '⚠️ Price Impact:'}</strong>{' '}
                  {isZh
                    ? '矿工抛售压力通常在牛市顶部增强。可通过"矿工储备指标"(Miner Reserve)监控矿工持仓变化，当矿工大量转三重到交易所时，警惕抛压。'
                    : 'Miner selling pressure typically intensifies at bull market tops. Monitor "Miner Reserve" metrics - when miners transfer large amounts to exchanges, beware of selling pressure.'}
                </p>
              </div>
            </div>
          </div>

          {/* Traditional Finance */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '3. 传统金融机构' : '3. Traditional Financial Institutions'}
            </h3>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <p>
                <strong>{isZh ? '代表：' : 'Examples:'}</strong>{' '}
                BlackRock, Fidelity, JPMorgan, Goldman Sachs
              </p>
              <p>
                <strong>{isZh ? '参与方式：' : 'Participation:'}</strong>
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>{isZh ? '通过比特三重ETF间接持有BTC' : 'Indirectly hold BTC via Bitcoin ETFs'}</li>
                <li>{isZh ? '为客户提供加密货三重托管服务' : 'Provide crypto custody services for clients'}</li>
                <li>{isZh ? '参与比特三重期货和期权交易' : 'Trade Bitcoin futures and options'}</li>
                <li>{isZh ? '资金量巨大，影响力日益增强' : 'Massive capital, growing influence'}</li>
              </ul>
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-500">
                <p className="text-xs">
                  <strong>{isZh ? '🚀 市场意义：' : '🚀 Market Significance:'}</strong>{' '}
                  {isZh
                    ? '2024年1月美国SEC批准比特三重现货ETF后，BlackRock等机构成为最大买方。传统金融的入场标志着加密货三重从边缘走向主流。'
                    : 'After SEC approved Bitcoin spot ETF in January 2024, BlackRock and others became largest buyers. Traditional finance entry marks crypto\'s shift from fringe to mainstream.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Retail Traders */}
      <section id="retail-traders" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '散户交易者的定位' : 'Retail Traders Position'}
        </h2>

        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {isZh
              ? '散户是加密货三重市场的主体参与者，占交易量的60-70%。虽然单个散户资金量小，但集体行为对短期价格波动影响巨大。'
              : 'Retail traders are the majority participants in crypto markets, accounting for 60-70% of trading volume. While individual retail capital is small, collective behavior significantly impacts short-term price movements.'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-500">
              <h3 className="font-bold text-black dark:text-white mb-3 flex items-center gap-2">
                <span>✅</span>
                {isZh ? '散户优势' : 'Retail Advantages'}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>{isZh ? '资金灵活：' : 'Flexible Capital:'}</strong>{' '}
                  {isZh ? '可以快速进出，不受大额订单限制' : 'Quick entry/exit, no large order constraints'}
                </li>
                <li>
                  <strong>{isZh ? '无监管约束：' : 'No Regulatory Constraints:'}</strong>{' '}
                  {isZh ? '不需要向任何人披露仓位' : 'No position disclosure requirements'}
                </li>
                <li>
                  <strong>{isZh ? '策略自由：' : 'Strategy Freedom:'}</strong>{' '}
                  {isZh ? '可以采用任何交易策略，无需遵守机构规则' : 'Can use any strategy without institutional rules'}
                </li>
                <li>
                  <strong>{isZh ? '信息平等：' : 'Information Equality:'}</strong>{' '}
                  {isZh ? '链上数据对所有人透明可见' : 'On-chain data transparent to everyone'}
                </li>
              </ul>
            </div>

            <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-500">
              <h3 className="font-bold text-black dark:text-white mb-3 flex items-center gap-2">
                <span>⚠️</span>
                {isZh ? '散户劣势' : 'Retail Disadvantages'}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>{isZh ? '易受情绪影响：' : 'Emotional Trading:'}</strong>{' '}
                  {isZh ? '恐惧和贪婪驱动决策，追涨杀跌' : 'Fear and greed drive decisions, chasing pumps/dumps'}
                </li>
                <li>
                  <strong>{isZh ? '缺乏经验：' : 'Lack Experience:'}</strong>{' '}
                  {isZh ? '大多数散户没有系统化交易策略' : 'Most retail lack systematic trading strategies'}
                </li>
                <li>
                  <strong>{isZh ? '信息劣势：' : 'Information Disadvantage:'}</strong>{' '}
                  {isZh ? '机构拥有更专业的分析工具和团队' : 'Institutions have professional tools and teams'}
                </li>
                <li>
                  <strong>{isZh ? '容易被收割：' : 'Easy Targets:'}</strong>{' '}
                  {isZh ? '成为"聪明钱"的对手盘' : 'Become counterparty to "Smart Money"'}
                </li>
              </ul>
            </div>
          </div>

          <div className="p-6 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white">
            <h3 className="font-bold mb-3">
              {isZh ? '💡 散户如何提升胜率？' : '💡 How Retail Can Improve Win Rate?'}
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <strong>{isZh ? '1. 跟随Smart Money：' : '1. Follow Smart Money:'}</strong>{' '}
                {isZh
                  ? '监控链上巨鲸地址和机构持仓变化，学习他们的操作'
                  : 'Monitor on-chain whale addresses and institutional position changes, learn from their moves'}
              </li>
              <li>
                <strong>{isZh ? '2. 逆向思维：' : '2. Contrarian Thinking:'}</strong>{' '}
                {isZh
                  ? '当大众极度恐慌时买入，极度贪婪时卖出（恐惧贪婪指数）'
                  : 'Buy when masses are fearful, sell when greedy (Fear & Greed Index)'}
              </li>
              <li>
                <strong>{isZh ? '3. 系统化交易：' : '3. Systematic Trading:'}</strong>{' '}
                {isZh
                  ? '建立自己的交易规则，严格执行，避免情绪化'
                  : 'Build your own rules, execute strictly, avoid emotions'}
              </li>
              <li>
                <strong>{isZh ? '4. 风险管理：' : '4. Risk Management:'}</strong>{' '}
                {isZh
                  ? '永远不要满仓，单次交易风险不超过总资金的2%'
                  : 'Never go all-in, single trade risk ≤ 2% of total capital'}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Smart Money vs Dumb Money */}
      <section id="smart-vs-dumb" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? 'Smart Money vs Dumb Money' : 'Smart Money vs Dumb Money'}
        </h2>

        <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-black dark:border-white mb-8">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {isZh
              ? '市场本质是一场零和博弈：Smart Money（聪明钱）通过信息优势、经验和纪律性从Dumb Money（愚蠢钱）手中获利。'
              : 'Markets are essentially zero-sum games: Smart Money profits from Dumb Money through information advantages, experience, and discipline.'}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-2 border-black dark:border-white">
            <thead>
              <tr className="bg-black dark:bg-white text-white dark:text-black">
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '特征' : 'Characteristic'}
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  Smart Money ✅
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  Dumb Money ❌
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 dark:text-gray-300">
              <tr>
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">
                  {isZh ? '买卖时机' : 'Timing'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '在恐慌中买入，在贪婪中卖出' : 'Buy in fear, sell in greed'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '追涨杀跌，情绪化交易' : 'Chase highs/dumps, emotional trading'}
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">
                  {isZh ? '持仓时间' : 'Holding Period'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '长期持有优质资产' : 'Long-term hold quality assets'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '频繁交易，追求快钱' : 'Frequent trading, chasing quick profits'}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">
                  {isZh ? '风险管理' : 'Risk Management'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '严格止损，分散配置' : 'Strict stop-loss, diversified'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '不设止损，重仓单三重' : 'No stop-loss, all-in single coin'}
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">
                  {isZh ? '决策依据' : 'Decision Basis'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '数据、逻辑、系统' : 'Data, logic, systematic'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '社交媒体、KOL推荐' : 'Social media, KOL recommendations'}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">
                  {isZh ? '交易频率' : 'Trading Frequency'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '耐心等待高概率机会' : 'Patient, wait for high-probability setups'}
                </td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '每天都要交易，过度交易' : 'Daily trading, overtrading'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </EducationPageTemplate>
  );
}
