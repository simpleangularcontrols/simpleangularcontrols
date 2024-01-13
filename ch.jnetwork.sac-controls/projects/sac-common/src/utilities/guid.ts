/**
 * create a guid with crypto library if availabe and a fallback to Math.Random implementation
 */
export function createGuid(): string {
  if (crypto) {
    // return guid without hyphen
    return crypto.randomUUID().replace(/\-/gi, '');
  } else {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
