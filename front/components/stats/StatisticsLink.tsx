import Link from "next/link"
import { usePathname } from 'next/navigation';

interface StatisticsLinkProps {
    href: string;
    label: string;
}

export default function StatisticsLink({href, label}:StatisticsLinkProps) {
    const pathname = usePathname();
    
    return (
        <Link 
            href={href} 
            className={`p-2 rounded-md hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none ${href===pathname && 'bg-accent/80'}`}
        >
            {label}
        </Link>
    )
}