import TextNavigationService from '../../../time-writer-event-sourcing/services/text-navigation-service'

describe('TextNavigationService test', function () {
	it('countLines with empty string', function () {
		const service = new TextNavigationService();
		const text = '';

		const lines = service.countLines(text);

		expect(lines).toBe(1);
	});

	it('countLines with one line', function () {
		const service = new TextNavigationService();
		const text = 'Some text';

		const lines = service.countLines(text);

		expect(lines).toBe(1);
	});

	it('countLines with three line', function () {
		const service = new TextNavigationService();
		const text = 'Some text \n More text \n And some more';

		const lines = service.countLines(text);

		expect(lines).toBe(3);
	});

	it('getCaretCoordinates start of first line', function () {
		const service = new TextNavigationService();
		const text = '0123456789\n0123\n0123456';
		const position = 0;

		const coordinates = service.getCaretCoordinates(0);

		expect(coordinates).toEqual({line: 0, column: 0});
	})

	it('getCaretCoordinates center of first line', function () {
		const service = new TextNavigationService();
		const text = '0123456789\n0123\n0123456';
		const position = 0;

		const coordinates = service.getCaretCoordinates(text, position);

		expect(coordinates).toEqual({line: 0, column: 0});
	})

	it('getCaretCoordinates end of first line', function () {
		const service = new TextNavigationService();
		const text = '0123456789\n0123\n0123456';
		const position = 10;

		const coordinates = service.getCaretCoordinates(text, position);

		expect(coordinates).toEqual({line: 0, column: 10});
	})

	it('getCaretCoordinates start of second line', function () {
		const service = new TextNavigationService();
		const text = '0123456789\n0123\n0123456';
		const position = 11;

		const coordinates = service.getCaretCoordinates(text, position);

		expect(coordinates).toEqual({line: 1, column: 0});
	})

	it('getCaretCoordinates beyond end', function () {
		const service = new TextNavigationService();
		const text = '0123456789\n0123\n0123456';
		const position = 100;

		const coordinates = service.getCaretCoordinates(text, position);

		expect(coordinates).toEqual({line: 2, column: 7});
	})

	it('getCaretPosition start', function () {
		const service = new TextNavigationService();
		const text = '0123456789\n0123\n0123456';
		const coordinates = { line: 0, column: 0 };

		const position = service.getCaretPosition(text, coordinates);

		expect(position).toEqual(0);
	})

	it('getCaretPosition middle of first line', function () {
		const service = new TextNavigationService();
		const text = '0123456789\n0123\n0123456';
		const coordinates = { line: 0, column: 4 };

		const position = service.getCaretPosition(text, coordinates);

		expect(position).toEqual(4);
	})

	it('getCaretPosition end of first line', function () {
		const service = new TextNavigationService();
		const text = '0123456789\n0123\n0123456';
		const coordinates = { line: 0, column: 10 };

		const position = service.getCaretPosition(text, coordinates);

		expect(position).toEqual(10);
	})

	it('getCaretPosition start of second line', function () {
		const service = new TextNavigationService();
		const text = '0123456789\n0123\n0123456';
		const coordinates = { line: 1, column: 0 };

		const position = service.getCaretPosition(text, coordinates);

		expect(position).toEqual(11);
	})

	it('beyond end of second line', function () {
		const service = new TextNavigationService();
		const text = '0123456789\n0123\n0123456';
		const coordinates = { line: 1, column: 100 };

		const position = service.getCaretPosition(text, coordinates);

		expect(position).toEqual(15);
	})

	it('beyond lines', function () {
		const service = new TextNavigationService();
		const text = '0123456789\n0123\n0123456';
		const coordinates = { line: 10, column: 2 };

		const position = service.getCaretPosition(text, coordinates);

		expect(position).toEqual(18);
	})
});
