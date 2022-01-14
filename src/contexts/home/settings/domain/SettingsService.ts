import Setting from './Setting';

interface SettingsService {
  getSettings(): Promise<Setting[]>;
}

export default SettingsService;
