describe('Alerts', () => {
  it('js alerts', () => {
    cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

    cy.get('button[onclick="jsAlert()"]').click()
    cy.on('window:alert',(t)=>{
      expect(t).to.contains('I am a JS Alert')
    })
    cy.get('#result').should('have.text','You successfully clicked an alert')
    cy.on('window:alert',(t)=>{
      expect(t).to.contains('I am a JS Comfirm')
    })
  
  
    cy.get('#result').should('have.text','You clicked:Ok')
  })
})