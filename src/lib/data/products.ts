import { Product } from '@/types';

export const products: Product[] = [
  {
    id: "prod-1",
    slug: "epson-lq-310-dotmatrix",
    name: "Epson LQ-310 Dotmatrix Printer",
    categoryId: "cat-dotmatrix",
    shortDescription: "High speed 24-pin impact printer for retail and commercial billing.",
    detailedDescription: "The Epson LQ-310 is a purpose-built 24-pin dot matrix printer designed for demanding high volume environments where reliability is non-negotiable. Featuring a print speed of up to 416 characters per second and a robust carriage mechanism rated for 10,000 power-on hours, the LQ-310 is the go-to machine for retail billing counters, pharmaceutical invoicing, and logistics dispatch printing. Its compact footprint makes it ideal for space-constrained POS environments, and its USB, serial, and parallel interface options ensure compatibility with legacy ERP and billing software without any driver modification.",
    features: ["Fast print speed up to 416 cps", "High MTBF reliability rating", "USB, Serial and Parallel Interfaces", "Compact footprint", "Compatible with all major billing software"],
    useCases: [
      {
        title: "Retail Billing Counters",
        description: "The LQ-310 is the industry standard for high-traffic retail POS environments. Its near-instantaneous print speed eliminates counter queues during peak hours, and its robust 24-pin head handles multi-copy carbon paper invoices with ease."
      },
      {
        title: "Pharmaceutical Invoicing",
        description: "Pharmaceutical distributors rely on dotmatrix printers for statutory multi-copy invoices that require a physical carbon impression. The LQ-310's adjustable platen gap accommodates up to 4-part invoice books reliably."
      },
      {
        title: "Logistics & Warehouse Dispatch",
        description: "Dispatch slips, challan copies, and lorry receipts printed on impact printers are legally recognised documents. The LQ-310's parallel port supports direct connection to legacy WMS and ERP systems common in Indian logistics operations."
      }
    ],
    specifications: {
      "Print Method": "Impact dot matrix",
      "Number of Pins": "24 pins",
      "Print Speed": "Up to 416 chars/s",
      "Paper Paths": "Manual Insertion, Tractor",
      "MTBF": "10,000 POH"
    },
    imageUrl: "https://images.unsplash.com/photo-1612815154858-60aa4c59eea6?auto=format&fit=crop&q=80&w=1000",
    isAvailable: true,
    seo: {
      title: "Epson LQ-310 Dotmatrix Printer | Buy in Mumbai",
      description: "Buy the Epson LQ-310 24-pin dotmatrix printer in Mumbai from Rex International. ₹12,000–₹15,000. Ideal for retail billing, pharma invoicing & warehouse dispatch. 45+ years expertise."
    }
  },
  {
    id: "prod-2",
    slug: "hp-laserjet-pro-m1136",
    name: "HP LaserJet Pro M1136",
    categoryId: "cat-laser",
    shortDescription: "Multifunction monochrome laser printer for office and enterprise environments.",
    detailedDescription: "The HP LaserJet Pro M1136 is one of the most reliable workhorse multifunction printers in the Indian office market. Offering print, copy, and scan functionality in a compact chassis, the M1136 is built for teams that need consistent, high-quality monochrome output at high monthly duty cycles. HP's proven LaserJet toner delivery system produces sharp, smudge-resistant text at resolutions up to 1200 dpi effective, making it equally suited for client-facing correspondence, internal reports, and regulatory compliance documents. The M1136 also features HP's Smart Install technology, allowing driver-free connection to any Windows PC via USB.",
    features: ["Print, Copy, Scan (MFP)", "Compact office-ready size", "Energy Star certified", "Smart Install — no driver CD needed", "Up to 18 ppm"],
    useCases: [
      {
        title: "SME Office Environments",
        description: "Small and medium enterprises that need a single reliable device for all daily document needs will find the M1136 to be an ideal value proposition. Its low cost-per-page toner system reduces ongoing operational costs significantly compared to inkjet alternatives."
      },
      {
        title: "Accounts & Finance Departments",
        description: "Finance teams producing GST invoices, payment vouchers, and ledger printouts require consistent monochrome quality at volume. The M1136's 8,000-page monthly duty cycle handles this without breaking a sweat."
      },
      {
        title: "Branch Office Deployment",
        description: "For companies deploying uniform hardware across multiple branch offices, the M1136's compact size, simple driver installation, and long-life toner cartridges make it the lowest-maintenance multifunction option in its price bracket."
      }
    ],
    specifications: {
      "Functions": "Print, copy, scan",
      "Print Speed": "Up to 18 ppm",
      "Resolution": "Up to 600 x 600 dpi (1200 dpi effective)",
      "Connectivity": "Hi-Speed USB 2.0 port",
      "Duty Cycle": "Up to 8,000 pages per month"
    },
    imageUrl: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782652273/tbqvri1wlikbur3j8jiy.avif",
    isAvailable: true,
    seo: {
      title: "HP LaserJet Pro M1136 MFP | Buy in Mumbai",
      description: "Buy the HP LaserJet Pro M1136 multifunction laser printer in Mumbai. ₹15,000–₹18,000. Print, copy & scan. Ideal for SME offices, accounts departments & branch office deployment."
    }
  },
  {
    id: "prod-3",
    slug: "epson-ecotank-l3250",
    name: "Epson EcoTank L3250",
    categoryId: "cat-inktank",
    shortDescription: "Wi-Fi All-in-One Ink Tank Printer with ultra-low cost per page.",
    detailedDescription: "The Epson EcoTank L3250 redefines the economics of colour office printing. Its refillable ink tank system eliminates the expensive cartridge replacement cycle that makes conventional inkjet printers so costly to operate — a full set of L3250 ink bottles delivers approximately 4,500 monochrome and 7,500 colour pages, reducing cost-per-page to a fraction of any cartridge-based system. The L3250 offers wireless connectivity via Wi-Fi and Wi-Fi Direct, borderless photo-quality printing, and full mobile printing support through Epson's iPrint application. For businesses producing colour marketing materials, customer proposals, or high volume colour documentation in-house, the L3250 represents an exceptional return on investment.",
    features: ["Wi-Fi & Wi-Fi Direct", "Borderless A4 printing", "4,500 pages per black bottle", "7,500 pages per colour set", "Mobile printing via Epson iPrint"],
    useCases: [
      {
        title: "In-House Marketing & Design",
        description: "Design agencies, small marketing teams, and business owners who produce colour brochures, proposals, and presentations in-house will find the L3250 to be the most cost effective colour printing solution available, with a cost-per-page up to 90% lower than traditional inkjet cartridges."
      },
      {
        title: "School & Educational Institutions",
        description: "High volume colour printing for worksheets, question papers, and certificates is a constant requirement in educational institutions. The L3250's massive ink yield makes it far more economical than any cartridge-based alternative for this use case."
      },
      {
        title: "Home Office & Freelancers",
        description: "Professionals working from home who need occasional high-quality colour output alongside everyday monochrome printing will benefit from the L3250's wireless convenience and its ability to print borderless photographs without any additional cost."
      }
    ],
    specifications: {
      "Print Method": "On-demand inkjet (Piezoelectric)",
      "Max Resolution": "5760 x 1440 dpi",
      "Print Speed": "Up to 33.0 ppm (Black)",
      "Connectivity": "USB 2.0, Wi-Fi",
      "Mobile Printing": "Epson iPrint, Email Print"
    },
    imageUrl: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782652749/h4uua6utm7ss3xadh3i0.jpg",
    isAvailable: true,
    seo: {
      title: "Epson EcoTank L3250 Ink Tank Printer | Buy in Mumbai",
      description: "Buy the Epson EcoTank L3250 Wi-Fi ink tank printer in Mumbai. ₹13,000–₹16,000. Ultra-low cost per page, wireless printing, 4,500 pages per black bottle. Ideal for offices & schools."
    }
  },
  {
    id: "prod-4",
    slug: "canon-imageclass-mf244dw",
    name: "Canon imageCLASS MF244dw",
    categoryId: "cat-laser",
    shortDescription: "Wireless Monochrome Laser MFP with automatic duplex printing.",
    detailedDescription: "The Canon imageCLASS MF244dw is a feature-rich wireless multifunction laser printer built for small to medium businesses that demand fast, high-quality output and professional document handling. Its automatic duplex (double-sided) printing capability — a feature often reserved for higher-end models — reduces paper consumption by up to 50%, delivering both environmental and cost benefits. Printing at up to 28 pages per minute with a true 1200 x 1200 dpi resolution, the MF244dw produces sharp, professional-grade text and graphics. Wireless connectivity allows the device to be shared seamlessly across all office computers and mobile devices without any cabling, while Canon's UFRII LT driver ensures compatibility with all standard document management workflows.",
    features: ["Automatic Duplex Printing", "Wireless & USB Connectivity", "28 ppm Print Speed", "1200 x 1200 dpi resolution", "250-sheet paper cassette"],
    useCases: [
      {
        title: "Corporate Office Document Printing",
        description: "The MF244dw's auto-duplex capability makes it the smart choice for corporate offices producing large volumes of internal reports, meeting packs, and regulatory submissions where paper cost and professional presentation are both priorities."
      },
      {
        title: "Legal & Compliance Departments",
        description: "Law firms, CA offices, and compliance teams dealing with lengthy multi-page documents — contracts, affidavits, tax filings — benefit enormously from the MF244dw's auto-duplex feature, as double-sided legal documents are a mandatory format in many proceedings."
      },
      {
        title: "Networked Office Environments",
        description: "The wireless capability of the MF244dw allows it to serve as a shared network printer for an entire floor of staff without the cost of a separate print server, making it a highly economical choice for growing teams."
      }
    ],
    specifications: {
      "Functions": "Print, Copy, Scan",
      "Print Speed": "Up to 28 ppm",
      "Duplex": "Automatic (Standard)",
      "Resolution": "Up to 1200 x 1200 dpi",
      "Paper Capacity": "250-sheet cassette"
    },
    imageUrl: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782652385/ju8fgsxo0ijagsxl7c9t.jpg",
    isAvailable: true,
    seo: {
      title: "Canon imageCLASS MF244dw Laser Printer | Buy in Mumbai",
      description: "Buy the Canon imageCLASS MF244dw wireless duplex laser printer in Mumbai. ₹22,000–₹26,000. Auto duplex, 28 ppm, 1200 dpi. Ideal for corporate offices & legal departments."
    }
  },
  {
    id: "prod-5",
    slug: "tvs-msp-250-champion",
    name: "TVS MSP 250 Champion",
    categoryId: "cat-dotmatrix",
    shortDescription: "Heavy duty 80 column dotmatrix printer built for Indian commercial conditions.",
    detailedDescription: "The TVS MSP 250 Champion is India's most trusted dotmatrix printer for rugged commercial environments. Engineered and tested specifically for Indian operating conditions — including wide voltage fluctuations, high ambient temperatures, and dusty workshop environments — the MSP 250 Champion delivers uninterrupted high volume printing at 450 characters per second. Its 9-pin print head with an 80-column print width handles standard A4 paper, multi-part stationery, and continuous roll paper with equal reliability. The MSP 250 Champion's ink bank technology delivers a 40 million character ribbon life — approximately 3–4 times the life of standard dotmatrix ribbons — dramatically reducing consumable costs over a 5-year operational lifespan. It is the preferred choice for Indian retail, pharmaceutical, and FMCG distribution operations.",
    features: ["Voltage fluctuation tolerance", "450 cps print speed", "Ink bank technology (40M char life)", "1 Original + 3 Copies", "Dustproof mechanism"],
    useCases: [
      {
        title: "FMCG & Pharmaceutical Distribution",
        description: "FMCG and pharmaceutical distributors handling multi-copy invoices in high-temperature warehouses need a printer that will not jam, overheat, or require constant maintenance. The MSP 250 Champion has been the industry's answer to this requirement for over two decades."
      },
      {
        title: "Government & Statutory Compliance",
        description: "Many government departments and statutory bodies still require physical carbon-copy impressions for official documents. The MSP 250 Champion's multi-part printing capability — supporting 1 original and 3 carbon copies simultaneously — fulfils this requirement reliably."
      },
      {
        title: "Workshop & Industrial Environments",
        description: "In dusty automotive workshops, manufacturing floors, and industrial units, the MSP 250 Champion's sealed dustproof mechanism and wide voltage tolerance make it the only printer category that can operate reliably without constant cleaning and maintenance."
      }
    ],
    specifications: {
      "Print Head": "9 Wire",
      "Print Width": "80 Columns",
      "Print Speed": "450 cps",
      "Copy Capability": "1 Original + 3 Copies",
      "Ribbon Life": "40 Million Characters"
    },
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    isAvailable: true,
    seo: {
      title: "TVS MSP 250 Champion Dotmatrix Printer | Buy in Mumbai",
      description: "Buy the TVS MSP 250 Champion heavy-duty dotmatrix printer in Mumbai. ₹9,000–₹11,000. 450 cps, 40M char ribbon life. Ideal for FMCG distribution, pharma & industrial environments."
    }
  },

  {
    id: "prod-7",
    slug: "hp-laserjet-pro-mfp-m126nw-plus",
    name: "HP LaserJet Pro MFP M126nw plus",
    categoryId: "cat-laser",
    shortDescription: "Multifunction monochrome laser printer with Print, scan and copy functions.",
    detailedDescription: "The HP LaserJet Pro MFP M126nw plus is a compact and efficient monochrome laser printer designed for smaller teams of up to 5 users. It handles print, scan, and copy tasks effortlessly with speeds up to 20 pages per minute (A4) and a sharp 600 x 600 dpi resolution. Offering robust connectivity with Ethernet, Wi-Fi 802.11b/g/n, and seamless mobile printing via Apple AirPrint and the HP app, it adapts easily to dynamic office setups. It has a monthly duty cycle of up to 8,000 pages, ensuring reliable daily performance.",
    features: ["Print, scan and copy", "Up to 20 ppm print speed", "Wi-Fi, Ethernet & USB connectivity", "Mobile printing (AirPrint, Mopria)", "Up to 8,000 pages monthly duty cycle"],
    useCases: [
      {
        title: "Small Office Teams",
        description: "Perfect for teams of 1-5 users who need a shared, reliable multifunction device with seamless wireless and network connectivity."
      },
      {
        title: "Administrative Workflows",
        description: "Ideal for printing high-volume monochrome documents like invoices, ledgers, and reports with quick print speeds of 20 ppm."
      }
    ],
    specifications: {
      "Functions": "Print, scan and copy",
      "Print Speed": "Up to 20 ppm (A4)",
      "Resolution": "Up to 600 x 600 dpi",
      "Connectivity": "USB 2.0, Ethernet 10/100, Wi-Fi 802.11b/g/n",
      "Memory": "128 MB",
      "Duty Cycle": "Up to 8,000 pages/month"
    },
    imageUrl: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782647718/rmu8z1wduimmaza7odva.avif",
    isAvailable: true,
    seo: {
      title: "HP LaserJet Pro MFP M126nw plus | Buy in Mumbai",
      description: "Buy the HP LaserJet Pro MFP M126nw plus wireless multifunction laser printer in Mumbai. Print, scan, copy with Wi-Fi & Ethernet connectivity."
    }
  },
  {
    id: "prod-8",
    slug: "hp-laser-mfp-1188nw",
    name: "HP Printer Laser MFP 1188NW",
    categoryId: "cat-laser",
    shortDescription: "Wi-Fi enabled multifunction laser printer with Print, Scan, and Copy capabilities.",
    detailedDescription: "The HP Printer Laser MFP 1188NW is designed to deliver fast and efficient performance in a compact, space-saving design. With seamless wireless networking and full mobile printing support, this multifunction printer makes it incredibly easy to print, scan, and copy from virtually anywhere in your workspace. Built for reliability, it provides high-quality monochrome prints ideal for small businesses and home offices seeking professional-grade output.",
    features: ["Print, Scan, Copy", "Wi-Fi Enabled & Wireless Networking", "Mobile Printing Support", "Fast & Efficient Performance", "Compact & Space Saving Design"],
    useCases: [
      {
        title: "Small Business & Home Office",
        description: "Perfect for compact workspaces requiring reliable, high-quality printing, scanning, and copying without the clutter of excessive cables."
      },
      {
        title: "Wireless Workflows",
        description: "Ideal for teams that rely on mobile devices and laptops, allowing seamless document management through robust wireless networking."
      }
    ],
    specifications: {
      "Functions": "Print, Scan, Copy",
      "Networking": "Wireless Networking",
      "Mobile Printing": "Supported",
      "Design": "Compact & Space Saving"
    },
    imageUrl: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782648331/zfevpcqdgzulzq6mupa5.png",
    isAvailable: true,
    seo: {
      title: "HP Printer Laser MFP 1188NW | Buy in Mumbai",
      description: "Buy the HP Printer Laser MFP 1188NW wireless multifunction laser printer in Mumbai. Compact design with print, scan, copy & mobile printing support."
    }
  },
  {
    id: "prod-9",
    slug: "canon-pixma-gm4070",
    name: "Canon PIXMA GM4070",
    categoryId: "cat-inktank",
    shortDescription: "High-volume monochrome ink tank printer with auto duplex printing and ADF.",
    detailedDescription: "The Canon PIXMA GM4070 is a dedicated monochrome ink tank printer engineered for businesses that print in high volumes. With its high page yield ink bottles, it offers incredibly low printing costs. It features automatic double-sided printing and a 35-sheet Auto Document Feeder (ADF) for efficient batch scanning and copying. It also supports seamless wireless connectivity and mobile printing, making it a perfect fit for modern offices seeking reliability and cost-efficiency.",
    features: ["Print, Scan, Copy", "Auto Duplex Printing", "35-sheet Auto Document Feeder (ADF)", "High Page Yield Ink Bottles", "Wireless & Mobile Printing"],
    useCases: [
      {
        title: "High-Volume Monochrome Printing",
        description: "Ideal for offices that primarily need black-and-white documents like invoices, reports, and internal memos at a very low cost per page."
      }
    ],
    specifications: {
      "Functions": "Print, Scan, Copy",
      "Printer Type": "Monochrome Ink Tank",
      "Duplex": "Automatic",
      "Connectivity": "Wi-Fi, Ethernet, USB 2.0"
    },
    imageUrl: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782652570/sc5ns3e6jdkd9tjnrgsl.png",
    isAvailable: true,
    seo: {
      title: "Canon PIXMA GM4070 Monochrome Ink Tank Printer | Buy in Mumbai",
      description: "Buy the Canon PIXMA GM4070 high-volume monochrome ink tank printer in Mumbai. Features auto duplex, ADF, and wireless connectivity."
    }
  },
  {
    id: "prod-10",
    slug: "canon-maxify-gx2070",
    name: "Canon MAXIFY GX2070",
    categoryId: "cat-inktank",
    shortDescription: "Compact MegaTank wireless all-in-one printer for small businesses.",
    detailedDescription: "The Canon MAXIFY GX2070 is a compact yet powerful MegaTank all-in-one business printer. Designed to handle high-volume color printing, it uses pigment-based inks to deliver sharp, water-resistant, and marker-resistant text and vibrant graphics. It offers high-speed printing, a 35-sheet ADF, and seamless wireless connectivity. With its ultra-low running costs, it's the ideal color printing solution for small to medium businesses that demand professional quality without compromise.",
    features: ["Print, Scan, Copy", "High-Speed Color Printing", "Pigment-Based Inks for Water Resistance", "35-Sheet ADF", "Ultra-Low Running Costs"],
    useCases: [
      {
        title: "Small Business Color Printing",
        description: "Perfect for producing professional-quality color presentations, flyers, and proposals in-house with exceptional cost efficiency."
      }
    ],
    specifications: {
      "Functions": "Print, Scan, Copy",
      "Printer Type": "Color MegaTank",
      "Ink Type": "Pigment Ink (All colors)",
      "Connectivity": "Wi-Fi, USB"
    },
    imageUrl: "https://res.cloudinary.com/dl4ohcjuk/image/upload/f_auto,q_auto/v1782652672/tpxb0ciry9dkb048pzsl.png",
    isAvailable: true,
    seo: {
      title: "Canon MAXIFY GX2070 MegaTank Printer | Buy in Mumbai",
      description: "Buy the Canon MAXIFY GX2070 compact MegaTank wireless all-in-one printer in Mumbai. High-volume color printing with pigment inks."
    }
  }
];
