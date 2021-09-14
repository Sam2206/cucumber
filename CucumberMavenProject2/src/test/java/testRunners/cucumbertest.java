package testRunners;
import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="classpath:features",
		glue="stepDefinitions"
//				plugin = {"pretty:src/cucumberReports/creports.txt",
//						"html:src/cucumberReports/htmlreports",
//						"usage:src/cucumberReports/cucumber.json",
//						"junit:src/cucumberReports/cucumber-results.xml"
//						}
	)
public class cucumbertest {

}
