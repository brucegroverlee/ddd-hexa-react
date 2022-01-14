import Setting from '../../domain/Setting';
import SettingsService from '../../domain/SettingsService';

const zone_names = [
  { mixer_z1_name: 'Lobby' },
  { mixer_z2_name: undefined },
  { mixer_z3_name: undefined },
  { mixer_z4_name: undefined },
  { mixer_z5_name: undefined },
  { mixer_z6_name: undefined },
];

const data = [
  { mixer_aux_z4_mute: true },
  { mixer_display_volz3_max: 168 },
  { mixer_mic_z3_mute: false },
  { mixer_stereo_z2: true },
  { mixer_stereo_z1: true },
  { mixer_stereo_z3: true },
  { mixer_bgm_z6_mute: false },
  { mixer_display_volz5_max: 179 },
  { mixer_aux_z5_mute: false },
  { mixer_mic_z2_mute: false },
  { mixer_display_volz1_mute: false },
  { mixer_bgm_z5_mute: true },
  { mixer_display_volz3_min: 0 },
  { mixer_aux_enabled: false },
  { mixer_mic_z5_min: 73 },
  { mixer_mic_z1_mute: false },
  { mixer_aux_z6_mute: true },
  { mixer_display_volz1_max: 147 },
  { mixer_bass_z1: 89 },
  { mixer_display_volz1_min: 11 },
  { mixer_bass_z2: 128 },
  { mixer_bgm_z3_mute: false },
  { mixer_bass_z3: 128 },
  { mixer_bass_z4: 255 },
  { mixer_bass_z5: 255 },
  { mixer_bass_z6: 0 },
  { mixer_mic_z2_max: 255 },
  { mixer_mic_z3_min: 0 },
  { mixer_cmp_z6_max: 0 },
  { mixer_aux_z3_mute: false },
  { mixer_mic_z4_mute: false },
  { mixer_mic_z4_max: 227 },
  { mixer_cmp_z3_max: 79 },
  { mixer_mic_z5_mute: false },
  { mixer_aux_z2_mute: false },
  { mixer_bgm_z2_mute: true },
  { mixer_mic_z2_boost: false },
  { mixer_mic_z1_min: 129 },
  { mixer_mic_z5: 73 },
  { mixer_mic_z4: 52 },
  { mixer_mic_z6: 255 },
  { mixer_mic_z6_max: 255 },
  { mixer_cmp_z1_max: 41 },
  { mixer_bgm_z5: 99 },
  { mixer_bgm_z6: 87 },
  { mixer_treble_z6: 255 },
  { mixer_treble_z5: 0 },
  { musicplayer_sync_enabled: true },
  { mixer_balance_z3: 128 },
  { mixer_bgm_z1: 88 },
  { mixer_display_volz4_mute: true },
  { mixer_bgm_z2: 181 },
  { mixer_balance_z1: 128 },
  { mixer_bgm_z3: 50 },
  { mixer_balance_z2: 255 },
  { mixer_bgm_z4: 0 },
  { mixer_mic_z1: 129 },
  { mixer_mic_z3: 0 },
  { mixer_mic_z2: 0 },
  { mixer_mic_z3_boost: false },
  { mixer_display_jukez4_mute: false },
  { mixer_treble_z4: 4 },
  { mixer_treble_z3: 128 },
  { mixer_treble_z2: 128 },
  { mixer_display_jukez1_mute: false },
  { mixer_treble_z1: 0 },
  { mixer_display_volz5_min: 179 },
  { mixer_display_volz3_freeze: false },
  { mixer_display_volz2_min: 0 },
  { mixer_display_volz4_freeze: false },
  { mixer_display_volz2_freeze: false },
  { mixer_display_jukez5_mute: false },
  { mixer_display_volz5_freeze: false },
  { mixer_display_volz1_freeze: false },
  { mixer_aux_z3: 50 },
  { mixer_aux_z4: 0 },
  { mixer_jcb_dsp_eq_z6: false },
  { mixer_aux_z1: 255 },
  { mixer_aux_z2: 132 },
  { mixer_jcb_dsp_eq_z5: true },
  { mixer_jcb_dsp_eq_z4: true },
  { mixer_jcb_dsp_eq_z3: false },
  { mixer_aux_z5: 198 },
  { mixer_jcb_dsp_eq_z2: false },
  { mixer_aux_z6: 47 },
  { mixer_jcb_dsp_eq_z1: true },
  { mixer_mic_z6_min: 255 },
  { mixer_display_volz2_max: 255 },
  { mixer_display_volz5_mute: true },
  { mixer_display_jukez6_mute: true },
  { mixer_display_volz6_max: 255 },
  { mixer_display_jukez4: 255 },
  { mixer_display_jukez5: 153 },
  { mixer_display_jukez2: 167 },
  { mixer_display_jukez3: 35 },
  { mixer_display_jukez6: 255 },
  { mixer_cmp_z5_max: 0 },
  { mixer_mic_z1_max: 225 },
  { mixer_mic_z4_boost: true },
  { mixer_micpercent_z5: 78 },
  { mixer_micpercent_z6: 50 },
  { mixer_micpercent_z3: 50 },
  { mixer_micpercent_z4: 48 },
  { mixer_mic_z4_min: 52 },
  { mixer_micpercent_z1: 53 },
  { mixer_micpercent_z2: 50 },
  { mixer_display_jukez1: 255 },
  { mixer_mic_z1_boost: false },
  { mixer_display_volz6_freeze: true },
  { mixer_display_volz6_mute: false },
  { mixer_display_volz3_mute: false },
  { mixer_mic_z5_boost: true },
  { mixer_mic_z2_min: 0 },
  { mixer_mic_z3_max: 255 },
  { mixer_display_volz6_min: 255 },
  { mixer_display_jukez2_mute: true },
  { mixer_display_volz6: 190 },
  { mixer_mic_z5_max: 217 },
  { mixer_display_volz2: 190 },
  { mixer_display_volz3: 190 },
  { mixer_display_volz4: 190 },
  { classic_audio_mixer: true },
  { mixer_display_volz5: 190 },
  { mixer_aux_z1_mute: false },
  { mixer_mic_z6_mute: false },
  { mixer_display_volz1: 190 },
  { mixer_display_jukez3_mute: false },
  { mixer_cmp_z4_max: 255 },
  { mixer_mic_z6_boost: true },
  { mixer_bgm_z1_mute: false },
  { mixer_bgm_z4_mute: true },
  { mixer_display_volz4_min: 4 },
  { mixer_display_volz2_mute: false },
  { bgm_mode_enabled: false },
  { mixer_display_volz4_max: 176 },
  { mixer_cmp_z2_max: 255 },
];

class MockSettingsService implements SettingsService {
  async getSettings(): Promise<Setting[]> {
    throw new Error('Method not implemented.');
  }
}

export default MockSettingsService;
