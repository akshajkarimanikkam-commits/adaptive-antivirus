export const SITE = {
  name: "Adaptive Antivirus",
  tagline: "Security that learns at the speed of attack",
  promise: "Detect. Adapt. Immunize.",
  description:
    "The first adaptive antivirus built for desktop, mobile, and console ecosystems. Every threat encounter makes the entire network harder to break.",
  url: "https://adaptiveantivirus.example",
} as const;

export const NAV_LINKS = [
  { href: "/platform", label: "Platform" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/coverage", label: "Coverage" },
  { href: "/demo", label: "Demo" },
  { href: "/pricing", label: "Pricing" },
] as const;

export const PLATFORM_PILLS = [
  { label: "Desktop", icon: "Monitor" },
  { label: "Mobile", icon: "Smartphone" },
  { label: "Console", icon: "Gamepad2" },
  { label: "Cross-Platform", icon: "Network" },
] as const;

export const HERO_METRICS = [
  { label: "Protection", value: "99.9%" },
  { label: "Response", value: "<1s" },
  { label: "Countries", value: "150+" },
  { label: "Active Users", value: "2M+" },
] as const;

export const ATTACK_GROWTH = [
  { month: "Jan", value: 100 },
  { month: "Feb", value: 118 },
  { month: "Mar", value: 142 },
  { month: "Apr", value: 168 },
  { month: "May", value: 201 },
  { month: "Jun", value: 248 },
];

export const CYBER_REALITY = [
  {
    title: "Signature-based detection is obsolete",
    body: "Polymorphic and zero-day malware mutate faster than signature databases can publish.",
  },
  {
    title: "Devices are always exposed",
    body: "Always-on connectivity means a single unprotected endpoint compromises the perimeter.",
  },
  {
    title: "Mobile attacks are accelerating",
    body: "Banking trojan detections were nearly 4x higher in H1 2025 vs H1 2024.",
  },
  {
    title: "Protection cannot be static",
    body: "Defenses that don't learn from each engagement leak the same attack pattern repeatedly.",
  },
] as const;

export const LEGACY_FAILS = [
  { title: "Signature-based detection lag", body: "New malware variants slip past static rules until vendors push updates." },
  { title: "Platform fragmentation", body: "Vendors ship a strong desktop product and a weaker mobile afterthought." },
  { title: "Slow learning cycles", body: "Threat intelligence flows in days, not seconds." },
  { title: "Novel threat blindness", body: "Heuristics fail when attack patterns sit outside trained distributions." },
] as const;

export const MALWARE_SPREAD = [
  { title: "Signature database lag", body: "First-encounter window leaves every endpoint exposed." },
  { title: "Endpoint infection spread", body: "One compromised device becomes a foothold inside the network." },
  { title: "Mobile under-protection", body: "Personal devices carry corporate access without parity defense." },
  { title: "Console connectivity risks", body: "Living-room devices share the same LAN and identity surface." },
  { title: "Fragmented products", body: "Multi-vendor stacks create gaps at the seams." },
  { title: "Delayed response times", body: "Manual triage means hours of dwell time per incident." },
] as const;

export const BREAKTHROUGHS = [
  {
    n: "01",
    title: "Adaptive Immunity",
    blurb: "Analyze. Adapt. Immunize.",
    points: [
      "Live behavioral analysis of malware code patterns",
      "Real-time generation of counter-pattern defenses",
      "Local immunization without cloud round-trips",
      "Hardened against re-infection on the same vector",
    ],
  },
  {
    n: "02",
    title: "Fleet Learning",
    blurb: "One encounter, network-wide resilience.",
    points: [
      "Adaptation intelligence relayed to HQ in seconds",
      "Validated counter-patterns distributed fleet-wide",
      "Every endpoint inherits the new defense",
      "The attack itself becomes the blueprint to stop it",
    ],
  },
  {
    n: "03",
    title: "True Cross-Platform",
    blurb: "One philosophy, every endpoint.",
    points: [
      "Unified engine across desktop, mobile, and console",
      "Shared threat intelligence with no vendor seams",
      "Consistent policy and reporting surface",
      "First-class console support, not an afterthought",
    ],
  },
] as const;

export const HOW_STEPS = [
  {
    n: "01",
    title: "Detect & Analyze in real time",
    points: [
      "Continuous behavioral telemetry on every process",
      "Anomaly thresholds tuned per device class",
      "Suspicious code paths isolated for inspection",
      "Threat fingerprint extracted in under 10 ms",
    ],
  },
  {
    n: "02",
    title: "Adapt to the malware instantly",
    points: [
      "Counter-pattern generated from observed behavior",
      "Defense logic compiled and applied locally",
      "No reliance on signature push from the cloud",
      "Protection level lifted before payload runs",
    ],
  },
  {
    n: "03",
    title: "Harden the endpoint against repeat infection",
    points: [
      "Vector-specific resistance baked into the device",
      "Quarantine + rollback on any neutralized payload",
      "Exploit chain primitives blocked at the kernel boundary",
      "Standard protection profiles auto-upgraded",
    ],
  },
  {
    n: "04",
    title: "Share adaptation intelligence to HQ",
    points: [
      "Validated counter-pattern signed and uploaded",
      "Classified and de-duplicated at the Intelligence Hub",
      "Distributed to every endpoint in the fleet",
      "Each protected device strengthens the whole network",
    ],
  },
] as const;

export const ARCHITECTURE = [
  {
    n: "01",
    title: "Endpoint Agent",
    body: "Lightweight runtime that scans, monitors, quarantines, and rolls back.",
    pills: ["Scanning", "Monitoring", "Quarantine", "Rollback"],
  },
  {
    n: "02",
    title: "Adaptive Engine",
    body: "On-device inference that analyzes, targets, and synthesizes defense logic.",
    pills: ["Analysis", "Targeting", "Defense"],
  },
  {
    n: "03",
    title: "Intelligence Hub",
    body: "Validates, classifies, and globally distributes adaptation intelligence.",
    pills: ["Validation", "Classification", "Global"],
  },
  {
    n: "04",
    title: "Fleet Distribution",
    body: "Counter-patterns inherited by every endpoint, on every platform.",
    pills: ["PC", "Mobile", "Console"],
  },
] as const;

export const COVERAGE = [
  { title: "Desktop", icon: "Monitor", platforms: ["Windows 10", "Windows 11", "macOS", "Linux"] },
  { title: "Laptop", icon: "Laptop", platforms: ["Windows", "macOS", "ChromeOS"] },
  { title: "Mobile", icon: "Smartphone", platforms: ["Android", "iOS"] },
  { title: "Tablet", icon: "Tablet", platforms: ["iPadOS", "Android"] },
  { title: "Console & Living Room", icon: "Gamepad2", platforms: ["PlayStation", "Xbox", "Switch", "Steam Deck", "Apple TV"] },
] as const;

export const CONSOLE_REASONS = [
  { title: "Internet-Connected Devices", body: "Modern consoles are persistent network endpoints with rich identity surfaces." },
  { title: "Home Network Integration", body: "They share the same LAN as laptops and phones — a perfect lateral target." },
  { title: "High-Value Targets", body: "Wallets, payment cards, social graphs, and biometric data sit on-device." },
  { title: "Unified Protection", body: "One engine, one policy, one threat intelligence layer across the home." },
  { title: "Enterprise Endpoint Security", body: "Corporate BYOD includes whatever connects to the network — including consoles." },
] as const;

export const THREAT_TYPES = [
  { title: "Viruses", body: "Self-replicating code that piggybacks on legitimate executables." },
  { title: "Ransomware", body: "Encrypts user data and extorts payment for decryption keys." },
  { title: "Trojans", body: "Disguised installers that drop persistent backdoors." },
  { title: "Spyware", body: "Silent observers exfiltrating credentials and behavior." },
  { title: "Worms", body: "Self-propagating malware that traverses networks autonomously." },
  { title: "Rootkits", body: "Kernel-level implants that hide their presence from the OS." },
  { title: "Fileless Attacks", body: "Memory-resident payloads that never touch disk." },
  { title: "Malicious Scripts", body: "PowerShell, JS, and shell payloads weaponized at runtime." },
  { title: "Banking Malware", body: "Form-grabbers and overlay attacks targeting financial apps." },
  { title: "Credential Theft", body: "Token, cookie, and password store exfiltration." },
  { title: "Mobile Payloads", body: "SMS-borne and side-loaded threats targeting iOS and Android." },
  { title: "Network Threats", body: "MITM, DNS hijack, and lateral movement across the LAN." },
] as const;

export const TIMELINE = [
  { n: "01", title: "Unknown malware hits one endpoint", body: "Novel payload bypasses signature defenses on first contact." },
  { n: "02", title: "Local engine analyzes behavior", body: "Anomaly profile and code pattern extracted in milliseconds." },
  { n: "03", title: "Adaptive defense generated", body: "Counter-pattern compiled and applied without cloud dependency." },
  { n: "04", title: "Intelligence sent to HQ", body: "Signed adaptation uploaded, validated, and classified." },
  { n: "05", title: "Protection distributed", body: "Every endpoint in the fleet inherits the new defense." },
] as const;

export const PRIVACY = [
  { title: "Data Minimization", body: "Only the malicious code pattern leaves the device — never user content." },
  { title: "Local Content", body: "Documents, messages, and media are analyzed on-device only." },
  { title: "Enterprise Control", body: "Org-level policy and audit trail for every adaptation event." },
  { title: "Consumer Privacy", body: "Plain-language disclosure and a one-click off switch for telemetry." },
] as const;

export const COMPETITIVE_LEGACY = [
  { ok: false, label: "Signature-based detection only" },
  { ok: false, label: "Desktop-first, mobile afterthought" },
  { ok: false, label: "No console support" },
  { ok: false, label: "Vendor-managed update cadence" },
] as const;

export const COMPETITIVE_ADAPTIVE = [
  { ok: true, label: "Behavioral + adaptive defense generation" },
  { ok: true, label: "Unified engine across every platform" },
  { ok: true, label: "First-class console & living-room support" },
  { ok: true, label: "Sub-second fleet-wide adaptation" },
] as const;

export const COMPARISON_TABLE = [
  { row: "Detection Method", legacy: "Signatures + heuristics", adaptive: "Behavioral + adaptive synthesis" },
  { row: "Cross-Platform", legacy: "Desktop-first", adaptive: "Unified across all endpoints" },
  { row: "Response Time", legacy: "Hours to days", adaptive: "Under 1 second" },
  { row: "Threat Intelligence", legacy: "Vendor-pushed", adaptive: "Fleet-learned, peer-distributed" },
  { row: "Console Support", legacy: "None", adaptive: "Native, first-class" },
] as const;

export const MOAT = [
  { title: "Defensive Intelligence", body: "Every encounter expands the validated counter-pattern library." },
  { title: "Learning Opportunities", body: "Cross-platform breadth produces more diverse training signals." },
  { title: "Cross-Platform Breadth", body: "Console + mobile + desktop creates uniquely wide coverage." },
  { title: "Adaptive Defense Logic", body: "Synthesized defenses compound — newer patterns build on older ones." },
  { title: "Unified Intelligence Network", body: "The more endpoints, the faster every endpoint learns." },
] as const;

export const PRICING_TIERS = [
  {
    name: "Consumer",
    price: "$9.99",
    cadence: "/mo",
    blurb: "Adaptive protection for one person, every device.",
    pills: ["Monthly or Annual", "Single Device", "All Platforms"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Family",
    price: "$19.99",
    cadence: "/mo",
    blurb: "Five+ devices, parental controls, and full cross-platform parity.",
    pills: ["5+ Devices", "Cross-Platform", "Parental Controls"],
    cta: "Get Family Plan",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    blurb: "Per-seat licensing with admin dashboard and incident reporting.",
    pills: ["Per-Seat", "Admin Dashboard", "Reporting"],
    cta: "Talk to Sales",
    popular: false,
  },
  {
    name: "OEM / Platform",
    price: "Revenue Share",
    cadence: "",
    blurb: "Embed Adaptive Antivirus directly into devices and platforms.",
    pills: ["Embedded", "White-Label", "Co-Marketing"],
    cta: "Partner with Us",
    popular: false,
  },
] as const;

export const PRICING_ADDON = {
  name: "Premium Add-ons",
  range: "$4.99–14.99",
  blurb: "VPN, password manager, dark-web monitoring, and identity insurance.",
  items: ["VPN", "Password Vault", "Dark-Web Watch", "Identity Insurance"],
};

export const ROADMAP = [
  { phase: "MVP", status: "Active", color: "success", progress: 100, items: ["Core Engine", "Threat Detection", "Local Adaptation"] },
  { phase: "Beta", status: "In Progress", color: "warning", progress: 62, items: ["Mobile Support", "Intelligence Hub", "Fleet Sync"] },
  { phase: "Expansion", status: "Planned", color: "muted", progress: 24, items: ["Console Support", "Partnerships", "Platform Integration"] },
  { phase: "Enterprise Release", status: "Planned", color: "muted", progress: 12, items: ["Admin Dashboard", "Policy Controls", "Incident Visibility"] },
  { phase: "Global Intelligence Mesh", status: "Future", color: "muted", progress: 4, items: ["Global Sync", "Real-time Adaptation", "Distributed Endpoints"] },
] as const;

export const PRODUCT_SEE = [
  "A clean dashboard with one number that matters: protection state",
  "Real-time threat feed with plain-language explanations",
  "Per-device controls that don't require a degree to operate",
  "Zero pop-ups, zero scareware, zero upsell gymnastics",
  "Family view that actually works across phones and consoles",
] as const;

export const PRODUCT_FEEL = [
  "Confidence — every encounter is an upgrade, not an anxiety event",
  "Quietness — protection that disappears until it matters",
  "Control — privacy posture is yours to set, not the vendor's",
  "Continuity — defense follows you between phone, laptop, and console",
  "Trust — what leaves your device is the threat, not your data",
] as const;
