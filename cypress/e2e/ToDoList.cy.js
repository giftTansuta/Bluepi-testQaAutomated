describe('Test Todo List website', () => {
  it('Todo List website', () => {
    cy.visit('https://abhigyank.github.io/To-Do-List')

    addItem()
    toDoTask()
    completed()
  })
})

const addItem = () => {
  cy.get('#new-task').click().type("Write testcase");
  cy.get('.mdl-button').click()
  cy.get('#new-task').click().type("Test manual");
  cy.get('#add-item > .mdl-button').click()
  cy.get('#new-task').click().type("User manual document");
  cy.get('#add-item > .mdl-button').click()
}
const toDoTask = () => {
  cy.get('[href="#todo"] > .mdl-tabs__ripple-container').click()
  cy.wait(500);
  cy.get('#text-1').contains("Write testcase")
  cy.get('#text-2').contains("Test manual")
  cy.get('#text-3').contains("User manual document")
  cy.get(':nth-child(1) > .mdl-button > .mdl-button__ripple-container').click()
  cy.get('[href="#add-item"] > .mdl-tabs__ripple-container').click()
  cy.get('#new-task').click().type("automated cypress");
  cy.get('#add-item > .mdl-button').click()
  cy.get('[href="#todo"] > .mdl-tabs__ripple-container').click()
  cy.wait(500);
  cy.get('#text-3').contains("automated cypress")
  cy.get(':nth-child(1) > .mdl-checkbox > .mdl-checkbox__ripple-container').click()
  cy.get(':nth-child(1) > .mdl-checkbox > .mdl-checkbox__ripple-container').click()
}
const completed = () => {
  cy.get('[href="#completed"] > .mdl-tabs__ripple-container').click()
  cy.get(':nth-child(1) > .mdl-list__item-primary-content').contains("Test manual")
  cy.get(':nth-child(2) > .mdl-list__item-primary-content').contains("User manual document")
  cy.get('#completed-tasks > :nth-child(2)').click()
}