"use client";
import { headerItem, metaData } from "@/docs";
import { siteConfig } from "@/props/siteConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import HeaderItem from "../ui/HeaderItem";
import { HeaderMenu } from "./HeaderMenu";

const Header = () => {
  const pathName = usePathname();

  const [hover, setHover] = useState<number | null>(null);

  const setHoverHandler = (e: React.MouseEvent<HTMLAnchorElement|HTMLButtonElement>) => {
    const target = parseInt(e.currentTarget.id);
    setHover(target);
  };

  const setLeaveHandler = () => {
    setTimeout(() => {
      setHover(null);
    }, 150);
  }

  return (
    <header className="fixed w-full top-0 left-0" onMouseLeave={setLeaveHandler}>
      <div className="w-full z-10 shadow-md bg-white">
        <div
          style={{
            maxWidth: siteConfig.contentsWidth + "px",
            maxHeight: siteConfig.headerHeight + "px",
          }}
          className="w-full mx-auto flex flex-row items-center gap-6"
          
        >
          <h1>
            <Link
              id="0"
              href={headerItem[0].href}
              className="hover:opacity-75 transition-all ease-in-out"
              onMouseEnter={setHoverHandler}
            >
              <img
                src={siteConfig.logoImage}
                alt={metaData.title}
                style={{ maxHeight: siteConfig.headerHeight + "px" }}
                className="object-contain p-2"
              />
            </Link>
          </h1>
          <ul className="flex flex-row justify-end w-full text-sm font-bold gap-8 pt-0.5">
            {headerItem.map((item, i) => (
              <HeaderItem
                key={i}
                index={i}
                item={item}
                invalid={pathName === item.href}
                setHoverHandler={setHoverHandler}
              />
            ))}
          </ul>
          <Link
            id="4"
            href="https://google.com"
            target="_blank"
            rel="noreferrer"
            style={{ height: siteConfig.headerHeight }}
            className="flex items-center text-nowrap bg-[#D71517] border-[#D71517] border-[1px] hover:bg-white hover:text-[#D71517] text-white px-4 text-sm h-full font-bold transition-all ease-in-out"
            onMouseEnter={setHoverHandler}
          >
            来場登録はこちら
          </Link>
        </div>
      </div>
      {hover !== null ? (
        <div
          style={{ paddingTop: siteConfig.headerHeight }}
          className="fixed top-0 left-0 w-full -z-10 bg-[#F6F3F1] shadow-md"
        >
          {HeaderMenu(hover)}
        </div>
      ) : (
        <div
          style={{ paddingTop: siteConfig.headerHeight }}
          className="fixed top-0 left-0 w-full -z-10 bg-[#F6F3F1] shadow-md h-0"
        >
          <div></div>
        </div>
      )}
    </header>
  );
};

export default Header;
