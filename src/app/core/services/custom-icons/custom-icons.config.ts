/**
 * @summary Here we define the custom icons base path along side the custom icons config
 *
 * @explain the name of the icon will be used alongside the base path, and with the svg extension at the end
 * to format the path automatically on the CustomIcons service
 *
 *
 * @note Incase there's another path for specific icon you should define its own path to override the default path formatter
 *
 *
 * @note Name of the icon that you defined here will be used as value for "svgIcon" on the mat-icon element
 *
 *
 * For reference
 * @see [https://alligator.io/angular/custom-svg-icons-angular-material/]
 */

interface CustomIcon {
  name: string;
  path?: string;
}

export const ICONS_BASE_PATH = "assets/images/";

export const customIcons: CustomIcon[] = [
  {
    name: 'voucher'
  },
  {
    name: 'referral-bonus'
  },
  {
    name: 'HR-letter'
  },
  {
    name: 'change-management'
  },
  {
    name: 'promotion'
  },
  {
    name: 'raise'
  }
];
