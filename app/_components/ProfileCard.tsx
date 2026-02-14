import Image from "next/image";
import profileImage from "@/public/assets/profile.jpg";

export function ProfileCard() {
    return (
        <div className="flex items-center justify-center md:justify-end">
            <div className="relative h-56 w-56 sm:h-64 sm:w-64 rounded-full border border-zinc-700 bg-zinc-900 shadow-xl shadow-black/40 overflow-hidden">
                <Image
                    src={profileImage}
                    alt="Profile photo"
                    fill
                    priority
                    className="object-cover object-center"
                />
            </div>
        </div>
    );
}