Feature:
As a user
I want to navigate to the Calorie Calculator Home 
from there go the BMI Calculator so that I can calculate and verify BMI and BMI Category based on inputs provided

Scenario: Enter BMI details
Given the user launches to Calorie home Page
When the user clicks on the BMI link
And the user provides the age as 50
And the user provides the heightmeter as 6
And the user provides the weight as 80
And the user selects the sex as male
And the user performs BMI Calculation
Then the user should be given the BMI Value
And the user should be given the BMI Category
And the user verifies the BMI Category

@fourargs
Scenario Outline: Enter BMI details with multiple sets of data
Given the user launches to Calorie home Page
When the user clicks on the BMI link
And the user provides the age as <age>
And the user provides the heightmeter as <heightmeter>
And the user provides the weight as <weight>
And the user selects the sex as <gender>
And the user performs BMI Calculation
Then the user should be given the BMI Value
And the user should be given the BMI Category
And the user verifies the BMI Category
Examples:
|age|heightmeter|weight|gender|
|45|5|70|female|
|50|6|80|male|

Scenario: Enter BMI details
Given the user launches to Calorie home Page
When the user clicks on the BMI link
And the user provides the following details 
|age|heightmeter|weight|sex|
|50|6|80|male|
And the user performs BMI Calculation
Then the user should be given the BMI Value
And the user should be given the BMI Category
And the user verifies the BMI Category

Scenario: Enter BMI details as Positional Parameters
Given the user launches to Calorie home Page
When the user clicks on the BMI link
And the user provides age as 50, height as 6, weight as 80, sex as male
And the user performs BMI Calculation
Then the user should be given the BMI Value
And the user should be given the BMI Category
And the user verifies the BMI Category