# Content architecture

- Keep portfolio positioning, career entries, skill descriptions and metric values in `src/i18n/translations.ts` for all three supported languages so language switching updates the full narrative.
- Render career history with separate current-role, previous-role, internship and education entries so promotions remain distinct from company changes.
- Counters consume localized, evidence-backed metric definitions without numeric fallbacks or automatic plus signs so the UI cannot silently invent claims.
- Serve resume downloads through imported Lovable asset pointers and same-origin download links shared by header and hero so both controls always use the same files without duplicating binaries.
- Define the language context identity in a non-component module separate from its provider and hook so translation/provider hot updates cannot disconnect existing consumers.