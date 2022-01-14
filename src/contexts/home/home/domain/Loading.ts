class Loading {
  private loading: boolean;
  constructor(loading: boolean = false) {
    this.loading = loading;
  }

  public startLoading(): void {
    this.loading = true;
  }

  public stopLoading(): void {
    this.loading = false;
  }

  public isLoading(): boolean {
    return this.loading;
  }
}

export default Loading;
