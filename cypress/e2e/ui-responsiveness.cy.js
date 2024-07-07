describe('Test UI responsiveness', () => {
  const ipadPresets=['ipad-2','ipad-mini']
  const mobilePresets=['iphone-3','iphone-4','iphone-5','samsung-s10']

  specify('Responsiveness on Ipad', () => {
     // Set viewport to 768px x 1024px
   // cy.viewport(768, 1024)
    // Set viewport to presets
   // cy.viewport('ipad-2') 
   ipadPresets.forEach((views=>
    {
      //cy.viewport(views) 
      //cy.viewport(views, "portrait") fot orientation
      cy.viewport(views, "landscape")
      cy.visit('https://dribbble.com/')
      //Assertion for responsiveness for mobile
      cy.get('.nav-v2-search').should('not.have.attr',"placeholder")
    }
   ))

  })

  specify('Responsiveness on Mobile', () => {
 
    mobilePresets.forEach((views=>
    {
    // Set viewport to Iphone preset
    //cy.viewport('iphone-8')
      cy.viewport(views)
      cy.visit('https://dribbble.com/')
      //Assertion for responsiveness for mobile
      cy.get('.nav-v2-search').should('not.have.attr',"placeholder")

    }
  ))

})
})