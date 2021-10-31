/**
 * @enum {SubtypeType}
 * @property {String} AIRING airing (Anime)
 * @property {String} UPCOMING manga (Anime)
 * @property {String} TV tv (Anime)
 * @property {String} MOVIE movie (Anime)
 * @property {String} OVA ova (Anime)
 * @property {String} SPECIAL special (Anime)
 * @property {String} MANGA manga (Manga)
 * @property {String} NOVELS novels (Manga)
 * @property {String} ONESHOTS oneshots (Manga)
 * @property {String} DOUJIN doujin (Manga)
 * @property {String} MANHWA manhwa (Manga)
 * @property {String} MANHUA manhua (Manga)
 * @property {String} BYPOPULARITY manhwa (Both)
 * @property {String} FAVORITE favorite (Both)
 */
enum SubtypeType {
  AIRING = 'airing',
  UPCOMING = 'upcoming',
  TV = 'tv',
  MOVIE = 'movie',
  OVA = 'ova',
  SPECIAL = 'special',
  MANGA = 'manga',
  NOVELS = 'novels',
  ONESHOTS = 'oneshots',
  DOUJIN = 'doujin',
  MANHWA = 'manhwa',
  MANHUA = 'manhua',
  BYPOPULARITY = 'bypopularity',
  FAVORITE = 'favorite',
}

export default SubtypeType;
