import Setting from './Setting';

interface ZoneNamingService {
  getZoneNames(): Promise<Setting>;
}

export default ZoneNamingService;
