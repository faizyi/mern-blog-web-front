import { Loader } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <Loader className="w-7 h-7 animate-spin text-blue-950" />
    </div>
  );
};
