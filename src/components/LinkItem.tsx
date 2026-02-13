// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function LinkPageItem({
    title,
    description,
    url,
    icon,
    cta,
    svgIcon,
}: {
    title: string;
    description: string;
    url: string;
    icon: any;
    cta: string;
    svgIcon: boolean;
}) {
    const IconComponent = icon;
    
    return (
        <div className="flex w-full items-center justify-between gap-4 rounded-md border-2 border-dashed bg-card px-5 py-3">
            <div className="flex items-center gap-6">
                <span className="text-low-contrast-text">
                    {svgIcon ? (
                        <Image
                            src={icon}
                            alt={`${title} icon`}
                            width={28}
                            height={28}
                            className="text-low-contrast-text"
                        />
                    ) : (
                        <IconComponent className="w-7 h-7" />
                    )}
                </span>

                <div className="flex font-mono flex-col">
                    <span>{title}</span>
                    <span className="text-xs md:text-sm text-low-contrast-text">
                        {description}
                    </span>
                </div>
            </div>

            <Link
                className="flex items-center text-xs md:text-base font-mono rounded-md border border-border bg-card px-4 py-1"
                href={url}
            >
                <span>{cta}</span>
            </Link>
        </div>
    );
}
