import React, { useState } from "react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { useToast } from "./ui/use-toast";

interface ISubcriptionBtn {
  className?: string;
  isPro?: boolean;
}

const SubcriptionBtn: React.FC<ISubcriptionBtn> = ({ ...props }) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const handleSubcribe = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/stripe");
    } catch (err) {
      toast({
        title: "Error",
        variant: "destructive",
        description: "Something went wrong. Please try again !.",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={props.className}>
      <Button
        variant="outline"
        size="lg"
        disabled={loading}
        onClick={handleSubcribe}
        className={cn(
          "text-white w-full font-semibold border-none gradient-btn",
          "hover:text-white"
        )}
      >
        <span>{props.isPro ? "Manage subcription" : "Upgrade to Pro"}</span>
        <Sparkles />
      </Button>
    </div>
  );
};

export default SubcriptionBtn;
