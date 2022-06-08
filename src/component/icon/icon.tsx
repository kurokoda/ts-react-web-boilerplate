import {
  Add as AddIcon,
  AssignmentLate as LateIcon,
  AssignmentLateOutlined as ClientRecordIcon,
  Cake as BirthdayIcon,
  CalendarToday as CalendarIcon,
  Cancel as CancelIcon,
  Check as CheckIcon,
  Close as CloseIcon,
  DeleteForever as DeleteIcon,
  Edit as EditIcon,
  Email as EmailIcon,
  ErrorOutline as ErrorIcon,
  HelpOutline as HelpIcon,
  Home as HomeIcon,
  LocalHospital as HospitalIcon,
  MoreHoriz as MoreIcon,
  Menu as MenuIcon,
  Description as NotesIcon,
  Person as PersonIcon,
  PhoneIphone as MobileIcon,
  Save as SaveIcon,
  Storefront as StorefrontIcon,
  Timer as TimerIcon,
  Visibility as ViewIcon,
  Warning as WarningIcon,
} from "@material-ui/icons";
import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { APPLICATION_COLOR } from "../../constant";

export const iconTypes = [
  "add",
  "birthday",
  "calendar",
  "cancel",
  "check",
  "clientRecord",
  "close",
  "delete",
  "edit",
  "email",
  "error",
  "healing",
  "help",
  "home",
  "late",
  "menu",
  "mobile",
  "more",
  "notes",
  "person",
  "save",
  "store",
  "timer",
  "view",
  "warning",
] as const;

export type IconType = typeof iconTypes[number];

const typeToIconMap: Record<IconType, OverridableComponent<SvgIconTypeMap>> = {
  add: AddIcon,
  birthday: BirthdayIcon,
  calendar: CalendarIcon,
  cancel: CancelIcon,
  check: CheckIcon,
  close: CloseIcon,
  clientRecord: ClientRecordIcon,
  delete: DeleteIcon,
  edit: EditIcon,
  email: EmailIcon,
  error: ErrorIcon,
  healing: HospitalIcon,
  help: HelpIcon,
  home: HomeIcon,
  late: LateIcon,
  menu: MenuIcon,
  mobile: MobileIcon,
  more: MoreIcon,
  notes: NotesIcon,
  person: PersonIcon,
  save: SaveIcon,
  store: StorefrontIcon,
  timer: TimerIcon,
  view: ViewIcon,
  warning: WarningIcon,
};
interface IconProps {
  type: IconType;
  color?: string;
}

const Icon = ({ color, type }: IconProps) => {
  const IconFromMap = typeToIconMap[type];
  return <IconFromMap style={{ fill: color ? color : APPLICATION_COLOR.GRAYSCALE_MEDIUM }} />;
};

export { Icon };
