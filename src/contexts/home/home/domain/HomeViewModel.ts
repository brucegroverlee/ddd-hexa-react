import Loading from './Loading';
import SessionService from './SessionService';
import User from './User';

class HomeViewModel {
  constructor(
    private loading: Loading,
    private user: User,
    private setUser: (user: User) => void,
    private sessionService: SessionService,
  ) {}

  public isNotReady(): boolean {
    return !this.user || this.loading.isLoading();
  }

  public async initUser(): Promise<void> {
    this.loading.startLoading();

    const newUser = await this.sessionService.getUser();
    this.setUser(newUser);

    this.loading.stopLoading();
  }

  public async updateUser(): Promise<void> {
    this.loading.startLoading();

    const newUser = await this.sessionService.getOtherUser();
    // this.user.setFirstname(newUser.firstname);
    // this.user.setLastname(newUser.lastname);
    this.user.updateProperties(
      newUser.firstname,
      newUser.lastname,
      newUser.money,
    );

    this.loading.stopLoading();
  }
}

export default HomeViewModel;
