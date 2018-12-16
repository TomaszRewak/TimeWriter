const formattingRules = [
	{
		pattern: /\/\/.*/,
		type: 'comment'
	},
	{
		pattern: /"[^"]*"/,
		type: 'string'
	},
	{
		prefix: /\s|^/,
		postfix: /\s|$/,
		pattern: /if|for|while|foreach/,
		type: 'statement'
	},
	{
		pattern: /[\(\)\{\}\[\]]/,
		type: 'bracket'
	},
	{
		pattern: / /,
		type: 'space'
	},
	{
		pattern: /\t/,
		type: 'tab'
	},
	{
		pattern: /bool/,
		type: ''
	},
	{
		pattern: /class/,
		type: ''
	},
	{
		pattern: /int/,
		type: ''
	},
	{
		pattern: /==/,
		type: ''
	},
];

export default class TextFormattingHelper {
	static applyFormattingRules(text) {
		if (!text)
			return [];

		for (let rule of formattingRules) {
			const match = new RegExp(rule.pattern).exec(text);

			if (!match)
				continue;

			console.dir(match)

			const matchText = match[0];
			const startIndex = match.index;
			const endIndex = startIndex + matchText.length;

			return [
				TextFormattingHelper.applyFormattingRules(text.substring(0, startIndex)),
				{ text: matchText, type: rule.type },
				TextFormattingHelper.applyFormattingRules(text.substring(endIndex, text.length))
			].flat();
		}

		return [
			{ text: text, type: 'plain' }
		];
	}
}