// Typed re-export of funnel-config that widens literal types to string,
// preventing TS2367 "comparison appears unintentional" errors in managed files.
// Referenced via tsconfig paths alias "@/funnel-config".
import {
  FUNNEL_COMPANY_ID,
  FUNNEL_API,
  FUNNEL_META_PIXEL,
  FUNNEL_LINKEDIN_PIXEL,
  FUNNEL_JURISDICTION as _J,
} from "./funnel-config";

export { FUNNEL_COMPANY_ID, FUNNEL_API, FUNNEL_META_PIXEL, FUNNEL_LINKEDIN_PIXEL };
export const FUNNEL_JURISDICTION: string = _J;
