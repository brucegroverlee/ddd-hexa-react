class Jukebox {
  public id: string;
  public classicAudioMixer: string;
  public musicplayerSyncEnabled: boolean;
  public mixerAuxEnabled: boolean;
  public bgmModeEnabled: boolean;

  constructor() {
    this.id = '';
    this.classicAudioMixer = '';
    this.musicplayerSyncEnabled = false;
    this.mixerAuxEnabled = false;
    this.bgmModeEnabled = false;
  }
}

export default Jukebox;
