package stepDefinitions;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class CalorieStepDefinitions {
	@Before
	public void BeforeEveryScenario(){
		System.out.println("========================================");
		System.out.println("Executing Before Every Scenario");
		System.out.println("========================================");
		System.out.println("");
	}

	@After
	public void AfterEveryScenario(){
		System.out.println("========================================");
		System.out.println("Executing After Completing Execution of Every Scenario");
		System.out.println("========================================");
		System.out.println("");
	}

	@Before("@fourargs")
	public void BeforeFourArgsScenario(){
		System.out.println("========================================");
		System.out.println("Executing Before fourargs Scenario");
		System.out.println("========================================");
		System.out.println("");
	}

	@After("@fourargs")
	public void AfterfourargsScenario(){
		System.out.println("========================================");
		System.out.println("Executing After Completing Execution of foura");
	}
	
	
	@Given("^the user launches to Calorie home Page$")
	public void the_user_launches_to_Calorie_home_Page() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the user launches to Calorie home Page");
	}

	@When("^the user clicks on the BMI link$")
	public void the_user_clicks_on_the_BMI_link() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the user clicks on the BMI link");
	}

	@When("^the user provides the age as ([^\"]*)$")
	public void the_user_provides_the_age_as(String age) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the user provides the age as " + age);
	}

	@When("^the user provides the heightmeter as ([^\"]*)$")
	public void the_user_provides_the_heightmeter_as(String heightmeter) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the user provides the heightmeter as " + heightmeter );
		
	}

	@When("^the user provides the weight as (\\d+)$")
	public void the_user_provides_the_weight_as(int arg1) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the user provides the weight as " + arg1);
	}

	@When("^the user selects the sex as ([^\"]*)$")
	public void the_user_selects_the_sex_as_female(String gender) throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the user selects the sex as " + gender);
	}
	
	@When("the user provides the following details")
	public void the_user_provides_following_details(DataTable dataTable)throws Throwable {
//		List<CalorieDetails> calorieDetailsList=dataTable.asList(CalorieDetails.class);
//		CalorieDetails calorieDetails=calorieDetailsList.get(0);
		String age=dataTable.cell(1,0);
		String height=dataTable.cell(1, 1);
		String weight=dataTable.cell(1, 2);
		String sex=dataTable.cell(1, 3);
		System.out.println("------------------------------");
		System.out.println("Age is "+age+" height is "+height+" weight is "+weight+" sex is "+sex);
		System.out.println("------------------------------");
//		System.out.println(dataTable);
	}

	
	

	@When("the user provides age as (\\d+), height as (\\d+), weight as (\\d+), sex as (.*?)$")
	public void the_user_provides_age_as_height_as_weight_as_sex_as_male(Integer int1, Integer int2, Integer int3, String s) {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println(int1+" "+int2+" "+int3+" "+s);
	}
	
	@When("^the user performs BMI Calculation$")
	public void the_user_performs_BMI_Calculation() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the user performs BMI Calculation");
	}

	@Then("^the user should be given the BMI Value$")
	public void the_user_should_be_given_the_BMI_Value() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the user should be given the BMI Value");
	}

	@Then("^the user should be given the BMI Category$")
	public void the_user_should_be_given_the_BMI_Category() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the user should be given the BMI Category");
	}

	@Then("^the user verifies the BMI Category$")
	public void the_user_verifies_the_BMI_Category() throws Exception {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("the user verifies the BMI Category");
	}



}
