import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ViewWeekSharpIcon from "@mui/icons-material/ViewWeekSharp";

interface IFooter {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const Footer = ({ value, onChange }: IFooter) => {
  return (
    <Tabs value={value} onChange={onChange} aria-label="icon tabs example">
      <Tab icon={<ViewWeekSharpIcon />} aria-label="phone" />
      <Tab icon={<FavoriteIcon />} aria-label="favorite" />
    </Tabs>
  );
};
