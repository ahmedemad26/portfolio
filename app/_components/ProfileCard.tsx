import Image from "next/image";
import profileImage from "@/public/assets/profile.jpg";

export function ProfileCard() {
  return (
    <div className="relative flex items-center justify-center lg:justify-end">
      <div
        className="pointer-events-none absolute right-0 top-1/2 hidden w-[min(100%,420px)] -translate-y-1/2 lg:block"
        aria-hidden
      >
        <div className="aspect-square rounded-full bg-[radial-gradient(circle_at_center,var(--accent-soft),transparent_65%)] opacity-90 blur-3xl" />
      </div>

      <div className="relative w-[min(100%,280px)] sm:w-[min(100%,300px)] md:w-72">
        <div className="profile-blob relative aspect-[4/5] w-full overflow-hidden bg-zinc-900/50">
          {/* Split wash: magenta + violet (reference mood, purple theme) */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-transparent to-violet-500/25"
            aria-hidden
          />
          <div
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-br from-fuchsia-500/25 to-transparent opacity-85"
            aria-hidden
          />
          <div
            className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-violet-500/35 to-transparent opacity-90"
            aria-hidden
          />

          <Image
            src={profileImage}
            alt="Profile photo"
            fill
            priority
            className="object-cover object-center transition duration-500 hover:scale-[1.03]"
            sizes="(max-width: 768px) 280px, 288px"
          />
        </div>
      </div>
    </div>
  );
}
