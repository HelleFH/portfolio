import React from "react";
import { X } from "lucide-react";
import './CloseButton.scss';

type CloseButtonProps = {
  onClick: () => void;
  size?: number; // size of icon (default 24px)
  useIcon?: boolean; // if false, shows × instead of <X />
  position?: React.CSSProperties; // inline positioning (top/right overrides)
};

const CloseButton: React.FC<CloseButtonProps> = ({
  onClick,
  size = 24,
  useIcon = true,
  position = { right: "15px", top: "15px" },
}) => {
  return (
    <button
      onClick={onClick}
      className="close-button"
      style={position}
    >
      {useIcon ? <X size={size} /> : <span style={{ fontSize: size }}>&times;</span>}
    </button>
  );
};

export default CloseButton;
