import Image from "next/image";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="relative h-screen w-full">
            <div className="absolute size-full">
                <Image
                    src="/images/bg-img.png"
                    alt="bg"
                    property="fill"
                    className="size-full"
                    width={400}
                    height={400}
                />
            </div>

            {children}
        </main>
    );
}
