// 语言包配置
i18n = {
    // 当前语言设置
    currentLanguage: 'zh',
    
    // 语言包数据
    translations: {
        // 中文翻译
        'zh': {
            'app.title': '统计分布模拟分析工具',
            'alert.please.enter.valid.parameters': '请输入有效的参数',
            'alert.calculation.failed': '计算失败',
            'stats.required.sample.size': '所需样本量',
            'stats.analysis.method': '分析方法',
            'stats.sample.size': '样本大小',
            'stats.sample.mean': '样本均值',
            'stats.population.std': '总体标准差',
            'stats.sample.std': '样本标准差',
            'stats.degrees.freedom': '自由度',
            'stats.critical.value': '临界值',
            'stats.standard.error': '标准误',
            'stats.margin.error': '边际误差',
            'stats.confidence.interval.lower': '置信区间下限',
            'stats.confidence.interval.upper': '置信区间上限',
            'stats.confidence.interval': '置信区间',
            'stats.z.score': 'Z分数',
            'stats.contains.true.mean': '总体均值包含情况',
            'stats.contains.true.mean.yes': '区间包含总体均值',
            'stats.contains.true.mean.no': '区间不包含总体均值',
            'stats.actual.population.mean': '实际总体均值',
            'stats.t.test.reference': '参考：使用样本标准差的T检验结果',
            'stats.method': '方法',
            'stats.t.critical.value': 'T临界值',
            'stats.t.standard.error': 'T标准误',
            'stats.t.margin.error': 'T边际误差',
            'stats.t.confidence.interval': 'T置信区间',
            'sample.size.explanation.title': '解释',
            'sample.size.explanation': '要达到{confidenceLevel}%的置信水平和{marginError}的边际误差，在假设总体标准差为{populationStd}的情况下，您需要至少{sampleSize}个样本。',
            'confidence.interpretation.statistical': '统计解释',
            'confidence.interpretation.confident': '我们有{confidenceLevel}%的信心认为，真实总体均值落在区间[{lowerBound}, {upperBound}]内。',
            'confidence.interpretation.methodological': '方法论说明',
            'confidence.interpretation.using': '使用了{method}进行分析',
            'confidence.interpretation.based.on': '基于{sampleSize}个样本的计算结果',
            'confidence.interpretation.margin.error': '边际误差为{marginError}，表示估计的不确定性',
            'stats.effect.size.analysis': '效应量分析',
            'stats.cohens.d': 'Cohen\'s d',
            'stats.effect.size.smallest': '极小效应',
            'stats.effect.size.small': '小效应',
            'stats.effect.size.medium': '中等效应',
            'stats.effect.size.large': '大效应',
            'stats.practical.application': '实际应用建议',
            'stats.increase.sample.size': '如果需要更精确的估计，可以考虑增加样本量',
            'stats.current.margin.error': '当前边际误差为',
            'stats.adjust.confidence.level': '您可以根据实际需求调整置信水平',
            'stats.common.confidence.level': '当前使用的是最常用的95%置信水平，这在大多数统计分析中被认为是平衡精确度和可靠性的合理选择。',
            'stats.selected.confidence.level': '您选择了{confidenceLevel}%的置信水平，这意味着有{(1 - {confidenceLevel}/100) * 100}%的概率区间不包含真实总体均值。',
            'app.subtitle': '通过模拟不同概率分布，进行数据分析与可视化',
            'tab.distribution': '概率分布模拟',
            'tab.confidence': '置信区间分析',
            'tab.dataAnalysis': '数据分析',
            'tab.hypothesis': '假设检验',
            'distribution.type': '分布类型',
            'distribution.normal': '正态分布',
            'distribution.binomial': '二项分布',
            'distribution.poisson': '泊松分布',
            'distribution.uniform': '均匀分布',
            'distribution.exponential': '指数分布',
            'param.mean': '均值',
            'param.std': '标准差',
            'param.trials': '试验次数',
            'param.probability': '成功概率',
            'param.lambda': 'λ值',
            'param.min': '最小值',
            'param.max': '最大值',
            'param.sampleSize': '样本数量',
            'button.generateData': '生成数据',
            'button.clearData': '清除数据',
            'button.clear': '清除',
            'confidence.level': '置信水平',
            'confidence.sampleSize': '样本数量',
            'confidence.sampleMean': '样本均值',
            'confidence.sampleStd': '样本标准差',
            'confidence.populationStd': '总体标准差',
            'confidence.calculate': '计算置信区间',
            'confidence.generateSample': '生成样本数据',
            'confidence.method': '方法',
            'confidence.confidenceInterval': '置信区间',
            'confidence.marginOfError': '边际误差',
            'confidence.marginError': '期望边际误差',
            'confidence.calculateSampleSize': '计算所需样本量',
            'confidence.sampleData': '样本数据 (逗号分隔)',
            'confidence.criticalValue': '临界值',
            'confidence.standardError': '标准误',
            'dataAnalysis.title': '数据分析',
            'dataAnalysis.inputMethod': '数据输入方式',
            'dataAnalysis.manual': '手动输入',
            'dataAnalysis.file': '文件上传',
            'dataAnalysis.aiGenerate': 'AI生成数据',
            'dataAnalysis.dataInput': '数据输入',
            'dataAnalysis.analyze': '分析数据',
            'dataAnalysis.reset': '重置分析',
            'dataAnalysis.fileUpload': '上传CSV文件',
            'result.mean': '均值',
            'result.median': '中位数',
            'result.mode': '众数',
            'result.variance': '方差',
            'result.std': '标准差',
            'result.min': '最小值',
            'result.max': '最大值',
            'result.count': '数量',
            'result.sum': '总和',
            'result.range': '范围',
            'result.skewness': '偏度',
            'result.kurtosis': '峰度',
            'result.interpretation': '结果解释',
            'z.test': 'Z检验',
            't.test': 'T检验',
            'test.type': '检验类型',
            'degrees.freedom': '自由度',
            'z.critical.value': 'Z临界值',
            't.critical.value': 'T临界值',
            'z.standard.error': 'Z标准误',
            't.standard.error': 'T标准误',
            'z.margin.error': 'Z边际误差',
            't.margin.error': 'T边际误差',
            'z.confidence.interval': 'Z置信区间',
            't.confidence.interval': 'T置信区间',
            'population.mean': '总体均值',
            'population.std': '总体标准差',
            'sample.mean': '样本均值',
            'sample.std': '样本标准差',
            'sample.size': '样本量',
            'confidence.level': '置信水平',
            'language.switch': '语言切换',
            'language.zh': '中文',
            'language.en': '英文',
            'ai.generate.data': 'AI生成数据',
            'ai.test.connection': '测试连接',
            'ai.save.api.key': '保存 & 使用 AI',
            'ai.api.key': 'API密钥',
            'ai.connection.status': '连接状态',
            'ai.connection.success': '✅ 连接成功！',
            'ai.connection.failed': '❌ 连接失败:',
            'ai.connection.testing': '正在测试连接...',
            'ai.api.key.saved': '✅ API密钥已保存！',
            'ai.enter.api.key': '请输入API密钥',
            'ai.error': '❌ 错误:',
            'chart.normal.distribution': '正态分布',
            'chart.binomial.distribution': '二项分布',
            'chart.poisson.distribution': '泊松分布',
            'chart.uniform.distribution': '均匀分布',
            'chart.data': '数据',
            'chart.mean': '均值',
            'chart.std': '标准差',
            'chart.value': '值',
            'chart.frequency': '频率',
            'chart.probability': '概率',
            'chart.density': '密度',
            'chart.percentage': '百分比',
            'chart.count': '计数',
            'chart.population.mean': '总体均值',
            'chart.sample.mean': '样本均值',
            'chart.confidence.interval': '置信区间',
            'chart.lower.bound': '下限',
            'chart.upper.bound': '上限',
            'chart.t.test.lower.bound': 'T检验下限',
            'chart.t.test.upper.bound': 'T检验上限',
            'chart.main.lower.bound': '主下限',
            'chart.main.upper.bound': '主上限',
            'chart.sampling.distribution': '抽样分布',
            'chart.t.test.reference': 'T检验参考置信区间',
            // 动态内容翻译键
            'stats.min': '最小值',
            'stats.max': '最大值',
            'stats.q1': '第一四分位数',
            'stats.q3': '第三四分位数',
            'stats.iqr': '四分位距',
            'stats.sample.size': '样本数量',
            'stats.mean': '均值',
            'stats.median': '中位数',
            'stats.variance': '方差',
            'stats.std.dev': '标准差',
            'stats.critical.value': '临界值',
            'stats.standard.error': '标准误',
            'stats.margin.error': '边际误差',
            'stats.lower.bound': '置信区间下限',
            'stats.upper.bound': '置信区间上限',
            'stats.confidence.interval': '置信区间',
            'stats.required.sample.size': '所需样本量',
            'stats.z.score': 'Z分数',
            'stats.analysis.method': '分析方法',
            'stats.sample.mean': '样本均值',
            'stats.sample.std': '样本标准差',
            'stats.population.mean': '总体均值',
            'stats.population.std': '总体标准差',
            'stats.degrees.freedom': '自由度',
            'stats.contains.true.mean': '总体均值包含情况',
            'stats.contains.true.mean.yes': '区间包含总体均值',
            'stats.contains.true.mean.no': '区间不包含总体均值',
            'stats.actual.population.mean': '实际总体均值',
            'stats.t.test.reference': '参考：使用样本标准差的T检验结果',
            'stats.t.method': '方法',
            'stats.t.critical.value': 'T临界值',
            'stats.t.standard.error': 'T标准误',
            'stats.t.margin.error': 'T边际误差',
            'stats.t.confidence.interval': 'T置信区间',
            'stats.cohens.d': 'Cohen\'s d效应量',
            'stats.effect.size.smallest': '极小效应',
            'stats.effect.size.small': '小效应',
            'stats.effect.size.medium': '中等效应',
            'stats.effect.size.large': '大效应',
            'stats.effect.size.analysis': '效应量分析',
            'stats.practical.application': '实际应用建议',
            'stats.increase.sample.size': '如果需要更精确的估计，可以考虑增加样本量',
            'stats.current.margin.error': '当前边际误差为',
            'stats.adjust.confidence.level': '您可以根据实际需求调整置信水平',
            'stats.common.confidence.level': '当前使用的是最常用的95%置信水平，这在大多数统计分析中被认为是平衡精确度和可靠性的合理选择。',
            'stats.selected.confidence.level': '您选择了{confidenceLevel}%的置信水平，这意味着有{(1 - {confidenceLevel}/100) * 100}%的概率区间不包含真实总体均值。',
            'chart.distribution.histogram': '{distribution}分布直方图 (样本大小: {sampleSize})',
            'chart.distribution.frequency': '{distribution}分布频率',
            'chart.temporal.analysis': '时间序列分析 - 每日病例',
            'chart.group.analysis': '分组分析 - 按类型统计病例',
            'chart.residence.analysis': '居住地分析 - 按居住类型统计病例',
            'chart.positivity.analysis': '阳性率分析 - 每日阳性率',
            'chart.positive.cases': '阳性病例',
            'chart.daily.positive.cases': '每日阳性病例',
            'chart.negative.tests': '阴性测试',
            'chart.positivity.rate': '阳性率 (%)',
            'alert.please.select.file': '请先选择文件。',
            'alert.invalid.distribution.parameters': '无效的分布参数',
            'alert.invalid.normal.distribution': '无效的正态分布参数',
            'alert.invalid.binomial.distribution': '无效的二项分布参数',
            'alert.invalid.poisson.distribution': '无效的泊松分布参数',
            'alert.invalid.uniform.distribution': '无效的均匀分布参数',
            'alert.invalid.exponential.distribution': '无效的指数分布参数',
            'alert.please.enter.sample.data': '请输入样本数据',
            'alert.invalid.population.std': '请输入有效的总体标准差',
            'alert.invalid.parameters': '请输入有效的参数',
            'alert.please.select.valid.data.method': '请选择有效的数据输入方式',
            'alert.could.not.parse.sample.data': '无法解析样本数据，请确保数据格式正确',
            'alert.please.enter.api.key': '请输入API密钥',
            'alert.invalid.sample.size': '请输入有效的样本大小（100-10000）',
            'loading.generating.data': '正在生成数据...',
            'loading.data.generation.complete': '数据生成完成！',
            'loading.connecting': '连接中...',
            'loading.connection.failed': '连接失败:',
            'loading.error': '错误:',
            'chart.distribution.info.normal': '正态分布（高斯分布）是一种连续概率分布，呈钟形曲线，对称于均值。常用于自然现象、测量误差等场景。',
            'chart.distribution.info.binomial': '二项分布用于模拟在固定次数的独立试验中成功次数的概率。每次试验只有两种可能结果：成功或失败。',
            'chart.distribution.info.poisson': '泊松分布用于模拟在固定时间或空间内发生的事件数量，适用于事件以已知的平均速率随机且独立发生的场景。',
            'chart.distribution.info.exponential': '指数分布用于模拟独立事件之间的时间间隔，具有无记忆性，常用于可靠性分析和排队论。',
            'chart.distribution.info.uniform': '均匀分布是一种连续概率分布，其中区间内的每个值都有相等的概率被选中。',
            'confidence.interpretation.statistical': '统计解释',
            'confidence.interpretation.methodological': '方法论说明',
            'confidence.interpretation.based.on': '基于{sampleSize}个样本的计算结果',
            'confidence.interpretation.margin.error': '边际误差为{marginError}，表示估计的不确定性',
            'confidence.interpretation.confident': '我们有{confidenceLevel}%的信心认为，真实总体均值落在区间[{lowerBound}, {upperBound}]内。',
            'confidence.interpretation.using': '使用了{method}进行分析',
            'sample.size.explanation': '要达到{confidenceLevel}%的置信水平和{marginError}的边际误差，在假设总体标准差为{populationStd}的情况下，您需要至少{sampleSize}个样本。',
            'sample.size.explanation.title': '解释',
            'button.calculate.test': '计算假设检验',
            'button.clear.test.results': '清除结果',
            'alert.failed.to.create.chart': '创建图表失败',
            'alert.failed.to.generate.data': '生成数据失败',
            'alert.failed.to.calculate.sample.size': '计算样本量失败',
            'alert.failed.to.calculate.confidence.interval': '计算置信区间失败',
            'alert.failed.to.generate.sample': '生成样本失败',
            'tooltip.frequency': '频率: {frequency} (计数: {count})',
            'distribution.analysis.results': '分布分析结果'
        },
        // 英文翻译
        'en': {
            'app.title': 'Statistical Distribution Simulation Tool',
            'alert.please.enter.valid.parameters': 'Please enter valid parameters',
            'alert.calculation.failed': 'Calculation failed',
            'stats.required.sample.size': 'Required Sample Size',
            'stats.analysis.method': 'Analysis Method',
            'stats.sample.size': 'Sample Size',
            'stats.sample.mean': 'Sample Mean',
            'stats.population.std': 'Population Standard Deviation',
            'stats.sample.std': 'Sample Standard Deviation',
            'stats.degrees.freedom': 'Degrees of Freedom',
            'stats.critical.value': 'Critical Value',
            'stats.standard.error': 'Standard Error',
            'stats.margin.error': 'Margin of Error',
            'stats.confidence.interval.lower': 'Confidence Interval Lower Bound',
            'stats.confidence.interval.upper': 'Confidence Interval Upper Bound',
            'stats.confidence.interval': 'Confidence Interval',
            'stats.z.score': 'Z Score',
            'stats.contains.true.mean': 'True Mean Containment',
            'stats.contains.true.mean.yes': 'Interval contains true mean',
            'stats.contains.true.mean.no': 'Interval does not contain true mean',
            'stats.actual.population.mean': 'Actual population mean',
            'stats.t.test.reference': 'Reference: T-Test Results Using Sample Standard Deviation',
            'stats.method': 'Method',
            'stats.t.critical.value': 'T Critical Value',
            'stats.t.standard.error': 'T Standard Error',
            'stats.t.margin.error': 'T Margin of Error',
            'stats.t.confidence.interval': 'T Confidence Interval',
            'sample.size.explanation.title': 'Explanation',
            'sample.size.explanation': 'To achieve {confidenceLevel}% confidence level with {marginError} margin of error, assuming population standard deviation of {populationStd}, you need at least {sampleSize} samples.',
            'confidence.interpretation.statistical': 'Statistical Interpretation',
            'confidence.interpretation.confident': 'We are {confidenceLevel}% confident that the true population mean falls within the interval [{lowerBound}, {upperBound}].',
            'confidence.interpretation.methodological': 'Methodological Notes',
            'confidence.interpretation.using': 'Used {method} for analysis',
            'confidence.interpretation.based.on': 'Based on calculations from {sampleSize} samples',
            'confidence.interpretation.margin.error': 'Margin of error is {marginError}, indicating estimation uncertainty',
            'stats.effect.size.analysis': 'Effect Size Analysis',
            'stats.cohens.d': 'Cohen\'s d',
            'stats.effect.size.smallest': 'Tiny effect',
            'stats.effect.size.small': 'Small effect',
            'stats.effect.size.medium': 'Medium effect',
            'stats.effect.size.large': 'Large effect',
            'stats.practical.application': 'Practical Application Recommendations',
            'stats.increase.sample.size': 'Consider increasing sample size for more precise estimates',
            'stats.current.margin.error': 'Current margin of error is',
            'stats.adjust.confidence.level': 'You can adjust the confidence level according to your needs',
            'stats.common.confidence.level': 'Currently using the most common 95% confidence level, which is considered a reasonable balance between precision and reliability in most statistical analyses.',
            'stats.selected.confidence.level': 'You selected a {confidenceLevel}% confidence level, meaning there is a {(1 - {confidenceLevel}/100) * 100}% probability that the interval does not contain the true population mean.',
            'app.subtitle': 'Data analysis and visualization through probability distribution simulation',
            'tab.distribution': 'Distribution Simulation',
            'tab.confidence': 'Confidence Interval',
            'tab.dataAnalysis': 'Data Analysis',
            'tab.hypothesis': 'Hypothesis Testing',
            'distribution.type': 'Distribution Type',
            'distribution.normal': 'Normal Distribution',
            'distribution.binomial': 'Binomial Distribution',
            'distribution.poisson': 'Poisson Distribution',
            'distribution.uniform': 'Uniform Distribution',
            'distribution.exponential': 'Exponential Distribution',
            'param.mean': 'Mean',
            'param.std': 'Standard Deviation',
            'param.trials': 'Number of Trials',
            'param.probability': 'Probability of Success',
            'param.lambda': 'λ Value',
            'param.min': 'Minimum Value',
            'param.max': 'Maximum Value',
            'param.sampleSize': 'Sample Size',
            'button.generateData': 'Generate Data',
            'button.clearData': 'Clear Data',
            'button.clear': 'Clear',
            'confidence.level': 'Confidence Level',
            'confidence.sampleSize': 'Sample Size',
            'confidence.sampleMean': 'Sample Mean',
            'confidence.sampleStd': 'Sample Standard Deviation',
            'confidence.populationStd': 'Population Standard Deviation',
            'confidence.calculate': 'Calculate Confidence Interval',
            'confidence.generateSample': 'Generate Sample Data',
            'confidence.method': 'Method',
            'confidence.confidenceInterval': 'Confidence Interval',
            'confidence.marginOfError': 'Margin of Error',
            'confidence.marginError': 'Desired Margin of Error',
            'confidence.calculateSampleSize': 'Calculate Required Sample Size',
            'confidence.sampleData': 'Sample Data (comma separated)',
            'confidence.criticalValue': 'Critical Value',
            'confidence.standardError': 'Standard Error',
            'dataAnalysis.title': 'Data Analysis',
            'dataAnalysis.inputMethod': 'Data Input Method',
            'dataAnalysis.manual': 'Manual Input',
            'dataAnalysis.file': 'File Upload',
            'dataAnalysis.aiGenerate': 'AI Generated Data',
            'dataAnalysis.dataInput': 'Data Input',
            'dataAnalysis.analyze': 'Analyze Data',
            'dataAnalysis.reset': 'Reset Analysis',
            'dataAnalysis.fileUpload': 'Upload CSV File',
            'result.mean': 'Mean',
            'result.median': 'Median',
            'result.mode': 'Mode',
            'result.variance': 'Variance',
            'result.std': 'Standard Deviation',
            'result.min': 'Minimum',
            'result.max': 'Maximum',
            'result.count': 'Count',
            'result.sum': 'Sum',
            'result.range': 'Range',
            'result.skewness': 'Skewness',
            'result.kurtosis': 'Kurtosis',
            'result.interpretation': 'Interpretation',
            'z.test': 'Z Test',
            't.test': 'T Test',
            'test.type': 'Test Type',
            'degrees.freedom': 'Degrees of Freedom',
            'z.critical.value': 'Z Critical Value',
            't.critical.value': 'T Critical Value',
            'z.standard.error': 'Z Standard Error',
            't.standard.error': 'T Standard Error',
            'z.margin.error': 'Z Margin of Error',
            't.margin.error': 'T Margin of Error',
            'z.confidence.interval': 'Z Confidence Interval',
            't.confidence.interval': 'T Confidence Interval',
            'population.mean': 'Population Mean',
            'population.std': 'Population Standard Deviation',
            'sample.mean': 'Sample Mean',
            'sample.std': 'Sample Standard Deviation',
            'sample.size': 'Sample Size',
            'confidence.level': 'Confidence Level',
            'language.switch': 'Language',
            'language.zh': '中文',
            'language.en': 'English',
            'ai.generate.data': 'AI Generate Data',
            'ai.test.connection': 'Test Connection',
            'ai.save.api.key': 'Save & Use AI',
            'ai.api.key': 'API Key',
            'ai.connection.status': 'Connection Status',
            'ai.connection.success': '✅ Connection Successful!',
            'ai.connection.failed': '❌ Connection Failed:',
            'ai.connection.testing': 'Testing Connection...',
            'ai.api.key.saved': '✅ API Key Saved!',
            'ai.enter.api.key': 'Please enter API Key',
            'ai.error': '❌ Error:',
            'chart.normal.distribution': 'Normal Distribution',
            'chart.binomial.distribution': 'Binomial Distribution',
            'chart.poisson.distribution': 'Poisson Distribution',
            'chart.uniform.distribution': 'Uniform Distribution',
            'chart.data': 'Data',
            'chart.mean': 'Mean',
            'chart.std': 'Standard Deviation',
            'chart.value': 'Value',
            'chart.frequency': 'Frequency',
            'chart.probability': 'Probability',
            'chart.density': 'Density',
            'chart.percentage': 'Percentage',
            'chart.count': 'Count',
            'chart.population.mean': 'Population Mean',
            'chart.sample.mean': 'Sample Mean',
            'chart.confidence.interval': 'Confidence Interval',
            'chart.lower.bound': 'Lower Bound',
            'chart.upper.bound': 'Upper Bound',
            'chart.t.test.lower.bound': 'T Test Lower Bound',
            'chart.t.test.upper.bound': 'T Test Upper Bound',
            'chart.main.lower.bound': 'Main Lower Bound',
            'chart.main.upper.bound': 'Main Upper Bound',
            'chart.sampling.distribution': 'Sampling Distribution',
            'chart.t.test.reference': 'T Test Reference Confidence Interval',
            // 动态内容翻译键
            'stats.min': 'Minimum',
            'stats.max': 'Maximum',
            'stats.q1': 'First Quartile',
            'stats.q3': 'Third Quartile',
            'stats.iqr': 'Interquartile Range',
            'stats.sample.size': 'Sample Size',
            'stats.mean': 'Mean',
            'stats.median': 'Median',
            'stats.variance': 'Variance',
            'stats.std.dev': 'Standard Deviation',
            'stats.critical.value': 'Critical Value',
            'stats.standard.error': 'Standard Error',
            'stats.margin.error': 'Margin of Error',
            'stats.lower.bound': 'Lower Bound',
            'stats.upper.bound': 'Upper Bound',
            'stats.confidence.interval': 'Confidence Interval',
            'stats.required.sample.size': 'Required Sample Size',
            'stats.z.score': 'Z Score',
            'stats.analysis.method': 'Analysis Method',
            'stats.sample.mean': 'Sample Mean',
            'stats.sample.std': 'Sample Standard Deviation',
            'stats.population.mean': 'Population Mean',
            'stats.population.std': 'Population Standard Deviation',
            'stats.degrees.freedom': 'Degrees of Freedom',
            'stats.contains.true.mean': 'True Mean Containment',
            'stats.contains.true.mean.yes': 'Interval Contains True Mean',
            'stats.contains.true.mean.no': 'Interval Does Not Contain True Mean',
            'stats.actual.population.mean': 'Actual Population Mean',
            'stats.t.test.reference': 'Reference: T-Test Results with Sample Standard Deviation',
            'stats.t.method': 'Method',
            'stats.t.critical.value': 'T Critical Value',
            'stats.t.standard.error': 'T Standard Error',
            'stats.t.margin.error': 'T Margin of Error',
            'stats.t.confidence.interval': 'T Confidence Interval',
            'stats.cohens.d': "Cohen's d",
            'stats.effect.size.smallest': 'Tiny Effect',
            'stats.effect.size.small': 'Small Effect',
            'stats.effect.size.medium': 'Medium Effect',
            'stats.effect.size.large': 'Large Effect',
            'stats.effect.size.analysis': 'Effect Size Analysis',
            'stats.practical.application': 'Practical Application Suggestions',
            'stats.increase.sample.size': 'Consider increasing sample size for more precise estimates',
            'stats.current.margin.error': 'Current margin of error is',
            'stats.adjust.confidence.level': 'You can adjust confidence level based on actual needs',
            'stats.common.confidence.level': 'Currently using the commonly used 95% confidence level, which is considered a reasonable balance between precision and reliability in most statistical analyses.',
            'stats.selected.confidence.level': 'You selected a {confidenceLevel}% confidence level, which means there is a {(1 - {confidenceLevel}/100) * 100}% probability that the interval does not contain the true population mean.',
            'chart.distribution.histogram': '{distribution} Distribution Histogram (Sample Size: {sampleSize})',
            'chart.distribution.frequency': '{distribution} Distribution Frequency',
            'chart.temporal.analysis': 'Temporal Analysis - Daily Cases',
            'chart.group.analysis': 'Group Analysis - Cases by Type',
            'chart.residence.analysis': 'Residence Analysis - Cases by Residence Type',
            'chart.positivity.analysis': 'Positivity Analysis - Daily Positivity Rate',
            'chart.positive.cases': 'Positive Cases',
            'chart.daily.positive.cases': 'Daily Positive Cases',
            'chart.negative.tests': 'Negative Tests',
            'chart.positivity.rate': 'Positivity Rate (%)',
            'alert.please.select.file': 'Please select a file first.',
            'alert.invalid.distribution.parameters': 'Invalid distribution parameters',
            'alert.invalid.normal.distribution': 'Invalid normal distribution parameters',
            'alert.invalid.binomial.distribution': 'Invalid binomial distribution parameters',
            'alert.invalid.poisson.distribution': 'Invalid Poisson distribution parameters',
            'alert.invalid.uniform.distribution': 'Invalid uniform distribution parameters',
            'alert.invalid.exponential.distribution': 'Invalid exponential distribution parameters',
            'alert.please.enter.sample.data': 'Please enter sample data',
            'alert.invalid.population.std': 'Please enter a valid population standard deviation',
            'alert.invalid.parameters': 'Please enter valid parameters',
            'alert.please.select.valid.data.method': 'Please select a valid data input method',
            'alert.could.not.parse.sample.data': 'Could not parse sample data, please ensure correct format',
            'alert.please.enter.api.key': 'Please enter API key',
            'alert.invalid.sample.size': 'Please enter a valid sample size (100-10000)',
            'loading.generating.data': 'Generating data...',
            'loading.data.generation.complete': 'Data generation complete!',
            'loading.connecting': 'Connecting...',
            'loading.connection.failed': 'Connection failed:',
            'loading.error': 'Error:',
            'chart.distribution.info.normal': 'Normal distribution (Gaussian distribution) is a continuous probability distribution with a bell-shaped curve, symmetric around the mean. Commonly used for natural phenomena, measurement errors, etc.',
            'chart.distribution.info.binomial': 'Binomial distribution is used to model the probability of success counts in a fixed number of independent trials. Each trial has only two possible outcomes: success or failure.',
            'chart.distribution.info.poisson': 'Poisson distribution is used to model the number of events occurring in a fixed time or space, suitable for scenarios where events occur randomly and independently at a known average rate.',
            'chart.distribution.info.exponential': 'Exponential distribution is used to model time intervals between independent events, has the memoryless property, and is commonly used in reliability analysis and queueing theory.',
            'chart.distribution.info.uniform': 'Uniform distribution is a continuous probability distribution where each value within an interval has an equal probability of being selected.',
            'confidence.interpretation.statistical': 'Statistical Interpretation',
            'confidence.interpretation.methodological': 'Methodological Notes',
            'confidence.interpretation.based.on': 'Based on calculations from {sampleSize} samples',
            'confidence.interpretation.margin.error': 'Margin of error is {marginError}, indicating estimation uncertainty',
            'confidence.interpretation.confident': 'We are {confidenceLevel}% confident that the true population mean falls within the interval [{lowerBound}, {upperBound}].',
            'confidence.interpretation.using': 'Used {method} for analysis',
            'sample.size.explanation': 'To achieve a {confidenceLevel}% confidence level and {marginError} margin of error, assuming a population standard deviation of {populationStd}, you need at least {sampleSize} samples.',
            'sample.size.explanation.title': 'Explanation',
            'button.calculate.test': 'Calculate Hypothesis Test',
            'button.clear.test.results': 'Clear Results',
            'alert.failed.to.create.chart': 'Failed to create chart',
            'alert.failed.to.generate.data': 'Failed to generate data',
            'alert.failed.to.calculate.sample.size': 'Failed to calculate sample size',
            'alert.failed.to.calculate.confidence.interval': 'Failed to calculate confidence interval',
            'alert.failed.to.generate.sample': 'Failed to generate sample',
            'tooltip.frequency': 'Frequency: {frequency} (Count: {count})',
            'distribution.analysis.results': 'Distribution Analysis Results'
        }
    },
    
    // 初始化函数
    init() {
        // 从本地存储读取用户语言偏好
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && ['zh', 'en'].includes(savedLang)) {
            this.currentLanguage = savedLang;
        } else {
            // 检测浏览器语言
            const browserLang = navigator.language || navigator.userLanguage;
            this.currentLanguage = browserLang.startsWith('zh') ? 'zh' : 'en';
        }
        
        // 设置HTML文档语言
        document.documentElement.lang = this.currentLanguage;
        
        // 翻译页面内容
        this.translatePage();
    },
    
    // 切换语言
    switchLanguage(lang) {
        if (lang && ['zh', 'en'].includes(lang) && lang !== this.currentLanguage) {
            this.currentLanguage = lang;
            
            // 保存到本地存储
            localStorage.setItem('preferredLanguage', lang);
            
            // 更新HTML文档语言
            document.documentElement.lang = lang;
            
            // 翻译页面内容
            this.translatePage();
            
            // 通知页面更新图表和数据显示
            this.notifyLanguageChange();
        }
    },
    
    // 翻译页面内容
    translatePage() {
        // 翻译带有data-i18n属性的元素
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (key && this.translations[this.currentLanguage][key]) {
                element.textContent = this.translations[this.currentLanguage][key];
            }
        });
        
        // 翻译title
        const titleKey = document.title.replace(/统计分布模拟分析工具|Statistical Distribution Simulation Tool/g, '');
        if (titleKey) {
            document.title = this.translations[this.currentLanguage]['app.title'] + titleKey;
        } else {
            document.title = this.translations[this.currentLanguage]['app.title'];
        }
        
        // 翻译placeholder属性
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (key && this.translations[this.currentLanguage][key]) {
                element.placeholder = this.translations[this.currentLanguage][key];
            }
        });
        
        // 翻译aria-label属性
        document.querySelectorAll('[data-i18n-aria]').forEach(element => {
            const key = element.getAttribute('data-i18n-aria');
            if (key && this.translations[this.currentLanguage][key]) {
                element.setAttribute('aria-label', this.translations[this.currentLanguage][key]);
            }
        });
        
        // 触发图表和动态内容更新
        this.updateDynamicContent();
    },
    
    // 更新动态内容
    updateDynamicContent() {
        // 通知所有模块更新语言
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: this.currentLanguage } }));
        
        // 重新绘制图表
        if (window.redrawCharts) {
            window.redrawCharts();
        }
        
        // 重新生成置信区间分析结果（如果已存在）
        const confidenceResultsContainer = document.getElementById('confidence-results');
        if (confidenceResultsContainer && !confidenceResultsContainer.classList.contains('hidden')) {
            // 尝试重新生成分析结果
            const confidenceModule = window.confidenceIntervalModule;
            if (confidenceModule && confidenceModule.lastResult) {
                confidenceModule.displayConfidenceResults(confidenceModule.lastResult);
                confidenceModule.generateInterpretation(confidenceModule.lastResult);
            }
        }
        
        // 重新生成样本量计算结果（如果已存在）
        const sampleSizeResultContainer = document.getElementById('sample-size-result');
        if (sampleSizeResultContainer && !sampleSizeResultContainer.classList.contains('hidden')) {
            // 尝试重新计算样本量（需要保存之前的参数）
            const confidenceModule = window.confidenceIntervalModule;
            if (confidenceModule && confidenceModule.recalculateSampleSize) {
                confidenceModule.recalculateSampleSize();
            }
        }
    },
    
    // 翻译单个文本
    t(key, variables = {}) {
        let text = this.translations[this.currentLanguage][key] || key;
        
        // 处理变量替换
        for (const [varName, value] of Object.entries(variables)) {
            const regex = new RegExp(`\\{${varName}\\}`, 'g');
            text = text.replace(regex, value);
        }
        
        return text;
    },
    
    // 通知语言变更
    notifyLanguageChange() {
        // 语言变更通知已经在switchLanguage中通过updateDynamicContent处理
    },
    
    // 初始化语言切换按钮
    initLanguageSwitcher() {
        // 创建语言切换按钮
        const header = document.querySelector('header');
        if (header) {
            const languageSwitcher = document.createElement('div');
            languageSwitcher.id = 'language-switcher';
            languageSwitcher.style.position = 'absolute';
            languageSwitcher.style.right = '20px';
            languageSwitcher.style.top = '50%';
            languageSwitcher.style.transform = 'translateY(-50%)';
            languageSwitcher.style.display = 'flex';
            languageSwitcher.style.alignItems = 'center';
            languageSwitcher.style.gap = '10px';
            
            // 语言切换下拉菜单
            const select = document.createElement('select');
            select.style.padding = '5px 10px';
            select.style.borderRadius = '4px';
            select.style.border = '1px solid rgba(255, 255, 255, 0.3)';
            select.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
            select.style.color = 'white';
            select.style.fontSize = '14px';
            select.style.cursor = 'pointer';
            select.style.minWidth = '100px';
            select.style.outline = 'none';
            // 确保下拉菜单中的选项文字可读
            select.style.color = '#000000'; // 设置文字颜色为黑色
            select.style.backgroundColor = '#ffffff'; // 设置背景为白色
            
            // 添加选项
            const zhOption = document.createElement('option');
            zhOption.value = 'zh';
            zhOption.textContent = this.translations['zh']['language.zh'];
            zhOption.selected = this.currentLanguage === 'zh';
            
            const enOption = document.createElement('option');
            enOption.value = 'en';
            enOption.textContent = this.translations['zh']['language.en'];
            enOption.selected = this.currentLanguage === 'en';
            
            select.appendChild(zhOption);
            select.appendChild(enOption);
            
            // 添加语言标签
            const langLabel = document.createElement('span');
            langLabel.style.color = 'white';
            langLabel.style.fontSize = '14px';
            langLabel.style.fontWeight = '500';
            langLabel.textContent = this.translations[this.currentLanguage]['language.switch'] + ':';
            
            // 添加到切换器
            languageSwitcher.appendChild(langLabel);
            languageSwitcher.appendChild(select);
            
            // 添加到头部
            header.appendChild(languageSwitcher);
            
            // 监听切换事件
            select.addEventListener('change', (e) => {
                this.switchLanguage(e.target.value);
                // 更新选项文本为当前语言
                zhOption.textContent = this.translations[this.currentLanguage]['language.zh'];
                enOption.textContent = this.translations[this.currentLanguage]['language.en'];
                langLabel.textContent = this.translations[this.currentLanguage]['language.switch'] + ':';
            });
        }
    }
};

// 页面加载时初始化
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        // 初始化语言系统
        i18n.init();
        i18n.initLanguageSwitcher();
    });
}