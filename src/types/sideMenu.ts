import { MenuItem } from "./menuItem";

export interface SideMenuProps {
  items: MenuItem[];
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  scrolled: boolean;
}
