Feature: Add Event End to End flow
    @smoke @regression @TC001
    Scenario: Verify the Add Event Flow End to End
     Given I launch the browser and enter the URL
     When I Enter Valid Username
     When I Enter Valid Password
     When I Click on Login button
     Then I should be able to see the Home Page
     When I Click on Browse Events button
     When I Click on Add Event button
     Then I See Add New Event Page
     When I Enter events details
      | title       | Automation Meetup             |
      | description | Hands-on BDD with Playwright  |
      | category    | Conference                    |
      | city        | Pune                        |
      | venue       | Tech Hub                      |
      | dateTime    | 2026-12-15T18:30              |
      | price       | 500                           |
      | totalSeats  | 100                           |
      | imageUrl    | https://picsum.photos/400/300 |
     When I CLick on Add Event button
     Then I should See Event is created successfully