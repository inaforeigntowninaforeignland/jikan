/**
 * @enum {PositionType}
 * @property {String} PRODUCER Producer
 * @property {String} DIRECTOR Director
 * @property {String} SCRIPT Script
 * @property {String} STORYBOARD Storyboard
 * @property {String} SOUND_DIRECTOR Sound Director
 * @property {String} EPISODE_DIRECTOR Episode Director
 * @property {String} SERIES_COMPOSITION Series Composition
 */
// TODO Describe other enums
enum PositionType {
  PRODUCER = 'Producer',
  DIRECTOR = 'Director',
  SCRIPT = 'Script',
  STORYBOARD = 'Storyboard',
  SOUND_DIRECTOR = 'Sound Director',
  SERIES_COMPOSITION = 'Series Composition',
}

export default PositionType;
