import React from "react";
import user from "./User";
import { SealCheck, ShareNetwork } from "@phosphor-icons/react";

export default function Header() {
    return(
        <header className="">
            <div className="container mx-auto p-6">
                <div className="flex justify-between items-center p-2 rounded-full bg-white bg-opacity-50 backdrop-blur-md border">
                    <div>
                        <figure>
                            <img 
                                src={`https://github.com/${user.username}.png`} alt={`Avatar of ${user.name}`}
                                className="h-12 w-auto object-cover rounded-full"
                            />
                        </figure>
                    </div>

                    <div className="flex gap-2 items-center theme-color">
                        <span>{'@'}{user.name}</span>
                        <SealCheck size={24} weight="fill" className="text-sky-500" />
                    </div>
                    <div>
                        <button className="p-2 bg-zinc-900 shadow-sm rounded-full hover:shadow-2xl transition-all">
                            <ShareNetwork size={24} weight={"fill"} className="text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}