Feature: Login EventHub WebSite
  @smoke @regression @TC001
  Scenario: Login with Valid Creds
    Given I launch the browser and enter the URL
    When I Enter Valid Username
    When I Enter Valid Password
    When I Click on Login button
    Then I should be able to see the Home Page 


  @negative @TC002
  Scenario: Login with invalid credentials
    Given I launch the browser and enter the URL
    When I enter invalid username and password
    When I Click on Login button
    Then I should see an error message