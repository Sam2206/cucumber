$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CalorieDetails.feature");
formatter.feature({
  "name": "",
  "description": "As a user\nI want to navigate to the Calorie Calculator Home \nfrom there go the BMI Calculator so that I can calculate and verify BMI and BMI Category based on inputs provided",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Enter BMI details",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user launches to Calorie home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_launches_to_Calorie_home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the BMI link",
  "keyword": "When "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_clicks_on_the_BMI_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides the age as 50",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_provides_the_age_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides the heightmeter as 6",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_provides_the_heightmeter_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides the weight as 80",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_provides_the_weight_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects the sex as male",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_selects_the_sex_as_female(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user performs BMI Calculation",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_performs_BMI_Calculation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be given the BMI Value",
  "keyword": "Then "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_should_be_given_the_BMI_Value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be given the BMI Category",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_should_be_given_the_BMI_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the BMI Category",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_verifies_the_BMI_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Enter BMI details with multiple sets of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fourargs"
    }
  ]
});
formatter.step({
  "name": "the user launches to Calorie home Page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user clicks on the BMI link",
  "keyword": "When "
});
formatter.step({
  "name": "the user provides the age as \u003cage\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the user provides the heightmeter as \u003cheightmeter\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the user provides the weight as \u003cweight\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the user selects the sex as \u003cgender\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "the user performs BMI Calculation",
  "keyword": "And "
});
formatter.step({
  "name": "the user should be given the BMI Value",
  "keyword": "Then "
});
formatter.step({
  "name": "the user should be given the BMI Category",
  "keyword": "And "
});
formatter.step({
  "name": "the user verifies the BMI Category",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "age",
        "heightmeter",
        "weight",
        "gender"
      ]
    },
    {
      "cells": [
        "45",
        "5",
        "70",
        "female"
      ]
    },
    {
      "cells": [
        "50",
        "6",
        "80",
        "male"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Enter BMI details with multiple sets of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fourargs"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user launches to Calorie home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_launches_to_Calorie_home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the BMI link",
  "keyword": "When "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_clicks_on_the_BMI_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides the age as 45",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_provides_the_age_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides the heightmeter as 5",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_provides_the_heightmeter_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides the weight as 70",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_provides_the_weight_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects the sex as female",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_selects_the_sex_as_female(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user performs BMI Calculation",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_performs_BMI_Calculation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be given the BMI Value",
  "keyword": "Then "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_should_be_given_the_BMI_Value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be given the BMI Category",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_should_be_given_the_BMI_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the BMI Category",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_verifies_the_BMI_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter BMI details with multiple sets of data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@fourargs"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user launches to Calorie home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_launches_to_Calorie_home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the BMI link",
  "keyword": "When "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_clicks_on_the_BMI_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides the age as 50",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_provides_the_age_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides the heightmeter as 6",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_provides_the_heightmeter_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides the weight as 80",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_provides_the_weight_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user selects the sex as male",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_selects_the_sex_as_female(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user performs BMI Calculation",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_performs_BMI_Calculation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be given the BMI Value",
  "keyword": "Then "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_should_be_given_the_BMI_Value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be given the BMI Category",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_should_be_given_the_BMI_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the BMI Category",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_verifies_the_BMI_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter BMI details",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user launches to Calorie home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_launches_to_Calorie_home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the BMI link",
  "keyword": "When "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_clicks_on_the_BMI_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides the following details",
  "rows": [
    {
      "cells": [
        "age",
        "heightmeter",
        "weight",
        "sex"
      ]
    },
    {
      "cells": [
        "50",
        "6",
        "80",
        "male"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_provides_following_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user performs BMI Calculation",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_performs_BMI_Calculation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be given the BMI Value",
  "keyword": "Then "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_should_be_given_the_BMI_Value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be given the BMI Category",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_should_be_given_the_BMI_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the BMI Category",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_verifies_the_BMI_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Enter BMI details as Positional Parameters",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user launches to Calorie home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_launches_to_Calorie_home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the BMI link",
  "keyword": "When "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_clicks_on_the_BMI_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides age as 50, height as 6, weight as 80, sex as male",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_provides_age_as_height_as_weight_as_sex_as_male(Integer,Integer,Integer,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user performs BMI Calculation",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_performs_BMI_Calculation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be given the BMI Value",
  "keyword": "Then "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_should_be_given_the_BMI_Value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be given the BMI Category",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_should_be_given_the_BMI_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user verifies the BMI Category",
  "keyword": "And "
});
formatter.match({
  "location": "CalorieStepDefinitions.the_user_verifies_the_BMI_Category()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});