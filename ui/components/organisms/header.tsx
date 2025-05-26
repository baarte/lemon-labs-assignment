import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/components/molecules/dropdown-menu";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center">
      <Image
        src="/images/logo/logo.svg"
        alt="logo"
        width={289}
        height={35}
        className="object-contain w-[250px] md:w-[200px] lg:w-[289px]"
      />
      <div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <div className="flex flex-row justify-between items-center gap-2 cursor-pointer h-[37px] px-3 bg-[#F5F5F5] rounded-md">
              <span>🇳🇱</span>
              <p className="text-sm hidden lg:block">Nederlands</p>
              <ChevronDown size={10} strokeWidth={1.25} />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Selecteer taal</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer">
                <span>🇳🇱</span>
                <p className="text-sm">Nederlands</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <span>🇬🇧</span>
                <p className="text-sm">English</p>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
