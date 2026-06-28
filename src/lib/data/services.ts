import { Service } from '@/types';

export const services: Service[] = [
  {
    id: "srv-1",
    slug: "dotmatrix-head-repair",
    name: "Dotmatrix Printhead Repair",
    categoryId: "scat-repair",
    shortDescription: "Component-level repair for all major dotmatrix printheads with genuine parts.",
    detailedDescription: "When a dotmatrix printhead starts dropping pins or printing with gaps, most vendors will just tell you to buy a new one. That's usually terrible advice. These printheads are built like tanks, and in 90% of cases, we can repair them down to the component level for a fraction of the replacement cost. We literally open up the printhead, diagnose the exact burnt pin coil or worn wire, and replace it using genuine OEM parts sourced directly from Japan and Taiwan. We don't guess—we test. Every head we rebuild goes through a brutal 100-page continuous print test before we even think about handing it back to you. We've been doing this for decades, which is why we confidently back our repairs.",
    startingPrice: "₹800",
    features: ["Genuine OEM parts", "24hr turnaround", "On-site available", "10-page burn-in test", "All 9-pin and 24-pin models"],
    supportedBrands: ["Epson LQ Series", "TVS MSP Series", "Olivetti PR Series", "Star NX Series", "Citizen iDP Series", "Wipro Series"],
    faqs: [
      {
        question: "How do I know if my dotmatrix printhead needs repair vs. replacement?",
        answer: "If your printer is producing faint horizontal lines, missing dots, or skipping entire rows of characters, the printhead is almost certainly repairable. A full replacement is only necessary when the carriage body itself is physically broken. Our free diagnostic will confirm the issue within 30 minutes."
      },
      {
        question: "How long does dotmatrix printhead repair take?",
        answer: "Standard repairs are completed within 24 hours of receiving the unit. For on-site repairs in Mumbai, our technician can arrive within 4 hours of booking and typically resolves the issue in a single visit."
      },
      {
        question: "Do you carry parts for older Epson models?",
        answer: "Yes. We maintain one of Mumbai's largest inventories of legacy Epson LQ parts, including the LQ-300+, LQ-1170, and LQ-2090 series. If you have a particularly rare model, contact us and we will locate the component within 48 hours through our international sourcing network."
      },
      {
        question: "What is the warranty on a repaired printhead?",
        answer: "All component-level repairs are covered by a 3-month parts-and-labour warranty. If the same fault recurs within this period, we will fix it free of charge."
      }
    ],
    seo: {
      title: "Dotmatrix Printhead Repair Service",
      description: "Expert component-level dotmatrix printhead repair in Mumbai. 24hr turnaround, genuine OEM parts. Covers Epson LQ, TVS MSP & all major brands."
    }
  },
  {
    id: "srv-2",
    slug: "laser-printer-servicing",
    name: "Laser Printer General Servicing",
    categoryId: "scat-repair",
    shortDescription: "Full interior cleaning, fuser check, roller replacement, and print quality testing.",
    detailedDescription: "People buy a laser printer, plug it in, and ignore it until it starts printing with thick black streaks or making grinding noises. If you wait that long, you're going to pay for an expensive fuser or drum replacement. Laser printers generate immense heat and static, which sucks in paper dust. That dust mixes with stray toner to form an abrasive paste that grinds down your gears. Our annual servicing strips the machine down. We vacuum the interior, clean the corona wires, deglaze the pickup rollers, and inspect the fuser pressure rollers. We service every major brand across Mumbai. It's basic preventive maintenance—you spend a little on servicing to avoid spending a fortune on parts.",
    startingPrice: "₹900",
    features: ["Interior cleaning", "Fuser inspection & cleaning", "Roller check & replacement", "Test print certification", "Formal service report"],
    supportedBrands: ["HP LaserJet Series", "Canon imageCLASS Series", "Xerox WorkCentre", "Ricoh SP Series", "Samsung Xpress"],
    faqs: [
      {
        question: "How often should a laser printer be serviced?",
        answer: "For standard office use (500–1000 pages per month), an annual service is sufficient. For high volume environments printing over 5,000 pages per month, we recommend a 6-month service cycle to prevent toner buildup from causing drum and fuser damage."
      },
      {
        question: "My laser printer has vertical black streaks. What causes this?",
        answer: "Vertical black streaks are almost always caused by a damaged or dirty drum unit, or a scratched fuser pressure roller. This is fully resolved during our standard servicing. Do not attempt to clean the drum yourself with any abrasive material."
      },
      {
        question: "Do you service colour laser printers?",
        answer: "Yes. We service both monochrome and full-colour laser printers, including all major brands. Colour laser servicing includes individual inspection of all four toner cartridge bays and the colour calibration module."
      }
    ],
    seo: {
      title: "Laser Printer General Servicing",
      description: "Professional laser printer servicing in Mumbai. Interior cleaning, fuser check, roller replacement, and test-print certification. HP, Canon, Brother & all major brands covered."
    }
  },
  {
    id: "srv-3",
    slug: "corporate-amc",
    name: "Corporate Printer AMC",
    categoryId: "scat-amc",
    shortDescription: "Annual contracts for worry-free printer uptime across your entire office fleet.",
    detailedDescription: "I talk to finance managers all the time who think skipping an AMC saves money. Then an invoicing printer goes down on the last day of the month, dispatch halts, and suddenly they're panic-calling technicians who overcharge for emergency visits. Our Corporate AMC is designed to stop breakdowns before they happen. You pay a predictable annual fee, and we take complete ownership of your printer fleet. We do regular preventive maintenance visits so machines don't fail when you need them most. If something does break, we guarantee a technician at your desk within 4 hours. We offer both Comprehensive (parts included) and Non-Comprehensive (labour only) plans, covering everything from 5 desktop inkjets to 500-machine enterprise networks.",
    startingPrice: "₹2,500/year",
    features: ["Comprehensive & non-comprehensive options", "Monthly preventive visits", "5-hour breakdown SLA", "All printer types covered", "Detailed maintenance records", "Priority technician access"],
    supportedBrands: ["All Epson Models", "HP LaserJet & DeskJet", "Canon imageRUNNER & imageCLASS", "Brother HL & MFC", "TVS & Wipro Dotmatrix", "Ricoh & Xerox"],
    faqs: [
      {
        question: "What is the difference between a Comprehensive and Non-Comprehensive printer AMC?",
        answer: "A Comprehensive AMC covers both the labour cost and the cost of all replacement parts (excluding consumables like toner and ribbons) under a single flat annual fee. A Non-Comprehensive AMC covers all labour costs, and any replacement parts are billed at our subsidised cost-price rate — typically 30–40% below market retail."
      },
      {
        question: "What is your guaranteed response time for AMC breakdown calls?",
        answer: "All Corporate AMC clients are guaranteed a 5-hour technician response SLA for any printer breakdown. For critical infrastructure, we can negotiate a 2-hour SLA for an additional premium."
      },
      {
        question: "Can you cover both dotmatrix and laser printers under a single AMC?",
        answer: "Absolutely. Our AMC contracts are fleet-wide and brand-agnostic. We can cover your entire printer infrastructure — dotmatrix invoicing printers, laser network printers, and reception ink tanks — under one consolidated contract and one single annual invoice."
      },
      {
        question: "How many printers do you need to offer AMC pricing?",
        answer: "We offer AMC contracts starting from as few as 3 printers. The larger your fleet, the more aggressively we can price the contract. Contact us for a custom fleet quotation."
      }
    ],
    seo: {
      title: "Corporate Printer AMC in Mumbai",
      description: "Printer Annual Maintenance Contracts for Mumbai businesses. Comprehensive & non-comprehensive options. 5-hour SLA, all brands covered. Fleets from 3 to 500+ printers."
    }
  },
  {
    id: "srv-4",
    slug: "inktank-deep-cleaning",
    name: "Ink Tank Deep Cleaning",
    categoryId: "scat-repair",
    shortDescription: "Full nozzle flush, head alignment, and clog removal for Epson & Canon ink tanks.",
    detailedDescription: "If your Epson EcoTank or Canon G-Series is printing pages with horizontal white lines, the built-in 'head cleaning' button isn't going to save you. Pressing it over and over just wastes expensive ink and fills up your waste pad. The issue is dried ink physically blocking the microscopic nozzles in the printhead. We perform a manual, chemical flush using specialized solutions that break down the clogs without stripping the delicate internal lining of the head. It's a meticulous process. After the flush, we realign the head and recalibrate the colours to get the print quality back to factory standards. If you've been using cheap compatible inks or left the printer off for months, this is exactly what you need.",
    startingPrice: "₹950",
    features: ["Professional nozzle flush", "All colour channels checked", "Head alignment", "Colour calibration", "Same-day service", "Post-clean quality test"],
    supportedBrands: ["Epson EcoTank L Series", "Epson L3110 / L3150 / L3250", "Canon PIXMA G Series", "Canon G2010 / G3010", "HP DeskJet GT Series", "Brother InkBenefit Series"],
    faqs: [
      {
        question: "My Epson EcoTank is printing with horizontal white lines. Can this be fixed?",
        answer: "Yes. Horizontal white lines are the most common symptom of partially clogged nozzles, and this is almost always fully resolvable with our professional deep cleaning service. The built-in head cleaning utility in most printers is not powerful enough to clear severe clogs — our manual flush process applies significantly more pressure and cleaning solution than the automatic utility."
      },
      {
        question: "Will the deep cleaning damage my printhead?",
        answer: "No. Our cleaning solution is specifically formulated to be safe for piezoelectric print heads used in all Epson EcoTank and Canon PIXMA G-series printers. We never use harsh solvents that could damage the delicate nozzle plate."
      },
      {
        question: "How long does the ink tank cleaning service take?",
        answer: "The full deep cleaning procedure, including the flush cycles, dry time, alignment, and final test print, takes approximately 45 minutes to 2 hours depending on the severity of the clog. We offer same-day service for drop-in units at our Mumbai workshop."
      }
    ],
    seo: {
      title: "Ink Tank Printer Deep Cleaning Service",
      description: "Professional ink tank printer deep cleaning in Mumbai. Nozzle flush, head alignment & colour calibration for Epson EcoTank, Canon G-Series & all major ink tank models."
    }
  },
  {
    id: "srv-5",
    slug: "on-site-emergency-repair",
    name: "On-Site Emergency Repair",
    categoryId: "scat-onsite",
    shortDescription: "Same-day technician dispatch across Mumbai for critical printer breakdowns.",
    detailedDescription: "Mumbai traffic is a nightmare. You don't want to strap a 25-kilogram office printer to a scooter and drag it to a repair shop while your staff can't print invoices. That's why we built our on-site emergency repair service. When you call us, we ask for a quick video of the error on WhatsApp. This lets us diagnose the issue remotely so our technician arrives carrying the exact parts needed to fix it on the spot. Most common faults—like snapped belts, worn fuser rollers, or jammed sensors—are fixed right at your desk in under an hour. Best of all, we run a strict no-fix, no-fee policy. If we can't solve the problem, you don't pay for the visit.",
    startingPrice: "₹1,000 + parts",
    features: ["5-hour dispatch SLA", "Mumbai-wide coverage", "Parts carried on-site", "No fix, no fee guarantee", "All printer types", "Same-day resolution in most cases"],
    supportedBrands: ["Epson All Models", "HP All Models", "Canon All Models", "Brother All Models", "TVS & Wipro Dotmatrix", "Ricoh, Xerox & Kyocera"],
    faqs: [
      {
        question: "Which areas of Mumbai do you cover for on-site printer repair?",
        answer: "We cover the full Mumbai Metropolitan Region, including South Mumbai (Nariman Point, Fort, Churchgate), Central Mumbai (Dadar, Parel, Worli), the Western Line (Bandra to Virar), the Eastern Suburbs (Kurla, Ghatkopar, Mulund), Thane, and Navi Mumbai. Response times may vary by location — our Mulund base allows same-hour response for most of Central and Eastern Mumbai."
      },
      {
        question: "What if my printer cannot be fixed on-site?",
        answer: "We operate a strict no-fix, no-fee policy for on-site visits. If our technician determines the repair requires a part that must be ordered, or that the machine needs to be brought back to our workshop, you will only be charged for parts — never for failed labour. We will also arrange a complimentary pickup of the machine."
      },
      {
        question: "How quickly can you dispatch a technician?",
        answer: "Our standard SLA is 4 hours from the time of booking. In most cases, for locations within Mulund, Thane, and Central Mumbai, we are able to dispatch within 1–2 hours. Call us directly on WhatsApp for the fastest response."
      }
    ],
    seo: {
      title: "On-Site Emergency Printer Repair Mumbai",
      description: "Same-day on-site printer repair across Mumbai. 5-hour dispatch SLA, no fix no fee guarantee. Covers Mulund, Thane, South Mumbai, Western & Eastern suburbs."
    }
  }
];
