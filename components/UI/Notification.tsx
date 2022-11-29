import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

type NotificationType = "Success" | "Danger" | "Info";
type Props = {
  type: NotificationType;
  message: string;
  onClose?: () => void;
};

const Icons = {
  Success: <CheckOutlinedIcon fontSize="small" color="primary" />,
  Danger: <CloseOutlinedIcon fontSize="small" color="primary" />,
  Info: <InfoOutlinedIcon fontSize="small" color="primary" />,
};

const Notification = ({ type, message, onClose = () => {} }: Props) => {
  return (
    <div
      onClick={onClose}
      className="bg-themed-bg text-themed-text p-[30px] flex items-center justify-center cursor-pointer"
    >
      {Icons[type]} {message}
    </div>
  );
};

export default Notification;
