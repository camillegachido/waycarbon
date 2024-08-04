import {
  componentsTestId,
  pagesTestId,
} from '../../src/common/constants/testid';

describe('Post page', () => {
  it('should reply comments', () => {
    cy.visit('/');
    cy.get(`[data-testid=${componentsTestId.loader.container}]`).should(
      'exist'
    );
    cy.get(`[data-testid=${componentsTestId.loader.container}]`).should(
      'not.exist'
    );

    cy.get(`[data-testid=${componentsTestId.comment.container}]`).should(
      'have.length',
      5
    );

    cy.get(
      `[data-testid=${componentsTestId.comment.container}]:first [data-testid=${componentsTestId.comment.replybutton}]`
    ).click();

    cy.get(`[data-testid=${componentsTestId.comment.reply}]`).should('exist');

    const typedText = 'Reply text';
    cy.get(`[data-testid=${componentsTestId.comment.reply}] textarea`).type(
      typedText
    );
    cy.get(
      `[data-testid=${componentsTestId.comment.reply}] [data-testid=${componentsTestId.button.default}]`
    ).click();

    cy.get(`[data-testid=${componentsTestId.comment.reply}]`).should(
      'not.exist'
    );

    const addedComment = `[data-testid=${componentsTestId.comment.container}]:first [data-testid=comment-container]`;

    cy.get(addedComment).should('contains.text', typedText);

    cy.get(
      `${addedComment} [data-testid=${componentsTestId.comment.replybutton}]`
    ).click();

    cy.get(`[data-testid=${componentsTestId.comment.reply}]`).should('exist');
    const typedTextReply = 'Reply to reply text';
    cy.get(`[data-testid=${componentsTestId.comment.reply}] textarea`).type(
      typedTextReply
    );
    cy.get(
      `[data-testid=${componentsTestId.comment.reply}] [data-testid=${componentsTestId.button.default}]`
    ).click();

    cy.get(`[data-testid=${componentsTestId.comment.reply}]`).should(
      'not.exist'
    );

    cy.get(
      `${addedComment} [data-testid=${componentsTestId.comment.container}]`
    ).should('contains.text', typedTextReply);
  });
  it('should show modal when clicking on author comment', () => {
    cy.visit('/');
    cy.get(`[data-testid=${componentsTestId.loader.container}]`).should(
      'exist'
    );
    cy.get(`[data-testid=${componentsTestId.loader.container}]`).should(
      'not.exist'
    );

    cy.get(`[data-testid=${componentsTestId.comment.container}]`).should(
      'have.length',
      5
    );

    cy.get(`[data-testid=${componentsTestId.comment.author}]:first`).click();

    cy.get(
      `[data-testid=${componentsTestId.modal.container}] [data-testid=${componentsTestId.tabs.active}]`
    ).should('not.exist');

    cy.get(
      `[data-testid=${componentsTestId.modal.container}] [data-testid=${componentsTestId.loader.container}]`
    ).should('exist');

    cy.get(
      `[data-testid=${componentsTestId.modal.container}] [data-testid=${componentsTestId.tabs.active}]`
    ).should('exist');

    cy.get(
      `[data-testid=${componentsTestId.modal.container}] [data-testid=${pagesTestId.blog.tabPosts}]`
    ).should('be.visible');

    cy.get(
      `[data-testid=${componentsTestId.modal.container}] [data-testid=${componentsTestId.tabs.default}]:first`
    ).click();

    cy.get(
      `[data-testid=${componentsTestId.modal.container}] [data-testid=${pagesTestId.blog.tabFriends}]`
    ).should('be.visible');
  });
});
