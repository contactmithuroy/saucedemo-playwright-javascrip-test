class LoginPage {
  constructor(page) {
    this.page = page;
    this.username = '[data-test="username"]';
    this.password = '[data-test="password"]';
    this.loginBtn = '[data-test="login-button"]';
  }

  async goto() {
    await this.page.goto('/');
  }

  async login(user, pass) {
    await this.page.fill(this.username, user);
    await this.page.fill(this.password, pass);
    await this.page.click(this.loginBtn);
  }
}

module.exports = LoginPage;
