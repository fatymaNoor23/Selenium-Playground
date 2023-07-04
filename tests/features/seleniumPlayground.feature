Feature: Drag and Drop Sliders
  As a user
  I want to be able to drag and drop sliders
  So that I can set specific values

  Scenario: Dragging the slider to set a specific value
    Given User is on the Selenium Playground page
    Then User click 'Drag & Drop Sliders'
    When User select the slider with the label 'Default value 15' and drag to 95
    Then Verify the range value should show 95