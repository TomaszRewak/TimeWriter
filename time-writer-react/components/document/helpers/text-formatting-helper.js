import TextNavigationService from "../../../../time-writer-event-sourcing/services/text-navigation-service";

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
	constructor() {
		this._textNavigationService = new TextNavigationService();
	}

	applyFormattingRules(text) {
		if (!text)
			return [];

		var matches = this._applyPatternRules(text, 0, text.length);

		matches.reduce((column, match) => {
			match.width = this._textNavigationService.getFragmentWidth(match.text, 0, match.text.length, column);
			return column + match.width;
		}, 0);

		return matches;
	}

	_applyPatternRules(text, start, end) {
		const fragment = text.substring(start, end);

		for (const rule of patternRules) {
			const match = rule.pattern.exec(fragment);

			if (!match)
				continue;

			const matchStart = start + match[0].index;
			const matchEnd = matchStart + match[0].length;

			return [
				this._applyPatternRules(text, start, matchStart),
				{ text: fragment, type: rule.type },
				this._applyPatternRules(text, matchEnd, end)
			].flat();
		}

		return this._applyLooseRules(text);
	}

	_applyLooseRules(text, start, end) {
		const fragment = text.substring(start, end);

		for (const rule of looseRules) {
			for (const pattern of rule.patterns) {
				if (!fragment.includes(pattern))
					continue;

				const [head, ...tail] = fragment
					.split(pattern)
					.map(textBetween => this._applyLooseRules(textBetween));

				return [
					head,
					...tail.map(elementsBetween => [{ text: pattern, type: rule.type }, ...elementsBetween])
				].flat();
			}
		}

		return this._applyStrictRules(text);
	}

	_applyStrictRules(text) {
		for (const rule of strictRules) {
			for (const pattern of rule.patterns) {
				if (text !== pattern)
					continue;

				return [{ text: pattern, type: rule.type }];
			}
		}

		return this._applyDefaultRule(text);
	}

	_applyDefaultRule(text) {
		if (!text)
			return [];

		return [{ text: text, type: 'plain' }];
	}
}