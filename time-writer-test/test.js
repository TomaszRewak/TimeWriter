import Jasmine from 'jasmine';
import JasmineConsoleReporter from 'jasmine-console-reporter';

const jasmine = new Jasmine();
const reporter = new JasmineConsoleReporter();

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.env.clearReporters();
jasmine.addReporter(reporter);
jasmine.execute();