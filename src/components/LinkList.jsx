import React from "react";
import Link from "./Link";
import { Cards, GithubLogo, LinkedinLogo, TwitterLogo } from "@phosphor-icons/react";

export default function LinkList() {
    const links = [
        {
            title: "GitHub",
            link: "https://github.com/wesleybertipaglia",
            icon: GithubLogo,
            bg: "bg-slate-800",
            color: "text-white"
        },
        {
            title: "Portfolio",
            link: "https://wesleybertipaglia.github.io/portfolio/",
            icon: Cards,
            bg: "bg-cyan-500",
            color: "text-white"
        },
        {
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/wesley-bertipaglia/",
            icon: LinkedinLogo,
            bg: "bg-indigo-500",
            color: "text-white"
        },
        {
            title: "Twitter",
            link: "https://twitter.com/wesleyberti_",
            icon: TwitterLogo,
            bg: "bg-sky-500",
            color: "text-white"
        }
    ]

    return (
        <section className="w-full">
            <div className="flex flex-col gap-6 p-2">
                {
                    links.map((item) => (
                        <Link 
                            key={item.title}
                            title={item.title} 
                            link={item.link} 
                            icon={item.icon} 
                            iconSize="24"
                            iconBoxStyle={`h-12 ${item.color} ${item.bg}`}
                            boxStyle="bg-white p-1 shadow hover:scale-105"
                            titleStyle="text-center"
                        />
                    ))
                }
            </div>
        </section>
    )
}