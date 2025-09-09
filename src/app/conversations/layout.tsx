import { SidebarDemo } from "@/components/con-sidebar";
import { links, User } from "@/hooks/sidebar"


export default function ConvLayout ({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full light">
            <SidebarDemo className="w-full" links={links} user={User} app="LuminAI">
                {children}
            </SidebarDemo>
            
        </div>
    );
}