import BeSvg from "@/components/svgs/logos/be-svg";
import FacebookSvg from "@/components/svgs/logos/facebook-svg";
import InstaSvg from "@/components/svgs/logos/insta-svg";
import TwitterSvg from "@/components/svgs/logos/twitter-svg";
import { Phone } from "lucide-react";

export default function SocialMedia() {
  return (
    <div className="flex flex-col items-center">
      <div className="p-2.5 flex items-center gap-2.5">
        <a href={"#"}>
          <TwitterSvg />
          <span className="sr-only">Twitter Account</span>
        </a>
        <a href={"#"}>
          <InstaSvg />
          <span className="sr-only">Instagram Account</span>
        </a>
        <a href={"#"}>
          <BeSvg />
          <span className="sr-only">Be Account</span>
        </a>
        <a href={"#"}>
          <FacebookSvg />
          <span className="sr-only">Facebook Account</span>
        </a>
      </div>
      <div className="p-2.5">
        <a href={"#"} className="flex items-center gap-1.5 text-sm font-bold">
          <Phone />
          <span>+92 123 456 1234</span>
        </a>
      </div>
    </div>
  );
}
