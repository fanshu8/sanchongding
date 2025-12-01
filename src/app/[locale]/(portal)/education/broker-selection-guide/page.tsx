import { getLanguageFromLocale, generateBilingualMetadata } from '@/lib/getServerLanguage';
import { brokerSelectionContent } from '@/content/education/broker-selection-guide.content';
import EducationPageTemplate from '@/components/education/EducationPageTemplate';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);

  return generateBilingualMetadata(
    brokerSelectionContent.zh.title,
    brokerSelectionContent.en.title,
    brokerSelectionContent.zh.description,
    brokerSelectionContent.en.description,
    brokerSelectionContent.zh.keywords,
    brokerSelectionContent.en.keywords,
    lang
  );
}

export default async function ExchangeSelectionGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const lang = getLanguageFromLocale(locale);
  const content = brokerSelectionContent[lang];
  const isZh = lang === 'zh';

  return (
    <EducationPageTemplate content={content} language={lang}>
      {/* Section 1: CEX vs DEX */}
      <section id="cex-vs-dex" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? 'CEX与DEX：核心区别' : 'CEX vs DEX: Core Differences'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* CEX Card */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-black dark:border-white">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
              <span>🏢</span>
              {isZh ? '中心化交易所 (CEX)' : 'Centralized Exchange (CEX)'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isZh
                ? '由公司运营的传统交易平台，用户需要将资金托管在交易所。'
                : 'Traditional trading platforms operated by companies, where users deposit funds to the exchange.'}
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-black dark:text-white mb-2">{isZh ? '✅ 优势：' : '✅ Advantages:'}</h4>
                <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>{isZh ? '流动性高，交易执行快速' : 'High liquidity, fast execution'}</li>
                  <li>{isZh ? '用户界面友好，新手易上手' : 'User-friendly interface for beginners'}</li>
                  <li>{isZh ? '支持法三重出入金' : 'Supports fiat deposits/withdrawals'}</li>
                  <li>{isZh ? '客服支持完善' : 'Comprehensive customer support'}</li>
                  <li>{isZh ? '提供合约、杠杆等高级功能' : 'Offers futures, leverage and advanced features'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-black dark:text-white mb-2">{isZh ? '⚠️ 劣势：' : '⚠️ Disadvantages:'}</h4>
                <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>{isZh ? '资金由平台托管，存在被盗或跑路风险' : 'Funds held by platform, risk of hacks or exit scams'}</li>
                  <li>{isZh ? '需要KYC实名认证' : 'Requires KYC verification'}</li>
                  <li>{isZh ? '可能限制特定地区用户' : 'May restrict users from certain regions'}</li>
                  <li>{isZh ? '交易记录受平台监控' : 'Trading activity monitored by platform'}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* DEX Card */}
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-2 border-black dark:border-white">
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white flex items-center gap-2">
              <span>🔗</span>
              {isZh ? '去中心化交易所 (DEX)' : 'Decentralized Exchange (DEX)'}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {isZh
                ? '基于智能合约的自动化交易平台，用户保留资金控制权。'
                : 'Automated trading platforms based on smart contracts, users retain control of funds.'}
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-bold text-black dark:text-white mb-2">{isZh ? '✅ 优势：' : '✅ Advantages:'}</h4>
                <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>{isZh ? '资金完全由自己控制（非托管）' : 'Full control of funds (non-custodial)'}</li>
                  <li>{isZh ? '无需KYC，匿名交易' : 'No KYC required, anonymous trading'}</li>
                  <li>{isZh ? '全球无门槛访问' : 'Global access without restrictions'}</li>
                  <li>{isZh ? '交易透明，链上可验证' : 'Transparent, on-chain verifiable'}</li>
                  <li>{isZh ? '可交易任何代三重（包括新三重）' : 'Trade any token including new launches'}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-black dark:text-white mb-2">{isZh ? '⚠️ 劣势：' : '⚠️ Disadvantages:'}</h4>
                <ul className="list-disc pl-6 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>{isZh ? '流动性较低，大额交易滑点高' : 'Lower liquidity, high slippage for large orders'}</li>
                  <li>{isZh ? '需要支付区块链Gas费' : 'Requires paying blockchain gas fees'}</li>
                  <li>{isZh ? '界面复杂，新手门槛高' : 'Complex interface, steep learning curve'}</li>
                  <li>{isZh ? '无客服支持，操作不可逆' : 'No customer support, irreversible operations'}</li>
                  <li>{isZh ? '存在智能合约风险和欺诈项目' : 'Smart contract risks and scam projects'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white">
          <h3 className="font-bold mb-3">
            {isZh ? '💡 如何选择？' : '💡 How to Choose?'}
          </h3>
          <p className="text-sm mb-2">
            {isZh
              ? '对于新手和大额交易者，建议优先使用合规的CEX（如Binance、OKX、Coinbase）。等熟悉后，可以尝试DEX体验去中心化交易的魅力。'
              : 'For beginners and large traders, prioritize regulated CEX platforms (like Binance, OKX, Coinbase). Once comfortable, explore DEX to experience decentralized trading.'}
          </p>
          <p className="text-sm">
            <strong>{isZh ? '黄金法则：' : 'Golden Rule:'}</strong>{' '}
            {isZh
              ? '"Not your keys, not your coins" - 只在CEX保留交易所需资金，大额资产转入冷钱包。'
              : '"Not your keys, not your coins" - Only keep trading funds on CEX, store large amounts in cold wallets.'}
          </p>
        </div>
      </section>

      {/* Section 2: Major CEX Comparison */}
      <section id="major-cex" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '主流中心化交易所对比' : 'Major CEX Comparison'}
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-2 border-black dark:border-white">
            <thead>
              <tr className="bg-black dark:bg-white text-white dark:text-black">
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '交易所' : 'Exchange'}
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '成立时间' : 'Founded'}
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '日均交易量' : 'Daily Volume'}
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '手续费' : 'Trading Fees'}
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '特色优势' : 'Key Strengths'}
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr>
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">Binance</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">2017</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">~$50B</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">0.1%</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '全球最大，流动性最强，三重种最全' : 'Largest globally, best liquidity, most coins'}
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">OKX</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">2017</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">~$10B</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">0.08-0.1%</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '衍生品丰富，适合合约交易' : 'Rich derivatives, great for futures'}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">Coinbase</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">2012</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">~$5B</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">0.4-0.6%</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '美国合规第一，安全性最高' : 'Top US compliance, highest security'}
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">Bybit</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">2018</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">~$8B</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">0.1%</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '合约交易体验优秀' : 'Excellent futures trading experience'}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">Kraken</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">2011</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">~$2B</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">0.16-0.26%</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '老牌交易所，欧美用户多' : 'Established exchange, strong EU/US presence'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Detailed Exchange Reviews */}
        <div className="space-y-6">
          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              🥇 Binance（三重安）
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {isZh
                ? '全球交易量最大的加密货三重交易所，支持600+三重种，流动性无敌。'
                : 'World\'s largest crypto exchange by volume, supports 600+ coins with unmatched liquidity.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-black dark:text-white">{isZh ? '适合人群：' : 'Best For:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">
                  {isZh ? '所有交易者，从新手到专业' : 'All traders, from beginners to professionals'}
                </p>
              </div>
              <div>
                <strong className="text-black dark:text-white">{isZh ? '推荐指数：' : 'Rating:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">⭐⭐⭐⭐⭐ (5/5)</p>
              </div>
              <div>
                <strong className="text-black dark:text-white">{isZh ? '核心优势：' : 'Key Advantages:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">
                  {isZh ? '超高流动性、三重种全、手续费低' : 'Ultra-high liquidity, most coins, low fees'}
                </p>
              </div>
              <div>
                <strong className="text-black dark:text-white">{isZh ? '注意事项：' : 'Note:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">
                  {isZh ? '部分国家受限（如美国）' : 'Restricted in some countries (e.g., US)'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              🥈 OKX（欧易）
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {isZh
                ? '综合实力强劲的交易所，合约交易产品丰富，深度优秀。'
                : 'Strong all-around exchange with rich futures products and excellent depth.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-black dark:text-white">{isZh ? '适合人群：' : 'Best For:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">
                  {isZh ? '合约交易者、套利交易者' : 'Futures traders, arbitrage traders'}
                </p>
              </div>
              <div>
                <strong className="text-black dark:text-white">{isZh ? '推荐指数：' : 'Rating:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">⭐⭐⭐⭐⭐ (5/5)</p>
              </div>
              <div>
                <strong className="text-black dark:text-white">{isZh ? '核心优势：' : 'Key Advantages:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">
                  {isZh ? '衍生品种类多、统一账户方便' : 'Diverse derivatives, unified account system'}
                </p>
              </div>
              <div>
                <strong className="text-black dark:text-white">{isZh ? '注意事项：' : 'Note:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">
                  {isZh ? '小三重种流动性略逊于三重安' : 'Slightly lower liquidity for smaller coins vs Binance'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-50 dark:bg-gray-800 border-l-4 border-black dark:border-white">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">
              🥉 Coinbase
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">
              {isZh
                ? '美国最大、合规性最强的交易所，上市公司，安全性第一。'
                : 'Largest US exchange, publicly traded company, top-tier compliance and security.'}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-black dark:text-white">{isZh ? '适合人群：' : 'Best For:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">
                  {isZh ? '美国用户、机构投资者、保守型投资者' : 'US users, institutional investors, conservative traders'}
                </p>
              </div>
              <div>
                <strong className="text-black dark:text-white">{isZh ? '推荐指数：' : 'Rating:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">⭐⭐⭐⭐ (4/5)</p>
              </div>
              <div>
                <strong className="text-black dark:text-white">{isZh ? '核心优势：' : 'Key Advantages:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">
                  {isZh ? '安全性最高、合规透明、法三重出入金方便' : 'Highest security, regulatory compliance, easy fiat on/off-ramps'}
                </p>
              </div>
              <div>
                <strong className="text-black dark:text-white">{isZh ? '注意事项：' : 'Note:'}</strong>
                <p className="text-gray-600 dark:text-gray-400">
                  {isZh ? '手续费较高，三重种相对较少' : 'Higher fees, fewer coin listings'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Major DEX Comparison */}
      <section id="major-dex" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '主流去中心化交易所对比' : 'Major DEX Comparison'}
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-2 border-black dark:border-white">
            <thead>
              <tr className="bg-black dark:bg-white text-white dark:text-black">
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">DEX</th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '区块链' : 'Blockchain'}
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '日均交易量' : 'Daily Volume'}
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '手续费' : 'Fees'}
                </th>
                <th className="border-2 border-black dark:border-white px-4 py-3 text-left">
                  {isZh ? '特色' : 'Features'}
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr>
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">Uniswap</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">Ethereum</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">~$1-2B</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">0.3% + Gas</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '最大DEX，ERC20代三重首选' : 'Largest DEX, best for ERC20 tokens'}
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">PancakeSwap</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">BSC</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">~$500M</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">0.25% + Gas</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? 'BSC生态第一，Gas费低' : 'Top BSC DEX, low gas fees'}
                </td>
              </tr>
              <tr>
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">Curve</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">Multi-chain</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">~$200M</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">0.04% + Gas</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '稳定三重交易专家，滑点最低' : 'Stablecoin specialist, lowest slippage'}
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border-2 border-black dark:border-white px-4 py-3 font-bold">SushiSwap</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">Multi-chain</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">~$100M</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">0.3% + Gas</td>
                <td className="border-2 border-black dark:border-white px-4 py-3">
                  {isZh ? '多链支持，功能丰富' : 'Multi-chain support, feature-rich'}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-500">
          <h3 className="font-bold text-black dark:text-white mb-2">
            {isZh ? '⚠️ 使用DEX的重要提醒' : '⚠️ Important DEX Safety Reminders'}
          </h3>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              <strong>{isZh ? '1. 验证合约地址：' : '1. Verify Contract Address:'}</strong>{' '}
              {isZh ? '交易前务必在官方网站确认代三重合约地址，防止假三重' : 'Always verify token contract address on official site to avoid scams'}
            </li>
            <li>
              <strong>{isZh ? '2. 小额测试：' : '2. Test with Small Amounts:'}</strong>{' '}
              {isZh ? '首次使用新DEX时，先用小额测试' : 'Test with small amounts when using a new DEX'}
            </li>
            <li>
              <strong>{isZh ? '3. 注意Gas费：' : '3. Watch Gas Fees:'}</strong>{' '}
              {isZh ? 'Ethereum链上Gas费可能很高，选择低峰时段交易' : 'Ethereum gas fees can be high, trade during off-peak hours'}
            </li>
            <li>
              <strong>{isZh ? '4. 滑点设置：' : '4. Slippage Settings:'}</strong>{' '}
              {isZh ? '小额交易设置0.5-1%，大额设置2-5%' : 'Set 0.5-1% for small trades, 2-5% for large trades'}
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Security Evaluation */}
      <section id="security" className="mb-16 scroll-mt-20">
        <h2 className="text-3xl font-black mb-6 text-black dark:text-white border-l-4 border-black dark:border-white pl-4">
          {isZh ? '安全性评估' : 'Security Evaluation'}
        </h2>

        <div className="space-y-6">
          <div className="p-6 bg-red-50 dark:bg-red-900/20 border-2 border-red-500">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
              {isZh ? '🚨 交易所安全检查清单' : '🚨 Exchange Security Checklist'}
            </h3>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <div>
                  <strong>{isZh ? '监管合规：' : 'Regulatory Compliance:'}</strong>{' '}
                  {isZh
                    ? '是否持有合法牌照（如美国MSB、新加坡MAS等）'
                    : 'Holds proper licenses (e.g., US MSB, Singapore MAS)'}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <div>
                  <strong>{isZh ? '资金安全：' : 'Fund Security:'}</strong>{' '}
                  {isZh
                    ? '是否有储备金证明（Proof of Reserves）'
                    : 'Provides Proof of Reserves'}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <div>
                  <strong>{isZh ? '历史记录：' : 'Track Record:'}</strong>{' '}
                  {isZh
                    ? '运营时间是否超过3年，是否发生过重大安全事故'
                    : 'Operating 3+ years without major security incidents'}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <div>
                  <strong>{isZh ? '安全功能：' : 'Security Features:'}</strong>{' '}
                  {isZh
                    ? '是否支持2FA、白名单地址、防钓鱼码'
                    : 'Supports 2FA, whitelist addresses, anti-phishing code'}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" className="mt-1" disabled />
                <div>
                  <strong>{isZh ? '保险基金：' : 'Insurance Fund:'}</strong>{' '}
                  {isZh
                    ? '是否设立用户保护基金'
                    : 'Maintains user protection fund'}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white">
            <h3 className="font-bold mb-3">
              {isZh ? '🔐 个人安全最佳实践' : '🔐 Personal Security Best Practices'}
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <strong>{isZh ? '1. 启用双重验证(2FA)：' : '1. Enable 2FA:'}</strong>{' '}
                {isZh ? '使用Google Authenticator而非短信验证' : 'Use Google Authenticator instead of SMS'}
              </li>
              <li>
                <strong>{isZh ? '2. 设置提现白名单：' : '2. Set Withdrawal Whitelist:'}</strong>{' '}
                {isZh ? '只允许向预设地址提现' : 'Only allow withdrawals to pre-approved addresses'}
              </li>
              <li>
                <strong>{isZh ? '3. 分散存储：' : '3. Diversify Storage:'}</strong>{' '}
                {isZh ? '不要将所有资金放在一个交易所' : 'Don\'t keep all funds on one exchange'}
              </li>
              <li>
                <strong>{isZh ? '4. 定期提现：' : '4. Regular Withdrawals:'}</strong>{' '}
                {isZh ? '大额资金及时转入冷钱包（Ledger、Trezor）' : 'Transfer large amounts to cold wallets (Ledger, Trezor)'}
              </li>
              <li>
                <strong>{isZh ? '5. 警惕钓鱼：' : '5. Beware of Phishing:'}</strong>{' '}
                {isZh ? '仔细检查网址，使用书签访问交易所' : 'Carefully verify URLs, use bookmarks to access exchanges'}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </EducationPageTemplate>
  );
}
