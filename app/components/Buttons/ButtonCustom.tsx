import { IconProps } from "@phosphor-icons/react";

interface CustomButtonProps {
  onClick: () => void;
  isActive: boolean;
  icon: React.ComponentType<IconProps>;
  label: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  isActive,
  icon: Icon,
  label,
}) => (
  <div>
    <button
      className={`border rounded-md border-opacity-20 border-white flex items-center justify-center w-full h-[60px] mb-2
                ${
                  isActive
                    ? "bg-[#60cdff] text-black border-opacity-100"
                    : "bg-[#FFFFFF0F] text-white border-opacity-20"
                }`}
      onClick={onClick}
    >
      <Icon size={21} weight="light" />
    </button>
    <span className={`text-sm ${isActive ? "text-white" : "text-gray-400"}`}>
      {label}
    </span>
  </div>
);
