import { Mail, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ActionButton from "./Email";
import ContactButton from "./Call";

const Footer = () => {
  const defaultStyles =
    "text-black transition-colors duration-200 hover:text-[#FD6F00]  dark:text-gray-300 dark:hover:text-[#FD6F00] text-sm mb-4";

  return (
    <div className="bg-[#EFE9E3] dark:bg-[#1E1E1E] text-gray-800 dark:text-white flex flex-col items-center rounded-lg w-full">
      <h1 className="bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent text-2xl font-medium mt-4 mb-4">
        LOGO
      </h1>
      <div className="flex flex-wrap gap-4">
        <Link className={`${defaultStyles}`} href="/">
          Home
        </Link>
        <Link className={`${defaultStyles}`} href="/">
          Services
        </Link>
        <Link className={`${defaultStyles}`} href="/">
          About Me
        </Link>
        <Link className={`${defaultStyles}`} href="/">
          Portfolio
        </Link>
        <Link className={`${defaultStyles}`} href="/">
          Contact
        </Link>
      </div>
      <div className="flex gap-8 mt-4 mb-8">
        <Link href="/">
          <Image
            src="/images/fb.png"
            width={20}
            height={20}
            alt="Facebook"
            className="hidden dark:block object-contain"
          ></Image>
          <Image
            src="/images/fb-black.png"
            width={20}
            height={20}
            alt="Facebook"
            className="block dark:hidden object-contain"
          ></Image>
        </Link>
        <Link href="/">
          <Image
            src="/images/git-2.png"
            width={20}
            height={20}
            alt="Github"
            className="hidden dark:block object-contain"
          ></Image>
          <Image
            src="/images/black-git.png"
            width={20}
            height={20}
            alt="Github"
            className="block dark:hidden object-contain"
          ></Image>
        </Link>
        <Link href="/">
          <Image
            src="/images/linkedin.png"
            width={20}
            height={20}
            alt="Linkedin"
            className="hidden dark:block object-contain"
          ></Image>
          <Image
            src="/images/black-linkedin.png"
            width={20}
            height={20}
            alt="Linkedin"
            className="block dark:hidden object-contain"
          ></Image>
        </Link>
        <Link href="/">
          <Image
            src="/images/whatsapp.png"
            width={20}
            height={20}
            alt="Whatsapp"
            className="hidden dark:block object-contain"
          ></Image>
          <Image
            src="/images/black-whatsapp.png"
            width={20}
            height={20}
            alt="Whatsapp"
            className="block dark:hidden object-contain"
          ></Image>
        </Link>
      </div>
      <div className="flex justify-between gap-2 items-center py-2 mb-3 ">
        <ActionButton />
        <ContactButton />
      </div>
      <h2 className="py-4 px-4 font-medium text-sm mt-2 mb-4">
        All rights resverved @2026
      </h2>
    </div>
  );
};

export default Footer;
