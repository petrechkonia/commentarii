export interface DailyTool {
    name: string;
    specs?: DailyToolSpec[];
}

export interface DailyToolSpec {
    label: string;
    value: string;
}

export const uses: DailyTool[] = [
    {
        name: "Keyboard",
        specs: [
            { label: "Case", value: "Keychron Q60 Retro" },
            { label: "Switches", value: "Gateron Full POM Smoothie Series Banana (Heavy Tactile)" },
            { label: "Keycaps", value: "Drop + MiTo MT3 9009" },
            { label: "Stabilizers", value: "Typeplus x YIKB (Screw-in)" },
        ],
    },
    {
        name: "Laptop",
        specs: [
            { label: "Model", value: "Macbook Pro 14\"" },
            { label: "Chip", value: "M2 Pro" },
            { label: "Memory", value: "16GB" },
            { label: "Storage", value: "512GB" },
        ],
    },
    {
        name: "Desktop",
        specs: [
            { label: "Processor", value: "Intel i5 14700F" },
            { label: "Memory", value: "32GB" },
            { label: "Graphics Card", value: "Nvidia GeForce RTX 4060 8GB" },
            { label: "Storage Slot 1", value: "1TB" },
            { label: "Storage Slot 2", value: "256GB" },
        ],
    },
    {
        name: "Monitor",
        specs: [
            { label: "Model", value: "Dell S2725QC" },
            { label: "Resolution", value: "4K" },
            { label: "Refresh Rate", value: "120Hz" },
            { label: "Panel", value: "IPS" },
        ],
    },
    {
        name: "Phone",
        specs: [
            { label: "Model", value: "Google Pixel 9a" },
            { label: "OS", value: "GrapheneOS" },
            { label: "Storage", value: "128GB" },
        ],
    },
    {
        name: "Misc",
        specs: [
            { label: "Mouse", value: "Logitech MX Ergo S — Graphite" },
            { label: "Headphones", value: "Sony WH-1000XM5" },
            { label: "E-Reader", value: "Xteink X4 (w/ crosspoint)" },
            { label: "Controller", value: "8BitDo Ultimate 2c" },
        ]
    },
    {
        name: "Software",
        specs: [
            { label: "Browser", value: "Zen" },
            { label: "Terminal", value: "Ghostty" },
            { label: "Editor", value: "VSCodium (w/ Vim Motions)" },
            { label: "Notes", value: "Neovim / Markor" },
            { label: "WM on Mac", value: "Aerospace" },
            { label: "Reader", value: "Readest" },
            { label: "VPN", value: "Mullvad" },
            { label: "Email Provider", value: "Migadu" },
            { label: "Email Client", value: "Thunderbird" },
            { label: "Password Manager", value: "KeePass" },
        ]
    },
    {
        name: "This Website",
        specs: [
            { label: "Framework", value: "Astro" },
            { label: "Hosting", value: "GitHub Pages" },
            { label: "DNS/CDN", value: "Cloudflare" },
        ],
    },
]
