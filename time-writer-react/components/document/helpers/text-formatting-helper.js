const patternRules = [
	{
		pattern: /\/\/.*/,
		type: 'comment'
	},
	{
		pattern: /"[^"]*"/,
		type: 'string'
	},
	{
		pattern: /'[^']*'/,
		type: 'string'
	}
];

const looseRules = [
	{
		patterns: [' '],
		type: 'space'
	},
	{
		patterns: ['\t'],
		type: 'tab'
	},
	{
		patterns: ['(', ')', '[', ']', '{', '}', '<', '>'],
		type: 'bracket'
	},
	{
		patterns: ['=', '!', '|', '%', '&', '^', '$', '*', '+', '-', '.', '/', ',', ':'],
		type: 'operator'
	},
];

const strictRules = [
	{
		patterns: ['if', 'else', 'for', 'while', 'foreach', 'class', 'function', 'constructor', 'return', 'export', 'default', 'import', '#include', 'from', 'in', 'of'],
		type: 'statement'
	},
	{
		patterns: ['bool', 'void', 'int', 'double', 'float', 'var', 'const', 'let', 'auto'],
		type: 'type'
	}
];

export default class TextFormattingHelper {
	static applyDefaultRule(text) {
		if (!text)
			return [];

		return [{ text: text, type: 'plain' }];
	}

	static applyStrictRules(text) {
		for (const rule of strictRules) {
			for (const pattern of rule.patterns) {
				if (text !== pattern)
					continue;

				return [{ text: pattern, type: rule.type }];
			}
		}

		return TextFormattingHelper.applyDefaultRule(text);
	}

	static applyLooseRules(text) {
		for (const rule of looseRules) {
			for (const pattern of rule.patterns) {
				if (!text.includes(pattern))
					continue;

				const [head, ...tail] = text
					.split(pattern)
					.map(fragment => TextFormattingHelper.applyLooseRules(fragment));

				return [
					head,
					...tail.map(fragment => [{ text: pattern, type: rule.type }, ...fragment])
				].flat();
			}
		}

		return TextFormattingHelper.applyStrictRules(text);
	}

	static applyPatternRules(text) {
		for (const rule of patternRules) {
			const match = rule.pattern.exec(text);

			if (!match)
				continue;

			const matchText = match[0];
			const startIndex = match.index;
			const endIndex = startIndex + matchText.length;

			return [
				TextFormattingHelper.applyPatternRules(text.substring(0, startIndex)),
				{ text: matchText, type: rule.type },
				TextFormattingHelper.applyPatternRules(text.substring(endIndex, text.length))
			].flat();
		}

		return TextFormattingHelper.applyLooseRules(text);
	}

	static applyFormattingRules(text) {
		if (!text)
			return [];

		return this.applyPatternRules(text);
	}
}