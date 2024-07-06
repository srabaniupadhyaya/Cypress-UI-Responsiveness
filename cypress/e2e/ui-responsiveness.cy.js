describe('Test UI responsiveness', () => {

  specify('Responsiveness on Ipad', () => {
     // Set viewport to 768px x 1024px
    cy.viewport(768, 1024)
    // Set viewport to presets
   // cy.viewport('ipad-2') 
    cy.visit('https://dribbble.com/')
  })

  specify('Responsiveness on Mobile', () => {
    // Set viewport to Iphone preset
   cy.viewport('iphone-8')
   cy.visit('https://dribbble.com/')
 })

})