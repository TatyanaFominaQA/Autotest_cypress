describe('Тестирование авторизации на Staya', function () {
   it('Проверка, что работает авторизация при введении правильного логина и пароля', function () {
        cy.visit('https://staya.dog/');
        cy.get('.header-bottom__right--link').click();
        cy.get('.auth-form > form > [type="email"]').type('ms.sotnikova97@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('JFH-BFA-KeG-6w6').type('{enter}');
        cy.contains('Мои заказы');
    })
    
    it('Проверка, что не работает авторизация при введении не правильного логина', function () {
        cy.get('button.profile__nav-link').click({ multiple: true });
        cy.get('.box__button_ok').click({ multiple: true });
        cy.get('.header-bottom__right--link').click({ multiple: true });
        cy.get('.auth-form > form > [type="email"]').type('ms.sotnikova93@mail.ru');
        cy.get('.auth-form > form > [type="password"]').type('JFH-BFA-KeG-6w6').type('{enter}');
        cy.get('.auth-form > form > [type="password"]').type('JFH-BFA-KeG-6w6').type('{enter}');
        cy.contains('Мои заказы');
    
    })
    
})