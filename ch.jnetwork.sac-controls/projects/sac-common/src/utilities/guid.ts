/**
 * Create a GUID with crypto library if available and a fallback to Math.Random implementation
 */
// #region Exported Functions

export function createGuid(): string {
    if (typeof crypto !== undefined && crypto['randomUUID'] !== undefined) {
        // return guid without hyphen
        return crypto['randomUUID']().replace(/\-/gi, '');
    } else {
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}

// #endregion Exported Functions
