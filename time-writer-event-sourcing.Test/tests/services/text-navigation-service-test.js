import TextNavigationService from './../../../TimeWriter.EventSourcing/services/text-navigation-service';

describe('TextNavigationService test', function () {
	it('countLines with empty string', function () {
		const service = new TextNavigationService();

		const lines = service.countLines('');
		
        expect(lines).toBe(1);
    });

	it('countLines with one line', function () {
		const service = new TextNavigationService();

		const lines = service.countLines('Some text');

		expect(lines).toBe(1);
	});

	it('countLines with three line', function () {
		const service = new TextNavigationService();

		const lines = service.countLines('Some text \n More text \n And some more');

		expect(lines).toBe(3);
	});
});
