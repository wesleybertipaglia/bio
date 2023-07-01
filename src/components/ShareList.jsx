import React from "react";
import Link from "./Link";
import { LinkedinLogo, TwitterLogo, FacebookLogo, WhatsappLogo, Envelope } from "@phosphor-icons/react";

export default function ShareList() {
    const links = [
        {
            title: "LinkedIn",
            link: `https://www.linkedin.com/sharing/share-offsite/?url=${window.location}`,
            icon: LinkedinLogo,
            iconWeight: "fill",
            bg: "bg-blue-600",
            color: "text-white"
        },
        {
            title: "Twitter",
            link: `https://twitter.com/intent/tweet?text=Check%20out%20this%20Links%20Hub!%20-%20${window.location}`,
            icon: TwitterLogo,
            iconWeight: "fill",
            bg: "bg-sky-500",
            color: "text-white"
        },
        {
            title: "Facebook",
            link: `https://www.facebook.com/sharer.php?u=${window.location}`,
            icon: FacebookLogo,
            iconWeight: "fill",
            bg: "bg-blue-600",
            color: "text-white"
        },
        {
            title: "WhatsApp",
            link: `https://wa.me/?text=Check%20out%20this%20Links%20Hub!%20-%20${window.location}`,
            icon: WhatsappLogo,
            iconWeight: "light",
            bg: "bg-green-500",
            color: "text-white"
        },
        {
            title: "E-mail",
            link: `mailto:?subject= Check out this Links Hub! &body= Check out this Links Hub! - ${window.location}`,
            icon: Envelope,
            iconWeight: "regular",
            bg: "bg-zinc-800",
            color: "text-white"
        }
    ]

    return (
        <section className="w-full">
            <div className="flex flex-col gap-4">
                {
                    links.map((item) => (
                        <Link 
                            
                            titleAlign="text-center"
                            key={item.title}
                            title={item.title} 
                            link={item.link} 
                            icon={item.icon} 
                            iconWeight={item.iconWeight}
                            iconSize="16"
                            iconBoxStyle={`h-6 ${item.color} ${item.bg}`}
                            boxStyle="p-2 hover:bg-slate-200"
                            titleStyle="text-start"
                        />
                    ))
                }
            </div>
        </section>
    )
}